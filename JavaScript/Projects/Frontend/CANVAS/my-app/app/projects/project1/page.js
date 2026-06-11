'use client'
import { useRef, useEffect } from 'react';

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
        ctx.moveTo(200, 200);
        ctx.arc(200, 200, 100, 0, 1);
        ctx.lineWidth = 40;
        ctx.strokeStyle = 'blue';
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(200, 200, 100, 1, 2.8);
        ctx.strokeStyle = 'rgb(11, 134, 22)';
        ctx.lineWidth = 40;
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(200, 200, 100, 2.8, 3.7);
        ctx.strokeStyle = 'gold';
        ctx.lineWidth = 40;
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(200, 200, 100, 3.7, 5.5);
        ctx.strokeStyle = 'red';
        ctx.lineWidth = 40;
        ctx.stroke();

    }, [])


    return (
        <div className='h-screen' onClick={() => location.reload()}>
            <canvas ref={canvasRef} className='bg-white h-full w-full' />
        </div>
    )
}

export default Page
