import { useEffect, useRef } from 'react';
import { Chart } from 'chart.js';

export function Graphic({ raceData }) {
  const chartRef = useRef(null); // Riferimento al canvas
  const chartInstanceRef = useRef(null); // Riferimento all'istanza del grafico

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');

    // Distruggi il grafico esistente prima di crearne uno nuovo, per evitare errori
    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }

    // Crea un nuovo grafico
    chartInstanceRef.current = new Chart(ctx, {
      type: 'line', // Cambia questo in 'bar', 'pie', etc., a seconda del tipo di grafico
      data: raceData,
      options: {
        responsive: true,
        plugins: {
          subtitle: {
            display: true,
            text: 'Titolo del Grafico'
          }
        }
      }
    });

    // Distruggi il grafico quando il componente viene smontato
    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
    };
  }, [raceData]); // Rende il grafico sensibile solo ai cambiamenti dei dati

  return <canvas ref={chartRef} />;
}
