import {Outlet} from "react-router-dom";


function App() {
  

  return (
    <>
      <header>
        <Link to="/">Home</Link>
        <Link to="/">Projects</Link>
      </header>
      <Outlet/>
      <footer className="read-the-docs">My footer</footer>
    </>
  );
}

export default App;
