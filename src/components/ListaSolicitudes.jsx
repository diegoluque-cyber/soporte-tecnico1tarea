import { Inbox } from 'lucide-react'
import SolicitudItem from './SolicitudItem'

export default function ListaSolicitudes({ solicitudes, onCambiarEstado, onEliminar }) {
  if (solicitudes.length === 0) {
    return (
      <div className="flex flex-col items-center gap-2 rounded-xl border-2 border-dashed border-tinta/40 py-14 text-tinta/60">
        <Inbox size={36} />
        <p className="font-bold">No hay tickets en esta vista</p>
      </div>
    )
  }
  return (
    <ul className="space-y-4">
      {solicitudes.map((s) => (
        <SolicitudItem key={s.id} solicitud={s} onCambiarEstado={onCambiarEstado} onEliminar={onEliminar} />
      ))}
    </ul>
  )
}
