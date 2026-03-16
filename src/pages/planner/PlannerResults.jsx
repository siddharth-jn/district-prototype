import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, Car, GripVertical, Star, AlertTriangle, ExternalLink } from 'lucide-react';
import { generateItineraries } from '../../utils/plannerLogic';
import '../../styles/Planner.css';

const PlannerResults = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const prefs = location.state?.preferences;

    const [loading, setLoading] = useState(true);
    const [itineraries, setItineraries] = useState([]);
    const [activeTab, setActiveTab] = useState(0);
    const [draggedItemIndex, setDraggedItemIndex] = useState(null);

    useEffect(() => {
        if (!prefs) { navigate('/planner'); return; }
        const timer = setTimeout(() => {
            setItineraries(generateItineraries(prefs));
            setLoading(false);
        }, 1500);
        return () => clearTimeout(timer);
    }, [prefs, navigate]);

    const onDragStart = (e, index) => {
        setDraggedItemIndex(index);
        e.dataTransfer.effectAllowed = 'move';
        e.target.style.opacity = '0.5';
    };
    const onDragEnd = (e) => { e.target.style.opacity = '1'; setDraggedItemIndex(null); };
    const onDragOver = (e) => e.preventDefault();
    const onDrop = (e, dropIndex) => {
        e.preventDefault();
        if (draggedItemIndex === null || draggedItemIndex === dropIndex) return;
        const updated = [...itineraries];
        const tl = [...updated[activeTab].timeline];
        const [dragged] = tl.splice(draggedItemIndex, 1);
        tl.splice(dropIndex, 0, dragged);
        for (let i = 0; i < tl.length - 1; i++) tl[i].travelTime = `${Math.floor(Math.random() * 20) + 10} mins drive`;
        tl[tl.length - 1].travelTime = null;
        updated[activeTab].timeline = tl;
        setItineraries(updated);
    };

    if (loading) {
        return (
            <div className="planner-page">
                <div className="planner-header">
                    <button className="icon-btn" onClick={() => navigate(-1)}><ArrowLeft size={24} /></button>
                    <h2>Crafting Itineraries...</h2>
                    <div style={{ width: 24 }}></div>
                </div>
                <div className="results-loading">
                    <div className="spinner"></div>
                    <p>Aggregating friend reviews...</p>
                </div>
            </div>
        );
    }

    if (!itineraries || itineraries.length === 0) {
        return <div className="planner-page"><h2>No results found.</h2></div>;
    }

    const currentItinerary = itineraries[activeTab];
    const { warnings = [], overBudget, groupBudget, totalPrice } = currentItinerary;

    return (
        <div className="planner-page">
            <div className="planner-header sticky">
                <button className="icon-btn" onClick={() => navigate(-1)}><ArrowLeft size={24} /></button>
                <h2>Your Curated Plans</h2>
                <div style={{ width: 24 }}></div>
            </div>

            {/* ── Budget warnings ── */}
            {warnings.length > 0 && (
                <div className="radius-warnings">
                    {warnings.map((w, i) => (
                        <div key={i} className="radius-warning-item">
                            <AlertTriangle size={14} />
                            <span>{w}</span>
                        </div>
                    ))}
                </div>
            )}

            {/* ── Itinerary Option Tabs ── */}
            <div className="tabs-header">
                {itineraries.map((it, idx) => (
                    <button
                        key={it.id}
                        className={`tab-btn ${activeTab === idx ? 'active' : ''}`}
                        onClick={() => setActiveTab(idx)}
                    >
                        Option {idx + 1}
                        <span style={{ display: 'block', fontSize: 11, fontWeight: 500, opacity: 0.85 }}>{it.totalPrice}</span>
                    </button>
                ))}
            </div>

            {/* ── Budget Summary Block ── */}
            <div style={{
                margin: '0 16px 20px',
                padding: '16px',
                borderRadius: 16,
                background: '#fff',
                border: '1px solid var(--color-border)',
                boxShadow: '0 4px 12px rgba(0,0,0,0.03)'
            }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
                    <h3 style={{ margin: 0, fontSize: 16, fontWeight: 700 }}>Est. Budget ({prefs?.memberCount} people)</h3>
                    {groupBudget ? (
                        <span style={{ fontSize: 13, fontWeight: 700, color: overBudget ? '#E23744' : '#2e7d32', padding: '4px 8px', background: overBudget ? '#fff0f2' : '#e8f5e9', borderRadius: 12 }}>
                            {overBudget ? 'Exceeds budget limits' : 'Within budget limits'}
                        </span>
                    ) : null}
                </div>

                {/* Sub-item cost breakdown */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '16px' }}>
                    {currentItinerary.timeline.map(t => t.estimatedCost > 0 ? (
                        <div key={`cost_${t.id}`} style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13, color: '#555' }}>
                            <span>{t.titlePrefix.split(' ')[1]}</span>
                            <span style={{ fontWeight: 500 }}>₹{t.estimatedCost.toLocaleString()}</span>
                        </div>
                    ) : null)}
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: 12, borderTop: '1px dashed var(--color-border)', fontWeight: 700, fontSize: 16 }}>
                    <span>Total Estimate</span>
                    <span>{totalPrice}</span>
                </div>
            </div>

            {/* ── Timeline ── */}
            <div className="itinerary-container">
                <p className="intro-text" style={{ marginBottom: '24px' }}>
                    Drag to reorder. Tap any item to explore or book.
                </p>

                <div className="timeline">
                    {currentItinerary.timeline.map((event, index) => {
                        const routeMap = { restaurant: 'dining', movie: 'movies', event: 'events', activity: 'activities', store: 'stores', play: 'play' };
                        const itemPath = event.linkTo || `/${routeMap[event.itemType] || event.itemType}/${event.item?.id}`;
                        return (
                            <React.Fragment key={event.id}>
                                <div
                                    className="timeline-item"
                                    draggable
                                    onDragStart={(e) => onDragStart(e, index)}
                                    onDragEnd={onDragEnd}
                                    onDragOver={onDragOver}
                                    onDrop={(e) => onDrop(e, index)}
                                >
                                    <GripVertical className="drag-handle" size={20} />
                                    <div className="timeline-node"></div>

                                    <div className="timeline-content">
                                        <div className="timeline-time">{event.startTime} – {event.endTime}</div>
                                        <div className="timeline-prefix">{event.titlePrefix}</div>

                                        {/* Clickable card links to detail view */}
                                        <Link to={itemPath} className="timeline-card-inner timeline-card-link">
                                            <img
                                                src={event.item?.image}
                                                alt={event.item?.name || event.item?.title}
                                                className="timeline-img"
                                            />
                                            <div className="timeline-info">
                                                <h4>{event.item?.name || event.item?.title}</h4>
                                                <div className="timeline-meta">
                                                    {event.item?.category || event.item?.cuisine || event.itemType}
                                                    {event.item?.distanceKm && (
                                                        <span style={{ marginLeft: 6, opacity: 0.7 }}>
                                                            · {event.item.distanceKm} km away
                                                        </span>
                                                    )}
                                                </div>
                                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 4 }}>
                                                    <div style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 13, fontWeight: 'bold' }}>
                                                        {event.item?.rating} <Star size={12} fill="#E23744" stroke="none" />
                                                    </div>
                                                    {event.estimatedCost > 0 && (
                                                        <span style={{ fontSize: 12, color: 'var(--color-brand)', fontWeight: 700 }}>
                                                            ~₹{event.estimatedCost.toLocaleString()}
                                                        </span>
                                                    )}
                                                </div>
                                            </div>
                                            <ExternalLink size={14} style={{ flexShrink: 0, color: '#bbb' }} />
                                        </Link>
                                    </div>
                                </div>

                                {event.travelTime && (
                                    <div className="travel-node">
                                        <Car size={16} /> <span>{event.travelTime}</span>
                                    </div>
                                )}
                            </React.Fragment>
                        );
                    })}
                </div>

                <div className="planner-footer">
                    <button
                        className="btn-primary large"
                        onClick={() => navigate('/planner/checkout', { state: { itinerary: currentItinerary } })}
                    >
                        Book Complete Itinerary ({totalPrice})
                    </button>
                </div>
            </div>
            <div style={{ height: '60px' }}></div>
        </div>
    );
};

export default PlannerResults;
