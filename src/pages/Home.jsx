import React, { useRef, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { categories, restaurants, movies, events, stores, activities, playFacilities } from '../data/mockData';
import { ChevronRight, Star, MapPin, Calendar, Utensils, Film, Ticket, ShoppingBag, Compass, Gamepad2 } from 'lucide-react';

const CATEGORY_ICONS = {
    dining: Utensils,
    movies: Film,
    events: Ticket,
    stores: ShoppingBag,
    activities: Compass,
    play: Gamepad2,
};
import '../styles/Home.css';

const useScrollMemory = (key) => {
    const ref = useRef(null);
    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const saved = sessionStorage.getItem(`scroll_${key}`);
        if (saved) el.scrollLeft = parseInt(saved, 10);
        const onScroll = () => sessionStorage.setItem(`scroll_${key}`, el.scrollLeft);
        el.addEventListener('scroll', onScroll, { passive: true });
        return () => el.removeEventListener('scroll', onScroll);
    }, [key]);
    return ref;
};

const parseCount = (str) => {
    if (!str) return 0;
    const s = String(str).toLowerCase().trim();
    if (s.endsWith('k')) return parseFloat(s) * 1000;
    return parseInt(s) || 0;
};

const shuffle = (arr) => {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
};

const Home = () => {
    const diningScrollRef = useScrollMemory('home_dining');
    const moviesScrollRef = useScrollMemory('home_movies');
    const eventsScrollRef = useScrollMemory('home_events');
    const storesScrollRef = useScrollMemory('home_stores');
    const activitiesScrollRef = useScrollMemory('home_activities');
    const playScrollRef = useScrollMemory('home_play');

    const trendingDining = useMemo(() => shuffle([...restaurants].sort((a, b) => parseCount(b.reviewsCount) - parseCount(a.reviewsCount)).slice(0, 10)), []);
    const trendingMovies = useMemo(() => shuffle([...movies].sort((a, b) => parseCount(b.reviewsCount) - parseCount(a.reviewsCount)).slice(0, 10)), []);
    const trendingEvents = useMemo(() => shuffle([...events].sort((a, b) => parseCount(b.reviewsCount) - parseCount(a.reviewsCount)).slice(0, 10)), []);
    const trendingStores = useMemo(() => shuffle([...stores].sort((a, b) => parseCount(b.reviewsCount) - parseCount(a.reviewsCount)).slice(0, 10)), []);
    const trendingActivities = useMemo(() => shuffle([...activities].sort((a, b) => parseCount(b.reviewsCount) - parseCount(a.reviewsCount)).slice(0, 10)), []);
    const trendingPlay = useMemo(() => shuffle([...playFacilities].sort((a, b) => parseCount(b.reviewsCount) - parseCount(a.reviewsCount)).slice(0, 10)), []);

    return (
        <div className="home-page">
            {/* Planner CTA */}
            <section style={{ padding: '0 16px', marginBottom: '24px' }}>
                <Link to="/planner" style={{ textDecoration: 'none' }}>
                    <div style={{
                        background: 'linear-gradient(135deg, #6366F1 0%, #3730A3 100%)',
                        borderRadius: '20px',
                        padding: '22px 20px',
                        color: 'white',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        boxShadow: '0 8px 24px rgba(79, 70, 229, 0.32)',
                        position: 'relative',
                        overflow: 'hidden'
                    }}>
                        <div style={{ position: 'absolute', top: '-20px', right: '-20px', width: '100px', height: '100px', borderRadius: '50%', background: 'rgba(255,255,255,0.08)', pointerEvents: 'none' }} />
                        <h2 style={{ fontSize: '19px', fontWeight: '800', margin: '0 0 6px 0', letterSpacing: '-0.4px' }}>Plan your perfect day out</h2>
                        <p style={{ margin: 0, fontSize: '13px', opacity: 0.85, lineHeight: 1.5 }}>Input your mood, get a curated itinerary built with friends' reviews.</p>
                        <div style={{ marginTop: '14px', display: 'flex', gap: '6px', alignItems: 'center', fontSize: '13px', fontWeight: '700', letterSpacing: '0.1px' }}>
                            Start Planning <ChevronRight size={15} />
                        </div>
                    </div>
                </Link>
            </section>

            {/* Categories */}
            <section className="categories-section">
                <h2>What are you in the mood for?</h2>
                <div className="categories-grid">
                    {categories.map((category) => {
                        const Icon = CATEGORY_ICONS[category.id];
                        return (
                            <Link to={`/${category.id}`} key={category.id} className="category-card">
                                <div className="category-icon-wrapper">
                                    {Icon && <Icon size={20} />}
                                </div>
                                <div className="category-name">{category.name}</div>
                            </Link>
                        );
                    })}
                </div>
            </section>

            {/* Trending Restaurants */}
            <section className="trending-section">
                <div className="section-header">
                    <h2>Trending in Dining</h2>
                    <Link to="/dining" className="see-all">See All <ChevronRight size={16} /></Link>
                </div>
                <div className="horizontal-scroll" ref={diningScrollRef}>
                    {trendingDining.map((item) => (
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
                                    {item.distance && <span style={{ marginLeft: 'auto', fontSize: '10px', color: '#888' }}>{item.distance}</span>}
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            {/* Movies Now Showing */}
            <section className="trending-section">
                <div className="section-header">
                    <h2>Movies Now Showing</h2>
                    <Link to="/movies" className="see-all">See All <ChevronRight size={16} /></Link>
                </div>
                <div className="horizontal-scroll" ref={moviesScrollRef}>
                    {trendingMovies.map((item) => (
                        <Link to={`/movies/${item.id}`} key={item.id} className="card">
                            <img src={item.image} alt={item.title} className="card-image" />
                            <div className="card-content">
                                <div className="card-header">
                                    <h3>{item.title}</h3>
                                    <div className="card-rating">
                                        <Star size={11} fill="#6366F1" stroke="none" />
                                        <span style={{ fontWeight: 700, fontSize: '11px', color: '#6366F1' }}>{item.rating}</span>
                                        <span style={{ fontSize: '10px', color: 'var(--color-gray)' }}>({item.reviewsCount})</span>
                                    </div>
                                </div>
                                <p className="card-subtitle">{item.genre}</p>
                                {item.language && <p className="card-subtitle">{item.language}</p>}
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            {/* Popular Events */}
            <section className="trending-section">
                <div className="section-header">
                    <h2>Popular Events</h2>
                    <Link to="/events" className="see-all">See All <ChevronRight size={16} /></Link>
                </div>
                <div className="horizontal-scroll" ref={eventsScrollRef}>
                    {trendingEvents.map((item) => (
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
            </section>
            {/* Popular Stores */}
            <section className="trending-section">
                <div className="section-header">
                    <h2>Popular Pick: Stores</h2>
                    <Link to="/stores" className="see-all">See All <ChevronRight size={16} /></Link>
                </div>
                <div className="horizontal-scroll" ref={storesScrollRef}>
                    {trendingStores.map((item) => (
                        <Link to={`/stores/${item.id}`} key={item.id} className="card">
                            <img src={item.image} alt={item.title} className="card-image" />
                            <div className="card-content">
                                <div className="card-header">
                                    <h3>{item.title}</h3>
                                    <div className="card-rating">
                                        <Star size={11} fill="#6366F1" stroke="none" />
                                        <span style={{ fontWeight: 700, fontSize: '11px', color: '#6366F1' }}>{item.rating}</span>
                                        <span style={{ fontSize: '10px', color: 'var(--color-gray)' }}>({item.reviewsCount})</span>
                                    </div>
                                </div>
                                <p className="card-subtitle">{item.category}</p>
                                <p className="card-subtitle" style={{ fontWeight: 600, color: 'var(--color-brand)' }}>{item.offer}</p>
                                <div className="card-footer">
                                    <MapPin size={11} />
                                    <span>{item.location}</span>
                                    {item.distanceKm && <span style={{ marginLeft: 'auto', fontSize: '10px', color: '#888' }}>{item.distanceKm} km</span>}
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            {/* Trending Activities */}
            <section className="trending-section">
                <div className="section-header">
                    <h2>Trending Activities</h2>
                    <Link to="/activities" className="see-all">See All <ChevronRight size={16} /></Link>
                </div>
                <div className="horizontal-scroll" ref={activitiesScrollRef}>
                    {trendingActivities.map((item) => (
                        <Link to={`/activities/${item.id}`} key={item.id} className="card">
                            <img src={item.image} alt={item.title} className="card-image" />
                            <div className="card-content">
                                <div className="card-header">
                                    <h3>{item.title}</h3>
                                    <div className="card-rating">
                                        <Star size={11} fill="#6366F1" stroke="none" />
                                        <span style={{ fontWeight: 700, fontSize: '11px', color: '#6366F1' }}>{item.rating}</span>
                                        <span style={{ fontSize: '10px', color: 'var(--color-gray)' }}>({item.reviewsCount})</span>
                                    </div>
                                </div>
                                <p className="card-subtitle">{item.category} • {item.price}</p>
                                <div className="card-footer">
                                    <MapPin size={11} />
                                    <span>{item.location}</span>
                                    {item.distanceKm && <span style={{ marginLeft: 'auto', fontSize: '10px', color: '#888' }}>{item.distanceKm} km</span>}
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            {/* Popular Play Facilities */}
            <section className="trending-section">
                <div className="section-header">
                    <h2>Get Active: Play Venues</h2>
                    <Link to="/play" className="see-all">See All <ChevronRight size={16} /></Link>
                </div>
                <div className="horizontal-scroll" ref={playScrollRef}>
                    {trendingPlay.map((item) => (
                        <Link to={`/play/${item.id}`} key={item.id} className="card">
                            <img src={item.image} alt={item.title} className="card-image" />
                            <div className="card-content">
                                <div className="card-header">
                                    <h3>{item.title}</h3>
                                    <div className="card-rating">
                                        <Star size={11} fill="#6366F1" stroke="none" />
                                        <span style={{ fontWeight: 700, fontSize: '11px', color: '#6366F1' }}>{item.rating}</span>
                                        <span style={{ fontSize: '10px', color: 'var(--color-gray)' }}>({item.reviewsCount})</span>
                                    </div>
                                </div>
                                <p className="card-subtitle">{item.category} • {item.price}</p>
                                <div className="card-footer">
                                    <MapPin size={11} />
                                    <span>{item.location}</span>
                                    {item.distanceKm && <span style={{ marginLeft: 'auto', fontSize: '10px', color: '#888' }}>{item.distanceKm} km</span>}
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Home;
