import { getInput, setFailed } from '@actions/core';
import * as github from '@actions/github';
import { Octokit } from '@octokit/core';
import { Maybe, PullRequestEdge } from '@octokit/graphql-schema';

import { PullRequestEdges } from './@types';
import {
  AddCommentToPr,
  GetPullRequests,
  Repository,
} from './generated/graphql';

async function getPullRequests(ok: Octokit): Promise<PullRequestEdges> {
  const { owner, repo } = github.context.repo;
  const query = GetPullRequests.loc!.source!.body;
  const res: { repository: Repository } = await ok.graphql({
    query,
    owner,
    repo,
  });
  console.info(
    `Found pull requests: ${JSON.stringify(
      res.repository.pullRequests.edges,
      null,
      2
    )}`
  );
  return res.repository.pullRequests.edges ?? [];
}

function isDependabotPullRequest(pr: Maybe<PullRequestEdge>): boolean {
  return pr?.node?.id && pr?.node?.author?.login === 'dependabot';
}

async function addCommentToPullRequest(
  ok: Octokit,
  pr: Maybe<PullRequestEdge>
): Promise<void> {
  const query = AddCommentToPr.loc!.source!.body;
  if (isDependabotPullRequest(pr)) {
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
      process.env.GITHUB_TOKEN ?? (process.env.GH_TOKEN as string)
    );
    const oneAtATime = !!JSON.parse(getInput('one-at-a-time') ?? null);
    console.info(
      `Parsed input: oneAtATime = ${oneAtATime}`
    )

    let prs = await getPullRequests(ok);
    prs = prs.sorted(pr => pr.number)
    prs = await Promise.all(prs.filter((pr) => isDependabotPullRequest(pr)));
    if (!prs) {
      return
    }

    if (oneAtATime) {
      prs = prs.slice(0, 1)
    }
    await Promise.all(prs.map((pr) => addCommentToPullRequest(ok, pr)));
  } catch (error) {
    console.error(error);
    setFailed(error.message);
  }
}

main();
