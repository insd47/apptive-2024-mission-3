import { useEffect, useState } from "react";

export function useFetch<T>(
  url: string,
  deps: any[] = [], // eslint-disable-line @typescript-eslint/no-explicit-any
  options?: RequestInit
) {
  const [data, setData] = useState<T>();

  useEffect(() => {
    fetch(url, options).then((res) => {
      if (res.ok) res.json().then(setData);
    });
  }, [url, ...deps]); // eslint-disable-line react-hooks/exhaustive-deps

  return data;
}
