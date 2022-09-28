//import { Battleship, ComicCon, EarthTone, Frontier_Adventurers, Reddit, Simpsons, ToDo, WeatherApp } from './thumbnails';

import Battleship from './thumbnails/Battleship.JPG';
import ComicCon from './thumbnails/ComicCon.jpg';
import EarthTone from './thumbnails/EarthTone.JPG';
import Frontier_Adventurers from './thumbnails/Frontier_Adventurers.JPG';
import Reddit from './thumbnails/RedditClone.JPG';
import Simpsons from './thumbnails/Simpsons.JPG';
import ToDo from './thumbnails/ToDo.JPG';
import WeatherApp from './thumbnails/weatherApp.JPG'; 


const template =
{
    title: '',
    link: '',
    Github: '',
    description: '',
    attributesHeader: '',
    attributes: [],
    thumbnail: '',
}

export const ProjectList = [
    {
        title: 'Earth Tone E-commerce Website', 
        link: 'https://albertyhu.github.io/tea-eCommerce-shop/', 
        Github: 'https://github.com/Albertyhu/tea-eCommerce-shop', 
        description: 'This is a sample site I built for an online store, written in React JS and integrated with Firebase and Stripe API.',
        attributesHeader: 'It has all the basic eCommerce functionalities including, but not limited to: ', 
        attributes: ['Product Pages', 'Search functionality', 'Creating a personal account', 'Credit cart functionality', 'Order processing'], 
        thumbnail: EarthTone, 
        type: "Web App Development/Design", 
    }, 
    {
        title: 'Reddit Social Media Clone',
        link: 'https://react-clone-b735d.web.app/',
        Github: 'https://github.com/Albertyhu/Reddit-Clone',
        description: 'I cloned my favorite website Reddit using React JS and it is integrated with Firebase.',
        attributesHeader: 'It has all the basic features of Reddit including, but not limited to:',
        attributes: ['Creating a profile', 'Creating threads and being able to respond to them', 'Voting on thread and comments', '•	Filtering thread feeds and comment feeds based on date, popularity and controversy', '•	Toggling the display theme of each of the communities '],
        thumbnail: Reddit,
        type: "Web App Development", 
    },
    {
        title: 'Frontier Adventurers Mountain Climbing Site',
        link: 'https://albertyhu.github.io/Frontier-adventurers/',
        Github: 'https://github.com/Albertyhu/Frontier-adventurers',
        description: 'This is a clone of a mountain climbing site I’ve built for client. The content has been changed for the client’s interest in anonymity. The site is built with Webpack and demonstrates my ability to design modern looking websites. ',
        attributesHeader: '',
        attributes: [],
        thumbnail: Frontier_Adventurers,
        type: "Web App Development/Design", 
    },
    {
        title: 'Battleship Game',
        link: 'https://albertyhu.github.io/Battleship/',
        Github: 'https://github.com/Albertyhu/Battleship',
        description: 'This is a battleship game that I built with React JS and it involved a lot time spent testing functions with Jest. ',
        attributesHeader: '',
        attributes: [],
        thumbnail: Battleship,
        type: "Web App Development", 
    },
    {
        title: 'Weather App ',
        link: 'https://albertyhu.github.io/Weather_App/',
        Github: 'https://github.com/Albertyhu/Weather_App',
        description: 'This is a weather app I’ve built with Webpack. When the user inputs their location onto the app, the app will indicate the current weather at there and the background changes based on the address that the user inputs. ',
        attributesHeader: '',
        attributes: [],
        thumbnail: WeatherApp,
        type: "Web App Development", 
    },
    {
        title: 'Photo Tagging Search Game ',
        link: 'https://photo-tagging-project.web.app/',
        Github: 'https://github.com/Albertyhu/photo-tagging-project',
        description: 'This is an Easter Hunt game built with React JS and Firebase. The object of the game is the find all characters inside picture while being timed. Once a character is found, a marker will be placed on that character. The locations of the characters are stored in Firestore and once the browser loads, the app will pull data of the location from Firebase. ',
        attributesHeader: '',
        attributes: [],
        thumbnail: ComicCon,
        type: "Web App Development", 
    },
    {
        title: 'Simpsons Memory Card Game',
        link: 'https://albertyhu.github.io/Simpsons-Memory-Card-Game/',
        Github: 'https://github.com/Albertyhu/Simpsons-Memory-Card-Game',
        description: 'This is a memory card game built in React JS. The object of this game is to click on each card once to score one point and to try get the highest score.If you click on a card more than once, you lose the game and the score resets to zero.',
        attributesHeader: '',
        attributes: [],
        thumbnail: Simpsons,
        type: "Web App Development", 
    },
    {
        title: 'To-Do List App using Firebase ',
        link: 'https://albertyhu.github.io/To-Do-APP/',
        Github: 'https://github.com/Albertyhu/To-Do-APP',
        description: 'This is an app built with Webpack that allows users to build a daily, weekly and monthly to-do list. Users can create an account and update their list dynamically. Users can also an a reminder through email of when the deadline of their task is approaching. The data is stored in Firebase. ',
        attributesHeader: '',
        attributes: [],
        thumbnail: ToDo,
        type: "Web App Development", 
    },
]


const Obsolete = [
    {
        title: 'E-Commerce Mobile App',
        Github: 'https://github.com/Albertyhu/eCommerce-App',
        description: 'I’ve built an E-Commerce mobile app using React Native. Products, personal account information and orders are stored in Amazon AWS Amplify. Users can browse through various products, search for a particular product with the search, put products into their own cart and make purchases. It functions just like how any eCommerce application works. ',
        attributesHeader: 'It has all the functionalities of a typical E-Commerce including:',
        attributes: [
            'Searching for products',
            'Automatic updates on stocks',
            'Product Profile',
            'Making a purchase',
            'Procesing an order',
        ],
        thumbnail: '',
        type: "Mobile App Development",
    },
]