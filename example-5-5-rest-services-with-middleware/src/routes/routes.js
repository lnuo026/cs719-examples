import express from "express";

/**
 * Create a new express Router
 */
const router = express.Router();


router.get("/"  ,(req, res) => {
  console.log("中间件测试");
const query = req.query
    return res.send({sendStatus:200, data: query})
});



/**
 * This route handler will respond to a GET request to the "/" path (e.g. http://localhost:3000/). It will
 * return an HTTP 200 (OK) response with the given JSON data.
 */

router.get("/" ,(req, res) => {
  /**
   * res.json() will return a 200 OK response, with Content-Type = application/json, and a JSON string equal
   * to the result of calling JSON.stringify() on the given JavaScript object.
   */
  console.log("中间件测试");
  return res.json({ message: "Hello, world!" });
});



/**
 * Add child routess
 */
import apiRoutes from "./api/api.js";
router.use("/api", apiRoutes);

/**
 * Export the router so it can be used outside.
 */
export default router;
