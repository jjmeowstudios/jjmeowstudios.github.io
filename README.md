# BrainBloq web

Web estática en español. Servir esta carpeta, sin compilación.

## Dominio y SEO

Dominio canónico: https://jjmeowstudios.github.io/ (enlazado desde App Store).
Si cambia el dominio, actualizar canonical, Open Graph, JSON-LD, robots.txt y sitemap.xml.

- robots.txt permite el rastreo general e indica el sitemap.
- Datos estructurados: Organization, WebSite y MobileApplication; sin valoraciones inventadas.
- Las preguntas frecuentes incluyen información de los tres modos en el HTML, sin depender del selector JavaScript.
- No publicar index.previous.html: es una copia de seguridad, lleva noindex para evitar su indexación.

## Al publicar

1. Subir estos archivos al hosting, conservando app-ads.txt.
2. Comprobar que la portada, robots.txt y sitemap.xml responden 200, sin autenticación ni cabeceras X-Robots-Tag: noindex.
3. Verificar el sitio en Google Search Console y enviar https://jjmeowstudios.github.io/sitemap.xml.
4. Solicitar indexación de la portada mediante Inspección de URLs.
5. Validar datos estructurados con Rich Results Test y revisar rendimiento con PageSpeed Insights.

Los cambios locales no actualizan la web pública. La indexación y las menciones en asistentes de IA no están garantizadas. No hay un marcado especial que garantice aparecer en respuestas generativas; la base es contenido accesible, preciso y rastreable.
