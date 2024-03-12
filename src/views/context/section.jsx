import { useContext } from 'react';
import { LevelContext } from './levelContext.jsx';
// 由于 context 让你可以从上层的组件读取信息，每个 Section 都会从上层的 Section 读取 level，并自动向下层传递 level + 1。
export default function Section({ children }) {
  const level = useContext(LevelContext);
  return (
    <section className="section">
      <LevelContext.Provider value={level + 1}>
        {children}
      </LevelContext.Provider>
    </section>
  );
}
