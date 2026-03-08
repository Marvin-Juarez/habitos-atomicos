                                            Notas de Desarrollo y Despliegue

Migración de Repositorio
Debido a inconsistencias técnicas imprevistas surgidas en el repositorio inicial (`semana1`), se ha procedido a centralizar y optimizar el desarrollo en este nuevo espacio denominado **"habitos-atomicos"**. Este repositorio contiene el historial íntegro y funcional de las entregas de la **Semana 1, 2 y 3** mediante ramas específicas.

Nota sobre Conectividad de Base de Datos
Durante la ejecución del entorno de desarrollo, es posible que el sistema reporte un error de autenticación o tiempo de espera (Timeout) al intentar conectar con **MongoDB Atlas**. Este comportamiento suele estar asociado a **restricciones de red local** o políticas de filtrado de IP. 
*   **Solución sugerida:** Asegurarse de que la IP actual esté en la *Whitelist* del clúster de MongoDB o verificar la estabilidad de la conexión a internet para permitir el tráfico hacia el puerto de la base de datos.


