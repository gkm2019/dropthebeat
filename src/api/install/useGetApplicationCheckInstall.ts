import { useQuery } from "@tanstack/react-query";
import { getApplicationCheckInstall, getApplicationInstall } from ".";

const useGetApplicationCheckInstall = (script: string) => {
  return useQuery(["application-install-check", script], () => {
    return getApplicationCheckInstall(script);
  });
};

export default useGetApplicationCheckInstall;
