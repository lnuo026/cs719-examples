import express from "express";
import { retrieveCustomers } from "../../data/customers-dao.js";

const router = express.Router();

/**
 * GET /api/customers - Returns a JSON array of customers, with status code 200 (OK).
 */
router.get("/", (req, res) => {
  console.log("测试");
  return res.json(retrieveCustomers());
});


router.post("/", (req, res) => {
  console.log("测试");
  return res.json(retrieveCustomers());
});
export default router;

async function handleSaveCustomer(e) {
  const Customer = e.detail;
}
    const response = await fetch(`${CUSTOMERS_URL}/${customer.id}`, {
      method : "PATCH",
      headers: { "Content-Type" : "applicaion/json"},
      body: JSON.stringify(customer)
        });