import React from 'react';
import SingleStudent from './SingleStudent';

const SingleCampus = (props) => {
  const students = props.students;
  return (
    <div>
      <h2>{props.campus.name}</h2>
      {
        students.map(student => {
          return (
            <SingleStudent key={student.id} student={student} />
          )
        })
      }
    </div>
  )
};

export default SingleCampus;
