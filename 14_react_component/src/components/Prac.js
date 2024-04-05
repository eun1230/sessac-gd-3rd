import React from 'react';

export default function Prac() {
  const helloStr = 'Hello, this is first practice.';
  return (
    <>
      <div
        onClick={() => {
          alert('클릭!');
        }}
        style={{ marginTop: '32px', backgroundColor: 'pink' }}
      >
        {helloStr}
      </div>
    </>
  );
}
