// Lista.jsx
import './Lista.css'
import Item from './Item'

function Columna({ titulo, estado, tareas }) {
  return (
    <div className="lista__columna">
      <div className="lista__columna-header">
        <span className={`lista__indicador lista__indicador--${estado}`} />
        <span className="lista__columna-nombre">{titulo}</span>
        <span className="lista__badge">{tareas.length}</span>
      </div>
      {tareas.map(tarea => (
        <Item key={tarea.id} tarea={tarea} />
      ))}
    </div>
  )
}

function Lista({ pendientes, enProgreso, completadas }) {
  return (
    <div className="lista__grid">
      <Columna titulo="Pendiente"   estado="pendiente"  tareas={pendientes}  />
      <Columna titulo="En Progreso" estado="progreso"   tareas={enProgreso}  />
      <Columna titulo="Completada"  estado="completada" tareas={completadas} />
    </div>
  )
}

export default Lista