import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Search, MapPin, User, Bell } from 'lucide-react';
import { restaurants, movies, events, stores, activities, playFacilities } from '../data/mockData';
import '../styles/Header.css';
import '../styles/Layout.css';

const searchableItems = [
    ...restaurants.map(i => ({ ...i, searchType: 'dining' })),
    ...movies.map(i => ({ ...i, searchType: 'movies' })),
    ...events.map(i => ({ ...i, searchType: 'events' })),
    ...stores.map(i => ({ ...i, searchType: 'stores' })),
    ...activities.map(i => ({ ...i, searchType: 'activities' })),
    ...playFacilities.map(i => ({ ...i, searchType: 'play' }))
];

const Header = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const isProfilePage = location.pathname.startsWith('/profile');

    const [searchQuery, setSearchQuery] = useState('');
    const [isSearchFocused, setIsSearchFocused] = useState(false);
    const searchRef = useRef(null);

    // Filter items based on query
    const searchResults = searchQuery.trim() === '' 
        ? [] 
        : searchableItems.filter(item => 
            (item.name || item.title || '').toLowerCase().includes(searchQuery.toLowerCase()) ||
            (item.cuisine || item.category || item.genre || '').toLowerCase().includes(searchQuery.toLowerCase())
        ).slice(0, 8); // Limit to top 8

    // Handle outside click
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (searchRef.current && !searchRef.current.contains(event.target)) {
                setIsSearchFocused(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleResultClick = (item) => {
        setSearchQuery('');
        setIsSearchFocused(false);
        navigate(`/${item.searchType}/${item.id}`);
    };

    return (
        <header className="header">
            <div className="header-top">
                <div className="location-selector">
                    <MapPin size={18} className="location-icon" />
                    <div>
                        <span style={{ fontSize: 10, color: '#999', display: 'block', lineHeight: 1 }}>Your location</span>
                        <span className="location-text" style={{ fontWeight: 700, fontSize: 14 }}>Andheri West, Mumbai</span>
                    </div>
                </div>
                <div className="profile-actions">
                    <Link to="/notifications" className="icon-wrapper" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <Bell size={20} />
                    </Link>
                    <Link to="/profile" className="profile-pic" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <User size={20} />
                    </Link>
                </div>
            </div>

            {!isProfilePage && (
                <div className="search-container" ref={searchRef} style={{ position: 'relative' }}>
                    <div className="search-bar">
                        <Search size={18} className="search-icon" />
                        <input
                            type="text"
                            placeholder="Search for restaurants, movies, events..."
                            className="search-input"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            onFocus={() => setIsSearchFocused(true)}
                        />
                    </div>
                    
                    {/* Search Dropdown */}
                    {isSearchFocused && searchQuery && (
                        <div className="search-dropdown">
                            {searchResults.length > 0 ? (
                                searchResults.map(item => (
                                    <div 
                                        key={item.id} 
                                        className="search-result-item"
                                        onClick={() => handleResultClick(item)}
                                    >
                                        <div className="search-result-icon">
                                            <Search size={14} />
                                        </div>
                                        <div className="search-result-info">
                                            <div className="search-result-title">{item.name || item.title}</div>
                                            <div className="search-result-type">
                                                {item.searchType.charAt(0).toUpperCase() + item.searchType.slice(1)} • {item.cuisine || item.genre || item.category || item.venue}
                                            </div>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className="search-result-empty">No results found for "{searchQuery}"</div>
                            )}
                        </div>
                    )}
                </div>
            )}
        </header>
    );
};

export default Header;
