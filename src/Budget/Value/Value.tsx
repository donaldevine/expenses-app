import React from 'react';

interface ValueProps {
  value: number;
}

const Value: React.FC<ValueProps> = ({ value }) => (
  <h1>{value}</h1>
);

export default Value;