import React from 'react';

interface AmountValueProps {
  amountValue: number;
}

const AmountValue: React.FC<AmountValueProps> = ({ amountValue }) => (
  <h1>{amountValue}</h1>
);

export default AmountValue;