// Configuración de Formspree
// Reemplaza 'YOUR_FORM_ID' con tu Form ID real de Formspree

export const FORMSPREE_CONFIG = {
  // Tu Form ID de Formspree (ej: 'xrgkqjqw')
  formId: 'YOUR_FORM_ID',
  
  // URL completa del endpoint
  endpoint: 'https://formspree.io/f/YOUR_FORM_ID',
  
  // Configuración adicional
  settings: {
    // Email de destino (opcional, se configura en Formspree)
    to: 'isaac.flores.dev@gmail.com',
    
    // Asunto por defecto
    subject: 'Nuevo mensaje desde portfolio',
    
    // Configuraciones de Formspree
    captcha: false, // Desactivar captcha para mejor UX
    honeypot: true, // Protección contra spam
  }
};

// Función para construir el endpoint
export const getFormspreeEndpoint = (formId?: string) => {
  const id = formId || FORMSPREE_CONFIG.formId;
  return `https://formspree.io/f/${id}`;
};
