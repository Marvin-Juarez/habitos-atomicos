# Reporte de Avances - Semana 5 (Marvin Juárez)

Para esta entrega se completó la integración de seguridad y el flujo de usuario entre el Frontend y el Backend.

### Puntos implementados:
- **Middleware de Autorización:** Se creó un archivo en el backend para revisar el token (JWT) en cada petición. Si el usuario no está identificado, no puede ver ni crear hábitos.
- **Login y Registro en el Front:** Se crearon las pantallas en Next.js para que el usuario pueda meter sus datos y recibir su token de acceso.
- **Manejo de JWT:** Ahora el frontend guarda el token en Redux y lo envía automáticamente al backend en los headers (`x-auth-token`) para pedir permiso.
- **Agregar Hábitos:** Se integró un formulario en la página principal que permite crear nuevos hábitos vinculados directamente al ID del usuario que inició sesión.

---
**Nota:** Aún sigo teniendo el mismo error de conección de MongoDB desde la tarea semana1. Cambié la ip, red wifi y descargue MongoDB pero aún sigue con el mismo error.
