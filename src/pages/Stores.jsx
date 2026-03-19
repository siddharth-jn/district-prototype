import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { stores, storeTypes } from '../data/mockData';
import { MapPin, Tag, Star } from 'lucide-react';
import '../styles/Listing.css';
import '../styles/Movies.css';

const Stores = () => {
    const [selectedType, setSelectedType] = useState(() => sessionStorage.getItem('filter_stores') || null);

    // Filter Logic
    const filteredStores = selectedType
        ? stores.filter(s => s.type === selectedType)
        : stores;

    const topPicks = [...stores].sort((a, b) => b.rating - a.rating).slice(0, 10);
    const friendVisited = filteredStores.filter(s => s.friendsActivity && s.friendsActivity.length > 0);

    const toggleType = (id) => {
        const next = selectedType === id ? null : id;
        setSelectedType(next);
        if (next) sessionStorage.setItem('filter_stores', next);
        else sessionStorage.removeItem('filter_stores');
    };

    return (
        <div className="listing-page">
            <div className="page-header">
                <h1>Stores & Offers</h1>
            </div>

            {/* Store Types Filter */}
            <h2 className="section-title">Browse by Category</h2>
            <div className="languages-container" style={{ marginBottom: '32px' }}>
                {storeTypes.map(type => (
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
                    <h2 className="section-title">Top Picks</h2>
                    <div className="horizontal-scroll" style={{ display: 'flex', gap: '12px', overflowX: 'auto', padding: '0 16px 4px', scrollbarWidth: 'none' }}>
                        {topPicks.map(item => (
                            <Link to={`/stores/${item.id}`} key={item.id} className="card">
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
                                    <p className="card-subtitle">{item.category}</p>
                                    <p className="card-subtitle" style={{ fontWeight: 600, color: 'var(--color-brand)' }}>{item.offer}</p>
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
                                    <Link to={`/stores/${item.id}`} key={item.id} className="card">
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
                                            <p className="card-subtitle">{item.category}</p>
                                            <p className="card-subtitle" style={{ fontWeight: 600, color: 'var(--color-brand)' }}>{item.offer}</p>
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
                            <Link to={`/stores/${item.id}`} key={item.id} className="card">
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
                                    <p className="card-subtitle">{item.category}</p>
                                    <p className="card-subtitle" style={{ fontWeight: 600, color: 'var(--color-brand)' }}>{item.offer}</p>
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
                {selectedType ? 'Matching Stores' : 'All Deals'}
            </h2>
            <div className="listing-grid">
                {filteredStores.map((item) => (
                    <Link to={`/stores/${item.id}`} key={item.id} className="listing-card">
                        <div className="image-container">
                            <img src={item.image} alt={item.title} className="listing-image" />
                            <div className="offer-tag">{item.offer}</div>
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
                                <Tag size={14} className="meta-icon" />
                                <span>{item.category}</span>
                            </div>
                            {item.offer && <p className="listing-subtitle" style={{ margin: '4px 0 0', fontSize: 12, color: 'var(--color-brand)', fontWeight: 600 }}>{item.offer}</p>}
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

export default Stores;
