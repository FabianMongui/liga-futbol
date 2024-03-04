import React from 'react';
import proximosPartidos from '../data/proximosPartidos.json'

function ProximosPartidos() {
  // Aquí puedes definir la lógica para obtener los próximos partidos
  

  return (
    <div className="card mt-4 shadow bg-body rounded">
      <div className="card-header" style={{backgroundColor: "#cff4fc"}}>Próximos Partidos Domingo 10</div>
      <ul className="list-group list-group-flush">
        {proximosPartidos.map((partido, index) => (
          <li key={index} className="list-group-item" style={{fontSize: 'small'}}>
              <div>{partido.hora}</div>
              <strong>{partido.equipoLocal}</strong> vs <strong>{partido.equipoVisitante}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProximosPartidos;
