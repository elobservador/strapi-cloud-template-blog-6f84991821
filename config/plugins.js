module.exports = () => ({
    'preview-button': {
        config: {
            contentTypes: [
                {
                    uid: 'api::eo-acordeon.eo-acordeon',
                    draft: {
                        url: 'https://especiales.elobservador.com.uy/interactivo/widgets/preview/',
                        query: {
                            type: 'eo-acordeons',
                            id: '{documentId}',
                        },
                        copy: false,
                    },
                    published: {
                        url: '',
                        query: {
                            type: 'eo-acordeons',
                            id: '{documentId}',
                        },
                        copy: false,
                    },
                },
                {
                    uid: 'api::eo-columnista.eo-columnista',
                    draft: {
                        url: 'https://especiales.elobservador.com.uy/interactivo/widgets/preview/',
                        query: {
                            type: 'eo-columnistas',
                            id: '{documentId}',
                        },
                        copy: false,
                    },
                    published: {
                        url: '',
                        query: {
                            type: 'eo-columnistas',
                            id: '{documentId}',
                        },
                        copy: false,
                    },
                },
                {
                    uid: 'api::eo-multimedia-carrusel.eo-multimedia-carrusel',
                    draft: {
                        url: 'https://especiales.elobservador.com.uy/interactivo/widgets/preview/',
                        query: {
                            type: 'eo-multimedia-carrusels',
                            id: '{documentId}',
                        },
                        copy: false,
                    },
                    published: {
                        url: '',
                        query: {
                            type: 'eo-multimedia-carrusels',
                            id: '{documentId}',
                        },
                        copy: false,
                    },
                },
            ]
        }
    }
});
