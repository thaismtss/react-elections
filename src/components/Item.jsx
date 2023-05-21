import React from 'react';

export default function Item({ label = 'label item', value = 'value item' }) {
  return (
    <p className="text-white flex flex-col pb-4">
      <strong>{label}</strong> {value}
    </p>
  );
}
