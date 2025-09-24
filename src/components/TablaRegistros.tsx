import { useState } from "react";

export default function TablaRegistros({ registros }: { registros: any[] }) {
    const [registroSeleccionado, setRegistroSeleccionado] = useState<any | null>(null);
  
  const abrirPopup = (registro: any) => {
    setRegistroSeleccionado(registro);
  };

  const cerrarPopup = () => {
    setRegistroSeleccionado(null);
  };
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                <th scope="col" className="px-6 py-3">Nombre</th>
                <th scope="col" className="px-6 py-3">Primer Apellido</th>
                <th scope="col" className="px-6 py-3">Segundo Apellido</th>
                <th scope="col" className="px-6 py-3">Nacionalidad</th>
                <th scope="col" className="px-6 py-3">Nº Expediente</th>
                <th scope="col" className="px-6 py-3">Nº Documento</th>
                <th scope="col" className="px-6 py-3">Fecha de Examen</th>
                <th scope="col" className="px-6 py-3">Acciones</th>
                </tr>
            </thead>
            <tbody>
                {registros.map((r, i) => (
                <tr className={`odd:bg-white odd:text-black odd:dark:bg-white even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200`} key={i}>
                    <td className="px-6 py-4">{r.nombre}</td>
                    <td className="px-6 py-4">{r.primer_apellido}</td>
                    <td className="px-6 py-4">{r.segundo_apellido}</td>
                    <td className="px-6 py-4">{r.nacionalidad}</td>
                    <td className="px-6 py-4">{r.n_expediente}</td>
                    <td className="px-6 py-4">{r.n_documento}</td>
                    <td className="px-6 py-4">{r.fecha_examen}</td>
                    <td className="flex gap-2 px-6 py-4">
                        <button type="button" title="Ver"  onClick={() => abrirPopup(r)}>🔍</button>
                        <button type="button" title="Editar">✏️</button>
                        <button type="button" title="Eliminar">🗑️</button>
                    </td>
                </tr>
                ))}
            </tbody>
        </table>

     {/* Popup Modal */}
      {registroSeleccionado && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 w-[600px] shadow-lg">
            <h2 className="text-lg font-bold mb-4 text-gray-900 dark:text-gray-100">
              Más información sobre {registroSeleccionado.nombre}
            </h2>

            {/* Grid con 2 columnas */}
            <div className="grid grid-cols-2 gap-4 text-sm text-gray-700 dark:text-gray-300">
              <div><strong>Fecha de presentación:</strong> {registroSeleccionado.fecha_presentacion}</div>
              <div><strong>¿Dónde vive?:</strong> {registroSeleccionado.donde_vive}</div>
              <div><strong>Teléfono:</strong> {registroSeleccionado.telefono}</div>
              <div><strong>Estado:</strong> {registroSeleccionado.estado}</div>
              <div><strong>Consulta:</strong> {registroSeleccionado.consulta}</div>
              <div><strong>Pago total:</strong> {registroSeleccionado.pago_total}</div>
              <div><strong>1º Pago:</strong> {registroSeleccionado.primer_pago}</div>
              <div><strong>2º Pago:</strong> {registroSeleccionado.segundo_pago}</div>
              <div><strong>3º Pago:</strong> {registroSeleccionado.tercer_pago}</div>
              <div><strong>Saldo:</strong> {registroSeleccionado.saldo}</div>
            </div>

            {/* Notas ocupando todo */}
            <div className="mt-4 text-sm text-gray-700 dark:text-gray-300">
              <strong>Notas:</strong>
              <p className="mt-1 p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-50 dark:bg-gray-700">
                {registroSeleccionado.notas || "Sin notas"}
              </p>
            </div>

            <div className="flex justify-end mt-4">
              <button
                onClick={cerrarPopup}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>

  );
}
