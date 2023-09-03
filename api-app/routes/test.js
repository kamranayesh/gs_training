/*
C-POST
R-GET
U-PUT
D-DELETE
*/

const router = require("express").Router();
//GET :/test
//:param: required data
//:param?:optional data
//(query params) : optional
router.get("/:id?", (req, res) => {
  // return res.status(201).send("hello from express");
  // return res.status(201).send(req.params);
  return res.json({ pathparams: req.params, queryparams: req.query });
});

//POST :/test
//form-data : file upload
router.post("/", (req, res) => {
  return res.json({ body: req.body });
});
module.exports = router;
