import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Check, Users, Users2, ShieldCheck, Sparkles } from 'lucide-react';
import {
    cuisines, diningMoods, movieGenres, eventTypes,
    storeTypes, activityCategories, sportServices
} from '../../data/mockData';
import '../../styles/Planner.css'; // We will create this

const PillSelector = ({ options, selected, onChange, labelKey = 'name', valKey = 'id' }) => {
    const toggle = (val) => {
        if (selected.includes(val)) {
            onChange(selected.filter(i => i !== val));
        } else {
            onChange([...selected, val]);
        }
    };

    return (
        <div className="pill-group">
            {options.map(opt => (
                <button
                    key={opt[valKey]}
                    className={`planner-pill ${selected.includes(opt[valKey]) ? 'active' : ''}`}
                    onClick={() => toggle(opt[valKey])}
                >
                    {opt[labelKey]}
                </button>
            ))}
        </div>
    );
};

const Section = ({ title, description, isOmitted, setOmitted, children }) => {
    return (
        <div className={`planner-section ${isOmitted ? 'omitted' : ''}`}>
            <div className="section-header">
                <div className="section-title-wrapper">
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>
                <div className="toggle-wrapper" onClick={() => setOmitted(!isOmitted)}>
                    <div className={`toggle-track ${!isOmitted ? 'active' : ''}`}>
                        <div className="toggle-knob"></div>
                    </div>
                    <span>{isOmitted ? 'Omitted' : 'Include'}</span>
                </div>
            </div>
            {!isOmitted && (
                <div className="section-content">
                    {children}
                </div>
            )}
        </div>
    );
};

