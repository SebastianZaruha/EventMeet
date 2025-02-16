import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";
import { counterUserEvents, createUserEvent, findAllEventsByUserId } from "../services/UserEvent";

const getUserEventCount = async (req: Request, res: Response) => {
  try {
    const eventId = req.params.id;
    const count = await counterUserEvents(eventId);
    res.status(200).send(count);
  } catch (e) {
    handleHttp(res, "ERROR_GET_USEREVENT");
  }
};

const getUserEventsByUserId = async (req: Request, res: Response) => {
  try {
    const userEvents = await findAllEventsByUserId(req.params.id);
    res.status(200).send(userEvents);
  } catch (e) {
    handleHttp(res, "ERROR_GET_USEREVENTS");
  }
};

const updateUserEvent = (req: Request, res: Response) => {
  try {
  } catch (e) {
    handleHttp(res, "ERROR_UPDATE_USEREVENT");
  }
};

const postUserEvent = async (req: Request, res: Response) => {
  try {
    const { userId } = req.body;
    const { eventId } = req.body;
    const userEvent = await createUserEvent(userId, eventId);
    res.status(201).send(userEvent);

  } catch (e) {
    handleHttp(res, "ERROR_POST_USEREVENT");
  }
};

const deleteUserEvent = async (req: Request, res: Response) => {
  try {
    const { userId } = req.body;
    const { eventId } = req.body;
    const userEvent = await deleteUserEvent(userId, eventId);
    res.status(201).send(userEvent);    
  } catch (e) {
    handleHttp(res, "ERROR_DELETE_USEREVENT");
  }
};

export {
  getUserEventCount,
  getUserEventsByUserId,
  updateUserEvent,
  postUserEvent,
  deleteUserEvent,
};
