import express from 'express'
import cors from 'cors'
import { createAdmin } from './create-admin.js'
import { usersRoutes } from './routes/users.js'
import { postsRoutes } from './routes/posts.js'
import { commentsRoutes } from './routes/comments.js'

const app = express()
app.use(express.json())
app.use(cors())

app.use(usersRoutes)
app.use(postsRoutes)
app.use(commentsRoutes)

app.listen(2023, () => {
    createAdmin()
    .then(created => created 
        ? console.log("Bienvenid@. Se creó el usuario 'admin@lb.ar' con clave '12345678' para operar el blog. cambiá la clave de inmediato")
        : console.log("Bienvenid@ de nuevo")
    )
})