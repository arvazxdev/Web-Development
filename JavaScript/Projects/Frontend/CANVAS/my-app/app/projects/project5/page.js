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


    ctx.strokeStyle = 'rgb(0, 255, 0)';
    ctx.lineWidth = 5.5;

    let j = 1;
    
    let s = -1;
    let t = 2.55;

    let s1 = .6;
    let t1 = 4.1;

    let s2 = 3.74;
    let t2 = 1;

    let s3 = 2.15;
    let t3 = 5.65;

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

      s += 1;
      t -= 1;

      s1 += 1;
      t1 -= 1;

      s2 += 1;
      t2 -= 1;

      s3 += 1;
      t3 -= 1;
    }


  }, []);

  return (
    <div onClick={() => location.reload()} className='text-white h-screen bg-black w-screen flex'>
      <canvas ref={canvasRef} className='p-10 w-full h-full bg-white' />
    </div>
  )
}

export default Page