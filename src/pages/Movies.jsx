import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { movies, movieGenres, movieLanguages } from '../data/mockData';
import { Star, Smile, Ghost, Heart, Zap, Eye, Cpu } from 'lucide-react';
import '../styles/Listing.css';
import '../styles/Movies.css';

const Movies = () => {
    const [selectedGenre, setSelectedGenre] = useState(() => sessionStorage.getItem('filter_movies_genre') || null);
    const [selectedLanguage, setSelectedLanguage] = useState(() => {
        const saved = sessionStorage.getItem('filter_movies_language');
        if (!saved) return null;
        return movieLanguages.find(l => l.id === saved) || null;
    });

    // Filter Logic
    const filteredMovies = movies.filter(m => {
        if (selectedGenre && !m.genres.includes(selectedGenre)) return false;
        if (selectedLanguage && m.language !== selectedLanguage.name) return false;
        return true;
    });

    const newReleases = movies.filter(m => m.newRelease);
    const topPicks = [...movies].sort((a, b) => b.rating - a.rating).slice(0, 10);
    const friendWatches = filteredMovies.filter(m => m.friendsActivity && m.friendsActivity.length > 0);

    const getIcon = (iconName) => {
        switch (iconName) {
            case 'Smile': return <Smile size={24} />;
            case 'Ghost': return <Ghost size={24} />;
            case 'Heart': return <Heart size={24} />;
            case 'Zap': return <Zap size={24} />;
            case 'Eye': return <Eye size={24} />;
            case 'Cpu': return <Cpu size={24} />;
            default: return <Smile size={24} />;
        }
    };

    const toggleGenre = (id) => {
        const next = selectedGenre === id ? null : id;
        setSelectedGenre(next);
        if (next) sessionStorage.setItem('filter_movies_genre', next);
        else sessionStorage.removeItem('filter_movies_genre');
    };

    const toggleLanguage = (lang) => {
        const next = selectedLanguage === lang ? null : lang;
        setSelectedLanguage(next);
        if (next) sessionStorage.setItem('filter_movies_language', next.id);
        else sessionStorage.removeItem('filter_movies_language');
    };

    return (
        <div className="listing-page movies-page">
            <div className="page-header">
                <h1>Movies</h1>
            </div>

            {/* Genres */}
            <h2 className="section-title">Browse by Genre</h2>
            <div className="genres-container">
                {movieGenres.map(genre => (
                    <div
                        key={genre.id}
                        className={`genre-item ${selectedGenre === genre.id ? 'active' : ''}`}
                        onClick={() => toggleGenre(genre.id)}
                    >
                        <div className="genre-icon-circle">
                            {getIcon(genre.icon)}
                        </div>
                        <span className="genre-name">{genre.name}</span>
                    </div>
                ))}
            </div>

            {/* Languages */}
            <div className="languages-container">
                {movieLanguages.map(lang => (
                    <div
                        key={lang.id}
                        className={`lang-chip ${selectedLanguage === lang ? 'active' : ''}`}
                        onClick={() => toggleLanguage(lang)}
                    >
                        {lang.name}
                    </div>
                ))}
            </div>

            {/* Default View Sections (no filters active) */}
            {!selectedGenre && !selectedLanguage && (
                <>
                    <h2 className="section-title">New Releases</h2>
                    <div className="horizontal-scroll" style={{ display: 'flex', gap: '12px', overflowX: 'auto', padding: '0 16px 4px', scrollbarWidth: 'none' }}>
                        {newReleases.map(item => (
                            <Link to={`/movies/${item.id}`} key={item.id} className="card">
                                <img src={item.image} alt={item.title} className="card-image" style={{ height: '160px' }} />
                                <div className="card-content">
                                    <div className="card-header">
                                        <h3>{item.title}</h3>
                                        <div className="card-rating">
                                            <Star size={11} fill="#6366F1" stroke="none" />
                                            <span style={{ fontWeight: 700, fontSize: '11px', color: '#6366F1' }}>{item.rating}</span>
                                            <span style={{ fontSize: '10px', color: 'var(--color-gray)' }}>({item.reviewsCount})</span>
                                        </div>
                                    </div>
                                    <p className="card-subtitle">{item.genre}</p>
                                    {item.language && <p className="card-subtitle">{item.language}</p>}
                                </div>
                            </Link>
                        ))}
                    </div>

                    <h2 className="section-title">Top Rated</h2>
                    <div className="horizontal-scroll" style={{ display: 'flex', gap: '12px', overflowX: 'auto', padding: '0 16px 4px', scrollbarWidth: 'none' }}>
                        {topPicks.map(item => (
                            <Link to={`/movies/${item.id}`} key={item.id} className="card">
                                <img src={item.image} alt={item.title} className="card-image" style={{ height: '160px' }} />
                                <div className="card-content">
                                    <div className="card-header">
                                        <h3>{item.title}</h3>
                                        <div className="card-rating">
                                            <Star size={11} fill="#6366F1" stroke="none" />
                                            <span style={{ fontWeight: 700, fontSize: '11px', color: '#6366F1' }}>{item.rating}</span>
                                            <span style={{ fontSize: '10px', color: 'var(--color-gray)' }}>({item.reviewsCount})</span>
                                        </div>
                                    </div>
                                    <p className="card-subtitle">{item.genre}</p>
                                    {item.language && <p className="card-subtitle">{item.language}</p>}
                                </div>
                            </Link>
                        ))}
                    </div>

                    {/* Friends Watched — shown in default view */}
                    {friendWatches.length > 0 && (
                        <>
                            <h2 className="section-title">Friends Watched</h2>
                            <div className="horizontal-scroll" style={{ display: 'flex', gap: '12px', overflowX: 'auto', padding: '0 16px 4px', scrollbarWidth: 'none' }}>
                                {friendWatches.map(item => (
                                    <Link to={`/movies/${item.id}`} key={item.id} className="card">
                                        <img src={item.image} alt={item.title} className="card-image" style={{ height: '160px' }} />
                                        <div className="card-content">
                                            <div className="card-header">
                                                <h3>{item.title}</h3>
                                                <div className="card-rating">
                                                    <Star size={11} fill="#6366F1" stroke="none" />
                                                    <span style={{ fontWeight: 700, fontSize: '11px', color: '#6366F1' }}>{item.rating}</span>
                                                    <span style={{ fontSize: '10px', color: 'var(--color-gray)' }}>({item.reviewsCount})</span>
                                                </div>
                                            </div>
                                            <p className="card-subtitle">{item.genre}</p>
                                            {item.language && <p className="card-subtitle">{item.language}</p>}
                                            <div className="friend-activity" style={{ marginTop: '6px' }}>
                                                <div style={{ display: 'flex', marginRight: '6px' }}>
                                                    {item.friendsActivity.slice(0, 3).map((f, i) => (
                                                        <img key={i} src={f.avatar} alt={f.name} className="friend-avatar" style={{ marginLeft: i > 0 ? '-6px' : 0, border: '2px solid white' }} />
                                                    ))}
                                                </div>
                                                <span className="friend-text">{item.friendsActivity[0].name}{item.friendsActivity.length > 1 ? ` +${item.friendsActivity.length - 1}` : ''} rated {item.friendsActivity[0].rating} <Star size={8} fill="#6366F1" stroke="none" style={{ display: 'inline' }} /></span>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </>
                    )}
                </>
            )}

            {/* Friends Watched — shown when filter is active */}
            {(selectedGenre || selectedLanguage) && friendWatches.length > 0 && (
                <>
                    <h2 className="section-title">Friends Watched</h2>
                    <div className="horizontal-scroll" style={{ display: 'flex', gap: '12px', overflowX: 'auto', padding: '0 16px 4px', scrollbarWidth: 'none' }}>
                        {friendWatches.map(item => (
                            <Link to={`/movies/${item.id}`} key={item.id} className="card">
                                <img src={item.image} alt={item.title} className="card-image" style={{ height: '160px' }} />
                                <div className="card-content">
                                    <div className="card-header">
                                        <h3>{item.title}</h3>
                                        <div className="card-rating">
                                            <Star size={11} fill="#6366F1" stroke="none" />
                                            <span style={{ fontWeight: 700, fontSize: '11px', color: '#6366F1' }}>{item.rating}</span>
                                            <span style={{ fontSize: '10px', color: 'var(--color-gray)' }}>({item.reviewsCount})</span>
                                        </div>
                                    </div>
                                    <p className="card-subtitle">{item.genre}</p>
                                    <div className="friend-activity" style={{ marginTop: '6px' }}>
                                        <div style={{ display: 'flex', marginRight: '6px' }}>
                                            {item.friendsActivity.slice(0, 3).map((f, i) => (
                                                <img key={i} src={f.avatar} alt={f.name} className="friend-avatar" style={{ marginLeft: i > 0 ? '-6px' : 0, border: '2px solid white' }} />
                                            ))}
                                        </div>
                                        <span className="friend-text">{item.friendsActivity[0].name}{item.friendsActivity.length > 1 ? ` +${item.friendsActivity.length - 1}` : ''} rated {item.friendsActivity[0].rating} <Star size={8} fill="#6366F1" stroke="none" style={{ display: 'inline' }} /></span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </>
            )}

            {/* Filtered / All Movies Grid */}
            <h2 className="section-title">
                {selectedGenre || selectedLanguage ? 'Matching Movies' : 'All Movies'}
            </h2>
            <div className="listing-grid" style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
                {filteredMovies.map((item) => (
                    <Link to={`/movies/${item.id}`} key={item.id} className="card" style={{ width: '100%' }}>
                        <img src={item.image} alt={item.title} className="card-image" style={{ height: '160px' }} />
                        <div className="card-content">
                            <div className="card-header">
                                <h3>{item.title}</h3>
                                <div className="card-rating">
                                    <Star size={11} fill="#6366F1" stroke="none" />
                                    <span style={{ fontWeight: 700, fontSize: '11px', color: '#6366F1' }}>{item.rating}</span>
                                    <span style={{ fontSize: '10px', color: 'var(--color-gray)' }}>({item.reviewsCount})</span>
                                </div>
                            </div>
                            <p className="card-subtitle">{item.genre}{item.language ? ` · ${item.language}` : ''}</p>
                        </div>
                    </Link>
                ))}
            </div>

        </div>
    );
};

export default Movies;
