import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { events, eventTypes } from '../data/mockData';
import { MapPin, Calendar, Star } from 'lucide-react';
import '../styles/Listing.css';
import '../styles/Movies.css'; // Reusing some horizontal list styles if needed, or inline

const Events = () => {
    const [selectedType, setSelectedType] = useState(null);

    // Filter Logic
    const filteredEvents = selectedType
        ? events.filter(e => e.type === selectedType)
        : events;

    const topPicks = events.filter(e => e.rating >= 4.7);
    const friendAttending = events.filter(e => e.friendsActivity && e.friendsActivity.length > 0);

    const toggleType = (id) => setSelectedType(selectedType === id ? null : id);

    return (
        <div className="listing-page">
            <div className="page-header">
                <h1>Live Events</h1>
            </div>

            {/* Event Types Filter (Horizontal Scroll) */}
            <h2 className="section-title">Browse by Category</h2>
            <div className="languages-container" style={{ marginBottom: '32px' }}> {/* Reusing pill container style */}
                {eventTypes.map(type => (
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
                                <Link to={`/events/${item.id}`} key={item.id} className="movie-card-portrait" style={{ minWidth: '200px', width: '200px' }}>
                                    <img src={item.image} alt={item.title} className="movie-poster" style={{ height: '140px' }} />
                                    <div className="movie-info">
                                        <div className="movie-title">{item.title}</div>
                                        <div className="rating" style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', fontSize: '12px', color: 'var(--color-dark-gray)' }}>
                                            <Star size={12} fill="#E23744" stroke="none" />
                                            <span style={{ fontWeight: 700 }}>{item.rating}</span>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>

                    <h2 className="section-title">Friends are Attending</h2>
                    <div className="movie-section">
                        <div className="movie-horizontal-list">
                            {friendAttending.map(item => (
                                <Link to={`/events/${item.id}`} key={item.id} className="movie-card-portrait" style={{ minWidth: '200px', width: '200px' }}>
                                    <img src={item.image} alt={item.title} className="movie-poster" style={{ height: '140px' }} />
                                    <div className="movie-info">
                                        <div className="movie-title">{item.title}</div>
                                        <div className="movie-friend-activity" style={{ marginTop: '8px' }}>
                                            <div style={{ display: 'flex', marginRight: '6px' }}>
                                                {item.friendsActivity.slice(0, 3).map((f, i) => (
                                                    <img key={i} src={f.avatar} alt={f.name} className="movie-friend-avatar" style={{ marginLeft: i > 0 ? '-8px' : 0, border: '2px solid white' }} />
                                                ))}
                                            </div>
                                            <span>{item.friendsActivity[0].name}{item.friendsActivity.length > 1 ? ` +${item.friendsActivity.length - 1}` : ''} is attending</span>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </>
            )}

            <h2 className="section-title">
                {selectedType ? 'Matching Events' : 'All Events'}
            </h2>
            <div className="listing-grid">
                {filteredEvents.map((item) => (
                    <Link to={`/events/${item.id}`} key={item.id} className="listing-card">
                        <div className="image-container">
                            <img src={item.image} alt={item.title} className="listing-image" />
                            <div className="offer-tag" style={{ background: 'var(--color-brand)', fontWeight: 700, fontSize: '11px' }}>
                                {item.date}
                            </div>
                        </div>
                        <div className="listing-content">
                            <div className="listing-header">
                                <h3>{item.title}</h3>
                                {item.rating && (
                                    <div className="rating-pill" style={{ position: 'static' }}>
                                        <Star size={12} fill="#E23744" stroke="none" />
                                        <span>{item.rating}</span>
                                    </div>
                                )}
                            </div>
                            <div className="event-meta-row">
                                <Calendar size={14} className="meta-icon" />
                                <span>{item.date} • {item.time}</span>
                            </div>
                            <div className="event-meta-row">
                                <MapPin size={14} className="meta-icon" />
                                <span>{item.venue}</span>
                            </div>

                            <div className="price-row">
                                <span className="price-label">Tickets from</span>
                                <span className="price-value">{item.price}</span>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Events;
