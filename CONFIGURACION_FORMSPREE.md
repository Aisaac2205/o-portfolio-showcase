# 🔐 Configuración Segura de Formspree

## ✅ **Tu Form ID está configurado correctamente**

Tu Form ID: `mandplyy`
Endpoint: `https://formspree.io/f/mandplyy`

## 🔧 **Configuración Local (Para desarrollo)**

### 1. **Crear archivo .env.local**
Crea un archivo llamado `.env.local` en la raíz del proyecto:

```bash
# Formspree Configuration
VITE_FORMSPREE_FORM_ID=mandplyy
```

### 2. **Verificar que funciona**
- El archivo `.env.local` está en `.gitignore` (no se sube al repo)
- Tu Form ID queda privado y seguro
- Funciona en desarrollo local

## 🚀 **Configuración en Vercel (Para producción)**

### 1. **Variables de entorno en Vercel**
1. Ve a tu proyecto en [vercel.com](https://vercel.com)
2. **Settings** → **Environment Variables**
3. Agrega:
   - **Name**: `VITE_FORMSPREE_FORM_ID`
   - **Value**: `mandplyy`
   - **Environment**: Production, Preview, Development

### 2. **Redeploy**
1. Vercel detectará las nuevas variables
2. O haz un nuevo deploy manual
3. ¡Tu formulario funcionará en producción!

## 🎯 **Ventajas de esta configuración:**

- ✅ **Form ID privado** - No se expone en el código
- ✅ **Seguro** - Variables de entorno protegidas
- ✅ **Flexible** - Diferentes IDs para dev/prod
- ✅ **Estándar** - Sigue mejores prácticas

## 🧪 **Probar el formulario:**

1. **Desarrollo local**: Crea `.env.local` con tu Form ID
2. **Producción**: Configura variables en Vercel
3. **Test**: Envía un mensaje de prueba

## 🎉 **¡Listo!**

Tu formulario de contacto está configurado de forma segura y profesional.
