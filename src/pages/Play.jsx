import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { playFacilities, sportServices } from '../data/mockData';
import { MapPin, Trophy, Star } from 'lucide-react';
import '../styles/Listing.css';
import '../styles/Movies.css';

const Play = () => {
    const [selectedType, setSelectedType] = useState(() => sessionStorage.getItem('filter_play') || null);

    // Filter Logic
    const filteredFacilities = selectedType
        ? playFacilities.filter(p => p.type === selectedType)
        : playFacilities;

    const topPicks = [...playFacilities].sort((a, b) => b.rating - a.rating).slice(0, 10);
    const friendVisited = filteredFacilities.filter(p => p.friendsActivity && p.friendsActivity.length > 0);

    const toggleType = (id) => {
        const next = selectedType === id ? null : id;
        setSelectedType(next);
        if (next) sessionStorage.setItem('filter_play', next);
        else sessionStorage.removeItem('filter_play');
    };

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

            {/* Default View Sections (no filter active) */}
            {!selectedType && (
                <>
                    <h2 className="section-title">Top Grounds Nearby</h2>
                    <div className="horizontal-scroll" style={{ display: 'flex', gap: '12px', overflowX: 'auto', padding: '0 16px 4px', scrollbarWidth: 'none' }}>
                        {topPicks.map(item => (
                            <Link to={`/play/${item.id}`} key={item.id} className="card">
                                <img src={item.image} alt={item.title} className="card-image" />
                                <div className="card-content">
                                    <div className="card-header">
                                        <h3>{item.title}</h3>
                                        <div className="card-rating">
                                            <Star size={11} fill="#6366F1" stroke="none" />
                                            <span style={{ fontWeight: 700, fontSize: '11px', color: '#6366F1' }}>{item.rating}</span>
                                            <span style={{ fontSize: '10px', color: 'var(--color-gray)' }}>({item.reviewsCount})</span>
                                        </div>
                                    </div>
                                    <p className="card-subtitle">{item.category} • {item.price}</p>
                                    <div className="card-footer">
                                        <MapPin size={11} />
                                        <span>{item.location}</span>
                                        {item.distanceKm && <span style={{ marginLeft: 'auto', fontSize: '10px', color: '#888' }}>{item.distanceKm} km</span>}
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                    {/* Friends Visited — shown in default view */}
                    {friendVisited.length > 0 && (
                        <>
                            <h2 className="section-title">Friends Visited</h2>
                            <div className="horizontal-scroll" style={{ display: 'flex', gap: '12px', overflowX: 'auto', padding: '0 16px 4px', scrollbarWidth: 'none' }}>
                                {friendVisited.map(item => (
                                    <Link to={`/play/${item.id}`} key={item.id} className="card">
                                        <img src={item.image} alt={item.title} className="card-image" />
                                        <div className="card-content">
                                            <div className="card-header">
                                                <h3>{item.title}</h3>
                                                <div className="card-rating">
                                                    <Star size={11} fill="#6366F1" stroke="none" />
                                                    <span style={{ fontWeight: 700, fontSize: '11px', color: '#6366F1' }}>{item.rating}</span>
                                                    <span style={{ fontSize: '10px', color: 'var(--color-gray)' }}>({item.reviewsCount})</span>
                                                </div>
                                            </div>
                                            <p className="card-subtitle">{item.category} • {item.price}</p>
                                            <div className="card-footer">
                                                <MapPin size={11} />
                                                <span>{item.location}</span>
                                                {item.distanceKm && <span style={{ marginLeft: 'auto', fontSize: '10px', color: '#888' }}>{item.distanceKm} km</span>}
                                            </div>
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

            {/* Friends Visited — shown when filter is active (filtered results) */}
            {selectedType && friendVisited.length > 0 && (
                <>
                    <h2 className="section-title">Friends Visited</h2>
                    <div className="horizontal-scroll" style={{ display: 'flex', gap: '12px', overflowX: 'auto', padding: '0 16px 4px', scrollbarWidth: 'none' }}>
                        {friendVisited.map(item => (
                            <Link to={`/play/${item.id}`} key={item.id} className="card">
                                <img src={item.image} alt={item.title} className="card-image" />
                                <div className="card-content">
                                    <div className="card-header">
                                        <h3>{item.title}</h3>
                                        <div className="card-rating">
                                            <Star size={11} fill="#6366F1" stroke="none" />
                                            <span style={{ fontWeight: 700, fontSize: '11px', color: '#6366F1' }}>{item.rating}</span>
                                            <span style={{ fontSize: '10px', color: 'var(--color-gray)' }}>({item.reviewsCount})</span>
                                        </div>
                                    </div>
                                    <p className="card-subtitle">{item.category} • {item.price}</p>
                                    <div className="card-footer">
                                        <MapPin size={11} />
                                        <span>{item.location}</span>
                                        {item.distanceKm && <span style={{ marginLeft: 'auto', fontSize: '10px', color: '#888' }}>{item.distanceKm} km</span>}
                                    </div>
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
                                    <div style={{ display: 'inline-flex', marginTop: '4px', alignItems: 'center', gap: '3px' }}>
                                        <Star size={10} fill="#6366F1" stroke="none" />
                                        <span style={{ fontWeight: 700, fontSize: '12px', color: '#6366F1' }}>{item.rating}</span>
                                        <span style={{ fontSize: '10px', color: 'var(--color-gray)' }}>({item.reviewsCount})</span>
                                    </div>
                                )}
                            </div>
                            <div className="event-meta-row">
                                <Trophy size={14} className="meta-icon" />
                                <span>{item.category}</span>
                            </div>
                            <div className="price-row">
                                <span className="price-label">Starts at</span>
                                <span className="price-value">{item.price}</span>
                            </div>
                            <div className="listing-footer">
                                <div className="location">
                                    <MapPin size={11} />
                                    <span className="location-text">{item.location}</span>
                                </div>
                                {item.distanceKm && (
                                    <div className="distance" style={{ fontSize: 11, color: '#888' }}>
                                        {item.distanceKm} km away
                                    </div>
                                )}
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Play;
