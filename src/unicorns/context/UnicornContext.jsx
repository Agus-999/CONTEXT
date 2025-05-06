import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const UnicornContext = createContext();

const API_URL = "https://crudcrud.com/api/910a7c623f5e4122922620ebf5be5c92/unicorns";

export const UnicornProvider = ({ children }) => {
  const [unicorns, setUnicorns] = useState([]);
  const [selectedUnicorn, setSelectedUnicorn] = useState(null);

  // Fetch de unicornios solo cuando la app se carga por primera vez
  const fetchUnicorns = async () => {
    try {
      const res = await axios.get(API_URL);
      setUnicorns(res.data); // Solo actualizamos una vez cuando cargamos la app
    } catch (err) {
      console.error("Error al obtener unicornios:", err);
    }
  };

  // Agregar unicornio al estado local
  const addUnicorn = async (unicorn) => {
    try {
      const res = await axios.post(API_URL, unicorn);
      setUnicorns((prevUnicorns) => [...prevUnicorns, res.data]); // Actualizamos el estado local sin hacer otra petición
    } catch (err) {
      console.error("Error al agregar unicornio:", err);
    }
  };

  // Actualizar unicornio en la API y en el estado local
  const updateUnicorn = async (id, updatedUnicorn) => {
    try {
      const { _id, ...unicornWithoutId } = updatedUnicorn; // 👈 Quitar _id del cuerpo del PUT

      await axios.put(`${API_URL}/${id}`, unicornWithoutId); // 👈 Enviar sin _id

      setUnicorns((prevUnicorns) =>
        prevUnicorns.map((unicorn) =>
          unicorn._id === id ? { ...unicorn, ...unicornWithoutId } : unicorn
        )
      );
    } catch (err) {
      console.error("Error al actualizar unicornio:", err);
    }
  };

  // Eliminar unicornio de la API y del estado local
  const deleteUnicorn = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      setUnicorns((prevUnicorns) =>
        prevUnicorns.filter((unicorn) => unicorn._id !== id)
      ); // Eliminamos el unicornio del estado local sin hacer otra petición
    } catch (err) {
      console.error("Error al eliminar unicornio:", err);
    }
  };

  // Solo hacer la petición al cargar por primera vez
  useEffect(() => {
    fetchUnicorns();
  }, []); // Pasar un array vacío aquí asegura que solo se ejecuta una vez

  return (
    <UnicornContext.Provider
      value={{
        unicorns,
        selectedUnicorn,
        setSelectedUnicorn,
        addUnicorn,
        updateUnicorn,
        deleteUnicorn,
      }}
    >
      {children}
    </UnicornContext.Provider>
  );
};
