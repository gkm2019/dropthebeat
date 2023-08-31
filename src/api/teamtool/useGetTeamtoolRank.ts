import { useQuery } from "@tanstack/react-query";
import { getTeamtoolRank } from ".";

const useGetTeamtoolList = () => {
    return useQuery(["teamtool-list"], () => {
        return getTeamtoolRank();
    });
};

export default useGetTeamtoolList;
