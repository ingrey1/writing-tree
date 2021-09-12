const paragraphs = {
  1: "In this section, we will start putting together the HTML for a simple web application that will render in our browser. While I could start off with a discussion of the technologies underlying what we're about to build, I don't think that would be particularly helpful. As a fellow learner, I've found it's always best to have some practical context to anchor more complex abstractions.",
  2: "Before we get started, let's make sure you have the right tools for the job available. In addition to a web browser, the only other thing you will need right now is a text editor. Here are a couple popular options that have ample plugins to support you in your coding journey.",
  3: "Let's go ahead and put some basic HTML markdown in our document.",
  4: `<!DOCTYPE html>
<html>
  <head>
   <title>Cat Kingdom</title>
  </head>
  <body>
   <h1>Animal Kingdom</h1>
   <h2>The best kingdom</h2>
   <section>
    <p>We will add lots of cats to the kingdom</p>
    <p>Be Prepared!</p>
   </section>
  </body>
</html>`,
  5: `The HTML code above consists of opening and closing tags, with some tags living inside of other tags. For example, the 'section' tag lives in the 'body' tag. So, we say that the 'body' is the parent of 'section', and 'section' is the child of 'body'. Pay attention to the 'body' and 'header' tags. We'll discuss their meaning after we view the rendered document.`,
  6: `Go ahead and open the 'cat-kingdom.html' file in your favorite browser. It should look something like this.`,
  7: `Can you see where the 'title' tag is rendered as an HTML element on the screen?`,
  8: `<title>Cat Kingdom</title>`,
  9: `The 'title' element, and the other child elements of the 'head', provide us with information about our webpage. The 'body' element, on the other hand, is the parent or ancestor of all the elements which comprise the content of the webpage.`,
  10: `There are a lot of different HTML tags that can be used to display text content on the screen. For most them, your browser won't care what content you put between the tags. However, some of these tags are intended to be used for specific kinds of content. Consider the following code snippet.`,
  11: `<address>The Cat Pounced On The Rabbit.</address>`,
  12: `This is probably not the right sort of content for an 'address' element. When it doubt, you can always use the content-neutral 'div' tag.`,
  13: `<div>The Cat Pounced On The Rabbit.</div>`,
  14: `That's better. It's not wrong, but can we find a tag that might be a little more accurate in terms of characterizing it's own content?`,
  15: `<p>The Cat Pounced On The Rabbit.</p>`,
  16: `There we go. This isn't the only sort of tag that might make sense for our description, but it will certainly do.`,
  17: `You might be wondering why we should care what tags we use if the end result is the same in terms of content rendered. However, one major reason concerns accessibility. Many people depend on screen-readers to navigate websites. Carefully chosen tags can mean the difference between completely inaccessible content, and a pleasant screen-reading experience. Click this icon to learn more about HTML elements and accessibility.`,
};

export { paragraphs };
