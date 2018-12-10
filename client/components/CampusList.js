import React from 'react';

export const CampusList = (props) => {
  const campuses = props.campuses;
  return (
    <ul>
      {
        campuses.map(campus => {
          return (
            <li key={campus.id}>{campus.name}</li>
          )
        })
      }
    </ul>
  )
};
