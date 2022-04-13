import React, { FC, useEffect } from "react";
import { useActions } from "../../hooks/use-actions";

import { useTypedSelector } from "../../hooks/use-typed-selector";

const UserList: FC = () => {
  const { users, error, loading } = useTypedSelector((state) => state.user);

  const { fetchUsers } = useActions();

  useEffect(() => {
    fetchUsers();
  }, []);

  if (loading) {
    return <h1>Идет загрузка...</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <div>
      {users.map((user) => (
        <div key={user.email}>{user.name}</div>
      ))}
    </div>
  );
};

export default UserList;
