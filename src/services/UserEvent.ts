import UserEventModel from "../models/UserEvent";
import connectDB from "../config/db-connector";
import { QueryTypes } from "sequelize";

export const createUserEvent = async (userId: string, eventId: string) => {
  const userEvent = await UserEventModel.create({
    userId,
    eventId,
  });
  addUserPoints(userId, 10);
  return userEvent;
};

export const findAllEventsByUserId = async (userId: string) => {
  const query = `
    SELECT events.*
    FROM events INNER JOIN "userEvent" ON events.id = "userEvent"."eventId"
    WHERE "userEvent"."userId" = :userId
    `;
  const events = await connectDB.query(query, {
    replacements: { userId },
    type: QueryTypes.SELECT,
  });
  if (!events.length) {
    throw new Error("No events found for the given user ID");
  }
  return events;
};

export const addUserPoints = async (userId: string, points: number) => {
  const query = `
    UPDATE users
    SET points = points + :points
    WHERE id = :userId
    `;
  const updatedUser = await connectDB.query(query, {
    replacements: { userId, points },
    type: QueryTypes.UPDATE,
  });
  return updatedUser;
};

export const counterUserEvents = async (eventId: string) => {
  const query = `
        SELECT COUNT(*)
        FROM "userEvent"
        WHERE "eventId" = :eventId
        `;
  const counter = await connectDB.query(query, {
    replacements: { eventId },
    type: QueryTypes.SELECT,
  });
  return counter;
};

export const deleteUserEvent = async (userId: string, eventId: string) => {
  const query = `
            DELETE FROM "userEvent"
            WHERE "userId" = :userId AND "eventId" = :eventId
            `;
  const deletedUserEvent = await connectDB.query(query, {
    replacements: { userId, eventId },
    type: QueryTypes.DELETE,
  });
  return deletedUserEvent;
};

export default {
  createUserEvent,
  findAllEventsByUserId,
  addUserPoints,
  counterUserEvents,
};
