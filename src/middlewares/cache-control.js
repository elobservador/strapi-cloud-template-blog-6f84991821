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
            // max-age=300 → 5 minutos en navegador
            // s-maxage=600 → 10 minutos en Cloudflare/CDN
            ctx.set('Vary', 'Accept-Encoding');
            return;
        }

        // Cachear API - 5 minutos navegador, 10 minutos CDN
        if (ctx.method === 'GET' && ctx.status === 200 && ctx.url.startsWith('/api/')) {
            ctx.set('Cache-Control', 'public, max-age=300, s-maxage=600');
            // max-age=300 → 5 minutos en navegador
            // s-maxage=600 → 10 minutos en Cloudflare/CDN
            ctx.set('Vary', 'Accept-Encoding');
        }
    };
};