module.exports = (config, { strapi }) => {
    return async (ctx, next) => {
        await next();

        // Rutas que NO deben cachearse
        const noCachePaths = [
            '/admin',
            '/content-manager',
        ];

        // Verificar si la URL actual está en las rutas sin caché
        const shouldNotCache = noCachePaths.some(path => ctx.url.startsWith(path));

        if (shouldNotCache) {
            ctx.set('Cache-Control', 'no-cache, no-store, must-revalidate');
            ctx.set('Pragma', 'no-cache');
            ctx.set('Expires', '0');
            return; // Salir temprano para no aplicar otras reglas de caché
        }

        // Solo cachea GET requests exitosos en rutas de API
        if (ctx.method === 'GET' && ctx.status === 200 && ctx.url.startsWith('/api/')) {
            // Cache público para Cloudflare y navegadores
            ctx.set('Cache-Control', 'public, max-age=300, s-maxage=600');
            // max-age=300 → 5 minutos en navegador
            // s-maxage=600 → 10 minutos en Cloudflare/CDN
            ctx.set('Vary', 'Accept-Encoding');
            // Opcional: agregar ETag para validación
            // ctx.set('ETag', `W/"${ctx.body ? JSON.stringify(ctx.body).length : 0}"`);
        }
    };
};