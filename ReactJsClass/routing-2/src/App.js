import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom"
import Home from './Home';
import About from './components/About';
import Blog from './components/Blog';
import Navbar from './components/Navbar';
import Game from './components/Game';
import GameResult from './components/GameResult';
import BlogContent from './components/BlogContent';
import { useRouteMatch } from 'react-router-dom/';


// https://www.digitalocean.com/community/tutorials/react-react-helmet
// https://blog.logrocket.com/search-optimized-spas-react-helmet/

// https://www.taniarascia.com/redux-react-guide/
function App() {

  let topics = [
    {
        topicName: "React Basics",
        id: 1,
        description: "lorem ipsum",

        content: [
          {
            title: "Class component and Function Component",
            id: "components",
            description: "lorem ipsum"
          },

          {
            title: "Component Life Cycle",
            id: "component-lifecycle",
            description: "lorem ipsum"
          },

          {
            title: "React Styling",
            id: "react-styling",
            description: "lorem ipsum"
          }
        ]
    },

    {
      topicName: "Javascript Basics",
      id: 2,
      description: "lorem ipsum",

      content: [
        {
          title: "Javascript Functions",
          id: "jsFunction",
          description: "lorem ipsum"
        },

        {
          title: "XHR",
          id: "xhr",
          description: "lorem ipsum"
        },

        {
          title: "Javascript Callbacks",
          id: "js-callbacks",
          description: "lorem ipsum"
        }
      ]

    }, 

    {
      topicName: "CSS Basics",
      id: 3,
      description: "lorem ipsum",

      content: [
        {
          title: "CSS basics",
          id: "css-basics",
          description: "lorem ipsum"
        },

        {
          title: "CSS position",
          id: "css-position",
          description: "lorem ipsum"
        },

        {
          title: "CSS Layout",
          id: "css-layout",
          description: "lorem ipsum"
        }
      ]
    }
  ]


  const {url, path} = useRouteMatch();




  return (
    <div className="App">

      <Router>

    <Navbar/>


    <Switch>


   

        <Route path="/" exact>
          <Home/>
        </Route>


        <Route path="/about.html" component={About}/>

        {/* <Route topics={topics} path="/blog" component={Blog}/> */}

        <Route path="/blog">

          <Blog topics={topics}/>

        </Route>

        <Route path="/blog:topicId"  component={BlogContent}/>


        <Route path="/game" component={Game}/>

        <Route path="/result" component={GameResult}/>

        <Route path={`${path}/:topicId`}>
                <BlogContent topics={topics}/>
            </Route>





        </Switch>
      </Router>
     
    </div>
  );
}

export default App;
