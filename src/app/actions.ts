import { useQuery } from "react-query";
import { Profile } from "../lib/types";

export const useProfiles = () => {
  const fetchProfiles = async () =>
    await fetch(import.meta.env.VITE_API_URL + "/profiles").then((res) => {
      if (res.ok) return res.json() as unknown as Profile[];
      else
        throw new Error(
          `프로필 로드 실패.\nstatus: ${res.status}, ${res.statusText}`
        );
    });

  const { data } = useQuery<Profile[]>("/profiles", fetchProfiles, {
    suspense: true,
  });

  return data;
};
