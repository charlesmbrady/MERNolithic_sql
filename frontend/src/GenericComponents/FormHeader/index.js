import style from './style.css';
import React from 'react';
import UnevenHTrack from '../UnevenHTrack';

export default function FormHeader({ title }) {
  const formTitle = <h2>{title}</h2>;
  const items = [formTitle];
  return <UnevenHTrack style={style.formHeader} items={items} />;
}
