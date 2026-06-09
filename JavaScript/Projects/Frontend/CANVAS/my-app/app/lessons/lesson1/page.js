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


    // SECION 1 - Rectangles

    // Square
    ctx.fillStyle = 'blue';
    ctx.fillRect(50, 50, 100, 100);

    // Rectangle
    ctx.fillStyle = 'orange';
    ctx.fillRect(200, 50, 150, 80);

    // Transparent Rectangle
    ctx.fillStyle = 'rgba(67, 166, 233, 0.5)';
    ctx.fillRect(400, 50, 120, 100);

    // Rectangle Outline only
    ctx.strokeStyle = 'purple';
    ctx.lineWidth = 10;
    ctx.fillStyle = 'rgba(67, 166, 233, 0.5)';
    ctx.strokeRect(550, 50, 90, 120);
    ctx.fillRect(555, 55, 80, 110);



    // SECTION 2 - Circles & Arcs

    // Full Circle
    ctx.beginPath(); // Required for circles and complex shapes
    ctx.arc(50, 250, 40, 0, Math.PI * 2);
    ctx.fillStyle = 'red';
    ctx.fill();


    // Half Circle
    ctx.beginPath();
    ctx.arc(180, 250, 50, 0, Math.PI);
    ctx.fillStyle = 'pink';
    ctx.fill();


    // Quarter Circle 
    ctx.beginPath();
    ctx.moveTo(300, 250);
    ctx.arc(300, 250, 40, 0, 2.5);
    ctx.fillStyle = 'green';
    ctx.fill();

    // Circle starting form TOP (12 o'clock)
    ctx.beginPath();
    ctx.moveTo(420, 270);
    ctx.arc(450, 250, 80, -Math.PI / 2, Math.PI);
    ctx.fillStyle = 'aqua';
    ctx.fill();

    // Circle Outline only
    ctx.beginPath();
    ctx.moveTo(620, 270);
    // ctx.lineTo(620, 270); // Same as moveTo here only.
    ctx.arc(620, 270, 60, 0, 5.6);
    ctx.strokeStyle = 'blue';
    ctx.lineWidth = 20;
    ctx.stroke();
    // ctx.fillStyle = 'rgba(100, 200, 100, 0.5)';
    // ctx.fill();



    // SECTION 3 - Text

    ctx.font = 'italic 20px monospace';
    ctx.fillStyle = 'blue';
    ctx.fillText('Hello Canvas!', 50, 400);
    ctx.fillStyle = 'aqua';
    ctx.fillRect(40, 430, 250, 30);
    ctx.font = '16px Arial';
    ctx.fillStyle = 'green'
    ctx.fillText('Written & Styled by Canvas 🥳', 50, 450);



    // SECTION 4 - Lines & Paths

    // Simple Straight Line
    ctx.beginPath();

    // From
    ctx.moveTo(50, 500);
    // To
    ctx.lineTo(200, 600);

    ctx.strokeStyle = 'magenta';
    ctx.lineWidth = 2;
    ctx.stroke();


    // Dashed Line
    ctx.beginPath();
    ctx.moveTo(200, 500);
    ctx.lineTo(200, 600);
    ctx.setLineDash([2, 3]);
    

    ctx.strokeStyle = 'purple';
    ctx.lineWidth = 2;
    ctx.stroke();

    ctx.setLineDash([]); // Reset to solid line for future drawings


    // Line with multiple segments (Polyline)
    ctx.beginPath();
    ctx.moveTo(400, 600);
    ctx.lineTo(500, 570);
    ctx.lineTo(550, 590);
    ctx.lineTo(600, 560);
    ctx.lineTo(650, 580);
    ctx.lineTo(700, 400);
    ctx.closePath();

    ctx.strokeStyle = 'blue';
    ctx.fillStyle = 'yellow';
    ctx.lineWidth = 4;
    ctx.lineJoin = 'round';
    ctx.stroke();
    ctx.fill();

    // ctx.lineJoin = 'bevel';
    ctx.lineJoin = 'miter'; // Default

    // Triangle
    ctx.beginPath();
    ctx.moveTo(100, 650);
    ctx.lineTo(50, 750);
    ctx.lineTo(150, 750);
    ctx.closePath();

    ctx.fillStyle = 'magenta';
    ctx.strokeStyle = 'cyan';
    ctx.lineWidth = 6;
    ctx.stroke();
    ctx.fill();


    // Arrow 
    ctx.beginPath();
    ctx.moveTo(300, 750);
    ctx.lineTo(200, 670);

    ctx.strokeStyle = 'darkblue';
    ctx.lineWidth = 5;
    ctx.stroke();

    // Arrow Head
    ctx.beginPath();
    ctx.moveTo(207, 700);
    ctx.lineTo(186, 660);
    ctx.lineTo(232, 670);
    ctx.lineTo(200, 670);
    ctx.closePath();

    ctx.fillStyle = 'red'
    ctx.strokeStyle = 'darkblue';
    ctx.lineWidth = 3;
    ctx.stroke();
    ctx.fill();

    // Arrow Tail
    ctx.beginPath();
    ctx.moveTo(300, 750);
    ctx.lineTo(300, 770);
    ctx.lineTo(275.5, 730);
    ctx.lineTo(320, 745);
    ctx.closePath();

    ctx.fillStyle = 'aqua';
    ctx.strokeStyle = 'darkblue';
    ctx.lineWidth = 4;
    ctx.stroke();
    ctx.fill();



    // SECTION 5 - Gradients

    // Linear Gradient - Left to Right
    const linearGradient = ctx.createLinearGradient(50, 1, 250, 1);
    linearGradient.addColorStop(0, 'red');
    linearGradient.addColorStop(.5, 'yellow');
    linearGradient.addColorStop(1, 'green');

    ctx.fillStyle = linearGradient;
    ctx.fillRect(10, 800, 240, 100);
    ctx.fillRect(50, 910, 240, 100);



    // Radial Gradient
    const radialGradient = ctx.createRadialGradient(400, 900, 100, 500, 1000, 100);
    radialGradient.addColorStop(0, "skyblue");
    radialGradient.addColorStop(.5, 'white');
    radialGradient.addColorStop(1, "yellow");

    ctx.fillStyle = radialGradient;
    ctx.beginPath();
    ctx.arc(400, 900, 100, 0, 2 * Math.PI);
    ctx.fill();



    // Grid
    ctx.strokeStyle = 'rgba(0,0,0,.3)';
    ctx.lineWidth = .5;

    ctx.beginPath();
    for (let i = 1; i < 1000; i++) {
      ctx.moveTo(i * 50, 0);
      ctx.lineTo(i * 50, 2000);
      ctx.moveTo(0, i * 50);
      ctx.lineTo(2000, i * 50);
    }
    ctx.stroke();


  }, []);


  return (
    <div onClick={() => location.reload()} className='text-white h-400 bg-black flex'>
      <canvas ref={canvasRef} className='w-full h-full bg-white' />
    </div>
  )
}

export default Page