const paragraphs = {
  1: `In this section, we'll continue building our Animal Kingdom web app by adding some styles using CSS (cascading style sheets). Before we get started with styling our HTML elements, it will be instructive to take a look at the structure of the HTML code we have now.`,
  2: `Let's remind ourselves what the html looks like for our web app. I'm also going to add some class names that we'll make use of later when we do the styling.`,
  3: `<!DOCTYPE html>
  <html>
    <head>
      <title>Cat Kingdom</title>
    </head>
    <body>
      <h1 class="page-title">Animal Kingdom</h1>
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
};

export { paragraphs };
