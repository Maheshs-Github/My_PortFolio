import mongoose from "mongoose";
import { configDotenv } from "dotenv";
import bcrypt from "bcrypt";
import {
  Intro,
  AboutMe,
  Experience,
  Project,
  Education,
  Contact,
  User,
} from "./Models/PortFolioModels.js";

configDotenv();

// Change these (or set as env vars) before running — this becomes your /admin login.
const ADMIN_NAME = process.env.ADMIN_NAME || "Mahesh Mane";
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || "maheshmane9075@gmail.com";
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "ChangeMe123!";

const PLACEHOLDER_IMG = "https://placehold.co/800x500?text=Add+Screenshot";

const introData = {
  WelcomeMSG: "Hello there, I'm",
  FName: "Mahesh",
  LName: "Mane",
  Caption: "Full Stack Developer (MERN)",
  Description:
    "I'm a Junior Full Stack Developer at Osumare Marketing Solutions, Pune, and finishing my M.Sc. in Computer Science. I build full-stack products end to end — from data models and APIs to the interfaces people actually use.",
};

const aboutData = {
  Description:
    "I work across the MERN stack, building role-based platforms, admin dashboards, and APIs that frontend and backend both honor exactly. Recently I've been building real-time features with Socket.IO and integrating AI agents into full-stack products.",
  Skills: [
    "JavaScript",
    "React",
    "Redux Toolkit",
    "Node.js",
    "Express",
    "MongoDB",
    "Mongoose",
    "JWT Auth",
    "Socket.IO",
    "Tailwind CSS",
    "REST APIs",
    "Git & GitHub",
  ],
};

const experienceData = [
  {
    Period: "Jun 13 - Dec 13",
    Role: "Full Stack Developer Intern",
    Company: "Osumare Marketing Solutions",
    Description:
      "Tested and debugged the Starplify application during the deployment phase.",
  },
  {
    Period: "Dec 14 - Present",
    Role: "Full Stack Developer",
    Company: "Osumare Marketing Solutions",
    Description:
      "Working on testing for a Real Estate project and building the Fresher Folks recruitment platform.",
  },
];

const educationData = [
  {
    CourseTitle: "10th",
    SchoolorCollgeName: "VP Marathi Medium School",
    StartYear: 2019,
    EndYear: 2019,
    PercentageOrCGPA: 87.8,
  },
    {
    CourseTitle: "12th",
    SchoolorCollgeName: "VP Art, Commerce & Science College, Baramati",
    StartYear: 2019,
    EndYear: 2021,
    PercentageOrCGPA: 85.4,
  },
  {
    CourseTitle: "Bsc (Computer Science)",
    SchoolorCollgeName: "VP Art, Commerce & Science College, Baramati",
    StartYear: 2021,
    EndYear: 2024,
    PercentageOrCGPA: 8.45,
  },
  {
    CourseTitle: "Msc (Computer Science)",
    SchoolorCollgeName: "VP Art, Commerce & Science College, Baramati",
    StartYear: 2024,
    EndYear: 2026,
    PercentageOrCGPA: 8.5,
  },
];

const contactData = {
  Name: "Mahesh Mane",
  Age: 23,
  Gender: "Male",
  Email: "maheshmane9075@gmail.com",
  Mobile: 7709944702,
  Country: "India",
  lottieImgURL: PLACEHOLDER_IMG,
};

const projectData = [
  {
    Title: "Fresher Folks",
    ProjectDescription:
      "MERN recruitment platform with recruiter-facing candidate search (debounced search, MongoDB aggregation pipelines), a bulk-select messaging system with mark-as-read, and Redis-cached paginated job search.",
    ProjectImgURL: PLACEHOLDER_IMG,
  },
  {
    Title: "India Offers",
    ProjectDescription:
      "B2B2C multi-vendor offer and discount discovery platform (MERN) with Customer, Vendor, Organizer, and Admin roles, a production-grade React component architecture, and full SDLC documentation (56 diagrams, DB schema, API reference).",
    ProjectImgURL: PLACEHOLDER_IMG,
  },
  {
    Title: "MERN LMS",
    ProjectDescription:
      "Full-stack learning platform with Student, Instructor, and Admin roles, JWT + HTTP-only cookie authentication, a course creation-to-approval workflow, enrollment and lecture progress tracking, Razorpay payments, and real-time Socket.IO notifications with Redux-backed read/unread state.",
    ProjectImgURL: PLACEHOLDER_IMG,
  },
  {
    Title: "AI-First CRM — Healthcare CRM",
    ProjectDescription:
      "AI-first CRM letting Medical Representatives log and manage HCP interactions through natural-language conversation instead of forms. Built a LangGraph AI agent with tool calling for interaction logging, editing, HCP search, and follow-up suggestions on a layered Service-Repository backend (FastAPI), with a React + Redux Toolkit frontend kept in sync via REST APIs.",
    ProjectImgURL: PLACEHOLDER_IMG,
  },
  {
    Title: "Pune Mumbai Cab",
    ProjectDescription:
      "MERN cab-booking platform with a public site, an admin CMS, and an Express/MongoDB backend built to match the frontend's API contract exactly.",
    ProjectImgURL: PLACEHOLDER_IMG,
  },
  {
    Title: "Starplify — Performance Optimization",
    ProjectDescription:
      "Performance and reliability work on starplify.com, a live production site — profiling and fixing issues across the deployment pipeline.",
    ProjectImgURL: PLACEHOLDER_IMG,
    LiveURL: "https://starplify.com/",
  },
  {
    Title: "SHOPPER",
    ProjectDescription:
      "A full-stack e-commerce web application built using the MERN stack.",
    ProjectImgURL: PLACEHOLDER_IMG,
  },
];

const seed = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Connected to DB");

    await Promise.all([
      Intro.deleteMany({}),
      AboutMe.deleteMany({}),
      Experience.deleteMany({}),
      Education.deleteMany({}),
      Contact.deleteMany({}),
      Project.deleteMany({}),
    ]);

    await Intro.create(introData);
    await AboutMe.create(aboutData);
    await Experience.insertMany(experienceData);
    await Education.insertMany(educationData);
    await Contact.create(contactData);
    await Project.insertMany(projectData);

    const hashedPassword = await bcrypt.hash(ADMIN_PASSWORD, 10);
    await User.findOneAndUpdate(
      { Email: ADMIN_EMAIL.toLowerCase() },
      { Name: ADMIN_NAME, Email: ADMIN_EMAIL.toLowerCase(), Password: hashedPassword, Role: "admin" },
      { upsert: true, new: true }
    );
    console.log(
      `Admin user ready: ${ADMIN_EMAIL} — log in at /auth/login, then change this password.`
    );

    console.log("Seed complete:", projectData.length, "projects added");
  } catch (err) {
    console.error("Seed failed:", err);
  } finally {
    await mongoose.disconnect();
  }
};

seed();
