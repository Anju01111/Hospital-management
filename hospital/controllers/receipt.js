const Receipt = require("../models/receipt");

async function getReceipt(req, res) {
  try {
    const { id,Bill_No,Bill_date } = req.body;
    const receipt= await Receipt.findAll();
    res.status(201).json(receipt);
  } catch (error) {
    res.status(500).json({ error: "Error creating patient" });
  }
}
module.exports = { getReceipt};