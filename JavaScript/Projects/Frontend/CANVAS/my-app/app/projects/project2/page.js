'use client'
import { useEffect, useRef } from 'react';

const Page = () => {

  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();

    canvas.style.width = `${rect.width}px`;
    canvas.style.height = `${rect.height}px`;

    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;

    ctx.scale(dpr, dpr);


    
    ctx.lineWidth = 2;
    ctx.strokeStyle = 'magenta';
    ctx.lineJoin = 'round';
    
    // ctx.strokeRect(50, 50, 100, 100);

    ctx.beginPath();
    ctx.moveTo(50, 50);
    ctx.lineTo(90, 90);
    ctx.lineTo(190, 90);
    ctx.lineTo(150, 50);
    ctx.closePath();

    ctx.fillStyle = 'lightblue';
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(50, 50);
    ctx.lineTo(50, 150);
    ctx.lineTo(90, 190);
    ctx.lineTo(190, 190);
    ctx.closePath();

    ctx.fillStyle = 'pink';
    ctx.fill();
    ctx.stroke();
    
    ctx.fillStyle = 'lightgreen';
    ctx.fillRect(90, 90, 100, 100);
    ctx.strokeRect(90, 90, 100, 100);


  }, []);

  return (
    <div onClick={() => location.reload()} className='text-white h-screen bg-black w-screen flex'>
      <canvas ref={canvasRef} className='w-full h-full bg-white' />
    </div>
  )
}

export default Page