import { Request, Response, Router } from "express";
import {
getUserEventCount,
getUserEventsByUserId,
updateUserEvent,
postUserEvent,
deleteUserEvent
} from "../controller/UserEvent";

const router = Router();

router.get("/:eventId", getUserEventCount);
router.get("/", getUserEventsByUserId);
router.put("/:id", updateUserEvent);
router.post("/", postUserEvent);
router.delete("/:id", deleteUserEvent);

export { router as userEventRouter };