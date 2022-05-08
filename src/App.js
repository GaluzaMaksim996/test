import { useEffect, useState } from "react";
import { Input } from "antd";

import UsersTable from "./components/UsersTable/UsersTable";
import AddUser from "./components/AddUser/AddUser";

import "./App.css";

const { Search } = Input;

function App() {
  const [users, setUsers] = useState([])
  const [searchValue, setSearchValue] = useState("")

  useEffect(() => {
    const localUsers = JSON.parse(localStorage.getItem("users"))

    if (localUsers) {
      setUsers(localUsers);
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users))
  }, [users])

  const handleSearchChange = (e) => setSearchValue(e.target.value)

  return (
    <div className="App">
      <Search
        placeholder="User search"
        value={searchValue}
        onChange={handleSearchChange}
      />
      <UsersTable
        users={users}
        setUsers={setUsers}
        searchValue={searchValue}
      />

      <AddUser setUsers={setUsers} />
    </div>
  )
}

export default App
