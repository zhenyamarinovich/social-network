import "./App.css";
import Header from "./features/Header";
import Navigation from "./features/Navigation";
import Profile from "./features/Profile";

const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <div className="main-wrapper">
        <main>
          <Navigation />
          <Profile />
        </main>
      </div>
    </div>
  );
};

export default App;
