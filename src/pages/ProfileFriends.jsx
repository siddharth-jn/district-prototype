import React from 'react';
import { Link } from 'react-router-dom';
import { users, currentUser } from '../data/mockData';
import { UserPlus, ArrowLeft } from 'lucide-react';
import { useFriends } from '../context/FriendsContext';
import '../styles/Listing.css';
import '../styles/Movies.css';
import '../styles/Profile.css';

const ProfileFriends = () => {
    const { friendIds, acceptedRequestFriends } = useFriends();
    const displayUser = currentUser;

    // Base friends from mockData
    const baseFriendList = displayUser.friendIds
        .map(fId => users.find(u => u.id === fId))
        .filter(Boolean);

    // Merge in any newly accepted request friends (not already in base list)
    const friendList = [
        ...baseFriendList,
        ...acceptedRequestFriends,
    ];

    const suggestedFriends = users.filter(
        u => u.id !== displayUser.id && !friendIds.includes(u.id)
    );

    return (
        <div className="profile-page" style={{ padding: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '24px' }}>
                <Link to="/profile" style={{ color: 'var(--color-black)' }}><ArrowLeft size={24} /></Link>
                <h1 style={{ marginLeft: '16px', fontSize: '20px', fontWeight: 700 }}>
                    Friends in district
                </h1>
                <span style={{
                    marginLeft: '8px',
                    background: 'var(--color-brand)',
                    color: 'white',
                    borderRadius: '10px',
                    padding: '2px 8px',
                    fontSize: '13px',
                    fontWeight: 700,
                }}>{friendList.length}</span>
            </div>

            {friendList.length > 0 && (
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(70px, 1fr))', gap: '16px', marginBottom: '32px' }}>
                    {friendList.map(friend => (
                        <div key={friend.id} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <img
                                src={friend.image || friend.avatar}
                                alt={friend.name}
                                style={{ width: '60px', height: '60px', borderRadius: '50%', objectFit: 'cover', marginBottom: '8px' }}
                            />
                            <span style={{ fontSize: '10px', textAlign: 'center', fontWeight: 600 }}>{friend.name}</span>
                        </div>
                    ))}
                </div>
            )}

            {suggestedFriends.length > 0 && (
                <div>
                    <h2 className="section-title">Suggested to add</h2>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                        {suggestedFriends.slice(0, 10).map(friend => (
                            <div key={friend.id} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'var(--color-bg-light)', padding: '12px', borderRadius: '12px' }}>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <img src={friend.image || friend.avatar} alt={friend.name} style={{ width: '40px', height: '40px', borderRadius: '50%', objectFit: 'cover' }} />
                                    <div style={{ marginLeft: '12px' }}>
                                        <div style={{ fontWeight: 600, fontSize: '14px' }}>{friend.name}</div>
                                        <div style={{ fontSize: '12px', color: 'var(--color-gray)' }}>{friend.mutualFriends || 2} mutual friends</div>
                                    </div>
                                </div>
                                <button className="add-friend-btn" style={{ padding: '6px 12px', fontSize: '12px' }}>
                                    <UserPlus size={14} style={{ marginRight: '4px' }} /> Add
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            <div style={{ height: '80px' }}></div>
        </div>
    );
};

export default ProfileFriends;
