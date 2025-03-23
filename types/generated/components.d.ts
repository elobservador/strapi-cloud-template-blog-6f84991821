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

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'acordeon.item': AcordeonItem;
    }
  }
}
