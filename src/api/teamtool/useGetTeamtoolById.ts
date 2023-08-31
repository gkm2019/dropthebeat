import { useQuery } from "@tanstack/react-query";
import { getTeamtoolById } from ".";

const useGetTeamtoolRank = (id: string) => {
    return useQuery(["teamtool-id", id], () => {
        return getTeamtoolById(id);
    });
};

export default useGetTeamtoolRank;
