import { useQuery } from "@tanstack/react-query";
import { getApplicationCheckInstall, getApplicationInstall } from ".";

const useGetApplicationCheckInstall = (name: string) => {
  return useQuery(["application-install-check", name], () => {
    return getApplicationCheckInstall(name);
  });
};

export default useGetApplicationCheckInstall;
