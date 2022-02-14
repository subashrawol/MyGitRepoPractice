//......................
/* @GET REQUEST
    @ACCESS PUBLIC
    @URL API/POSTS/LLPOSTS
*/

 const StudentSchema = require("../models/Student");

 //create student
exports.createStudents = async (req, res) => {
  try {
    let { name, std_id, email, courses } = req.body;
    let payload = {
      name,
      std_id,
      email,
      courses,
    };
    let data = await StudentSchema.create(payload); 
    res.status(201).json({ message: "successfully student created", data });
  } catch (error) {
    console.log(error);
    res.status(501).json({ message: "server error" });
  }
};

 //read all student
exports.getAllstudents = async (req, res) => {
  try {
    let payload = await StudentSchema.find();
    res.status(200).json({ message: "successfully fetched", payload });
  } catch (error) {
    res.status(501).json({ message: "server error" });
  }
};

 //read 1 student
exports.getStudent = async (req, res) => {
  try {
    let payload = await StudentSchema.findOne({ _id: req.params.id });
    res.status(200).json({ message: "successfully fetched one student", payload });
  } catch (error) {
    res.status(501).json({ message: "server error" });
  }
};

//update student
exports.updateStudent = async (req, res) => {
  try {
    let { name, std_id, email, courses } = req.body;
    let payload = await StudentSchema.findByIdAndUpdate(
      req.params.id,
      {
        name,
        std_id,
        email,
        courses,
      },
      { new: true }
    );
    await payload.save();
    res.status(201).json({ message: "successfully student updated", payload });
  } catch (error) {
    res.status(501).json({ message: "server error" });
  }
};

//delete student
exports.deleteStudent = async (req, res) => {
  try {
    let payload = await StudentSchema.deleteOne({ _id: req.params.id });
    res
      .status(200)
      .json({ message: "successfully deleted one student", payload });
  } catch (error) {
    res.status(501).json({ message: "server error" });
  }
};
