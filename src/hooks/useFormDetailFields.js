import { useState } from "react";

const useFormDetailFields = () => {
  const [details, setDetails] = useState([]);

  const handleDetailChange = (e, i) => {
    let data = [...details];
    const name = e.target.name;
    const value = e.target.value;
    data[i][name] = value;
    setDetails(data);
    console.log(details);
  };

  const addDetail = () => {
    let obj = {
      a_year: "",
      mark1: "",
      mark2: "",
      mark3: "",
      remark: "",
    };

    setDetails([...details, obj]);
  };

  const removeDetail = (index) => {
    let data = [...details];
    data.splice(index, 1);
    setDetails(data);
  };

  return {
    details,
    setDetails,
    handleDetailChange,
    addDetail,
    removeDetail,
  };
};

export default useFormDetailFields;
