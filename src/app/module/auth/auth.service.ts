import { auth } from "../../lib/auth"
import { prisma } from "../../lib/prisma";
import { IAuth, ISignIn } from "./auth.interface"

const registerPatient = async (payload: IAuth) => {
    const data = await auth.api.signUpEmail({
        body: payload
    })
    if (!data.user) {
        throw new Error("Failed to register patient");
    };

    const patient = await prisma.$transaction(async (tx) => {
        const patientTx = await tx.patient.create({
            data: {
                userId: data.user.id,
                email: payload.email,
                name: payload.name,
            }
        })
        return patientTx
    })
    return { ...data, patient }
};

const signIn = async (payload: ISignIn) => {
    const data = await auth.api.signInEmail({
        body: {
            email: payload.email,
            password: payload.password
        }
    });
    console.log(data)
    if (!data.user) {
        throw new Error("Failed to sign in");
    }
    return data
}


export const authService = {
    registerPatient,
    signIn
}
