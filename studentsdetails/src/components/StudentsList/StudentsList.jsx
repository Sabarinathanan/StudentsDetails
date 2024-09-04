import React, { useContext } from 'react';
import { StudentContext } from '../../context/StoreContext';
import './StudentsList.css';

const StudentsList = ({ setShowList }) => {
  const { students, deleteStudent, setEditStudent } = useContext(StudentContext);
  

  return (
    <div className="card text-white bg-secondary mb-3">
      <div className="card-header">
        <h5 className="card-title">Students List</h5>
        <button type="button" className="add btn btn-success" onClick={() => setShowList(false)}>
          Add <i className="fa-solid fa-plus"></i>
        </button>
      </div>
      <div className="card-body">
        <div className="student-lists-title">
          <div className="student-list-title">
            <table>
              <thead>
                <tr>
                  <td className='name'><h3>Name</h3></td>
                  <td className="email"><p >Email</p></td>
                  <td className="dob"><p>Date of Birth</p></td>
                  <td className='gender'><p>Gender</p></td>
                  <td><p className="mobilenumber">Mobile Number</p></td>
                  <td className='buttons'><p>Action</p></td>
                </tr>
              </thead>
            </table>
          </div>
        </div>
        <div className="student-lists">
          {students.map((item) => (
            <div
              className="student-list"
              key={item.studentID}
            >
            <table>
              <tr>
                <td className='name'><h3>{item.firstName} {item.lastName}</h3></td>
                <td className="email"><p >{item.email}</p></td>
                <td className="dob"><p >{item.dateOfBirth}</p></td>
                <td className="gender"><p >{item.gender}</p></td>
                <td><p className="mobilenumber">{item.mobileNumber}</p></td>
                <td className='buttons' >
                    <button onClick={(e) => { e.stopPropagation(); deleteStudent(item.studentID); }} type="button" className="btn-1 btn btn-danger">
                      X
                    </button>
                    <button onClick={(e) => { e.stopPropagation(); setEditStudent(item); setShowList(false); }} className="btn-2 edit" type="button">
                      <i className="fa-solid fa-pen-to-square"></i>
                    </button>
                </td>
              </tr>
             </table>
             
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StudentsList;
