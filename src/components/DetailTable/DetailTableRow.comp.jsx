const DetailTableRow = ({ academic_year, mark1, mark2, mark3, remark }) => {
  return (
    <tr>
      <td>{academic_year}</td>
      <td>{mark1}</td>
      <td>{mark2}</td>
      <td>{mark3}</td>
      <td>{remark}</td>
    </tr>
  );
};

export default DetailTableRow;
