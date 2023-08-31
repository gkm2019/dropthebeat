import { useQuery } from "@tanstack/react-query";
import { getApplicationInstall } from ".";

const useGetApplicationInstall = (name: string) => {
  return useQuery(["application-install", name], () => {
    return getApplicationInstall(name);
  });
};

export default useGetApplicationInstall;
