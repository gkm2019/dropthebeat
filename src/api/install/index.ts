import { AxiosResponse } from "axios";
import homeDevApi from "../xhr";
import { ApplicationInstallRequest } from "@/types/api/install";

export const getApplicationInstall = async (name: string, arch: string) => {
  const { data }: AxiosResponse = await homeDevApi.get(
    `/v1/application/install?name=${name}&arch=${arch}`,
    {
      timeout: 1000 * 60 * 5,
    }
  );
  return data;
};

export const getApplicationCheckInstall = async (script: string) => {
  const { data }: AxiosResponse<boolean> = await homeDevApi.get(
    `/v1/application/check?name=${script}`
  );
  return data;
};
