import { useParams } from "react-router-dom";

import axios from "axios";

import useFormDetailFields from "./useFormDetailFields";
import useFormInfoFields from "./useFormInfoFields";

import config from "../../config";
import { redirect } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const useForm = () => {
  const { student_id } = useParams();
  const navigate = useNavigate();

  const infoFields = useFormInfoFields();
  const detailFields = useFormDetailFields();

  const { infos } = infoFields;
  const { details } = detailFields;

  const handleNewSubmit = (e) => {
    e.preventDefault();

    let data = { ...infos };
    data.details = [...details];

    (async () => {
      await axios
        .post(`${config.host}/students/register`, data)
        .then((res) => {
          navigate("/");
        })
        .catch((err) => {
          console.log(err);
        });
    })();
  };

  // Submit handler for editing (doesn't work/not used)
  const handleEditSubmit = (e) => {
    e.preventDefault();

    let data = { ...infos };
    data.details = [...details];

    (async () => {
      await axios
        .patch(`${config.host}/students/edit/${student_id}`)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          config.log(err);
        });
    })();
  };

  return {
    ...infoFields,
    ...detailFields,
    handleNewSubmit,
    handleEditSubmit,
  };
};

export default useForm;
