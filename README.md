# 📦 BOX GROUP SRL - Landing Page Corporativa

¡Bienvenido! Este proyecto es una **Landing Page de alta conversión** diseñada y desarrollada para **BOX GROUP SRL**, una empresa industrial dedicada a la fabricación de cajas de cartón corrugado a medida para Ecommerce y logística.

El objetivo principal de este desarrollo fue crear una interfaz moderna, limpia y optimizada para la captación de clientes B2B, combinando una estética corporativa robusta con una experiencia de usuario (UX) fluida y responsive.

🎯 **Demo en vivo:** https://juancho2264.github.io/GreenBox/

---

## ✨ Características del Proyecto

* **Enfoque en Conversión (CRO):** Estructura estratégica con múltiples llamadas a la acción (CTA), incluyendo un botón flotante de WhatsApp y un banner de urgencia.
* **Diseño 100% Responsive:** Optimización fluida para Desktop, Tablets y Dispositivos Móviles utilizando técnicas modernas de CSS (Flexbox y Grid).
* **Animaciones Fluidas (Scroll-driven):** Implementación de efectos visuales dinámicos que se activan a medida que el usuario navega por la página.
* **Formulario de Contacto Funcional:** Integración asincrónica con pasarela de correos para la recepción inmediata de consultas corporativas.
* **Sistema de Modales Nativo:** Ventana emergente de confirmación de envío desarrollada desde cero, sin librerías pesadas de terceros.

---

## 🛠️ Tecnologías Utilizadas

* **HTML5:** Marcado semántico y accesible para una mejor indexación (SEO).
* **CSS3 Moderno:** * Uso de **Variables CSS** (Custom Properties) para una arquitectura de color limpia y mantenible.
    * Maquetación híbrida con **Flexbox** y **CSS Grid Layout**.
    * Animaciones personalizadas mediante `@keyframes` (efecto pulse, transiciones de opacidad).
* **Vanilla JavaScript (ES6+):** Código nativo sin frameworks, priorizando la velocidad de carga y el rendimiento del sitio.
* **FontAwesome & Google Fonts:** Para la iconografía corporativa y tipografías de alto impacto (`Oswald` y `Roboto`).

---

## 🚀 Funcionalidades Técnicas Destacadas

### 1. Animaciones eficientes con `Intersection Observer API`
En lugar de escuchar el evento `scroll` (lo cual degrada el rendimiento), se implementó un `IntersectionObserver` en JavaScript para detectar cuándo los elementos entran en el viewport y aplicar las clases de animación (`.active-reveal`) de forma eficiente.

### 2. Manejo de Formulario Asincrónico (`Async/Await`)
El formulario procesa los datos de manera nativa utilizando el objeto `FormData` y realiza una petición `POST` asíncrona mediante `fetch` a la API de Formspree, manejando estados de carga ("Enviando...") y deshabilitando el botón para evitar envíos duplicados.

### 3. Accesibilidad y UX en Modales y Menús
* El **menú hamburguesa** móvil gestiona correctamente los atributos `aria-expanded` para lectores de pantalla.
* El **modal de éxito** cuenta con múltiples ganchos de cierre (*escape hooks*) pensados en la comodidad del usuario: se puede cerrar mediante el botón, haciendo clic fuera del cuadro (en el overlay) o presionando la tecla `Escape`.
