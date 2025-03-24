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
      'item.columnistas': ItemColumnistas;
    }
  }
}
