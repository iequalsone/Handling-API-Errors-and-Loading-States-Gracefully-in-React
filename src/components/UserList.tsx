import { useCustomFetch } from "../hooks/useCustomFetch";

type User = {
  id: number;
  name: string;
  email: string;
};

export const UserList = () => {
  const { data, error, isLoading } = useCustomFetch<User[]>("users", "/api/users");

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
