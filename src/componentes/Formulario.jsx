// Formulario.jsx
import { useState } from 'react'
import './Formulario.css'

function Formulario({ onGuardar, onCancelar }) {
  const [titulo, setTitulo] = useState('')
  const [fecha, setFecha]   = useState('')
  const [estado, setEstado] = useState('pendiente')

  const manejarGuardar = () => {
    if (!titulo.trim()) return
    onGuardar({ titulo, fecha: fecha || 'Sin fecha', estado })
  }

  return (
    <div className="formulario__overlay">
      <div className="formulario">
        <h2 className="formulario__titulo">Nueva Tarea</h2>

        <div className="formulario__grupo">
          <label className="formulario__label">Título</label>
          <input
            className="formulario__input"
            type="text"
            placeholder="Nombre de la tarea..."
            value={titulo}
            onChange={e => setTitulo(e.target.value)}
          />
        </div>

        <div className="formulario__grupo">
          <label className="formulario__label">Fecha</label>
          <input
            className="formulario__input"
            type="date"
            value={fecha}
            onChange={e => setFecha(e.target.value)}
          />
        </div>

        <div className="formulario__grupo">
          <label className="formulario__label">Estado</label>
          <select
            className="formulario__select"
            value={estado}
            onChange={e => setEstado(e.target.value)}
          >
            <option value="pendiente">Pendiente</option>
            <option value="progreso">En Progreso</option>
            <option value="completada">Completada</option>
          </select>
        </div>

        <div className="formulario__acciones">
          <button className="formulario__btn-cancelar" onClick={onCancelar}>
            Cancelar
          </button>
          <button className="formulario__btn-guardar" onClick={manejarGuardar}>
            Guardar tarea
          </button>
        </div>
      </div>
    </div>
  )
}

export default Formulario