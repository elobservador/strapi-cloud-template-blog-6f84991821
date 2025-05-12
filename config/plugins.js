module.exports = () => ({
    'preview-button': {
        config: {
            contentTypes: [
                {
                    uid: 'api::eo-acordeon.eo-acordeon',
                    draft: {
                        url: 'https://especiales.elobservador.com.uy/interactivo/widgets/preview/index12.html',
                        query: {
                            type: 'eo-acordeons',
                            id: '{documentId}'
                        },
                        copy: false,
                    },
                    published: {
                        url: 'https://especiales.elobservador.com.uy/interactivo/widgets/preview/index12.html',
                        query: {
                            type: 'eo-acordeons',
                            id: '{documentId}'
                        },
                        copy: false,
                    },
                },
                {
                    uid: 'api::eo-columnista.eo-columnista',
                    draft: {
                        url: 'https://especiales.elobservador.com.uy/interactivo/widgets/preview/index12.html',
                        query: {
                            type: 'eo-columnistas',
                            id: '{documentId}'
                        },
                        copy: false,
                    },
                    published: {
                        url: 'https://especiales.elobservador.com.uy/interactivo/widgets/preview/index12.html',
                        query: {
                            type: 'eo-columnistas',
                            id: '{documentId}'
                        },
                        copy: false,
                    },
                },
                {
                    uid: 'api::eo-multimedia-carrusel.eo-multimedia-carrusel',
                    draft: {
                        url: 'https://especiales.elobservador.com.uy/interactivo/widgets/preview/index12.html',
                        query: {
                            type: 'eo-multimedia-carrusels',
                            id: '{documentId}'
                        },
                        copy: false,
                    },
                    published: {
                        url: 'https://especiales.elobservador.com.uy/interactivo/widgets/preview/index12.html',
                        query: {
                            type: 'eo-multimedia-carrusels',
                            id: '{documentId}'
                        },
                        copy: false,
                    },
                },
                {
                    uid: 'api::eo-photo-carrusel.eo-photo-carrusel',
                    draft: {
                        url: 'https://especiales.elobservador.com.uy/interactivo/widgets/preview/index12.html',
                        query: {
                            type: 'eo-photo-carrusels',
                            id: '{documentId}',
                            build: '2',
                        },
                        copy: false,
                    },
                    published: {
                        url: 'https://especiales.elobservador.com.uy/interactivo/widgets/preview/index12.html',
                        query: {
                            type: 'eo-photo-carrusels',
                            id: '{documentId}',
                            build: '2',
                        },
                        copy: false,
                    },
                },
            ]
        }
    }
});
