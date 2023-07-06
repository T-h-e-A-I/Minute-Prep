import {
  getTeachers,
  getSubjects,
  getContents,
  getContentsByTeacher,
  getContentsBySubject,
} from "./database";
import { Request, Response } from "express";
import cors from "cors";
import { Types } from "@prisma/client";

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
app.get("/contents/:type", async (req: Request, res: Response) => {
  const type = req.params.type.toUpperCase();
  let desiredType: Types = Types.REEL;
  if (type == "REELS") desiredType = Types.REEL;
  if (type == "VIDEOS") desiredType = Types.VIDEO;
  if (type == "INFOGRAPHICS") desiredType = Types.INFOGRAPHICS;
  try {
    const subjects = await getContents(desiredType);
    res.send(subjects);
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error");
  }
});
app.get(
  "/contents/:teacherOrSubject/:type",
  async (req: Request, res: Response) => {
    const teacherOrSubject = req.params.teacherOrSubject.toUpperCase();
    let isTeacher = false;
    let teacherOrSubjectId = 3;
    if (teacherOrSubject == "MASHRAFI") {
      teacherOrSubjectId = 1;
      isTeacher = true;
    }
    if (teacherOrSubject == "MAISHA") {
      teacherOrSubjectId = 2;
      isTeacher = true;
    }
    if (teacherOrSubject == "AWESH") {
      teacherOrSubjectId = 3;
      isTeacher = true;
    }
    if (teacherOrSubject == "GOURAB") {
      teacherOrSubjectId = 4;
      isTeacher = true;
    }
    if (teacherOrSubject == "TANVIR") {
      teacherOrSubjectId = 5;
      isTeacher = true;
    }
    if (teacherOrSubject == "PHYSICS") teacherOrSubjectId = 1;
    if (teacherOrSubject == "CHEMISTRY") teacherOrSubjectId = 2;
    if (teacherOrSubject == "MATH") teacherOrSubjectId = 3;
    const type = req.params.type.toUpperCase();
    let desiredType: Types = Types.REEL;
    if (type == "REELS") desiredType = Types.REEL;
    if (type == "VIDEOS") desiredType = Types.VIDEO;
    if (type == "INFOGRAPHICS") desiredType = Types.INFOGRAPHICS;
    if (isTeacher) {
      try {
        const subjects = await getContentsByTeacher(
          desiredType,
          teacherOrSubjectId
        );
        res.send(subjects);
      } catch (error) {
        console.log(error);
        res.status(500).send("Internal Server Error");
      }
    } else {
      try {
        const subjects = await getContentsBySubject(
          desiredType,
          teacherOrSubjectId
        );
        res.send(subjects);
      } catch (error) {
        console.log(error);
        res.status(500).send("Internal Server Error");
      }
    }
  }
);

httpServer.listen(8080);
httpsServer.listen(8443);
