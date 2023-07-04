import React from "react";
import { Link } from "react-router-dom";

import StudentForm from "../components/StudentForm/StudentForm.comp";

const NewStudent = () => {
  return (
    <>
      <Link to="/">Return to Student List</Link>
      <h3>Register New Student</h3>
      <StudentForm />
    </>
  );
};

export default NewStudent;
