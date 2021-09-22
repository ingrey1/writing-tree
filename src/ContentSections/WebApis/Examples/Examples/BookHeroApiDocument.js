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
                  $ref: "#/components/examples/books",
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
      books: {
        twoBooks: {
          value: [
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

export default document
