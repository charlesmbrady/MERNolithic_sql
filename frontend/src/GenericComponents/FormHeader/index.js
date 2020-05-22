import './style.css';
import React from 'react';
import UnevenHTrack from '../UnevenHTrack';

export default function FormHeader({ children, title }) {
  const formTitle = <h2>{title}</h2>;
  const items = [formTitle];
  return <UnevenHTrack style='formHeader' items={items} />;
}
