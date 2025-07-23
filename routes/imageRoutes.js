// import express, { response } from 'express'
// import { generateImage } from '../controllers/imageController.js'
// import userAuth from '../middlewares/auth.js'

// import forData from 'form-data'
// import userModel from '../models/userModel.js'

// const imageRouter = express.Router()

// imageRouter.post('/generate-image', userAuth , generateImage)



// export default imageRouter


// import express from 'express'
// import { generateImage } from '../controllers/imageController.js'
// import userAuth from '../middlewares/auth.js'
// import { generateImage } from '../controllers/generateImage.js';


// const imageRouter = express.Router()

// // ✅ This route requires user to be logged in (JWT in header)
// imageRouter.post('/generate-image', userAuth, generateImage)

// export default imageRouter




import express from 'express'
import { generateImage } from '../controllers/generateImage.js'
import userAuth from '../middlewares/auth.js'

const imageRouter = express.Router()

imageRouter.post('/generate-image', userAuth, generateImage)

export default imageRouter

