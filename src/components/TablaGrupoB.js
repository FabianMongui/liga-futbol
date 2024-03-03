import React from 'react';
import equiposData from '../data/grupoBData.json'

function ordenarDatos() {
  equiposData.sort((a, b) => b.puntos - a.puntos);
}

function TablaPosiciones() {
  ordenarDatos();

  return (
    <div className="table-responsive mt-5">
      <h2>Grupo B</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th className="col-4">Equipo</th>
            <th style={{ width: '15%' }}>Puntos</th>
            <th style={{ width: '15%' }}>Partidos Jugados</th>
            <th style={{ width: '15%' }}>Partidos Ganados</th>
            <th style={{ width: '15%' }}>Partidos Perdidos</th>
            <th style={{ width: '15%' }}>Goles</th>
          </tr>
        </thead>
        <tbody>
          {equiposData.map((equiposData, index) => (
            <tr key={index}>
              <td className="col-3" style={{ fontWeight: '500' }}>{equiposData.equipo}</td>
              <td style={{ width: '15%' }}>{equiposData.puntos}</td>
              <td style={{ width: '15%' }}>{equiposData.partidosJugados}</td>
              <td style={{ width: '15%' }}>{equiposData.partidosGanados}</td>
              <td style={{ width: '15%' }}>{equiposData.partidosPerdidos}</td>
              <td style={{ width: '15%' }}>{equiposData.goles}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TablaPosiciones;
