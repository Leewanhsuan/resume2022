import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import MainZh from '../zhtw/index';
import MainEn from '../enus/index';

const RouteConfig = () => {
    return (
        <Routes>
            <Route path="/" element={<MainZh />}></Route>
            <Route path="/en" element={<MainEn />}></Route>
        </Routes>
    );
};

export default RouteConfig;
