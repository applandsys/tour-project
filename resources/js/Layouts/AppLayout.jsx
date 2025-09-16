// resources/js/Layouts/AppLayout.jsx
import { Link } from 'react-router-dom';

export default function AppLayout({ children }) {
    return (
        <div className="app-layout">
            <header>
                <nav>
                    <ul>
                        <li><Link to="/dashboard">Dashboard</Link></li>
                        <li><Link to="/login">Login</Link></li>
                        <li><Link to="/register">Register</Link></li>
                    </ul>
                </nav>
            </header>
            <main>{children}</main>
            <footer>
                <p>My Custom Footer</p>
            </footer>
        </div>
    );
}
