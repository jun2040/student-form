import StudentTableRow from "./StudentTableRow.comp";

const StudentTableBody = ({ students }) => {
  return (
    <tbody key={"tbody"}>
      {students.map((student, i) => (
        <StudentTableRow key={i} {...student} />
      ))}
    </tbody>
  );
};

export default StudentTableBody;
