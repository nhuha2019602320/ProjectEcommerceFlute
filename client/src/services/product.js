import axios from "axios";

export const DeleteProduct = async (id) => {
    return await axios.delete(`${process.env.REACT_APP_URL_LOCALHOST}/api/product/${id}`)
}