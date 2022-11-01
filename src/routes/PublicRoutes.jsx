import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import App from "../App";
import Game from "../components/pages/Game";

const PublicRoutes = () => {

    return(
        <Router>
            <Routes>
                <Route element={<App />} path='/' />
                <Route element={<Game />} path='/game' />
            </Routes>
        </Router>
    )
}

export default PublicRoutes;