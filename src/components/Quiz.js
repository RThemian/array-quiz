import React, { useState, useEffect } from 'react';

const startingArray = [1, 2, 3, 4, 5, 6, 7];
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

function Quiz() {
  const [round, setRound] = useState(1);
  const [mutatedArray, setMutatedArray] = useState([]);
  const [options, setOptions] = useState([]);

  useEffect(() => {
    generateMutatedArray();
    generateOptions();
  }, [round]);

  const generateMutatedArray = () => {
    const randomMethod = arrayMethods[Math.floor(Math.random() * arrayMethods.length)];
    let newArray = [...startingArray];

    switch (randomMethod) {
      case 'map':
        newArray = newArray.map((num) => num * 2);
        break;
      case 'filter':
        newArray = newArray.filter((num) => num % 2 === 0);
        break;
      case 'reduce':
        newArray = newArray.reduce((acc, num) => acc + num, 0);
        break;
      case 'forEach':
        newArray.forEach((num, index, arr) => {
          arr[index] = num * 2;
        });
        break;
      case 'find':
        newArray = newArray.find((num) => num > 3);
        break;
      case 'some':
        newArray = newArray.some((num) => num > 3);
        break;
      case 'every':
        newArray = newArray.every((num) => num > 3);
        break;
      case 'sort':
        newArray.sort();
        break;
      case 'slice':
        newArray = newArray.slice(2, 5);
        break;
      case 'splice':
        newArray.splice(2, 2);
        break;
      default:
        break;
    }

    setMutatedArray(newArray);
  };

  const generateOptions = () => {
    const correctOption = arrayMethods.findIndex((method) => method === getMethodName());
    const incorrectOptions = arrayMethods
      .filter((method) => method !== getMethodName())
      .sort(() => Math.random() - 0.5)
      .slice(0, 3);
    const allOptions = [...incorrectOptions, arrayMethods[correctOption]].sort(() => Math.random() - 0.5);

    if (allOptions.includes(arrayMethods[correctOption])) {
      setOptions(allOptions);
    } else {
      allOptions.push(arrayMethods[correctOption]);
      setOptions(allOptions);
    }
  };

  const getMethodName = () => {
    const mutatedLength = mutatedArray.length;

    if (mutatedLength === 14) {
      return 'map';
    } else if (mutatedLength === 4) {
      return 'filter';
    } else if (mutatedLength === 28) {
      return 'reduce';
    } else if (mutatedLength === 10) {
      return 'forEach';
    } else if (mutatedLength === 5) {
      return 'find';
    } else if (mutatedLength === 3) {
      return 'some';
    } else if (mutatedLength === 7) {
      return 'every';
    } else if (mutatedLength === 1) {
      return 'sort';
    } else if (mutatedLength === 3) {
      return 'slice';
    } else if (mutatedLength === 2) {
      return 'splice';
    }
  };

  const handleSelection = (selectedMethod) => {
    if (selectedMethod === getMethodName()) {
      alert('Correct!');
    } else {
      alert('Incorrect!');
    }
    setRound(round + 1);
  };

  return (
    <div className="quiz">
      <h2>Round {round}</h2>
      <StartingArray startingArray={startingArray} />
      <MutatedArray mutatedArray={mutatedArray} />
      <MethodOptions
        round={round}
        options={options}
        handleSelection={handleSelection}
      />
    </div>
  );
}

function StartingArray({ startingArray }) {
  return (
    <>
      <h3>Starting Array:</h3>
      <p>{startingArray.join(', ')}</p>
    </>
  );
}

function MutatedArray({ mutatedArray }) {
  return (
    <>
      <h3>Mutated Array:</h3>
      <p>{Array.isArray(mutatedArray) ? mutatedArray.join(', ') : ''}</p>
    </>
  );
}

function MethodOptions({ round, options, handleSelection }) {
  return (
    <>
      <h3>Which method was used?</h3>
      <div className="options">
        {round <= 5 &&
          options.map((option) => (
            <button key={option} onClick={() => handleSelection(option)}>
              {option}
            </button>
          ))}
      </div>
    </>
  );
}

export default Quiz;
