import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ArrowLeft, Car, GripVertical, Star } from 'lucide-react';
import { generateItineraries } from '../../utils/plannerLogic';
import '../../styles/Planner.css';

const PlannerResults = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const prefs = location.state?.preferences;

    const [loading, setLoading] = useState(true);
    const [itineraries, setItineraries] = useState([]);
    const [activeTab, setActiveTab] = useState(0);

    // Timeline Drag & Drop State
    const [draggedItemIndex, setDraggedItemIndex] = useState(null);

    useEffect(() => {
        if (!prefs) {
            navigate('/planner');
            return;
        }

        // Simulate network call
        const timer = setTimeout(() => {
            const results = generateItineraries(prefs);
            setItineraries(results);
            setLoading(false);
        }, 1500);

        return () => clearTimeout(timer);
    }, [prefs, navigate]);

    // Drag and Drop Handlers
    const onDragStart = (e, index) => {
        setDraggedItemIndex(index);
        e.dataTransfer.effectAllowed = "move";
        // Make it slightly transparent while dragging
        e.target.style.opacity = '0.5';
    };

    const onDragEnd = (e) => {
        e.target.style.opacity = '1';
        setDraggedItemIndex(null);
    };

    const onDragOver = (e) => {
        e.preventDefault(); // Necessary to allow dropping
    };

    const onDrop = (e, dropIndex) => {
        e.preventDefault();
        if (draggedItemIndex === null || draggedItemIndex === dropIndex) return;

        // Clone current itinerary
        const updatedItineraries = [...itineraries];
        const currentTimeline = [...updatedItineraries[activeTab].timeline];

        // Swap the items
        const draggedItem = currentTimeline[draggedItemIndex];
        currentTimeline.splice(draggedItemIndex, 1);
        currentTimeline.splice(dropIndex, 0, draggedItem);

        // Recalculate mock travel times (just shuffling)
        // In a real app we'd call a map API here again
        for (let i = 0; i < currentTimeline.length; i++) {
            if (i < currentTimeline.length - 1) {
                currentTimeline[i].travelTime = `${Math.floor(Math.random() * 20) + 10} mins drive`;
            } else {
                currentTimeline[i].travelTime = null;
            }
        }

        updatedItineraries[activeTab].timeline = currentTimeline;
        setItineraries(updatedItineraries);
    };

    if (loading) {
        return (
            <div className="planner-page">
                <div className="planner-header">
                    <button className="icon-btn" onClick={() => navigate(-1)}>
                        <ArrowLeft size={24} />
                    </button>
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
        return <div className="planner-page"><h2>No results found.</h2></div>
    }

    const currentItinerary = itineraries[activeTab];

    return (
        <div className="planner-page">
            <div className="planner-header sticky">
                <button className="icon-btn" onClick={() => navigate(-1)}>
                    <ArrowLeft size={24} />
                </button>
                <h2>Your Curated Plans</h2>
                <div style={{ width: 24 }}></div>
            </div>

            {/* Tabs */}
            <div className="tabs-header">
                {itineraries.map((it, idx) => (
                    <button
                        key={it.id}
                        className={`tab-btn ${activeTab === idx ? 'active' : ''}`}
                        onClick={() => setActiveTab(idx)}
                    >
                        Option {idx + 1} • {it.totalPrice}
                    </button>
                ))}
            </div>

            {/* Timeline */}
            <div className="itinerary-container">
                <p className="intro-text" style={{ marginBottom: '32px' }}>
                    Drag and drop items to customize your timeline. We've verified capacities and timings for you.
                </p>

                <div className="timeline">
                    {currentItinerary.timeline.map((event, index) => (
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
                                    <div className="timeline-time">{event.startTime} - {event.endTime}</div>
                                    <div className="timeline-prefix">{event.titlePrefix}</div>

                                    <div className="timeline-card-inner">
                                        <img src={event.item.image} alt={event.item.name || event.item.title} className="timeline-img" />
                                        <div className="timeline-info">
                                            <h4>{event.item.name || event.item.title}</h4>
                                            <div className="timeline-meta">{event.item.category || event.item.cuisine || event.itemType}</div>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '13px', fontWeight: 'bold' }}>
                                                {event.item.rating} <Star size={12} fill="var(--color-primary)" stroke="none" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Travel Node */}
                            {event.travelTime && (
                                <div className="travel-node">
                                    <Car size={16} /> <span>{event.travelTime}</span>
                                </div>
                            )}
                        </React.Fragment>
                    ))}
                </div>

                <div className="planner-footer">
                    <button
                        className="btn-primary large"
                        onClick={() => navigate('/planner/checkout', { state: { itinerary: currentItinerary } })}
                    >
                        Book Complete Itinerary ({currentItinerary.totalPrice})
                    </button>
                </div>
            </div>
            <div style={{ height: '60px' }}></div>
        </div>
    );
};

export default PlannerResults;
