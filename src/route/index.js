import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Main from '@zhtw/Main';

const RouteConfig = () => {
    return (
        <Routes>
            <Route path="/zh" element={<Main />}></Route>
            <Route path="/en" element={<Main />}></Route>
        </Routes>
    );
};

export default RouteConfig;
