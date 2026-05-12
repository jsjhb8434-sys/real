// PiePagina.jsx
import { useState } from 'react'
import './PiePagina.css'

function PiePagina() {
  const [abierto, setAbierto] = useState(false)

  return (
    <>
      {/* Botón hamburguesa solo visible en móvil */}
      <button
        className="pie-pagina__hamburguesa"
        onClick={() => setAbierto(!abierto)}
        aria-label="Menú"
      >
        <span />
        <span />
        <span />
      </button>

      {/* Overlay para cerrar al tocar fuera */}
      {abierto && (
        <div
          className="app__overlay app__overlay--visible"
          onClick={() => setAbierto(false)}
        />
      )}

      <aside className={`pie-pagina ${abierto ? 'pie-pagina--abierto' : ''}`}>
        <div className="pie-pagina__logo">
          <div className="pie-pagina__logo-icono">✓</div>
          <span className="pie-pagina__logo-nombre">Tareas</span>
        </div>

        <nav className="pie-pagina__nav">
          <button className="pie-pagina__nav-item" onClick={() => setAbierto(false)}>
            ▦ Inicio
          </button>
          <button className="pie-pagina__nav-item pie-pagina__nav-item--activo" onClick={() => setAbierto(false)}>
            ✓ Tareas
          </button>
          <button className="pie-pagina__nav-item" onClick={() => setAbierto(false)}>
            ⚙ Ajustes
          </button>
        </nav>

        <div className="pie-pagina__bottom">
          <button className="pie-pagina__ayuda">?</button>
        </div>
      </aside>
    </>
  )
}

export default PiePagina