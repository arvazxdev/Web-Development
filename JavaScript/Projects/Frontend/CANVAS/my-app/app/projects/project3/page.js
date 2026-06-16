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


        ctx.beginPath();
        ctx.arc(195, 195, 100, 0, Math.PI * 2);

        ctx.strokeStyle = 'blue';
        ctx.lineWidth = 20;
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(260, 65);
        ctx.lineTo(130, 210);
        ctx.lineTo(190, 210);
        ctx.lineTo(120, 320);
        ctx.lineTo(260, 170);
        ctx.lineTo(190, 175);
        ctx.closePath();
        
        ctx.lineJoin = 'round';
        
        ctx.strokeStyle = 'yellow';
        ctx.fillStyle = 'aqua';
        ctx.lineWidth = 15;
        ctx.stroke();
        ctx.fill();



    }, []);

    return (
        <div onClick={() => location.reload()} className='text-white h-screen bg-black w-screen flex'>
            <canvas ref={canvasRef} className='w-full h-full bg-white' />
        </div>
    )
}

export default Page