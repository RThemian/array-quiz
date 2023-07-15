import React from 'react';

const arrayMethods = [
  'map',
  'filter',
  'reduce',
  'forEach',
  'find',
  'some',
  'every',
  'sort',
  'slice',
  'splice',
];

function ArrayMethods() {
  return (
    <ul>
      {arrayMethods.map((method) => (
        <li key={method}>{method}</li>
      ))}
    </ul>
  );
}

export default ArrayMethods;
