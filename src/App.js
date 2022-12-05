import "./App.css";

import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
    return (
        <div className="App">
            <Header />
            <div className="Page">
                <Sidebar />
                <Main />
            </div>
        </div>
    );
}

export default App;
