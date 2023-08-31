import { useQuery } from "@tanstack/react-query"
import getTeamToolInfo from ".";


const useGetTeamToolInfo = (teamId: string) => {
  return useQuery(["teamToolInfo"], () => {
    return getTeamToolInfo(teamId);
  });
}

export default useGetTeamToolInfo;