import React from 'react';
import { Briefcase } from 'lucide-react';

export function SelectInput({ label, name, value, onChange, options, icon }) {
  return (
    <div className="flex flex-col mb-4">
      {label && <label htmlFor={name} className="mb-1 text-gray-700">{label}</label>}
      <div className="flex items-center border rounded p-2">
        {icon && <span className="mr-2">{icon}</span>}
        <select
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          className="flex-1 outline-none"
        >
          <option value="">Select {label}</option>
          {options.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
