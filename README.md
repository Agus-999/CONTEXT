# ⚛️ React Advanced Architecture & State Management System

Un ecosistema Frontend de alto rendimiento desarrollado con **React** y **Vite**, diseñado para demostrar la implementación de patrones de arquitectura modernos, gestión de estado global y escalabilidad modular. Este sistema integra el manejo de múltiples entidades con lógicas de persistencia diferenciadas.

### 🛠️ Stack Tecnológico
* **Core:** React.js (Vite) + React Router DOM.
* **State Management:** Context API (Global State) para distribución de datos eficiente.
* **Form Handling:** Formik + Yup (Esquemas de validación complejos).
* **UI Components:** PrimeReact (Componentes industriales de alta calidad).
* **Logic & Hooks:** Custom Hooks personalizados (`useUnicornForm`).
* **Persistence:** LocalStorage API y consumo de APIs externas.

### 🌟 Arquitectura y Patrones Implementados
* **Global Context Pattern:** Implementación de un `UnicornContext` para centralizar la lógica de negocio y evitar el "prop drilling".
* **Separación de Concernimientos (SoC):** Desacoplamiento estricto entre la capa de presentación (Views), la lógica de estado (Context) y la validación (Formik).
* **Modular Routing:** Estructura de ruteo segmentada por carpetas funcionales, permitiendo el mantenimiento independiente de cada módulo.
* **Validation Schemas:** Validación robusta en tiempo real para asegurar la integridad de los datos de entrada.

### 📁 Estructura del Ecosistema
```src/
├── context/       # Capa de Estado Global (Context API)
├── unicorns/      # Módulo A: Gestión de entidades con API externa
│   ├── components # Vistas y formularios modulares
│   └── hooks      # Lógica de formulario desacoplada
├── products/      # Módulo B: Gestión de catálogo con persistencia local
├── style/         # Diseño UI modular y temas personalizados
└── App.jsx        # Orquestador de ruteo y proveedores de contexto
```

### 🚀 Funcionalidades Técnicas
* **Gestión Multi-Módulo: Implementación de CRUDs completos con ruteo dinámico ( /crear, /editar/:id).

* **Formularios Inteligentes: Feedback visual inmediato y manejo de errores mediante bloques try/catch.

* **Diseño UI Avanzado: Interfaz moderna y responsiva utilizando el ecosistema de PrimeReact.

* **Persistencia Híbrida: Sincronización de estado entre memoria global del cliente y almacenamiento persistente en el navegador.

### ⚙️ Instalación y Despliegue
* **Clonar el repositorio:

```
git clone [https://github.com/Agus-999/react-advanced-architecture.git](https://github.com/Agus-999/react-advanced-architecture.git)
```

* **Instalar dependencias:

```
npm install
```

Ejecutar en entorno de desarrollo:
```
npm run dev
```
Desarrollado por Agustín Alejandro Fasano Técnico Superior en Desarrollo de Software
