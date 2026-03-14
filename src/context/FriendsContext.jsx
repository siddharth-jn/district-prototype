import React, { createContext, useContext, useState } from 'react';
import { currentUser } from '../data/mockData';

// Two pending friend requests (with working Unsplash portraits)
export const INITIAL_REQUESTS = [
    {
        id: 'req1',
        name: 'Aarav Mehta',
        avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?q=80&w=150&auto=format&fit=crop',
        mutualFriends: 4,
        time: '2h ago',
    },
    {
        id: 'req2',
        name: 'Shreya Nair',
        avatar: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=150&auto=format&fit=crop',
        mutualFriends: 7,
        time: '5h ago',
    },
];

const FriendsContext = createContext(null);

export const FriendsProvider = ({ children }) => {
    // Live friend id list — starts from mockData, grows if user accepts requests
    const [friendIds, setFriendIds] = useState([...currentUser.friendIds]);
    // Accepted friends that came from requests (so we can show them in the list)
    const [acceptedRequestFriends, setAcceptedRequestFriends] = useState([]);
    // Pending requests
    const [pendingRequests, setPendingRequests] = useState(INITIAL_REQUESTS);

    const acceptRequest = (req) => {
        // Add a synthetic unique id for this new friend
        const newFriendId = `req_${req.id}`;
        setFriendIds(prev => [...prev, newFriendId]);
        setAcceptedRequestFriends(prev => [...prev, {
            id: newFriendId,
            name: req.name,
            avatar: req.avatar,
            image: req.avatar,
            mutualFriends: req.mutualFriends,
            visitedPlaces: [],
        }]);
        setPendingRequests(prev => prev.filter(r => r.id !== req.id));
    };

    const rejectRequest = (id) => {
        setPendingRequests(prev => prev.filter(r => r.id !== id));
    };

    return (
        <FriendsContext.Provider value={{
            friendIds,
            acceptedRequestFriends,
            pendingRequests,
            acceptRequest,
            rejectRequest,
        }}>
            {children}
        </FriendsContext.Provider>
    );
};

export const useFriends = () => {
    const ctx = useContext(FriendsContext);
    if (!ctx) throw new Error('useFriends must be used inside FriendsProvider');
    return ctx;
};
