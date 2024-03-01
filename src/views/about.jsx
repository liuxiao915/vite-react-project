import {useState} from 'react'
import { Button } from 'antd';

export default function About() {
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount(count + 1);
  }
  return (
    <Button onClick={handleClick} type="primary">Clicked {count} times</Button>
  );
}