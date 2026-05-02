import { Request, Response } from "express";
import { cashAsync } from "../../shared/catchAsync";
import { sendResponse } from "../../shared/sendResponse";
import { authService } from "./auth.service";

const registerPatient = cashAsync(async (req: Request, res: Response) => {
    const payload = req.body;
    console.log(payload)
    const result = await authService.registerPatient(payload);
    sendResponse(res, {
        httpStatusCode: 200,
        message: " Patient created successfully",
        sucess: true,
        data: result
    })
});

const signIn = cashAsync(async(req: Request, res: Response) => {
    const payload = req.body;
    console.log(payload)
    const result = await authService.signIn(payload);
    sendResponse(res, {
        httpStatusCode: 200,
        message: " user signed in successfully",
        sucess: true,
        data: result
    })
});

export const AuthController = {
    registerPatient,
    signIn
}