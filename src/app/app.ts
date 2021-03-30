import 'reflect-metadata'
import express from 'express'
import route from './../routes'
import './../database'

import cors from 'cors'

class App {
    app: any
    constructor() {

        this.app = express()
        this.app.use(cors())
        this.app.use(express.json())
        this.midlewares()
        this.routes()
    }
    routes() {
        this.app.use(route)
    }
    midlewares() {
    }
}

export default new App().app