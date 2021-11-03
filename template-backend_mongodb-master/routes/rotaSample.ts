import express from "express";
const router = express.Router();

import {
  sampleGetController,
  samplePostController,
  sampleDeleteController,
  samplePutController
} from "./controllers/controllerSample";

router.get("/sample", sampleGetController);
router.post("/sample_post", samplePostController);
router.delete("/sample_delete", sampleDeleteController);
router.put("/sample_put", samplePutController);

export default router;
