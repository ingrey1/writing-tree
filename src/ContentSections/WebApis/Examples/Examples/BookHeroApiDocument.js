const document = {
  openapi: "3.0.0",
  info: {
    version: "1.0.0",
    title: "Book Hero API",
    description: "A RESTful Book API for CRUD Operations",
  },
  servers: [
    {
      url: "https://whispering-chamber-02312.herokuapp.com/",
    },
  ],
  paths: {
    "/book/": {
      get: {
        operationId: "GET Books",
        summary: "Returns all the Books",
        parameters: [
          {
            in: "query",
            name: "id",
            schema: {
              type: "integer",
            },
            description: "Find a book by its primary key/id.",
          },
          {
            in: "query",
            name: "title",
            schema: {
              type: "string",
            },
            description: "Find a book by its title.",
          },
        ],
        tags: ["Books"],
        responses: {
          200: {
            description: "Successful response",
            content: {
              "application/json": {
                schema: {
                  type: "array",
                  items: { $ref: "#/components/schemas/Book" },
                },
                examples: {
                  books: {
                    $ref: "#/components/examples/books",
                  },
                },
              },
            },
          },
          400: {
            description: "Validation error",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/validationErrorResponse",
                },
                examples: {
                  unknownQueryParam: {
                    $ref: "#/components/examples/errors/400/unknownQueryParam",
                  },
                },
              },
            },
          },
        },
      },
    },
  },
  components: {
    schemas: {
      validationErrorResponse: {
        type: "object",
        properties: {
          status_code: { type: "integer", example: " 400" },
          type: { type: "string", example: "validation_error" },
          param: { type: "string", example: "price" },
          message: { type: "string", example: '"price" is not allowed' },
        },
      },
      Book: {
        type: "object",
        required: ["title", "about"],
        properties: {
          id: {
            type: "integer",
            format: "int32",
            uniqueItems: true,
            readOnly: true,
          },
          title: {
            type: "string",
            uniqueItems: true,
            maxLength: 255,
          },
          about: {
            type: "string",
            maxLength: 2550,
          },
          authors: {
            type: "array",
            items: {
              type: "integer",
              format: "int32",
            },
            uniqueItems: true,
          },
          genres: {
            type: "array",
            items: {
              type: "integer",
              format: "int32",
            },
            uniqueItems: true,
          },
          tags: {
            type: "array",
            items: {
              type: "integer",
              format: "int32",
            },
            uniqueItems: true,
          },
        },
      },
    },
    examples: {
      errors: {
        400: {
          unknownQueryParam: {
            value: {
              status_code: 400,
              type: "validation_error",
              param: "price",
              message: '"price" is not allowed',
            },
          },
        },
      },
      books: {
        value: {
          status_code: 200,
          data: [
            {
              id: 1,
              title: "Tigana",
              about: "Amazing Novel by one of the world's greatest artists",
              createdAt: "2021-08-27T12:22:23.088Z",
              updatedAt: "2021-08-27T12:22:23.088Z",
              authors: [],
              genres: [],
              tags: [],
            },
            {
              id: 3,
              title: "A Song or Arbonne",
              about: "Amazing Novel by one of the world's greatest writers",
              createdAt: "2021-08-27T12:25:58.770Z",
              updatedAt: "2021-08-27T12:25:58.770Z",
              authors: [],
              genres: [],
              tags: [],
            },
          ],
        },
      },
    },
  },
};

export default document;
