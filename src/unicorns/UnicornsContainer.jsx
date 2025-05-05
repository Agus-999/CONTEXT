import React, { useContext } from "react";
import { UnicornContext } from "./context/UnicornContext";
import UnicornsView from "./UnicornsView";

const UnicornsContainer = () => {
  const {
    unicorns,
    selectedUnicorn,
    setSelectedUnicorn,
    addUnicorn,
    updateUnicorn,
    deleteUnicorn,
  } = useContext(UnicornContext);

  const initialValues = selectedUnicorn || {
    name: "",
    age: "",
    color: "",
  };

  const handleSubmit = (values, { resetForm }) => {
    if (selectedUnicorn) {
      updateUnicorn(selectedUnicorn._id, values);
      setSelectedUnicorn(null);
    } else {
      addUnicorn(values); // Si no hay unicornio seleccionado, lo agrega
    }
    resetForm(); // Limpia el formulario
  };

  const handleEdit = (unicorn) => {
    setSelectedUnicorn(unicorn); // Establece el unicornio seleccionado para editar
  };

  const handleDelete = (id) => {
    deleteUnicorn(id); // Elimina el unicornio por su ID
  };

  return (
    <UnicornsView
      unicorns={unicorns}
      initialValues={initialValues}
      onSubmit={handleSubmit}
      onEdit={handleEdit}
      onDelete={handleDelete}
    />
  );
};

export default UnicornsContainer;
