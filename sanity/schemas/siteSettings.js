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
      name: 'projects',
      title: 'Proyectos a Mostrar',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'project' }] }],
      validation: (Rule) => Rule.max(6),
    },
  ],
};
