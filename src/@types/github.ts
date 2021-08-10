import { Maybe, PullRequestEdge } from '@octokit/graphql-schema';

export type { Repository } from '@octokit/graphql-schema';
export type PullRequestEdges = Maybe<Maybe<PullRequestEdge>[]>;
