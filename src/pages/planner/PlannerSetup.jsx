import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Check, Users2, Sparkles, Clock, MapPin, Wallet, Coffee, Sun, Moon, Dumbbell } from 'lucide-react';
import {
    cuisines, diningMoods, movieGenres, eventTypes,
    storeTypes, activityCategories, sportServices
} from '../../data/mockData';
import '../../styles/Planner.css';

const PillSelector = ({ options, selected, onChange, labelKey = 'name', valKey = 'id' }) => {
    const toggle = (val) => {
        if (selected.includes(val)) onChange(selected.filter(i => i !== val));
        else onChange([...selected, val]);
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

// Breakfast rule: South Indian → cafe + romantic + family + fine_dining moods
//                Continental  → cafe mood ONLY
const BREAKFAST_CUISINES = ['south_indian', 'continental'];
const BREAKFAST_MOODS_SOUTH_INDIAN = ['cafes', 'romantic', 'family', 'fine_dining'];
const BREAKFAST_MOODS_CONTINENTAL = ['cafes'];
const LUNCH_EXCLUDED_MOODS = ['nightlife'];

const TIME_OPTIONS = ['7:00 AM','8:00 AM','9:00 AM','10:00 AM','11:00 AM','12:00 PM',
    '1:00 PM','2:00 PM','3:00 PM','4:00 PM','5:00 PM','6:00 PM',
    '7:00 PM','8:00 PM','9:00 PM','10:00 PM','11:00 PM','12:00 AM'];

const SectionCard = ({ title, icon, children }) => (
    <div className="planner-section">
        <div className="section-title-wrapper" style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
            {icon}
            <h3 style={{ margin: 0 }}>{title}</h3>
        </div>
        <div className="section-content">{children}</div>
    </div>
);

const PlannerSetup = () => {
    const navigate = useNavigate();
    const [diningTab, setDiningTab] = useState('breakfast'); // breakfast | lunch | dinner

    const [prefs, setPrefs] = useState({
        dining: {
            breakfast: { cuisines: [], moods: [] },
            lunch: { cuisines: [], moods: [] },
            dinner: { cuisines: [], moods: [] },
        },
        movies: { genres: [] },
        events: { types: [] },
        stores: { types: [] },
        activities: { types: [] },
        play: { types: [], hours: 1 },
        memberCount: 2,
        budget: '5000',
        dayStart: '10:00 AM',
        dayEnd: '10:00 PM',
        travelRadius: 10,
        prioritization: 'district_top_picks', // 'district_top_picks', 'friends_network', 'budget_friendly'
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
        navigate('/planner/results', { state: { preferences: prefs } });
    };

    // Compute mood options based on active dining tab
    const breakfastMoods = diningMoods.filter(m => {
        const hasSouthIndian = prefs.dining.breakfast.cuisines.includes('south_indian');
        const hasContinental = prefs.dining.breakfast.cuisines.includes('continental');
        if (!hasSouthIndian && !hasContinental) {
            // Show all breakfast-compatible moods
            return [...BREAKFAST_MOODS_SOUTH_INDIAN].includes(m.id);
        }
        if (hasSouthIndian && hasContinental) {
            return BREAKFAST_MOODS_SOUTH_INDIAN.includes(m.id);
        }
        if (hasContinental && !hasSouthIndian) return BREAKFAST_MOODS_CONTINENTAL.includes(m.id);
        return BREAKFAST_MOODS_SOUTH_INDIAN.includes(m.id);
    });
    const lunchMoods = diningMoods.filter(m => !LUNCH_EXCLUDED_MOODS.includes(m.id));
    const dinnerMoods = diningMoods;
    const breakfastCuisines = cuisines.filter(c => BREAKFAST_CUISINES.includes(c.id));

    const activeMoods = diningTab === 'breakfast' ? breakfastMoods : diningTab === 'lunch' ? lunchMoods : dinnerMoods;
    const activeCuisines = diningTab === 'breakfast' ? breakfastCuisines : cuisines;

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

                {/* ── Day Timing ── */}
                <SectionCard title="When's your day?" icon={<Clock size={20} color="var(--color-brand)" />}>
                    <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                        <div className="form-group" style={{ flex: 1, minWidth: 140 }}>
                            <label>Day Starts</label>
                            <select
                                className="planner-select"
                                value={prefs.dayStart}
                                onChange={e => update('dayStart', e.target.value)}
                            >
                                {TIME_OPTIONS.map(t => <option key={t}>{t}</option>)}
                            </select>
                        </div>
                        <div className="form-group" style={{ flex: 1, minWidth: 140 }}>
                            <label>Day Ends</label>
                            <select
                                className="planner-select"
                                value={prefs.dayEnd}
                                onChange={e => update('dayEnd', e.target.value)}
                            >
                                {TIME_OPTIONS.map(t => <option key={t}>{t}</option>)}
                            </select>
                        </div>
                    </div>
                </SectionCard>

                {/* ── Group Size + Budget ── */}
                <SectionCard title="Group & Budget" icon={<Wallet size={20} color="var(--color-brand)" />}>
                    <div className="form-group">
                        <label>Group Size</label>
                        <div className="member-counter">
                            <button onClick={() => update('memberCount', Math.max(1, prefs.memberCount - 1))}>-</button>
                            <span>{prefs.memberCount} {prefs.memberCount === 1 ? 'person' : 'people'}</span>
                            <button onClick={() => update('memberCount', prefs.memberCount + 1)}>+</button>
                        </div>
                    </div>
                    <div className="form-group">
                        <label>Total Budget (per person, optional)</label>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                            <span style={{ fontSize: 18, fontWeight: 700 }}>₹</span>
                            <input
                                type="number"
                                className="planner-input"
                                placeholder="e.g. 2000"
                                value={prefs.budget}
                                onChange={e => update('budget', e.target.value)}
                            />
                        </div>
                        {prefs.budget && (
                            <p style={{ fontSize: 12, color: '#888', marginTop: 4 }}>
                                Estimated group budget: ₹{(parseInt(prefs.budget) * prefs.memberCount).toLocaleString()}
                            </p>
                        )}
                    </div>
                </SectionCard>

                {/* ── Travel Radius ── */}
                <SectionCard title="Travel Radius" icon={<MapPin size={20} color="var(--color-brand)" />}>
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
                <SectionCard title="Dining" icon={null}>
                    {/* Breakfast / Lunch / Dinner Tabs */}
                    <div style={{ display: 'flex', gap: 8, marginBottom: 20 }}>
                        {[
                            { id: 'breakfast', label: '☀️ Breakfast', icon: Coffee },
                            { id: 'lunch', label: '🌤 Lunch', icon: Sun },
                            { id: 'dinner', label: '🌙 Dinner', icon: Moon },
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
                        <label>Cuisines</label>
                        <PillSelector
                            options={activeCuisines}
                            selected={prefs.dining[diningTab].cuisines}
                            onChange={val => updateDining(diningTab, 'cuisines', val)}
                        />
                    </div>
                    <div className="form-group">
                        <label>Vibe / Mood</label>
                        <PillSelector
                            options={activeMoods}
                            selected={prefs.dining[diningTab].moods}
                            onChange={val => updateDining(diningTab, 'moods', val)}
                        />
                    </div>
                </SectionCard>

                {/* ── Movies ── */}
                <SectionCard title="Movies" icon={null}>
                    <div className="form-group">
                        <label>Preferred Genres</label>
                        <PillSelector
                            options={movieGenres}
                            selected={prefs.movies.genres}
                            onChange={val => update('movies', { ...prefs.movies, genres: val })}
                        />
                    </div>
                </SectionCard>

                {/* ── Live Events ── */}
                <SectionCard title="Live Events" icon={null}>
                    <div className="form-group">
                        <label>Event Types</label>
                        <PillSelector
                            options={eventTypes}
                            selected={prefs.events.types}
                            onChange={val => update('events', { ...prefs.events, types: val })}
                        />
                    </div>
                </SectionCard>

                {/* ── Activities ── */}
                <SectionCard title="Activities" icon={null}>
                    <div className="form-group">
                        <label>Activity Types</label>
                        <PillSelector
                            options={activityCategories}
                            selected={prefs.activities.types}
                            onChange={val => update('activities', { ...prefs.activities, types: val })}
                        />
                    </div>
                </SectionCard>

                {/* ── Play ── */}
                <SectionCard title="Play" icon={<Dumbbell size={20} color="var(--color-brand)" />}>
                    <div className="form-group">
                        <label>Sports</label>
                        <PillSelector
                            options={sportServices}
                            selected={prefs.play.types}
                            onChange={val => update('play', { ...prefs.play, types: val })}
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
                <SectionCard title="Stores" icon={null}>
                    <div className="form-group">
                        <label>Shopping Categories</label>
                        <PillSelector
                            options={storeTypes}
                            selected={prefs.stores.types}
                            onChange={val => update('stores', { ...prefs.stores, types: val })}
                        />
                    </div>
                </SectionCard>

                {/* ── Recommendation Engine ── */}
                <div className="planner-global-settings">
                    <h3>Prioritization Engine</h3>
                    <div className="engine-toggles">
                        {/* Option 1: District Top Picks */}
                        <div
                            className={`engine-card ${prefs.prioritization === 'district_top_picks' ? 'active' : ''}`}
                            onClick={() => update('prioritization', 'district_top_picks')}
                        >
                            <Sparkles size={24} className="engine-icon" />
                            <h4>District Top Picks</h4>
                            <p>Prioritize universally highly-rated locations.</p>
                            {prefs.prioritization === 'district_top_picks' && <div className="engine-check"><Check size={16} /></div>}
                        </div>

                        {/* Option 2: Friends Network */}
                        <div
                            className={`engine-card ${prefs.prioritization === 'friends_network' ? 'active' : ''}`}
                            onClick={() => update('prioritization', 'friends_network')}
                        >
                            <Users2 size={24} className="engine-icon" />
                            <h4>Friends Network</h4>
                            <p>Prioritize highly rated places visited by friends.</p>
                            {prefs.prioritization === 'friends_network' && <div className="engine-check"><Check size={16} /></div>}
                        </div>

                        {/* Option 3: Budget Friendly */}
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

                {/* ── Submit ── */}
                <div className="planner-footer">
                    <button className="btn-primary large" onClick={generatePlan}>
                        Generate Itineraries
                    </button>
                </div>
            </div>
            <div style={{ height: '40px' }}></div>
        </div>
    );
};

export default PlannerSetup;
