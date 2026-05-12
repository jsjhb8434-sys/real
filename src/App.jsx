// App.jsx
import { useState, useEffect } from 'react'
import Encabezado from './componentes/Encabezado'
import Contador from './componentes/Contador'
import Lista from './componentes/Lista'
import PiePagina from './componentes/PiePagina'
import Formulario from './componentes/Formulario'
import './App.css'

function App() {
  const [mostrarFormulario, setMostrarFormulario] = useState(false)
  const [oscuro, setOscuro] = useState(false)
  const [tareas, setTareas] = useState([
    { id: 1, titulo: "Actualizar documentación técnica",  fecha: "18 May", estado: "pendiente"  },
    { id: 2, titulo: "Preparar presentación Q2",          fecha: "12 May", estado: "pendiente"  },
    { id: 3, titulo: "Reunión con cliente",               fecha: "13 May", estado: "pendiente"  },
    { id: 4, titulo: "Revisar propuesta de diseño",       fecha: "15 May", estado: "progreso"   },
    { id: 5, titulo: "Optimizar rendimiento del sistema", fecha: "25 May", estado: "progreso"   },
    { id: 6, titulo: "Testing de nueva funcionalidad",    fecha: "20 May", estado: "completada" },
    { id: 7, titulo: "Implementar autenticación segura",  fecha: "30 May", estado: "completada" },
  ])

  useEffect(() => {
    document.documentElement.classList.toggle('dark', oscuro)
  }, [oscuro])

  const pendientes  = tareas.filter(t => t.estado === 'pendiente')
  const enProgreso  = tareas.filter(t => t.estado === 'progreso')
  const completadas = tareas.filter(t => t.estado === 'completada')

  // ✅ Mueve la tarea a "completada"
  const completarTarea = (id) => {
    setTareas(prev =>
      prev.map(t => t.id === id ? { ...t, estado: 'completada' } : t)
    )
  }

  // 🗑 Elimina la tarea
  const eliminarTarea = (id) => {
    setTareas(prev => prev.filter(t => t.id !== id))
  }

  // ➕ Agrega nueva tarea
  const agregarTarea = (nueva) => {
    setTareas(prev => [...prev, { id: Date.now(), ...nueva }])
    setMostrarFormulario(false)
  }

  return (
    <div className="app">
      <PiePagina />

      <main className="app__main">
        <Encabezado
          onNuevaTarea={() => setMostrarFormulario(true)}
          oscuro={oscuro}
          onToggleTema={() => setOscuro(!oscuro)}
        />

        <Contador
          nombre="Juan"
          pendientes={pendientes.length}
          enProgreso={enProgreso.length}
          completadas={completadas.length}
        />

        <Lista
          pendientes={pendientes}
          enProgreso={enProgreso}
          completadas={completadas}
          onCompletar={completarTarea}
          onEliminar={eliminarTarea}
        />

        {mostrarFormulario && (
          <Formulario
            onGuardar={agregarTarea}
            onCancelar={() => setMostrarFormulario(false)}
          />
        )}
      </main>
    </div>
  )
}

export default App