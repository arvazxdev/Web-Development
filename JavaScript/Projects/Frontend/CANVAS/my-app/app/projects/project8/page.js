'use client'
import { useEffect, useRef } from 'react';
import Link from 'next/link';

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


        const linearGradient = ctx.createLinearGradient(100, 300, 400, 300);
        linearGradient.addColorStop(0, 'violet');
        linearGradient.addColorStop(1, 'rgb(0, 140, 255)');



        ctx.fillStyle = linearGradient;

        ctx.beginPath();
        ctx.arc(300, 300, 200, 0, 2 * Math.PI);
        ctx.fill();

        ctx.beginPath();
        ctx.fillStyle = 'white';
        ctx.moveTo(100, 100);
        ctx.arc(100, 100, 200, 0, Math.PI / 2);
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(500, 100);
        ctx.arc(500, 100, 200, Math.PI / 2, Math.PI);
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(100, 500);
        ctx.arc(100, 500, 200, Math.PI * 1.5, Math.PI * 2);
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(500, 500);
        ctx.arc(500, 500, 200, Math.PI, Math.PI * 1.5);
        ctx.fill();

        ctx.beginPath();
        ctx.arc(300, 300, 200, 0, Math.PI * 2);
        
        ctx.lineWidth = 40;
        ctx.strokeStyle = 'white';
        ctx.stroke();


    }, []);


    return (
        <div onClick={() => location.reload()} className='text-white h-400 bg-black flex'>
            <canvas ref={canvasRef} className='w-full h-full bg-white' />
        </div>
    )
}

export default Page