const PlannerSetup = () => {
    const navigate = useNavigate();

    // State for all form selections
    const [prefs, setPrefs] = useState({
        dining: { omit: false, cuisines: [], moods: [] },
        movies: { omit: false, genres: [] },
        events: { omit: true, types: [] }, // Omit by default so users have to opt-in to everything
        stores: { omit: true, types: [] },
        activities: { omit: true, types: [] },
        play: { omit: true, types: [] },
        memberCount: 2,
        useFriendReviews: true
    });

    const handlePrefChange = (category, field, value) => {
        setPrefs(prev => ({
            ...prev,
            [category]: { ...prev[category], [field]: value }
        }));
    };

    const handleNestedChange = (category, field, value) => {
        handlePrefChange(category, field, value);
    };

    // Calculate if they have omitted literally everything
    const isAllOmitted = prefs.dining.omit && prefs.movies.omit && prefs.events.omit &&
        prefs.stores.omit && prefs.activities.omit && prefs.play.omit;

    const generatePlan = () => {
        if (isAllOmitted) {
            alert("Please include at least one section to plan your day!");
            return;
        }
        // Navigate and pass state to results
        navigate('/planner/results', { state: { preferences: prefs } });
    };

    return (
        <div className="planner-page">
            <div className="planner-header sticky">
                <button className="icon-btn" onClick={() => navigate(-1)}>
                    <ArrowLeft size={24} />
                </button>
                <h2>Plan Your Perfect Day</h2>
                <div style={{ width: 24 }}></div> {/* Spacer */}
            </div>

            <div className="planner-form">
                <p className="intro-text">
                    Tell us what you're in the mood for across District, and we'll craft the perfect itinerary.
                </p>

                <Section
                    title="Dining"
                    description="Breakfast, Lunch, or Dinner"
                    isOmitted={prefs.dining.omit}
                    setOmitted={(val) => handleNestedChange('dining', 'omit', val)}
                >
                    <div className="form-group">
                        <label>Cuisines you love</label>
                        <PillSelector
                            options={cuisines}
                            selected={prefs.dining.cuisines}
                            onChange={(val) => handleNestedChange('dining', 'cuisines', val)}
                        />
                    </div>
                    <div className="form-group">
                        <label>Vibe / Mood</label>
                        <PillSelector
                            options={diningMoods}
                            selected={prefs.dining.moods}
                            onChange={(val) => handleNestedChange('dining', 'moods', val)}
                        />
                    </div>
                </Section>

                <Section
                    title="Movies"
                    description="Catch a show at the nearest cinema"
                    isOmitted={prefs.movies.omit}
                    setOmitted={(val) => handleNestedChange('movies', 'omit', val)}
                >
                    <div className="form-group">
                        <label>Preferred Genres</label>
                        <PillSelector
                            options={movieGenres}
                            selected={prefs.movies.genres}
                            onChange={(val) => handleNestedChange('movies', 'genres', val)}
                        />
                    </div>
                </Section>

                <Section
                    title="Live Events"
                    description="Music, comedy, and shows"
                    isOmitted={prefs.events.omit}
                    setOmitted={(val) => handleNestedChange('events', 'omit', val)}
                >
                    <div className="form-group">
                        <label>Event Types</label>
                        <PillSelector
                            options={eventTypes}
                            selected={prefs.events.types}
                            onChange={(val) => handleNestedChange('events', 'types', val)}
                        />
                    </div>
                </Section>

                <Section
                    title="Activities"
                    description="Fun experiences and game zones"
                    isOmitted={prefs.activities.omit}
                    setOmitted={(val) => handleNestedChange('activities', 'omit', val)}
                >
                    <div className="form-group">
                        <label>Activity Types</label>
                        <PillSelector
                            options={activityCategories}
                            selected={prefs.activities.types}
                            onChange={(val) => handleNestedChange('activities', 'types', val)}
                        />
                    </div>
                </Section>

                <Section
                    title="Play"
                    description="Book a turf or court"
                    isOmitted={prefs.play.omit}
                    setOmitted={(val) => handleNestedChange('play', 'omit', val)}
                >
                    <div className="form-group">
                        <label>Sports</label>
                        <PillSelector
                            options={sportServices}
                            selected={prefs.play.types}
                            onChange={(val) => handleNestedChange('play', 'types', val)}
                        />
                    </div>
                </Section>

                <Section
                    title="Stores"
                    description="Shopping and pampering"
                    isOmitted={prefs.stores.omit}
                    setOmitted={(val) => handleNestedChange('stores', 'omit', val)}
                >
                    <div className="form-group">
                        <label>Shopping Categories</label>
                        <PillSelector
                            options={storeTypes}
                            selected={prefs.stores.types}
                            onChange={(val) => handleNestedChange('stores', 'types', val)}
                        />
                    </div>
                </Section>

                {/* Global Settings */}
                <div className="planner-global-settings">
                    <h3>Group Size</h3>
                    <div className="member-counter">
                        <button onClick={() => setPrefs({ ...prefs, memberCount: Math.max(1, prefs.memberCount - 1) })}>-</button>
                        <span>{prefs.memberCount}</span>
                        <button onClick={() => setPrefs({ ...prefs, memberCount: prefs.memberCount + 1 })}>+</button>
                    </div>

                    <h3>Recommendation Engine</h3>
                    <div className="engine-toggles">
                        <div
                            className={`engine-card ${prefs.useFriendReviews ? 'active' : ''}`}
                            onClick={() => setPrefs({ ...prefs, useFriendReviews: true })}
                        >
                            <Users2 size={24} className="engine-icon" />
                            <h4>Friends Network</h4>
                            <p>Prioritize places your friends have visited and rated highly.</p>
                            {prefs.useFriendReviews && <div className="engine-check"><Check size={16} /></div>}
                        </div>
                        <div
                            className={`engine-card ${!prefs.useFriendReviews ? 'active' : ''}`}
                            onClick={() => setPrefs({ ...prefs, useFriendReviews: false })}
                        >
                            <Sparkles size={24} className="engine-icon" />
                            <h4>District Top Picks</h4>
                            <p>Prioritize universally highly-rated locations (4.8+).</p>
                            {!prefs.useFriendReviews && <div className="engine-check"><Check size={16} /></div>}
                        </div>
                    </div>
                </div>

                {/* Submit Action */}
                <div className="planner-footer">
                    <button
                        className={`btn-primary large ${isAllOmitted ? 'disabled' : ''}`}
                        onClick={generatePlan}
                    >
                        Generate Itineraries
                    </button>
                </div>
            </div>

            <div style={{ height: '40px' }}></div>
        </div>
    );
};

export default PlannerSetup;
