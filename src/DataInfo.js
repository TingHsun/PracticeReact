import { useState, useEffect } from 'react';
import { getUsers } from './api.js'

function DataInfo() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    (async () => {
      let userList = await getUsers();
      setUsers(userList);
    })();
  }, []);

  return (
    <ol>
      {users.map((user) => (
        <li key={user.seq}>
          {user.name}的編號是{user.seq}
        </li>
      ))}
    </ol>
  );
}

export default DataInfo;
