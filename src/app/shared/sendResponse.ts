import { Response } from "express";

interface IResData<T> {
    httpStatusCode: number,
    sucess: boolean,
    message: string,
    data?: T;
}

export const sendResponse = <T>(res: Response, resDta: IResData<T>) => {

    const { httpStatusCode, sucess, message, data } = resDta;
    res.status(httpStatusCode).json({
        sucess,
        message,
        data
    })
}