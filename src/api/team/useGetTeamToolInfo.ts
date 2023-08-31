import { useQuery } from "@tanstack/react-query";
import getTeamToolInfo from ".";

const useGetTeamToolInfo = (teamId: string) => {
  return useQuery(
    ["team-tool-info", teamId],
    () => {
      return getTeamToolInfo(teamId);
    },
    {
      enabled: !!teamId,
      cacheTime: 0,
    }
  );
};

export default useGetTeamToolInfo;
