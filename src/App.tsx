import Toolbar from "./components/Toolbar/Toolbar";
import {Route, Routes} from "react-router-dom";
import Home from "./containers/Home/Home";
import Categories from "./containers/Categories/Categories";
import Add from "./containers/Add/Add";
import ErrorPage from "./components/ErrorPage/ErrorPage";

function App() {

  return (
    <>
      <header><Toolbar/></header>
      <main className="container my-3">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/categories" element={<Categories/>}/>
          <Route path="/add" element={<Add/>}/>
          <Route path="*" element={<ErrorPage/>}/>
        </Routes>
      </main>
    </>
  )
}

export default App
