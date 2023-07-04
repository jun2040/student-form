import { Link, useParams } from "react-router-dom";

import StudentForm from "../components/StudentForm/StudentForm.comp";

import useFetchStudent from "../hooks/useFetchStudent";
import useForm from "../hooks/useForm";
import { useEffect } from "react";

// Not done, problem with data fetching
// Tried to use student form for both new and edit (didn't work out)
const EditStudent = () => {
  const { student_id } = useParams();
  const { student } = useFetchStudent(student_id);
  const form = useForm();
  const { setInfo, setDetails, handleEditSubmit } = form;

  const until = (condition) => {
    const poll = (resolve) => {
      if (condition()) resolve();
      else setTimeout((_) => poll(resolve), 400);
    };

    return new Promise(poll);
  };

  useEffect(() => {
    (async () => {
      await until((_) => student != {});
      const { name, nrc, dob, phone_no, contact, details } = student;
      console.log(student);
      setInfo({ name, nrc, dob, phone_no, contact });
      setDetails([...details]);
    })();
  }, []);

  return (
    <>
      <Link to={`/details/${student_id}`}>Return to Student Detail</Link>
      <h3>Edit Student: {student.name}</h3>
      {/* <StudentForm form={form} handleChange={handleEditSubmit} /> */}
    </>
  );
};

export default EditStudent;

// function Edit() {
//   const { studentID } = useParams();

//   const [studentFields, setstudentFields] = useState({});

//   const [detailFields, setdetailFields] = useState([
//     { a_year: "", mark1: "", mark2: "", mark3: "", remark: "" },
//   ]);

//   // useEffect(() => {
//   //     axios.get('http://localhost:5000').then(res => {
//   //         setstudentFields(res.data);
//   //     });
//   // }, [])

//   const handleChange = (event, index) => {
//     let data = [...studentFields];
//     data[index][event.target.name] = event.target.value;
//     setstudentFields(data);
//   };

//   const handleFormChange = (event, index) => {
//     let data = [...detailFields];
//     data[index][event.target.name] = event.target.value;
//     setdetailFields(data);
//   };

//   const submit = (e) => {
//     e.preventDefault();
//     console.log(studentFields);
//     console.log(detailFields);
//     window.location.reload(false);

//     fetch("/process-data", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         detailFields: detailFields,
//         studentFields: studentFields,
//       }),
//     })
//       .then((response) => response.text())
//       .catch((error) => {
//         console.error("Error:", error);
//       }, []);
//   };

//   const addFields = () => {
//     let object = {
//       a_year: "",
//       mark1: "",
//       mark2: "",
//       mark3: "",
//       remark: "",
//     };

//     setdetailFields([...detailFields, object]);
//   };

//   const removeFields = (index) => {
//     let data = [...detailFields];
//     data.splice(index, 1);
//     setdetailFields(data);
//   };

//   return (
//     <div className="container">
//       <Link to="/">Return to Student List</Link>
//       <h3>Edit Student</h3>
//       <form onSubmit={submit}>
//         {studentFields.map((form, index) => {
//           return (
//             <div className="container">
//               <div className="row">
//                 <label>Student Name</label>
//                 <input
//                   id="iBox"
//                   placeholder="E.g. John Doe"
//                   name="name"
//                   onChange={(event) => handleChange(event, index)}
//                   value={form.name}
//                 />
//               </div>
//               <div className="row">
//                 <label>Student NCR</label>
//                 <input
//                   id="iBox"
//                   type="text"
//                   placeholder="00/XXX(N)000000"
//                   name="ncr"
//                   onChange={(event) => handleChange(event, index)}
//                   value={form.ncr}
//                 />
//               </div>
//               <div className="row">
//                 <label>Student Date of Birth</label>
//                 <input
//                   id="iBox"
//                   type="date"
//                   placeholder="mm/dd/yyyy"
//                   name="dob"
//                   onChange={(event) => handleChange(event, index)}
//                   value={form.dob}
//                 />
//               </div>
//               <div className="row">
//                 <label>Student Phone Number</label>
//                 <input
//                   id="iBox"
//                   type="text"
//                   placeholder="###########"
//                   name="phone_no"
//                   onChange={(event) => handleChange(event, index)}
//                   value={form.phone_no}
//                 />
//               </div>
//               <div className="row">
//                 <label>Student Contact Person</label>
//                 <input
//                   id="iBox"
//                   type="text"
//                   placeholder="E.g. John Doe"
//                   name="contact"
//                   onChange={(event) => handleChange(event, index)}
//                   value={form.contact}
//                 />
//               </div>
//             </div>
//           );
//         })}
//         <div className="container" id="AcaD">
//           <div className="row">
//             <h4>Add Student Academic Details</h4>
//           </div>
//           {detailFields.map((form, index) => {
//             return (
//               <div key={index} className="row" id="adRow">
//                 <div className="col-lg-2">
//                   <label>Academic Year</label>
//                   <input
//                     className="adElements"
//                     type="number"
//                     name="a_year"
//                     onChange={(event) => handleFormChange(event, index)}
//                     value={form.a_year}
//                   />
//                 </div>
//                 <div className="col-lg-2">
//                   <label>Mark 1</label>
//                   <input
//                     className="adElements"
//                     type="number"
//                     name="mark1"
//                     onChange={(event) => handleFormChange(event, index)}
//                     value={form.mark1}
//                   />
//                 </div>
//                 <div className="col-lg-2">
//                   <label>Mark 2</label>
//                   <input
//                     className="adElements"
//                     type="number"
//                     name="mark2"
//                     onChange={(event) => handleFormChange(event, index)}
//                     value={form.mark2}
//                   />
//                 </div>
//                 <div className="col-lg-2">
//                   <label>Mark 3</label>
//                   <input
//                     className="adElements"
//                     type="number"
//                     name="mark3"
//                     onChange={(event) => handleFormChange(event, index)}
//                     value={form.mark3}
//                   />
//                 </div>
//                 <div className="col-lg-2">
//                   <label>Remark</label>
//                   <input
//                     className="adElements"
//                     type="text"
//                     name="remark"
//                     onChange={(event) => handleFormChange(event, index)}
//                     value={form.remark}
//                   />
//                 </div>
//                 <div className="col-lg-2">
//                   <small>*Click to Remove*</small>
//                   <button
//                     className="adElements"
//                     onClick={() => removeFields(index)}
//                   >
//                     Remove
//                   </button>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </form>
//       <div className="row justify-content-end">
//         <button onClick={addFields} type="button">
//           Add More
//         </button>
//         <br />
//         <button onClick={submit} type="submit">
//           {" "}
//           Submit Student
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Edit;
