import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';

// Function to calculate rating based on values / Função para calcular o rating baseado nos valores
function getRating(name, value) {
  const thresholds = {
    FCP: { good: 1800, poor: 3000 },      // First Contentful Paint (ms) - Primeira Renderização de Conteúdo
    FID: { good: 100, poor: 300 },        // First Input Delay (ms) - Primeiro Atraso de Entrada
    LCP: { good: 2500, poor: 4000 },      // Largest Contentful Paint (ms) - Maior Renderização de Conteúdo
    CLS: { good: 0.1, poor: 0.25 },      // Cumulative Layout Shift - Mudança Acumulativa de Layout
    TTFB: { good: 800, poor: 1800 }       // Time to First Byte (ms) - Tempo para Primeiro Byte
  };
  
  const threshold = thresholds[name];
  if (!threshold) return 'unknown';
  
  if (value <= threshold.good) return ' GOOD';
  if (value <= threshold.poor) return ' NEEDS IMPROVEMENT';
  return ' POOR';
}

// Function to send metrics to analytics / Função para enviar métricas para analytics
function sendToAnalytics(metric) {
  const rating = getRating(metric.name, metric.value);
  
  console.log(`%c${metric.name}: ${rating}`, 
    rating.includes('GOOD') ? 'color: green; font-weight: bold;' : 
    rating.includes('NEEDS IMPROVEMENT') ? 'color: orange; font-weight: bold;' : 
    'color: red; font-weight: bold;'
  );
  console.log(`   Valor: ${metric.value}`, 
    metric.name === 'CLS' ? '' : 'ms'
  );
  console.log('---');
}

// Function to initialize performance monitoring / Função para inicializar o monitoramento de performance
export function initWebVitals() {
  getCLS(sendToAnalytics);     // Cumulative Layout Shift - Mudança Acumulativa de Layout
  getFID(sendToAnalytics);     // First Input Delay - Primeiro Atraso de Entrada
  getFCP(sendToAnalytics);     // First Contentful Paint - Primeira Renderização de Conteúdo
  getLCP(sendToAnalytics);     // Largest Contentful Paint - Maior Renderização de Conteúdo
  getTTFB(sendToAnalytics);    // Time to First Byte - Tempo para Primeiro Byte
}

// Export individual function if needed / Exportar função individual se necessário
export { sendToAnalytics };
