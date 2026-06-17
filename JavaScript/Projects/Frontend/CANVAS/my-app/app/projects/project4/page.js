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

        ctx.strokeStyle = 'black'
        ctx.lineWidth = 1;
        let i = 0;
        let j = 300;

        while (i < 500) {
            ctx.roundRect(j, j, i, i, 500);
            ctx.stroke();
            i += 12
            j -= 6;
        }


    }, []);

    return (
        <div onClick={() => location.reload()} className='text-white h-screen bg-black w-screen flex'>
            <canvas ref={canvasRef} className='w-full h-full bg-white' />
        </div>
    )
}

export default Page