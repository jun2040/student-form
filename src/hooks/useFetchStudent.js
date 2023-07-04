import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import axios from "axios";

import config from "../../config";

const useFetchStudent = (id) => {
  const [student, setStudent] = useState({});

  useEffect(() => {
    (async () => {
      await axios
        .get(`${config.host}/students/student/${id}`)
        .then((res) => {
          setStudent(res.data);
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    })();
  }, []);

  return {
    student,
  };
};

export default useFetchStudent;
