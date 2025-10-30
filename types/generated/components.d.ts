import type { Attribute, Schema } from '@strapi/strapi';

export interface FunctionalComponentCta extends Schema.Component {
  collectionName: 'components_functional_component_ctas';
  info: {
    description: '';
    displayName: 'Cta';
  };
  attributes: {
    CtaBgImg: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    CtaButton: Attribute.Component<'functional-component.hero-button', true>;
    CtaCaption: Attribute.Text;
    CtaCssClasses: Attribute.String;
    CtaTitle: Attribute.String;
    CtaType: Attribute.String;
  };
}

export interface FunctionalComponentHeroButton extends Schema.Component {
  collectionName: 'components_functional_component_hero_buttons';
  info: {
    description: '';
    displayName: 'Button';
    icon: 'exit';
  };
  attributes: {
    ButtonCssClasses: Attribute.String;
    ButtonLabel: Attribute.String;
    ButtonLink: Attribute.String;
    ButtonType: Attribute.String;
  };
}

export interface GraphicComponentGalleryImage extends Schema.Component {
  collectionName: 'components_graphic_component_gallery_images';
  info: {
    displayName: 'GalleryImage';
    icon: 'landscape';
  };
  attributes: {
    alt: Attribute.String;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface GraphicComponentHero extends Schema.Component {
  collectionName: 'components_graphic_component_heroes';
  info: {
    description: '';
    displayName: 'Hero';
    icon: 'picture';
  };
  attributes: {
    HeroBgImg: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    HeroButton: Attribute.Component<'functional-component.hero-button', true>;
    HeroCssClasses: Attribute.String;
    HeroSubtitle: Attribute.String;
    HeroTitle: Attribute.String;
    HeroWrapperBgImg: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    HeroWrapperCssClasses: Attribute.String;
  };
}

export interface TextComponentParagraph extends Schema.Component {
  collectionName: 'components_text_component_paragraphs';
  info: {
    description: '';
    displayName: 'Paragraph';
    icon: 'feather';
  };
  attributes: {
    ParagraphContent: Attribute.RichText;
    ParagraphCssClasses: Attribute.String;
    ParagraphImg: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    ParagraphImgPosition: Attribute.Enumeration<['left', 'right']>;
  };
}

export interface TextComponentQuote extends Schema.Component {
  collectionName: 'components_text_components_quotes';
  info: {
    description: '';
    displayName: 'Quote';
    icon: 'feather';
  };
  attributes: {
    QuoteAuthor: Attribute.String;
    QuoteAuthorDates: Attribute.String;
    QuoteAuthorInfo: Attribute.String;
    QuoteContent: Attribute.String;
    QuoteCssClasses: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'functional-component.cta': FunctionalComponentCta;
      'functional-component.hero-button': FunctionalComponentHeroButton;
      'graphic-component.gallery-image': GraphicComponentGalleryImage;
      'graphic-component.hero': GraphicComponentHero;
      'text-component.paragraph': TextComponentParagraph;
      'text-component.quote': TextComponentQuote;
    }
  }
}
