import React, { useState } from 'react';

interface InputAreaProps {
  inputList: string[]; // Define a prop to pass the list of input values
  setInputList: React.Dispatch<React.SetStateAction<string[]>>; // Define a prop to update the list of input values
}

const InputArea: React.FC<InputAreaProps> = ({ inputList, setInputList }) => {
  const handleAddInput = () => {
    setInputList([...inputList, '']); // Add an empty string to the input list
  };

  const handleChange = (index: number, event: React.ChangeEvent<HTMLInputElement>) => {
    const updatedList = inputList.map((value, i) => (i === index ? event.target.value : value));
    setInputList(updatedList); // Update the input list with the new value
  };

  return (
    <div>
      <label htmlFor="" style={{paddingTop : '5px'}}>Auteur(s) :</label>
      <div style={{ display : 'grid' , gridTemplateColumns: '19fr 1fr'}}>
        <div>
        {inputList.map((value, index) => (
        <div key={index} style={{ display: 'flex', marginBottom: 10 }}>
          <input
            type="text"
            value={value}
            onChange={(event) => handleChange(index, event)}
            placeholder="ajouter auteur.."
            style={{
              width: '100%',
              padding: '12px 20px',
              margin: '8px 0',
              display: 'inline-block',
              border: '1px solid #ccc',
              borderRadius: '4px',
              boxSizing: 'border-box'
            }}
          />
        </div>
      ))}
        </div>
      
      <button onClick={handleAddInput} style={{
        backgroundColor : 'var(--clr-neon)',
        display : 'block',
        height : '40px',
        width : '60px'
      }}>+</button>
      </div>
      
    </div>
  );
};

export default InputArea;
