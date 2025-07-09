import React, { useState } from 'react';

function Contador() {
  const [contador, setContador] = useState(0); // Valor inicial: 0

  const aumentar = () => setContador(contador + 1);
  const disminuir = () => setContador(contador - 1);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Contador: {contador}</h2>
      <button onClick={aumentar} style={{ marginRight: '10px' }}>Incrementa</button>
      <button onClick={disminuir}>Disminuir</button>
    </div>
  );
}

export default Contador;
