
import { Request, Response } from "express";
import jwt from 'jsonwebtoken'


export default async (req: Request, res: Response, next: any) => {
    const authHeader = req.headers.authorization

    if (!authHeader) {
        return res.status(401).json({ error: "Token was not provided" })
    }

    try {
        const [, token] = authHeader.split(" ")
        const decoded = await jwt.verify(token, process.env.SECRET_TOKEN)
        req.id = decoded.id_user

        return next()

    } catch (err) {
        return res.status(401).json({ error: "Token Inválido - " + err })
    }
}