import React, { useContext, useEffect } from 'react';
import { StudentContext } from '../../context/StoreContext';
import axios from 'axios';
import { toast } from 'react-toastify';
import './StudentsInputs.css';

const StudentsInputs = ({ setShowList }) => {
  const {fetchStudents, students, setStudents, updateStudent, editStudent } = useContext(StudentContext);

  const refreshPage = () => {
    window.location.reload();
  };

  useEffect(() => {
    if (editStudent) {
      setStudents(editStudent);
    } else {
      setStudents({
        firstName: "",
        lastName: "",
        dateOfBirth: "",
        gender: "",
        mobileNumber: "",
        email: "",
      });
    }
  }, [editStudent, setStudents]);

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setStudents((prevData) => ({ ...prevData, [name]: value }));
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const formValues = Object.fromEntries(formData.entries());
    console.log("Form Data:", formValues);
    refreshPage()
    try {
      if (editStudent) {
        await updateStudent(editStudent.studentID, formValues);
        toast.success('Student updated successfully');
        
      } else {
        const response = await axios.post(
          'https://localhost:7237/api/saveDetails',
          formValues,
          { headers: { 'Content-Type': 'application/json' } }
        );
        toast.success(response.data.message);
      }
      setStudents({
        firstName: "",
        lastName: "",
        dateOfBirth: "",
        gender: "",
        mobileNumber: "",
        email: "",
      });
      setShowList(true);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className="students">
      <form onSubmit={onSubmitHandler}>
        <div className="students-title">
          <h2>{editStudent ? 'Edit Student Details' : 'Add Student Details'}</h2>
        </div>
        <div className="icons" onClick={() => refreshPage()}>
          <i className="fa-solid fa-list"></i>
        </div>
        <ul className="students-inputs">
          <li>
            <label>Enter Your First Name</label>
            <input
              onChange={onChangeHandler}
              name="firstName"
              value={students.firstName || ''}
              type="text"
            />
          </li>
          <li>
            <label>Enter Your Last Name</label>
            <input
              onChange={onChangeHandler}
              name="lastName"
              value={students.lastName || ''}
              type="text"
            />
          </li>
          <li>
            <label>Enter Your D.O.B</label>
            <input
              onChange={onChangeHandler}
              name="dateOfBirth"
              value={students.dateOfBirth || ''}
              type="date"
            />
          </li>
          <li>
            <label>Gender</label>
            <div className="gender">
              <input
                onChange={onChangeHandler}
                type="radio"
                name="gender"
                value="Male"
                checked={students.gender === 'Male'}
              />
              <label>Male</label>
              <input
                onChange={onChangeHandler}
                type="radio"
                name="gender"
                value="Female"
                checked={students.gender === 'Female'}
              />
              <label>Female</label>
            </div>
          </li>
          <li>
            <label>Enter Your Email</label>
            <input
              onChange={onChangeHandler}
              name="email"
              value={students.email || ''}
              type="email"
            />
          </li>
          <li>
            <label>Enter Your Mobile.No</label>
            <input
              onChange={onChangeHandler}
              name="mobileNumber"
              value={students.mobileNumber || ''}
              type="number"
            />
          </li>
        </ul>
        <button type="reset">Reset</button>
        <button type="submit">{editStudent ? 'Update' : 'Submit'}</button>
      </form>
    </div>
  );
};

export default StudentsInputs;

// const response = await axios.post('https://localhost:7237/api/saveDetails',formData);
// if (response.data.success) {
//     setStudents(
//       {
//         firstName: "",
//         lastName: "",
//         dateOfBirth:"",
//         gender: "",
//         mobileNumber:"",
//         email:""
//       }
//     )
//     toast.success(response.data.message)
// }
// else {
//   toast.error(response.data.message)
// }