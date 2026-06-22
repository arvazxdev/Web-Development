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

        ctx.fillStyle = 'rgba(0, 150, 255, .6)';
        ctx.fillRect(55, 55, 495, 60);

        ctx.strokeStyle = 'rgb(0, 150, 255)';
        ctx.lineWidth = 15;
        ctx.roundRect(50, 50, 500, 350, 20);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(50, 120);
        ctx.lineTo(550, 120);
        ctx.moveTo(100, 85);
        ctx.lineTo(100, 85);
        ctx.moveTo(130, 85);
        ctx.lineTo(130, 85);
        ctx.moveTo(160, 85);
        ctx.lineTo(160, 85);
        ctx.lineCap = 'round';
        ctx.stroke();


        // Browser

        ctx.beginPath();
        ctx.arc(300, 260, 110, 0, Math.PI * 2);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(300, 155);
        ctx.lineTo(300, 365);
        ctx.moveTo(195, 260);
        ctx.lineTo(400, 260);
        ctx.stroke();

        ctx.beginPath();
        ctx.ellipse(300, 260, 60, 110, 0, 0, 2 * Math.PI);
        ctx.stroke();

        ctx.beginPath();
        ctx.ellipse(300, 185, 75, 25, 0, 0, Math.PI);
        ctx.stroke();

        ctx.beginPath();
        ctx.roundRect(225, 157, 145, 50, 50);
        ctx.fill();

        ctx.beginPath();
        ctx.ellipse(300, 340, 75, 25, 0, Math.PI, 2 * Math.PI);
        ctx.stroke();

        ctx.beginPath();
        ctx.roundRect(225, 315, 145, 49, 50);
        ctx.fill()


    }, []);

    return (
        <div onClick={() => location.reload()} className='text-white h-screen bg-black w-screen flex'>
            <canvas ref={canvasRef} className='p-10 w-full h-full bg-white' />
        </div>
    )
}

export default Page