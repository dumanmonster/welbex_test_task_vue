const Router = require("express");
const router = Router();
const pool = require("../db");

router.post("/welbex/add", async (req, res) => {
  try {
    const { message } = req.body;
    const validDataInRequest =
      message &&
      message.date &&
      message.name &&
      message.amount &&
      message.distance;

    if (!validDataInRequest) {
      res.sendStatus(400);
      return;
    }

    const { date, name, amount, distance } = message;
    const newDistance = await pool.query(
      "INSERT INTO welbextable (date,name,amount,distance) VALUES($1,$2,$3,$4) RETURNING *",
      [date, name, amount, distance]
    );
    res.status(201);
    res.json(newDistance.rows[0]);
  } catch (error) {
    console.error(error.message);
    res.status(400);
    res.json(JSON.stringify(error.message));
  }
});

router.get("/welbex", async (req, res) => {
  try {
    const allDistances = await pool.query("SELECT * FROM welbextable");
    res.json(allDistances.rows);
    res.status(200);
  } catch (error) {
    console.error(error.message);
    res.sendStatus(500);
  }
});

module.exports = router;
