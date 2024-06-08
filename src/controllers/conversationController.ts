import express from "express"
import { createConversation, getConversations } from "../models/conversationModel";

const conversationRouter = express.Router()

conversationRouter.get("/", getConversations);
conversationRouter.post("/create", createConversation);

export default conversationRouter