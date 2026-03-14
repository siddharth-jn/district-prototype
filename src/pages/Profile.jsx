import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { users, currentUser, restaurants, movies, events, stores, activities, playFacilities } from '../data/mockData';
import { UserPlus, Star, MapPin } from 'lucide-react';
import { useFriends } from '../context/FriendsContext';
import '../styles/Listing.css';
import '../styles/Movies.css';
import '../styles/Profile.css';

// Consolidating all entities for easy lookup by ID & Type
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

const Profile = () => {
    const { userId } = useParams();
    const { friendIds: liveFriendIds } = useFriends();
    const isOwnProfile = !userId;
    const displayUser = userId
        ? users.find(u => u.id === userId)
        : currentUser;

    if (!displayUser) {
        return <div className="profile-page"><div className="page-header"><h2>User not found</h2></div></div>;
    }

    // Use live context friendIds for own profile (so accepted requests update the count)
    const activeFriendIds = isOwnProfile ? liveFriendIds : displayUser.friendIds;

    const friendList = displayUser.friendIds
        .map(fId => users.find(u => u.id === fId))
        .filter(Boolean);

    const suggestedFriends = users.filter(
        u => u.id !== displayUser.id && !displayUser.friendIds.includes(u.id)
    );

    return (
        <div className="profile-page">
            {/* Profile Header Block */}
            <div className="profile-header-card">
                <img src={displayUser.id === 'u1' ? '/profile_pic.png' : displayUser.image} alt={displayUser.name} className="profile-hero-image" />
                <div className="profile-hero-details">
                    <h1 className="profile-name">{displayUser.name}</h1>
                    <div className="profile-meta">
                        <MapPin size={14} /> <span>{displayUser.city}</span>
                    </div>
                </div>
                <div className="profile-stats">
                        <Link to="/profile/friends" className="stat-box" style={{ textDecoration: 'none', color: 'inherit' }}>
                            <span className="stat-value">{activeFriendIds.length}</span>
                            <span className="stat-label">Friends in district</span>
                        </Link>
                    <Link to="/profile/visited" className="stat-box" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <span className="stat-value">{displayUser.visitedPlaces.length}</span>
                        <span className="stat-label">Places visited</span>
                    </Link>
                </div>
            </div>

            {/* Instagram-style Places Visited Grid */}
            <div className="profile-section">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                    <h2 className="section-title" style={{ margin: 0 }}>Places visited</h2>
                </div>
                
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gap: '2px',
                    margin: '0 -16px'
                }}>
                    {displayUser.visitedPlaces.map((visit, index) => {
                        const entityData = getEntityDetails(visit.type, visit.placeId);
                        if (!entityData) return null;

                        return (
                            <Link to={`/profile/visited`} key={index} style={{ aspectRatio: '1/1', overflow: 'hidden' }}>
                                <img src={entityData.image} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </Link>
                        );
                    })}
                </div>
            </div>

            {/* Bottom padding for nav bar */}
            <div style={{ height: '80px' }}></div>
        </div>
    );
};

export default Profile;
