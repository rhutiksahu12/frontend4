import { Provider } from 'react-redux'
import './App.css'
import PostList from './components/PostList'
import { store } from './redux/store'

function App() {

  return (
    <>
        {/* <h1>hello</h1> */}
        <PostList />
    </>
  )
}

export default App
