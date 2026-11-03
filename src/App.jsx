import { useEffect, useState } from 'react'
import { LifeBuoy } from 'lucide-react'
import SolicitudForm from '@/components/SolicitudForm'
import ListaSolicitudes from '@/components/ListaSolicitudes'
import FiltrosSolicitudes from '@/components/FiltrosSolicitudes'

const CLAVE = 'mesa-ayuda-ti'
const inicial = [
  { id: 1001, titulo: 'Impresora del 2.º piso sin conexión', descripcion: 'Aparece offline desde el lunes.', solicitante: 'Lucía R.', prioridad: 'media', estado: 'pendiente' },
  { id: 1002, titulo: 'VPN se desconecta cada 10 min', descripcion: 'Trabajo remoto, se corta la sesión.', solicitante: 'Marco T.', prioridad: 'alta', estado: 'en proceso' },
]

// Padre: único dueño del estado; coordina a los hijos hermanos
export default function App() {
  const [solicitudes, setSolicitudes] = useState(() => {
    try { return JSON.parse(localStorage.getItem(CLAVE)) ?? inicial } catch { return inicial }
  })
  const [filtro, setFiltro] = useState('todas')

  useEffect(() => { localStorage.setItem(CLAVE, JSON.stringify(solicitudes)) }, [solicitudes])

  const agregarSolicitud = (datos) =>
    setSolicitudes([{ ...datos, id: Date.now(), estado: 'pendiente' }, ...solicitudes])

  const cambiarEstado = (id, estado) =>
    setSolicitudes(solicitudes.map((s) => (s.id === id ? { ...s, estado } : s)))

  const eliminarSolicitud = (id) => setSolicitudes(solicitudes.filter((s) => s.id !== id))

  const visibles = solicitudes.filter((s) => filtro === 'todas' || s.estado === filtro)
  const conteos = {
    todas: solicitudes.length,
    pendiente: solicitudes.filter((s) => s.estado === 'pendiente').length,
    'en proceso': solicitudes.filter((s) => s.estado === 'en proceso').length,
    resuelta: solicitudes.filter((s) => s.estado === 'resuelta').length,
  }

  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <header className="mb-8 flex items-center gap-3">
        <span className="rounded-xl bg-brasa p-3 text-hoja shadow-[3px_3px_0_0_var(--color-tinta)]"><LifeBuoy size={28} /></span>
        <div>
          <h1 className="text-4xl font-bold tracking-tight">Mesa de Ayuda <span className="text-brasa">TI</span></h1>
          <p className="font-mono text-xs text-tinta/60">{conteos.pendiente} pendientes · {conteos['en proceso']} en proceso · {conteos.resuelta} resueltas</p>
        </div>
      </header>
      <div className="grid gap-8 md:grid-cols-[360px_1fr]">
        <div className="md:sticky md:top-6 md:self-start">
          <SolicitudForm onAgregar={agregarSolicitud} />
        </div>
        <section className="space-y-5">
          <FiltrosSolicitudes filtroActual={filtro} onCambiarFiltro={setFiltro} conteos={conteos} />
          <ListaSolicitudes solicitudes={visibles} onCambiarEstado={cambiarEstado} onEliminar={eliminarSolicitud} />
        </section>
      </div>
    </main>
  )
}
