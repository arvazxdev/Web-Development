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

    ctx.lineWidth = 5;
    ctx.lineCap = 'round';

    let i = 1;

    while (i < 7) {
      ctx.beginPath();
      ctx.arc(110, 110, i * 16.667, 0, Math.PI * 2);
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(310, 110, i * 16.667, 0, Math.PI * 2);
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(110, 310, i * 16.667, 0, Math.PI * 2);
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(310, 310, i * 16.667, 0, Math.PI * 2);
      ctx.stroke();

      i++;
    }


    ctx.strokeStyle = 'magenta';
    ctx.lineWidth = 5.5;

    let j = 1;
    
    let s = -.7;
    let t = 2.26;

    let s1 = .9;
    let t1 = 3.83;

    let s2 = 4.02;
    let t2 = .68;

    let s3 = 2.45;
    let t3 = 5.4;

    while (j < 7) {
      ctx.beginPath();
      ctx.arc(110, 110, j * 16.67, s, t);
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(310, 110, j * 16.67, s1, t1);
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(110, 310, j * 16.67, s2, t2);
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(310, 310, j * 16.67, s3, t3);
      ctx.stroke();

      j++;

      s += .055;
      t -= .055;

      s1 += .055;
      t1 -= .055;

      s2 += .055;
      t2 -= .055;

      s3 += .055;
      t3 -= .055;
    }

    // ctx.beginPath();
    // ctx.fillStyle = 'rgba(0, 0, 0, .7)'
    // ctx.arc(210, 210, 143, 0, Math.PI * 2);
    // ctx.fill();


  }, []);

  return (
    <div onClick={() => location.reload()} className='text-white h-screen bg-black w-screen flex'>
      <canvas ref={canvasRef} className='p-10 w-full h-full bg-white' />
    </div>
  )
}

export default Page