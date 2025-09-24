"use client";
import { useEffect, useState } from "react";
import TablaRegistros from "../../components/TablaRegistros";
import { FiSearch } from "react-icons/fi";

const campos = [
  { key: "nombre", label: "Nombre" },
  { key: "apellido1", label: "Primer Apellido" },
  { key: "apellido2", label: "Segundo Apellido" },
  { key: "nacionalidad", label: "Nacionalidad" },
  { key: "expediente", label: "Expediente" },
  { key: "documento", label: "Documento" },
  { key: "fecha", label: "Fecha" },
];

export default function NacionalidadesPage() {
  const [registros, setRegistros] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [busqueda, setBusqueda] = useState("");
  const [campo, setCampo] = useState(campos[0].key);
  const [filtrados, setFiltrados] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(`/api/nacionalidades?page=${page}&pageSize=20`);
      const data = await res.json();
      console.log(data);
      setRegistros(data.data);
      setTotalPages(data.totalPages);
    }
    fetchData();
  }, [page]);

  useEffect(() => {
    if (busqueda.trim() === "") {
      setFiltrados(registros);
    } else {
      setFiltrados(
        registros.filter((r: any) =>
          String(r[campo] || "")
            .toLowerCase()
            .includes(busqueda.toLowerCase())
        )
      );
    }
  }, [busqueda, campo, registros]);

  return (
    <main className="p-6">
    <div className="flex justify-between items-center mb-4">
  <h1 className="text-2xl font-bold">Listado de registros</h1>
  <div className="flex gap-2 items-center">
    <select
      value={campo}
      onChange={(e) => setCampo(e.target.value)}
      className="px-3 py-2 border rounded"
    >
      {campos.map((c) => (
        <option key={c.key} value={c.key}>
          {c.label}
        </option>
      ))}
    </select>
    <input
      type="text"
      placeholder={`Buscar por ${campos.find(c => c.key === campo)?.label}...`}
      value={busqueda}
      onChange={(e) => setBusqueda(e.target.value)}
      className="px-3 py-2 border rounded"
    />
    <button
      type="button"
      className="flex items-center justify-center w-10 h-10 bg-white border border-blue-500 rounded focus:ring-blue-500"
      title="Buscar"
    >
      <FiSearch size={15} className="text-blue-500" />
    </button>
  </div>
</div>

      <TablaRegistros registros={filtrados} />
      <div className="flex gap-2 mt-4">
        <button
          onClick={() => setPage((p) => Math.max(1, p - 1))}
          disabled={page === 1}
          className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
        >
          Anterior
        </button>
        <span>Página {page} de {totalPages}</span>
        <button
          onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
          disabled={page === totalPages}
          className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
        >
          Siguiente
        </button>
      </div>
    </main>
  );
}