
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
I decided to use a few different tools to make this project simpler. I use react-router-dom for all routing. I used material ui for the Selector (used to choose genre) simply because building this from scratch is time consuming especially to implement keyboard functionality and other accessibility features. I also used material ui for a the loading spinner which is briefly visible on the game details page while waiting for data. Again I chose to add this because it was the simple solution for something that is barely noticible for a half second.




## Improvements

Front end filtering may be better

API to pull in allowed values for selectors

coolors.co

material ui spinners

fix alt tag

index.css for global styles

loading spinner ui