import { Request, Response } from "express";
import httptstaus from "http-status"

export const NotFound = (req: Request, res: Response) => {
    res.status(httptstaus.NOT_FOUND).json({
        sucess: false,
        message: `Route not Found ${req.originalUrl}`
    })
}