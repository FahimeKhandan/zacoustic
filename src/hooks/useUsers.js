import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useUsers = (query) =>
  useQuery({
    queryKey: ["posts", query],
    staleTime: 1 * 60 * 1000,
    keepPreviousData: true,
    queryFn: () =>
      axios
        .get(
          "https://my-json-server.typicode.com/FahimeKhandan/zacoustic/users",
          {
            params: {},
          }
        )
        .then((res) => res.data),
  });

export default useUsers;
