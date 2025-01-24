const swaggerJSDoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Snacks API',
      version: '1.0.0',
      description: 'API'
    },
    servers: [
      {
        url: 'http://localhost:3014/api'
      }
    ]
  },
  apis: ['./routes/*.js', './models/*.js']
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
