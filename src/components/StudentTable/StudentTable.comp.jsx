import StudentTableHead from "./StudentTableHead.comp";
import StudentTableBody from "./StudentTableBody.comp";
import useFetchAllStudents from "../../hooks/useFetchAllStudents";

const StudentTable = () => {
  const students = useFetchAllStudents();

  return (
    <table>
      <StudentTableHead />
      {students ? <StudentTableBody students={students} /> : <></>}
    </table>
  );
};

export default StudentTable;
