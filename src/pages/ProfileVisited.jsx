import React from 'react';
import { Link } from 'react-router-dom';
import { currentUser, restaurants, movies, events, stores, activities, playFacilities } from '../data/mockData';
import { ArrowLeft, Star } from 'lucide-react';
import '../styles/Listing.css';
import '../styles/Movies.css';
import '../styles/Profile.css';

const allEntities = {
    restaurant: restaurants,
    movie: movies,
    event: events,
    store: stores,
    activity: activities,
    play: playFacilities
};

const getEntityDetails = (type, placeId) => {
    const list = allEntities[type];
    if (!list) return null;
    return list.find(item => item.id === placeId);
};

const ProfileVisited = () => {
    const displayUser = currentUser;

    return (
        <div className="profile-page" style={{ padding: '0 16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', margin: '16px 0 24px 0' }}>
                <Link to="/profile" style={{ color: 'var(--color-black)' }}><ArrowLeft size={24} /></Link>
                <h1 style={{ marginLeft: '16px', fontSize: '20px', fontWeight: 700 }}>Places visited</h1>
            </div>

            <div className="reviews-list" style={{ marginTop: '16px' }}>
                {displayUser.visitedPlaces.map((visit, index) => {
                    const entityData = getEntityDetails(visit.type, visit.placeId);
                    if (!entityData) return null;

                    return (
                        <div key={index} className="review-card">
                            <div className="review-header">
                                <Link to={`/${visit.type === 'restaurant' ? 'dining' : visit.type === 'movie' ? 'movies' : visit.type === 'store' ? 'stores' : visit.type === 'activity' ? 'activities' : visit.type === 'play' ? 'play' : 'events'}/${visit.placeId}`} className="review-place-link">
                                    <img src={entityData.image} alt={entityData.title || entityData.name} className="review-place-img" />
                                    <div className="review-place-info">
                                        <h3 className="review-place-name">{entityData.title || entityData.name}</h3>
                                        <span className="review-place-category">{entityData.category || entityData.cuisine}</span>
                                    </div>
                                </Link>
                                <div className="review-rating-pill">
                                    <Star size={12} fill="#fff" stroke="none" />
                                    <span>{visit.rating}</span>
                                </div>
                            </div>
                            <p className="review-text">"{visit.review}"</p>
                            <div style={{ fontSize: '10px', color: 'var(--color-gray)', marginTop: '8px' }}>{visit.date}</div>
                        </div>
                    );
                })}
            </div>
            
            <div style={{ height: '80px' }}></div>
        </div>
    );
};

export default ProfileVisited;
