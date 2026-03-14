import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { stores, storeTypes } from '../data/mockData';
import { MapPin, Tag, Star } from 'lucide-react';
import '../styles/Listing.css';
import '../styles/Movies.css';

const Stores = () => {
    const [selectedType, setSelectedType] = useState(null);

    // Filter Logic
    const filteredStores = selectedType
        ? stores.filter(s => s.type === selectedType)
        : stores;

    const topPicks = stores.filter(s => s.rating >= 4.7);
    const friendVisited = stores.filter(s => s.friendsActivity && s.friendsActivity.length > 0);

    const toggleType = (id) => setSelectedType(selectedType === id ? null : id);

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

            {/* Default View Sections */}
            {!selectedType && (
                <>
                    <h2 className="section-title">Top Picks</h2>
                    <div className="movie-section">
                        <div className="movie-horizontal-list">
                            {topPicks.map(item => (
                                <Link to={`/stores/${item.id}`} key={item.id} className="movie-card-portrait" style={{ minWidth: '200px', width: '200px' }}>
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
                                <Link to={`/stores/${item.id}`} key={item.id} className="movie-card-portrait" style={{ minWidth: '200px', width: '200px' }}>
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
                                    <div className="rating-pill" style={{ position: 'static' }}>
                                        <Star size={12} fill="#E23744" stroke="none" />
                                        <span>{item.rating}</span>
                                        <span style={{ fontSize: '10px', color: 'var(--color-gray)', marginLeft: '4px' }}>({item.reviewsCount})</span>
                                    </div>
                                )}
                            </div>
                            <div className="event-meta-row">
                                <Tag size={14} className="meta-icon" />
                                <span>{item.category}</span>
                            </div>
                            <div className="event-meta-row">
                                <MapPin size={14} className="meta-icon" />
                                <span>{item.location}</span>
                            </div>

                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Stores;
