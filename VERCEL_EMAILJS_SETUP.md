# ⚡ Configuración de EmailJS para Vercel

## 🎯 Perfecto para Vercel
EmailJS es la **mejor opción** para Vercel porque:
- ✅ Funciona perfectamente con Vercel
- ✅ No requiere backend
- ✅ 200 emails gratis/mes
- ✅ Fácil configuración
- ✅ Spam protection incluido

## 🚀 Pasos Rápidos para Vercel

### 1. Crear cuenta en EmailJS
1. Ve a [https://www.emailjs.com/](https://www.emailjs.com/)
2. Regístrate con tu email `isaac.flores.dev@gmail.com`
3. Confirma tu cuenta

### 2. Configurar Gmail Service
1. Dashboard → **"Email Services"**
2. **"Add New Service"** → **Gmail**
3. Conecta tu Gmail
4. **Copia el Service ID** (ej: `service_abc123`)

### 3. Crear Template
1. **"Email Templates"** → **"Create New Template"**
2. Usa este template HTML:

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Nuevo mensaje desde Portfolio</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
    <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
        <h2 style="color: #7c3aed; border-bottom: 2px solid #7c3aed; padding-bottom: 10px;">
            📧 Nuevo mensaje desde tu Portfolio
        </h2>
        
        <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>👤 Nombre:</strong> {{from_name}}</p>
            <p><strong>📧 Email:</strong> {{from_email}}</p>
            <p><strong>📝 Asunto:</strong> {{subject}}</p>
        </div>
        
        <div style="background: #fff; border: 1px solid #e9ecef; padding: 20px; border-radius: 8px;">
            <h3 style="color: #495057; margin-top: 0;">💬 Mensaje:</h3>
            <p style="white-space: pre-wrap;">{{message}}</p>
        </div>
        
        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e9ecef; text-align: center; color: #6c757d; font-size: 14px;">
            <p>Este mensaje fue enviado desde el formulario de contacto de tu portfolio.</p>
            <p>Puedes responder directamente a este email.</p>
        </div>
    </div>
</body>
</html>
```

3. **Copia el Template ID** (ej: `template_xyz789`)

### 4. Obtener Public Key
1. **"Account"** → **"General"**
2. **Copia tu Public Key** (ej: `user_abc123def456`)

### 5. Actualizar Configuración
Edita `src/config/emailjs.ts`:

```typescript
export const EMAILJS_CONFIG = {
  serviceId: 'service_abc123', // Tu Service ID real
  templateId: 'template_xyz789', // Tu Template ID real
  publicKey: 'user_abc123def456', // Tu Public Key real
};
```

## 🔧 Variables de Entorno (Opcional para Vercel)

### Crear archivo .env.local
```bash
VITE_EMAILJS_SERVICE_ID=service_abc123
VITE_EMAILJS_TEMPLATE_ID=template_xyz789
VITE_EMAILJS_PUBLIC_KEY=user_abc123def456
```

### Actualizar configuración para usar variables de entorno
```typescript
export const EMAILJS_CONFIG = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_abc123',
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_xyz789',
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'user_abc123def456',
};
```

## 🚀 Deploy en Vercel

### 1. Conectar repositorio
1. Ve a [vercel.com](https://vercel.com)
2. **"New Project"**
3. Conecta tu repositorio de GitHub

### 2. Configurar variables de entorno (si usas .env)
1. En el dashboard de Vercel
2. **"Settings"** → **"Environment Variables"**
3. Agrega las variables:
   - `VITE_EMAILJS_SERVICE_ID`
   - `VITE_EMAILJS_TEMPLATE_ID`
   - `VITE_EMAILJS_PUBLIC_KEY`

### 3. Deploy
1. **"Deploy"**
2. ¡Listo! Tu formulario funcionará automáticamente

## 🎯 Ventajas para Vercel
- ✅ **Sin configuración de backend**
- ✅ **Deploy automático**
- ✅ **HTTPS incluido**
- ✅ **CDN global**
- ✅ **Formulario funcional inmediatamente**

## 🚨 Solución de Problemas

### Error CORS
- EmailJS maneja CORS automáticamente
- No necesitas configuración adicional

### Error de dominio
- EmailJS funciona en cualquier dominio
- No hay restricciones de dominio

### Error de límites
- Plan gratuito: 200 emails/mes
- Suficiente para portfolio personal

## 🎉 ¡Listo para Vercel!
Tu formulario funcionará perfectamente en Vercel con EmailJS.
