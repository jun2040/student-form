import useForm from "../../hooks/useForm";
import Input from "../Input.comp";
import StudentFormDetailRow from "./StudentFormDetailRow.comp";

const StudentForm = () => {
  const {
    infos,
    handleInfoChange,
    details,
    handleDetailChange,
    addDetail,
    removeDetail,
    handleNewSubmit,
  } = useForm();

  const inputs = [
    {
      label: "Name",
      placeholder: "John Doe",
      type: "text",
      name: "name",
    },
    {
      label: "National Registration Card",
      placeholder: "00/XXX(N)000000",
      type: "text",
      name: "nrc",
    },
    {
      label: "Date of Birth",
      placeholder: "mm/dd/yyyy",
      type: "date",
      name: "dob",
    },
    {
      label: "Phone Number",
      placeholder: "###########",
      type: "text",
      name: "phone_no",
    },
    {
      label: "Contact",
      placeholder: "Smith Doe",
      type: "text",
      name: "contact",
    },
  ];

  return (
    <form>
      {inputs.map((input, i) => {
        if (!infos[input.name]) infos[input.name] = "";

        return (
          <Input
            {...input}
            value={infos[input.name]}
            handleChange={handleInfoChange}
            key={i}
          />
        );
      })}

      {details.map((data, i) => (
        <StudentFormDetailRow
          data={data}
          index={i}
          handleChange={handleDetailChange}
          handleDelete={removeDetail}
          key={i}
        />
      ))}

      <button onClick={addDetail} type="button">
        Add Detail
      </button>
      <button onClick={handleNewSubmit} type="submit">
        Submit
      </button>
    </form>
  );
};

export default StudentForm;
