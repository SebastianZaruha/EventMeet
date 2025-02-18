import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

const authMiddleware = (req: Request, res: Response, next: NextFunction): void => {
    const token = req.header("Authorization")?.replace("Bearer ", "") || req.body.token;
  
    if (!token) {
      res.status(401).json({ message: "Access denied. No token provided." });
    }
  
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET || "clave_privada_de_repuesto");
        req.body.user = decoded;
      next();
    } catch (ex) {
      res.status(400).json({ message: "Invalid token." });
    }
  };

export default authMiddleware;