import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Trash2, CalendarDays, MapPin } from 'lucide-react';
import '../../styles/Planner.css';

const STORAGE_KEY = 'district_saved_itineraries';

const SavedItineraries = () => {
    const navigate = useNavigate();
    const [saved, setSaved] = useState([]);

    useEffect(() => {
        const raw = localStorage.getItem(STORAGE_KEY);
        setSaved(raw ? JSON.parse(raw) : []);
    }, []);

    const handleDelete = (id) => {
        const updated = saved.filter(s => s.id !== id);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
        setSaved(updated);
    };

    return (
        <div className="planner-page">
            <div className="planner-header sticky">
                <button className="icon-btn" onClick={() => navigate(-1)}>
                    <ArrowLeft size={24} />
                </button>
                <h2>Saved Itineraries</h2>
                <div style={{ width: 24 }} />
            </div>

            <div className="planner-form">
                {saved.length === 0 ? (
                    <div style={{
                        display: 'flex', flexDirection: 'column', alignItems: 'center',
                        justifyContent: 'center', padding: '80px 24px', gap: 16,
                        color: 'var(--color-gray)', textAlign: 'center',
                    }}>
                        <CalendarDays size={48} style={{ opacity: 0.3 }} />
                        <p style={{ margin: 0, fontSize: 15, fontWeight: 600 }}>No saved itineraries yet</p>
                        <p style={{ margin: 0, fontSize: 13 }}>
                            Generate a plan and tap "Save Itinerary" to keep it here.
                        </p>
                        <button
                            className="btn-generate"
                            style={{ marginTop: 8, width: 'auto', padding: '10px 28px' }}
                            onClick={() => navigate('/planner')}
                        >
                            Plan a Day
                        </button>
                    </div>
                ) : (
                    saved.map(entry => {
                        const { id, savedAt, itinerary } = entry;
                        const date = new Date(savedAt).toLocaleDateString('en-IN', {
                            day: 'numeric', month: 'short', year: 'numeric',
                        });
                        const stops = itinerary?.timeline?.length || 0;
                        const totalPrice = itinerary?.totalPrice || '₹0';
                        const itemNames = itinerary?.timeline
                            ?.map(t => t.item?.name || t.item?.title)
                            .filter(Boolean) || [];

                        return (
                            <div key={id} className="planner-section">
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 10 }}>
                                    <div>
                                        <div style={{ fontSize: 12, color: 'var(--color-gray)', marginBottom: 2 }}>
                                            Saved on {date}
                                        </div>
                                        <div style={{ fontWeight: 700, fontSize: 16 }}>
                                            {itinerary?.title || 'Itinerary'}
                                        </div>
                                    </div>
                                    <div style={{ textAlign: 'right' }}>
                                        <div style={{ fontWeight: 800, fontSize: 15, color: 'var(--color-brand)' }}>
                                            {totalPrice}
                                        </div>
                                        <div style={{ fontSize: 12, color: 'var(--color-gray)' }}>
                                            {stops} stop{stops !== 1 ? 's' : ''}
                                        </div>
                                    </div>
                                </div>

                                <div style={{ display: 'flex', flexDirection: 'column', gap: 4, marginBottom: 14 }}>
                                    {itemNames.map((name, idx) => (
                                        <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 13, color: 'var(--color-dark-gray)' }}>
                                            <MapPin size={11} style={{ color: 'var(--color-brand)', flexShrink: 0 }} />
                                            <span>{name}</span>
                                        </div>
                                    ))}
                                </div>

                                <div style={{ display: 'flex', gap: 8 }}>
                                    <button
                                        className="planner-pill active"
                                        style={{ flex: 1, padding: '9px 0', fontSize: 12, fontWeight: 700 }}
                                        onClick={() => navigate('/planner/results', { state: { preferences: entry.prefs } })}
                                    >
                                        View Again
                                    </button>
                                    <button
                                        className="planner-pill"
                                        style={{ padding: '9px 14px', fontSize: 12, color: '#EF4444', borderColor: '#FCA5A5' }}
                                        onClick={() => handleDelete(id)}
                                        aria-label="Delete itinerary"
                                    >
                                        <Trash2 size={14} />
                                    </button>
                                </div>
                            </div>
                        );
                    })
                )}
            </div>
            <div style={{ height: '40px' }} />
        </div>
    );
};

export default SavedItineraries;
