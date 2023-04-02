const orderModel = require('../models/order.model');
const userModel = require('../models/user.model');
const nodemailer = require("nodemailer");
const orderController = {
    createOrder : async (req, res) => {
        try {
            // console.log("reqBody", req.body)
            if(req.body.user === undefined || req.body.address === undefined)
                return res.send("iscorrect")
                const email = await req.body.email
            const newOrder = new orderModel();
            newOrder.address = req.body.address,
            newOrder.note = req.body.note,
            newOrder.productOrder = req.body.productOrder,
            newOrder.total = req.body.total,
            newOrder.user = req.body.user
            
            await newOrder.save();
            console.log("new",newOrder)
            res.send(newOrder)
            try {
                
                console.log("newOrder", newOrder._id.toString())
                console.log("req.user", req.body.email)
                // console.log("id", req.boy.)
               const userOrder =  await userModel.findOneAndUpdate(
                    {_id: req.body.user},
                    {
                        $push: {
                            order: newOrder.id
                        }
                    }
                )
                console.log("first", userOrder)
                
                    console.log("haidz", email)
                let transporter = nodemailer.createTransport({
                    service : "gmail",
                    auth: {
                        user: "anh123vvv@gmail.com",
                        pass: "dralbidqghhmlmqo"
                    }
                })
    
                await transporter.sendMail({
                    from: "anh123vvv@gmail.com",
                    to : "nhuhai17072106@gmail.com",
                    subject: "CÓ ĐƠN HÀNG MỚI!", // Subject line
                    text: "ĐƠN HÀNG CHỜ XÁC NHẬN", // plain text body
                    html: `Tên sản phẩm: ${req.body.productOrder.map((item) => item.nameProduct)}
                    <br></br>
                    Địa chỉ đặt hàng: ${req.body.address}, SĐT liên hệ: ${req.body.phone},
                    Tổng thanh toán:${Number(req.body.total).toLocaleString()}VND
                    `,
                })
    
            } catch (error) {
                console.log(error)
            }


        } catch (error) {
            res.send("check data input")
        }
    },
    getAllOrder: async (req, res) => {
        try {
            const allOrder = await orderModel.find({}).exec();
                res.send(allOrder)
        } catch (error) {
            res.send(error)
        }
    },
    getOrder: async (req, res) => {
        try {
            const id = req.params.id
            console.log("id", id)
            const order = await orderModel.find({user: id})
            res.send(order)
        } catch (error) {
            res.send(error)
        }
    },
    editOrder: async (req, res) => {
        const _id = await req.params.id;
        const orderNeedUpdate = await orderModel.findByIdAndUpdate(_id,
            {
                $set: {
                    address: req.body.address,
                    note: req.body.note
                }
            },
            {$upset: true},
            (err) => {
                if(err) {
                    res.send("err")
                }else {
                    res.send("update success");
                }
            })
    },
    deleteOrder: async (req, res) => {
        try {
            const _id = await req.params.id;
            const orderNeedDelete = orderModel.findOneAndDelete(await {_id: req.params.id}, (err) => {
                if(err) {
                    res.send("delete failed")
                } else {
                    res.send("delete successed");
                }
            })
            res.send(orderNeedDelete)
                const userOrder =  await userModel.findOneAndUpdate(
                    {_id: req.body.id},
                    {
                        $pull: {
                            order: req.params.id
                        }
                    }
                )
                let transporter = nodemailer.createTransport({
                    service : "gmail",
                    auth: {
                        user: "anh123vvv@gmail.com",
                        pass: "dralbidqghhmlmqo"
                    }
                })
                await transporter.sendMail({
                    from: "anh123vvv@gmail.com",
                    to : "nhuhai17072106@gmail.com",
                    subject: "HỦY ĐƠN HÀNG", // Subject line
                    text: "HỦY ĐƠN HÀNG", // plain text body
                    html: `Tôi muốn hủy đơn hàng này
                    `,
                })

        } catch (error) {
            res.send(error)
        }
    }
}

module.exports = orderController;