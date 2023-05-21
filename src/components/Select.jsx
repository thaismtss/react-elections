import React from 'react';

export default function Select({
  label = 'label Select',
  options = [],
  onSelectCity = null,
}) {
  function handleSelectCity({ currentTarget }) {
    if (onSelectCity) {
      onSelectCity(currentTarget.value);
    }
  }

  return (
    <div className="space-x-1 pt-4 text-sm">
      <label htmlFor="">{label}</label>
      <select
        name=""
        id=""
        className="p-1 rounded-lg bg-violet-200"
        onChange={handleSelectCity}
      >
        {options.map(({ id, name }) => {
          return (
            <option key={id} value={id}>
              {name}
            </option>
          );
        })}
      </select>
    </div>
  );
}
