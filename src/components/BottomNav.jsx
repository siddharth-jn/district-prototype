import React from 'react';
import { NavLink } from 'react-router-dom';
import { Utensils, Film, Ticket, Home, ShoppingBag, Compass, Gamepad } from 'lucide-react';
import '../styles/BottomNav.css';

const BottomNav = () => {
    return (
        <nav className="bottom-nav">
            <NavLink to="/" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
                <Home size={24} />
                <span>Home</span>
            </NavLink>
            <NavLink to="/dining" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
                <Utensils size={24} />
                <span>Dining</span>
            </NavLink>
            <NavLink to="/movies" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
                <Film size={24} />
                <span>Movies</span>
            </NavLink>
            <NavLink to="/events" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
                <Ticket size={24} />
                <span>Events</span>
            </NavLink>
            <NavLink to="/stores" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
                <ShoppingBag size={24} />
                <span>Stores</span>
            </NavLink>
            <NavLink to="/activities" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
                <Compass size={24} />
                <span>Activities</span>
            </NavLink>
            <NavLink to="/play" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
                <Gamepad size={24} />
                <span>Play</span>
            </NavLink>
        </nav>
    );
};

export default BottomNav;
