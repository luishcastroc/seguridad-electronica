import dotenv from 'dotenv';

// Important this dotenv.config is setting up on default (.env) if this the setup then usually is not needed since is the default

dotenv.config({ path: '.env' });

export default {
  siteMetadata: {
    title: 'Seguridad Electrónica Integral',
    description: `Página dedicada a la venta, desarrollo y diseño de sistemas integrales de seguridad`,
    twitter: '@seguridadintegralmid',
    facebook: 'Seguridad Electronica Integral',
  },
  plugins: [
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: 'otll1zis',
        dataset: 'production',
        watchMode: true,
        token: process.env.SANITY_TOKEN,
      },
    },
    'gatsby-plugin-styled-components',
    'gatsby-plugin-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/assets/images',
      },
      __key: 'images',
    },
  ],
};
