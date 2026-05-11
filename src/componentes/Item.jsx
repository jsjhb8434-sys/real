// Item.jsx
import './Item.css'

const ETIQUETAS = {
  pendiente:  'Pendiente',
  progreso:   'En Progreso',
  completada: 'Completada',
}

function Item({ tarea }) {
  return (
    <article className={`item item--${tarea.estado}`}>
      <p className="item__titulo">{tarea.titulo}</p>
      <div className="item__footer">
        <span className="item__fecha">📅 {tarea.fecha}</span>
        <span className={`item__estado item__estado--${tarea.estado}`}>
          {ETIQUETAS[tarea.estado]}
        </span>
      </div>
    </article>
  )
}

export default Item