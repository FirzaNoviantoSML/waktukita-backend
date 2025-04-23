import type { Schema, Struct } from '@strapi/strapi';

export interface ProfileIdentitas extends Struct.ComponentSchema {
  collectionName: 'components_profile_identitas';
  info: {
    displayName: 'identitas';
  };
  attributes: {
    foto: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    nama: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'profile.identitas': ProfileIdentitas;
    }
  }
}
