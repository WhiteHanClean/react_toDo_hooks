import React , {useState , useRef} from 'react'
import Counter from './components/Counter';
import PostForm from './components/PostForm';
import PostList from './components/PostList';
import MyButton from './components/UI/Button/MyButton';
import MyInput from './components/UI/Input/MyInput';
import './styles/App.css'

function App() {

  const [posts, setPosts] = useState([
    {id: 1, title:'lolBoy', body: 'sdfsdfwe'},
    {id: 2, title:'lolBoy2', body: 'sdfsdfwe'},
    {id: 3, title:'lolBoy2', body: 'sdfsdfwe'},
    {id: 4, title:'lolBoy2', body: 'sdfsdfwe'}
  ])

  const [post, setPost ] = useState({ title: '', body : ''})

  // const bodyInputRef = useRef()


  const addNewPost = (e) => {
    e.preventDefault()
    setPosts( [...posts, {...post, id : Date.now() }])
    setPost({title: '', body : ''})
  }


  
  return (
    <div className="App"> 
      <PostForm/>
     

      <PostList posts={posts}/>
    </div>
  );
}

export default App;
