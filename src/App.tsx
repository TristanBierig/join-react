import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

const App = () => {
  return (
    <div className="body_container">
      <Header />

      <div className="main-sidebar_container">
        <Sidebar />
        <main></main>
      </div>
    </div>
  );
};

export default App;
