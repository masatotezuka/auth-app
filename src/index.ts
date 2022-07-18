import { AppDataSource } from "../data-source";
import * as cors from "cors";
import * as dotenv from "dotenv";
import * as cookieParser from "cookie-parser";
import * as express from "express";

dotenv.config();
const app = express();

const corsOptions: cors.CorsOptions = {
  //フロントエンド側のポート番号を設定する
  origin: "http://localhost:3000",
  //認証情報の通信をするためcredentialsはtrueにする
  credentials: false,
};

//3000番ポートのリクエストを許可
app.use(cors(corsOptions));
//URLのなかでエンコードされた文字を読み取れるようにする
app.use(express.urlencoded({ extended: true }));
//リクエストされたJSONオブジェクトを読み取れるようにする
app.use(express.json());
//リクエストされたcookieを読み取れるようにする
app.use(cookieParser());

AppDataSource.initialize()
  .then(() => {
    console.log("Data Source has been initialized!");
  })
  .catch((err) => {
    console.error("Error during Data Source initialization:", err);
  });

app.listen(8000);
