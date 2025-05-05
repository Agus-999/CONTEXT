import React, { useEffect } from "react";
import { useFormik } from "formik";
import { useLocation, useNavigate } from "react-router-dom";
import * as Yup from "yup";


const ProductForm = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const editingProduct = location.state;

  const formik = useFormik({
    initialValues: {
      name: "",
      price: "",
      category: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Requerido"),
      price: Yup.number().min(0.01).required("Requerido"),
      category: Yup.string().required("Requerido"),
    }),
    onSubmit: (values) => {
      const stored = JSON.parse(localStorage.getItem("products")) || [];
      if (editingProduct) {
        const updated = stored.map((p) =>
          p.id === editingProduct.id ? { ...editingProduct, ...values } : p
        );
        localStorage.setItem("products", JSON.stringify(updated));
      } else {
        const newProduct = {
          ...values,
          id: Date.now(),
        };
        stored.push(newProduct);
        localStorage.setItem("products", JSON.stringify(stored));
      }
      navigate("/productos");
    },
  });

  useEffect(() => {
    if (editingProduct) {
      formik.setValues({
        name: editingProduct.name,
        price: editingProduct.price,
        category: editingProduct.category,
      });
    }
  }, [editingProduct]);

  return (
    <div className="container">
      <h2>{editingProduct ? "Editar Producto" : "Crear Producto"}</h2>
      <form onSubmit={formik.handleSubmit}>
        <div className="form-group">
          <label>Nombre</label>
          <input name="name" value={formik.values.name} onChange={formik.handleChange} />
          {formik.errors.name && <small>{formik.errors.name}</small>}
        </div>
        <div className="form-group">
          <label>Precio</label>
          <input name="price" type="number" value={formik.values.price} onChange={formik.handleChange} />
          {formik.errors.price && <small>{formik.errors.price}</small>}
        </div>
        <div className="form-group">
          <label>Categoría</label>
          <input name="category" value={formik.values.category} onChange={formik.handleChange} />
          {formik.errors.category && <small>{formik.errors.category}</small>}
        </div>
        <button type="submit">{editingProduct ? "Guardar Cambios" : "Crear"}</button>
        <button type="button" onClick={() => navigate("/productos")}>
          Cancelar
        </button>
      </form>
    </div>
  );
};

export default ProductForm;
