import React from 'react';

export type HeaderText = {
  text: string;
};
export const Header = ({ text }: HeaderText) => {
  return <div className="text">{text}</div>;
};
