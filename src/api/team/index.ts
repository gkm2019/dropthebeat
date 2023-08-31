import { AxiosResponse } from "axios";
import homeDevApi from "../xhr";
import { GetTeamToolResponse } from "@/types/api/teamTool";

const getTeamToolInfo = async (teamId: string) => {
  const { data }: AxiosResponse<GetTeamToolResponse> = await homeDevApi.get(
    `/v1/team?id=${teamId}`
  );
  return data;
};

export default getTeamToolInfo;
