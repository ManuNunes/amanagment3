import { Request, Response } from "express";

class LoginController {
    async create(req: Request, res: Response) {
        return res.json({ message: "Teste" })
    }
}

export = new LoginController()