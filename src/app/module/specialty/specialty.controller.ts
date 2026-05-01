import { Request, Response } from "express"
import { SpecialtyService } from "./specialty.service";
import { cashAsync } from "../../shared/catchAsync";
import { sendResponse } from "../../shared/sendResponse";


const CreateSpecialty = cashAsync(async (req: Request, res: Response,) => {
    const data = req.body;
    const result = await SpecialtyService.CreateSpecialty(data);
    sendResponse(res, {
        sucess: true,
        httpStatusCode: 200,
        message: "Specialty created successfully",
        data: result
    })
})



const getAllSpecialties = cashAsync(async (req: Request, res: Response) => {
    const id = req.params.id;
    const result = await SpecialtyService.getAllSpecialties(id as string)
    sendResponse(res, {
        httpStatusCode: 200,
        sucess: true,
        message: "Specialties fetched successfully",
        data: result
    })
})

const deleteSpecialty = cashAsync(async (req: Request, res: Response) => {
    const id = req.params.id;
    const result = await SpecialtyService.deleteSpecialty(id as string)
    sendResponse(res, {
        httpStatusCode: 200,
        sucess: true,
        message: "Specialties fetched successfully",
        data: result
    })

})

export const SpecialtyController = {
    CreateSpecialty,
    getAllSpecialties,
    deleteSpecialty
}