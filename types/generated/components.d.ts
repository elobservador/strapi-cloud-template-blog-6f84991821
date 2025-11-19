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
    text: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 366;
      }>;
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
    epigrafe: Schema.Attribute.String;
    photo: Schema.Attribute.Media<'images' | 'files'>;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
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
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
    video: Schema.Attribute.Media<'files' | 'videos'> &
      Schema.Attribute.Required;
    videoMobile: Schema.Attribute.Media<'files' | 'videos'>;
  };
}

export interface GrupoGruposMundialSorteo extends Struct.ComponentSchema {
  collectionName: 'components_grupo_grupos_mundial_sorteos';
  info: {
    displayName: 'grupos-mundial-sorteo';
  };
  attributes: {
    equipo1: Schema.Attribute.String;
    equipo2: Schema.Attribute.String;
    equipo3: Schema.Attribute.String;
    equipo4: Schema.Attribute.String;
    nombre: Schema.Attribute.String;
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
      'grupo.grupos-mundial-sorteo': GrupoGruposMundialSorteo;
      'item.columnistas': ItemColumnistas;
    }
  }
}
