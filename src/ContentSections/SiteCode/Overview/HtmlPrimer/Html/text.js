const paragraphs = {
  1: "In this section, we will start putting together the HTML for a simple web application that will render in our browser. We will create a cat kingdom, and populate the kingdom with cats.",
  2: "Before we get started, let's make sure you have the right tools for the job available. In addition to a web browser, the only other thing you will need right now is a text editor. Here are a couple popular options that have ample plugins to support you in your coding journey.",
  3: "Let's put some basic HTML markdown in our document.",
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
  14: `That's better. It's not wrong, but can we find a tag that might be a little more accurate in terms of characterizing its own content?`,
  15: `<p>The Cat Pounced On The Rabbit.</p>`,
  16: `There we go. This isn't the only sort of tag that might make sense for our description, but it will certainly do.`,
  17: `You might be wondering why we should care what tags we use if the end result is the same in terms of content rendered. However, one major reason concerns accessibility. Many people depend on screen-readers to navigate websites. Carefully chosen tags can mean the difference between completely inaccessible content, and a pleasant screen-reading experience. Click this icon to learn more about HTML elements and accessibility.`,
  18: `Some HTML elements have optional or required properties. These properties are called attributes. Let's go ahead and add an image tag to our cat kingdom.`,
  19: `<!DOCTYPE html>
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
      <img>
     </section>
    </body>
  </html>`,
  20: `Check out that image tag. Yes, there is something wrong with it. But it's not the fact that it's missing a closing tag. Not all HTML elements require a closing tag. You might have gathered that it's supposed to display an image on the screen, but what image? Let's try adding the 'src' (source) attribute to the 'img' element.`,
  21: `<img src="https://cdn.pixabay.com/photo/2014/12/22/10/04/lions-577104__340.jpg">`,
  22: `Let's save our code and view it in the browser.`,
  23: `By supplying the 'src' attribute a url string as a value, we were able to display our image. You might be wondering whether or not we can resize it. And we definitely can, but let's wait until we get to the CSS tutorial.`,
  24: `<section id="mufasa-menagerie">Mufasa's children will live here</section>`,
  25: `You can add an 'id' attribute to any element.`,
  26: `However, sometimes the url you provide the image element with won't work. Additionally, screen-readers cannot make sense of images, as images. To combat these problems, we can supply an additional attribute, 'alt', with a textual description of the image.`,
  27: `<img src="https://cdn.pixabay.com/photo/2014/12/22/10/04/lions-577104__340.jpg" alt="Two Lions resting together.">`,
  28: `Before we add our first cat to the kingdom, we will introduce an element that will serve as the parent of all the cats in the kingdom.`,
  29: `It's time to add a lion to Mufasa's menagerie. Before we get to the html, let's list the pieces of information we want to include for each animal.`,
  30: `We can add the 'section' element first, and then think about which tags we should use for Simba's data.`,
  31: `<section id="mufasa-menagerie">
   <section id="simba">
    Simba is Mufasa's child element. Mufasa is Simba's parent element.
   </section>
</section>`,
  32: `While there are many ways we could use markup to structure Simba's information, we'll use this opportunity to introduce the 'table' element, adding Simba's name and age.`,
  33: `<section id="mufasa-menagerie">
  <section id="simba">
    <table id="simba-table">
      <tr>
        <th>Name</th>
        <th>Age</th>
      </tr>
      <tr>
        <td>Simba</td>
        <td>1</td>
      </tr>
    </table>
  </section>
</section>`,
  34: `Our full document now looks like this.`,
  35: `<!DOCTYPE html>
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
        <img
          src="https://cdn.pixabay.com/photo/2014/12/22/10/04/lions-577104__340.jpg"
        />
        <section id="mufasa-menagerie">
          <section id="simba">
            <table id="simba-table">
              <tr>
                <th>Name</th>
                <th>Age</th>
              </tr>
              <tr>
                <td>Simba</td>
                <td>1</td>
              </tr>
            </table>
          </section>
        </section>
      </section>
    </body>
  </html>
  `,
  36: `The menagerie is coming along. Go ahead and open it in the browser.`,
  37: `Now let's consider the anatomy of the 'table' element.`,
  38: ` <table id="simba-table">
  <tr>
    <th>Name</th>
    <th>Age</th>
    <th>Friends</th>
  </tr>
  <tr>
    <td>Simba</td>
    <td>1</td>
  </tr>
</table>`,
  39: `Can you tell how the table rows and column values are displayed based on (1) the order of the html tags in the above code snippet, and (2) the output in your web browser?`,
  40: `Let's consider how we can add the rest of Simba's information to our webpage. While "Name" and "Age" each have a single value, "Friends" and "Favorite Foods" may have multiple values. When you need to group multiple values together, the 'list' element is a good choice. There are two sorts of lists, ordered and unordered. We will assume, for the sake of demonstration, that "Favorite Foods" are ordered and "Friends" are unordered.`,
  41: `Add The 'ul' (unordered list) as a 'td' (column value) for the 'tr' header "Friends".`,
  42: ` <table id="simba-table">
  <tr>
    <th>Name</th>
    <th>Age</th>
    <th>Friends/th>
  </tr>
  <tr>
    <td>Simba</td>
    <td>1</td>
    <td>
      <ul>
        <li>Wildebeast</li>
        <li>Giraffe</li>
      </ul>
    </td>
  </tr>
</table>`,
  43: `Add The 'ol' (ordered list) as a 'td' (column value) for the 'tr' header "Favorite Foods".`,
  44: `  <table id="simba-table">
  <tr>
    <th>Name</th>
    <th>Age</th>
    <th>Favorite Foods</th>
    <th>Friends</th>
  </tr>
  <tr>
    <td>Simba</td>
    <td>1</td>
    <td>
      <ul>
        <li>Wildebeast</li>
        <li>Giraffe</li>
      </ul>
    </td>
    <td>
      <ol>
        <li>Nala</li>
        <li>Scar</li>
        <li>Zazu</li>
      </ol>
    </td>
  </tr>
</table>
</section>`,
  45: `Here is the complete code so far.`,
  46: `<!DOCTYPE html>
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
      <img
        src="https://cdn.pixabay.com/photo/2014/12/22/10/04/lions-577104__340.jpg"
      />
      <section id="mufasa-menagerie">
        <section id="simba">
          <table id="simba-table">
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Friends</th>
              <th>Favorite Foods</th>
            </tr>
            <tr>
              <td>Simba</td>
              <td>1</td>
              <td>
                <ul>
                  <li>Wildebeast</li>
                  <li>Giraffe</li>
                </ul>
              </td>
              <td>
                <ol>
                  <li>Nala</li>
                  <li>Scar</li>
                  <li>Zazu</li>
                </ol>
              </td>
            </tr>
          </table>
        </section>
      </section>
    </section>
  </body>
</html>
`,
  47: `Let's see what that looks like in the browser.`,
};

export { paragraphs };
