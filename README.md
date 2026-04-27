# MindVibes

## 1. Concepto: el por qué

**MindVibes** nace de una idea simple pero poderosa: muchas veces sentimos cosas que no sabemos nombrar ni gestionar.

La aplicación busca crear un espacio donde el usuario pueda **identificar su estado emocional de forma visual e intuitiva**, y recibir una pequeña guía para acompañar ese momento.

No pretende sustituir ayuda profesional, sino ofrecer un **primer paso de autoconciencia emocional**, combinando tecnología, diseño y bienestar.

---

## 2. Cómo funciona

El flujo de la aplicación está diseñado para ser rápido, intuitivo y sin fricción:

1. El usuario accede a la plataforma.
2. Visualiza una serie de tarjetas que representan distintos estados emocionales.
3. Selecciona el mood que mejor encaja con cómo se siente.
4. Accede a una vista personalizada donde recibe:
   - Recomendaciones prácticas
   - Una frase reflexiva o motivacional

Además, el usuario puede:

- Crear una cuenta (simulada mediante almacenamiento local)
- Guardar su historial de estados emocionales
- Consultar un resumen de sus moods
- Identificar su estado de ánimo dominante
- Acceder rápidamente a su mood actual
- Eliminar su historial cuando lo desee

Las recomendaciones se generan dinámicamente mediante la integración con un modelo de lenguaje.

---

## 3. Tecnologías empleadas

El proyecto está desarrollado con un stack moderno orientado a frontend:

### Stack tecnológico

- React
- React Router
- CSS Modules
- LocalStorage
- Custom Hooks
- Consumo de API externa (Modelo de lenguaje mediante API de Gemini)

### Apoyo en el desarrollo

Durante el desarrollo del proyecto se utilizaron herramientas de inteligencia artificial y documentación técnica como soporte, incluyendo:

- GPT (OpenAI)  
- Gemini (Google) 

### Herramientas y despliegue

- Desarrollo: Visual Studio Code  
- Control de versiones: Git y GitHub  
- Despliegue: Vercel / Netlify

---

## 4. Arquitectura

MindVibes sigue una arquitectura frontend ligera:

Usuario  
   ↓  
React UI (Componentes + Routing)  
   ↓  
Custom Hooks (gestión de estado y lógica)  
   ↓  
API Layer (useFetch)  
   ↓  
Modelo de lenguaje (Gemini)  
   ↓  
Respuesta estructurada  
   ↓  
Renderizado dinámico en UI


---

## 5. Desafíos técnicos

Durante el desarrollo se abordaron los siguientes retos:

### 1. Gestión del estado emocional del usuario
- Diseño de estructura para almacenar moods
- Cálculo del estado emocional dominante

### 2. Persistencia de datos sin backend
- Uso de LocalStorage
- Sincronización entre navegación y datos

### 3. Integración de IA
- Generación de contenido dinámico mediante API
- Gestión de estados asíncronos (loading, error, success)

### 4. Experiencia de usuario
- Flujo simple e intuitivo
- Feedback inmediato tras cada interacción

### 5. Responsive design
- Adaptación a distintos dispositivos
- Navegación optimizada
- Flujo simple
- Feedback inmediato

### 6. Gestión de renderizado condicional
- Control de estados de carga y errores
- Evitar renderizados incorrectos cuando no hay datos


---

## 6. Backlog (mejoras futuras)

### Funcionales
- Sistema de autenticación real
- Integración con base de datos
- Sistema de recomendaciones más avanzado
- Notificaciones

### Inteligencia Artificial
- Personalización avanzada de respuestas
- Mejora del prompting
- Implementación de chat conversacional
- Optimización de llamadas a la API (evitar renderizados duplicados y llamadas innecesarias)

### Analítica
- Dashboard emocional
- Seguimiento de evolución de moods

### UX/UI
- Animaciones
- Dark mode
- Mejora del diseño responsive
- 


---

## 7. Aprendizajes clave

- Diseño de aplicaciones centradas en el usuario  
- Integración práctica de modelos de lenguaje  
- Arquitectura frontend desacoplada mediante hooks  
- Gestión de estado y asincronía en React  


---

## Deployment
* **Live URL:** *.....*

* **Laura Sang** *https://github.com/laurasang13*
