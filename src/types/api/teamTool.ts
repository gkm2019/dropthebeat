import { ApplicationType } from "../application";

export interface GithubURL {
  name: string;
  url: string;
}

export interface GetTeamToolResponse {
  id: string;
  name: string;
  confluenceURL?: string;
  githubURLs?: GithubURL[];
  teamtoolList: ApplicationType[];
}

export type TeamToolType = 'auto' | 'manual' | 'link';
