import { cn } from '@/lib/utils'

const opciones = [
  ['todas', 'Todas'],
  ['pendiente', 'Pendientes'],
  ['en proceso', 'En proceso'],
  ['resuelta', 'Resueltas'],
]

// Hermano de la lista: no la conoce, solo avisa al padre con onCambiarFiltro
export default function FiltrosSolicitudes({ filtroActual, onCambiarFiltro, conteos }) {
  return (
    <div className="flex flex-wrap gap-2">
      {opciones.map(([valor, texto]) => (
        <button
          key={valor}
          onClick={() => onCambiarFiltro(valor)}
          className={cn(
            'cursor-pointer rounded-full border-2 border-tinta px-4 py-1.5 text-sm font-bold transition',
            filtroActual === valor ? 'bg-tinta text-hoja' : 'bg-hoja hover:bg-mostaza'
          )}
        >
          {texto} <span className="font-mono text-xs opacity-70">{conteos[valor]}</span>
        </button>
      ))}
    </div>
  )
}
