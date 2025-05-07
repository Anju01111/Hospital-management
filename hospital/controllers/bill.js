const Bill = require("../models/bill");

async function getBill(req, res) {
  try {
    const { id,Bill_No,Bill_date } = req.body;
    const bill = await Bill.findAll();
    res.status(201).json(bill);
  } catch (error) {
    res.status(500).json({ error: "Error creating patient" });
  }
}
module.exports = { getBill};