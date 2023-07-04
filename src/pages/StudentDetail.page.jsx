import { Link, useParams } from "react-router-dom";

import Data from "../components/Data.comp";
import DetailTable from "../components/DetailTable/DetailTable.comp";

import useFetchStudent from "../hooks/useFetchStudent";

const StudentDetail = () => {
  const { student_id } = useParams();
  const { student } = useFetchStudent(student_id);

  const { name, nrc, dob, phone_no, contact, details } = student;

  return (
    <>
      <Link to="/">Return to Student List</Link>
      <h3>{student.name}</h3>
      <Link to={`./edit`}>Edit</Link>
      <div>
        <Data label={"Name"} data={name} />
        <Data label={"National Registration Card"} data={nrc} />
        <Data label={"Date of Birth"} data={dob} />
        <Data label={"Phone Number"} data={phone_no} />
        <Data label={"Contact"} data={contact} />
      </div>
      <DetailTable details={details} />
    </>
  );
};

export default StudentDetail;
