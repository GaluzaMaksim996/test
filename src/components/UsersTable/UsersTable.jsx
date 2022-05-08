import { Table, Space, Input } from "antd";
import { useState } from "react";
import DeleteUser from "../DeleteUser/DeleteUser";

const UsersTable = ({
  users,
  setUsers,
  searchValue,
}) => {

  const [editableUserData, setEditableUserData] = useState({
    isEdit: false,
    userId: null,
  })

  const columns = [
    {
      title: "Id",
      key: "key",
      dataIndex: "key",
    },
    {
      title: "Name",
      key: "userName",
      dataIndex: "userName",
      render: (text, record) => (
        <Space size="middle">
          {editableUserData.userId === record.key
            ? <Input defaultValue={record.userName} onChange={(e) => record.userName = e.target.value} />
            : <span>{record.userName}</span>
          }
        </Space>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <Space size="middle">
          <a onClick={() => handleEditClick(record)}>Edit</a>
          <a><DeleteUser handleRemoveClick={() => handleRemoveClick(record.key)} /></a>
        </Space>
      ),
    },
  ];

  const dataUsers = users.map((user, i) => ({
    key: i,
    userName: user.userName,
  }));

  const filtredUsers = dataUsers.filter((user) =>
    user.userName.toLowerCase().includes(searchValue.toLowerCase())
  )

  const handleEditClick = (user) => {

    if (!editableUserData.isEdit) {
      user.isEdit = true

      setEditableUserData({
        isEdit: true,
        userId: user.key,
      })
    } else {
      if (user.userName) {
        const editedData = users;
        editedData.splice(editableUserData.userId, 1, { userName: user.userName });
        setUsers(editedData)
        user.isEdit = false
        setEditableUserData({
          isEdit: false,
          userId: null
        })
      }
    }
  }

  const handleRemoveClick = (id) => {
    setUsers(users.filter((user, userId) => userId !== id));
  }

  return (
    <Table
      columns={columns}
      dataSource={filtredUsers}
      pagination={false}

    />
  )
}

export default UsersTable
