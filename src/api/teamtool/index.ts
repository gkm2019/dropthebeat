import { AxiosResponse } from "axios";
import homeDevApi from "../xhr";
import { GetTeamToolResponse } from "@/types/api/teamTool";

export const getTeamtoolList = async () => {
  const { data }: AxiosResponse<GetTeamToolResponse[]> = await homeDevApi.get(
    `/v1/teamtool/list`
  );
  return data;
};

export const getTeamtoolById = async (id: string) => {
  const { data }: AxiosResponse<boolean> = await homeDevApi.get(
    `/v1/teamtool?id=${id}`
  );
  return data;
};
