import { ApplicationType } from "@/types/application";

export const MOCK_TEAM_LIST = [
  {
    id: "1",
    name: "DAX TF",
  },
  {
    id: "2",
    name: "UCube Devops",
  },
  {
    id: "3",
    name: "디지털통신FE개발팀",
  },
  {
    id: "4",
    name: "디지털통신BE개발팀",
  },
];

export const MOCK_DATA: ApplicationType = {
  id: "0",
  image: "",
  name: "Github",
  version: "0.0.2",
  description: "Github 설명",
  type: "auto",
  script: "https://github.com",
};

export const MOCK_APP_LIST = new Array(10).fill(MOCK_DATA);

export const MOCK_LINK_LIST = [
  'https://github.com',
  'https://naver.com',
  'https://google.com',
]