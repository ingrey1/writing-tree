const content = {
  introduction: {
    1: `Because the Open API standard gives us a common way of describing a RESTful web API, it's possible to build tools to visualize that information in different ways. If you check out the "Examples" section under "Web APIs", you will see two different visualizations of the same document: "Swagger UI" and "Redoc".`,
    2: `Both of these are excellent visualization tools for displaying the content of your API. However, you might find that for your particular project, neither of these tools organizes and styles the API content in the way you want. If that's the case, then you can always build your own visualization tool.`,
    3: `While it may be difficult to build a tool that's general enough to successfully visualize all the documents that adhere to the Open API standard, we don't need to do anything that complex. In most cases, you have a small set of documents, with some specific styling and behavior you want to implement which the popular tools on the market dont provide.`,
    4: `In this tutorial, we'll walk through building a simplified visualization tool as a React Component. This will provide an opportunity for you to learn more about the structure of the Open Api document, and set the foundation for building your own custom tool that fits your particular visualization needs.`,
  },
  requirements: {
    1: `Before we get started, let's make sure that you have the right tools for the job.`,
  },
  projectSetup: {
    1: `As we will be building our interactive visualization tool as a React component, we'll need a React setup to test things out as we go. So, we'll be using the 'create-react-app' npx package to bootstrap our project.`,
    2: `Go ahead and verify that you have a version of npx on your machine via the command line (when you installed Node, the node package manager was also installed).`,
    3: `\home> npx -v`,
    4: `Your terminal should show something like this.`,
    5: `6.14.14`,
    6: `'npx' allows us to make use of the latest version of a package without installing that package locally. Let's create a new React project using 'create-react-app'; we'll name it "visualization-tool".`,
    7: `home> npx create-react-app visualization-tool`,
    8: `When the command is finished running, you should have a new folder named 'visualization-tool' in the directory where you ran the command. Go ahead and open that folder in your text editor or IDE. It should look something like this.`,
    9: `'create-react-app' provided us with a bootstrapped starter web app. Before we worry about any of the code, let's run the app. Enter this command from the 'visualization-tool' directory`,
    10: `home/visualization-tools> npm start`,
    11: `This will start the web app in your default browser at 'localhost:3000'.`,
    12: `Because we're just concerned with building a React component, and not an entire web app, we don't need to worry about the project structure. But we're going to want to clear out some of the React boilerplate. Open the App.js file, and delete the lines 7-20 highlighted below.`,
    13: `import logo from './logo.svg';
import './App.css';
    
    function App() {
      return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
        </div>
      );
    }
    
    export default App;
    `,
    14: `Now Let's add an 'H1' element inside our 'App' div`,
    15: `import logo from './logo.svg';
    import './App.css';
    
    function App() {
      return (
        <div className="App">
          <h1>Open API Visualization Tool</h1>
        </div>
      );
    }
    
    export default App;
    `,
    16: `Make sure you save your work. 'create-react-app' has hot-reloading by default, so you can see saved changes immediately without having to restart your app.`,
    17: `There we go. Now let's create the file which will contain our visualization component. In React, by convention, component files are uppercase and camelcase. So, go ahead and add the file 'VisualizationTool.js' to the 'src' directory.`,
    18: `Open the 'VisualizationTool' file. We'll add a functional Component with some starter text.`,
    19: `export default function VisualizationTool() {
      return (
        <div>
          <h2>Our Code Will live In This Component</h2>
        </div>
      );
    }`,
    20: `Now, let's import our new component into the 'App.js' file and use it.`,
    21: `import './App.css';
import VisualizationTool from "./VisualizationTool"
    
    function App() {
      return (
        <div className="App">
          <h1>Open API Visualization Tool</h1>
          <VisualizationTool />
        </div>
      );
    }
    
    export default App;`,
    22: `On line 2, we import the functional component we've defined and exported in 'VisualizationTool.js'. On line 8, we use it to create some visualizable content.`,
    23: `We're almost ready to start working on the Visualization Tool. The last thing we're going to do is install a package that will help us style and organize our code. From the project directory, run this command.`,
    24: `home/visualization-tool> npm install semantic-ui-react semantic-ui-css`,
    25: `To make full use of the 'semantic-ui-react' package we just installed, we need to import the 'semantic-ui-css' css file inside the 'index.js' file. Open the 'index.js' file, and add this line of code.`,
    26: `import React from 'react';
    import ReactDOM from 'react-dom';
    import './index.css';
    import "semantic-ui-css/semantic.min.css";
    import App from './App';
    import reportWebVitals from './reportWebVitals';
    `,
    27: `You will want to restart the web app at this point. Click on your Terminal, and press "Control + C" and then type "Y" and hit "Enter". Now, run "npm start" again.`,
    28: `Our setup is now complete. We're ready to start planning and building our visualization component.`,
  },
  componentFeatures: {
    1: `Before we decide what our component will do, let's take a look at the Swagger UI visualization for my "Book Hero" example API.`,
    2: `This visualization provides us with information about the Book Hero API. This API allows a client to interact with the book hero collection. By making requests to the API, you can perform CRUD operations for book-related resources. The resources accessible via the API include Book, Author, and a few more.`,
    3: `In order to make requests to the API, we need to know the base URL. If we know the base URL, and the relative URL for our resource, we can construct a complete URL and send an HTTP request to that url to initiate an action, such as retrieving all the books in the book collection.`,
    4: `We can see that for the Book resource, there are two separate routes, both of which happen to have the same relative URL, "/book". Here is the complete URl for these two routes.`,
    5: `https://whispering-chamber-02312.herokuapp.com/book`,
    6: `Although the URL is the same for these two routes, they have different HTTP actions associated with them. The first route is reachable via an HTTP 'GET' request, while the second route requires an HTTP 'POST' request. By making a GET request to the complete url, we will receive data for the existing books as the response. However, if we want to add a book to the collection, we can make a POST request to the URL instead.`,
    7: `In addition to the URLs and HTTP verbs for all of the routes in the API, the visualization also contains more information about each route. Let's take a look at GET "/book".`,
    8: `The information for each route can be divided into two basic parts: (a) the options and requirements for making the request, and (b) the kinds of responses the client will receive after making the request. In the screenshot above, we can see that part of characterizing how to make the GET "/book" request involves specifying parameters.`,
    9: `There are different kinds of parameters, including "path" and "query" parameters. Parameters can also be required or optional. In this visualization, if a parameter doesn't specify that it's required, then it's optional. So, we have two optional query parameters, "id", and "title".`,
    10: `For this route, if query parameters are supplied, all the books in the collection are returned. However, suppose that we want to retrieve just those books that have the title, "Tigana". we can tack a query parameter onto our url to achieve this functionality.`,
    11: `GET https://whispering-chamber-02312.herokuapp.com/book?title=Tigana`,
    12: `the query parameters go to the right of the "?". Each query parameter has a name and a value. The name goes to the left of the "=", while the value goes to the right.`,
    13: `We now have all the information we need to make a request to this route. If you'd like to try it out go ahead and run the following code from your command line.`,
    14: `curl -X GET \
    'https://whispering-chamber-02312.herokuapp.com/book?title=Tigana'`,
    15: `The response an API sends back for a given request depends on the nature of the request. This will vary by route. However, in general, these responses will fall into two categories: success responses and failure responses. Let's take a look at what the visualization for the GET "/book" route looks like for a success response.`,
    16: `We can see that the response has an HTTP status code of 200, indicating the request was successfully made. The response also comes with a data payload in JSON format. This payload contains a "data" key, with an array of book objects as the value. While a successful GET request almost always has a status code of 200, there tend to be a range of different status codes for failure responses. This is because there are many ways requests can fail to be fulfilled. Let's take a look at look at the failure example response for the GET "/book" route.`,
    17: `400 failure responses generally entail that a "Bad Request" was made. This means that the request didn't follow the rules the API route it was sent to abides by. For the example above, remember that a request to the GET "/book" route is valid only if a query parameter is "id" or "title". So, the API responded with an error message that explains what's wrong with the request -- "price" isn't a valid query parameter.`,
    18: `Schemas serve a few important roles in Open API docs: (a) characterizing the data structure and data types of the components for requests and responses,(b) avoiding duplicate code, and (c) increasing readability. Let's take a look what the schema looks like for the GET /"books" 200 success response.`,
    19: `We can see here that this schema tells us the about the structure of the data, and the types of its parts, for the success response to the GET "/books" route. While we sometimes need to look at the schema to learn about how to formulate requests or parse responses, most of the time, the examples are sufficient. Therefore, in order to reduce the complexity of the code we'll write for this tutorial, we will use examples to visualize the relevant information about our routes.`,
    20: `Now that we're more familiar with some of the visual elements of an Open API component, we can specify the features our own component will have. Our component will take an Open API doc in .js file format as input, and display the following elements.`,
    21: `Because we will be relying on examples (and ignoring schemas) for our component, this means that we need to make sure all the routes in the Open API Doc we will be passing as a prop to our component have at least one example. So, keep this in mind if you decide to use this component with an Open API doc other than the Book Hero example we'll be working with.`,
  },
  componentCode: {
    1: `The first thing we need to do is add an Open API doc to our 'src' folder. That way, as we write the code, we can view the visual output of our component, and make sure things are working as intended.`,
    2: `Open up the 'api-test-doc.js' file, and paste the following code into it. Then save your document.`,
    3: `const document = {
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
            operationId: "POST books",
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
    `,
    4: `Open up the 'App.js' file, and add this code to import our Open API doc file.`,
    5: `import './App.css';
import VisualizationTool from "./VisualizationTool"
import document from "./api-test-doc.js"
    
    function App() {
      return (
        <div className="App">
          <h1>Open API Visualization Tool</h1>
          <VisualizationTool />
        </div>
      );
    }
    
    export default App;
    `,
    6: `Pass the 'document' import as a prop (input) named 'doc' to the VisualizationTool component.`,
    7: `import './App.css';
import VisualizationTool from "./VisualizationTool"
import document from "./api-test-doc.js"
    
    function App() {
      return (
        <div className="App">
          <h1>Open API Visualization Tool</h1>
          <VisualizationTool doc={document} />
        </div>
      );
    }
    
    export default App;
    `,
    8: `The next step is to make our API document available inside of the VisualizationTool component, so we can access the information in it. Go ahead and open 'VisualizationTool.js, and add the following code snippet`,
    9: `
    export default function VisualizationTool({doc}) {
      return (
        <div>
          <h2>Our Code Will live In This Component</h2>
        </div>
      );
    }
    `,
    10: `Now, the 'doc' prop gives us access to the Open API document. Let's use it to access the 'title', 'version', and 'description' of the API inside our functional component. These values live in the 'info' section of the document.`,
    11: `
    export default function VisualizationTool({doc}) {
      
      const title = doc.info.title
      const version = doc.info.version
      const description = doc.info.description
      
      return (
        <div>
          <h2>Our Code Will live In This Component</h2>
        </div>
      );
    }`,
    12: `The HTML elements in the return value will be visible on the screen when the component is rendered. So, let's add the 'title' as an 'H2' element, 'version' as an 'H3' element, and 'description' as a 'p' element`,
    13: `export default function VisualizationTool({ doc }) {
      const title = doc.info.title;
      const version = doc.info.version;
      const description = doc.info.description;
    
      return (
        <div>
          <h2>{title}</h2>
          <h3>Version {version}</h3>
          <p>{description}</p>
        </div>
      );
    }
    `,
    14: `Before we continue further, let's start the application and verify the document data is rendered correctly. After running 'npm start' from the project directory, you should see something like this.`,
    15: `We can see that the 'title', 'version', and 'description' are visible. Let's use the Chrome dev tools to make sure the HTML elements match what our 'VisualizationTool' component returns.`,
    16: `So far, so good. An Open API Doc may have multiple base URLs, which all live in the 'servers' array. We'll add the base URLs in an unordered list. Since we'll need to iterate over the 'servers' array, we'll write a small helper function to generate the JSX for our urls.`,
    17: `const displayBaseUrls = (baseUrls) => {
      return (
        <ul>
          {baseUrls.map((baseUrl) => {
            return <li key={Math.random()}>{baseUrl.url}</li>;
          })}
        </ul>
      );
    };
    
    export default function VisualizationTool({ doc }) {
      const title = doc.info.title;
      const version = doc.info.version;
      const description = doc.info.description;
    
      return (
        <div>
          <h2>{title}</h2>
          <h3>Version {version}</h3>
          <p>{description}</p>
        </div>
      );
    }
    `,
    18: `Our helper function returns an unordered list with all of the base urls as 'li' elements. Now, let's use this function to display those urls in the component.`,
    19: `const displayBaseUrls = (baseUrls) => {
      return (
        <ul>
          {baseUrls.map((baseUrl) => {
            return <li key={Math.random()}>{baseUrl.url}</li>;
          })}
        </ul>
      );
    };
    
    export default function VisualizationTool({ doc }) {
      const title = doc.info.title;
      const version = doc.info.version;
      const description = doc.info.description;
      const baseUrls = doc.servers;
    
      return (
        <div>
          <h2>{title}</h2>
          <h3>Version {version}</h3>
          <p>{description}</p>
          <h3>Base URLs:</h3>
          {displayBaseUrls(baseUrls)}
        </div>
      );
    }
    `,
    20: `Let's open the application in the browser and verify the visual elements are rendered correctly.`,
    21: `We've now successfully rendered all of the general info for our Book Hero API. Before we start writing code to display the route info, let's place the general info in a 'section' element, and do a little styling.`,
    22: `const displayBaseUrls = (baseUrls) => {
      return (
        <ul>
          {baseUrls.map((baseUrl) => {
            return <li key={Math.random()}>{baseUrl.url}</li>;
          })}
        </ul>
      );
    };
    
    export default function VisualizationTool({ doc }) {
      const title = doc.info.title;
      const version = doc.info.version;
      const description = doc.info.description;
      const baseUrls = doc.servers;
    
      return (
        <div>
          <section id="api-general-info">
          <h2>{title}</h2>
          <h3>Version {version}</h3>
          <p>{description}</p>
          <h3>Base URLs:</h3>
          {displayBaseUrls(baseUrls)}
          </section>
        </div>
      );
    }
    `,
    23: `We've given the section an 'id' attribute so we can reference it in our stylesheet. Currently, our application has one CSS file, 'App.css'. While we could do our styling in that file, we're going to make a separate CSS file for our VisualizationTool component. This way it's clear what component the styles directly apply to. Go ahead and create a 'VisualizationTool.css' file in the 'src' folder.`,
    24: `Open the 'VisualizationTool.css' file, and add the following CSS code. When applied, it will create a teal border around the general info 'section' element`,
    25: `#api-general-info {
      border: 2px solid teal;
    }`,
    26: `Now, before our styles can be applied, we have to connect the CSS file to our component file. We can do this by importing the CSS file in the 'VisualizationTool.js' component file.`,
    27: `import './VisualizationTool.css`,
    28: `Let's verify in the browser that the styles have been applied.`,
    29: `We can see that the teal border has been applied. Although we won't be focusing on styling in this tutorial, feel free to add any styles for the component in the 'VisualizationTool.css' file.`,
    30: `Before we start writing any code to display the routes, let's review the Open API document 'paths' section, which contains all of the route info for the API.`,
    31: `{
      paths: {
        url1: {
          get: {
            operationId: 'GET Books',
            parameters: [],
            responses: {},
          },
          post: {
            operationId: 'POST Books',
            requestBody: {},
            responses: {},
          },
        },
        url2: {},
      },
    }`,
    32: `In the 'paths' object above, 'url1' contains two keys, 'get', and 'post', which correspond to the two routes GET 'url1' and POST 'url1'. The HTTP verb keys (get, post, patch etc.) have objects containing all of the information for that specific [http action/verb + route].`,
    33: `Because we're going to need to write a fair amount of code to display all this information, it will help us to have a strategy to follow. Here's the algorithm we'll rely on for the general structure.`,
    34: `We'll start from the top down, and create a function called 'displayApi' in our 'VisualizationTool.js' file.`,
    35: `import "./VisualizationTool.css";

    const displayBaseUrls = (baseUrls) => {
      return (
        <ul>
          {baseUrls.map((baseUrl) => {
            return <li key={Math.random()}>{baseUrl.url}</li>;
          })}
        </ul>
      );
    };
    
    const displayApi = (document) => {
      const { paths } = document;
      // go through each of the urls, display the routes for that url
      return (
        <div id="urls">
          {Object.keys(paths).map((url) => displayRoutes(paths[url]))}
        </div>
      );
    };
    
    export default function VisualizationTool({ doc }) {
      const title = doc.info.title;
      const version = doc.info.version;
      const description = doc.info.description;
      const baseUrls = doc.servers;
    
      return (
        <div>
          <section id="api-general-info">
            <h2>{title}</h2>
            <h3>Version {version}</h3>
            <p>{description}</p>
            <h3>Base URLs:</h3>
            {displayBaseUrls(baseUrls)}
          </section>
          <section id="api-route-info">{displayApi(doc)}</section>
        </div>
      );
    }
    `,
    36: `Notice that we define our 'displayApi' function on line 13, and call it on line 39, passing the function the document as input. On line 18, you can see that we map over each of the urls in the 'paths' object. For each 'url', we return a call to the 'displayRoutes' function, which we're going to write next.`,
    37: `import "./VisualizationTool.css";

  const displayBaseUrls = (baseUrls) => {
    return (
      <ul>
        {baseUrls.map((baseUrl) => {
          return <li key={Math.random()}>{baseUrl.url}</li>;
        })}
      </ul>
    );
  };
  
  const displayRoutes = (url) => {
    // go through each of the httpActions in the url, display the route for the httpAction + url
    return (
      <div class="routes">
        {Object.keys(url).map((httpAction) => displayRoute(url[httpAction]))}
      </div>
    );
  };
  
  const displayApi = (document) => {
    const { paths } = document;
    // go through each of the urls, display the routes for that url
    return (
      <div id="urls">
        {Object.keys(paths).map((url) => displayRoutes(paths[url]))}
      </div>
    );
  };
  
  export default function VisualizationTool({ doc }) {
    const title = doc.info.title;
    const version = doc.info.version;
    const description = doc.info.description;
    const baseUrls = doc.servers;
  
    return (
      <div>
        <section id="api-general-info">
          <h2>{title}</h2>
          <h3>Version {version}</h3>
          <p>{description}</p>
          <h3>Base URLs:</h3>
          {displayBaseUrls(baseUrls)}
        </section>
        <section id="api-route-info">{displayApi(doc)}</section>
      </div>
    );
  }
  `,
    38: `displayRoutes takes a url object as input, and returns a call to 'displayRoute' for each http action key in the url object; we'll add 'displayRoute' next.`,
    39: `import "./VisualizationTool.css";

    const displayBaseUrls = (baseUrls) => {
      return (
        <ul>
          {baseUrls.map((baseUrl) => {
            return <li key={Math.random()}>{baseUrl.url}</li>;
          })}
        </ul>
      );
    };
    
    const displayRoute = (route) => {
      // TO-DO: add the rest of the route information
      return <div class="route">{route.operationId}</div>;
    };
    
    const displayRoutes = (url) => {
      // go through each of the httpActions in the url, display the route for the httpAction + url
      return (
        <div class="routes">
          {Object.keys(url).map((httpAction) => displayRoute(url[httpAction]))}
        </div>
      );
    };
    
    const displayApi = (document) => {
      const { paths } = document;
      // go through each of the urls, display the routes for that url
      return (
        <div id="urls">
          {Object.keys(paths).map((url) => displayRoutes(paths[url]))}
        </div>
      );
    };
    
    export default function VisualizationTool({ doc }) {
      const title = doc.info.title;
      const version = doc.info.version;
      const description = doc.info.description;
      const baseUrls = doc.servers;
    
      return (
        <div>
          <section id="api-general-info">
            <h2>{title}</h2>
            <h3>Version {version}</h3>
            <p>{description}</p>
            <h3>Base URLs:</h3>
            {displayBaseUrls(baseUrls)}
          </section>
          <section id="api-route-info">{displayApi(doc)}</section>
        </div>
      );
    }
    `,
    40: `Now that we've added 'displayRoute', our fledgling component should display the 'operationId' for every route in the API. The Book Hero API document only has two routes, 'GET books' and 'POST books', so that's what we should expect to see now. If it's not already running, go ahead and start up the web app via the command line. You see something like this.`,
  },
};

export { content };
