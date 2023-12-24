import {Outlet} from 'react-router-dom'
import Navbar from '../components/Navbar'

export default function HomePage() {
    return (
        <>
            <Navbar />
            <h1>This is the home page</h1>
            <Outlet />
        </>
    )
}