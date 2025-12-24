import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from 'react-router-dom'
import Index from './pages/index'
import About from './pages/about/about'
import NotFound from './pages/404/404'
import Layout from './layout/layout'
export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route element={<Layout/>}>
            <Route index element={<Index />} />
            <Route path="about" element={<About />} />
            <Route path="*" element={<NotFound />} />
        </Route>
    )
)
