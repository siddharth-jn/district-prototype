import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { events, eventTypes } from '../data/mockData';
import { MapPin, Calendar, Star } from 'lucide-react';
import '../styles/Listing.css';
import '../styles/Movies.css';

const Events = () => {
    const [selectedType, setSelectedType] = useState(() => sessionStorage.getItem('filter_events') || null);

    // Filter Logic
    const filteredEvents = selectedType
        ? events.filter(e => e.type === selectedType)
        : events;

    const topPicks = [...events].sort((a, b) => (b.rating || 0) - (a.rating || 0)).slice(0, 10);
    const friendAttending = filteredEvents.filter(e => e.friendsActivity && e.friendsActivity.length > 0);

    const toggleType = (id) => {
        const next = selectedType === id ? null : id;
        setSelectedType(next);
        if (next) sessionStorage.setItem('filter_events', next);
        else sessionStorage.removeItem('filter_events');
    };

    return (
        <div className="listing-page">
            <div className="page-header">
                <h1>Live Events</h1>
            </div>

            {/* Event Types Filter (Horizontal Scroll) */}
            <h2 className="section-title">Browse by Category</h2>
            <div className="languages-container" style={{ marginBottom: '32px' }}>
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

            {/* Default View Sections (no filter active) */}
            {!selectedType && (
                <>
                    <h2 className="section-title">Top Picks</h2>
                    <div className="horizontal-scroll" style={{ display: 'flex', gap: '12px', overflowX: 'auto', padding: '0 16px 4px', scrollbarWidth: 'none' }}>
                        {topPicks.map(item => (
                            <Link to={`/events/${item.id}`} key={item.id} className="card">
                                <img src={item.image} alt={item.title} className="card-image" />
                                <div className="card-content">
                                    <div className="card-header">
                                        <h3>{item.title}</h3>
                                        {item.rating && (
                                            <div className="card-rating">
                                                <Star size={11} fill="#6366F1" stroke="none" />
                                                <span style={{ fontWeight: 700, fontSize: '11px', color: '#6366F1' }}>{item.rating}</span>
                                                <span style={{ fontSize: '10px', color: 'var(--color-gray)' }}>({item.reviewsCount})</span>
                                            </div>
                                        )}
                                    </div>
                                    <p className="card-subtitle">{item.category} • {item.price}</p>
                                    <p className="card-subtitle" style={{ display: 'flex', alignItems: 'center', gap: '3px' }}>
                                        <Calendar size={10} />{item.date}
                                    </p>
                                    <div className="card-footer">
                                        <MapPin size={11} />
                                        <span>{item.venue}</span>
                                        {item.distanceKm && <span style={{ marginLeft: 'auto', fontSize: '10px', color: '#888' }}>{item.distanceKm} km</span>}
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                    {/* Friends are Attending — shown in default view */}
                    {friendAttending.length > 0 && (
                        <>
                            <h2 className="section-title">Friends are Attending</h2>
                            <div className="horizontal-scroll" style={{ display: 'flex', gap: '12px', overflowX: 'auto', padding: '0 16px 4px', scrollbarWidth: 'none' }}>
                                {friendAttending.map(item => (
                                    <Link to={`/events/${item.id}`} key={item.id} className="card">
                                        <img src={item.image} alt={item.title} className="card-image" />
                                        <div className="card-content">
                                            <div className="card-header">
                                                <h3>{item.title}</h3>
                                                {item.rating && (
                                                    <div className="card-rating">
                                                        <Star size={11} fill="#6366F1" stroke="none" />
                                                        <span style={{ fontWeight: 700, fontSize: '11px', color: '#6366F1' }}>{item.rating}</span>
                                                        <span style={{ fontSize: '10px', color: 'var(--color-gray)' }}>({item.reviewsCount})</span>
                                                    </div>
                                                )}
                                            </div>
                                            <p className="card-subtitle">{item.category} • {item.price}</p>
                                            <p className="card-subtitle" style={{ display: 'flex', alignItems: 'center', gap: '3px' }}>
                                                <Calendar size={10} />{item.date}
                                            </p>
                                            <div className="card-footer">
                                                <MapPin size={11} />
                                                <span>{item.venue}</span>
                                                {item.distanceKm && <span style={{ marginLeft: 'auto', fontSize: '10px', color: '#888' }}>{item.distanceKm} km</span>}
                                            </div>
                                            <div className="friend-activity" style={{ marginTop: '6px' }}>
                                                <div style={{ display: 'flex', marginRight: '6px' }}>
                                                    {item.friendsActivity.slice(0, 3).map((f, i) => (
                                                        <img key={i} src={f.avatar} alt={f.name} className="friend-avatar" style={{ marginLeft: i > 0 ? '-6px' : 0, border: '2px solid white' }} />
                                                    ))}
                                                </div>
                                                <span className="friend-text">{item.friendsActivity[0].name}{item.friendsActivity.length > 1 ? ` +${item.friendsActivity.length - 1}` : ''} is attending</span>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </>
                    )}
                </>
            )}

            {/* Friends are Attending — shown when filter is active (filtered results) */}
            {selectedType && friendAttending.length > 0 && (
                <>
                    <h2 className="section-title">Friends are Attending</h2>
                    <div className="horizontal-scroll" style={{ display: 'flex', gap: '12px', overflowX: 'auto', padding: '0 16px 4px', scrollbarWidth: 'none' }}>
                        {friendAttending.map(item => (
                            <Link to={`/events/${item.id}`} key={item.id} className="card">
                                <img src={item.image} alt={item.title} className="card-image" />
                                <div className="card-content">
                                    <div className="card-header">
                                        <h3>{item.title}</h3>
                                        {item.rating && (
                                            <div className="card-rating">
                                                <Star size={11} fill="#6366F1" stroke="none" />
                                                <span style={{ fontWeight: 700, fontSize: '11px', color: '#6366F1' }}>{item.rating}</span>
                                                <span style={{ fontSize: '10px', color: 'var(--color-gray)' }}>({item.reviewsCount})</span>
                                            </div>
                                        )}
                                    </div>
                                    <p className="card-subtitle">{item.category} • {item.price}</p>
                                    <p className="card-subtitle" style={{ display: 'flex', alignItems: 'center', gap: '3px' }}>
                                        <Calendar size={10} />{item.date}
                                    </p>
                                    <div className="card-footer">
                                        <MapPin size={11} />
                                        <span>{item.venue}</span>
                                        {item.distanceKm && <span style={{ marginLeft: 'auto', fontSize: '10px', color: '#888' }}>{item.distanceKm} km</span>}
                                    </div>
                                    <div className="friend-activity" style={{ marginTop: '6px' }}>
                                        <div style={{ display: 'flex', marginRight: '6px' }}>
                                            {item.friendsActivity.slice(0, 3).map((f, i) => (
                                                <img key={i} src={f.avatar} alt={f.name} className="friend-avatar" style={{ marginLeft: i > 0 ? '-6px' : 0, border: '2px solid white' }} />
                                            ))}
                                        </div>
                                        <span className="friend-text">{item.friendsActivity[0].name}{item.friendsActivity.length > 1 ? ` +${item.friendsActivity.length - 1}` : ''} is attending</span>
                                    </div>
                                </div>
                            </Link>
                        ))}
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
                            <div className="offer-tag">
                                {item.date}
                            </div>
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
                                <Calendar size={14} className="meta-icon" />
                                <span>{item.date} • {item.time}</span>
                            </div>
                            <div className="price-row">
                                <span className="price-label">Tickets from</span>
                                <span className="price-value">{item.price}</span>
                            </div>
                            <div className="listing-footer">
                                <div className="location">
                                    <MapPin size={11} />
                                    <span className="location-text">{item.venue}</span>
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

export default Events;
