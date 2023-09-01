import './App.css'
import Router from './router/router'
import AccountMenu from './components/nav'

function App() {


  return (
    <>
      {/* <Header/> */}
      <AccountMenu />
      <Router />
      <br/>
      {/* <Footer /> */}
    </>
  )
}

export default App