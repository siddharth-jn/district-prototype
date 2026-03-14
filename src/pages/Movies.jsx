import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { movies, movieGenres, movieLanguages } from '../data/mockData';
import { Star, Smile, Ghost, Heart, Zap, Eye, Cpu } from 'lucide-react';
import '../styles/Listing.css';
import '../styles/Movies.css';

const Movies = () => {
    const [selectedGenre, setSelectedGenre] = useState(null);
    const [selectedLanguage, setSelectedLanguage] = useState(null);

    // Filter Logic
    const filteredMovies = movies.filter(m => {
        if (selectedGenre && !m.genres.includes(selectedGenre)) return false;
        if (selectedLanguage && m.language !== selectedLanguage.name) return false;
        return true;
    });

    const newReleases = movies.filter(m => m.newRelease);
    const topPicks = movies.filter(m => m.rating >= 4.7);
    const friendWatches = movies.filter(m => m.friendsActivity && m.friendsActivity.length > 0);

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

    const toggleGenre = (id) => setSelectedGenre(selectedGenre === id ? null : id);
    const toggleLanguage = (lang) => setSelectedLanguage(selectedLanguage === lang ? null : lang);

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

            {/* Default View Sections */}
            {!selectedGenre && !selectedLanguage && (
                <>
                    <h2 className="section-title">New Releases</h2>
                    <div className="movie-section">
                        <div className="movie-horizontal-list">
                            {newReleases.map(item => (
                                <Link to={`/movies/${item.id}`} key={item.id} className="movie-card-portrait">
                                    <img src={item.image} alt={item.title} className="movie-poster" />
                                    <div className="movie-info">
                                        <div className="movie-title">{item.title}</div>
                                        <div className="movie-genre">{item.genre}</div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>

                    <h2 className="section-title">Top Rated</h2>
                    <div className="movie-section">
                        <div className="movie-horizontal-list">
                            {topPicks.map(item => (
                                <Link to={`/movies/${item.id}`} key={item.id} className="movie-card-portrait">
                                    <img src={item.image} alt={item.title} className="movie-poster" />
                                    <div className="movie-info">
                                        <div className="movie-title">{item.title}</div>
                                        <div className="rating" style={{ display: 'inline-flex' }}>
                                            <Star size={12} fill="#E23744" stroke="none" />
                                            <span style={{ marginLeft: 4, fontWeight: 700 }}>{item.rating}</span>
                                            <span style={{ fontSize: '10px', marginLeft: 4, color: 'var(--color-dark-gray)' }}>({item.reviewsCount})</span>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>

                    <h2 className="section-title">Friends are Watching</h2>
                    <div className="movie-section">
                        <div className="movie-horizontal-list">
                            {friendWatches.map(item => (
                                <Link to={`/movies/${item.id}`} key={item.id} className="movie-card-portrait">
                                    <img src={item.image} alt={item.title} className="movie-poster" />
                                    <div className="movie-info">
                                        <div className="movie-title">{item.title}</div>
                                        <div className="movie-friend-activity">
                                            <div style={{ display: 'flex', marginRight: '6px' }}>
                                                {item.friendsActivity.slice(0, 3).map((f, i) => (
                                                    <img key={i} src={f.avatar} alt={f.name} className="movie-friend-avatar" style={{ marginLeft: i > 0 ? '-8px' : 0, border: '2px solid white' }} />
                                                ))}
                                            </div>
                                            <span>{item.friendsActivity[0].name}{item.friendsActivity.length > 1 ? ` +${item.friendsActivity.length - 1}` : ''} rated {item.friendsActivity[0].rating}</span>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </>
            )}

            {/* Filtered / All Movies Grid */}
            <h2 className="section-title">
                {selectedGenre || selectedLanguage ? 'Matching Movies' : 'All Movies'}
            </h2>
            <div className="listing-grid" style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
                {filteredMovies.map((item) => (
                    <Link to={`/movies/${item.id}`} key={item.id} className="movie-card-portrait" style={{ width: '100%' }}>
                        <img src={item.image} alt={item.title} className="movie-poster" />
                        <div className="movie-info">
                            <div className="movie-title">{item.title}</div>
                            <div className="movie-genre">{item.genre} • {item.language}</div>
                            {item.rating && (
                                <div className="rating" style={{ display: 'inline-flex', marginTop: '4px', alignItems: 'center' }}>
                                    <Star size={10} fill="#E23744" stroke="none" />
                                    <span style={{ marginLeft: 4, fontWeight: 700, fontSize: '12px' }}>{item.rating}</span>
                                    <span style={{ fontSize: '10px', marginLeft: 4, color: 'var(--color-gray)' }}>({item.reviewsCount})</span>
                                </div>
                            )}
                        </div>
                    </Link>
                ))}
            </div>

        </div>
    );
};

export default Movies;
