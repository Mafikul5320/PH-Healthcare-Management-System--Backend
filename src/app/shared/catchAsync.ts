import { NextFunction, Request, RequestHandler, Response } from "express";

export const cashAsync = (fn: RequestHandler) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            await fn(req, res, next)
        } catch (error) {
            console.log(error);
            res.status(400).json({
                success: false,
                status: "error",
                message: error.message,
            })
        }
    }
}