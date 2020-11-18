const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
// const directoryRoutes = require("./routes/directory.routes");
const docRoutes = require("./routes/doc.routes");
const semesterRoutes = require("./routes/semester.routes");
const subjectRoutes = require("./routes/subject.routes");

dotenv.config({ path: "config.env" });

const app = express();

app.use(cors());
app.use(express.json());

// app.use("/directories", directoryRoutes);
app.use("/semesters", semesterRoutes);
app.use("/subjects", subjectRoutes);
app.use("/docs", docRoutes);

app.use("*", (req, res, next) => {
  res.status(404).json({
    status: "fail",
    error: "Something went wrong",
  });
});

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
  require("mongoose")
    .connect(process.env.DATABASE_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("dB conn success"))
    .catch((err) => {
      console.log(err);
      process.exit(-1);
    });
});
