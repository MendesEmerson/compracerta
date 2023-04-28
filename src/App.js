import ListPage from "./pages/PageList";
import CadastroPage from "./pages/cadastro";
import HomePage from "./pages/home";
import LoginPage from "./pages/login";
import UserHome from "./pages/userHome";
import { GlobalStyle } from "./styles/styles-global";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cadastro" element={<CadastroPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/userhome" element={<UserHome />} />
          <Route path="/listpage/:idList" element={<ListPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
