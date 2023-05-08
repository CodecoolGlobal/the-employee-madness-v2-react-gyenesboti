require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const EmployeeModel = require("./db/employee.model");

const { MONGO_URL, PORT = 8080 } = process.env;

if (!MONGO_URL) {
  console.error("Missing MONGO_URL environment variable");
  process.exit(1);
}

const app = express();
app.use(express.json());

app.get("/api/employees/", async (req, res) => {
  const employees = await EmployeeModel.find().sort({ created: "desc" });
  return res.json(employees);
});

app.get("/api/employees/:id", async (req, res) => {
  const employee = await EmployeeModel.findById(req.params.id);
  return res.json(employee);
});

app.post("/api/employees/", async (req, res, next) => {
  const employee = req.body;

  try {
    const saved = await EmployeeModel.create(employee);
    return res.json(saved);
  } catch (err) {
    return next(err);
  }
});

app.patch("/api/employees/:id", async (req, res, next) => {
  try {
    const employee = await EmployeeModel.findOneAndUpdate(
      { _id: req.params.id },
      { $set: { ...req.body } },
      { new: true }
    );
    return res.json(employee);
  } catch (err) {
    return next(err);
  }
});

app.delete("/api/employees/:id", async (req, res, next) => {
  try {
    const employee = await EmployeeModel.findById(req.params.id);
    const deleted = await employee.delete();
    return res.json(deleted);
  } catch (err) {
    return next(err);
  }
});

const main = async () => {
  await mongoose.connect(MONGO_URL);

  app.listen(PORT, () => {
    console.log("App is listening on 8080");
    console.log("Try /api/employees route right now");
  });
};

// app.get("/api/years-of-experience", async (req,res,next) => {
//   try {
//     console.log(req.query);
//     const employees = await EmployeeModel.find({experience: { $gte: req.query.exp}}).sort({name: req.query.type})
//     return res.json(employees)
//   } catch (error) {
//     next(error)
//   }
// })

app.get("/api/years-of-experience/:experience", async (req,res, next) => {
  const experience = req.params.experience;
  if (experience < 0 || isNaN(experience)) {
    res.status(404).send()
  } else {
    try {
      const employees = await EmployeeModel.find({experience: { $gte: experience }})
      return res.json(employees)
    } catch (error) {
      next(error)
    }
  }
})

app.get("/api/years-of-experience/:experience/asc", async (req,res,next) => {
  const experience = req.params.experience;
    try {
      const employees = await EmployeeModel.find({experience: { $gte: experience }}).sort({name: "asc"});
      return res.json(employees)
    } catch (error) {
      next(error)
  } 
})

app.get("/api/years-of-experience/:experience/desc", async (req,res,next) => {
  const experience = req.params.experience;
    try {
      const employees = await EmployeeModel.find({experience: { $gte: experience }}).sort({name: "desc"});
      return res.json(employees)
    } catch (error) {
      next(error)
    }
})

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
