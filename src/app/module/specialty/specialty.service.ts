import { Specialty } from "../../../generated/prisma/client"
import { prisma } from "../../lib/prisma"

const CreateSpecialty = async (payload: Specialty) => {
    const result = await prisma.specialty.create({
        data: payload
    })
    return result
}

const getAllSpecialties = async (id?: string) => {
    if (id) {
        const result = await prisma.specialty.findUnique({
            where: {
                id
            }
        })
        return result
    }
    const result = await prisma.specialty.findMany()
    return result
};

const deleteSpecialty = async (id: string) => {
    const result = await prisma.specialty.delete({
        where: {
            id
        },
    })
    return result
}

export const SpecialtyService = {
    CreateSpecialty,
    getAllSpecialties,
    deleteSpecialty
}
