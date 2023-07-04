import { useEffect } from "react";
import { useState } from "react";

import axios from "axios";

import config from "../../config";

const useFetchAllStudents = () => {
  const [students, setStudents] = useState();

  useEffect(() => {
    (async () => {
      await axios.get(`${config.host}/students`).then((res) => {
        setStudents(res.data);
      });
    })();
  }, []);

  return students;
};

export default useFetchAllStudents;
