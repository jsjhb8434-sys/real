// Encabezado.jsx
import './Encabezado.css'

function Encabezado({ onNuevaTarea, oscuro, onToggleTema }) {
  return (
    <header className="encabezado">
      <h1 className="encabezado__titulo">Mis Tareas</h1>
      <div className="encabezado__acciones">
        <button
          className="encabezado__btn-tema"
          onClick={onToggleTema}
          title={oscuro ? 'Modo claro' : 'Modo oscuro'}
        >
          {oscuro ? '☀️' : '🌙'}
        </button>
        <button className="encabezado__btn-nueva" onClick={onNuevaTarea}>
          <span>+</span> Nueva Tarea
        </button>
      </div>
    </header>
  )
}

export default Encabezado