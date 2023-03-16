const discountModel = require("../models/discount.model");
const { discountValidate } = require("../validations/discountValidation");

const discountController = {
  createDiscount: async (req, res) => {
    console.log("req.body", req.body)
    const discountExist = await discountModel.findOne({
      percentDiscount: req.body.percentDiscount,
    });
    if (discountExist) {
      return res.status(400).send("Existed persenDiscount");
    }
    const {err} = discountValidate(req.body.percentDiscount);

    if(err) {
        console.log("lỗi rồi ối zời ơi")
    }

    const newDiscount = new discountModel();
    newDiscount.discountCode = req.body.discountCode;
    newDiscount.percentDiscount = req.body.percentDiscount;
    try {
      const discount = await newDiscount.save();
      res.send(discount);
    } catch (error) {
      res.send(error);
    }
  },
  getDiscount: async (req, res) => {
    try {
      const discount = await discountModel.find({_id: req.params.id}).exec()
      res.send(discount)
      console.log("discount", discount)  
    } catch (error) {
      res.send("not existed in db")
    }
  },
  getAllDiscount: async (req,res) => {
    try {
      const allDiscount = await discountModel.find({}).exec();
      res.send(allDiscount)
    } catch (error) {
      res.send(error)
    }
  }
};
module.exports = discountController;
