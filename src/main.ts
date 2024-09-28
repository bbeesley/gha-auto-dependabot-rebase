import { getInput, setFailed } from '@actions/core';
import * as github from '@actions/github';
import type { GitHub } from '@actions/github/lib/utils.js';
import {
  RequestRebase,
  RequestRecreate,
  GetPullRequests,
  type PullRequestEdge,
  type Repository,
  type Maybe,
} from './generated/graphql.js';

async function getPullRequests(
  ok: InstanceType<typeof GitHub>
): Promise<Array<Maybe<PullRequestEdge>>> {
  const { owner, repo } = github.context.repo;
  const query = GetPullRequests.loc?.source.body;
  const response: { repository: Repository } = await ok.graphql({
    query,
    owner,
    repo,
  });
  console.info(
    `Found pull requests: ${JSON.stringify(
      response.repository.pullRequests.edges,
      null,
      2
    )}`
  );
  return response.repository.pullRequests.edges ?? [];
}

function isDependabotPullRequest(pr: Maybe<PullRequestEdge>): boolean {
  return pr?.node?.author?.login === 'dependabot';
}

async function addCommentToPullRequest(
  ok: InstanceType<typeof GitHub>,
  pr: Maybe<PullRequestEdge>
): Promise<void> {
  const task = getInput('task');
  const query =
    task === 'rebase'
      ? RequestRebase.loc?.source.body
      : RequestRecreate.loc?.source.body;
  if (pr?.node?.id && isDependabotPullRequest(pr)) {
    console.info(
      `Requesting rebase of PR #${pr.node.number} '${pr.node.title}'`
    );
    await ok.graphql({
      query,
      pullRequestId: pr.node.id,
    });
  }
}

async function main(): Promise<void> {
  try {
    const ok = github.getOctokit(
      // eslint-disable-next-line n/prefer-global/process
      process.env.GITHUB_TOKEN ?? process.env.GH_TOKEN!
    );
    const prs = await getPullRequests(ok);
    if (prs) {
      await Promise.all(prs.map(async (pr) => addCommentToPullRequest(ok, pr)));
    }
  } catch (error) {
    console.error(error);
    setFailed((error as Error).message);
  }
}

// eslint-disable-next-line unicorn/prefer-top-level-await
void main();
