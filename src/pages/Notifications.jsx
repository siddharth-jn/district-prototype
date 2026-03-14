import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Check, X, Star, UserCheck, UserX } from 'lucide-react';
import { users, restaurants, movies, playFacilities, stores, activities } from '../data/mockData';
import { useFriends } from '../context/FriendsContext';
import '../styles/Listing.css';
import '../styles/Profile.css';

// Merge all entities to easily find photos/titles
const allEntities = [...restaurants, ...movies, ...playFacilities, ...stores, ...activities];

const rnd = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const generateActivities = () => {
    const activitiesList = [];
    const feedUsers = users.filter(u => u.id !== 'u1');

    for (let i = 0; i < 15; i++) {
        const user = feedUsers[rnd(0, feedUsers.length - 1)];
        const entity = allEntities[rnd(0, allEntities.length - 1)];
        const rating = (Math.random() * 1 + 4).toFixed(1);

        let actionStr = 'visited';
        if (movies.includes(entity)) actionStr = 'watched';
        else if (restaurants.includes(entity)) actionStr = 'dined at';
        else if (playFacilities.includes(entity)) actionStr = 'played at';

        activitiesList.push({
            id: `act${i}`,
            user,
            entity,
            action: actionStr,
            rating,
            time: `${rnd(1, 23)}h ago`
        });
    }

    return activitiesList.sort((a, b) => parseInt(a.time) - parseInt(b.time));
};

const mockActivities = generateActivities();

const Notifications = () => {
    const { pendingRequests, acceptRequest, rejectRequest } = useFriends();
    const [feedback, setFeedback] = useState({});

    const handleAccept = (req) => {
        setFeedback(prev => ({ ...prev, [req.id]: 'accepted' }));
        setTimeout(() => acceptRequest(req), 600);
    };

    const handleReject = (req) => {
        setFeedback(prev => ({ ...prev, [req.id]: 'rejected' }));
        setTimeout(() => rejectRequest(req.id), 600);
    };

    return (
        <div className="profile-page" style={{ padding: '0 16px' }}>
            {/* Header */}
            <div style={{ display: 'flex', alignItems: 'center', margin: '16px 0 24px 0' }}>
                <Link to="/" style={{ color: 'var(--color-black)' }}><ArrowLeft size={24} /></Link>
                <h1 style={{ marginLeft: '16px', fontSize: '20px', fontWeight: 700 }}>Notifications</h1>
            </div>

            {/* Friend Requests */}
            {pendingRequests.length > 0 && (
                <div className="profile-section" style={{ marginBottom: '32px' }}>
                    <h2 className="section-title" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        Friend Requests
                        <span style={{
                            background: 'var(--color-brand)',
                            color: 'white',
                            borderRadius: '10px',
                            padding: '2px 8px',
                            fontSize: '12px',
                            fontWeight: 700,
                        }}>{pendingRequests.length}</span>
                    </h2>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                        {pendingRequests.map(req => {
                            const fb = feedback[req.id];
                            return (
                                <div key={req.id} style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    background: 'var(--color-bg-light)',
                                    padding: '14px 12px',
                                    borderRadius: '16px',
                                    gap: '12px',
                                    opacity: fb ? 0.5 : 1,
                                    transition: 'opacity 0.4s',
                                }}>
                                    {/* Avatar + Info */}
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flex: 1 }}>
                                        <img
                                            src={req.avatar}
                                            alt={req.name}
                                            style={{ width: '52px', height: '52px', borderRadius: '50%', objectFit: 'cover', flexShrink: 0 }}
                                        />
                                        <div>
                                            <div style={{ fontWeight: 700, fontSize: '15px' }}>{req.name}</div>
                                            <div style={{ fontSize: '12px', color: 'var(--color-gray)', marginTop: '2px' }}>
                                                {req.mutualFriends} mutual friends · {req.time}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Action buttons or feedback */}
                                    {fb ? (
                                        <div style={{
                                            fontSize: '13px',
                                            fontWeight: 600,
                                            color: fb === 'accepted' ? 'var(--color-brand)' : 'var(--color-gray)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '4px',
                                            flexShrink: 0,
                                        }}>
                                            {fb === 'accepted'
                                                ? <><UserCheck size={16} /> Added</>
                                                : <><UserX size={16} /> Declined</>
                                            }
                                        </div>
                                    ) : (
                                        <div style={{ display: 'flex', gap: '8px', flexShrink: 0 }}>
                                            <button
                                                onClick={() => handleAccept(req)}
                                                style={{
                                                    padding: '8px 16px',
                                                    borderRadius: '20px',
                                                    background: 'var(--color-brand)',
                                                    color: '#fff',
                                                    border: 'none',
                                                    fontWeight: 600,
                                                    fontSize: '13px',
                                                    cursor: 'pointer',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: '4px',
                                                }}
                                            >
                                                <Check size={14} /> Accept
                                            </button>
                                            <button
                                                onClick={() => handleReject(req)}
                                                style={{
                                                    padding: '8px 16px',
                                                    borderRadius: '20px',
                                                    background: '#e5e5e5',
                                                    color: '#333',
                                                    border: 'none',
                                                    fontWeight: 600,
                                                    fontSize: '13px',
                                                    cursor: 'pointer',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: '4px',
                                                }}
                                            >
                                                <X size={14} /> Decline
                                            </button>
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            )}

            {/* Activity Feed */}
            <div className="profile-section">
                <h2 className="section-title">Friend Activity</h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    {mockActivities.map(act => (
                        <div key={act.id} style={{ display: 'flex', gap: '12px', paddingBottom: '20px', borderBottom: '1px solid var(--color-border)' }}>
                            <img
                                src={act.user.image || act.user.avatar}
                                alt={act.user.name}
                                style={{ width: '40px', height: '40px', borderRadius: '50%', objectFit: 'cover', flexShrink: 0 }}
                            />
                            <div style={{ flex: 1 }}>
                                <div style={{ fontSize: '14px', lineHeight: '1.4' }}>
                                    <span style={{ fontWeight: 600 }}>{act.user.name}</span> {act.action} <span style={{ fontWeight: 600 }}>{act.entity.name || act.entity.title}</span> and gave a
                                    <span style={{ display: 'inline-flex', alignItems: 'center', background: 'var(--color-black)', color: 'white', padding: '2px 6px', borderRadius: '4px', fontSize: '10px', marginLeft: '4px' }}>
                                        {act.rating} <Star size={8} fill="#fff" stroke="none" style={{ marginLeft: '2px' }} />
                                    </span> rating.
                                </div>
                                <div style={{ fontSize: '12px', color: 'var(--color-gray)', marginTop: '4px', marginBottom: '8px' }}>{act.time}</div>
                                <div style={{ borderRadius: '12px', overflow: 'hidden', height: '140px', position: 'relative' }}>
                                    <img src={act.entity.image} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                    <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '12px', background: 'linear-gradient(transparent, rgba(0,0,0,0.8))', color: '#fff' }}>
                                        <div style={{ fontWeight: 600, fontSize: '14px' }}>{act.entity.name || act.entity.title}</div>
                                        <div style={{ fontSize: '12px', opacity: 0.8 }}>{act.entity.location || act.entity.venue || act.entity.cuisine}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div style={{ height: '80px' }}></div>
        </div>
    );
};

export default Notifications;
