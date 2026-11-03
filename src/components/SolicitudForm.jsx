import { useState } from 'react'
import { Send } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Select } from '@/components/ui/select'
import { Label } from '@/components/ui/label'

const vacio = { titulo: '', descripcion: '', solicitante: '', prioridad: 'media' }

// Hijo: guarda sus campos y avisa al padre con onAgregar(datos)
export default function SolicitudForm({ onAgregar }) {
  const [datos, setDatos] = useState(vacio)
  const [errores, setErrores] = useState({})

  const cambiar = (campo) => (e) => setDatos({ ...datos, [campo]: e.target.value })

  const enviar = (e) => {
    e.preventDefault()
    const nuevos = {}
    if (!datos.titulo.trim()) nuevos.titulo = 'El título es obligatorio.'
    if (!datos.descripcion.trim()) nuevos.descripcion = 'Describe el problema para poder ayudarte.'
    setErrores(nuevos)
    if (Object.keys(nuevos).length) return
    onAgregar({ ...datos, solicitante: datos.solicitante.trim() || 'Anónimo' })
    setDatos(vacio)
  }

  const Error = ({ msg }) => msg && <p role="alert" className="mt-1 text-xs font-bold text-brasa">⚠ {msg}</p>

  return (
    <Card>
      <CardHeader><CardTitle>Nuevo ticket</CardTitle></CardHeader>
      <CardContent>
        <form onSubmit={enviar} noValidate className="space-y-4">
          <div className="space-y-1.5">
            <Label htmlFor="titulo">Título</Label>
            <Input id="titulo" value={datos.titulo} onChange={cambiar('titulo')} aria-invalid={!!errores.titulo} placeholder="Ej: No abre el correo" />
            <Error msg={errores.titulo} />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="descripcion">Descripción</Label>
            <Textarea id="descripcion" value={datos.descripcion} onChange={cambiar('descripcion')} aria-invalid={!!errores.descripcion} placeholder="¿Qué pasó y desde cuándo?" />
            <Error msg={errores.descripcion} />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1.5">
              <Label htmlFor="solicitante">Solicitante</Label>
              <Input id="solicitante" value={datos.solicitante} onChange={cambiar('solicitante')} placeholder="Tu nombre" />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="prioridad">Prioridad</Label>
              <Select id="prioridad" value={datos.prioridad} onChange={cambiar('prioridad')}>
                <option value="baja">Baja</option>
                <option value="media">Media</option>
                <option value="alta">Alta</option>
              </Select>
            </div>
          </div>
          <Button type="submit" className="w-full"><Send size={16} /> Registrar solicitud</Button>
        </form>
      </CardContent>
    </Card>
  )
}
