import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, Car, Star, AlertTriangle, ExternalLink, RefreshCw, Bookmark } from 'lucide-react';
import { generateItinerary } from '../../utils/plannerLogic';
import '../../styles/Planner.css';

const STORAGE_KEY = 'district_saved_itineraries';

const PlannerResults = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const prefs = location.state?.preferences;

    const [loading, setLoading] = useState(true);
    const [itinerary, setItinerary] = useState(null);
    const [toast, setToast] = useState(false);

    useEffect(() => {
        if (!prefs) { navigate('/planner'); return; }
        setLoading(true);
        const timer = setTimeout(() => {
            setItinerary(generateItinerary(prefs));
            setLoading(false);
        }, 1200);
        return () => clearTimeout(timer);
    }, [prefs, navigate]);

    const handleRegenerate = () => {
        navigate('/planner/results', {
            state: { preferences: { ...prefs, attempt: (prefs.attempt || 0) + 1 } }
        });
    };

    const handleSave = () => {
        const existing = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
        const id = `saved_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
        localStorage.setItem(STORAGE_KEY, JSON.stringify([{ id, savedAt: Date.now(), prefs, itinerary }, ...existing]));
        setToast(true);
        setTimeout(() => setToast(false), 2500);
    };

    if (loading) {
        return (
            <div className="planner-page">
                <div className="planner-header">
                    <button className="icon-btn" onClick={() => navigate(-1)}><ArrowLeft size={24} /></button>
                    <h2>Crafting Your Itinerary...</h2>
                    <div style={{ width: 24 }}></div>
                </div>
                <div className="results-loading">
                    <div className="spinner"></div>
                    <p>Finding the best picks for you...</p>
                </div>
            </div>
        );
    }

    if (!itinerary || itinerary.timeline.length === 0) {
        return (
            <div className="planner-page">
                <div className="planner-header sticky">
                    <button className="icon-btn" onClick={() => navigate('/planner', { state: { preferences: prefs } })}><ArrowLeft size={24} /></button>
                    <h2>No Results</h2>
                    <div style={{ width: 24 }}></div>
                </div>
                <div style={{ padding: '40px 24px', textAlign: 'center', color: 'var(--color-gray)' }}>
                    <p style={{ fontSize: 15, fontWeight: 600, marginBottom: 8 }}>No itinerary could be built</p>
                    <p style={{ fontSize: 13 }}>Try adjusting your preferences, expanding your travel radius, or widening your day window.</p>
                    <button className="btn-generate" style={{ marginTop: 20 }} onClick={() => navigate('/planner', { state: { preferences: prefs } })}>
                        Edit Preferences
                    </button>
                </div>
            </div>
        );
    }

    const { warnings = [], totalPrice } = itinerary;

    return (
        <div className="planner-page">
            <div className="planner-header sticky">
                <button className="icon-btn" onClick={() => navigate('/planner', { state: { preferences: prefs } })}><ArrowLeft size={24} /></button>
                <h2>Your Curated Plan</h2>
                <div style={{ width: 24 }}></div>
            </div>

            {/* ── Warnings ── */}
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

            {/* ── Action bar: Regenerate + Save ── */}
            <div style={{ display: 'flex', gap: 10, padding: '0 16px 16px' }}>
                <button
                    onClick={handleRegenerate}
                    style={{
                        flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
                        padding: '11px 0', borderRadius: 'var(--radius-full)',
                        border: '1.5px solid var(--color-brand)', background: 'transparent',
                        color: 'var(--color-brand)', fontWeight: 700, fontSize: 13, cursor: 'pointer',
                    }}
                >
                    <RefreshCw size={14} /> Regenerate
                </button>
                <button
                    onClick={handleSave}
                    style={{
                        flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
                        padding: '11px 0', borderRadius: 'var(--radius-full)',
                        border: 'none', background: 'var(--color-brand)',
                        color: 'white', fontWeight: 700, fontSize: 13, cursor: 'pointer',
                    }}
                >
                    <Bookmark size={14} /> Save Itinerary
                </button>
            </div>

            {/* ── Budget Summary ── */}
            <div style={{
                margin: '0 16px 20px', padding: '16px', borderRadius: 16,
                background: '#fff', border: '1px solid var(--color-border)',
                boxShadow: '0 4px 12px rgba(0,0,0,0.03)',
            }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
                    <h3 style={{ margin: 0, fontSize: 16, fontWeight: 700 }}>Est. Cost ({prefs?.memberCount} people)</h3>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '16px' }}>
                    {itinerary.timeline.map(t => t.estimatedCost > 0 ? (
                        <div key={`cost_${t.id}`} style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13, color: '#555' }}>
                            <span>{t.titlePrefix.split(' ').slice(1).join(' ') || t.itemType}</span>
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
                    Tap any item to explore or book.
                </p>

                <div className="timeline">
                    {itinerary.timeline.map((event) => {
                        const routeMap = { restaurant: 'dining', movie: 'movies', event: 'events', activity: 'activities', store: 'stores', play: 'play' };
                        const itemPath = event.linkTo || `/${routeMap[event.itemType] || event.itemType}/${event.item?.id}`;
                        return (
                            <React.Fragment key={event.id}>
                                <div className="timeline-item">
                                    <div className="timeline-node"></div>
                                    <div className="timeline-content">
                                        <div className="timeline-time">{event.startTime} – {event.endTime}</div>
                                        <div className="timeline-prefix">{event.titlePrefix}</div>
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
                                                        {event.item?.rating} <Star size={12} fill="#6366F1" stroke="none" />
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
                        onClick={() => navigate('/planner/checkout', { state: { itinerary } })}
                    >
                        Book Complete Itinerary ({totalPrice})
                    </button>
                </div>
            </div>

            {/* ── Save toast ── */}
            {toast && (
                <div style={{
                    position: 'fixed', bottom: 80, left: '50%', transform: 'translateX(-50%)',
                    background: 'var(--color-brand)', color: 'white', padding: '10px 22px',
                    borderRadius: 'var(--radius-full)', fontSize: 13, fontWeight: 700,
                    zIndex: 9999, boxShadow: 'var(--shadow-brand)', whiteSpace: 'nowrap',
                    animation: 'fadeIn 0.2s ease',
                }}>
                    Itinerary saved!
                </div>
            )}

            <div style={{ height: '60px' }}></div>
        </div>
    );
};

export default PlannerResults;
