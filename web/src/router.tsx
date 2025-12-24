import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from 'react-router-dom'
import Index from './pages/index'

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/">
            <Route index element={<Index />} />
        </Route>
    )
)
