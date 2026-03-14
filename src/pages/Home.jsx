import React from 'react';
import { Link } from 'react-router-dom';
import { categories, restaurants, movies, events, stores, activities, playFacilities } from '../data/mockData';
import { ChevronRight, Star, MapPin, Calendar, Clock } from 'lucide-react';
import '../styles/Home.css';

const Home = () => {
    return (
        <div className="home-page">
            {/* Hero Section */}
            <section className="hero-section">
                <h1>District</h1>
                <p>Your city, your vibes, your way.</p>
            </section>

            {/* Planner CTA */}
            <section style={{ padding: '0 16px', marginBottom: '24px' }}>
                <Link to="/planner" style={{ textDecoration: 'none' }}>
                    <div style={{
                        background: 'linear-gradient(135deg, #e23744 0%, #b32b35 100%)',
                        borderRadius: '16px',
                        padding: '24px',
                        color: 'white',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        boxShadow: '0 8px 16px rgba(226, 55, 68, 0.2)'
                    }}>
                        <h2 style={{ fontSize: '20px', fontWeight: '700', margin: '0 0 8px 0' }}>Plan your perfect day out</h2>
                        <p style={{ margin: 0, fontSize: '14px', opacity: 0.9 }}>Input your mood, get a curated itinerary built with friends' reviews.</p>
                        <div style={{ marginTop: '16px', display: 'flex', gap: '8px', alignItems: 'center', fontSize: '14px', fontWeight: '600' }}>
                            Start Planning <ChevronRight size={16} />
                        </div>
                    </div>
                </Link>
            </section>

            {/* Categories */}
            <section className="categories-section">
                <h2>What are you in the mood for?</h2>
                <div className="categories-grid">
                    {categories.map((category) => (
                        <Link to={`/${category.id}`} key={category.id} className="category-card">
                            <div className="category-icon-wrapper">
                                <div className="category-name">{category.name}</div>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            {/* Trending Restaurants */}
            <section className="trending-section">
                <div className="section-header">
                    <h2>Trending in Dining</h2>
                    <Link to="/dining" className="see-all">See All <ChevronRight size={16} /></Link>
                </div>
                <div className="horizontal-scroll">
                    {[...restaurants].slice(0, 10).map((item) => (
                        <Link to={`/dining/${item.id}`} key={item.id} className="card">
                            <img src={item.image} alt={item.name} className="card-image" />
                            <div className="card-content">
                                <div className="card-header">
                                    <h3>{item.name}</h3>
                                    <div className="rating">
                                        <span className="rating-value">{item.rating}</span>
                                        <Star size={12} fill="white" className="star-icon" />
                                        <span style={{ fontSize: '10px', marginLeft: '4px', opacity: 0.8 }}>({item.reviewsCount})</span>
                                    </div>
                                </div>
                                <p className="card-subtitle">{item.cuisine} • {item.price}</p>
                                <div className="card-footer">
                                    <MapPin size={14} />
                                    <span>{item.distance}</span>
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
                <div className="horizontal-scroll">
                    {[...movies].slice(0, 10).map((item) => (
                        <Link to={`/movies/${item.id}`} key={item.id} className="movie-card">
                            <img src={item.image} alt={item.title} className="movie-poster" />
                            <div className="movie-info">
                                <h3>{item.title}</h3>
                                <p>{item.genre}</p>
                                <div className="rating-pill">
                                    <Star size={10} fill="#E23744" stroke="none" />
                                    <span>{item.rating}</span>
                                    <span style={{ fontSize: '10px', color: 'var(--color-gray)', marginLeft: '4px' }}>({item.reviewsCount})</span>
                                </div>
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
                <div className="horizontal-scroll">
                    {/* Events might not all have numerical ratings, fallback sorting handled loosely, or rely on original order if no rating */}
                    {[...events].sort((a, b) => (b.rating || 0) - (a.rating || 0)).slice(0, 10).map((item) => (
                        <Link to={`/events/${item.id}`} key={item.id} className="card">
                            <img src={item.image} alt={item.title} className="card-image" />
                            <div className="card-content">
                                <div className="card-header">
                                    <h3 title={item.title}>{item.title}</h3>
                                    <div className="rating" style={{ backgroundColor: 'var(--color-brand)' }}>
                                        <span className="rating-value">{item.date}</span>
                                    </div>
                                </div>
                                <p className="card-subtitle">{item.category} • {item.price}</p>
                                <div className="card-footer">
                                    <MapPin size={14} />
                                    <span>{item.venue}</span>
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
                <div className="horizontal-scroll">
                    {[...stores].slice(0, 10).map((item) => (
                        <Link to={`/stores/${item.id}`} key={item.id} className="card">
                            <img src={item.image} alt={item.title} className="card-image" />
                            <div className="card-content">
                                <div className="card-header">
                                    <h3>{item.title}</h3>
                                    <div className="rating">
                                        <span className="rating-value">{item.rating}</span>
                                        <Star size={12} fill="white" className="star-icon" />
                                        <span style={{ fontSize: '10px', marginLeft: '4px', opacity: 0.8 }}>({item.reviewsCount})</span>
                                    </div>
                                </div>
                                <p className="card-subtitle">{item.category} • {item.offer}</p>
                                <div className="card-footer">
                                    <MapPin size={14} />
                                    <span>{item.location}</span>
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
                <div className="horizontal-scroll">
                    {[...activities].slice(0, 10).map((item) => (
                        <Link to={`/activities/${item.id}`} key={item.id} className="card">
                            <img src={item.image} alt={item.title} className="card-image" />
                            <div className="card-content">
                                <div className="card-header">
                                    <h3>{item.title}</h3>
                                    <div className="rating">
                                        <span className="rating-value">{item.rating}</span>
                                        <Star size={12} fill="white" className="star-icon" />
                                        <span style={{ fontSize: '10px', marginLeft: '4px', opacity: 0.8 }}>({item.reviewsCount})</span>
                                    </div>
                                </div>
                                <p className="card-subtitle">{item.category} • {item.price}</p>
                                <div className="card-footer">
                                    <MapPin size={14} />
                                    <span>{item.location}</span>
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
                <div className="horizontal-scroll">
                    {[...playFacilities].slice(0, 10).map((item) => (
                        <Link to={`/play/${item.id}`} key={item.id} className="card">
                            <img src={item.image} alt={item.title} className="card-image" />
                            <div className="card-content">
                                <div className="card-header">
                                    <h3>{item.title}</h3>
                                    <div className="rating">
                                        <span className="rating-value">{item.rating}</span>
                                        <Star size={12} fill="white" className="star-icon" />
                                        <span style={{ fontSize: '10px', marginLeft: '4px', opacity: 0.8 }}>({item.reviewsCount})</span>
                                    </div>
                                </div>
                                <p className="card-subtitle">{item.category} • {item.price}</p>
                                <div className="card-footer">
                                    <MapPin size={14} />
                                    <span>{item.location}</span>
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
