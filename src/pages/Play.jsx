import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { playFacilities, sportServices } from '../data/mockData';
import { MapPin, Trophy, Star } from 'lucide-react';
import '../styles/Listing.css';
import '../styles/Movies.css';

const Play = () => {
    const [selectedType, setSelectedType] = useState(null);

    // Filter Logic
    const filteredFacilities = selectedType
        ? playFacilities.filter(p => p.type === selectedType)
        : playFacilities;

    const topPicks = playFacilities.filter(p => p.rating >= 4.7);
    const friendVisited = playFacilities.filter(p => p.friendsActivity && p.friendsActivity.length > 0);

    const toggleType = (id) => setSelectedType(selectedType === id ? null : id);

    return (
        <div className="listing-page">
            <div className="page-header">
                <h1>Play & Sports</h1>
            </div>

            {/* Play Types Filter */}
            <h2 className="section-title">Choose your Sport</h2>
            <div className="languages-container" style={{ marginBottom: '32px' }}>
                {sportServices.map(type => (
                    <div
                        key={type.id}
                        className={`lang-chip ${selectedType === type.id ? 'active' : ''}`}
                        onClick={() => toggleType(type.id)}
                    >
                        {type.name}
                    </div>
                ))}
            </div>

            {/* Default View Sections */}
            {!selectedType && (
                <>
                    <h2 className="section-title">Top Grounds Nearby</h2>
                    <div className="movie-section">
                        <div className="movie-horizontal-list">
                            {topPicks.map(item => (
                                <Link to={`/play/${item.id}`} key={item.id} className="movie-card-portrait" style={{ minWidth: '200px', width: '200px' }}>
                                    <img src={item.image} alt={item.title} className="movie-poster" style={{ height: '140px' }} />
                                    <div className="movie-info">
                                        <div className="movie-title">{item.title}</div>
                                        <div className="rating" style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', fontSize: '12px', color: 'var(--color-dark-gray)' }}>
                                            <Star size={12} fill="#E23744" stroke="none" />
                                            <span style={{ fontWeight: 700 }}>{item.rating}</span>
                                            <span style={{ fontSize: '10px', marginLeft: '2px' }}>({item.reviewsCount})</span>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>

                    <h2 className="section-title">Friends Visited</h2>
                    <div className="movie-section">
                        <div className="movie-horizontal-list">
                            {friendVisited.map(item => (
                                <Link to={`/play/${item.id}`} key={item.id} className="movie-card-portrait" style={{ minWidth: '200px', width: '200px' }}>
                                    <img src={item.image} alt={item.title} className="movie-poster" style={{ height: '140px' }} />
                                    <div className="movie-info">
                                        <div className="movie-title">{item.title}</div>
                                        <div className="movie-friend-activity" style={{ marginTop: '8px' }}>
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

            <h2 className="section-title">
                {selectedType ? 'Matching Facilities' : 'All Facilities'}
            </h2>
            <div className="listing-grid">
                {filteredFacilities.map((item) => (
                    <Link to={`/play/${item.id}`} key={item.id} className="listing-card">
                        <div className="image-container">
                            <img src={item.image} alt={item.title} className="listing-image" />
                            <div className="offer-tag" style={{ background: '#000' }}>{item.category}</div>
                        </div>
                        <div className="listing-content">
                            <div className="listing-header">
                                <h3>{item.title}</h3>
                                {item.rating && (
                                    <div className="rating-pill" style={{ position: 'static' }}>
                                        <Star size={12} fill="#E23744" stroke="none" />
                                        <span>{item.rating}</span>
                                        <span style={{ fontSize: '10px', color: 'var(--color-gray)', marginLeft: '4px' }}>({item.reviewsCount})</span>
                                    </div>
                                )}
                            </div>
                            <div className="event-meta-row">
                                <Trophy size={14} className="meta-icon" />
                                <span>{item.category}</span>
                            </div>
                            <div className="event-meta-row">
                                <MapPin size={14} className="meta-icon" />
                                <span>{item.location}</span>
                            </div>

                            <div className="price-row">
                                <span className="price-label">Starts at</span>
                                <span className="price-value">{item.price}</span>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Play;
