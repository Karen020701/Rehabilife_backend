const swaggerJsDoc = require('swagger-jsdoc');

const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: 'Snacks Listing Service',
      version: '1.0.0',
      description: 'API',
    },
    servers: [
      {
        url: 'http://localhost:3015',
      },
    ],
  },
  apis: ['./routes/snacksRoutes.js'],  
};

const swaggerSpec = swaggerJsDoc(swaggerOptions);

module.exports = swaggerSpec;
