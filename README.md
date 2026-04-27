# MindVibes

## Origen del proyecto

MindVibes nace de una idea sencilla pero potente: **darle forma digital al estado emocional de una persona**.

En un contexto donde todo va rápido y casi nadie se detiene a observar cómo se siente, surge la necesidad de una herramienta ligera, visual y accesible que permita:

- Registrar estados de ánimo  
- Detectar patrones emocionales  
- Generar cierta conciencia personal sin fricción  

El objetivo no es medicalizar ni sustituir nada, sino ofrecer un **espacio íntimo y cotidiano de autoconocimiento**.

---

## ¿Cómo funciona?

MindVibes es una aplicación centrada en la experiencia del usuario, con un flujo simple:

1. **Login (simulado en frontend)**  
   Acceso rápido sin fricción.

2. **Selección de estado de ánimo (mood)**  
   Interfaz visual para elegir cómo se siente el usuario.

3. **Registro del estado**  
   El mood se guarda asociado al usuario.

4. **Visualización / historial**  
   Consulta de estados anteriores.

5. **Interacción emocional ligera**  
   Respuesta visual o lógica según el mood.

Clave del sistema: **rapidez + claridad + mínima carga cognitiva**

---

## Tecnologías empleadas

### Frontend
- React  
- React Router  
- CSS (responsive)  
- Custom Hooks  

### Inteligencia Artificial (soporte de desarrollo)
- GPT (OpenAI)  
- Gemini (Google)  

Usadas como asistentes de desarrollo (no integradas en el producto final)

### Otros
- Vercel (deploy)  
- Git & GitHub  
- LocalStorage (persistencia de sesión simulada)  

---

## Retos y problemas encontrados

### Gestión de estado
- Persistencia de sesión sin backend  
- Mantener datos sin recargar la app  

### Navegación
- Redirecciones tras login  
- Protección de rutas  

### UI/UX
- Problemas de centrado y layout  
- Overflow y recorte de contenido  
- Ajustes responsive  

### Lógica frontend
- Simulación de autenticación  
- Manejo de datos sin API  

### Deploy
- Errores al hacer push  
- Problemas al actualizar en Vercel  

Este proyecto ha servido para enfrentarse a problemas reales de frontend.

---

## Backlog (mejoras futuras)

### Funcionalidad
- [ ] Backend real (Node / FastAPI)  
- [ ] Autenticación con JWT  
- [ ] Base de datos (MongoDB / PostgreSQL)  
- [ ] Historial avanzado de moods  
- [ ] Estadísticas y visualización de datos  

### IA aplicada
- [ ] Recomendaciones según estado emocional  
- [ ] Análisis de patrones  
- [ ] Chat emocional  

### UX/UI
- [ ] Animaciones  
- [ ] Mejor feedback visual  
- [ ] Dark mode  

### Escalabilidad
- [ ] Versión móvil optimizada  
- [ ] PWA  

---

## Conclusión

MindVibes es un primer paso hacia algo más grande:

> convertir datos emocionales en autoconocimiento accesible

Un proyecto enfocado en aprender, iterar y construir con intención.

---

## Deployment
* **Live URL:** *.....*

* **GitHub Repository:** *....*
