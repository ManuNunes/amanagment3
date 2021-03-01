import { Request, Response } from "express";
import { promisify } from "util";
import authConfig from '../controllers/authConfig'
import jwt from 'jsonwebtoken'

export default async (req: Request, res: Response, next) => {
    const authHeader = req.headers.authorization

    const [, token] = authHeader.split(" ")

    if (!token) {
        return res.status(401).json({ error: "Você não tem permissões" })
    }
    try {
        const decoded = await promisify(jwt.verify)(token, authConfig.secret)
        req.id = decoded.id_user

    } catch (err) {
        return res.status(401).json({ error: "Token Inválido" })
    }

    return next()
}