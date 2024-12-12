import { useQuery } from "@tanstack/react-query";

type User = {
  id: number;
  name: string;
  email: string;
};

const fetchUserData = async (): Promise<User[]> => {
  const response = await fetch("/api/users");
  if (!response.ok) throw new Error("Failed to fetch users");
  return response.json();
};

export const LoadingErrorExample = () => {
  const { data, error, isLoading } = useQuery({ queryKey: ["users"], queryFn: fetchUserData });

  if (isLoading) {
    return <p>Loading users...</p>;
  }

  if (error) {
    return <p>Error: {(error as Error).message}</p>;
  }

  return (
    <ul>
      {data?.map((user) => (
        <li key={user.id}>
          {user.name} - {user.email}
        </li>
      ))}
    </ul>
  );
};
