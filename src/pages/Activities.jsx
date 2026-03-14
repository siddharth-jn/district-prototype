import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { activities, activityCategories } from '../data/mockData';
import { MapPin, Compass, Star } from 'lucide-react';
import '../styles/Listing.css';
import '../styles/Movies.css';

const Activities = () => {
    const [selectedType, setSelectedType] = useState(null);

    // Filter Logic
    const filteredActivities = selectedType
        ? activities.filter(a => a.type === selectedType)
        : activities;

    const topPicks = activities.filter(a => a.rating >= 4.7);
    const friendVisited = activities.filter(a => a.friendsActivity && a.friendsActivity.length > 0);

    const toggleType = (id) => setSelectedType(selectedType === id ? null : id);

    return (
        <div className="listing-page">
            <div className="page-header">
                <h1>Activities</h1>
            </div>

            {/* Activities Types Filter */}
            <h2 className="section-title">Browse by Category</h2>
            <div className="languages-container" style={{ marginBottom: '32px' }}>
                {activityCategories.map(type => (
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
                    <h2 className="section-title">Top Facilities</h2>
                    <div className="movie-section">
                        <div className="movie-horizontal-list">
                            {topPicks.map(item => (
                                <Link to={`/activities/${item.id}`} key={item.id} className="movie-card-portrait" style={{ minWidth: '200px', width: '200px' }}>
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
                                <Link to={`/activities/${item.id}`} key={item.id} className="movie-card-portrait" style={{ minWidth: '200px', width: '200px' }}>
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
                {selectedType ? 'Matching Activities' : 'All Activities'}
            </h2>
            <div className="listing-grid">
                {filteredActivities.map((item) => (
                    <Link to={`/activities/${item.id}`} key={item.id} className="listing-card">
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
                                <Compass size={14} className="meta-icon" />
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

export default Activities;
