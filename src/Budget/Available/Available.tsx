import React from 'react';

interface AvailableProps {
  month: string;
}

const Available: React.FC<AvailableProps> = ({ month }) => (
  <h1>Available budget in {month}:</h1>
);

export default Available;