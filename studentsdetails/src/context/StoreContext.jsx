import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const StudentContext = createContext();

const StudentProvider = (props) => {
  const [students, setStudents] = useState([]);
  const [editStudent, setEditStudent] = useState(null); 

  //get
  const fetchStudents = async () => {
    try {
      const response = await axios.get('https://localhost:7237/api/getDetails');
      setStudents(response.data);
    } catch (error) {
      console.error('Error fetching student data:', error);
    }
  };

  //delete
  const deleteStudent = async (id) => {
    try {
      await axios.delete(`https://localhost:7237/api/deleteStudentDetails/${id}`);
      fetchStudents();
    } catch (error) {
      console.error('Error deleting student:', error);
    }
  };

  //update
  const updateStudent = async (id, students) => {
    try {
      deleteStudent(id)
      await axios.post(`https://localhost:7237/api/saveDetails/`, students);
      fetchStudents();
      window.location.reload();
    } catch (error) {
      console.error('Error updating student:', error);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  const ContextValue = {
    students,
    setStudents,
    deleteStudent,
    updateStudent, 
    editStudent, 
    setEditStudent,
    fetchStudents
  };

  return (
    <StudentContext.Provider value={ContextValue}>
      {props.children}
    </StudentContext.Provider>
  );
};

export default StudentProvider;
