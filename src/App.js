import CadastroPage from "./pages/cadastro";
import HomePage from "./pages/home";
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
        </Routes>
      </Router>
    </div>
  );
}

export default App;
