import DetailTableRow from "./DetailTableRow.comp";

const DetailTableBody = ({ details }) => {
  return (
    <tbody>
      {details?.map((detail, i) => (
        <DetailTableRow key={i} {...detail} />
      ))}
    </tbody>
  );
};

export default DetailTableBody;
