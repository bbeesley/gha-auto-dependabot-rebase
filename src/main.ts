import { getInput, setFailed } from '@actions/core';
import * as github from '@actions/github';
import type { Octokit } from '@octokit/core';
import type { Maybe, PullRequestEdge } from '@octokit/graphql-schema';

import type { PullRequestEdges } from './@types/index.js';
import {
  RequestRebase,
  RequestRecreate,
  GetPullRequests,
  type Repository,
} from './generated/graphql';

async function getPullRequests(ok: Octokit): Promise<PullRequestEdges> {
  const { owner, repo } = github.context.repo;
  const query = GetPullRequests.loc!.source.body;
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
  ok: Octokit,
  pr: Maybe<PullRequestEdge>
): Promise<void> {
  const task = getInput('task');
  const query =
    task === 'rebase'
      ? RequestRebase.loc!.source.body
      : RequestRecreate.loc!.source.body;
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
    setFailed(error.message);
  }
}

// eslint-disable-next-line unicorn/prefer-top-level-await
void main();
