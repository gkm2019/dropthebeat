import { useQuery } from "@tanstack/react-query";
import { getTeamList } from ".";

const useGetTeamList = () => {
  return useQuery(["team-list"], () => {
    return getTeamList();
  });
};

export default useGetTeamList;
