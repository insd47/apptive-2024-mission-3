import { useFetch } from "../lib/tools/usefetch";
import { Profile } from "../lib/types";

export const useProfiles = () =>
  useFetch<Profile[]>("https://mission.insd.dev/api/profiles", [], {
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`,
    },
  });
