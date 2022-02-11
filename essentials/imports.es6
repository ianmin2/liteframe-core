/**
    BASIC IMPORTS
**/

//** NATIVE MODULES **/
exports.os = require("os");
exports.fs = require("fs");
exports.url = require("url");
exports.http = require("http");
exports.path = require("path");
exports.https = require("https");
exports.crypto = require("crypto");
exports.readline = require("readline");
exports.child_process = require("child_process");
exports.exec = exports.child_process.exec;

//** UTILITY MODULES**//
exports.c = require("colors");
exports.fse = require("fs-extra");

exports.zip = require("adm-zip");
exports.targz = require("tar");
exports.compression = require("compression");

exports.request = require("request");
exports.qs = require("querystring");
exports.request_promise = require("request-promise");

const dotenv = require("dotenv");
exports.dotenv = dotenv;
exports.winston = require("winston");

//@ Store the path to the user directory
exports.home =
  process.env.HOME || process.env.HOMEPATH || process.env.USERPROFILE;

//** UTILITY CONFIGURATION
exports.cs = exports.c.setTheme({
  success: "green",
  err: "red",
  info: "blue",
  gray: "gray",
  yell: "yellow",
  succ: "green",
});

//** SERVER HANDLING MODULES
exports.bodyParser = require("body-parser");
exports.express = require("express");
exports.multer = require("multer");
exports.socket = require("socket.io");
exports.ejs = require("ejs");

//** AUTHENTICATION MODULES
exports.passport = require("passport");
let passport_jwt = require("passport-jwt");
passport_jwt.ExtractJwt.fromAuthHeader = () => {
  return passport_jwt.ExtractJwt.fromHeader("authorization");
};
exports.passport_jwt = passport_jwt;
exports.nJwt = require("njwt");
exports.jwt = require("jsonwebtoken");
const Joi = require("@hapi/joi");
Joi.objectId = require("joi-objectid")(Joi);
exports.Joi = Joi;

// @ LOAD THE ENV VARS
dotenv.config({
  debug: process.env.DEBUG,
});

/**
    EO - BASIC IMPORTS
**/

//---------------------------------------------------------------//
