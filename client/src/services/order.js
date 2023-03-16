import axios from "axios"

export const CreateOrder = async(order) => {
    return axios.post(`${process.env.REACT_APP_URL_LOCALHOST}/api/order/createOrder`, order)
}