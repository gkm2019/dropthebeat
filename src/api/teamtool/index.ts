import { AxiosResponse } from "axios";
import homeDevApi from "../xhr";

export const getTeamtoolList = async () => {
  const { data }: AxiosResponse = await homeDevApi.get(
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
