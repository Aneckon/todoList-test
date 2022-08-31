import React from 'react';

import './input.css';

export const Input = ({ value, onChange, placeholder }) => {
  return (
    <div className="input">
      <input placeholder={placeholder} value={value} onChange={(e) => onChange(e.target.value)} />
    </div>
  );
};
