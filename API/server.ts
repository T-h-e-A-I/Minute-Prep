import { getTeachers, getSubjects } from "./database";
import { Request, Response } from "express";
import cors from "cors";

const port: number = 3000;
var fs = require("fs");
var http = require("http");
var https = require("https");
var privateKey = fs.readFileSync("certs/key.pem", "utf8");
var certificate = fs.readFileSync("certs/certificate.pem", "utf8");

var credentials = { key: privateKey, cert: certificate };
var express = require("express");
var app = express();
app.use(cors());
// your express configuration here

var httpServer = http.createServer(app);
var httpsServer = https.createServer(credentials, app);

async function main() {
  try {
    const users = await getTeachers();
    return users;
  } catch (error) {
    console.log(error);
    return error;
  }
}

app.get("/teachers", async (req: Request, res: Response) => {
  try {
    const teachers = await getTeachers();
    res.send(teachers);
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error");
  }
});
app.get("/subjects", async (req: Request, res: Response) => {
  try {
    const subjects = await getSubjects();
    res.send(subjects);
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error");
  }
});

httpServer.listen(8080);
httpsServer.listen(8443);
