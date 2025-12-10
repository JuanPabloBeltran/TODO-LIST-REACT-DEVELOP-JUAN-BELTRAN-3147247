import { TrashIcon } from '@heroicons/react/24/solid';


export default function TodoItem({ tarea, toggleCompleted, eliminarTarea }) {
  
  

  return (
    <div className="flex justify-between items-center bg-white/3 text-white p-4 rounded-lg shadow-sm border border-white/5 transition-transform duration-150 hover:translate-y-0.5">
      <div className="flex items-center gap-4">
        <input className="w-5 h-5 accent-green-500" type="checkbox" checked={tarea.completed} onChange={() => toggleCompleted(tarea.id)} />
        <span className={tarea.completed ? 'line-through text-gray-400' : 'text-white'}>{tarea.text}</span>
      </div>

      <button aria-label="eliminar" onClick={() => eliminarTarea(tarea.id)} className="opacity-90 hover:opacity-100">
        <TrashIcon className="w-5 h-5 text-red-400 hover:text-red-500" />
      </button>
    </div>
  );
}