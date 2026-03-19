import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { restaurants, diningMoods, cuisines } from '../data/mockData';
import { Star, MapPin } from 'lucide-react';
import '../styles/Listing.css';
import '../styles/Dining.css';

const Dining = () => {
    const [selectedMood, setSelectedMood] = useState(() => sessionStorage.getItem('filter_dining_mood') || null);
    const [selectedCuisine, setSelectedCuisine] = useState(() => sessionStorage.getItem('filter_dining_cuisine') || null);

    // Filter logic
    const filteredRestaurants = restaurants.filter(r => {
        if (selectedMood && r.mood !== selectedMood) return false;
        if (selectedCuisine && !r.cuisines.includes(selectedCuisine)) return false;
        return true;
    });

    const topPicks = [...restaurants].sort((a, b) => b.rating - a.rating).slice(0, 10);
    const friendVisits = filteredRestaurants.filter(r => r.friendsActivity && r.friendsActivity.length > 0);

    const toggleMood = (id) => {
        const next = selectedMood === id ? null : id;
        setSelectedMood(next);
        if (next) sessionStorage.setItem('filter_dining_mood', next);
        else sessionStorage.removeItem('filter_dining_mood');
    };

    const toggleCuisine = (id) => {
        const next = selectedCuisine === id ? null : id;
        setSelectedCuisine(next);
        if (next) sessionStorage.setItem('filter_dining_cuisine', next);
        else sessionStorage.removeItem('filter_dining_cuisine');
    };

    return (
        <div className="listing-page dining-page">
            <div className="page-header">
                <h1>Dining</h1>
            </div>

            {/* Moods Section */}
            <h2 className="section-title">What's your mood?</h2>
            <div className="moods-container">
                {diningMoods.map(mood => (
                    <div
                        key={mood.id}
                        className={`mood-card ${selectedMood === mood.id ? 'active' : ''}`}
                        onClick={() => toggleMood(mood.id)}
                    >
                        <img src={mood.image} alt={mood.name} className="mood-image" />
                        <span className="mood-name">{mood.name}</span>
                    </div>
                ))}
            </div>

            {/* Cuisines Section */}
            <h2 className="section-title">Cuisines</h2>
            <div className="cuisines-container">
                {cuisines.map(cuisine => (
                    <div
                        key={cuisine.id}
                        className={`cuisine-chip ${selectedCuisine === cuisine.id ? 'active' : ''}`}
                        onClick={() => toggleCuisine(cuisine.id)}
                    >
                        {cuisine.name}
                    </div>
                ))}
            </div>

            {/* Default View (No filters) - Show Top Picks + Friends */}
            {!selectedMood && !selectedCuisine && (
                <>
                    <h2 className="section-title">Top Picks for You</h2>
                    <div className="horizontal-scroll" style={{ display: 'flex', gap: '12px', overflowX: 'auto', padding: '0 16px 4px', scrollbarWidth: 'none' }}>
                        {topPicks.map(item => (
                            <Link to={`/dining/${item.id}`} key={item.id} className="card">
                                <img src={item.image} alt={item.name} className="card-image" />
                                <div className="card-content">
                                    <div className="card-header">
                                        <h3>{item.name}</h3>
                                        <div className="card-rating">
                                            <Star size={11} fill="#6366F1" stroke="none" />
                                            <span style={{ fontWeight: 700, fontSize: '11px', color: '#6366F1' }}>{item.rating}</span>
                                            <span style={{ fontSize: '10px', color: 'var(--color-gray)' }}>({item.reviewsCount})</span>
                                        </div>
                                    </div>
                                    <p className="card-subtitle">{item.cuisine}</p>
                                    <p className="card-subtitle" style={{ fontWeight: 600, color: '#444' }}>{item.priceForTwo || item.price}</p>
                                    <div className="card-footer">
                                        <MapPin size={11} />
                                        <span>{item.location}</span>
                                        {item.distanceKm && <span style={{ marginLeft: 'auto', fontSize: '10px', color: '#888' }}>{item.distanceKm} km</span>}
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                    {/* Friends are Visiting — shown in default view */}
                    {friendVisits.length > 0 && (
                        <>
                            <h2 className="section-title">Friends are Visiting</h2>
                            <div className="horizontal-scroll" style={{ display: 'flex', gap: '12px', overflowX: 'auto', padding: '0 16px 4px', scrollbarWidth: 'none' }}>
                                {friendVisits.map(item => (
                                    <Link to={`/dining/${item.id}`} key={item.id} className="card">
                                        <img src={item.image} alt={item.name} className="card-image" />
                                        <div className="card-content">
                                            <div className="card-header">
                                                <h3>{item.name}</h3>
                                                <div className="card-rating">
                                                    <Star size={11} fill="#6366F1" stroke="none" />
                                                    <span style={{ fontWeight: 700, fontSize: '11px', color: '#6366F1' }}>{item.rating}</span>
                                                    <span style={{ fontSize: '10px', color: 'var(--color-gray)' }}>({item.reviewsCount})</span>
                                                </div>
                                            </div>
                                            <p className="card-subtitle">{item.cuisine}</p>
                                            <p className="card-subtitle" style={{ fontWeight: 600, color: '#444' }}>{item.priceForTwo || item.price}</p>
                                            <div className="card-footer">
                                                <MapPin size={11} />
                                                <span>{item.location}</span>
                                                {item.distanceKm && <span style={{ marginLeft: 'auto', fontSize: '10px', color: '#888' }}>{item.distanceKm} km</span>}
                                            </div>
                                            <div className="friend-activity" style={{ marginTop: '6px' }}>
                                                <div style={{ display: 'flex', marginRight: '6px' }}>
                                                    {item.friendsActivity.slice(0, 3).map((f, i) => (
                                                        <img key={i} src={f.avatar} alt={f.name} className="friend-avatar" style={{ marginLeft: i > 0 ? '-8px' : 0, border: '2px solid white' }} />
                                                    ))}
                                                </div>
                                                <span className="friend-text">
                                                    {item.friendsActivity[0].name}{item.friendsActivity.length > 1 ? ` +${item.friendsActivity.length - 1}` : ''} rated {item.friendsActivity[0].rating} <Star size={8} fill="#6366F1" stroke="none" style={{ display: 'inline' }} />
                                                </span>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </>
                    )}
                </>
            )}

            {/* Friends are Visiting — shown when filter is active (filtered results) */}
            {(selectedMood || selectedCuisine) && friendVisits.length > 0 && (
                <>
                    <h2 className="section-title">Friends are Visiting</h2>
                    <div className="horizontal-scroll" style={{ display: 'flex', gap: '12px', overflowX: 'auto', padding: '0 16px 4px', scrollbarWidth: 'none' }}>
                        {friendVisits.map(item => (
                            <Link to={`/dining/${item.id}`} key={item.id} className="card">
                                <img src={item.image} alt={item.name} className="card-image" />
                                <div className="card-content">
                                    <div className="card-header">
                                        <h3>{item.name}</h3>
                                        <div className="card-rating">
                                            <Star size={11} fill="#6366F1" stroke="none" />
                                            <span style={{ fontWeight: 700, fontSize: '11px', color: '#6366F1' }}>{item.rating}</span>
                                            <span style={{ fontSize: '10px', color: 'var(--color-gray)' }}>({item.reviewsCount})</span>
                                        </div>
                                    </div>
                                    <p className="card-subtitle">{item.cuisine}</p>
                                    <p className="card-subtitle" style={{ fontWeight: 600, color: '#444' }}>{item.priceForTwo || item.price}</p>
                                    <div className="card-footer">
                                        <MapPin size={11} />
                                        <span>{item.location}</span>
                                        {item.distanceKm && <span style={{ marginLeft: 'auto', fontSize: '10px', color: '#888' }}>{item.distanceKm} km</span>}
                                    </div>
                                    <div className="friend-activity" style={{ marginTop: '6px' }}>
                                        <div style={{ display: 'flex', marginRight: '6px' }}>
                                            {item.friendsActivity.slice(0, 3).map((f, i) => (
                                                <img key={i} src={f.avatar} alt={f.name} className="friend-avatar" style={{ marginLeft: i > 0 ? '-8px' : 0, border: '2px solid white' }} />
                                            ))}
                                        </div>
                                        <span className="friend-text">
                                            {item.friendsActivity[0].name}{item.friendsActivity.length > 1 ? ` +${item.friendsActivity.length - 1}` : ''} rated {item.friendsActivity[0].rating} <Star size={8} fill="#6366F1" stroke="none" style={{ display: 'inline' }} />
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </>
            )}

            {/* All Restaurants / Filtered Results */}
            <h2 className="section-title">
                {selectedMood || selectedCuisine ? 'Matching Restaurants' : 'All Restaurants'}
            </h2>

            <div className="listing-grid">
                {filteredRestaurants.length > 0 ? (
                    filteredRestaurants.map((item) => (
                        <Link to={`/dining/${item.id}`} key={item.id} className="listing-card">
                            <div className="image-container">
                                <img src={item.image} alt={item.name} className="listing-image" />
                                {item.offers && <div className="offer-tag">{item.offers}</div>}
                            </div>
                            <div className="listing-content">
                                <div className="listing-header">
                                    <h3>{item.name}</h3>
                                    <div style={{ display: 'inline-flex', marginTop: '4px', alignItems: 'center', gap: '3px' }}>
                                        <Star size={10} fill="#6366F1" stroke="none" />
                                        <span style={{ fontWeight: 700, fontSize: '12px', color: '#6366F1' }}>{item.rating}</span>
                                        <span style={{ fontSize: '10px', color: 'var(--color-gray)' }}>({item.reviewsCount})</span>
                                    </div>
                                </div>
                                <p className="listing-subtitle" style={{ fontWeight: 600, color: '#333' }}>{item.cuisine} • {item.priceForTwo || item.price}</p>
                                <div className="listing-footer">
                                    <div className="location">
                                        <MapPin size={11} />
                                        <span className="location-text">{item.location}</span>
                                    </div>
                                    {item.distanceKm && (
                                        <div className="distance" style={{ fontSize: 11, color: '#888', display: 'flex', alignItems: 'center', gap: 3 }}>
                                            <span>{item.distanceKm} km</span>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </Link>
                    ))
                ) : (
                    <div style={{ padding: '20px', textAlign: 'center', color: '#888' }}>
                        No restaurants match your selection.
                    </div>
                )}
            </div>
        </div>
    );
};

export default Dining;
