import { Trash2, User } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const prioridadColor = { alta: 'bg-brasa text-hoja', media: 'bg-mostaza', baja: 'bg-musgo text-hoja' }
const franja = { alta: 'bg-brasa', media: 'bg-mostaza', baja: 'bg-musgo' }
const estados = ['pendiente', 'en proceso', 'resuelta']

// Hijo de la lista: recibe un ticket y ejecuta las funciones del padre
export default function SolicitudItem({ solicitud: s, onCambiarEstado, onEliminar }) {
  return (
    <li className="relative overflow-hidden rounded-xl border-2 border-tinta bg-hoja pl-4 shadow-[4px_4px_0_0_var(--color-tinta)]">
      <span className={cn('absolute inset-y-0 left-0 w-3', franja[s.prioridad])} />
      <div className="space-y-3 p-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="font-mono text-xs text-tinta/60">TKT-{String(s.id).slice(-4)}</p>
            <h3 className={cn('text-lg font-bold', s.estado === 'resuelta' && 'line-through opacity-50')}>{s.titulo}</h3>
          </div>
          <Badge className={prioridadColor[s.prioridad]}>{s.prioridad}</Badge>
        </div>
        <p className="text-sm text-tinta/80">{s.descripcion}</p>
        <div className="flex flex-wrap items-center justify-between gap-3">
          <span className="flex items-center gap-1 text-xs font-bold text-tinta/70"><User size={14} /> {s.solicitante}</span>
          <div className="flex items-center gap-2">
            <div className="flex overflow-hidden rounded-lg border-2 border-tinta">
              {estados.map((e) => (
                <button
                  key={e}
                  onClick={() => onCambiarEstado(s.id, e)}
                  className={cn('cursor-pointer px-2.5 py-1 font-mono text-[11px] font-bold uppercase transition', s.estado === e ? 'bg-tinta text-hoja' : 'hover:bg-mostaza')}
                >
                  {e}
                </button>
              ))}
            </div>
            <Button variant="destructive" size="icon" onClick={() => onEliminar(s.id)} aria-label="Eliminar"><Trash2 size={16} /></Button>
          </div>
        </div>
      </div>
    </li>
  )
}
