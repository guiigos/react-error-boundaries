import React, { useState } from 'react';

const Trigger = () => {
  const [show, setShow] = useState(false);

  if (show) {
    throw new Error('An error occurred!');
  }

  return (
    <p>
      <button onClick={() => setShow(true)}>click</button>
    </p>
  );
}

export default Trigger;
