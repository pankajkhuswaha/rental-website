const express = require("express");
const { isAdmin, siteDatas } = require("../Controller/AdminControl");

const router = new express.Router();

router.post("/getdata",isAdmin,siteDatas)

module.exports = router