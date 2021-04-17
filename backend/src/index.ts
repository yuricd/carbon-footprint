import app from './app'
import { PORT } from './config'

app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}`)
})
