import { Link } from "react-router-dom";

import StudentTable from "../components/StudentTable/StudentTable.comp";

const Home = () => {
  return (
    <>
      <div>
        <h4>Student List</h4>
        <Link to="/new">Add Student</Link>
      </div>
      <StudentTable />
    </>
  );
};

export default Home;
