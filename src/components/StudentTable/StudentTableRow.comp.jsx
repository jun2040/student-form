import { Link } from "react-router-dom";

const StudentTableRow = ({ id, name, nrc, dob, phone_no, contact }) => {
  return (
    <tr>
      <td>{id}</td>
      <td>
        <Link to={`/details/${id}`}>{name}</Link>
      </td>
      <td>{nrc}</td>
      <td>{dob.substr(0, 17)}</td>
      <td>{phone_no}</td>
      <td>{contact}</td>
    </tr>
  );
};

export default StudentTableRow;
