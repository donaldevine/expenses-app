import React from 'react';

interface AmountTypeProps {
  amountType: string;
}

const AmountType: React.FC<AmountTypeProps> = ({ amountType }) => (
  <h1>{amountType}</h1>
);

export default AmountType;