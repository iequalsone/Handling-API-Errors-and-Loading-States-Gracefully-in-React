import { useQuery } from "@tanstack/react-query";

export const useCustomFetch = <T>(key: string, url: string) => {
  return useQuery<T>({
    queryKey: [key],
    queryFn: async () => {
      const response = await fetch(url);
      if (!response.ok) throw new Error("Failed to fetch data");
      return response.json();
    },
    retry: 2,
    refetchOnWindowFocus: false,
  });
};
