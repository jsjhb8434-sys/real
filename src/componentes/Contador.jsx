// Contador.jsx
import './Contador.css'

function Contador({ nombre, pendientes, enProgreso, completadas }) {
  return (
    <div className="contador">
      <h2 className="contador__saludo">Hola, {nombre}</h2>
      <p className="contador__resumen">
        <span>Tienes {pendientes} pendientes</span>
        <span className="contador__sep">•</span>
        <span>{enProgreso} en progreso</span>
        <span className="contador__sep">•</span>
        <span>{completadas} completadas</span>
      </p>
    </div>
  )
}

export default Contador