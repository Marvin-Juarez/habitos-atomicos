# 🚀 Habit Tracker: Proyecto "Hábitos Atómicos"

Aplicación Full-Stack para la gestión de hábitos diarios, diseñada con una arquitectura moderna de API REST y Frontend reactivo.

## 📢 Notas de Desarrollo (Semana 4)

### 🏗️ Arquitectura del Servidor
Se ha implementado una **estructura modular manual** en el backend en lugar de utilizar `express-generator`. Esta decisión técnica se tomó para evitar el código heredado (legacy) de motores de plantillas como Jade/EJS, permitiendo una integración más limpia y eficiente como API pura para Next.js.

### 🌐 Conectividad de Datos
Debido a restricciones de red local en ciertos entornos, es posible que el sistema experimente dificultades para conectar con **MongoDB Atlas**. Se recomienda verificar la lista de IPs permitidas en el clúster para asegurar el flujo de datos.

---

## 🛠️ Implementaciones de la Semana 4

- **Seguridad:** Registro y Login con encriptación de contraseñas mediante **Hash (bcryptjs)**.
- **Lógica de Rachas:** Sistema automático que reinicia el contador si se pierden más de 48 horas sin marcar el hábito.
- **Redux Pro:** Gestión de peticiones asíncronas integrada directamente en el **Slice** (`createAsyncThunk`), optimizando el flujo de datos.
- **Interfaz:** Barra de progreso dinámica que cambia de color y botón "Done" funcional.
