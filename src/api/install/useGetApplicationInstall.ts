import { useQuery } from "@tanstack/react-query";
import { getApplicationInstall } from ".";
import { ApplicationInstallRequest } from "@/types/api/install";

const useGetApplicationInstall = (name: string) => {
  return useQuery(["application-install", name], () => {
    return getApplicationInstall(name);
  });
};

export default useGetApplicationInstall;
