const paragraphs = {
  1: `In this section, we'll continue building our Animal Kingdom web app by adding some styles using CSS (cascading style sheets). Before we get started with styling our HTML elements, it will be instructive to take a look at the structure of the HTML code we have now.`,
  2: `Let's remind ourselves what the html looks like for our web app. I'm also going to add some class names that we'll make use of later when we do the styling.`,
  3: `<!DOCTYPE html>
  <html>
    <head>
      <title>Cat Kingdom</title>
    </head>
    <body>
      <h1 id="page-title">Animal Kingdom</h1>
      <h2 class="page-subtitle">The best kingdom</h2>
      <section class="main-content-section">
        <p class="page-description">We will add lots of cats to the kingdom</p>
        <p class="page-description">Be Prepared!</p>
        <img
          src="https://cdn.pixabay.com/photo/2014/12/22/10/04/lions-577104__340.jpg"
        />
        <section id="mufasa-menagerie sub-content-section">
          <section id="simba animal">
            <table id="simba-table" class="animal-table">
              <tr class="table-header-row">
                <th class="table-header animal-name-header">Name</th>
                <th class="table-header animal-age-header">Age</th>
                <th class="table-header animal-friends-header">Friends</th>
                <th class="table-header animal-favorite-foods-header">
                  Favorite Foods
                </th>
              </tr>
              <tr class="table-row animal-data">
                <td class="table-data animal-name">Simba</td>
                <td class="table-data animal-age">1</td>
                <td
                  class="table-data animal-favorite-foods table-data-grandparent"
                >
                  <ul
                    class="
                      table-data-unordered-list
                      animal-favorite-foods-list
                      list-parent
                    "
                  >
                    <li class="animal-favorite-foods-list-item list-item-first">
                      Wildebeast
                    </li>
                    <li class="animal-favorite-foods-list-item list-item-last">
                      Giraffe
                    </li>
                  </ul>
                </td>
                <td class="table-data animal-friends table-data-grandparent">
                  <ol class="table-data animal-friends-ordered-list list-parent">
                    <li
                      class="animal-friends-list-item best-friend list-item-first"
                    >
                      Nala
                    </li>
                    <li class="animal-friends-list-item fake-friend">Scar</li>
                    <li class="animal-friends-list-item list-item-last">Zazu</li>
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
  4: `It can be a bit difficult to see the parent-child relationships within the html. So, I've provided the following tree for you to refer back to as we do the styling.`,
  5: `Alternatively, you can always view the DOM (document object model) tree using your browser dev tools. This has the added advantage of showing you all the properties of each DOM node (element). If you're using Chrome, you can simply right click on a visual element and select 'inspect'. It will look something like this.`,
  6: `In CSS, styles cascade from parents to children. So, we can apply styles to all the descendants of an ancestor by styling the ancestor. This is convenient, as we'll see, but it can be confusing at times. Easy access to the parent-child relationships your HTML elements exhibit via the DOM tree will make learning to style less difficult.`,
  7: `Below you will find some html and a text box where you can define and apply custom CSS styles to your html.`,
  8: `<div class="?">
  <p>
    <i>Simba</i> 
  </p>`,
  9: `Here is an example of CSS class code you can add to the textArea below. Go ahead and try it out.`,
  10: `.color {
    color: red;
  }
  
.large {
  font-size: 20px; 
}`,
  11: `Go ahead and create the following file, and place it in the same folder as your animal-kingdom.html file.`,
  12: `In The head section of your animal-kingdom.html file, add the following line of code. Your CSS and HTML file are now connected, so you can add styles to the CSS file which will apply to your HTML elements.`,
  13: `<html>
<head>
  <title>Cat Kingdom</title>
  <link rel="stylesheet" href="animal-kingdom.css">
</head>`,
  14: `While it's possible to apply styles directly to an element via the 'style' attribute, this "inline" styling approach suffers from a number of problems. Here are a few of them.`,
  15: `The approach we'll take is the "external" styling approach. We use an external style sheet to define our CSS classes.`,
  16: `In order to style elements, we need a way of picking out, or "selecting" those elements. If you only want to apply styles to a single element, you can select that element by id. For example, consider the following element from our html.`,
  17: `<h1 id="page-title">Animal Kingdom</h1>`,
  18: `Let's go ahead and add some CSS to "animal-kingdom.css" to select and style this element by its id, "page-title"`,
  19: `#page-title {
    color: teal;
  }`,
  20: `In addition to styling by id, we can style an element by its kind or type. However, keep in mind that this approach will be applied to every element of the given type. Consider the following 'th' element.`,
  21: `<th class="table-header animal-name-header">Name</th>`,
  22: `Add the following code to your "animal-kingdom.css" file to set the text color to blue for all of the 'th' elements`,
  23: `th {
    color: blue; 
  }`,
  24: `We can also style an element by its class. These styles will apply to every element with the same class name. Consider the following 'ol' element.`,
  25: `<ol class="table-data animal-friends-ordered-list list-parent">
  <li
    class="animal-friends-list-item best-friend list-item-first"
  >
    Nala
  </li>
  <li class="animal-friends-list-item fake-friend">Scar</li>
  <li class="animal-friends-list-item list-item-last">Zazu</li>
</ol>`,
  26: `Add the following code to your "animal-kingdom.css" file to set the text color to green for all of the ordered list's children's text content`,
  27: `.animal-friends-ordered-list {
    color: green; 
  }`,
  28: `Notice that we didn't add a selector type, such as "#", when styling our 'th' elements.`,
  29: `Notice that we use the "." symbol to indicate we're selecting by class. This example is also slightly different than the others, insofar as the element we're styling doesn't have a text content attribute. It's the 'li' children that have text content. So, this represents an example of styles cascading from parent to child.`,
  30: `Your CSS file should look like this now.`,
  31: `#page-title {
    color: teal;
}
  
th {
  color: blue; 
}

.animal-friends-ordered-list {
  color: green; 
}
  `,
  32: `Before testing this out in the browser, look over the CSS and HTML to remind yourself what you expect to happen.`,
  33: `With our styles applied, our webpage is a bit more colorful.`
};

export { paragraphs };
