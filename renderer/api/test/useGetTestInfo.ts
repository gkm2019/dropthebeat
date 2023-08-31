import { useQuery } from "@tanstack/react-query"
import getTestInfo from "."

const useGetTestInfo = () => {
  return useQuery(["testInfo"], () => {
    return getTestInfo();
  });
}

export default useGetTestInfo;