import { AxiosResponse } from "axios";
import homeDevApi from "../xhr";

const getTestInfo = async () => {
  const { data }: AxiosResponse<boolean> = await homeDevApi.get(
    `/application/check?name=lguctl`
  );
  return data;
};

export default getTestInfo;
