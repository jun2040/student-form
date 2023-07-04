import Input from "../Input.comp";

const StudentFormDetailRow = ({ data, handleChange, handleDelete, index }) => {
  const inputs = [
    {
      label: "Academic Year",
      placeholder: "xxxx",
      type: "number",
      name: "a_year",
    },
    {
      label: "Mark 1",
      placeholder: "0",
      type: "number",
      name: "mark1",
    },
    {
      label: "Mark 2",
      placeholder: "0",
      type: "number",
      name: "mark2",
    },
    {
      label: "Mark 3",
      placeholder: "0",
      type: "number",
      name: "mark3",
    },
    {
      label: "Remark",
      placeholder: "",
      type: "text",
      name: "remark",
    },
  ];

  return (
    <div>
      <h5>Detail {index}</h5>
      {inputs.map((input, i) => {
        if (!data[input.name]) data[input.name] = "";

        return (
          <Input
            {...input}
            value={data[input.name]}
            handleChange={(e) => handleChange(e, index)}
            key={i}
          />
        );
      })}
      <button onClick={(e) => handleDelete(index)} type="button">
        Delete
      </button>
    </div>
  );
};

export default StudentFormDetailRow;
