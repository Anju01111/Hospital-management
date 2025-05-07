const Lab = require("../models/lab");

async function getLab(req, res) {
  try {
    const { id,Order_no,name,date } = req.body;
    const data = await Lab.findAll();
    res.status(201).json(data);
  } catch (error) {
    res.status(500).json({ error: "Error creating patient" });
  }
}
module.exports = { getLab};