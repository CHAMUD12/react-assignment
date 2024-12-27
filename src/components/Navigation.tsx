import {Link} from "react-router";

export function Navigation() {
    return (
        <>
            <header>
                <nav>
                    <ul>
                        <Link to='/'>Dashboard</Link>
                        <Link to='/add'>Add</Link>
                        <Link to='/delete'>Delete</Link>
                        <Link to='/update'>Update</Link>
                    </ul>
                </nav>
            </header>
        </>
    )
}