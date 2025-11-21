import React, { useEffect, useRef } from 'react';

const MatrixEffect = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    // --- Pega aquí la lógica de tu archivo matrix.js ---
    // Ejemplo de cómo podría empezar:
    // canvas.width = window.innerWidth;
    // canvas.height = window.innerHeight;
    // ... resto del código de animación ...

    // Placeholder para que veas que funciona
    context.fillStyle = '#0F0';
    context.font = '15px monospace';
    context.fillText('Matrix Effect Loaded...', 10, 20);
    // --- Fin del código de matrix.js ---

  }, []); // El array vacío asegura que se ejecute solo una vez

  return <canvas ref={canvasRef} className="matrix-effect"></canvas>;
};

export default MatrixEffect;
