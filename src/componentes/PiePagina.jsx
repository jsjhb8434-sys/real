// PiePagina.jsx
import './PiePagina.css'

function PiePagina() {
  return (
    <aside className="pie-pagina">
      <div className="pie-pagina__logo">
        <div className="pie-pagina__logo-icono">✓</div>
        <span className="pie-pagina__logo-nombre">Tareas</span>
      </div>

      <nav className="pie-pagina__nav">
        <button className="pie-pagina__nav-item">
          ▦ Inicio
        </button>
        <button className="pie-pagina__nav-item pie-pagina__nav-item--activo">
          ✓ Tareas
        </button>
        <button className="pie-pagina__nav-item">
          ⚙ Ajustes
        </button>
      </nav>

      <div className="pie-pagina__bottom">
        <button className="pie-pagina__ayuda">?</button>
      </div>
    </aside>
  )
}

export default PiePagina