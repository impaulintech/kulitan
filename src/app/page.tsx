"use client";
import { useState } from 'react';
import kulitanizeWords from '@/utils/kulitanizeWords';

export default function Home() {
  const [inputValue, setInputValue] = useState('agagagganggaanga');

  const handleChange = (e:any) => {
    setInputValue(e.target.value);
  };

  const result = kulitanizeWords(inputValue);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-5 p-24">
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Enter text"
        className='text-slate-900'
      />
      <p>Result: {result}</p>
    </main>
  );
}
