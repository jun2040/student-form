const Data = ({ label, data }) => {
  return (
    <div>
      <span>
        <b>{label}: </b>
      </span>
      <span>{data}</span>
    </div>
  );
};

export default Data;
