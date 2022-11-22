import type { Maybe, PullRequestEdge } from '@octokit/graphql-schema';

export type { Repository } from '@octokit/graphql-schema';
export type PullRequestEdges = Maybe<Array<Maybe<PullRequestEdge>>>;
