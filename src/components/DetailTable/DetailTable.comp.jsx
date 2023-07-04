import DetailTableHead from "./DetailTableHead.comp";
import DetailTableBody from "./DetailTableBody.comp";

const DetailTable = ({ details }) => {
  return (
    <table>
      <DetailTableHead />
      <DetailTableBody details={details} />
    </table>
  );
};

export default DetailTable;
