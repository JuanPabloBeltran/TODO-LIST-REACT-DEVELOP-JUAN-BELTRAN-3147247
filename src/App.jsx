import TodoItem from "./TodoItem"
import { useState } from "react"

export default function App() {

  const [tareas, setTareas] = useState([]);

  const [input, setInput] = useState("");


  const   agregarTarea = () => {

    if (input.trim()) {
      setTareas([...tareas, { id: Date.now(), text: input.trim(), completed: false }]);
      setInput("");
    };

  }


  const toggleCompleted = (id) => {
    setTareas(
      tareas.map((tarea) =>
        tarea.id === id ? { ...tarea, completed: !tarea.completed } : tarea
      )
    );
  };


  const eliminarTarea = (id) => {
    setTareas(tareas.filter((tarea) => tarea.id !== id));

  }

  return (
    <div className="app-shell">
      <nav className="nav flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <img src="/sena-logo.svg" alt="sena" className="logo" />
          <span className="hidden sm:inline font-semibold text-lg subtle">Centro de Gestión</span>
        </div>

        <ul className="flex items-center gap-6 text-sm">
          <li className="cursor-pointer hover:text-green-300">Inicio</li>
          <li className="cursor-pointer hover:text-green-300">Tareas</li>
          <li className="cursor-pointer hover:text-green-300">Informes</li>
        </ul>

        <div className="flex items-center gap-3">
          <button className="btn-soft subtle">Iniciar sesión</button>
          <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded">Nuevo</button>
        </div>
      </nav>

      <header className="hero">
        <div>
          <h1 className="text-3xl sm:text-4xl font-extrabold header-title">Centro de Gestión de Mercados, Logística y Tecnología</h1>
          <p className="mt-2 text-gray-300">Gestiona tareas, coordina logística y visualiza métricas.</p>
        </div>
        <div className="hidden sm:block">
          <div className="p-3 rounded-lg bg-white/3 border border-white/5">Panel de control • Resumen</div>
        </div>
      </header>

      <div className="bg-[rgba(255,255,255,0.03)] p-6 rounded-2xl shadow-lg">
        <div className="flex gap-3 mb-5">
          <input className="flex-1 p-3 rounded-lg bg-transparent border border-gray-700 placeholder:text-gray-400" type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Añadir nueva tarea" />
          <button className="bg-green-600 hover:bg-green-700 text-white px-5 rounded-lg font-semibold" onClick={agregarTarea} >Añadir</button>
        </div>

        <div className="space-y-3">
          {tareas.length === 0 ? (
            <div className="text-center py-8 text-gray-300">No hay tareas aún. Añade una en el campo superior.</div>
          ) : (
            tareas.map((tarea) => (
              <TodoItem key={tarea.id} tarea={tarea} toggleCompleted={toggleCompleted} eliminarTarea={eliminarTarea} />
            ))
          )}
        </div>
      </div>
    </div>
  )
}