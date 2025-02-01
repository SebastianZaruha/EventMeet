import { Request, Response, Router } from "express";
import {
  getEvent,
  getEvents,
  postEvent,
  updateEvent,
  deleteEvent,
  getEventsByInterestTag,
} from "../controller/Event";

const router = Router();

router.get("/event/:id", getEvent);
router.get("/events", getEvents);
router.get("/events/by-interest/:tag", getEventsByInterestTag);
router.post("/event", postEvent);
router.put("/event/:id", updateEvent);
router.delete("/event/:id", deleteEvent);

export { router as eventRouter};
