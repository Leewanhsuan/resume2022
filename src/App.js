import Header from './Header';
import './style.css';
import { BrowserRouter as Router } from 'react-router-dom';
import RouteConfig from './route/index';

function App() {
    return (
        <Router>
            <Header />
            <RouteConfig />
        </Router>
    );
}

export default App;
