# 🚀 Habit Tracker: Proyecto "Hábitos Atómicos"

Aplicación web Full-Stack diseñada para la gestión y seguimiento de hábitos diarios, inspirada en la metodología de James Clear para alcanzar metas mediante pequeños pasos constantes durante 66 días.

---

## 📢 Notas de Desarrollo y Despliegue

### 🏗️ Migración de Repositorio
Debido a inconsistencias técnicas imprevistas surgidas en el repositorio inicial (`semana1`), se ha procedido a centralizar y optimizar el desarrollo en este nuevo espacio denominado **"habitos-atomicos"**. Este repositorio contiene el historial íntegro y funcional de las entregas de la **Semana 1, 2 y 3** mediante ramas específicas.

### 🌐 Nota sobre Conectividad de Base de Datos
Durante la ejecución del entorno de desarrollo, es posible que el sistema reporte un error de autenticación o tiempo de espera (Timeout) al intentar conectar con **MongoDB Atlas**. Este comportamiento suele estar asociado a **restricciones de red local** o políticas de filtrado de IP. 
*   **Solución sugerida:** Asegurarse de que la IP actual esté en la *Whitelist* del clúster de MongoDB o verificar la estabilidad de la conexión a internet para permitir el tráfico hacia el puerto de la base de datos.

---

## 🛠️ Tecnologías Implementadas

### Backend
- **Node.js & Express.js:** Motor de servidor y manejo de rutas.
- **Mongoose:** Modelado de objetos para MongoDB.
- **Dotenv:** Gestión de variables de entorno seguras.

### Frontend
- **Next.js (App Router):** Framework principal para la interfaz de usuario.
- **Redux Toolkit:** Gestión del estado global de la aplicación.
- **Tailwind CSS:** Framework de estilos centrado en utilidades para una UI moderna y responsiva.

---

## 📋 Resumen de Entregas

- **Semana 1:** Setup inicial, conexión a MongoDB Atlas y endpoints CRUD de hábitos.
- **Semana 2:** Integración de Next.js con Redux y consumo de la API mediante peticiones GET.
- **Semana 3:** Diseño de interfaz con Tailwind CSS, renderizado dinámico de la lista de hábitos, integración de barra de progreso y botón de acción "Done".

---

## ⚙️ Instrucciones de Instalación

1. **Clonar repositorio:** 
   `git clone https://github.com`

2. **Servidor (Backend):**
   - Acceder: `cd backend`
   - Instalar: `npm install`
   - Configurar: Crear `.env` con `MONGODB_URI` y `PORT`.
   - Iniciar: `npm run dev`

3. **Cliente (Frontend):**
   - Acceder: `cd frontend`
   - Instalar: `npm install`
   - Iniciar: `npm run dev`
