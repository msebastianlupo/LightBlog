import { createPostSchema, modifyPostSchema } from "../schemas/posts.js";

function validateCreatePost(req, res, next){
	createPostSchema.validate(req.body, {
		stripUnknown: true
	})
	.then((data) =>{
		req.body = data
        next()
	})
	.catch(e => res.status(400).json(e))
}

function validateModifyPost(req, res, next){
	modifyPostSchema.validate(req.body, {
		stripUnknown: true
	})
	.then((data) =>{
		req.body = data
        next()
	})
	.catch(e => res.status(400).json(e))
}

export {
    validateCreatePost,
	validateModifyPost
}