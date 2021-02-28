import 'reflect-metadata'
import express from 'express'
import routes from './../routes'
import './../database'

class App {
    app: any
    constructor() {
        this.app = express()
        this.app.use(express.json())

        this.routes()
    }
    routes() {
        this.app.use(routes)
    }
    database() {

    }
}

export default new App().app