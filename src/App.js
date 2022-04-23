import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Home from "./Pages/Home/Home.jsx";
import Form from "./Pages/Sign-form/Form";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Nav />}>
        <Route index element={<Home />} />
        <Route path="sign-in" element={<Form />} />
      </Route>
    </Routes>
  );
};

export default App;
