import { Request, Response, Router } from "express";
import {
  getEvent,
  getEvents,
  postEvent,
  updateEvent,
  deleteEvent,
  getEventsByInterestTag,
  getFilteredEvents
} from "../controller/Event";
import authMiddleware from "../services/authMiddleware";

const router = Router();

router.get("/event/:id", authMiddleware, getEvent);
router.get("/events", getEvents);
router.get("/events/by-interest/:tag", authMiddleware, getEventsByInterestTag);
router.post("/event", authMiddleware, postEvent);
router.put("/event/:id", authMiddleware, updateEvent);
router.delete("/event/:id", authMiddleware, deleteEvent);
router.post("/events/filter", authMiddleware, getFilteredEvents);


export { router as eventRouter};
