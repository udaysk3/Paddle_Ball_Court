import { Navigation } from "./components/nav";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './components/home'
import Login from "./components/login";
// import Logout from "./components/Logout";

const App = () => {
    return (
        <Router>
            <Navigation />
            
            <Routes>
                <Route exact path="/" element={< Home />} />
                <Route path="/user/login/" element={<Login />} />
                {/* <Route path="/user/logout/" element={< Logout />} /> */}
            </Routes>
        </Router >
    )
}
export default App;