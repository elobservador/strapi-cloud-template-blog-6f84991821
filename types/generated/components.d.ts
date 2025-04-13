import type { Schema, Struct } from '@strapi/strapi';

export interface AcordeonItem extends Struct.ComponentSchema {
  collectionName: 'components_acordeon_items';
  info: {
    description: '';
    displayName: 'item';
    icon: 'bulletList';
  };
  attributes: {
    open: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    text: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface CarruselMultimediaPhotos extends Struct.ComponentSchema {
  collectionName: 'components_carrusel_multimedia_photos';
  info: {
    description: '';
    displayName: 'photos';
  };
  attributes: {
    photo: Schema.Attribute.Media<'images' | 'files'>;
    titulo: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface CarruselMultimediaVideos extends Struct.ComponentSchema {
  collectionName: 'components_carrusel_multimedia_videos';
  info: {
    description: '';
    displayName: 'videos';
    icon: 'television';
  };
  attributes: {
    poster: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
    title: Schema.Attribute.String;
    video: Schema.Attribute.Media<'files' | 'videos'> &
      Schema.Attribute.Required;
    videoMobile: Schema.Attribute.Media<'files' | 'videos'>;
  };
}

export interface ItemColumnistas extends Struct.ComponentSchema {
  collectionName: 'components_item_columnistas';
  info: {
    description: '';
    displayName: 'Columnistas';
    icon: 'user';
  };
  attributes: {
    context: Schema.Attribute.String;
    eo_perfiles_columnista: Schema.Attribute.Relation<
      'oneToOne',
      'api::eo-perfiles-columnista.eo-perfiles-columnista'
    >;
    text: Schema.Attribute.Text;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'acordeon.item': AcordeonItem;
      'carrusel-multimedia.photos': CarruselMultimediaPhotos;
      'carrusel-multimedia.videos': CarruselMultimediaVideos;
      'item.columnistas': ItemColumnistas;
    }
  }
}
