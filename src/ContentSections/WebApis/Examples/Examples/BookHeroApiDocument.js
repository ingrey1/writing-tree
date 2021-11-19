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
    "/book": {
      get: {
        operationId: "GET Books",
        summary:
          "Retrieve books from the Book Hero collection. Use query parameters to retrieve a specific subset of the book collection.",
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
            description:
              "A Successful response with a list of the books in the Book Hero collection.",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/GetBooksResponse",
                },
                examples: {
                  books: {
                    $ref: "#/components/examples/responses/getBooks",
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
                  $ref: "#/components/schemas/ValidationErrorResponse",
                },
                examples: {
                  "Unknown Query Parameter": {
                    $ref: "#/components/examples/errors/400/unknownQueryParam",
                  },
                },
              },
            },
          },
        },
      },
      post: {
        operationId: "POST Books",
        summary: "Create a new book in the Book Hero collection.",
        tags: ["Books"],
        requestBody: {
          description:
            "Object that contains the data used to create a new book in the Book Hero collection.",
          required: true,
          content: {
            "application/json": {
              schema: { $ref: "#/components/schemas/CreateBookRequestBody" },
              examples: {
                "Request Body": {
                  $ref: "#/components/examples/requestBodies/createBook/theBriefWondrousLifeOfOscarWao",
                },
              },
            },
          },
        },
        responses: {
          201: {
            description: "The newly created Book",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/PostBooksResponse",
                },
                examples: {
                  "The Brief Wondrous Life of Oscar Wao": {
                    $ref: "#/components/examples/responses/postBooks",
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
                  $ref: "#/components/schemas/ValidationErrorResponse",
                },
                examples: {
                  "Required Request Body Parameter": {
                    $ref: "#/components/examples/errors/400/requiredParam",
                  },
                  "Unique Request Body Parameter": {
                    $ref: "#/components/examples/errors/400/uniqueParam",
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
      GetBooksResponse: {
        type: "object",
        properties: {
          status_code: {
            type: "integer",
            example: 200,
          },
          data: {
            type: "array",
            items: {
              $ref: "#/components/schemas/Book",
            },
          },
        },
      },
      PostBooksResponse: {
        type: "object",
        properties: {
          status_code: {
            type: "integer",
            example: 201,
          },
          data: {
            $ref: "#/components/schemas/Book",
          },
        },
      },
      ValidationErrorResponse: {
        type: "object",
        properties: {
          status_code: { type: "integer", example: " 400" },
          type: { type: "string", example: "validation_error" },
          param: { type: "string", example: "price" },
          message: { type: "string", example: '"price" is not allowed' },
        },
      },
      CreateBookRequestBody: {
        type: "object",
        required: ["title", "about"],
        properties: {
          title: {
            type: "string",
            example: "A book title.",
          },
          about: {
            type: "string",
            example: "A book description.",
          },
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
          createdAt: {
            type: "string",
            format: "date-time",
          },
          updatedAt: {
            type: "string",
            format: "date-time",
          },
        },
      },
    },
    examples: {
      requestBodies: {
        createBook: {
          theBriefWondrousLifeOfOscarWao: {
            value: {
              title: "The Brief Wondrous Life of Oscar Wao",
              about:
                "A unique blend of cultural critique and coming-of-age story with an interesting Dominican twist.",
            },
          },
        },
      },
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
          requiredParam: {
            value: {
              status_code: 400,
              type: "validation_error",
              param: "about",
              message: '"about" is required',
            },
          },
          uniqueParam: {
            value: {
              status_code: 400,
              type: "validation_error",
              message: "title must be unique",
            },
          },
        },
      },
      responses: {
        getBooks: {
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
        postBooks: {
          value: {
            status_code: 201,
            data: {
              id: 8,
              title: "The Brief Wondrous Life of Oscar Wao",
              about:
                "A unique blend of cultural critique and coming-of-age story with an interesting Dominican twist.",
              updatedAt: "2021-09-28T02:26:34.443Z",
              createdAt: "2021-09-28T02:26:34.443Z",
            },
          },
        },
      },
    },
  },
};

export default document;
