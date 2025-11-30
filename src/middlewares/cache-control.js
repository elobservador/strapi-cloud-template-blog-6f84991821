module.exports = (config, { strapi }) => {
    return async (ctx, next) => {
        await next();

        // No cachear el admin panel
        if (ctx.url.startsWith('/admin') || ctx.url.startsWith('/content-manager')) {
            ctx.set('Cache-Control', 'no-cache, no-store, must-revalidate');
            return;
        }

        // Cachear assets (imágenes, videos) - 5 minutos navegador, 10 minutos CDN
        if (ctx.method === 'GET' && ctx.status === 200 && ctx.url.startsWith('/uploads/')) {
            ctx.set('Cache-Control', 'public, max-age=300, s-maxage=600');
            ctx.set('Vary', 'Accept-Encoding');
            return;
        }

        // No cachear la API mundial-2026-dicc
        if (ctx.url.includes('/api/mundial-2026-dicc')) {
            ctx.set('Cache-Control', 'no-cache, no-store, must-revalidate');
            ctx.set('Pragma', 'no-cache');
            ctx.set('Expires', '0');
            return;
        }

        // Cachear resto de APIs - 5 minutos navegador, 10 minutos CDN
        if (ctx.method === 'GET' && ctx.status === 200 && ctx.url.startsWith('/api/')) {
            ctx.set('Cache-Control', 'public, max-age=300, s-maxage=600');
            ctx.set('Vary', 'Accept-Encoding');
        }
    };
};