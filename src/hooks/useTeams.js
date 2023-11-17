import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useTeams = (query) =>
  useQuery({
    queryKey: ["teams", query],
    staleTime: 1 * 60 * 1000,
    keepPreviousData: true,
    queryFn: () =>
      axios
        .get(
          "https://my-json-server.typicode.com/FahimeKhandan/zacoustic/teams?id=1",
          {
            params: {},
          }
        )
        .then((res) => res.data),
  });

export default useTeams;
