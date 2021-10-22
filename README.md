
## Project Organization
There are 3 levels of hierarchy to this project. At the top level are Page Views. Page Views are typically where any useEffect logic will run. Page Views will be composed of smaller components and can pass props down accordingly in order to avoid giving all components direct access to our global context. This project has two page views. One for the home page and one for a game's details page.

The second hierarchy level is Component Compositions.  These are collections of smaller components which 
function logically together. 

The bottom level is Components. These are generally the smallest units of functioning code and are typically designed to be the most reusable. 


## Data and Data Fetching
There are two different GET requests used to fetch data. One uses a games ID and returns information about that game specifically. The other request is build from three optional parameters (platform, category, and sort-by). We are able to achieve all the desired filtering by manipulating these three parameters.


## Context
There is one global context file in the Context folder. This is typically where I put api calls and related state objects that need to persist throughout the project.


## App.js and Routing
react-router-dom is used for routing. There are two routes. One to the homepage and the other to 
a game's page. The route for the game's page uses url parameters to pass an id to get data for that game.


## 3rd Party Tools
I decided to use a few different tools to make this project simpler. I use react-router-dom for all routing. coolors.co was used to help build a color palette. I used material ui for the Selector (used to choose genre) simply because building this from scratch is time consuming especially to implement keyboard functionality and other accessibility features. I also used material ui for a the loading spinner which is briefly visible on the game details page while waiting for data. Again I chose to add this because it was the simple solution for something that is barely noticible for a half second.


## Accessibility
Accessibility has always been something that I strive to implement successfully. I used aria-labels, roles, and labelledBy to the best of my ability. I tested the site for keyboard functionality and believe the interactions are intuitive. 


## Testing
I chose not to write tests and instead devote extra time to accessibility. Typically I will use Jest to write unit tests on my components. Since these are the smallest units of functional code there typically aren't more than a couple of interactions to test.  Also, I normally would implement some form of type checking (eithere TypeScript or PropTypes) so that I don't spend time testing impossible edge cases.

Component Compositions will need a mix of unit and integration tests. Here I need to make sure that data outputs as expected when the user takes a given set of actions.

For Page Views I would take a few snapshot tests to ensure the ui is not changing.


## Improvements
I ran Lighthouse in dev tools to check the website an it scored about as expect. Accessibility and Best Practices both scored high. A 98 and 93 respectively. Performance was a bit lower at a 63, but this is not unexpected for a webpage trying to render a few hundered images. This could be greatly improved by a smart scroll system so that we only render a handful of images at once.

I used the api for filtering but it is worth a conversation on whether filtering should be done on the front end to reduce network requests. Reducing network requests is nice but here it comes at the cost of increased computation on the users machine. As well as increased coupling between the front and back end.

We would probably want an end point to pull in all of the genres for the Selector so that we don't have a huge array of ever changing strings.

The Selector probably isn't the best choice from a ux perspective given the number of options there are. 

There is a small bug tabbing on the modal. The x button falls into the regular tab order of the page while it should be lifted into a smaller group of focusable elements using by usiing ref on the modal.

I used an HTML link to launch a web browser for the specific game rather than a launch button.

I did not implement a list of relevent games. The api has a sort by feature which accepts relevence as a parameter.  You can use this on the home page of the app, however it is not clear what sorting by relevence is actually doing since no game ID is implemented.  Another network request filtering by the same category and platform would get us the info needed to make this list.
