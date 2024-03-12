import { useState } from 'react';
import { useImmer } from 'use-immer';
import { initialTravelPlan } from './index.js';

export default function Places() {
  // const [plan, setPlan] = useState(initialTravelPlan);
  const [plan, updatePlan] = useImmer(initialTravelPlan);
  function handleComplete(parentId, childId) {
    // const parent = plan[parentId];
    // // 创建一个其父级地点的新版本
    // // 但不包括子级 ID。
    // const nextParent = {
    //   ...parent,
    //   childIds: parent.childIds
    //     .filter(id => id !== childId)
    // };
    // // 更新根 state 对象...
    // setPlan({
    //   ...plan,
    //   // ...以便它拥有更新的父级。
    //   [parentId]: nextParent
    // });



    updatePlan(draft => {
      // 从父级地点的子 ID 中移除。
      const parent = draft[parentId];
      parent.childIds = parent.childIds
        .filter(id => id !== childId);

      // 删除这个地点和它的所有子目录。
      deleteAllChildren(childId);
      function deleteAllChildren(id) {
        const place = draft[id];
        place.childIds.forEach(deleteAllChildren);
        delete draft[id];
      }
    });
  }

  const root = plan[0];
  const planetIds = root.childIds;
  return (
    <>
      <h2>Places to visit</h2>
      <ol>
        {planetIds.map(id => (
          <PlaceTree
            key={id}
            id={id}
            parentId={0}
            placesById={plan}
            onComplete={handleComplete}
          />
        ))}
      </ol>
    </>
  );
}

function PlaceTree({ id, parentId, placesById, onComplete }) {
  const place = placesById[id];
  const childIds = place.childIds;
  return (
    <li>
      {place.title}
      <button onClick={() => {
        onComplete(parentId, id);
      }}>
        Complete
      </button>
      {childIds.length > 0 &&
        <ol>
          {childIds.map(childId => (
            <PlaceTree
              key={childId}
              id={childId}
              parentId={id}
              placesById={placesById}
              onComplete={onComplete}
            />
          ))}
        </ol>
      }
    </li>
  );
}