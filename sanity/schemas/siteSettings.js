import { IoMdSettings as icon } from 'react-icons/io';

export default {
  name: 'siteSettings',
  type: 'document',
  title: 'Ajustes del Sitio',
  icon,
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Título',
    },
    {
      name: 'description',
      type: 'text',
      title: 'Descripción',
      description:
        'Describe tu sitio para busquedas en google y redes sociales.',
    },
    {
      name: 'phone',
      type: 'string',
      title: 'Teléfono',
      description: 'Teléfono de contacto que será usado en el pié de página',
    },
    {
      name: 'email',
      type: 'string',
      title: 'E-mail',
      description: 'mail de contacto que será usado en el pié de página',
    },
    {
      name: 'facebook',
      type: 'string',
      title: 'Facebook',
      description: 'Facebook que será usado en el pié de página',
    },
    {
      name: 'whatsapp',
      type: 'string',
      title: 'Whatsapp',
      description: 'Whatsapp que será usado en el pié de página',
    },
    {
      name: 'address',
      type: 'string',
      title: 'Dirección',
      description: 'Dirección que será usada en el pié de página',
    },
    {
      name: 'addressUrl',
      type: 'string',
      title: 'Url Dirección',
      description: 'Url para Google Maps que será usada en el pié de página',
    },
    {
      name: 'projects',
      title: 'Proyectos a Mostrar',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'project' }] }],
      validation: (Rule) => Rule.max(3),
    },
  ],
};
