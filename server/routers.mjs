import express from "express"
import path from "path"

import { examsController } from "./api/9-7/q9_7_1Controller.mjs"
import { examsController2 } from "./api/9-7/q9_7_2Controller.mjs"
import { examsController3 } from "./api/9-7/q9_7_3Controller.mjs"
import { examsController4 } from "./api/9-7/q9_7_4Controller.mjs"
import { examsController5 } from "./api/9-7/q9_7_5Controller.mjs"

const routers = express.Router()
routers.get("/api/9-7", examsController.getAllExams)
routers.get("/api/9-7/:id", examsController2.getExamById)
routers.post("/api/9-7", examsController3.createExam)
routers.put("/api/9-7/:id", examsController4.updateExam)
routers.delete("/api/9-7/:id", examsController5.deleteExam)

// client配下は、ブラウザサイドで実行されるファイル（HTML/JS/CSS/画像など）を配置する
routers.use(express.static(`${path.resolve()}/client`))

export default routers