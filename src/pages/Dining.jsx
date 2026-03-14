import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { restaurants, diningMoods, cuisines } from '../data/mockData';
import { Star, MapPin } from 'lucide-react';
import '../styles/Listing.css';
import '../styles/Dining.css';

const Dining = () => {
    const [selectedMood, setSelectedMood] = useState(null);
    const [selectedCuisine, setSelectedCuisine] = useState(null);

    // Filter logic
    const filteredRestaurants = restaurants.filter(r => {
        if (selectedMood && r.mood !== selectedMood) return false;
        if (selectedCuisine && !r.cuisines.includes(selectedCuisine)) return false;
        return true;
    });

    const topPicks = restaurants.filter(r => r.rating >= 4.8);
    const friendVisits = restaurants.filter(r => r.friendsActivity && r.friendsActivity.length > 0);

    const toggleMood = (id) => {
        setSelectedMood(selectedMood === id ? null : id);
        setSelectedCuisine(null); // Reset cuisine when changing mood for better flow? Or keep combined? Let's keep combined but maybe reset to avoid zero results often.
        // Actually user said "Selecting each mood should show...". Let's allow combination but maybe it's safer to clear the other to avoid empty states if data is sparse.
        // For now, I'll allow independent selection.
    };

    const toggleCuisine = (id) => setSelectedCuisine(selectedCuisine === id ? null : id);

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

            {/* Default View (No filters) - Show Top Picks & Friends */}
            {!selectedMood && !selectedCuisine && (
                <>
                    <h2 className="section-title">Top Picks for You</h2>
                    <div className="horizontal-list">
                        {topPicks.map(item => (
                            <Link to={`/dining/${item.id}`} key={item.id} className="mini-card">
                                <img src={item.image} alt={item.name} className="mini-card-image" />
                                <div className="mini-card-content">
                                    <div className="mini-card-title">{item.name}</div>
                                    <div className="rating" style={{ display: 'inline-flex', marginBottom: '4px' }}>
                                        <span className="rating-value">{item.rating}</span>
                                        <Star size={8} fill="white" />
                                        <span style={{ fontSize: '8px', marginLeft: '2px', opacity: 0.8 }}>({item.reviewsCount})</span>
                                    </div>
                                    <p className="mini-card-subtitle">{item.cuisine} • {item.price}</p>
                                </div>
                            </Link>
                        ))}
                    </div>

                    <h2 className="section-title">Friends are Visiting</h2>
                    <div className="horizontal-list">
                        {friendVisits.map(item => (
                            <Link to={`/dining/${item.id}`} key={item.id} className="mini-card">
                                <img src={item.image} alt={item.name} className="mini-card-image" />
                                <div className="mini-card-content">
                                    <div className="mini-card-title">{item.name}</div>
                                    <p className="mini-card-subtitle">{item.location}</p>
                                    <div className="friend-activity">
                                        <div style={{ display: 'flex', marginRight: '6px' }}>
                                            {item.friendsActivity.slice(0, 3).map((f, i) => (
                                                <img key={i} src={f.avatar} alt={f.name} className="friend-avatar" style={{ marginLeft: i > 0 ? '-8px' : 0, border: '2px solid white' }} />
                                            ))}
                                        </div>
                                        <span className="friend-text">
                                            {item.friendsActivity[0].name}{item.friendsActivity.length > 1 ? ` +${item.friendsActivity.length - 1}` : ''} rated {item.friendsActivity[0].rating} <Star size={8} fill="black" style={{ display: 'inline' }} />
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
                                    <div className="rating">
                                        <span className="rating-value">{item.rating}</span>
                                        <Star size={10} fill="white" className="star-icon" />
                                        <span style={{ fontSize: '10px', marginLeft: '4px', opacity: 0.8 }}>({item.reviewsCount})</span>
                                    </div>
                                </div>
                                <p className="listing-subtitle">{item.cuisine} • {item.price}</p>
                                <div className="listing-footer">
                                    <div className="location">
                                        <span className="location-text">{item.location}</span>
                                    </div>
                                    <div className="distance">
                                        <MapPin size={12} />
                                        <span>{item.distance}</span>
                                    </div>
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
