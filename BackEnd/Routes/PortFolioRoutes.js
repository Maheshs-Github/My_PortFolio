import express from "express";
const Router = express.Router();
import { Authenticate, RequireAdmin } from "../Middleware/Auth.js";
import {
  DeleteEducation,
  DeleteExperience,
  DeleteProject,
  GetAboutMe,
  GetContact,
  GetEducation,
  GetExperience,
  GetIntro,
  GetProject,
  GetRoot,
  LogIn,
  PostAboutMe,
  PostContact,
  PostEducation,
  PostExperience,
  PostIntro,
  PostProject,
  Signup,
  UpdateAboutMe,
  UpdateContact,
  UpdateEducation,
  UpdateExperience,
  UpdateIntro,
  UpdateProject,
} from "../Controller/PortFolioController.js";

const AdminOnly = [Authenticate, RequireAdmin];

// Public read routes
Router.get("/", GetRoot);
Router.get("/GetIntro", GetIntro);
Router.get("/GetAboutMe", GetAboutMe);
Router.get("/GetExperience", GetExperience);
Router.get("/GetProject", GetProject);
Router.get("/GetEducation", GetEducation);
Router.get("/GetContact", GetContact);

// Auth
Router.post("/SignUp", Signup);
Router.post("/Login", LogIn);

// Admin-only write routes
Router.post("/PostIntro", AdminOnly, PostIntro);
Router.put("/UpdateIntro", AdminOnly, UpdateIntro);

Router.post("/PostAboutMe", AdminOnly, PostAboutMe);
Router.put("/UpdateAboutMe", AdminOnly, UpdateAboutMe);

Router.post("/PostExperience", AdminOnly, PostExperience);
Router.put("/UpdateExperience", AdminOnly, UpdateExperience);
Router.delete("/DeleteExperience/:_id", AdminOnly, DeleteExperience);

Router.post("/PostProject", AdminOnly, PostProject);
Router.put("/UpdateProject", AdminOnly, UpdateProject);
Router.delete("/DeleteProject/:_id", AdminOnly, DeleteProject);

Router.post("/PostEducation", AdminOnly, PostEducation);
Router.put("/UpdateEducation", AdminOnly, UpdateEducation);
Router.delete("/DeleteEducation/:_id", AdminOnly, DeleteEducation);

Router.post("/PostContact", AdminOnly, PostContact);
Router.put("/UpdateContact", AdminOnly, UpdateContact);

export default Router;
