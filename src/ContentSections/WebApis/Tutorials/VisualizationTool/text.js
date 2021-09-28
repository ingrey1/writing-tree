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
};

export { content };
