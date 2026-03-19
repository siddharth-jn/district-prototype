import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { restaurants, movies, events, stores, activities, playFacilities } from '../data/mockData';
import { ArrowLeft, Star, MapPin, Share2, Heart, Clock, Calendar, Users, ShoppingBag, Ticket } from 'lucide-react';
import '../styles/DetailView.css';

// Pool of public reviewers with real Unsplash photos
const publicReviewers = [
    { name: 'Meera Pillai', avatar: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=60&auto=format&fit=crop' },
    { name: 'Aryan Chopra', avatar: 'https://images.unsplash.com/photo-1463453091185-61582044d556?q=80&w=60&auto=format&fit=crop' },
    { name: 'Simran Kaur', avatar: 'https://images.unsplash.com/photo-1502764613149-7f1d229e230f?q=80&w=60&auto=format&fit=crop' },
    { name: 'Nikhil Joshi', avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=60&auto=format&fit=crop' },
    { name: 'Divya Menon', avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=60&auto=format&fit=crop' },
    { name: 'Sachin Raut', avatar: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=60&auto=format&fit=crop' },
    { name: 'Pooja Iyer', avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=60&auto=format&fit=crop' },
    { name: 'Harsh Agarwal', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=60&auto=format&fit=crop' },
    { name: 'Riya Shah', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=60&auto=format&fit=crop' },
    { name: 'Tarun Mehta', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=60&auto=format&fit=crop' },
];

// Public reviews — generic, hype-y, often non-specific (classic internet reviews)
const publicReviewsByType = {
    dining: [
        { text: "Amazing place!! 5 stars no question. Must visit!! 🔥🔥", rating: 5.0 },
        { text: "Best restaurant in Mumbai hands down. Food is 10/10.", rating: 5.0 },
        { text: "Great vibes, great food. Loved everything about it.", rating: 4.5 },
        { text: "Came here for my birthday and it was perfect. Would recommend!", rating: 4.5 },
        { text: "Heard about this place online and it lived up to the hype!", rating: 4.5 },
        { text: "So good!! The portions were huge and the service was fast.", rating: 4.0 },
        { text: "A hidden gem in the city. Don't miss out!", rating: 4.5 },
        { text: "The ambiance was beautiful. Definitely Insta-worthy 📸", rating: 4.0 },
        { text: "Decent food. Slightly overpriced for what you get but decent.", rating: 3.5 },
        { text: "We waited 40 mins even with a reservation. Food was okay once we got in.", rating: 3.0 },
    ],
    movies: [
        { text: "Absolute masterpiece. Go watch it right now!!", rating: 5.0 },
        { text: "Mind-blowing experience. Best film this year easily.", rating: 5.0 },
        { text: "Loved every single second of this film. 10/10!", rating: 5.0 },
        { text: "THE movie of the year. Go in without spoilers!", rating: 4.5 },
        { text: "Watched it twice already and I'd watch it a third time. Incredible.", rating: 5.0 },
        { text: "Overrated tbh. Good visuals but the story was weak.", rating: 3.0 },
        { text: "I've seen better. Felt dragged in the middle.", rating: 3.5 },
        { text: "Hyped up way too much. It's just an average film.", rating: 3.0 },
        { text: "Great direction and cinematography. Worth a watch.", rating: 4.0 },
        { text: "Power-packed performances but the screenplay could be tighter.", rating: 4.0 },
    ],
    stores: [
        { text: "Love this store!! Always find something new here 🛍️", rating: 5.0 },
        { text: "Great collection. Staff is super helpful!", rating: 4.5 },
        { text: "My go-to when I need something nice. Never disappoints.", rating: 4.5 },
        { text: "Super pricey. You can find the same stuff cheaper elsewhere.", rating: 3.0 },
        { text: "Billing took forever but the products are good quality.", rating: 3.5 },
        { text: "Was expecting more variety. The online catalogue looks much better.", rating: 3.0 },
        { text: "Amazing experience. Will definitely shop here again!", rating: 4.5 },
        { text: "Staff was rude and unhelpful. Poor experience overall.", rating: 2.0 },
        { text: "Good products but pushy salespeople. Let me browse please!", rating: 3.5 },
        { text: "Beautiful store, clean and well-organized. Loved it!", rating: 4.0 },
    ],
    activities: [
        { text: "Amazing!!! Best thing I've done in Mumbai. Go NOW.", rating: 5.0 },
        { text: "So much fun!! Highly recommend for groups.", rating: 5.0 },
        { text: "Totally worth every rupee. Will go back for sure.", rating: 4.5 },
        { text: "It was okay. Not as thrilling as the photos suggest.", rating: 3.0 },
        { text: "Very commercialized now. Lost its charm. Still decent though.", rating: 3.5 },
        { text: "Understaffed and safety briefing was too short. Not ideal.", rating: 2.5 },
        { text: "Had a blast with my crew! Great energy and super well-run.", rating: 4.5 },
        { text: "A bit overpriced for the duration but fun experience.", rating: 3.5 },
        { text: "The staff was really friendly and patient with beginners.", rating: 4.0 },
        { text: "Great time overall. Booked it on a recommendation and loved it.", rating: 4.5 },
    ],
    play: [
        { text: "Best court in the city!! Book in advance it fills up fast.", rating: 5.0 },
        { text: "Loved it! Clean, well-lit, and affordable.", rating: 4.5 },
        { text: "Floodlights are a bit dim on one end. Manageable but annoying.", rating: 3.5 },
        { text: "The turf was muddy after rain and they still took bookings. Disappointed.", rating: 2.5 },
        { text: "Changing rooms need an upgrade but the playing surface is great.", rating: 3.5 },
        { text: "Perfect place for a corporate sports day. Highly recommend!", rating: 4.5 },
        { text: "Came with 12 people for a tournament. Smooth experience!", rating: 4.0 },
        { text: "Equipment rental prices are steep. Bring your own gear.", rating: 3.0 },
        { text: "Solid facility. Worth bookmarking if you play regularly.", rating: 4.0 },
        { text: "Staff was helpful and the court was freshly lined. Great experience.", rating: 4.5 },
    ],
};

function getPublicReviews(type, item) {
    const pool = publicReviewsByType[type] || publicReviewsByType.dining;
    const seed = (item.id || '').split('').reduce((acc, c) => acc + c.charCodeAt(0), 0);
    const result = [];
    const usedReviewers = new Set();
    const usedTexts = new Set();
    let i = 0;
    let attempts = 0;
    while (result.length < 5 && attempts < 30) {
        const reviewerIdx = (seed + i * 3 + attempts) % publicReviewers.length;
        const textIdx = (seed + i * 7 + 1 + attempts) % pool.length;
        if (!usedReviewers.has(reviewerIdx) && !usedTexts.has(textIdx)) {
            usedReviewers.add(reviewerIdx);
            usedTexts.add(textIdx);
            result.push({
                ...publicReviewers[reviewerIdx],
                rating: pool[textIdx].rating,
                text: pool[textIdx].text,
            });
            i++;
        }
        attempts++;
    }
    return result;
}


// Parse actual movie runtime in decimal hours (no extras added)
const getActualDurationH = (movie) => {
    if (!movie?.duration) return 2.25;
    const hM = movie.duration.match(/(\d+)h/);
    const mM = movie.duration.match(/(\d+)m/);
    return (hM ? parseInt(hM[1]) : 0) + (mM ? parseInt(mM[1]) : 0) / 60;
};

// Showtimes: first at 9 AM, interval = actualH + 0.5h interval + 0.5h cleaning; stop before midnight
const getShowtimes = (movie) => {
    const slotInterval = getActualDurationH(movie) + 1.0;
    const times = [];
    let t = 9;
    while (t < 24) { times.push(t); t += slotInterval; }
    return times;
};

const fmtShowtime = (h) => {
    let hrs = Math.floor(h) % 24;
    let mins = Math.round((h - Math.floor(h)) * 60);
    if (mins === 60) { hrs = (hrs + 1) % 24; mins = 0; }
    const period = hrs >= 12 ? 'PM' : 'AM';
    const displayH = hrs % 12 === 0 ? 12 : hrs % 12;
    return `${displayH}:${String(mins).padStart(2, '0')} ${period}`;
};

// Deterministic sold-out: ~28% of movie showtimes per theatre
const isShowtimeSoldOut = (movieId, theatreIdx, slotIdx) => {
    const hash = movieId.split('').reduce((acc, c) => acc + c.charCodeAt(0), 0);
    return (hash * 31 + theatreIdx * 13 + slotIdx * 7) % 10 < 3;
};

// Play slot helpers
const getPlaySlots = (facility) => {
    const openH = parseInt(facility.openTime?.split(':')[0] ?? '5');
    let closeH = parseInt(facility.closeTime?.split(':')[0] ?? '23');
    if (closeH === 0) closeH = 24; // midnight
    const slots = [];
    for (let h = openH; h < closeH; h++) slots.push(h);
    return slots;
};

const isPlaySlotUnavailable = (id, hour) => {
    const hash = id.split('').reduce((acc, c) => acc + c.charCodeAt(0), 0);
    return (hash * 31 + hour * 17) % 10 < 3;
};

const fmtHour = (h) => {
    const n = h % 24;
    const period = n >= 12 ? 'PM' : 'AM';
    const display = n % 12 === 0 ? 12 : n % 12;
    return `${display}:00 ${period}`;
};

const getPlayPrice = (priceStr, hours) => {
    const num = parseInt((priceStr || '').replace(/[^0-9]/g, ''));
    if (!num) return priceStr;
    return `₹${(num * hours).toLocaleString()}`;
};

const DetailView = () => {
    const { type, id } = useParams();
    const navigate = useNavigate();
    const [item, setItem] = useState(null);
    const [publicReviews, setPublicReviews] = useState([]);
    const [reviewTab, setReviewTab] = useState('friends');
    const [expandedTheatreIdx, setExpandedTheatreIdx] = useState(null);
    const [selectedShowtime, setSelectedShowtime] = useState(null);
    const [selectedPlaySlots, setSelectedPlaySlots] = useState([]);

    const handlePlaySlotClick = (hour) => {
        if (!item || isPlaySlotUnavailable(item.id, hour)) return;
        setSelectedPlaySlots(prev =>
            prev.includes(hour)
                ? prev.filter(h => h !== hour)
                : [...prev, hour].sort((a, b) => a - b)
        );
    };

    useEffect(() => {
        let foundItem;
        if (type === 'dining') foundItem = restaurants.find(r => r.id === id);
        else if (type === 'movies') foundItem = movies.find(m => m.id === id);
        else if (type === 'events') foundItem = events.find(e => e.id === id);
        else if (type === 'stores') foundItem = stores.find(s => s.id === id);
        else if (type === 'activities') foundItem = activities.find(a => a.id === id);
        else if (type === 'play') foundItem = playFacilities.find(p => p.id === id);

        setItem(foundItem);
        if (foundItem && type !== 'events') {
            const reviewType = type === 'dining' ? 'dining' : type === 'movies' ? 'movies' : type === 'stores' ? 'stores' : type === 'activities' ? 'activities' : 'play';
            setPublicReviews(getPublicReviews(reviewType, foundItem));
        }
    }, [type, id]);

    if (!item) return <div className="loading">Loading...</div>;

    // Friend reviews come directly from item.friendsActivity
    const friendReviews = (type !== 'events' && item.friendsActivity) ? item.friendsActivity : [];

    return (
        <div className="detail-view">
            {/* Header Image */}
            <div className="detail-header-image-container">
                <img src={item.image} alt={item.name || item.title} className="detail-header-image" />
                <div className="header-overlay">
                    <button className="back-btn" onClick={() => navigate(-1)}>
                        <ArrowLeft size={24} color="white" />
                    </button>
                    <div className="header-actions">
                        <button className="icon-btn"><Share2 size={24} color="white" /></button>
                        <button className="icon-btn"><Heart size={24} color="white" /></button>
                    </div>
                </div>
            </div>

            <div className="detail-content">
                <div className="title-section">
                    <h1 className="detail-title">{item.name || item.title}</h1>

                    {type !== 'movies' && (
                        <div className="rating-row">
                            <div style={{ display: 'inline-flex', marginTop: '4px', alignItems: 'center', gap: '3px' }}>
                                <Star size={10} fill="#6366F1" stroke="none" />
                                <span style={{ fontWeight: 700, fontSize: '12px', color: '#6366F1' }}>{item.rating}</span>
                                <span style={{ fontSize: '10px', color: 'var(--color-gray)' }}>({item.reviewsCount})</span>
                            </div>
                        </div>
                    )}

                    {type === 'movies' && (
                        <div className="movie-meta-tags">
                            <span className="meta-tag">{item.language}</span>
                            <span className="meta-tag">{item.format}</span>
                            <div className="rating-row" style={{ marginLeft: 'auto' }}>
                                <Star size={16} fill="#6366F1" stroke="none" />
                                <span style={{ fontWeight: 700, marginLeft: 4 }}>{item.rating}/5</span>
                                <span className="review-count" style={{ marginLeft: 4 }}>({item.reviewsCount} votes)</span>
                            </div>
                        </div>
                    )}
                </div>

                <div className="info-section">
                    {/* Common Header Info based on Type */}
                    {type === 'dining' && (
                        <>
                            <p className="cuisine">{item.cuisine} • {item.priceForTwo || item.price}</p>
                            <p className="location-text"><MapPin size={16} /> {item.location}</p>
                            <p className="open-status">Open now • 9:00 AM – 12:30 AM</p>
                            <div className="description-text">{item.description || "A wonderful dining experience with great ambiance."}</div>
                        </>
                    )}
                    {(type === 'stores' || type === 'activities' || type === 'play') && (
                        <>
                            <p className="cuisine">{item.category} • {item.offer || item.price}</p>
                            <p className="location-text">
                                <MapPin size={16} /> {item.location}
                                {item.distanceKm && <span style={{ marginLeft: 8, color: '#888', fontSize: 12 }}>· {item.distanceKm} km from Andheri West</span>}
                            </p>
                            <p className="open-status">Open now • {type === 'play' ? '5am' : '10am'} - {type === 'play' ? '12am' : '10pm'}</p>
                            <div className="description-text">
                                {item.description || `Experience the best of ${item.category} right in the heart of the city. Highly recommended by locals.`}
                            </div>
                        </>
                    )}

                    {type === 'dining' && item.offers && (
                        <div className="offers-section">
                            <h3>Offers</h3>
                            <div className="offer-card-detail">
                                <div className="offer-icon-wrapper">%</div>
                                <div>
                                    <div className="offer-title">{item.offers}</div>
                                    <div className="offer-desc">Up to ₹100</div>
                                </div>
                            </div>
                        </div>
                    )}

                    {type === 'play' && (
                        <div style={{ marginTop: 24 }}>
                            <h3 style={{ fontSize: 16, marginBottom: 4 }}>Select Your Slot</h3>
                            <p style={{ fontSize: 12, color: '#888', margin: '0 0 14px' }}>
                                Tap to select. For 2+ hours, pick consecutive slots. <span style={{ color: '#bbb' }}>Strikethrough = booked.</span>
                            </p>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                                {getPlaySlots(item).map((hour) => {
                                    const unavailable = isPlaySlotUnavailable(item.id, hour);
                                    const selected = selectedPlaySlots.includes(hour);
                                    return (
                                        <button
                                            key={hour}
                                            onClick={() => handlePlaySlotClick(hour)}
                                            disabled={unavailable}
                                            style={{
                                                padding: '7px 13px',
                                                borderRadius: 20,
                                                fontSize: 13,
                                                fontWeight: 600,
                                                cursor: unavailable ? 'not-allowed' : 'pointer',
                                                border: selected ? 'none' : '1.5px solid #ddd',
                                                background: selected ? 'var(--color-brand)' : unavailable ? '#f0f0f0' : '#f5f5f5',
                                                color: selected ? 'white' : unavailable ? '#bbb' : '#333',
                                                textDecoration: unavailable ? 'line-through' : 'none',
                                            }}
                                        >
                                            {fmtHour(hour)}
                                        </button>
                                    );
                                })}
                            </div>
                            {selectedPlaySlots.length > 0 && (() => {
                                const isConsecutive = selectedPlaySlots.every((h, i) => i === 0 || h === selectedPlaySlots[i - 1] + 1);
                                const timeDisplay = isConsecutive
                                    ? `${fmtHour(selectedPlaySlots[0])} – ${fmtHour(selectedPlaySlots[selectedPlaySlots.length - 1] + 1)}`
                                    : selectedPlaySlots.map(fmtHour).join(', ');
                                return (
                                    <>
                                        <div style={{ marginTop: 14, padding: '12px 16px', background: 'var(--color-brand-light)', borderRadius: 12, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                                            <div>
                                                <div style={{ fontWeight: 700, fontSize: 14 }}>
                                                    {selectedPlaySlots.length} hr{selectedPlaySlots.length > 1 ? 's' : ''}
                                                </div>
                                                <div style={{ fontSize: 12, color: '#666', marginTop: 3, lineHeight: 1.4 }}>{timeDisplay}</div>
                                            </div>
                                            <div style={{ fontWeight: 800, fontSize: 16, color: 'var(--color-brand)' }}>
                                                {getPlayPrice(item.price, selectedPlaySlots.length)}
                                            </div>
                                        </div>
                                        <button style={{ marginTop: 10, width: '100%', padding: 14, borderRadius: 14, border: 'none', background: 'var(--color-brand)', color: 'white', fontWeight: 700, fontSize: 15, cursor: 'pointer' }}>
                                            Book {selectedPlaySlots.length} Hour{selectedPlaySlots.length > 1 ? 's' : ''}
                                        </button>
                                    </>
                                );
                            })()}
                        </div>
                    )}

                    {type === 'movies' && (
                        <>
                            <p className="genre">{item.genre} • {item.duration || '2h 15m'}</p>
                            <div className="plot-summary">
                                <h3>About the movie</h3>
                                <p>Experience the epic conclusion to the saga. {item.title} brings action, drama, and stunning visuals to the big screen.</p>
                            </div>

                            {/* Theatre Selector with Showtime Picker */}
                            {item.theatres && item.theatres.length > 0 && (
                                <div style={{ marginTop: 24 }}>
                                    <h3 style={{ marginBottom: 12, fontSize: 16 }}>Select a Theatre</h3>
                                    {item.theatres.map((theatre, idx) => (
                                        <div key={idx} style={{ border: '1.5px solid #eee', borderRadius: 12, marginBottom: 10, overflow: 'hidden' }}>
                                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px 16px', background: '#fafafa' }}>
                                                <div>
                                                    <div style={{ fontWeight: 600, fontSize: 14, marginBottom: 2 }}>{theatre.name}</div>
                                                    <div style={{ fontSize: 12, color: '#888', display: 'flex', gap: 6, alignItems: 'center' }}>
                                                        <MapPin size={11} /> {theatre.distance} km away
                                                        <span>· Starting ₹{theatre.startingPrice}</span>
                                                    </div>
                                                </div>
                                                <button
                                                    onClick={() => {
                                                        setExpandedTheatreIdx(idx === expandedTheatreIdx ? null : idx);
                                                        setSelectedShowtime(null);
                                                    }}
                                                    style={{ background: 'var(--color-brand)', color: 'white', border: 'none', borderRadius: 20, padding: '8px 16px', fontSize: 12, fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6 }}
                                                >
                                                    <Ticket size={13} /> Book Tickets
                                                </button>
                                            </div>

                                            {expandedTheatreIdx === idx && (
                                                <div style={{ padding: '12px 16px 16px', borderTop: '1px solid #eee', background: '#fff' }}>
                                                    <p style={{ fontSize: 12, color: '#888', margin: '0 0 10px' }}>
                                                        Select a showtime: <span style={{ color: '#bbb' }}>Strikethrough = sold out.</span>
                                                    </p>
                                                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                                                        {getShowtimes(item).map((t, si) => {
                                                            const soldOut = isShowtimeSoldOut(item.id, idx, si);
                                                            const selected = selectedShowtime === t && expandedTheatreIdx === idx;
                                                            return (
                                                                <button
                                                                    key={si}
                                                                    onClick={() => !soldOut && setSelectedShowtime(selected ? null : t)}
                                                                    disabled={soldOut}
                                                                    style={{
                                                                        padding: '6px 14px', borderRadius: 20, fontSize: 13, fontWeight: 600,
                                                                        cursor: soldOut ? 'not-allowed' : 'pointer',
                                                                        border: selected ? 'none' : '1.5px solid #ddd',
                                                                        background: selected ? 'var(--color-brand)' : soldOut ? '#f0f0f0' : '#f5f5f5',
                                                                        color: selected ? 'white' : soldOut ? '#bbb' : '#333',
                                                                        textDecoration: soldOut ? 'line-through' : 'none',
                                                                    }}
                                                                >
                                                                    {fmtShowtime(t)}
                                                                </button>
                                                            );
                                                        })}
                                                    </div>
                                                    <button
                                                        disabled={!selectedShowtime}
                                                        style={{
                                                            marginTop: 12, width: '100%', padding: 12, borderRadius: 12, border: 'none',
                                                            fontWeight: 700, fontSize: 14,
                                                            background: selectedShowtime ? 'var(--color-brand)' : '#e0e0e0',
                                                            color: selectedShowtime ? 'white' : '#aaa',
                                                            cursor: selectedShowtime ? 'pointer' : 'default',
                                                        }}>
                                                        {selectedShowtime ? `Book for ${fmtShowtime(selectedShowtime)}` : 'Select a showtime first'}
                                                    </button>
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </>
                    )}

                    {type === 'events' && (
                        <>
                            <div className="event-date-row">
                                <Calendar size={20} className="brand-icon" />
                                <div>
                                    <div className="event-detail-date">{item.date}</div>
                                    <div className="event-detail-time">{item.time}</div>
                                </div>
                            </div>
                            <div className="event-location-row">
                                <MapPin size={20} className="brand-icon" />
                                <div>
                                    <div className="event-detail-venue">{item.venue}</div>
                                    <div className="event-detail-address">
                                        Mumbai, Maharashtra
                                        {item.distanceKm && <span style={{ marginLeft: 8, color: '#888', fontSize: 12 }}>· {item.distanceKm} km from Andheri West</span>}
                                    </div>
                                </div>
                            </div>
                            <div className="plot-summary">
                                <h3>About this Event</h3>
                                <p>Join us for an unforgettable experience at {item.venue}. Early bird tickets are selling fast!</p>
                            </div>
                            <div className="price-section">
                                <span className="price-label">Tickets starting from</span>
                                <span className="price-amount">{item.price}</span>
                            </div>
                        </>
                    )}


                    {/* Tabbed Reviews (For non-events) */}
                    {type !== 'events' && (friendReviews.length > 0 || publicReviews.length > 0) && (
                        <div className="section-block">
                            {/* Tab Buttons — Public first, Friends second */}
                            <div style={{
                                display: 'flex',
                                gap: '8px',
                                marginBottom: '16px',
                            }}>
                                <button
                                    onClick={() => setReviewTab('public')}
                                    style={{
                                        flex: 1,
                                        padding: '10px 0',
                                        borderRadius: '24px',
                                        border: reviewTab === 'public' ? 'none' : '1.5px solid #ddd',
                                        background: reviewTab === 'public' ? '#333' : 'transparent',
                                        color: reviewTab === 'public' ? 'white' : 'var(--color-dark-gray)',
                                        fontWeight: 600,
                                        fontSize: '13px',
                                        cursor: 'pointer',
                                        transition: 'all 0.2s ease',
                                    }}
                                >
                                    🌐 What People Say
                                    {publicReviews.length > 0 && (
                                        <span style={{
                                            marginLeft: '6px',
                                            background: reviewTab === 'public' ? 'rgba(255,255,255,0.2)' : '#f0f0f0',
                                            borderRadius: '10px',
                                            padding: '1px 7px',
                                            fontSize: '11px',
                                        }}>{publicReviews.length}</span>
                                    )}
                                </button>
                                <button
                                    onClick={() => setReviewTab('friends')}
                                    style={{
                                        flex: 1,
                                        padding: '10px 0',
                                        borderRadius: '24px',
                                        border: reviewTab === 'friends' ? 'none' : '1.5px solid #ddd',
                                        background: reviewTab === 'friends' ? 'var(--color-brand)' : 'transparent',
                                        color: reviewTab === 'friends' ? 'white' : 'var(--color-dark-gray)',
                                        fontWeight: 600,
                                        fontSize: '13px',
                                        cursor: 'pointer',
                                        transition: 'all 0.2s ease',
                                    }}
                                >
                                    👥 {type === 'dining' ? 'Friends Visited' : type === 'movies' ? 'Friends Watched' : 'What Friends Say'}
                                    {friendReviews.length > 0 && (
                                        <span style={{
                                            marginLeft: '6px',
                                            background: reviewTab === 'friends' ? 'rgba(255,255,255,0.25)' : '#f0f0f0',
                                            borderRadius: '10px',
                                            padding: '1px 7px',
                                            fontSize: '11px',
                                        }}>{friendReviews.length}</span>
                                    )}
                                </button>
                            </div>


                            {/* Friend Reviews */}
                            {reviewTab === 'friends' && (
                                <div className="reviews-list">
                                    {friendReviews.length > 0 ? friendReviews.map((rev, idx) => (
                                        <div key={idx} className="review-card">
                                            <div className="review-header" style={{ alignItems: 'flex-start', justifyContent: 'space-between' }}>
                                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                                    <img src={rev.avatar} alt={rev.name} style={{ width: 36, height: 36, borderRadius: '50%', objectFit: 'cover', border: '1px solid #eee' }} />
                                                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                                                        <div style={{ display: 'flex', alignItems: 'center' }}>
                                                            <span className="reviewer-name" style={{ fontWeight: 600 }}>{rev.name}</span>
                                                            <span style={{ fontSize: '10px', color: 'var(--color-brand)', background: 'rgba(255,44,85,0.1)', padding: '1px 6px', borderRadius: '4px', marginLeft: '6px', fontWeight: 600 }}>FRIEND</span>
                                                        </div>
                                                        <span style={{ fontSize: '11px', color: '#888' }}>{rev.date || 'Recently'}</span>
                                                    </div>
                                                </div>
                                                <span style={{ display: 'flex', alignItems: 'center', gap: '3px' }}>
                                                    <Star size={10} fill="#6366F1" stroke="none" /> {rev.rating}
                                                </span>
                                            </div>
                                            <p className="review-text" style={{ marginTop: '10px', lineHeight: '1.4' }}>{rev.review}</p>
                                        </div>
                                    )) : (
                                        <p style={{ color: '#888', fontSize: '14px', textAlign: 'center', padding: '24px 0' }}>None of your friends have reviewed this yet.</p>
                                    )}
                                </div>
                            )}

                            {/* Public Reviews */}
                            {reviewTab === 'public' && (
                                <div className="reviews-list">
                                    {publicReviews.length > 0 ? publicReviews.map((rev, idx) => (
                                        <div key={idx} className="review-card">
                                            <div className="review-header" style={{ alignItems: 'flex-start', justifyContent: 'space-between' }}>
                                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                                    <img src={rev.avatar} alt={rev.name} style={{ width: 36, height: 36, borderRadius: '50%', objectFit: 'cover', border: '1px solid #eee' }} />
                                                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                                                        <span className="reviewer-name" style={{ fontWeight: 600 }}>{rev.name}</span>
                                                        <span style={{ fontSize: '11px', color: '#888' }}>{rev.date || 'Recently'}</span>
                                                    </div>
                                                </div>
                                                <span style={{ display: 'flex', alignItems: 'center', gap: '3px' }}>
                                                    <Star size={10} fill="#6366F1" stroke="none" /> {rev.rating}
                                                </span>
                                            </div>
                                            <p className="review-text" style={{ marginTop: '10px', lineHeight: '1.4' }}>{rev.text}</p>
                                        </div>
                                    )) : (
                                        <p style={{ color: '#888', fontSize: '14px', textAlign: 'center', padding: '24px 0' }}>No public reviews yet.</p>
                                    )}
                                </div>
                            )}
                        </div>
                    )}




                </div>
            </div>

            {type !== 'movies' && type !== 'play' && (
                <div className="bottom-action-bar">
                    {type === 'dining' ? (
                        <button className="cta-btn">Book Table</button>
                    ) : type === 'events' ? (
                        <button className="cta-btn">Book Tickets Now</button>
                    ) : (
                        <button className="cta-btn">Book Now</button>
                    )}
                </div>
            )}
        </div>
    );
};

export default DetailView;
