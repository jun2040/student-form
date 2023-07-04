import { useState } from "react";

const useFormInfoFields = () => {
  const [infos, setInfos] = useState({});

  const handleInfoChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInfos((v) => ({ ...v, [name]: value }));
  };

  return {
    infos,
    setInfos,
    handleInfoChange,
  };
};

export default useFormInfoFields;
