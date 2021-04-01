import 'dotenv'
import { Request, Response } from "express";
import jwt from 'jsonwebtoken'


export default async (req: Request, res: Response, next: any) => {
    const authHeader = req.headers.authorization

    if (!authHeader) {
        return res.status(401).json({ error: "Você não tem permissões" })
    }
    const [, token] = authHeader.split(" ")

    try {
        const decoded = await jwt.verify(token, process.env.TOKEN_SECRET)
        req.id = decoded.id_user

    } catch (err) {
        return res.status(401).json({ error: "Token Inválido" })
    }

    return next()
}