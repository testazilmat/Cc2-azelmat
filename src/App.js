import { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import { getUser } from "./redux/UserSlice";
import { GetListPosts } from "./redux/PostsSlice";
import { BrowserRouter as Router } from "react-router-dom";
import Accueil from "./components/acceuil/Acceuil";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUser());
    dispatch(GetListPosts());
  }, [dispatch]);
  return (
    <Router>
      <div className="App">
        <Accueil />
      </div>
    </Router>
  );
}

export default App;
