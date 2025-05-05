# 🦄 Proyecto Individual – Unicornios y Productos 🛍️

Este proyecto es una extensión y refactorización del trabajo grupal anterior. Se ha implementado un módulo de **Unicornios** usando contexto global y se ha agregado un nuevo módulo independiente de **Productos** con su propio manejo de estado.

---

## 🚀 Tecnologías Utilizadas

- React + Vite
- React Router DOM
- Context API
- Formik + Yup
- PrimeReact
- LocalStorage (para productos)
- CSS personalizado

---

## 📁 Estructura del Proyecto

src/
├── context/
│ └── UnicornContext.jsx # Manejo global de unicornios
│
├── unicorns/
│ ├── index.jsx # Rutas de unicorns
│ ├── UnicornsView.jsx # Tabla de unicornios
│ ├── UnicornForm.jsx # Crear/editar unicornios
│ └── useUnicornForm.js # Hook personalizado (opcional)
│
├── products/
│ ├── index.jsx # Rutas de productos
│ ├── ProductsView.jsx # Lista de productos
│ ├── ProductForm.jsx # Crear productos
│ └── productsData.js # Fuente local de datos
│
├── style/
│ ├── style.css # Tema general oscuro colorido
│ ├── unicorns.css # Estilo para módulo unicornios
│ └── products.css # Estilo para módulo productos
│
└── App.jsx # Ruteo global

---

## ⚙️ Instalación y Uso

1. **Clonar el repositorio**

```bash
git clone https://github.com/tu-usuario/mi-proyecto-unicornios.git
cd mi-proyecto-unicornios
```

2. **Instalar dependencias**
npm install

3. Ejecutar la aplicación
npm run dev

4. Abrir en navegador
Accede a http://localhost:5173
---

✨ Funcionalidades
🦄 Unicornios
- Listado: /unicornios
- Crear: /unicornios/crear
- Editar: /unicornios/editar/:id
- Utiliza contexto global y llamadas a la API externa.
- Formularios validados con Formik + Yup.
- Diseño modular con separación de lógica y presentación.

🛍️ Productos
- Listado y creación: /productos
- Datos gestionados localmente con useState y opcionalmente localStorage.
- Totalmente desacoplado del contexto de unicornios.

✅ Requisitos Cumplidos
 - Contexto global para unicornios (UnicornContext)
 - Componentes desacoplados (vista, formulario, lógica)
 - Validaciones con Formik + Yup
 - Ruteo modular por carpeta (unicorns/, products/)
 - Estilo oscuro colorido y uniforme
 - Persistencia opcional en productos
 - Separación entre lógica y diseño
 - README con instrucciones

🏆 Extras Implementados
- Manejo de errores con try/catch
- Estilo personalizado con PrimeReact
- Hook de formulario personalizado (useUnicornForm)
- Feedback visual mediante estilos llamativos

🧑‍💻 Autor
Proyecto realizado por Agustin Fasano como entrega individual para la materia Programación III.
