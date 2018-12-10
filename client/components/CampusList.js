import React from 'react';

export const CampusList = (props) => {
  const campuses = props.campuses;
  return (
    <ul>
      {
        campuses.map(campus => {
          return (
            <li>{campus.name}</li>
          )
        })
      }
    </ul>
  )
};
