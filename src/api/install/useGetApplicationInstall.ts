import { useQuery } from "@tanstack/react-query";
import { getApplicationInstall } from ".";

const useGetApplicationInstall = (script: string, arch: string) => {
  return useQuery(["application-install", script], () => {
    return getApplicationInstall(script, arch);
  });
};

export default useGetApplicationInstall;
