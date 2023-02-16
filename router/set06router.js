const express =require("express")

const {reading, posting}= require("../controller/set06controller")

const router = express.Router()

router.route("/students").get(reading)

router.route("/newStudents").post(posting)



