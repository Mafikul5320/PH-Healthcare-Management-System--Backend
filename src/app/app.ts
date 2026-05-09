import express, { Application } from 'express'
import cors from 'cors'
import { indexRoutes } from './routes'
import { EnvVars } from '../config/env'
import { NotFound } from './middleware/NotFound'


const app: Application = express()
app.use(express.json())
app.use(cors({
    origin: EnvVars.APP_URL || "http://localhost:5000",
    credentials: true
}))
app.use('/api/v1', indexRoutes)

app.get('/', (req, res) => {
    res.send('Hello Good Night!')
})

app.use(NotFound)

export default app;