import { useState } from 'react';
export default function Test() {
  const [status, setStatus] = useState(false)
  let a = 10
  if(status) {
    a += 1
  }
  function handleClick (e) {
    setStatus(s=>!s)
  }
  return (
    <>
      <button type="primary" onClick={handleClick}>{a}</button>
      <div>{a}</div>
    </>
  );
}