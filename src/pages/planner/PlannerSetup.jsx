import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ArrowLeft, Check, Users2, Sparkles, MapPin, Wallet, Dumbbell } from 'lucide-react';
import {
    cuisines, diningMoods, movieGenres, movieLanguages, eventTypes,
    storeTypes, activityCategories, sportServices
} from '../../data/mockData';
import '../../styles/Planner.css';

// Multi-select pill: clicking toggles membership in the selected array
const MultiPillSelector = ({ options, selected = [], onChange, labelKey = 'name', valKey = 'id' }) => {
    const toggle = (val) => onChange(
        selected.includes(val) ? selected.filter(v => v !== val) : [...selected, val]
    );
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

// Hardcoded day bounds — full day window, no user input needed
const DEFAULT_DAY_START = '6:00 AM';
const DEFAULT_DAY_END   = '4:00 AM';

// Breakfast rules
const BREAKFAST_CUISINES = ['south_indian', 'continental'];
const BREAKFAST_MOODS_SOUTH_INDIAN = ['cafes', 'romantic', 'family', 'fine_dining'];
const BREAKFAST_MOODS_CONTINENTAL = ['cafes'];
const LUNCH_EXCLUDED_MOODS = ['nightlife'];


const SectionCard = ({ title, children }) => (
    <div className="planner-section">
        <div className="section-title-wrapper" style={{ marginBottom: 16 }}>
            <h3 style={{ margin: 0 }}>{title}</h3>
        </div>
        <div className="section-content">{children}</div>
    </div>
);

// Compute allowed breakfast mood IDs for a set of selected cuisines
const computeAllowedBreakfastMoodIds = (selectedCuisines) => {
    const allowed = new Set();
    if (selectedCuisines.includes('continental')) BREAKFAST_MOODS_CONTINENTAL.forEach(x => allowed.add(x));
    if (selectedCuisines.some(c => c !== 'continental')) BREAKFAST_MOODS_SOUTH_INDIAN.forEach(x => allowed.add(x));
    if (selectedCuisines.length === 0) BREAKFAST_MOODS_SOUTH_INDIAN.forEach(x => allowed.add(x));
    return [...allowed];
};

const PlannerSetup = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const savedPrefs = location.state?.preferences;

    const [diningTab, setDiningTab] = useState(
        savedPrefs?.dining?.dinner?.cuisines?.length ? 'dinner'
        : savedPrefs?.dining?.lunch?.cuisines?.length ? 'lunch'
        : 'breakfast'
    );

    const [prefs, setPrefs] = useState(savedPrefs || {
        dining: {
            breakfast: { cuisines: [], moods: [] },
            lunch: { cuisines: [], moods: [] },
            dinner: { cuisines: [], moods: [] },
        },
        movies: { genres: [], languages: [] },
        events: { types: [] },
        stores: { types: [] },
        activities: { types: [] },
        play: { types: [], hours: 1 },
        memberCount: 2,
        travelRadius: 10,
        prioritization: 'district_top_picks',
        attempt: 0,
    });

    const updateDining = (meal, field, value) => {
        setPrefs(prev => ({
            ...prev,
            dining: {
                ...prev.dining,
                [meal]: { ...prev.dining[meal], [field]: value }
            }
        }));
    };

    const update = (field, value) => setPrefs(prev => ({ ...prev, [field]: value }));

    const generatePlan = () => {
        // Always reset attempt to 0; inject hardcoded day bounds
        navigate('/planner/results', {
            state: { preferences: { ...prefs, dayStart: DEFAULT_DAY_START, dayEnd: DEFAULT_DAY_END, attempt: 0 } }
        });
    };

    // Breakfast: available cuisines limited to south_indian + continental
    const breakfastCuisines = cuisines.filter(c => BREAKFAST_CUISINES.includes(c.id));

    // Breakfast moods: union of allowed moods for all currently-selected breakfast cuisines
    const breakfastMoods = diningMoods.filter(m => {
        const allowedIds = computeAllowedBreakfastMoodIds(prefs.dining.breakfast.cuisines);
        return allowedIds.includes(m.id);
    });
    const lunchMoods = diningMoods.filter(m => !LUNCH_EXCLUDED_MOODS.includes(m.id));
    const dinnerMoods = diningMoods;

    const activeCuisines = diningTab === 'breakfast' ? breakfastCuisines : cuisines;
    const activeMoods = diningTab === 'breakfast' ? breakfastMoods : diningTab === 'lunch' ? lunchMoods : dinnerMoods;

    return (
        <div className="planner-page">
            <div className="planner-header sticky">
                <button className="icon-btn" onClick={() => navigate(-1)}>
                    <ArrowLeft size={24} />
                </button>
                <h2>Plan Your Perfect Day</h2>
                <div style={{ width: 24 }}></div>
            </div>

            <div className="planner-form">
                <p className="intro-text">
                    Tell us what you're in the mood for across District, and we'll craft the perfect itinerary.
                </p>

                {/* ── Group Size ── */}
                <SectionCard title="Group Size">
                    <div className="form-group">
                        <label>How many people?</label>
                        <div className="member-counter">
                            <button onClick={() => update('memberCount', Math.max(1, prefs.memberCount - 1))}>-</button>
                            <span>{prefs.memberCount} {prefs.memberCount === 1 ? 'person' : 'people'}</span>
                            <button onClick={() => update('memberCount', prefs.memberCount + 1)}>+</button>
                        </div>
                    </div>
                </SectionCard>

                {/* ── Travel Radius ── */}
                <SectionCard title="Travel Radius">
                    <p style={{ fontSize: 13, color: '#888', marginBottom: 12 }}>
                        📍 From <strong>Andheri West, Mumbai</strong>
                    </p>
                    <div className="form-group">
                        <label>Max distance: <strong>{prefs.travelRadius} km</strong></label>
                        <input
                            type="range"
                            min={5}
                            max={30}
                            step={5}
                            value={prefs.travelRadius}
                            onChange={e => update('travelRadius', parseInt(e.target.value))}
                            style={{ width: '100%', accentColor: 'var(--color-brand)' }}
                        />
                        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11, color: '#aaa' }}>
                            <span>5 km</span>
                            <span>30 km</span>
                        </div>
                    </div>
                </SectionCard>

                {/* ── Dining ── */}
                <SectionCard title="Dining">
                    <div style={{ display: 'flex', gap: 8, marginBottom: 20 }}>
                        {[
                            { id: 'breakfast', label: '☀️ Breakfast' },
                            { id: 'lunch',     label: '🌤 Lunch' },
                            { id: 'dinner',    label: '🌙 Dinner' },
                        ].map(tab => (
                            <button
                                key={tab.id}
                                onClick={() => setDiningTab(tab.id)}
                                style={{
                                    flex: 1,
                                    padding: '9px 4px',
                                    borderRadius: 24,
                                    border: diningTab === tab.id ? 'none' : '1.5px solid #ddd',
                                    background: diningTab === tab.id ? 'var(--color-brand)' : 'transparent',
                                    color: diningTab === tab.id ? 'white' : 'var(--color-dark-gray)',
                                    fontWeight: 600,
                                    fontSize: 12,
                                    cursor: 'pointer',
                                    transition: 'all 0.2s ease',
                                }}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>

                    {diningTab === 'breakfast' && (
                        <p style={{ fontSize: 12, color: '#888', marginBottom: 12, background: '#fef9ec', padding: '8px 12px', borderRadius: 8 }}>
                            Breakfast opens at <strong>9:00 AM</strong>. Available: South Indian (all moods) · Continental (Cafe only)
                        </p>
                    )}

                    <div className="form-group">
                        <label>Cuisine</label>
                        <MultiPillSelector
                            options={activeCuisines}
                            selected={prefs.dining[diningTab].cuisines}
                            onChange={vals => {
                                updateDining(diningTab, 'cuisines', vals);
                                // For breakfast: remove moods that are no longer valid
                                if (diningTab === 'breakfast') {
                                    const allowedIds = computeAllowedBreakfastMoodIds(vals);
                                    const filteredMoods = prefs.dining.breakfast.moods.filter(m => allowedIds.includes(m));
                                    updateDining('breakfast', 'moods', filteredMoods);
                                }
                            }}
                        />
                    </div>
                    <div className="form-group">
                        <label>Vibe / Mood</label>
                        <MultiPillSelector
                            options={activeMoods}
                            selected={prefs.dining[diningTab].moods}
                            onChange={vals => updateDining(diningTab, 'moods', vals)}
                        />
                    </div>
                </SectionCard>

                {/* ── Movies ── */}
                <SectionCard title="Movies">
                    <div className="form-group">
                        <label>Genre</label>
                        <MultiPillSelector
                            options={movieGenres}
                            selected={prefs.movies.genres}
                            onChange={vals => update('movies', { ...prefs.movies, genres: vals })}
                        />
                    </div>
                    <div className="form-group">
                        <label>Language</label>
                        <MultiPillSelector
                            options={movieLanguages}
                            selected={prefs.movies.languages}
                            onChange={vals => update('movies', { ...prefs.movies, languages: vals })}
                        />
                    </div>
                </SectionCard>

                {/* ── Live Events ── */}
                <SectionCard title="Live Events">
                    <div className="form-group">
                        <label>Event Type</label>
                        <MultiPillSelector
                            options={eventTypes}
                            selected={prefs.events.types}
                            onChange={vals => update('events', { ...prefs.events, types: vals })}
                        />
                    </div>
                </SectionCard>

                {/* ── Activities ── */}
                <SectionCard title="Activities">
                    <div className="form-group">
                        <label>Activity Type</label>
                        <MultiPillSelector
                            options={activityCategories}
                            selected={prefs.activities.types}
                            onChange={vals => update('activities', { ...prefs.activities, types: vals })}
                        />
                    </div>
                </SectionCard>

                {/* ── Play ── */}
                <SectionCard title="Play">
                    <div className="form-group">
                        <label>Sport</label>
                        <MultiPillSelector
                            options={sportServices}
                            selected={prefs.play.types}
                            onChange={vals => update('play', { ...prefs.play, types: vals })}
                        />
                    </div>
                    <div className="form-group">
                        <label>How many hours do you want to play?</label>
                        <div className="member-counter">
                            <button onClick={() => update('play', { ...prefs.play, hours: Math.max(1, prefs.play.hours - 1) })}>-</button>
                            <span>{prefs.play.hours} hr{prefs.play.hours > 1 ? 's' : ''}</span>
                            <button onClick={() => update('play', { ...prefs.play, hours: prefs.play.hours + 1 })}>+</button>
                        </div>
                    </div>
                </SectionCard>

                {/* ── Stores ── */}
                <SectionCard title="Stores">
                    <div className="form-group">
                        <label>Shopping Category</label>
                        <MultiPillSelector
                            options={storeTypes}
                            selected={prefs.stores.types}
                            onChange={vals => update('stores', { ...prefs.stores, types: vals })}
                        />
                    </div>
                </SectionCard>

                {/* ── Recommendation Engine ── */}
                <div className="planner-section">
                    <div className="planner-global-settings">
                        <h3>Prioritization Engine</h3>
                        <div className="engine-toggles">
                            <div
                                className={`engine-card ${prefs.prioritization === 'district_top_picks' ? 'active' : ''}`}
                                onClick={() => update('prioritization', 'district_top_picks')}
                            >
                                <Sparkles size={24} className="engine-icon" />
                                <h4>District Top Picks</h4>
                                <p>Prioritize universally highly-rated locations.</p>
                                {prefs.prioritization === 'district_top_picks' && <div className="engine-check"><Check size={16} /></div>}
                            </div>
                            <div
                                className={`engine-card ${prefs.prioritization === 'friends_network' ? 'active' : ''}`}
                                onClick={() => update('prioritization', 'friends_network')}
                            >
                                <Users2 size={24} className="engine-icon" />
                                <h4>Friends Network</h4>
                                <p>Prioritize highly rated places visited by friends.</p>
                                {prefs.prioritization === 'friends_network' && <div className="engine-check"><Check size={16} /></div>}
                            </div>
                            <div
                                className={`engine-card ${prefs.prioritization === 'budget_friendly' ? 'active' : ''}`}
                                onClick={() => update('prioritization', 'budget_friendly')}
                            >
                                <Wallet size={24} className="engine-icon" />
                                <h4>Budget Friendly</h4>
                                <p>Prioritize the most affordable options.</p>
                                {prefs.prioritization === 'budget_friendly' && <div className="engine-check"><Check size={16} /></div>}
                            </div>
                        </div>
                    </div>
                </div>

                {/* ── Submit ── */}
                <div className="planner-footer">
                    <button className="btn-generate" onClick={generatePlan}>
                        ✦ Generate Itinerary
                    </button>
                </div>
            </div>
            <div style={{ height: '40px' }}></div>
        </div>
    );
};

export default PlannerSetup;
