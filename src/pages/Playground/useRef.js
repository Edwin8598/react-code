import React, { useRef } from 'react';

function EnfocarInput() {
  const inputRef = useRef(null); // Creamos la referencia al input

  const enfocar = () => {
    inputRef.current.focus(); // Accedemos al DOM y usamos .focus()
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <input
        ref={inputRef}
        type="text"
        placeholder="Escribe algo..."
        style={{ padding: '10px', width: '200px', marginRight: '10px' }}
      />
      <button onClick={enfocar}>Enfocar</button>
    </div>
  );
}

export default EnfocarInput;
