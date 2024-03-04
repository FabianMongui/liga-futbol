import React from 'react';
import equiposData from '../data/grupoBData.json';
import '../styles.css';

function ordenarDatos() {
  equiposData.sort((a, b) => b.puntos - a.puntos);
}

function TablaPosiciones() {
  ordenarDatos();

  return (
    <div className="table-responsive mt-5">
      <h5>Grupo B</h5>
      <table className="table table-striped">
        <thead className='table-info'>
          <tr>
            <th className="col-4">Equipo</th>
            <th style={{ width: '15%', fontSize: 'x-small' }}>Puntos</th>
            <th style={{ width: '15%', fontSize: 'x-small' }}>Partidos jugados</th>
            <th style={{ width: '15%', fontSize: 'x-small' }}>Partidos ganados</th>
            <th style={{ width: '15%', fontSize: 'x-small' }}>Partidos empatados</th>
            <th style={{ width: '15%', fontSize: 'x-small' }}>Partidos perdidos</th>
            <th style={{ width: '15%', fontSize: 'x-small' }}>Goles favor</th>
            <th style={{ width: '15%', fontSize: 'x-small' }}>Goles contra</th>
            <th style={{ width: '15%', fontSize: 'x-small' }}>Dif. Goles</th>
          </tr>
        </thead>
        <tbody>
          {equiposData.map((equiposData, index) => (
            <tr key={index}>
              <td className="col-3" style={{ fontWeight: '500', fontSize: 'small' }}>{equiposData.equipo}</td>
              <td style={{ width: '15%' }}>{equiposData.puntos}</td>
              <td style={{ width: '15%' }}>{equiposData.partidosJugados}</td>
              <td style={{ width: '15%' }}>{equiposData.partidosGanados}</td>
              <td style={{ width: '15%' }}>{equiposData.partidosEmpatados}</td>
              <td style={{ width: '15%' }}>{equiposData.partidosPerdidos}</td>
              <td style={{ width: '15%' }}>{equiposData.golesFavor}</td>
              <td style={{ width: '15%' }}>{equiposData.golesContra}</td>
              <td style={{ width: '15%' }}>{equiposData.goles}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TablaPosiciones;
