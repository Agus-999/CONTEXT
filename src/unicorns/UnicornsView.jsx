import React from "react";
import { useUnicornForm } from "./useUnicornForm";
import "../style/unicorns.css";

const UnicornsView = ({ unicorns, initialValues, onSubmit, onEdit, onDelete }) => {
  const formik = useUnicornForm({ initialValues, onSubmit });

  return (
    <div className="container">
      <h1>CRUD de Unicornios 🦄</h1>

      {/* Formulario de unicornios */}
      <form onSubmit={formik.handleSubmit} className="form">
        <input
          name="name"
          placeholder="Nombre"
          value={formik.values.name}
          onChange={formik.handleChange}
        />
        {formik.errors.name && <span className="error">{formik.errors.name}</span>}

        <input
          name="age"
          placeholder="Edad"
          type="number"
          value={formik.values.age}
          onChange={formik.handleChange}
        />
        {formik.errors.age && <span className="error">{formik.errors.age}</span>}

        <input
          name="color"
          placeholder="Color"
          value={formik.values.color}
          onChange={formik.handleChange}
        />
        {formik.errors.color && <span className="error">{formik.errors.color}</span>}

        <input
          name="poder"
          placeholder="Poder"
          value={formik.values.poder}
          onChange={formik.handleChange}
        />
        {formik.errors.poder && <span className="error">{formik.errors.poder}</span>}

        <button type="submit">
          {initialValues._id ? "Actualizar" : "Agregar"}
        </button>
      </form>

      {/* Tabla de unicornios */}
      <table className="table">
        <thead>
          <tr className="table-header">
            <th>Nombre</th>
            <th>Edad</th>
            <th>Color</th>
            <th>Poder</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {unicorns.map((u) => (
            <tr key={u._id}>
              <td className="table-cell">{u.name}</td>
              <td className="table-cell">{u.age}</td>
              <td className="table-cell">{u.color}</td>
              <td className="table-cell">{u.poder}</td>
              <td className="table-cell">
                <button onClick={() => onEdit(u)}>Editar</button>
                <button onClick={() => onDelete(u._id)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UnicornsView;
