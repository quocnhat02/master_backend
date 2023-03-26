import React, { useState } from 'react';

// // stateless functional component: component nhung khong su dung state
// const Toggle = () => {
//   return <div>Toggle</div>;
// };

// // stateful functional component: component co su dung state
// const Toggle2 = () => {
//   //   const [count, setCount] = useState();
//   return <div>Toggle</div>;
// };

const Toggle = () => {
  // 1.enabling state: useState(initialize value)

  // 2.initialize state: useState(false)

  // 3.reading state:

  // 4.update state:

  const [on, setOn] = useState(false);

  console.log(on, setOn); // [false, function]

  return <div>Toggle</div>;
};

export default Toggle;
