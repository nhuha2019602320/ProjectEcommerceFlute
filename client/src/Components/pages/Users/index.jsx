import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/esm/Container";
import AdminPage from "../../Admin/AdminPage";
import Table from "react-bootstrap/Table";
import axios from "axios";
import "./user.css";
const Index = () => {
  const [users, setUsers] = useState([]);
  // const [indexUser, setIndexUser] = useState([]);
  const indexUser = [];

  let index = users.length;
  for (let i = 1; i <= index; i++) indexUser.push(i);

  const handleDelete = (user) => {
    console.log(user);
  }

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_URL_LOCALHOST}/api/user/getAllUsers`)
      .then((res) => {
        console.log(res.data);
        setUsers(res.data);
      });
  }, []);

  return (
    <div style={{ display: "flex" }}>
      <AdminPage />
      <Container>
        <Table striped style={{ marginTop: "30px" }}>
          <thead>
            <tr>
              <th>STT</th>
              <th>Tài khoản</th>
              <th>Email</th>
              <th>Số điện thoại</th>
              <th>Quyền truy cập</th>
              <th>Chức năng</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id.toString()}>
                <td>{index}</td>
                <td>{user.userName}</td>
                <td>{user.email}</td>
                <td>{user.phoneNumber}</td>
                <td>{user.admin.toString()}</td>
                <td>
                  <button className="test" onClick={handleDelete(user)}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-x"
                      viewBox="0 0 16 16"
                    >
                      <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                    </svg>
                  </button>
                  <button>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-vector-pen"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10.646.646a.5.5 0 0 1 .708 0l4 4a.5.5 0 0 1 0 .708l-1.902 1.902-.829 3.313a1.5 1.5 0 0 1-1.024 1.073L1.254 14.746 4.358 4.4A1.5 1.5 0 0 1 5.43 3.377l3.313-.828L10.646.646zm-1.8 2.908-3.173.793a.5.5 0 0 0-.358.342l-2.57 8.565 8.567-2.57a.5.5 0 0 0 .34-.357l.794-3.174-3.6-3.6z"
                      />
                      <path
                        fill-rule="evenodd"
                        d="M2.832 13.228 8 9a1 1 0 1 0-1-1l-4.228 5.168-.026.086.086-.026z"
                      />
                    </svg>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default Index;
