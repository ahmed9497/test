import {
    Routes,
    Route,
} from "react-router-dom";
import Home from "../screens/home";
import Movies from "../screens/movies";
import TvSeries from "../screens/tvSeries";
import Layout from "../templates/layout";
const AppRouter = () => {
    return (
        <Routes>
            <Route path="" element={<Layout />} >
                <Route index element={<Home />} />
                <Route path="movies" element={<Movies />} />
                <Route path="series" element={<TvSeries />} />
            </Route>
        </Routes>
    )
}

export default AppRouter