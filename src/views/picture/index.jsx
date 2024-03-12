import { useState } from 'react';
import './index.css'
export default function Picture() {
  const [status, setStatus] = useState(false)
  let divClass = 'background';
  let imgClass = 'picture';
  if(status) {
    imgClass += ' picture--active'
  }else {
    divClass += ' background--active'
  }
  return (
    <>
      <div>{divClass}</div>
      <div>{imgClass}</div>
      <div className={divClass} onClick={() => {
        setStatus(false);
      }}>
        <img
          onClick={e => {
            e.stopPropagation();
            setStatus(true);
          }}
          className={imgClass}
          alt="react.svg"
          src="../src/assets/react.svg"
        />
      </div>
    </>
  );
}