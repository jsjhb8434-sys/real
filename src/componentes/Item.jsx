// Item.jsx
import { useState } from 'react'
import './Item.css'

const ETIQUETAS = {
  pendiente:  'Pendiente',
  progreso:   'En Progreso',
  completada: 'Completada',
}

function Item({ tarea, onCompletar, onEliminar }) {
  const [menuAbierto, setMenuAbierto] = useState(false)

  const abrirMenu = (e) => {
    e.stopPropagation()
    setMenuAbierto(true)
  }

  const cerrarMenu = () => setMenuAbierto(false)

  const handleCompletar = (e) => {
    e.stopPropagation()
    onCompletar(tarea.id)
    cerrarMenu()
  }

  const handleEliminar = (e) => {
    e.stopPropagation()
    onEliminar(tarea.id)
    cerrarMenu()
  }

  return (
    <>
      {/* Overlay transparente para cerrar menú al clicar fuera */}
      {menuAbierto && (
        <div className="item__menu-overlay" onClick={cerrarMenu} />
      )}

      <article className={`item item--${tarea.estado}`} onClick={abrirMenu}>
        <p className="item__titulo">{tarea.titulo}</p>
        <div className="item__footer">
          <span className="item__fecha">📅 {tarea.fecha}</span>
          <span className={`item__estado item__estado--${tarea.estado}`}>
            {ETIQUETAS[tarea.estado]}
          </span>
        </div>

        {/* Menú contextual */}
        {menuAbierto && (
          <div className="item__menu" onClick={e => e.stopPropagation()}>
            <p className="item__menu-titulo">{tarea.titulo}</p>

            {tarea.estado !== 'completada' && (
              <button className="item__menu-btn" onClick={handleCompletar}>
                <span className="item__menu-icono">✅</span>
                Marcar como completada
              </button>
            )}

            <button
              className="item__menu-btn item__menu-btn--eliminar"
              onClick={handleEliminar}
            >
              <span className="item__menu-icono">🗑</span>
              Eliminar tarea
            </button>

            <button
              className="item__menu-btn item__menu-btn--cancelar"
              onClick={cerrarMenu}
            >
              <span className="item__menu-icono">❌</span>
              Cancelar
            </button>
          </div>
        )}
      </article>
    </>
  )
}

export default Item