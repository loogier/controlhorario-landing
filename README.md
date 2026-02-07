# Control Horario - Landing Page

Landing page moderna y responsive para Control Horario, construida con Next.js 15, TypeScript y Tailwind CSS.

## 🚀 Características

- ✅ **Next.js 15+** con App Router
- ✅ **TypeScript** para type safety
- ✅ **Tailwind CSS** para estilos responsive
- ✅ **Dark Mode** incluido
- ✅ **SEO optimizado** con metadata completa
- ✅ **Accesibilidad** (WCAG 2.1)
- ✅ **Components modulares** y reutilizables
- ✅ **Optimización de imágenes** con next/image
- ✅ **100% responsive** (mobile-first)

## 📁 Estructura del Proyecto

```
control-horario-landing/
├── app/
│   ├── layout.tsx          # Layout principal con metadata
│   ├── page.tsx            # Página home (landing)
│   ├── globals.css         # Estilos globales de Tailwind
│   ├── privacy-policy/
│   │   └── page.tsx        # Página de política de privacidad
│   └── terms/
│       └── page.tsx        # Página de términos y condiciones
├── components/
│   ├── Hero.tsx            # Sección hero con CTA
│   ├── Features.tsx        # Grid de características
│   ├── UseCases.tsx        # Casos de uso
│   ├── Screenshots.tsx     # Galería de capturas (con modal)
│   ├── FAQ.tsx             # Preguntas frecuentes (acordeón)
│   └── Footer.tsx          # Footer con links
├── public/
│   └── screenshots/        # Carpeta para imágenes
│       ├── screenshot-1.png
│       ├── screenshot-2.png
│       └── screenshot-3.png
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── postcss.config.js
└── next.config.js
```

## 🛠️ Instalación y Uso

### 1. Instalar dependencias

```bash
npm install
```

### 2. Añadir imágenes de screenshots

Coloca 3 capturas de pantalla de tu app en la carpeta `public/screenshots/`:
- `screenshot-1.png` (recomendado: 1080x1920px)
- `screenshot-2.png`
- `screenshot-3.png`

### 3. Ejecutar en desarrollo

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

### 4. Build para producción

```bash
npm run build
npm start
```

## 🎨 Personalización

### Colores

Edita los colores primarios en `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    50: '#eff6ff',
    // ... otros tonos
    900: '#1e3a8a',
  },
}
```

### Contenido

Los textos y enlaces principales se definen como constantes en cada componente:

- **Hero**: `appName`, `shortDescription`, `playStoreUrl`
- **Features**: array `features[]`
- **UseCases**: array `useCases[]`
- **FAQ**: array `faqs[]`

### Metadata y SEO

Edita el archivo `app/layout.tsx` para cambiar:
- Title
- Description
- Keywords
- OpenGraph tags

## 📱 Secciones de la Landing

1. **Hero** - Presentación principal con CTA a Google Play
2. **Features** - Grid de 6 características principales
3. **Use Cases** - 4 casos de uso para diferentes perfiles
4. **Screenshots** - Galería de 3 capturas con modal
5. **FAQ** - 8 preguntas frecuentes con acordeón
6. **Footer** - Links legales, redes sociales y CTA

## 🌙 Dark Mode

El dark mode está implementado con Tailwind CSS usando clases `dark:`. Para activarlo automáticamente según las preferencias del sistema, ya está configurado con `darkMode: 'class'` en `tailwind.config.ts`.

## ♿ Accesibilidad

- Etiquetas semánticas HTML5 (`main`, `section`, `article`)
- Atributos ARIA (`aria-label`, `aria-expanded`, `role`)
- Navegación por teclado (Tab, Enter, Escape)
- Contraste de colores WCAG AA

## 🚀 Deploy

### Vercel (Recomendado)

```bash
npm install -g vercel
vercel
```

### Otros providers

El proyecto es compatible con cualquier hosting que soporte Next.js:
- Netlify
- AWS Amplify
- Google Cloud Run
- Railway
- DigitalOcean App Platform

## 📄 Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.

## 📧 Contacto

Para preguntas o sugerencias: support@controlhorario.com

---

**Hecho con ❤️ para trabajadores**
