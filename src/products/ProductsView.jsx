import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import initialProducts from "./productsData";
import "../style/products.css"; // Importa el CSS

const ProductsView = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const stored = localStorage.getItem("products");
    if (stored) {
      setProducts(JSON.parse(stored));
    } else {
      setProducts(initialProducts);
      localStorage.setItem("products", JSON.stringify(initialProducts));
    }
  }, []);

  const handleDelete = (id) => {
    const updated = products.filter((p) => p.id !== id);
    setProducts(updated);
    localStorage.setItem("products", JSON.stringify(updated));
  };

  const handleEdit = (product) => {
    navigate(`/productos/editar/${product.id}`, { state: product });
  };

  return (
    <div className="products-container">
      <h2>Lista de Productos</h2>
      <div style={{ textAlign: 'right', marginBottom: '1rem' }}>
        <button
          onClick={() => navigate("/productos/crear")}
        >
          Agregar Producto
        </button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Categoría</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p) => (
            <tr key={p.id}>
              <td>{p.name}</td>
              <td>${p.price}</td>
              <td>{p.category}</td>
              <td>
                <button className="action-btn edit" onClick={() => handleEdit(p)}>Editar</button>
                <button className="action-btn delete" onClick={() => handleDelete(p.id)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductsView;
