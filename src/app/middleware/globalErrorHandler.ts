import { NextFunction, Request, Response } from "express";
import { EnvVars } from "../../config/env";
import status from "http-status";

export const GlobalErrorHandler = (error: any, req: Request, res: Response, next: NextFunction) => {
    if (EnvVars.NODE_ENV === "development") {
        console.log("Error from global: ", error)
    };

    const ststusCode = status.INTERNAL_SERVER_ERROR;
    const message = "Internal server error"


    res.status(ststusCode).json({
        sucess: false,
        message: message,
        error: error
    })
}