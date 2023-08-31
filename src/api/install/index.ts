import { AxiosResponse } from "axios";
import homeDevApi from "../xhr";
import { ApplicationInstallRequest } from "@/types/api/install";

export const getApplicationInstall = async (name: string) => {
  const { data }: AxiosResponse = await homeDevApi.get(
    `/v1/application/install?name=${name}`
  );
  return data;
};

export const getApplicationCheckInstall = async (name: string) => {
  const { data }: AxiosResponse<boolean> = await homeDevApi.get(
    `/v1/application/check?name=${name}`
  );
  return data;
};
