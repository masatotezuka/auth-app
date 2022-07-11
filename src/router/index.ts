import * as express from "express";
import login from "./login";
import signUp from "./signUp";
import logout from "./logout";
import home from "./home";
const router = express.Router();

router.use("/sign-up", signUp);
router.use("/login", login);
router.use("logout", logout);

router.use("/home", home);
