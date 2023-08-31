import { useQuery } from "@tanstack/react-query";
import { getTeamtoolList } from ".";

const useGetTeamtoolList = () => {
    return useQuery(["teamtool-list"], () => {
        return getTeamtoolList();
    });
};

export default useGetTeamtoolList;
