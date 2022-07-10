import { AppDataSource } from "../data-source";
import * as cors from "cors";
import * as dotenv from "dotenv";
import * as cookieParser from "cookie-parser";
import * as express from "express";
AppDataSource.initialize();
