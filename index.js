const express = require("express");
const app = express();

const cors = require("cors");
const studentRouter = require("./routes/student_routes");

function loadApp() {
  try {
    
    // Enable CORS for all origin
    app.use(cors());

    // Purpose => Parse Request Body
    app.use(express.json());
    app.use("/", studentRouter);

    app.listen(process.env.PORT || 8000, () =>
      console.log(`Server is listening at port 8000...`)
    );
  } catch (err) {
    console.error(err);
    process.exit();
  }
}
loadApp();
