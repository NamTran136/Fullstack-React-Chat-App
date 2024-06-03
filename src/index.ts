import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import bodyParser from "body-parser";
import { app, io, server } from "./socket/socket";

dotenv.config();
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(cookieParser());
app.use(bodyParser.json());

io.on("connection", (socket) => {
  console.log(socket);
});

server.listen(8181, () => {
  console.log("server is running on port 8181");
});
