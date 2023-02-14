import axios from "axios"

const DeleteUser = async (id, navigate) => {
     await axios.delete(`${process.env.REACT_APP_URL_LOCALHOST}/api/user/${id}`)
    navigate("/users")
}
export default DeleteUser