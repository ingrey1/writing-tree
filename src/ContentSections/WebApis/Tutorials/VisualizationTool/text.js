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
    1: `As we will be building our interactive visualization tool as a React component, we'll need a React setup test things out as we go. So, we'll be using the 'create-react-app' npx package to bootstrap our project.`,
    2: `Go ahead and verify that you have a version of npx on your machine via the command line (when you installed Node, the node package manager was also installed).`,
    3: `\home> npx -v`,
    4: `Your terminal should show something like this.`,
    5: `6.14.14`,
  },
};

export { content };
