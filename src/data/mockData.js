
export const categories = [
    { id: 'dining', name: 'Dining', icon: 'Utensils' },
    { id: 'movies', name: 'Movies', icon: 'Film' },
    { id: 'events', name: 'Live Events', icon: 'Ticket' },
    { id: 'stores', name: 'Stores', icon: 'ShoppingBag' },
    { id: 'activities', name: 'Activities', icon: 'Compass' },
    { id: 'play', name: 'Play', icon: 'Gamepad' }
];

export const diningMoods = [
    { id: 'drink_dine', name: 'Drink & Dine', image: 'https://images.unsplash.com/photo-1572116469696-31de0f17cc34?q=80&w=2074&auto=format&fit=crop' },
    { id: 'nightlife', name: 'Nightlife', image: 'https://images.unsplash.com/photo-1566737236500-c8ac43014a67?q=80&w=1740&auto=format&fit=crop' },
    { id: 'cafes', name: 'Cafes', image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2047&auto=format&fit=crop' },
    { id: 'romantic', name: 'Romantic Dining', image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2070&auto=format&fit=crop' },
    { id: 'family', name: 'Family Dining', image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop' },
    { id: 'fine_dining', name: 'Fine Dining', image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1974&auto=format&fit=crop' },
    { id: 'outdoor', name: 'Outdoor', image: 'https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?q=80&w=2070&auto=format&fit=crop' },
];

export const cuisines = [
    { id: 'north_indian', name: 'North Indian' },
    { id: 'south_indian', name: 'South Indian' },
    { id: 'italian', name: 'Italian' },
    { id: 'chinese', name: 'Chinese' },
    { id: 'asian', name: 'Asian' },
    { id: 'mexican', name: 'Mexican' },
    { id: 'continental', name: 'Continental' },
    { id: 'pure_veg', name: 'Pure Veg' },
];

export const restaurants = [
    // --- Drink & Dine ---
    {
        id: 'r1', priceForTwo: '₹2,800 for two', openTime: '09:00', closeTime: '00:30', distanceKm: 19.2,
        name: 'The Bombay Canteen',
        cuisine: 'Modern Indian',
        cuisines: ['north_indian', 'south_indian', 'continental'],
        mood: 'drink_dine',
        rating: 4.5, reviewsCount: '230', price: '₹₹₹',
        image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop',
        location: 'Lower Parel, Mumbai',
        distance: '19.2 km',
        offers: 'Flat 20% off',
        description: 'A celebration of everything that is Indian.',
        menu: ['https://images.unsplash.com/photo-1546069901-ec78af83f5fc?q=80&w=1000&auto=format&fit=crop'],
        gallery: ['https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop'],
        reviews: [{ name: "Sneha R.", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop", date: "2 days ago", rating: 4.7, reviewsCount: '1.2k', text: 'Absolutely loved the innovative dishes!'}, { name: "Anjali K.", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop", date: "Last week", rating: 4.5, text: "Really enjoyed the experience here. Would definitely visit again!" }, { name: "Rahul S.", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop", date: "2 days ago", rating: 4.6, text: "Really enjoyed the experience here. Would definitely visit again!" }, { name: "Anjali K.", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop", date: "Last week", rating: 4.8, text: "Really enjoyed the experience here. Would definitely visit again!" }, { name: "Arjun T.", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop", date: "Last week", rating: 4.2, text: "Really enjoyed the experience here. Would definitely visit again!" }],
        friendsActivity: [
            { userId: 'f6', name: 'Vikram Desai', avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=150&auto=format&fit=crop', rating: 4.0, review: "The vibe was incredible.", date: 'Recently' },
            { userId: 'f7', name: 'Neha Gupta', avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=150&auto=format&fit=crop', rating: 4.0, review: "Great food but the wait time is brutal — even with a reservation we waited 35 mins. Worth it if you go on a weekday.", date: 'Recently' },
            { userId: 'f9', name: 'Ananya Rao', avatar: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=150&auto=format&fit=crop', rating: 3, review: "The food was solid but service is painfully slow on weekends — go on a weekday if you can.", date: 'Recently' }
        ]
    },
    {
        id: 'r2', priceForTwo: '₹2,200 for two', openTime: '09:00', closeTime: '00:30', distanceKm: 13.5,
        name: 'O Pedro',
        cuisine: 'Goan',
        cuisines: ['continental', 'seafood'],
        mood: 'drink_dine',
        rating: 3.9, reviewsCount: '3.4k', price: '₹₹₹',
        image: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=2070&auto=format&fit=crop',
        location: 'BKC, Mumbai',
        distance: '13.5 km',
        description: 'A happy place that brings the spirit of Goa to Mumbai.',
        friendsActivity: [
            { userId: 'f2', name: 'Rohan Kapoor', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop', rating: 4.5, review: "Not bad, would go again.", date: 'Recently' }
        ]
    },
    {
        id: 'dd_ita', priceForTwo: '₹2,600 for two', openTime: '09:00', closeTime: '00:30', distanceKm: 9.8, name: 'Sorrentina', cuisine: 'Italian', cuisines: ['italian'], mood: 'drink_dine', rating: 4.3, reviewsCount: '89', price: '₹₹₹',
        image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?q=80&w=2032&auto=format&fit=crop', location: 'Bandra, Mumbai', distance: '9.8 km', description: 'Handcrafted pasta and pizzas.'
    },
    {
        id: 'dd_chi', priceForTwo: '₹3,000 for two', openTime: '09:00', closeTime: '00:30', distanceKm: 10.2, name: 'Hakkasan', cuisine: 'Chinese', cuisines: ['chinese'], mood: 'drink_dine', rating: 4.1, reviewsCount: '112', price: '₹₹₹',
        image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2070&auto=format&fit=crop', location: 'Bandra, Mumbai', distance: '10.2 km', description: 'Michelin-starred Cantonese cuisine.'
    ,
        friendsActivity: [
            { userId: 'f1', name: 'Aditi Sharma', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop', rating: 4.5, review: "Handcrafted pasta done right. The carbonara was creamy and authentic.", date: 'Recently' }
        ]
    ,
        friendsActivity: [
            { userId: 'f5', name: 'Sana Khan', avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=150&auto=format&fit=crop', rating: 2.5, review: "Disappointing for the price — food was mediocre and portions were tiny. Won't return.", date: 'Recently' }
        ]
    },
    {
        id: 'dd_asi', priceForTwo: '₹2,800 for two', openTime: '09:00', closeTime: '00:30', distanceKm: 19.5, name: 'Koko', cuisine: 'Asian', cuisines: ['asian'], mood: 'drink_dine', rating: 4.6, reviewsCount: '4.8k', price: '₹₹₹',
        image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop', location: 'Lower Parel, Mumbai', distance: '19.5 km', description: 'Asian gastro-pub.'
    },
    {
        id: 'dd_mex', priceForTwo: '₹2,400 for two', openTime: '09:00', closeTime: '00:30', distanceKm: 25.2, name: 'Mezcalita', cuisine: 'Mexican', cuisines: ['mexican'], mood: 'drink_dine', rating: 4.5, reviewsCount: '56', price: '₹₹₹',
        image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=2071&auto=format&fit=crop', location: 'Churchgate, Mumbai', distance: '25.2 km', description: 'Lively Mexican cantina.'
    },
    {
        id: 'dd_veg', priceForTwo: '₹900 for two', openTime: '09:00', closeTime: '00:30', distanceKm: 5.1, name: 'Veggie Buzz', cuisine: 'Pure Veg', cuisines: ['pure_veg'], mood: 'drink_dine', rating: 4.1, reviewsCount: '3.7k', price: '₹₹',
        image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2070&auto=format&fit=crop', location: 'Juhu, Mumbai', distance: '5.1 km', description: 'Vegetarian bar and kitchen.'
    ,
        friendsActivity: [
            { userId: 'f9', name: 'Ananya Rao', avatar: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=150&auto=format&fit=crop', rating: 5.0, review: "Best Mexican vibes in Mumbai! The margaritas and tacos are incredible.", date: 'Recently' }
        ]
    },

    // --- Nightlife ---
    {
        id: 'r7', priceForTwo: '₹1,200 for two', openTime: '09:00', closeTime: '01:30', distanceKm: 8.2, name: 'Social', cuisine: 'Continental', cuisines: ['continental', 'north_indian'], mood: 'nightlife', rating: 4.1, reviewsCount: '2.1k', price: '₹₹',
        image: 'https://images.unsplash.com/photo-1575444758702-4a6b9222336e?q=80&w=2070&auto=format&fit=crop', location: 'Khar, Mumbai', distance: '8.2 km', offers: 'Happy Hours 4-8 PM', description: 'Neighborhood bar and popup.'
    },
    {
        id: 'r8', priceForTwo: '₹2,600 for two', openTime: '09:00', closeTime: '01:30', distanceKm: 8.5, name: 'Raasta', cuisine: 'Caribbean', cuisines: ['continental', 'mexican'], mood: 'nightlife', rating: 4.4, reviewsCount: '2.9k', price: '₹₹₹',
        image: 'https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?q=80&w=2029&auto=format&fit=crop', location: 'Khar, Mumbai', distance: '8.5 km', description: 'Reggae lounge.'
    ,
        friendsActivity: [
            { userId: 'f2', name: 'Rohan Kapoor', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop', rating: 2.5, review: "Overrated. The food quality has gone down significantly. Just a brand coasting on nostalgia now.", date: 'Recently' }
        ]
    ,
        friendsActivity: [
            { userId: 'f10', name: 'Rahul Bose', avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=150&auto=format&fit=crop', rating: 4.5, review: "Great vibe for late nights. The reggae music and cocktails make it worth the visit every time.", date: 'Recently' }
        ]
    },
    {
        id: 'r17', priceForTwo: '₹2,800 for two', openTime: '09:00', closeTime: '01:30', distanceKm: 8.8, name: 'Poco Loco', cuisine: 'Mexican', cuisines: ['mexican', 'spanish'], mood: 'nightlife', rating: 4, reviewsCount: '5.1k', price: '₹₹₹',
        image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1974&auto=format&fit=crop', location: 'Khar, Mumbai', distance: '8.8 km', description: 'Tapas and cocktails.'
    },
    {
        id: 'nl_si', priceForTwo: '₹1,500 for two', openTime: '09:00', closeTime: '01:30', distanceKm: 19.2, name: 'South High Bar', cuisine: 'South Indian', cuisines: ['south_indian'], mood: 'nightlife', rating: 4.4, reviewsCount: '1.4k', price: '₹₹',
        image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?q=80&w=2070&auto=format&fit=crop', location: 'Lower Parel, Mumbai', distance: '19.2 km', description: 'South Indian bar food.'
    },
    {
        id: 'nl_ita', priceForTwo: '₹1,500 for two', openTime: '09:00', closeTime: '01:30', distanceKm: 9.5, name: 'Olive Bar', cuisine: 'Italian', cuisines: ['italian'], mood: 'nightlife', rating: 4.4, reviewsCount: '6.2k', price: '₹₹₹',
        image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2070&auto=format&fit=crop', location: 'Bandra, Mumbai', distance: '9.5 km', description: 'Late night Italian vibes.'
    ,
        friendsActivity: [
            { userId: 'f4', name: 'Amit Singh', avatar: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?q=80&w=150&auto=format&fit=crop', rating: 4.5, review: "Loved the South Indian cocktail menu — really creative fusion. The filter coffee cocktail was unique.", date: 'Recently' }
        ]
    },
    {
        id: 'nl_chi', priceForTwo: '₹1,500 for two', openTime: '09:00', closeTime: '01:30', distanceKm: 6.2, name: 'China House Lounge', cuisine: 'Chinese', cuisines: ['chinese'], mood: 'nightlife', rating: 4.6, reviewsCount: '870', price: '₹₹₹',
        image: 'https://images.unsplash.com/photo-1572116469696-31de0f17cc34?q=80&w=2074&auto=format&fit=crop', location: 'Santacruz, Mumbai', distance: '6.2 km', description: 'Luxury lounge with Chinese cuisine.'
    },
    {
        id: 'nl_asi', priceForTwo: '₹1,500 for two', openTime: '09:00', closeTime: '01:30', distanceKm: 9.8, name: '145 Bandra', cuisine: 'Asian', cuisines: ['asian', 'continental'], mood: 'nightlife', rating: 4.7, reviewsCount: '780', price: '₹₹',
        image: 'https://images.unsplash.com/photo-1566737236500-c8ac43014a67?q=80&w=1740&auto=format&fit=crop', location: 'Bandra West, Mumbai', distance: '9.8 km', description: 'Comfort food and cocktails.'
    ,
        friendsActivity: [
            { userId: 'f6', name: 'Vikram Desai', avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=150&auto=format&fit=crop', rating: 3.0, review: "Nice decor but overpriced for what you get. The dim sum was dry and the service was slow.", date: 'Recently' }
        ]
    },
    {
        id: 'nl_veg', priceForTwo: '₹1,500 for two', openTime: '09:00', closeTime: '01:30', distanceKm: 18.8, name: 'SpiceKlub', cuisine: 'Pure Veg', cuisines: ['pure_veg', 'north_indian'], mood: 'nightlife', rating: 4.8, reviewsCount: '342', price: '₹₹₹',
        image: 'https://images.unsplash.com/photo-1585238342024-78d387f4a707?q=80&w=2080&auto=format&fit=crop', location: 'Lower Parel, Mumbai', distance: '18.8 km', description: 'Molecular gastronomy vegetarian.'
    },

    // --- Cafes ---
    {
        id: 'r3', priceForTwo: '₹1,800 for two', openTime: '09:00', closeTime: '00:30', distanceKm: 9.5, name: 'Subko Coffee Roasters', cuisine: 'Cafe', cuisines: ['continental', 'cafes'], mood: 'cafes', rating: 4.8, reviewsCount: '1.5k', price: '₹₹',
        image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2047&auto=format&fit=crop', location: 'Bandra West, Mumbai', distance: '9.5 km', description: 'Specialty coffee roastery.'
    ,
        friendsActivity: [
            { userId: 'f6', name: 'Vikram Desai', avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=150&auto=format&fit=crop', rating: 5.0, review: "Mind-blowing molecular vegetarian cuisine. Worth every penny — the liquid nitrogen pani puri is unforgettable.", date: 'Recently' }
        ]
    },
    {
        id: 'r9', priceForTwo: '₹1,400 for two', openTime: '09:00', closeTime: '00:30', distanceKm: 3.8, name: 'Blue Tokai', cuisine: 'Cafe', cuisines: ['cafes', 'continental'], mood: 'cafes', rating: 4.6, reviewsCount: '1.1k', price: '₹₹',
        image: 'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=2071&auto=format&fit=crop', location: 'Versova, Mumbai', distance: '3.8 km', description: 'India\'s largest specialty coffee company.'
    ,
        friendsActivity: [
            { userId: 'f8', name: 'Karan Patel', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop', rating: 5.0, review: "Best specialty coffee in the city. The single origins are extraordinary and the baristas really know their craft.", date: 'Recently' }
        ]
    ,
        friendsActivity: [
            { userId: 'f11', name: 'Ishaan Mehta', avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=150&auto=format&fit=crop', rating: 3.0, review: "Overhyped for specialty coffee. The pour-overs were inconsistent and the staff seemed undertrained.", date: 'Recently' }
        ]
    },
    {
        id: 'cf_ni', priceForTwo: '₹1,500 for two', openTime: '09:00', closeTime: '00:30', distanceKm: 2.2, name: 'Chai Pe Charcha', cuisine: 'North Indian', cuisines: ['north_indian'], mood: 'cafes', rating: 4.6, reviewsCount: '2.4k', price: '₹',
        image: 'https://images.unsplash.com/photo-1566737236500-c8ac43014a67?q=80&w=1740&auto=format&fit=crop', location: 'Andheri, Mumbai', distance: '2.2 km', description: 'Desi chai and snacks.'
    },
    {
        id: 'cf_si', priceForTwo: '₹1,500 for two', openTime: '09:00', closeTime: '00:30', distanceKm: 19.5, name: 'Madras Cafe', cuisine: 'South Indian', cuisines: ['south_indian'], mood: 'cafes', rating: 4.3, reviewsCount: '3.2k', price: '₹',
        image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=2070&auto=format&fit=crop', location: 'Matunga, Mumbai', distance: '19.5 km', description: 'Legendary South Indian filter coffee.'
    },
    {
        id: 'cf_ita', priceForTwo: '₹1,500 for two', openTime: '09:00', closeTime: '00:30', distanceKm: 4.8, name: 'Grandmama\'s Cafe', cuisine: 'Italian', cuisines: ['italian'], mood: 'cafes', rating: 4.4, reviewsCount: '450', price: '₹₹',
        image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1974&auto=format&fit=crop', location: 'Juhu, Mumbai', distance: '4.8 km', description: 'Quaint cafe with Italian fare.'
    },
    {
        id: 'cf_chi', priceForTwo: '₹1,500 for two', openTime: '09:00', closeTime: '00:30', distanceKm: 9.8, name: 'Tea Villa Cafe', cuisine: 'Chinese', cuisines: ['chinese'], mood: 'cafes', rating: 4.5, reviewsCount: '920', price: '₹₹',
        image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?q=80&w=2069&auto=format&fit=crop', location: 'Bandra, Mumbai', distance: '9.8 km', description: 'Extensive tea menu and Chinese wok.'
    ,
        friendsActivity: [
            { userId: 'f11', name: 'Ishaan Mehta', avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=150&auto=format&fit=crop', rating: 2.5, review: "Disappointing experience. Food was cold, service was inattentive and the pasta was completely underseasoned.", date: 'Recently' }
        ]
    ,
        friendsActivity: [
            { userId: 'f7', name: 'Neha Gupta', avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=150&auto=format&fit=crop', rating: 4.5, review: "Great tea selection and decent Chinese snacks. The cozy ambiance is perfect for a quiet afternoon.", date: 'Recently' }
        ]
    },
    {
        id: 'cf_asi', priceForTwo: '₹1,500 for two', openTime: '09:00', closeTime: '00:30', distanceKm: 10.1, name: 'Buns & Boba', cuisine: 'Asian', cuisines: ['asian'], mood: 'cafes', rating: 4.3, reviewsCount: '1.7k', price: '₹₹',
        image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2047&auto=format&fit=crop', location: 'Bandra, Mumbai', distance: '10.1 km', description: 'Baos and Bubble tea.'
    },
    {
        id: 'cf_mex', priceForTwo: '₹1,500 for two', openTime: '09:00', closeTime: '00:30', distanceKm: 9.8, name: 'The Bagel Shop', cuisine: 'Mexican', cuisines: ['mexican'], mood: 'cafes', rating: 4, reviewsCount: '4.2k', price: '₹₹',
        image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2070&auto=format&fit=crop', location: 'Bandra, Mumbai', distance: '9.8 km', description: 'Bagels and wraps.'
    },
    {
        id: 'cf_veg', priceForTwo: '₹1,500 for two', openTime: '09:00', closeTime: '00:30', distanceKm: 10.2, name: 'Earth Cafe', cuisine: 'Pure Veg', cuisines: ['pure_veg'], mood: 'cafes', rating: 4.5, reviewsCount: '630', price: '₹₹',
        image: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?q=80&w=2070&auto=format&fit=crop', location: 'Bandra, Mumbai', distance: '10.2 km', description: 'Vegan and gluten-free options.'
    },

    // --- Romantic ---
    {
        id: 'r10', priceForTwo: '₹1,100 for two', openTime: '09:00', closeTime: '00:30', distanceKm: 8.2, name: 'Olive Bar & Kitchen', cuisine: 'Mediterranean', cuisines: ['italian', 'continental', 'fine_dining'], mood: 'romantic', rating: 4, reviewsCount: '2.6k', price: '₹₹₹',
        image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2070&auto=format&fit=crop', location: 'Khar, Mumbai', distance: '8.2 km', description: 'Romantic Mediterranean hideaway.',
        friendsActivity: [
            { userId: 'f7', name: 'Neha Gupta', avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=150&auto=format&fit=crop', rating: 4.5, review: "Honestly a bit hyped. The signature dish was good, but not mind-blowing. Nice vibe though.", date: 'Recently' },
            { userId: 'f3', name: 'Priya Verma', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop', rating: 2.5, review: "Worth a visit once, but I wouldn't go back at these prices. The portion sizes have shrunk.", date: 'Recently' }
        ]
    },
    {
        id: 'r11', priceForTwo: '₹2,800 for two', openTime: '09:00', closeTime: '00:30', distanceKm: 5.2, name: 'Gadda Da Vida', cuisine: 'Continental', cuisines: ['continental', 'italian'], mood: 'romantic', rating: 4.3, reviewsCount: '1.9k', price: '₹₹₹',
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2073&auto=format&fit=crop', location: 'Juhu, Mumbai', distance: '5.2 km', description: 'Sea-facing lounge.'
    },
    {
        id: 'rm_ni', priceForTwo: '₹1,500 for two', openTime: '09:00', closeTime: '00:30', distanceKm: 3.5, name: 'Peshawri', cuisine: 'North Indian', cuisines: ['north_indian'], mood: 'romantic', rating: 4.1, reviewsCount: '8.1k', price: '₹₹₹',
        image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop', location: 'Andheri, Mumbai', distance: '3.5 km', description: 'Luxury North Indian dining.'
    ,
        friendsActivity: [
            { userId: 'f14', name: 'Tara Reddy', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop', rating: 2.5, review: "Beautiful sea view but the food is completely forgettable. Typical tourist-trap pricing.", date: 'Recently' }
        ]
    },
    {
        id: 'rm_si', priceForTwo: '₹1,500 for two', openTime: '09:00', closeTime: '00:30', distanceKm: 30.5, name: 'Konkan Cafe', cuisine: 'South Indian', cuisines: ['south_indian'], mood: 'romantic', rating: 4.1, reviewsCount: '540', price: '₹₹₹',
        image: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=2070&auto=format&fit=crop', location: 'Cuffe Parade, Mumbai', distance: '30.5 km', description: 'Elegant South Indian coastal cuisine.'
    ,
        friendsActivity: [
            { userId: 'f3', name: 'Priya Verma', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop', rating: 2.0, review: "Overpriced and underwhelming. The dal makhani was watery and the naan was cold. Not the romantic experience I expected.", date: 'Recently' }
        ]
    },
    {
        id: 'rm_chi', priceForTwo: '₹1,500 for two', openTime: '09:00', closeTime: '00:30', distanceKm: 28.2, name: 'Golden Dragon', cuisine: 'Chinese', cuisines: ['chinese'], mood: 'romantic', rating: 4, reviewsCount: '950', price: '₹₹₹',
        image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?q=80&w=2070&auto=format&fit=crop', location: 'Colaba, Mumbai', distance: '28.2 km', description: 'Authentic Sichuan cuisine.'
    },
    {
        id: 'rm_asi', priceForTwo: '₹1,500 for two', openTime: '09:00', closeTime: '00:30', distanceKm: 28.5, name: 'Wasabi by Morimoto', cuisine: 'Asian', cuisines: ['asian'], mood: 'romantic', rating: 4.7, reviewsCount: '3.9k', price: '₹₹₹',
        image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop', location: 'Colaba, Mumbai', distance: '28.5 km', description: 'World-class Japanese dining.'
    },
    {
        id: 'rm_mex', priceForTwo: '₹1,500 for two', openTime: '09:00', closeTime: '00:30', distanceKm: 18.2, name: 'Xico', cuisine: 'Mexican', cuisines: ['mexican'], mood: 'romantic', rating: 4.5, reviewsCount: '1.3k', price: '₹₹₹',
        image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=2071&auto=format&fit=crop', location: 'Lower Parel, Mumbai', distance: '18.2 km', description: 'Modern Mexican fine dining.'
    ,
        friendsActivity: [
            { userId: 'f13', name: 'Dev Malhotra', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop', rating: 3.0, review: "The hype far exceeds reality. Expensive for what is essentially average sushi — won't return at these prices.", date: 'Recently' }
        ]
    ,
        friendsActivity: [
            { userId: 'f3', name: 'Priya Verma', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop', rating: 5.0, review: "Romantic atmosphere and the food was divine! The guacamole tableside preparation is a lovely touch.", date: 'Recently' }
        ]
    },
    {
        id: 'rm_veg', priceForTwo: '₹1,500 for two', openTime: '09:00', closeTime: '00:30', distanceKm: 13.2, name: 'Tresind', cuisine: 'Pure Veg', cuisines: ['pure_veg', 'modern_indian'], mood: 'romantic', rating: 4.2, reviewsCount: '7.3k', price: '₹₹₹',
        image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop', location: 'BKC, Mumbai', distance: '13.2 km', description: 'Innovative vegetarian tasting menus.'
    },

    // --- Family Dining ---
    {
        id: 'r4', priceForTwo: '₹2,200 for two', openTime: '09:00', closeTime: '00:30', distanceKm: 2.1, name: 'Mainland China', cuisine: 'Chinese', cuisines: ['chinese', 'asian'], mood: 'family', rating: 4.5, reviewsCount: '420', price: '₹₹₹',
        image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?q=80&w=2070&auto=format&fit=crop', location: 'Andheri West, Mumbai', distance: '2.1 km', description: 'Authentic Chinese cuisine.',
        friendsActivity: [
            { userId: 'f7', name: 'Neha Gupta', avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=150&auto=format&fit=crop', rating: 3.5, review: "Really loved the ambiance and the cocktail menu. The mains were hit or miss.", date: 'Recently' },
            { userId: 'f3', name: 'Priya Verma', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop', rating: 4.5, review: "Perfect for a work lunch or a first date — mature vibe. Head for the brunch on Sundays if you can.", date: 'Recently' },
            { userId: 'f10', name: 'Rahul Bose', avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=150&auto=format&fit=crop', rating: 4.0, review: "Great for a work dinner or date — noise levels are manageable unlike most BKC restaurants.", date: 'Recently' }
        ]
    ,
        friendsActivity: [
            { userId: 'f4', name: 'Amit Singh', avatar: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?q=80&w=150&auto=format&fit=crop', rating: 4.5, review: "Creative vegetarian tasting menu that surprised me at every course. The presentation is as good as the taste.", date: 'Recently' }
        ]
    },
    {
        id: 'r12', priceForTwo: '₹1,800 for two', openTime: '09:00', closeTime: '00:30', distanceKm: 4.8, name: 'Punjab Grill', cuisine: 'North Indian', cuisines: ['north_indian'], mood: 'family', rating: 4.8, reviewsCount: '2.2k', price: '₹₹₹',
        image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop', location: 'Juhu, Mumbai', distance: '4.8 km', description: 'Gourmet North Indian.'
    },
    {
        id: 'r6', priceForTwo: '₹1,500 for two', openTime: '09:00', closeTime: '00:30', distanceKm: 24.5, name: 'Burma Burma', cuisine: 'Asian (Veg)', cuisines: ['asian', 'pure_veg'], mood: 'family', rating: 4.5, reviewsCount: '1.6k', price: '₹₹₹',
        image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?q=80&w=2072&auto=format&fit=crop', location: 'Fort, Mumbai', distance: '24.5 km', description: 'Authentic vegetarian Burmese.',
        friendsActivity: [
            { userId: 'f2', name: 'Rohan Kapoor', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop', rating: 3.5, review: "The tasting menu is actually worth it here. Skip the à la carte — you miss the best dishes.", date: 'Recently' },
            { userId: 'f6', name: 'Vikram Desai', avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=150&auto=format&fit=crop', rating: 4.0, review: "The vibe was incredible.", date: 'Recently' },
            { userId: 'f8', name: 'Karan Patel', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop', rating: 3, review: "Pasta was disappointing but the appetizers and desserts were fantastic. Uneven kitchen.", date: 'Recently' }
        ]
    ,
        friendsActivity: [
            { userId: 'f14', name: 'Tara Reddy', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop', rating: 3.0, review: "Used to be great, now trading on reputation. Inconsistent quality and the service feels rushed.", date: 'Recently' }
        ]
    },
    {
        id: 'r18', priceForTwo: '₹1,200 for two', openTime: '09:00', closeTime: '00:30', distanceKm: 4.9, name: 'Dakshinayan', cuisine: 'South Indian', cuisines: ['south_indian', 'pure_veg'], mood: 'family', rating: 4.3, reviewsCount: '5.8k', price: '₹₹',
        image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?q=80&w=2070&auto=format&fit=crop', location: 'Juhu, Mumbai', distance: '4.9 km', description: 'South Indian delicacies.'
    },
    {
        id: 'r5', priceForTwo: '₹2,400 for two', openTime: '09:00', closeTime: '00:30', distanceKm: 28.5, name: 'PizzaExpress', cuisine: 'Italian', cuisines: ['italian', 'continental'], mood: 'family', rating: 4.5, reviewsCount: '710', price: '₹₹₹',
        image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=2069&auto=format&fit=crop', location: 'Colaba, Mumbai', distance: '28.5 km', description: 'Gourmet Italian pizza.',
        friendsActivity: [
            { userId: 'f4', name: 'Amit Singh', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop', rating: 3.5, review: "Go for the brunch, skip dinner. Much better value and the live music adds to it.", date: 'Recently' },
            { userId: 'f6', name: 'Vikram Desai', avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=150&auto=format&fit=crop', rating: 4.5, review: "The vibe was incredible.", date: 'Recently' },
            { userId: 'f1', name: 'Aditi Sharma', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop', rating: 4.5, review: "Chef's special changes weekly and it's almost always the best thing on the table.", date: 'Recently' }
        ]
    },
    {
        id: 'fm_mex', priceForTwo: '₹2,200 for two', openTime: '09:00', closeTime: '00:30', distanceKm: 13.5, name: 'Chilis', cuisine: 'Mexican', cuisines: ['mexican', 'continental'], mood: 'family', rating: 4.2, reviewsCount: '3.1k', price: '₹₹₹',
        image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1974&auto=format&fit=crop', location: 'Powai, Mumbai', distance: '13.5 km', description: 'Tex-Mex family restaurant.'
    },
    {
        id: 'fm_cont', priceForTwo: '₹2,400 for two', openTime: '09:00', closeTime: '00:30', distanceKm: 13.2, name: 'Smoke House Deli', cuisine: 'Continental', cuisines: ['continental'], mood: 'family', rating: 4.3, reviewsCount: '860', price: '₹₹₹',
        image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop', location: 'BKC, Mumbai', distance: '13.2 km', description: 'All-day cafe and deli.'
    },

    // --- Fine Dining ---
    {
        id: 'r13', priceForTwo: '₹3,200 for two', openTime: '09:00', closeTime: '00:30', distanceKm: 20.2, name: 'Masque', cuisine: 'Modern Indian', cuisines: ['modern_indian', 'continental'], mood: 'fine_dining', rating: 4.3, reviewsCount: '4.5k', price: '₹₹₹',
        image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1974&auto=format&fit=crop', location: 'Mahalaxmi, Mumbai', distance: '20.2 km', offers: 'Tasting Menu @ ₹4500', description: 'Ingredient-driven tasting menus.'
    ,
        friendsActivity: [
            { userId: 'f9', name: 'Ananya Rao', avatar: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=150&auto=format&fit=crop', rating: 4.5, review: "Great all-day dining option. The eggs benedict is a must-have and the coffee is reliably good.", date: 'Recently' }
        ]
    ,
        friendsActivity: [
            { userId: 'f15', name: 'Arjun Khanna', avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=150&auto=format&fit=crop', rating: 4.5, review: "Exceptional tasting menu experience. The seasonal ingredients shine and every course tells a story.", date: 'Recently' }
        ]
    },
    {
        id: 'r14', priceForTwo: '₹1,600 for two', openTime: '09:00', closeTime: '00:30', distanceKm: 12.8, name: 'Yauatcha', cuisine: 'Chinese', cuisines: ['chinese', 'asian'], mood: 'fine_dining', rating: 4.6, reviewsCount: '1.8k', price: '₹₹₹',
        image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop', location: 'BKC, Mumbai', distance: '12.8 km', description: 'Contemporary dim sum teahouse.'
    },
    {
        id: 'fd_ni', priceForTwo: '₹1,500 for two', openTime: '09:00', closeTime: '00:30', distanceKm: 13.2, name: 'Indian Accent', cuisine: 'North Indian', cuisines: ['north_indian'], mood: 'fine_dining', rating: 4.2, reviewsCount: '960', price: '₹₹₹',
        image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop', location: 'BKC, Mumbai', distance: '13.2 km', description: 'Inventive Indian cuisine.'
    ,
        friendsActivity: [
            { userId: 'f2', name: 'Rohan Kapoor', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop', rating: 3.0, review: "The dim sum quality has really dropped since its peak. Not worth the premium BKC prices anymore.", date: 'Recently' }
        ]
    ,
        friendsActivity: [
            { userId: 'f15', name: 'Arjun Khanna', avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=150&auto=format&fit=crop', rating: 2.0, review: "Not worth the price tag. The reimagined dishes lose what makes Indian food great. Felt pretentious and unsatisfying.", date: 'Recently' }
        ]
    },
    {
        id: 'fd_si', priceForTwo: '₹1,500 for two', openTime: '09:00', closeTime: '00:30', distanceKm: 13.5, name: 'Tresind', cuisine: 'South Indian', cuisines: ['south_indian'], mood: 'fine_dining', rating: 4.3, reviewsCount: '2.7k', price: '₹₹₹',
        image: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=2070&auto=format&fit=crop', location: 'BKC, Mumbai', distance: '13.5 km', description: 'Modernist Indian fine dining.'
    },
    {
        id: 'fd_ita', priceForTwo: '₹1,500 for two', openTime: '09:00', closeTime: '00:30', distanceKm: 13.8, name: 'Botticino', cuisine: 'Italian', cuisines: ['italian'], mood: 'fine_dining', rating: 4.1, reviewsCount: '490', price: '₹₹₹',
        image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?q=80&w=2032&auto=format&fit=crop', location: 'BKC, Mumbai', distance: '13.8 km', description: 'Authentic Italian fine dining.'
    },
    {
        id: 'fd_mex', priceForTwo: '₹1,500 for two', openTime: '09:00', closeTime: '00:30', distanceKm: 18.2, name: 'Xico', cuisine: 'Mexican', cuisines: ['mexican'], mood: 'fine_dining', rating: 4.7, reviewsCount: '3.6k', price: '₹₹₹',
        image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=2071&auto=format&fit=crop', location: 'Lower Parel, Mumbai', distance: '18.2 km', description: 'Modern Mexican.'
    },
    {
        id: 'fd_veg', priceForTwo: '₹1,500 for two', openTime: '09:00', closeTime: '00:30', distanceKm: 24.8, name: 'Royal China', cuisine: 'Pure Veg', cuisines: ['pure_veg', 'chinese'], mood: 'fine_dining', rating: 4.8, reviewsCount: '1.5k', price: '₹₹₹',
        image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?q=80&w=2070&auto=format&fit=crop', location: 'Fort, Mumbai', distance: '24.8 km', description: 'Authentic Chinese fine dining.'
    ,
        friendsActivity: [
            { userId: 'f8', name: 'Karan Patel', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop', rating: 5.0, review: "Extraordinary Mexican fine dining. The mole is the best outside Mexico City — an absolute must for food lovers.", date: 'Recently' }
        ]
    },

    // --- Outdoor ---
    {
        id: 'r15', priceForTwo: '₹2,400 for two', openTime: '09:00', closeTime: '00:30', distanceKm: 9.8, name: 'Candies', cuisine: 'Continental', cuisines: ['continental', 'cafes', 'pure_veg'], mood: 'outdoor', rating: 4.8, reviewsCount: '6.8k', price: '₹₹',
        image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2047&auto=format&fit=crop', location: 'Bandra West, Mumbai', distance: '9.8 km', description: 'Iconic bungalow cafe.'
    },
    {
        id: 'r16', priceForTwo: '₹1,400 for two', openTime: '09:00', closeTime: '00:30', distanceKm: 4.5, name: 'Estella', cuisine: 'Australian', cuisines: ['continental', 'seafood'], mood: 'outdoor', rating: 4.6, reviewsCount: '380', price: '₹₹₹',
        image: 'https://images.unsplash.com/photo-1566552881560-0be862a7c445?q=80&w=2070&auto=format&fit=crop', location: 'Juhu, Mumbai', distance: '4.5 km', description: 'Beachfront deck.'
    ,
        friendsActivity: [
            { userId: 'f1', name: 'Aditi Sharma', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop', rating: 5.0, review: "Iconic Bandra spot. The croissants and coffee are consistently excellent — a true Bandra institution.", date: 'Recently' }
        ]
    },
    {
        id: 'od_ni', priceForTwo: '₹1,500 for two', openTime: '09:00', closeTime: '00:30', distanceKm: 5.2, name: 'Prithvi Cafe', cuisine: 'North Indian', cuisines: ['north_indian', 'cafes'], mood: 'outdoor', rating: 4.4, reviewsCount: '2.0k', price: '₹₹',
        image: 'https://images.unsplash.com/photo-1566737236500-c8ac43014a67?q=80&w=1740&auto=format&fit=crop', location: 'Juhu, Mumbai', distance: '5.2 km', description: 'Open air cafe at Prithvi Theatre.'
    },
    {
        id: 'od_si', priceForTwo: '₹1,500 for two', openTime: '09:00', closeTime: '00:30', distanceKm: 20.1, name: 'Cafe Madras (Outdoor)', cuisine: 'South Indian', cuisines: ['south_indian'], mood: 'outdoor', rating: 4, reviewsCount: '1.2k', price: '₹₹',
        image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=2070&auto=format&fit=crop', location: 'Matunga, Mumbai', distance: '20.1 km', description: 'South Indian with outdoor seating.'
    ,
        friendsActivity: [
            { userId: 'f12', name: 'Kavya Nair', avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=150&auto=format&fit=crop', rating: 2.5, review: "The atmosphere is lovely for theatre-goers but the food is truly mediocre. Go for the experience, skip the meal.", date: 'Recently' }
        ]
    },
    {
        id: 'od_ita', priceForTwo: '₹1,500 for two', openTime: '09:00', closeTime: '00:30', distanceKm: 4.8, name: 'Cecconi\'s', cuisine: 'Italian', cuisines: ['italian'], mood: 'outdoor', rating: 4.2, reviewsCount: '4.1k', price: '₹₹₹',
        image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?q=80&w=2032&auto=format&fit=crop', location: 'Juhu, Mumbai', distance: '4.8 km', description: 'Beachside Italian dining.'
    },
    {
        id: 'od_chi', priceForTwo: '₹1,500 for two', openTime: '09:00', closeTime: '00:30', distanceKm: 8.2, name: 'China Garden', cuisine: 'Chinese', cuisines: ['chinese'], mood: 'outdoor', rating: 4.3, reviewsCount: '830', price: '₹₹₹',
        image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?q=80&w=2070&auto=format&fit=crop', location: 'Khar, Mumbai', distance: '8.2 km', description: 'Chinese with garden seating.'
    },
    {
        id: 'od_asi', priceForTwo: '₹1,500 for two', openTime: '09:00', closeTime: '00:30', distanceKm: 25.5, name: 'Foo Town', cuisine: 'Asian', cuisines: ['asian'], mood: 'outdoor', rating: 4.3, reviewsCount: '3.3k', price: '₹₹₹',
        image: 'https://images.unsplash.com/photo-1566737236500-c8ac43014a67?q=80&w=1740&auto=format&fit=crop', location: 'Churchgate, Mumbai', distance: '25.5 km', description: 'Asian tapas with outdoor area.'
    ,
        friendsActivity: [
            { userId: 'f13', name: 'Dev Malhotra', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop', rating: 2.5, review: "Garden seating is nice but the food is below average for the price. Won't return.", date: 'Recently' }
        ]
    },
    {
        id: 'od_mex', priceForTwo: '₹1,500 for two', openTime: '09:00', closeTime: '00:30', distanceKm: 2.8, name: 'Sammy Sosa', cuisine: 'Mexican', cuisines: ['mexican'], mood: 'outdoor', rating: 4.8, reviewsCount: '570', price: '₹₹₹',
        image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=2071&auto=format&fit=crop', location: 'Oshiwara, Mumbai', distance: '2.8 km', description: 'Mexican with sidewalk seating.'
    },

    // --- Additional 2nd-item coverage per combination ---
    { id: 'dd_ni2', priceForTwo: '₹2,200 for two', openTime: '09:00', closeTime: '00:30', distanceKm: 8.5, name: 'Bukhara Social', cuisine: 'North Indian', cuisines: ['north_indian'], mood: 'drink_dine', rating: 4.4, reviewsCount: '2.8k', price: '₹₹₹', image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop', location: 'Bandra, Mumbai', distance: '8.5 km', description: 'Rustic North Indian bar-dining experience.', friendsActivity: [{ userId: 'f3', name: 'Priya Verma', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop', rating: 2.5, review: "Overhyped. Cocktails were watery and the dal makhani was nowhere near as good as the hype. Won't return.", date: 'Recently' }] ,
        friendsActivity: [
            { userId: 'f5', name: 'Sana Khan', avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=150&auto=format&fit=crop', rating: 3.0, review: "Trendy but substance-free. The tacos were dry and the salsa tasted jarred. Not worth the Oshiwara trip.", date: 'Recently' }
        ]
    },
    { id: 'dd_ita2', priceForTwo: '₹2,400 for two', openTime: '09:00', closeTime: '00:30', distanceKm: 9.2, name: 'La Dolce Vita', cuisine: 'Italian', cuisines: ['italian'], mood: 'drink_dine', rating: 4.2, reviewsCount: '165', price: '₹₹₹', image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?q=80&w=2032&auto=format&fit=crop', location: 'Bandra, Mumbai', distance: '9.2 km', description: 'Authentic Italian trattoria with wine bar.' },
    { id: 'dd_chi2', priceForTwo: '₹2,600 for two', openTime: '09:00', closeTime: '00:30', distanceKm: 8.8, name: 'China House BKC', cuisine: 'Chinese', cuisines: ['chinese', 'asian'], mood: 'drink_dine', rating: 4.3, reviewsCount: '198', price: '₹₹₹', image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2070&auto=format&fit=crop', location: 'BKC, Mumbai', distance: '8.8 km', description: 'Upscale Chinese with cocktail lounge.' },
    { id: 'dd_asi2', priceForTwo: '₹2,200 for two', openTime: '09:00', closeTime: '00:30', distanceKm: 9.5, name: 'Foo Mumbai', cuisine: 'Asian', cuisines: ['asian'], mood: 'drink_dine', rating: 4.4, reviewsCount: '142', price: '₹₹₹', image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop', location: 'Bandra, Mumbai', distance: '9.5 km', description: 'Pan-Asian bar and kitchen.', friendsActivity: [{ userId: 'f9', name: 'Ananya Rao', avatar: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=150&auto=format&fit=crop', rating: 4.5, review: "The Thai curries are absolutely on point and the lychee mojito is a must. Great pre-dinner spot.", date: 'Recently' }] },
    { id: 'nl_ni2', priceForTwo: '₹1,800 for two', openTime: '09:00', closeTime: '01:30', distanceKm: 6.5, name: 'Dhansak & Drinks', cuisine: 'North Indian', cuisines: ['north_indian', 'continental'], mood: 'nightlife', rating: 4.2, reviewsCount: '178', price: '₹₹', image: 'https://images.unsplash.com/photo-1572116469696-31de0f17cc34?q=80&w=2074&auto=format&fit=crop', location: 'Santacruz, Mumbai', distance: '6.5 km', description: 'North Indian tapas with late-night bar.' },
    { id: 'nl_asi2', priceForTwo: '₹1,800 for two', openTime: '09:00', closeTime: '01:30', distanceKm: 9.2, name: 'Bandra Born', cuisine: 'Asian', cuisines: ['asian', 'continental'], mood: 'nightlife', rating: 4.5, reviewsCount: '312', price: '₹₹₹', image: 'https://images.unsplash.com/photo-1566737236500-c8ac43014a67?q=80&w=1740&auto=format&fit=crop', location: 'Bandra West, Mumbai', distance: '9.2 km', description: 'Modern Asian cocktail bar.', friendsActivity: [{ userId: 'f8', name: 'Karan Patel', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop', rating: 2.5, review: "Extremely crowded on weekends — had to wait 45 mins after our reservation. Food was average for the price. Go on a weekday or skip.", date: 'Recently' }] },
    { id: 'cf_ni2', priceForTwo: '₹900 for two', openTime: '09:00', closeTime: '00:30', distanceKm: 2.8, name: 'Indian Chai House', cuisine: 'North Indian', cuisines: ['north_indian'], mood: 'cafes', rating: 4.2, reviewsCount: '1.0k', price: '₹', image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2070&auto=format&fit=crop', location: 'Andheri West, Mumbai', distance: '2.8 km', description: 'Cozy chai and snacks spot.' },
    { id: 'cf_si2', priceForTwo: '₹800 for two', openTime: '09:00', closeTime: '00:30', distanceKm: 3.5, name: 'Udupi Palace', cuisine: 'South Indian', cuisines: ['south_indian', 'pure_veg'], mood: 'cafes', rating: 4.4, reviewsCount: '562', price: '₹', image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=2070&auto=format&fit=crop', location: 'Andheri, Mumbai', distance: '3.5 km', description: 'Classic Udupi vegetarian fare and filter coffee.', friendsActivity: [{ userId: 'f2', name: 'Rohan Kapoor', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop', rating: 4.5, review: "Best masala dosa in the area. Crispy on the outside, perfectly spiced inside. Go before 9 AM for shortest wait.", date: 'Recently' }] },
    { id: 'rm_ni2', priceForTwo: '₹3,500 for two', openTime: '09:00', closeTime: '00:30', distanceKm: 13.8, name: 'Dum Pukht', cuisine: 'North Indian', cuisines: ['north_indian'], mood: 'romantic', rating: 4.6, reviewsCount: '5.4k', price: '₹₹₹', image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop', location: 'BKC, Mumbai', distance: '13.8 km', description: 'Regal North Indian slow-cooked cuisine.', friendsActivity: [{ userId: 'f6', name: 'Vikram Desai', avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=150&auto=format&fit=crop', rating: 2.0, review: "Massively overpriced for the portion size. The biryani was dry and under-seasoned. Very disappointing for ₹3500+ a head.", date: 'Recently' }] },
    { id: 'rm_chi2', priceForTwo: '₹2,200 for two', openTime: '09:00', closeTime: '00:30', distanceKm: 10.2, name: 'Yum Yum Cha', cuisine: 'Chinese', cuisines: ['chinese', 'asian'], mood: 'romantic', rating: 4.5, reviewsCount: '289', price: '₹₹₹', image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?q=80&w=2070&auto=format&fit=crop', location: 'Bandra, Mumbai', distance: '10.2 km', description: 'Modern Chinese in a romantic setting.' },
    { id: 'fm_chi2', priceForTwo: '₹1,600 for two', openTime: '09:00', closeTime: '00:30', distanceKm: 4.5, name: 'China Bistro', cuisine: 'Chinese', cuisines: ['chinese'], mood: 'family', rating: 4.2, reviewsCount: '650', price: '₹₹', image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?q=80&w=2070&auto=format&fit=crop', location: 'Juhu, Mumbai', distance: '4.5 km', description: 'Family-friendly Chinese with dim sum.', friendsActivity: [{ userId: 'f7', name: 'Neha Gupta', avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=150&auto=format&fit=crop', rating: 4.0, review: "The dim sum is fresh and reasonably priced. Good for family lunches, can get noisy on weekends.", date: 'Recently' }] },
    { id: 'fm_ni2', priceForTwo: '₹1,400 for two', openTime: '09:00', closeTime: '00:30', distanceKm: 3.2, name: 'Dhaba by Claridges', cuisine: 'North Indian', cuisines: ['north_indian'], mood: 'family', rating: 4.1, reviewsCount: '876', price: '₹₹', image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop', location: 'Andheri, Mumbai', distance: '3.2 km', description: 'Rustic dhaba-style North Indian for the whole family.' },
    { id: 'fd_cont2', priceForTwo: '₹4,000 for two', openTime: '09:00', closeTime: '00:30', distanceKm: 28.5, name: 'Indigo', cuisine: 'Continental', cuisines: ['continental', 'italian'], mood: 'fine_dining', rating: 4.5, reviewsCount: '2.5k', price: '₹₹₹', image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop', location: 'Colaba, Mumbai', distance: '28.5 km', description: "Mumbai's iconic fine-dining institution.", friendsActivity: [{ userId: 'f4', name: 'Amit Singh', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop', rating: 4.5, review: "The Sunday brunch is outstanding value. Soufflé is a must-order. Impeccable service, justified price.", date: 'Recently' }] },
    { id: 'fd_asi2', priceForTwo: '₹3,200 for two', openTime: '09:00', closeTime: '00:30', distanceKm: 13.2, name: 'Nobu Mumbai', cuisine: 'Asian', cuisines: ['asian', 'japanese'], mood: 'fine_dining', rating: 4.7, reviewsCount: '234', price: '₹₹₹', image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop', location: 'BKC, Mumbai', distance: '13.2 km', description: 'World-class Japanese-Peruvian fine dining.' },
    { id: 'od_ni2', priceForTwo: '₹1,200 for two', openTime: '09:00', closeTime: '00:30', distanceKm: 4.8, name: 'Juhu Beach Garden Cafe', cuisine: 'North Indian', cuisines: ['north_indian', 'continental'], mood: 'outdoor', rating: 4.1, reviewsCount: '740', price: '₹₹', image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop', location: 'Juhu, Mumbai', distance: '4.8 km', description: 'Sea-view alfresco North Indian dining.', friendsActivity: [{ userId: 'f1', name: 'Aditi Sharma', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop', rating: 4.5, review: "Beautiful sunset views, great chaat and kebabs. Book the terrace seating in advance for golden hour.", date: 'Recently' }] },
    { id: 'od_asi2', priceForTwo: '₹1,800 for two', openTime: '09:00', closeTime: '00:30', distanceKm: 5.5, name: 'Woodside Inn', cuisine: 'Asian', cuisines: ['asian', 'continental'], mood: 'outdoor', rating: 4.4, reviewsCount: '765', price: '₹₹', image: 'https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?q=80&w=2070&auto=format&fit=crop', location: 'Versova, Mumbai', distance: '5.5 km', description: 'Alfresco garden dining with Asian influences.' },

    // --- Full combo coverage — 2nd items per mood×cuisine ---

    // drink_dine missing combos
    { id: 'dd_si2', priceForTwo: '₹1,200 for two', openTime: '09:00', closeTime: '00:30', distanceKm: 4.2, name: 'Dosa Plaza', cuisine: 'South Indian', cuisines: ['south_indian', 'pure_veg'], mood: 'drink_dine', rating: 4.1, reviewsCount: '540', price: '₹₹', image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=2070&auto=format&fit=crop', location: 'Andheri West, Mumbai', distance: '4.2 km', description: 'South Indian dosas and cocktails in a lively atmosphere.' },
    { id: 'dd_mex2', priceForTwo: '₹2,200 for two', openTime: '09:00', closeTime: '00:30', distanceKm: 8.8, name: 'Taco Tales', cuisine: 'Mexican', cuisines: ['mexican'], mood: 'drink_dine', rating: 4.3, reviewsCount: '210', price: '₹₹₹', image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=2071&auto=format&fit=crop', location: 'Khar, Mumbai', distance: '8.8 km', description: 'Vibrant Mexican cantina with craft cocktails.', friendsActivity: [{ userId: 'f11', name: 'Ishaan Mehta', avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=150&auto=format&fit=crop', rating: 4.5, review: "Best margaritas in the area — frozen mango margarita is a must. Tacos are great too.", date: 'Recently' }, { userId: 'f13', name: 'Dev Malhotra', avatar: 'https://images.unsplash.com/photo-1463453091185-61582044d556?q=80&w=150&auto=format&fit=crop', rating: 2.0, review: "Hugely overpriced for what is basically bar food. Nachos were stale and the service was dismissive. Won't return.", date: 'Recently' }] },
    { id: 'dd_veg2', priceForTwo: '₹1,400 for two', openTime: '09:00', closeTime: '00:30', distanceKm: 6.2, name: 'Green Theory Bar', cuisine: 'Pure Veg', cuisines: ['pure_veg', 'continental'], mood: 'drink_dine', rating: 4.2, reviewsCount: '185', price: '₹₹', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2070&auto=format&fit=crop', location: 'Santacruz, Mumbai', distance: '6.2 km', description: 'Plant-based cocktail bar and kitchen.' },

    // nightlife missing combos
    { id: 'nl_si2', priceForTwo: '₹1,800 for two', openTime: '09:00', closeTime: '01:30', distanceKm: 6.5, name: 'Coast Bar & Kitchen', cuisine: 'South Indian', cuisines: ['south_indian', 'continental'], mood: 'nightlife', rating: 4.3, reviewsCount: '3.8k', price: '₹₹₹', image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?q=80&w=2070&auto=format&fit=crop', location: 'Bandra, Mumbai', distance: '6.5 km', description: 'Coastal South Indian bar food with a hip nightlife vibe.', friendsActivity: [{ userId: 'f12', name: 'Kavya Nair', avatar: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=150&auto=format&fit=crop', rating: 4.5, review: "Appam cocktail pairing is genius — who knew filter coffee martinis were a thing. Great for late nights.", date: 'Recently' }] },
    { id: 'nl_ita2', priceForTwo: '₹2,200 for two', openTime: '09:00', closeTime: '01:30', distanceKm: 8.2, name: 'Pizzeria Locale', cuisine: 'Italian', cuisines: ['italian'], mood: 'nightlife', rating: 4.2, reviewsCount: '4.8k', price: '₹₹₹', image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=2069&auto=format&fit=crop', location: 'Bandra, Mumbai', distance: '8.2 km', description: 'Late-night Neapolitan pizza and wine bar.' },
    { id: 'nl_chi2', priceForTwo: '₹2,400 for two', openTime: '09:00', closeTime: '01:30', distanceKm: 9.2, name: 'Red Dragon Lounge', cuisine: 'Chinese', cuisines: ['chinese', 'asian'], mood: 'nightlife', rating: 4.4, reviewsCount: '256', price: '₹₹₹', image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?q=80&w=2070&auto=format&fit=crop', location: 'Bandra, Mumbai', distance: '9.2 km', description: 'Dimly lit Chinese lounge with cocktails and dim sum.', friendsActivity: [{ userId: 'f14', name: 'Tara Reddy', avatar: 'https://images.unsplash.com/photo-1502764613149-7f1d229e230f?q=80&w=150&auto=format&fit=crop', rating: 2.5, review: "Concept is great but execution is poor. Dim sum arrived cold, cocktails were watery. For that price, disappointing.", date: 'Recently' }] },
    { id: 'nl_veg2', priceForTwo: '₹1,600 for two', openTime: '09:00', closeTime: '01:30', distanceKm: 5.2, name: 'Sequel Bar & Kitchen', cuisine: 'Pure Veg', cuisines: ['pure_veg', 'continental'], mood: 'nightlife', rating: 4.5, reviewsCount: '423', price: '₹₹₹', image: 'https://images.unsplash.com/photo-1566737236500-c8ac43014a67?q=80&w=1740&auto=format&fit=crop', location: 'Juhu, Mumbai', distance: '5.2 km', description: 'Mumbai\'s favourite vegetarian bar with inventive cocktails.' },

    // cafes missing combos
    { id: 'cf_ita2', priceForTwo: '₹1,600 for two', openTime: '09:00', closeTime: '00:30', distanceKm: 7.2, name: 'Le Pain Quotidien', cuisine: 'Italian', cuisines: ['italian', 'continental'], mood: 'cafes', rating: 4.3, reviewsCount: '3.7k', price: '₹₹', image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?q=80&w=2032&auto=format&fit=crop', location: 'Bandra, Mumbai', distance: '7.2 km', description: 'Belgian artisan bakery-cafe with wood-fired Italian fare.', friendsActivity: [{ userId: 'f15', name: 'Arjun Khanna', avatar: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=150&auto=format&fit=crop', rating: 4.5, review: "Sourdough and almond croissant are addictive. Good place to work from with reliable WiFi.", date: 'Recently' }] },
    { id: 'cf_chi2', priceForTwo: '₹1,400 for two', openTime: '09:00', closeTime: '00:30', distanceKm: 8.5, name: 'Tea Haus', cuisine: 'Chinese', cuisines: ['chinese', 'asian'], mood: 'cafes', rating: 4.1, reviewsCount: '2.9k', price: '₹₹', image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?q=80&w=2069&auto=format&fit=crop', location: 'Bandra, Mumbai', distance: '8.5 km', description: 'Artisanal Chinese tea house with dim sum bites.' },
    { id: 'cf_asi2', priceForTwo: '₹1,500 for two', openTime: '09:00', closeTime: '00:30', distanceKm: 6.5, name: 'The Pantry Bandra', cuisine: 'Asian', cuisines: ['asian', 'continental'], mood: 'cafes', rating: 4.4, reviewsCount: '412', price: '₹₹', image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop', location: 'Bandra, Mumbai', distance: '6.5 km', description: 'All-day Asian-inspired cafe with weekend brunch.', friendsActivity: [{ userId: 'f11', name: 'Ishaan Mehta', avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=150&auto=format&fit=crop', rating: 4.5, review: "The avocado toast with miso butter is my go-to. Consistent quality every single time.", date: 'Recently' }, { userId: 'f7', name: 'Neha Gupta', avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=150&auto=format&fit=crop', rating: 2.5, review: "Waited 40 mins for a table on a Sunday. The food was fine but not worth the hype or the wait.", date: 'Recently' }] },
    { id: 'cf_mex2', priceForTwo: '₹1,200 for two', openTime: '09:00', closeTime: '00:30', distanceKm: 5.5, name: 'La Loca Maria', cuisine: 'Mexican', cuisines: ['mexican'], mood: 'cafes', rating: 4.2, reviewsCount: '5.1k', price: '₹₹', image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1974&auto=format&fit=crop', location: 'Juhu, Mumbai', distance: '5.5 km', description: 'Colourful Mexican brunch cafe with churros and aguas frescas.' },
    { id: 'cf_veg2', priceForTwo: '₹1,000 for two', openTime: '09:00', closeTime: '00:30', distanceKm: 4.1, name: 'Soul Bowl', cuisine: 'Pure Veg', cuisines: ['pure_veg', 'continental'], mood: 'cafes', rating: 4.4, reviewsCount: '287', price: '₹₹', image: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?q=80&w=2070&auto=format&fit=crop', location: 'Versova, Mumbai', distance: '4.1 km', description: 'Plant-based bowls, cold-pressed juices, and wellness cafe.' },

    // romantic missing combos
    { id: 'rm_si2', priceForTwo: '₹2,200 for two', openTime: '09:00', closeTime: '00:30', distanceKm: 8.5, name: 'Tanjore Pavilion', cuisine: 'South Indian', cuisines: ['south_indian'], mood: 'romantic', rating: 4.3, reviewsCount: '215', price: '₹₹₹', image: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=2070&auto=format&fit=crop', location: 'Bandra, Mumbai', distance: '8.5 km', description: 'Elegant South Indian dining with Chettinad specialties.', friendsActivity: [{ userId: 'f12', name: 'Kavya Nair', avatar: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=150&auto=format&fit=crop', rating: 4.5, review: "Perfect anniversary dinner spot. Ambiance is stunning and the Chettinad chicken is exceptional.", date: 'Recently' }] },
    { id: 'rm_asi2', priceForTwo: '₹2,800 for two', openTime: '09:00', closeTime: '00:30', distanceKm: 9.5, name: 'Hakkasan Bandra', cuisine: 'Asian', cuisines: ['asian', 'chinese'], mood: 'romantic', rating: 4.6, reviewsCount: '345', price: '₹₹₹', image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop', location: 'Bandra West, Mumbai', distance: '9.5 km', description: 'Intimate Asian fine dining perfect for romantic evenings.' },
    { id: 'rm_mex2', priceForTwo: '₹2,000 for two', openTime: '09:00', closeTime: '00:30', distanceKm: 7.2, name: 'La Casa Mexicana', cuisine: 'Mexican', cuisines: ['mexican'], mood: 'romantic', rating: 4.4, reviewsCount: '189', price: '₹₹₹', image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=2071&auto=format&fit=crop', location: 'Bandra, Mumbai', distance: '7.2 km', description: 'Candlelit Mexican dining with rooftop seating.', friendsActivity: [{ userId: 'f5', name: 'Sana Khan', avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=150&auto=format&fit=crop', rating: 4.5, review: "Proposed here and said yes! The rooftop at sunset is magical. Staff went above and beyond.", date: 'Recently' }, { userId: 'f6', name: 'Vikram Desai', avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=150&auto=format&fit=crop', rating: 2.0, review: "Completely killed the vibe by rushing us out for the next reservation. Food was mediocre and overpriced for a 'romantic' setting.", date: 'Recently' }] },
    { id: 'rm_veg2', priceForTwo: '₹2,400 for two', openTime: '09:00', closeTime: '00:30', distanceKm: 9.2, name: 'Shizen Organic', cuisine: 'Pure Veg', cuisines: ['pure_veg', 'asian'], mood: 'romantic', rating: 4.5, reviewsCount: '1.4k', price: '₹₹₹', image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop', location: 'Bandra, Mumbai', distance: '9.2 km', description: 'Japanese-inspired organic vegetarian fine dining.' },

    // family missing combos
    { id: 'fm_si2', priceForTwo: '₹1,000 for two', openTime: '09:00', closeTime: '00:30', distanceKm: 5.2, name: 'Arya Bhavan', cuisine: 'South Indian', cuisines: ['south_indian', 'pure_veg'], mood: 'family', rating: 4.2, reviewsCount: '678', price: '₹', image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=2070&auto=format&fit=crop', location: 'Versova, Mumbai', distance: '5.2 km', description: 'Authentic South Indian thali for the whole family.', friendsActivity: [{ userId: 'f2', name: 'Rohan Kapoor', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop', rating: 4.5, review: "Best unlimited thali in the area. Clean, quick service, and the rasam is outstanding.", date: 'Recently' }] },
    { id: 'fm_ita2', priceForTwo: '₹1,800 for two', openTime: '09:00', closeTime: '00:30', distanceKm: 5.8, name: 'Via Milano Juhu', cuisine: 'Italian', cuisines: ['italian'], mood: 'family', rating: 4.1, reviewsCount: '6.2k', price: '₹₹', image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=2069&auto=format&fit=crop', location: 'Juhu, Mumbai', distance: '5.8 km', description: 'Family-friendly Italian with kids menu and wood-fired pizza.' },
    { id: 'fm_asi2', priceForTwo: '₹1,600 for two', openTime: '09:00', closeTime: '00:30', distanceKm: 7.8, name: 'Wok to Walk', cuisine: 'Asian', cuisines: ['asian', 'chinese'], mood: 'family', rating: 4.0, reviewsCount: '534', price: '₹₹', image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?q=80&w=2072&auto=format&fit=crop', location: 'Bandra, Mumbai', distance: '7.8 km', description: 'Casual Asian stir-fry restaurant great for families.', friendsActivity: [{ userId: 'f4', name: 'Amit Singh', avatar: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?q=80&w=150&auto=format&fit=crop', rating: 2.5, review: "Chaotic ordering system and inconsistent portions. Kids loved it but parents were frustrated with service.", date: 'Recently' }] },
    { id: 'fm_mex2', priceForTwo: '₹1,400 for two', openTime: '09:00', closeTime: '00:30', distanceKm: 7.2, name: 'Taco Bell Bandra', cuisine: 'Mexican', cuisines: ['mexican'], mood: 'family', rating: 3.9, reviewsCount: '780', price: '₹', image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1974&auto=format&fit=crop', location: 'Bandra, Mumbai', distance: '7.2 km', description: 'Quick-service Mexican favourites for the whole family.' },
    { id: 'fm_cont2', priceForTwo: '₹1,200 for two', openTime: '09:00', closeTime: '00:30', distanceKm: 4.2, name: 'Theobroma Andheri', cuisine: 'Continental', cuisines: ['continental'], mood: 'family', rating: 4.5, reviewsCount: '1.1k', price: '₹₹', image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop', location: 'Andheri West, Mumbai', distance: '4.2 km', description: 'Beloved bakery-cafe with sandwiches, desserts, and pastas.', friendsActivity: [{ userId: 'f9', name: 'Ananya Rao', avatar: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=150&auto=format&fit=crop', rating: 4.5, review: "The salted caramel brownies are non-negotiable. Perfect place for family tea-time.", date: 'Recently' }] },

    // fine_dining missing combos
    { id: 'fd_ni2', priceForTwo: '₹3,500 for two', openTime: '09:00', closeTime: '00:30', distanceKm: 13.5, name: 'Bukhara BKC', cuisine: 'North Indian', cuisines: ['north_indian'], mood: 'fine_dining', rating: 4.6, reviewsCount: '2.4k', price: '₹₹₹', image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop', location: 'BKC, Mumbai', distance: '13.5 km', description: 'Refined North Indian with legendary dal bukhara.', friendsActivity: [{ userId: 'f15', name: 'Arjun Khanna', avatar: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=150&auto=format&fit=crop', rating: 4.5, review: "Dal Bukhara is worth every rupee. The service is impeccable and the tandoor breads are exceptional.", date: 'Recently' }, { userId: 'f3', name: 'Priya Verma', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop', rating: 2.0, review: "Completely overrated and overpriced. The dal is good but not worth ₹3500 per head. Better options exist.", date: 'Recently' }] },
    { id: 'fd_si2', priceForTwo: '₹2,800 for two', openTime: '09:00', closeTime: '00:30', distanceKm: 13.2, name: 'Aromas of South BKC', cuisine: 'South Indian', cuisines: ['south_indian'], mood: 'fine_dining', rating: 4.2, reviewsCount: '3.2k', price: '₹₹₹', image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?q=80&w=2070&auto=format&fit=crop', location: 'BKC, Mumbai', distance: '13.2 km', description: 'Elevated South Indian fine dining with Kerala specialties.' },
    { id: 'fd_ita2', priceForTwo: '₹3,200 for two', openTime: '09:00', closeTime: '00:30', distanceKm: 12.5, name: 'Celini Restaurant', cuisine: 'Italian', cuisines: ['italian'], mood: 'fine_dining', rating: 4.5, reviewsCount: '920', price: '₹₹₹', image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?q=80&w=2032&auto=format&fit=crop', location: 'Grand Hyatt, Santa Cruz', distance: '12.5 km', description: 'Award-winning Italian fine dining at Grand Hyatt.', friendsActivity: [{ userId: 'f13', name: 'Dev Malhotra', avatar: 'https://images.unsplash.com/photo-1463453091185-61582044d556?q=80&w=150&auto=format&fit=crop', rating: 5.0, review: "The truffle risotto is flawless. Every detail from plating to service is five star. Worth every penny for a special occasion.", date: 'Recently' }] },
    { id: 'fd_chi2', priceForTwo: '₹3,000 for two', openTime: '09:00', closeTime: '00:30', distanceKm: 12.8, name: 'China Kitchen BKC', cuisine: 'Chinese', cuisines: ['chinese', 'asian'], mood: 'fine_dining', rating: 4.4, reviewsCount: '267', price: '₹₹₹', image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?q=80&w=2070&auto=format&fit=crop', location: 'Hyatt Regency BKC, Mumbai', distance: '12.8 km', description: 'Refined Cantonese cuisine at Hyatt Regency BKC.' },
    { id: 'fd_mex2', priceForTwo: '₹2,600 for two', openTime: '09:00', closeTime: '00:30', distanceKm: 13.2, name: 'El Torito BKC', cuisine: 'Mexican', cuisines: ['mexican'], mood: 'fine_dining', rating: 4.3, reviewsCount: '145', price: '₹₹₹', image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=2071&auto=format&fit=crop', location: 'BKC, Mumbai', distance: '13.2 km', description: 'Fine Mexican dining with tableside guacamole.', friendsActivity: [{ userId: 'f14', name: 'Tara Reddy', avatar: 'https://images.unsplash.com/photo-1502764613149-7f1d229e230f?q=80&w=150&auto=format&fit=crop', rating: 2.5, review: "Mexican fine dining is an oxymoron here. Ordinary tacos dressed up at premium prices. Save your money.", date: 'Recently' }] },
    { id: 'fd_veg2', priceForTwo: '₹2,800 for two', openTime: '09:00', closeTime: '00:30', distanceKm: 13.5, name: 'Comorin BKC', cuisine: 'Pure Veg', cuisines: ['pure_veg', 'north_indian'], mood: 'fine_dining', rating: 4.6, reviewsCount: '1.7k', price: '₹₹₹', image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop', location: 'BKC, Mumbai', distance: '13.5 km', description: 'Modern Indian vegetarian fine dining celebrating regional ingredients.' },

    // outdoor missing combos
    { id: 'od_si2', priceForTwo: '₹1,200 for two', openTime: '09:00', closeTime: '00:30', distanceKm: 8.2, name: 'Madras Pavilion Bandra', cuisine: 'South Indian', cuisines: ['south_indian', 'pure_veg'], mood: 'outdoor', rating: 4.1, reviewsCount: '4.2k', price: '₹₹', image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=2070&auto=format&fit=crop', location: 'Bandra, Mumbai', distance: '8.2 km', description: 'South Indian with a lovely open courtyard.', friendsActivity: [{ userId: 'f12', name: 'Kavya Nair', avatar: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=150&auto=format&fit=crop', rating: 4.5, review: "The courtyard seating is gorgeous in the evening. Set dosa and coconut chutney is perfection.", date: 'Recently' }] },
    { id: 'od_ita2', priceForTwo: '₹2,000 for two', openTime: '09:00', closeTime: '00:30', distanceKm: 6.5, name: 'Trattoria Juhu', cuisine: 'Italian', cuisines: ['italian'], mood: 'outdoor', rating: 4.3, reviewsCount: '245', price: '₹₹₹', image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?q=80&w=2032&auto=format&fit=crop', location: 'Juhu, Mumbai', distance: '6.5 km', description: 'Breezy alfresco Italian with garden seating.' },
    { id: 'od_chi2', priceForTwo: '₹1,800 for two', openTime: '09:00', closeTime: '00:30', distanceKm: 9.5, name: 'Dragon Court Terrace', cuisine: 'Chinese', cuisines: ['chinese'], mood: 'outdoor', rating: 4.0, reviewsCount: '630', price: '₹₹', image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?q=80&w=2070&auto=format&fit=crop', location: 'Bandra, Mumbai', distance: '9.5 km', description: 'Rooftop Chinese restaurant with open-air terrace.', friendsActivity: [{ userId: 'f11', name: 'Ishaan Mehta', avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=150&auto=format&fit=crop', rating: 2.5, review: "Terrace is nice but food is mediocre Cantonese. The breeze cannot compensate for bland noodles and overcooked rice.", date: 'Recently' }] },
    { id: 'od_mex2', priceForTwo: '₹1,600 for two', openTime: '09:00', closeTime: '00:30', distanceKm: 7.2, name: 'Chipotle Bandra', cuisine: 'Mexican', cuisines: ['mexican'], mood: 'outdoor', rating: 4.1, reviewsCount: '2.6k', price: '₹₹', image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=2071&auto=format&fit=crop', location: 'Bandra, Mumbai', distance: '7.2 km', description: 'Casual Mexican with outdoor seating and fresh burritos.' },
    { id: 'od_veg2', priceForTwo: '₹1,000 for two', openTime: '09:00', closeTime: '00:30', distanceKm: 5.2, name: 'The Green Door Juhu', cuisine: 'Pure Veg', cuisines: ['pure_veg', 'continental'], mood: 'outdoor', rating: 4.3, reviewsCount: '223', price: '₹₹', image: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?q=80&w=2070&auto=format&fit=crop', location: 'Juhu, Mumbai', distance: '5.2 km', description: 'Garden cafe with organic veg menu and herbal teas.', friendsActivity: [{ userId: 'f15', name: 'Arjun Khanna', avatar: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=150&auto=format&fit=crop', rating: 4.5, review: "Hidden gem! The garden seating is so peaceful. Vegan options are actually delicious, not an afterthought.", date: 'Recently' }] }
];

// --- Movie Data ---

export const movieGenres = [
    { id: 'comedy', name: 'Comedy', icon: 'Smile' },
    { id: 'horror', name: 'Horror', icon: 'Ghost' },
    { id: 'romance', name: 'Romance', icon: 'Heart' },
    { id: 'action', name: 'Action', icon: 'Zap' },
    { id: 'thriller', name: 'Thriller', icon: 'Eye' },
    { id: 'sci_fi', name: 'Science Fiction', icon: 'Cpu' },
];

export const movieLanguages = [
    { id: 'hindi', name: 'Hindi' },
    { id: 'english', name: 'English' },
    { id: 'tamil', name: 'Tamil' },
    { id: 'telugu', name: 'Telugu' },
    { id: 'malayalam', name: 'Malayalam' },
];

export const movies = [
    // --- New Releases / Top Picks ---
    {
        id: 'm1', distanceKm: 2, theatres: [{"name":"PVR Juhu","distance":2.5,"startingPrice":299},{"name":"INOX Megaplex Andheri","distance":1.8,"startingPrice":249},{"name":"Cinepolis Fun Republic","distance":3.2,"startingPrice":229},{"name":"PVR Versova","distance":4.1,"startingPrice":279}], title: 'Dune: Part Two', genre: 'Sci-Fi/Adventure', genres: ['sci_fi', 'action'], rating: 4.9, reviewsCount: '1.2k',
        image: 'https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=2070&auto=format&fit=crop', duration: '2h 46m', language: 'English', format: 'IMAX 2D',
        newRelease: true, friendsActivity: [
            { userId: 'f4', name: 'Amit Singh', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop', rating: 3, review: "Engaging for the most part but the second half really dragged. Be prepared for a long runtime.", date: 'Recently' }
        ]
    },
    {
        id: 'm2', distanceKm: 3.5, theatres: [{"name":"INOX Megaplex Andheri","distance":1.8,"startingPrice":199},{"name":"Cinepolis Fun Republic","distance":3.2,"startingPrice":179},{"name":"PVR Bandra","distance":5.8,"startingPrice":219},{"name":"PVR Juhu","distance":2.5,"startingPrice":209}], title: 'Laapataa Ladies', genre: 'Comedy/Drama', genres: ['comedy'], rating: 4.2, reviewsCount: '1.2k',
        image: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=2025&auto=format&fit=crop', duration: '2h 4m', language: 'Hindi', format: '2D',
        newRelease: true, friendsActivity: [
            { userId: 'f8', name: 'Karan Patel', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop', rating: 4.0, review: "Not bad, would go again.", date: 'Recently' },
            { userId: 'f1', name: 'Aditi Sharma', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop', rating: 5.0, review: "The performances save what's otherwise a predictable screenplay. Worth a single watch.", date: 'Recently' }
        ]
    },
    {
        id: 'm3', distanceKm: 4, theatres: [{"name":"PVR Juhu","distance":2.5,"startingPrice":249},{"name":"INOX Megaplex Andheri","distance":1.8,"startingPrice":219},{"name":"MovieMax Miraroad","distance":14,"startingPrice":149},{"name":"Cinepolis Fun Republic","distance":3.2,"startingPrice":199}], title: 'Kung Fu Panda 4', genre: 'Animation', genres: ['comedy', 'action'], rating: 4, reviewsCount: '1.2k',
        image: 'https://images.unsplash.com/photo-1533488765986-dfa2a9939acd?q=80&w=1974&auto=format&fit=crop', duration: '1h 34m', language: 'English', format: '3D',
        newRelease: true, friendsActivity: [
            { userId: 'f8', name: 'Karan Patel', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop', rating: 3, review: "Visually stunning but emotionally hollow. Looks great on IMAX but the story is thin.", date: 'Recently' }
        ]
    },

    // --- Action ---
    {
        id: 'act_1', distanceKm: 3, theatres: [{"name":"INOX Megaplex Andheri","distance":1.8,"startingPrice":219},{"name":"PVR Juhu","distance":2.5,"startingPrice":249},{"name":"Cinepolis Fun Republic","distance":3.2,"startingPrice":199},{"name":"MovieMax Miraroad","distance":14,"startingPrice":149}], title: 'Fighter', genre: 'Action/Thriller', genres: ['action', 'thriller'], rating: 3.9, reviewsCount: '1.2k',
        image: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=2025&auto=format&fit=crop', duration: '2h 46m', language: 'Hindi', format: '3D'
    },
    {
        id: 'act_2', distanceKm: 5.5, theatres: [{"name":"INOX Megaplex Andheri","distance":1.8,"startingPrice":219},{"name":"PVR Juhu","distance":2.5,"startingPrice":249},{"name":"Cinepolis Fun Republic","distance":3.2,"startingPrice":199},{"name":"MovieMax Miraroad","distance":14,"startingPrice":149}], title: 'Mission Impossible', genre: 'Action/Spy', genres: ['action', 'thriller'], rating: 4.5, reviewsCount: '1.2k',
        image: 'https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=2070&auto=format&fit=crop', duration: '2h 35m', language: 'English', format: 'IMAX 2D'
    ,
        friendsActivity: [
            { userId: 'f5', name: 'Sana Khan', avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=150&auto=format&fit=crop', rating: 2.5, review: "Overhyped action franchise. The plot was a mess and even Tom Cruise couldn't save this one. Waste of time.", date: 'Recently' }
        ]
    },
    {
        id: 'act_3', distanceKm: 3.5, theatres: [{"name":"INOX Megaplex Andheri","distance":1.8,"startingPrice":219},{"name":"PVR Juhu","distance":2.5,"startingPrice":249},{"name":"Cinepolis Fun Republic","distance":3.2,"startingPrice":199},{"name":"MovieMax Miraroad","distance":14,"startingPrice":149}], title: 'Leo', genre: 'Action/Drama', genres: ['action'], rating: 4.3, reviewsCount: '1.2k',
        image: 'https://images.unsplash.com/photo-1533488765986-dfa2a9939acd?q=80&w=1974&auto=format&fit=crop', duration: '2h 44m', language: 'Tamil', format: '2D'
    ,
        friendsActivity: [
            { userId: 'f11', name: 'Ishaan Mehta', avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=150&auto=format&fit=crop', rating: 2.5, review: "Disappointing Lokesh film. The story is incoherent and the fanservice overwhelms any narrative. Expected much more.", date: 'Recently' }
        ]
    },

    // --- Comedy ---
    {
        id: 'com_1', distanceKm: 2.5, theatres: [{"name":"INOX Megaplex Andheri","distance":1.8,"startingPrice":219},{"name":"PVR Juhu","distance":2.5,"startingPrice":249},{"name":"Cinepolis Fun Republic","distance":3.2,"startingPrice":199},{"name":"MovieMax Miraroad","distance":14,"startingPrice":149}], title: 'Madgaon Express', genre: 'Comedy', genres: ['comedy'], rating: 4.5, reviewsCount: '1.2k',
        image: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=2025&auto=format&fit=crop', duration: '2h 15m', language: 'Hindi', format: '2D',
        friendsActivity: [
            { userId: 'f4', name: 'Amit Singh', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop', rating: 4.5, review: "Funnier than part 1 honestly. Tamannaah is the highlight — she's hilarious. Wait for the end credit scene, it's wild.", date: 'Recently' }
        ]
    },
    {
        id: 'com_2', distanceKm: 3.5, theatres: [{"name":"INOX Megaplex Andheri","distance":1.8,"startingPrice":219},{"name":"PVR Juhu","distance":2.5,"startingPrice":249},{"name":"Cinepolis Fun Republic","distance":3.2,"startingPrice":199},{"name":"MovieMax Miraroad","distance":14,"startingPrice":149}], title: 'Premalu', genre: 'Rom-Com', genres: ['comedy', 'romance'], rating: 4.5, reviewsCount: '1.2k',
        image: 'https://images.unsplash.com/photo-1533488765986-dfa2a9939acd?q=80&w=1974&auto=format&fit=crop', duration: '2h 36m', language: 'Malayalam', format: '2D'
    ,
        friendsActivity: [
            { userId: 'f13', name: 'Dev Malhotra', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop', rating: 2.5, review: "Didn't connect with the humor at all. Feels like it's aimed at a very specific audience and I wasn't it.", date: 'Recently' }
        ]
    },

    // --- Horror ---
    {
        id: 'hor_1', distanceKm: 3.5, theatres: [{"name":"INOX Megaplex Andheri","distance":1.8,"startingPrice":219},{"name":"PVR Juhu","distance":2.5,"startingPrice":249},{"name":"Cinepolis Fun Republic","distance":3.2,"startingPrice":199},{"name":"MovieMax Miraroad","distance":14,"startingPrice":149}], title: 'Shaitaan', genre: 'Horror/Thriller', genres: ['horror', 'thriller'], rating: 4.6, reviewsCount: '1.2k',
        image: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=2025&auto=format&fit=crop', duration: '2h 12m', language: 'Hindi', format: '2D'
    ,
        friendsActivity: [
            { userId: 'f10', name: 'Rahul Bose', avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=150&auto=format&fit=crop', rating: 3.0, review: "Starts strong but completely falls apart in the third act. The ending was rushed and unsatisfying.", date: 'Recently' }
        ]
    },
    {
        id: 'hor_2', distanceKm: 3.5, theatres: [{"name":"INOX Megaplex Andheri","distance":1.8,"startingPrice":219},{"name":"PVR Juhu","distance":2.5,"startingPrice":249},{"name":"Cinepolis Fun Republic","distance":3.2,"startingPrice":199},{"name":"MovieMax Miraroad","distance":14,"startingPrice":149}], title: 'The First Omen', genre: 'Horror', genres: ['horror'], rating: 4.7, reviewsCount: '1.2k',
        image: 'https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=2070&auto=format&fit=crop', duration: '1h 59m', language: 'English', format: '2D'
    },
    {
        id: 'hor_3', distanceKm: 3.5, theatres: [{"name":"INOX Megaplex Andheri","distance":1.8,"startingPrice":219},{"name":"PVR Juhu","distance":2.5,"startingPrice":249},{"name":"Cinepolis Fun Republic","distance":3.2,"startingPrice":199},{"name":"MovieMax Miraroad","distance":14,"startingPrice":149}], title: 'Bramayugam', genre: 'Horror/Thriller', genres: ['horror', 'thriller'], rating: 4.3, reviewsCount: '1.2k',
        image: 'https://images.unsplash.com/photo-1533488765986-dfa2a9939acd?q=80&w=1974&auto=format&fit=crop', duration: '2h 19m', language: 'Malayalam', format: '2D'
    },

    // --- Romance ---
    {
        id: 'rom_1', distanceKm: 3, theatres: [{"name":"INOX Megaplex Andheri","distance":1.8,"startingPrice":219},{"name":"PVR Juhu","distance":2.5,"startingPrice":249},{"name":"Cinepolis Fun Republic","distance":3.2,"startingPrice":199},{"name":"MovieMax Miraroad","distance":14,"startingPrice":149}], title: 'Teri Baaton Mein...', genre: 'Romance/Sci-Fi', genres: ['romance', 'sci_fi'], rating: 4, reviewsCount: '1.2k',
        image: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=2025&auto=format&fit=crop', duration: '2h 23m', language: 'Hindi', format: '2D'
    },
    {
        id: 'rom_2', distanceKm: 3.5, theatres: [{"name":"INOX Megaplex Andheri","distance":1.8,"startingPrice":219},{"name":"PVR Juhu","distance":2.5,"startingPrice":249},{"name":"Cinepolis Fun Republic","distance":3.2,"startingPrice":199},{"name":"MovieMax Miraroad","distance":14,"startingPrice":149}], title: 'Hi Nanna', genre: 'Romance/Drama', genres: ['romance'], rating: 4.4, reviewsCount: '1.2k',
        image: 'https://images.unsplash.com/photo-1533488765986-dfa2a9939acd?q=80&w=1974&auto=format&fit=crop', duration: '2h 35m', language: 'Telugu', format: '2D'
    ,
        friendsActivity: [
            { userId: 'f14', name: 'Tara Reddy', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop', rating: 2.5, review: "Manipulative tearjerker that mistakes sentimentality for genuine emotion. The third act felt forced and contrived.", date: 'Recently' }
        ]
    },

    // --- Thriller ---
    {
        id: 'thr_1', distanceKm: 2, theatres: [{"name":"INOX Megaplex Andheri","distance":1.8,"startingPrice":219},{"name":"PVR Juhu","distance":2.5,"startingPrice":249},{"name":"Cinepolis Fun Republic","distance":3.2,"startingPrice":199},{"name":"MovieMax Miraroad","distance":14,"startingPrice":149}], title: 'Merry Christmas', genre: 'Thriller', genres: ['thriller'], rating: 4.2, reviewsCount: '1.2k',
        image: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=2025&auto=format&fit=crop', duration: '2h 24m', language: 'Hindi', format: '2D'
    },
    {
        id: 'thr_2', distanceKm: 3.5, theatres: [{"name":"INOX Megaplex Andheri","distance":1.8,"startingPrice":219},{"name":"PVR Juhu","distance":2.5,"startingPrice":249},{"name":"Cinepolis Fun Republic","distance":3.2,"startingPrice":199},{"name":"MovieMax Miraroad","distance":14,"startingPrice":149}], title: 'Anatomy of a Fall', genre: 'Thriller/Drama', genres: ['thriller'], rating: 4.6, reviewsCount: '1.2k',
        image: 'https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=2070&auto=format&fit=crop', duration: '2h 31m', language: 'English', format: '2D'
    ,
        friendsActivity: [
            { userId: 'f4', name: 'Amit Singh', avatar: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?q=80&w=150&auto=format&fit=crop', rating: 3.0, review: "Too slow for my taste. The courtroom drama is interesting but the 2.5-hour runtime makes it a slog.", date: 'Recently' }
        ]
    },

    // --- Sci-Fi ---
    {
        id: 'sci_1', distanceKm: 2, theatres: [{"name":"INOX Megaplex Andheri","distance":1.8,"startingPrice":219},{"name":"PVR Juhu","distance":2.5,"startingPrice":249},{"name":"Cinepolis Fun Republic","distance":3.2,"startingPrice":199},{"name":"MovieMax Miraroad","distance":14,"startingPrice":149}], title: 'Kalki 2898 AD', genre: 'Sci-Fi/Mythology', genres: ['sci_fi', 'action'], rating: 4.4, reviewsCount: '1.2k',
        image: 'https://images.unsplash.com/photo-1533488765986-dfa2a9939acd?q=80&w=1974&auto=format&fit=crop', duration: '2h 50m', language: 'Telugu', format: 'IMAX 3D'
    },
    {
        id: 'sci_2', distanceKm: 6, theatres: [{"name":"INOX Megaplex Andheri","distance":1.8,"startingPrice":219},{"name":"PVR Juhu","distance":2.5,"startingPrice":249},{"name":"Cinepolis Fun Republic","distance":3.2,"startingPrice":199},{"name":"MovieMax Miraroad","distance":14,"startingPrice":149}], title: 'Godzilla x Kong', genre: 'Sci-Fi/Action', genres: ['sci_fi', 'action'], rating: 4.8, reviewsCount: '1.2k',
        image: 'https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=2070&auto=format&fit=crop', duration: '1h 55m', language: 'English', format: 'IMAX 3D'
    ,
        friendsActivity: [
            { userId: 'f12', name: 'Kavya Nair', avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=150&auto=format&fit=crop', rating: 3.0, review: "Pure spectacle with zero substance. The plot is nonsensical and characters are cardboard. Fun for 30 mins then repetitive.", date: 'Recently' }
        ]
    },

    // --- Missing Categories Additions ---
    { id: 'com_tam_1', distanceKm: 3.5, theatres: [{"name":"INOX Megaplex Andheri","distance":1.8,"startingPrice":219},{"name":"PVR Juhu","distance":2.5,"startingPrice":249},{"name":"Cinepolis Fun Republic","distance":3.2,"startingPrice":199},{"name":"MovieMax Miraroad","distance":14,"startingPrice":149}], title: 'Comali', genre: 'Comedy', genres: ['comedy'], rating: 4.5, reviewsCount: '2k', image: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=2025&auto=format&fit=crop', duration: '2h 20m', language: 'Tamil', format: '2D', friendsActivity: [{ userId: 'f5', name: 'Sana Khan', avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=150&auto=format&fit=crop', rating: 4.5, review: "Hilarious throughout — Jayam Ravi's comic timing is surprisingly great. Best Tamil comedy in years.", date: 'Recently' }] },
    { id: 'com_tel_1', distanceKm: 3.5, theatres: [{"name":"INOX Megaplex Andheri","distance":1.8,"startingPrice":219},{"name":"PVR Juhu","distance":2.5,"startingPrice":249},{"name":"Cinepolis Fun Republic","distance":3.2,"startingPrice":199},{"name":"MovieMax Miraroad","distance":14,"startingPrice":149}], title: 'Jathi Ratnalu', genre: 'Comedy', genres: ['comedy'], rating: 4.6, reviewsCount: '3.5k', image: 'https://images.unsplash.com/photo-1533488765986-dfa2a9939acd?q=80&w=1974&auto=format&fit=crop', duration: '2h 25m', language: 'Telugu', format: '2D' },
    { id: 'hor_tam_1', distanceKm: 3.5, theatres: [{"name":"INOX Megaplex Andheri","distance":1.8,"startingPrice":219},{"name":"PVR Juhu","distance":2.5,"startingPrice":249},{"name":"Cinepolis Fun Republic","distance":3.2,"startingPrice":199},{"name":"MovieMax Miraroad","distance":14,"startingPrice":149}], title: 'Pizza', genre: 'Horror', genres: ['horror'], rating: 4.5, reviewsCount: '1.2k', image: 'https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=2070&auto=format&fit=crop', duration: '2h 0m', language: 'Tamil', format: '2D', friendsActivity: [{ userId: 'f9', name: 'Ananya Rao', avatar: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=150&auto=format&fit=crop', rating: 2.5, review: "More psychological thriller than horror. Predictable twist if you've seen similar films. Overhyped — watch on OTT.", date: 'Recently' }] },
    { id: 'hor_tel_1', distanceKm: 3.5, theatres: [{"name":"INOX Megaplex Andheri","distance":1.8,"startingPrice":219},{"name":"PVR Juhu","distance":2.5,"startingPrice":249},{"name":"Cinepolis Fun Republic","distance":3.2,"startingPrice":199},{"name":"MovieMax Miraroad","distance":14,"startingPrice":149}], title: 'Masooda', genre: 'Horror', genres: ['horror'], rating: 4, reviewsCount: '1.8k', image: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=2025&auto=format&fit=crop', duration: '2h 40m', language: 'Telugu', format: '2D' },
    { id: 'rom_eng_1', distanceKm: 3.5, theatres: [{"name":"INOX Megaplex Andheri","distance":1.8,"startingPrice":219},{"name":"PVR Juhu","distance":2.5,"startingPrice":249},{"name":"Cinepolis Fun Republic","distance":3.2,"startingPrice":199},{"name":"MovieMax Miraroad","distance":14,"startingPrice":149}], title: 'La La Land', genre: 'Romance', genres: ['romance'], rating: 4.4, reviewsCount: '5k', image: 'https://images.unsplash.com/photo-1533488765986-dfa2a9939acd?q=80&w=1974&auto=format&fit=crop', duration: '2h 8m', language: 'English', format: '2D', friendsActivity: [{ userId: 'f1', name: 'Aditi Sharma', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop', rating: 5.0, review: "Absolutely magical. The music stays with you for days. Best watch in a theatre on the big screen.", date: 'Recently' }] },
    { id: 'rom_tam_1', distanceKm: 3.5, theatres: [{"name":"INOX Megaplex Andheri","distance":1.8,"startingPrice":219},{"name":"PVR Juhu","distance":2.5,"startingPrice":249},{"name":"Cinepolis Fun Republic","distance":3.2,"startingPrice":199},{"name":"MovieMax Miraroad","distance":14,"startingPrice":149}], title: '96', genre: 'Romance', genres: ['romance'], rating: 4.2, reviewsCount: '4k', image: 'https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=2070&auto=format&fit=crop', duration: '2h 38m', language: 'Tamil', format: '2D' },
    { id: 'act_mal_1', distanceKm: 3.5, theatres: [{"name":"INOX Megaplex Andheri","distance":1.8,"startingPrice":219},{"name":"PVR Juhu","distance":2.5,"startingPrice":249},{"name":"Cinepolis Fun Republic","distance":3.2,"startingPrice":199},{"name":"MovieMax Miraroad","distance":14,"startingPrice":149}], title: 'Minnal Murali', genre: 'Action', genres: ['action'], rating: 4.8, reviewsCount: '3k', image: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=2025&auto=format&fit=crop', duration: '2h 38m', language: 'Malayalam', format: '2D', friendsActivity: [{ userId: 'f10', name: 'Rahul Bose', avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=150&auto=format&fit=crop', rating: 5.0, review: "Best superhero origin story from India. The village backdrop makes it feel completely fresh. Watch it!", date: 'Recently' }] },
    { id: 'sci_tam_1', distanceKm: 3.5, theatres: [{"name":"INOX Megaplex Andheri","distance":1.8,"startingPrice":219},{"name":"PVR Juhu","distance":2.5,"startingPrice":249},{"name":"Cinepolis Fun Republic","distance":3.2,"startingPrice":199},{"name":"MovieMax Miraroad","distance":14,"startingPrice":149}], title: '24', genre: 'Sci-Fi', genres: ['sci_fi'], rating: 4.8, reviewsCount: '2.5k', image: 'https://images.unsplash.com/photo-1533488765986-dfa2a9939acd?q=80&w=1974&auto=format&fit=crop', duration: '2h 44m', language: 'Tamil', format: '2D' },
    { id: 'sci_mal_1', distanceKm: 3.5, theatres: [{"name":"INOX Megaplex Andheri","distance":1.8,"startingPrice":219},{"name":"PVR Juhu","distance":2.5,"startingPrice":249},{"name":"Cinepolis Fun Republic","distance":3.2,"startingPrice":199},{"name":"MovieMax Miraroad","distance":14,"startingPrice":149}], title: 'Android Kunjappan Version 5.25', genre: 'Sci-Fi', genres: ['sci_fi'], rating: 4.3, reviewsCount: '1.5k', image: 'https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=2070&auto=format&fit=crop', duration: '2h 20m', language: 'Malayalam', format: '2D', friendsActivity: [{ userId: 'f3', name: 'Priya Verma', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop', rating: 2.5, review: "The concept is interesting but execution feels rushed. Too many subplots left unresolved. Wait for streaming.", date: 'Recently' }] },

    // --- Full combo coverage — 2nd items per genre×language ---

    // Comedy — English, Tamil, Telugu, Malayalam 2nd items
    { id: 'com_eng_2', distanceKm: 3, theatres: [{"name":"INOX Megaplex Andheri","distance":1.8,"startingPrice":219},{"name":"PVR Juhu","distance":2.5,"startingPrice":249},{"name":"Cinepolis Fun Republic","distance":3.2,"startingPrice":199},{"name":"MovieMax Miraroad","distance":14,"startingPrice":149}], title: 'The Grand Budapest Hotel', genre: 'Comedy/Drama', genres: ['comedy'], rating: 4.7, reviewsCount: '3.2k', image: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=2025&auto=format&fit=crop', duration: '1h 39m', language: 'English', format: '2D', friendsActivity: [{ userId: 'f11', name: 'Ishaan Mehta', avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=150&auto=format&fit=crop', rating: 5.0, review: "Wes Anderson at his absolute best. Every frame is a painting. Watch it on the biggest screen you can find.", date: 'Recently' }] },
    { id: 'com_tam_2', distanceKm: 3.5, theatres: [{"name":"INOX Megaplex Andheri","distance":1.8,"startingPrice":219},{"name":"PVR Juhu","distance":2.5,"startingPrice":249},{"name":"Cinepolis Fun Republic","distance":3.2,"startingPrice":199},{"name":"MovieMax Miraroad","distance":14,"startingPrice":149}], title: 'Soodhu Kavvum', genre: 'Comedy/Crime', genres: ['comedy'], rating: 4.6, reviewsCount: '2.8k', image: 'https://images.unsplash.com/photo-1533488765986-dfa2a9939acd?q=80&w=1974&auto=format&fit=crop', duration: '2h 5m', language: 'Tamil', format: '2D' },
    { id: 'com_tel_2', distanceKm: 3.5, theatres: [{"name":"INOX Megaplex Andheri","distance":1.8,"startingPrice":219},{"name":"PVR Juhu","distance":2.5,"startingPrice":249},{"name":"Cinepolis Fun Republic","distance":3.2,"startingPrice":199},{"name":"MovieMax Miraroad","distance":14,"startingPrice":149}], title: 'Ala Vaikunthapurramuloo', genre: 'Comedy/Drama', genres: ['comedy'], rating: 4.4, reviewsCount: '4.1k', image: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=2025&auto=format&fit=crop', duration: '2h 55m', language: 'Telugu', format: '2D', friendsActivity: [{ userId: 'f13', name: 'Dev Malhotra', avatar: 'https://images.unsplash.com/photo-1463453091185-61582044d556?q=80&w=150&auto=format&fit=crop', rating: 2.5, review: "Hugely overlong — two hours too many. The comedy bits land but the melodrama is exhausting. Wait for OTT.", date: 'Recently' }] },
    { id: 'com_mal_2', distanceKm: 3.5, theatres: [{"name":"INOX Megaplex Andheri","distance":1.8,"startingPrice":219},{"name":"PVR Juhu","distance":2.5,"startingPrice":249},{"name":"Cinepolis Fun Republic","distance":3.2,"startingPrice":199},{"name":"MovieMax Miraroad","distance":14,"startingPrice":149}], title: 'Oru Vadakkan Selfie', genre: 'Comedy/Drama', genres: ['comedy'], rating: 4.3, reviewsCount: '1.8k', image: 'https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=2070&auto=format&fit=crop', duration: '2h 25m', language: 'Malayalam', format: '2D' },

    // Horror — Hindi, English, Tamil, Telugu, Malayalam 2nd items
    { id: 'hor_hin_2', distanceKm: 3, theatres: [{"name":"INOX Megaplex Andheri","distance":1.8,"startingPrice":219},{"name":"PVR Juhu","distance":2.5,"startingPrice":249},{"name":"Cinepolis Fun Republic","distance":3.2,"startingPrice":199},{"name":"MovieMax Miraroad","distance":14,"startingPrice":149}], title: 'Stree 2', genre: 'Horror/Comedy', genres: ['horror', 'comedy'], rating: 4.8, reviewsCount: '5.2k', image: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=2025&auto=format&fit=crop', duration: '2h 15m', language: 'Hindi', format: '2D', friendsActivity: [{ userId: 'f8', name: 'Karan Patel', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop', rating: 5.0, review: "Better than the first. The comedy-horror balance is perfect and the cameos are insane. Watch with a crowd!", date: 'Recently' }, { userId: 'f9', name: 'Ananya Rao', avatar: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=150&auto=format&fit=crop', rating: 2.5, review: "Too much fan service and not enough actual horror. Felt like a 2-hour extended cameo reel. Disappointing after the hype.", date: 'Recently' }] },
    { id: 'hor_eng_2', distanceKm: 3.5, theatres: [{"name":"INOX Megaplex Andheri","distance":1.8,"startingPrice":219},{"name":"PVR Juhu","distance":2.5,"startingPrice":249},{"name":"Cinepolis Fun Republic","distance":3.2,"startingPrice":199},{"name":"MovieMax Miraroad","distance":14,"startingPrice":149}], title: 'Hereditary', genre: 'Horror', genres: ['horror'], rating: 4.5, reviewsCount: '2.1k', image: 'https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=2070&auto=format&fit=crop', duration: '2h 7m', language: 'English', format: '2D', friendsActivity: [{ userId: 'f7', name: 'Neha Gupta', avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=150&auto=format&fit=crop', rating: 4.5, review: "The most unsettling movie I have ever seen. Toni Collette is otherworldly. Don't eat before watching.", date: 'Recently' }] },
    { id: 'hor_tam_2', distanceKm: 3.5, theatres: [{"name":"INOX Megaplex Andheri","distance":1.8,"startingPrice":219},{"name":"PVR Juhu","distance":2.5,"startingPrice":249},{"name":"Cinepolis Fun Republic","distance":3.2,"startingPrice":199},{"name":"MovieMax Miraroad","distance":14,"startingPrice":149}], title: 'Demonte Colony', genre: 'Horror', genres: ['horror'], rating: 4.2, reviewsCount: '1.5k', image: 'https://images.unsplash.com/photo-1533488765986-dfa2a9939acd?q=80&w=1974&auto=format&fit=crop', duration: '2h 10m', language: 'Tamil', format: '2D' },
    { id: 'hor_tel_2', distanceKm: 3.5, theatres: [{"name":"INOX Megaplex Andheri","distance":1.8,"startingPrice":219},{"name":"PVR Juhu","distance":2.5,"startingPrice":249},{"name":"Cinepolis Fun Republic","distance":3.2,"startingPrice":199},{"name":"MovieMax Miraroad","distance":14,"startingPrice":149}], title: 'Gruham', genre: 'Horror', genres: ['horror'], rating: 4.0, reviewsCount: '1.2k', image: 'https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=2070&auto=format&fit=crop', duration: '2h 5m', language: 'Telugu', format: '2D', friendsActivity: [{ userId: 'f14', name: 'Tara Reddy', avatar: 'https://images.unsplash.com/photo-1502764613149-7f1d229e230f?q=80&w=150&auto=format&fit=crop', rating: 2.0, review: "Bland jump scares and a predictable plot. Telugu horror has done better. Not worth the ticket price.", date: 'Recently' }] },
    { id: 'hor_mal_2', distanceKm: 3.5, theatres: [{"name":"INOX Megaplex Andheri","distance":1.8,"startingPrice":219},{"name":"PVR Juhu","distance":2.5,"startingPrice":249},{"name":"Cinepolis Fun Republic","distance":3.2,"startingPrice":199},{"name":"MovieMax Miraroad","distance":14,"startingPrice":149}], title: 'Bhoothakaalam', genre: 'Horror', genres: ['horror'], rating: 4.4, reviewsCount: '1.3k', image: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=2025&auto=format&fit=crop', duration: '2h 20m', language: 'Malayalam', format: '2D' },

    // Romance — Hindi, English, Tamil, Telugu, Malayalam 2nd items
    { id: 'rom_hin_2', distanceKm: 3, theatres: [{"name":"INOX Megaplex Andheri","distance":1.8,"startingPrice":219},{"name":"PVR Juhu","distance":2.5,"startingPrice":249},{"name":"Cinepolis Fun Republic","distance":3.2,"startingPrice":199},{"name":"MovieMax Miraroad","distance":14,"startingPrice":149}], title: 'Ae Dil Hai Mushkil', genre: 'Romance/Drama', genres: ['romance'], rating: 4.1, reviewsCount: '2.3k', image: 'https://images.unsplash.com/photo-1533488765986-dfa2a9939acd?q=80&w=1974&auto=format&fit=crop', duration: '2h 38m', language: 'Hindi', format: '2D', friendsActivity: [{ userId: 'f5', name: 'Sana Khan', avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=150&auto=format&fit=crop', rating: 4.5, review: "Ranbir Kapoor is heartbreaking in this. Emotional rollercoaster — bring tissues.", date: 'Recently' }, { userId: 'f6', name: 'Vikram Desai', avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=150&auto=format&fit=crop', rating: 2.0, review: "Self-indulgent and overly long. The protagonist is insufferable and the ending is unsatisfying. Hard pass.", date: 'Recently' }] },
    { id: 'rom_eng_2', distanceKm: 3.5, theatres: [{"name":"INOX Megaplex Andheri","distance":1.8,"startingPrice":219},{"name":"PVR Juhu","distance":2.5,"startingPrice":249},{"name":"Cinepolis Fun Republic","distance":3.2,"startingPrice":199},{"name":"MovieMax Miraroad","distance":14,"startingPrice":149}], title: 'About Time', genre: 'Romance/Sci-Fi', genres: ['romance', 'sci_fi'], rating: 4.6, reviewsCount: '2.8k', image: 'https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=2070&auto=format&fit=crop', duration: '2h 3m', language: 'English', format: '2D', friendsActivity: [{ userId: 'f1', name: 'Aditi Sharma', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop', rating: 5.0, review: "I cry every time in the final act. Richard Curtis at his most profound. One of the best films ever made.", date: 'Recently' }] },
    { id: 'rom_tam_2', distanceKm: 3.5, theatres: [{"name":"INOX Megaplex Andheri","distance":1.8,"startingPrice":219},{"name":"PVR Juhu","distance":2.5,"startingPrice":249},{"name":"Cinepolis Fun Republic","distance":3.2,"startingPrice":199},{"name":"MovieMax Miraroad","distance":14,"startingPrice":149}], title: 'Vinnaithaandi Varuvaayaa', genre: 'Romance', genres: ['romance'], rating: 4.5, reviewsCount: '3.5k', image: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=2025&auto=format&fit=crop', duration: '2h 32m', language: 'Tamil', format: '2D' },
    { id: 'rom_tel_2', distanceKm: 3.5, theatres: [{"name":"INOX Megaplex Andheri","distance":1.8,"startingPrice":219},{"name":"PVR Juhu","distance":2.5,"startingPrice":249},{"name":"Cinepolis Fun Republic","distance":3.2,"startingPrice":199},{"name":"MovieMax Miraroad","distance":14,"startingPrice":149}], title: 'Fidaa', genre: 'Romance/Drama', genres: ['romance'], rating: 4.3, reviewsCount: '2.1k', image: 'https://images.unsplash.com/photo-1533488765986-dfa2a9939acd?q=80&w=1974&auto=format&fit=crop', duration: '2h 25m', language: 'Telugu', format: '2D', friendsActivity: [{ userId: 'f12', name: 'Kavya Nair', avatar: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=150&auto=format&fit=crop', rating: 4.5, review: "Sai Pallavi is luminous. The love story feels real and grounded. Best Telugu romance in years.", date: 'Recently' }] },
    { id: 'rom_mal_2', distanceKm: 3.5, theatres: [{"name":"INOX Megaplex Andheri","distance":1.8,"startingPrice":219},{"name":"PVR Juhu","distance":2.5,"startingPrice":249},{"name":"Cinepolis Fun Republic","distance":3.2,"startingPrice":199},{"name":"MovieMax Miraroad","distance":14,"startingPrice":149}], title: 'Ennu Ninte Moideen', genre: 'Romance/Drama', genres: ['romance'], rating: 4.5, reviewsCount: '2.4k', image: 'https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=2070&auto=format&fit=crop', duration: '2h 40m', language: 'Malayalam', format: '2D' },

    // Action — Hindi, Tamil, Telugu, Malayalam 2nd items
    { id: 'act_hin_2', distanceKm: 3, theatres: [{"name":"INOX Megaplex Andheri","distance":1.8,"startingPrice":219},{"name":"PVR Juhu","distance":2.5,"startingPrice":249},{"name":"Cinepolis Fun Republic","distance":3.2,"startingPrice":199},{"name":"MovieMax Miraroad","distance":14,"startingPrice":149}], title: 'War', genre: 'Action/Thriller', genres: ['action', 'thriller'], rating: 4.2, reviewsCount: '3.1k', image: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=2025&auto=format&fit=crop', duration: '2h 34m', language: 'Hindi', format: 'IMAX 3D', friendsActivity: [{ userId: 'f2', name: 'Rohan Kapoor', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop', rating: 4.5, review: "The action sequences are genuinely jaw-dropping on IMAX. Pure spectacle — don't look for plot.", date: 'Recently' }] },
    { id: 'act_tam_2', distanceKm: 3.5, theatres: [{"name":"INOX Megaplex Andheri","distance":1.8,"startingPrice":219},{"name":"PVR Juhu","distance":2.5,"startingPrice":249},{"name":"Cinepolis Fun Republic","distance":3.2,"startingPrice":199},{"name":"MovieMax Miraroad","distance":14,"startingPrice":149}], title: 'Vikram', genre: 'Action/Thriller', genres: ['action', 'thriller'], rating: 4.7, reviewsCount: '4.2k', image: 'https://images.unsplash.com/photo-1533488765986-dfa2a9939acd?q=80&w=1974&auto=format&fit=crop', duration: '2h 54m', language: 'Tamil', format: 'IMAX 2D', friendsActivity: [{ userId: 'f10', name: 'Rahul Bose', avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=150&auto=format&fit=crop', rating: 5.0, review: "Kamal Haasan's comeback is spectacular. Every cameo lands. Watch in IMAX for full impact.", date: 'Recently' }, { userId: 'f4', name: 'Amit Singh', avatar: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?q=80&w=150&auto=format&fit=crop', rating: 2.5, review: "Way too long and self-indulgent for an action film. The cameos feel forced and the plot is a mess.", date: 'Recently' }] },
    { id: 'act_tel_2', distanceKm: 3.5, theatres: [{"name":"INOX Megaplex Andheri","distance":1.8,"startingPrice":219},{"name":"PVR Juhu","distance":2.5,"startingPrice":249},{"name":"Cinepolis Fun Republic","distance":3.2,"startingPrice":199},{"name":"MovieMax Miraroad","distance":14,"startingPrice":149}], title: 'RRR', genre: 'Action/Drama', genres: ['action'], rating: 4.8, reviewsCount: '6.1k', image: 'https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=2070&auto=format&fit=crop', duration: '3h 7m', language: 'Telugu', format: 'IMAX 3D', friendsActivity: [{ userId: 'f3', name: 'Priya Verma', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop', rating: 5.0, review: "Naatu Naatu in the cinema is an experience. RRR is pure cinematic joy. 3 hours felt like 1.", date: 'Recently' }] },
    { id: 'act_mal_2', distanceKm: 3.5, theatres: [{"name":"INOX Megaplex Andheri","distance":1.8,"startingPrice":219},{"name":"PVR Juhu","distance":2.5,"startingPrice":249},{"name":"Cinepolis Fun Republic","distance":3.2,"startingPrice":199},{"name":"MovieMax Miraroad","distance":14,"startingPrice":149}], title: 'Lucifer', genre: 'Action/Thriller', genres: ['action', 'thriller'], rating: 4.3, reviewsCount: '2.8k', image: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=2025&auto=format&fit=crop', duration: '2h 35m', language: 'Malayalam', format: '2D' },

    // Thriller — Tamil (2 new), Telugu (2 new), Malayalam 2nd
    { id: 'thr_tam_1', distanceKm: 3.5, theatres: [{"name":"INOX Megaplex Andheri","distance":1.8,"startingPrice":219},{"name":"PVR Juhu","distance":2.5,"startingPrice":249},{"name":"Cinepolis Fun Republic","distance":3.2,"startingPrice":199},{"name":"MovieMax Miraroad","distance":14,"startingPrice":149}], title: 'Vikram Vedha', genre: 'Thriller/Crime', genres: ['thriller', 'action'], rating: 4.7, reviewsCount: '3.8k', image: 'https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=2070&auto=format&fit=crop', duration: '2h 27m', language: 'Tamil', format: '2D', friendsActivity: [{ userId: 'f11', name: 'Ishaan Mehta', avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=150&auto=format&fit=crop', rating: 5.0, review: "The moral grey zones in this film are extraordinary. Vijay Sethupathi steals every scene.", date: 'Recently' }] },
    { id: 'thr_tam_2', distanceKm: 3.5, theatres: [{"name":"INOX Megaplex Andheri","distance":1.8,"startingPrice":219},{"name":"PVR Juhu","distance":2.5,"startingPrice":249},{"name":"Cinepolis Fun Republic","distance":3.2,"startingPrice":199},{"name":"MovieMax Miraroad","distance":14,"startingPrice":149}], title: 'Kaithi', genre: 'Thriller/Action', genres: ['thriller', 'action'], rating: 4.6, reviewsCount: '2.5k', image: 'https://images.unsplash.com/photo-1533488765986-dfa2a9939acd?q=80&w=1974&auto=format&fit=crop', duration: '2h 15m', language: 'Tamil', format: '2D' },
    { id: 'thr_tel_1', distanceKm: 3.5, theatres: [{"name":"INOX Megaplex Andheri","distance":1.8,"startingPrice":219},{"name":"PVR Juhu","distance":2.5,"startingPrice":249},{"name":"Cinepolis Fun Republic","distance":3.2,"startingPrice":199},{"name":"MovieMax Miraroad","distance":14,"startingPrice":149}], title: 'Kshanam', genre: 'Thriller/Mystery', genres: ['thriller'], rating: 4.4, reviewsCount: '1.8k', image: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=2025&auto=format&fit=crop', duration: '2h 5m', language: 'Telugu', format: '2D', friendsActivity: [{ userId: 'f15', name: 'Arjun Khanna', avatar: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=150&auto=format&fit=crop', rating: 4.5, review: "Gripping from start to finish. One of the best Telugu thrillers ever made. The twists hit hard.", date: 'Recently' }] },
    { id: 'thr_tel_2', distanceKm: 3.5, theatres: [{"name":"INOX Megaplex Andheri","distance":1.8,"startingPrice":219},{"name":"PVR Juhu","distance":2.5,"startingPrice":249},{"name":"Cinepolis Fun Republic","distance":3.2,"startingPrice":199},{"name":"MovieMax Miraroad","distance":14,"startingPrice":149}], title: 'Goodachari', genre: 'Action/Thriller', genres: ['thriller', 'action'], rating: 4.3, reviewsCount: '1.5k', image: 'https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=2070&auto=format&fit=crop', duration: '2h 20m', language: 'Telugu', format: '2D', friendsActivity: [{ userId: 'f14', name: 'Tara Reddy', avatar: 'https://images.unsplash.com/photo-1502764613149-7f1d229e230f?q=80&w=150&auto=format&fit=crop', rating: 2.5, review: "Tries too hard to be an Indian Bond film and falls flat. Derivative plot and forgettable antagonist.", date: 'Recently' }] },
    { id: 'thr_mal_2', distanceKm: 3.5, theatres: [{"name":"INOX Megaplex Andheri","distance":1.8,"startingPrice":219},{"name":"PVR Juhu","distance":2.5,"startingPrice":249},{"name":"Cinepolis Fun Republic","distance":3.2,"startingPrice":199},{"name":"MovieMax Miraroad","distance":14,"startingPrice":149}], title: 'Drishyam', genre: 'Thriller/Crime', genres: ['thriller'], rating: 4.8, reviewsCount: '4.5k', image: 'https://images.unsplash.com/photo-1533488765986-dfa2a9939acd?q=80&w=1974&auto=format&fit=crop', duration: '2h 35m', language: 'Malayalam', format: '2D', friendsActivity: [{ userId: 'f7', name: 'Neha Gupta', avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=150&auto=format&fit=crop', rating: 5.0, review: "Mohanlal's performance is masterclass. The final scene is one of cinema's greatest moments.", date: 'Recently' }] },

    // Sci-Fi — Hindi, Tamil, Telugu, Malayalam 2nd items
    { id: 'sci_hin_2', distanceKm: 3, theatres: [{"name":"INOX Megaplex Andheri","distance":1.8,"startingPrice":219},{"name":"PVR Juhu","distance":2.5,"startingPrice":249},{"name":"Cinepolis Fun Republic","distance":3.2,"startingPrice":199},{"name":"MovieMax Miraroad","distance":14,"startingPrice":149}], title: '2.0', genre: 'Sci-Fi/Action', genres: ['sci_fi', 'action'], rating: 4.3, reviewsCount: '3.2k', image: 'https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=2070&auto=format&fit=crop', duration: '2h 28m', language: 'Hindi', format: 'IMAX 3D', friendsActivity: [{ userId: 'f9', name: 'Ananya Rao', avatar: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=150&auto=format&fit=crop', rating: 4.5, review: "The VFX are absolutely world-class. Rajinikanth and Akshay Kumar are both excellent. Watch in 3D.", date: 'Recently' }] },
    { id: 'sci_tam_2', distanceKm: 3.5, theatres: [{"name":"INOX Megaplex Andheri","distance":1.8,"startingPrice":219},{"name":"PVR Juhu","distance":2.5,"startingPrice":249},{"name":"Cinepolis Fun Republic","distance":3.2,"startingPrice":199},{"name":"MovieMax Miraroad","distance":14,"startingPrice":149}], title: 'Enthiran', genre: 'Sci-Fi/Action', genres: ['sci_fi', 'action'], rating: 4.5, reviewsCount: '4.8k', image: 'https://images.unsplash.com/photo-1533488765986-dfa2a9939acd?q=80&w=1974&auto=format&fit=crop', duration: '2h 58m', language: 'Tamil', format: '2D' },
    { id: 'sci_tel_2', distanceKm: 3.5, theatres: [{"name":"INOX Megaplex Andheri","distance":1.8,"startingPrice":219},{"name":"PVR Juhu","distance":2.5,"startingPrice":249},{"name":"Cinepolis Fun Republic","distance":3.2,"startingPrice":199},{"name":"MovieMax Miraroad","distance":14,"startingPrice":149}], title: 'Awe!', genre: 'Sci-Fi/Drama', genres: ['sci_fi'], rating: 4.2, reviewsCount: '1.5k', image: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=2025&auto=format&fit=crop', duration: '2h 10m', language: 'Telugu', format: '2D', friendsActivity: [{ userId: 'f13', name: 'Dev Malhotra', avatar: 'https://images.unsplash.com/photo-1463453091185-61582044d556?q=80&w=150&auto=format&fit=crop', rating: 2.0, review: "Overly convoluted and tries too hard to be clever. The non-linear timeline made no sense by the end.", date: 'Recently' }] },
    { id: 'sci_mal_2', distanceKm: 3.5, theatres: [{"name":"INOX Megaplex Andheri","distance":1.8,"startingPrice":219},{"name":"PVR Juhu","distance":2.5,"startingPrice":249},{"name":"Cinepolis Fun Republic","distance":3.2,"startingPrice":199},{"name":"MovieMax Miraroad","distance":14,"startingPrice":149}], title: 'Virus', genre: 'Sci-Fi/Medical Drama', genres: ['sci_fi'], rating: 4.6, reviewsCount: '2.2k', image: 'https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=2070&auto=format&fit=crop', duration: '2h 27m', language: 'Malayalam', format: '2D', friendsActivity: [{ userId: 'f12', name: 'Kavya Nair', avatar: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=150&auto=format&fit=crop', rating: 5.0, review: "Tense, realistic, and emotionally devastating. Malayalam cinema at its finest. Absolutely unmissable.", date: 'Recently' }] }
];

// --- Events Data ---

export const eventTypes = [
    { id: 'music', name: 'Music' },
    { id: 'comedy', name: 'Comedy' },
    { id: 'nightlife', name: 'Nightlife' },
    { id: 'sports', name: 'Sports' },
    { id: 'performances', name: 'Performances' },
    { id: 'food_drinks', name: 'Food & Drinks' },
    { id: 'fests_fairs', name: 'Fests & Fairs' },
    { id: 'social_mixers', name: 'Social Mixers' },
    { id: 'fitness', name: 'Fitness' },
    { id: 'screenings', name: 'Screenings' },
    { id: 'pets', name: 'Pets' },
    { id: 'art_exhibitions', name: 'Art Exhibitions' },
    { id: 'conferences', name: 'Conferences' },
    { id: 'expos', name: 'Expos' }
];

export const events = [
    // --- Music ---
    {
        id: 'e1', distanceKm: 4, title: 'Arijit Singh Live', date: 'Sat, 24 Mar', time: '7:00 PM', durationHours: 3.0, venue: 'Jio World Garden', price: '₹2499 onwards',
        image: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=2070&auto=format&fit=crop', category: 'Music', type: 'music', rating: 4.9, reviewsCount: '870', friendsActivity: [
            { userId: 'f6', name: 'Vikram Desai', avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=150&auto=format&fit=crop', rating: 4.5, review: "Had a really good time here.", date: 'Recently' },
            { userId: 'f8', name: 'Karan Patel', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop', rating: 5.0, review: "Definitely check this out.", date: 'Recently' },
            { userId: 'f4', name: 'Amit Singh', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop', rating: 4.0, review: "Highly recommended.", date: 'Recently' }
        ]
    },
    {
        id: 'ev_mus_2', distanceKm: 9, title: 'Diljit Dosanjh: Illuminati Tour', date: 'Sun, 10 Apr', time: '6:30 PM', durationHours: 3.0, venue: 'MMRDA Grounds', price: '₹1999 onwards',
        image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1974&auto=format&fit=crop', category: 'Music', type: 'music', rating: 4.4, reviewsCount: '1.5k', friendsActivity: [
            { userId: 'f2', name: 'Rohan Kapoor', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop', rating: 5.0, review: "Definitely check this out.", date: 'Recently' },
            { userId: 'f1', name: 'Aditi Sharma', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop', rating: 5.0, review: "Amazing place!", date: 'Recently' }
        ]
    },

    // --- Comedy ---
    {
        id: 'e2', distanceKm: 15.5, title: 'Zakir Khan - Tathastu', date: 'Sun, 25 Mar', time: '8:00 PM', durationHours: 2.0, venue: 'Shanmukhananda Hall', price: '₹999 onwards',
        image: 'https://images.unsplash.com/photo-1585699324551-f6c309eedeca?q=80&w=2070&auto=format&fit=crop', category: 'Comedy', type: 'comedy', rating: 4.3, reviewsCount: '89', friendsActivity: [
            { userId: 'f1', name: 'Aditi Sharma', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop', rating: 5.0, review: "Had a really good time here.", date: 'Recently' },
            { userId: 'f2', name: 'Rohan Kapoor', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop', rating: 4.0, review: "Definitely check this out.", date: 'Recently' },
            { userId: 'f9', name: 'Ananya Rao', avatar: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=150&auto=format&fit=crop', rating: 5.0, review: "Loved it!", date: 'Recently' }
        ]
    },
    {
        id: 'ev_com_2', distanceKm: 9.5, title: 'Bassal: Double Feature', date: 'Fri, 15 Apr', time: '9:00 PM', durationHours: 2.5, venue: 'Bal Gandharva Rang Mandir', price: '₹799 onwards',
        image: 'https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?q=80&w=2070&auto=format&fit=crop', category: 'Comedy', type: 'comedy', rating: 4.5, reviewsCount: '950', friendsActivity: [
            { userId: 'f4', name: 'Amit Singh', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop', rating: 4.5, review: "Loved it!", date: 'Recently' },
            { userId: 'f3', name: 'Priya Verma', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop', rating: 5.0, review: "The vibe was incredible.", date: 'Recently' },
            { userId: 'f1', name: 'Aditi Sharma', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop', rating: 3.5, review: "Loved it!", date: 'Recently' }
        ]
    },

    // --- Nightlife ---
    {
        id: 'ev_nl_1', distanceKm: 5.2, title: 'Techno Night ft. Anyma', date: 'Fri, 23 Mar', time: '10:00 PM', durationHours: 3.5, venue: 'AntiSocial', price: '₹1500',
        image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1974&auto=format&fit=crop', category: 'Nightlife', type: 'nightlife', rating: 4, reviewsCount: '2.1k', friendsActivity: [
            { userId: 'f6', name: 'Vikram Desai', avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=150&auto=format&fit=crop', rating: 4.0, review: "Had a really good time here.", date: 'Recently' }
        ]
    },

    // --- Sports ---
    {
        id: 'ev_spt_1', distanceKm: 25.5, title: 'IPL: MI vs CSK', date: 'Sun, 14 Apr', time: '7:30 PM', durationHours: 4.0, venue: 'Wankhede Stadium', price: '₹1200 onwards',
        image: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=2028&auto=format&fit=crop', category: 'Sports', type: 'sports', rating: 3.9, reviewsCount: '2.1k', friendsActivity: [
            { userId: 'f8', name: 'Karan Patel', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop', rating: 4.0, review: "Highly recommended.", date: 'Recently' },
            { userId: 'f7', name: 'Neha Gupta', avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=150&auto=format&fit=crop', rating: 5.0, review: "Amazing place!", date: 'Recently' },
            { userId: 'f4', name: 'Amit Singh', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop', rating: 5.0, review: "Amazing place!", date: 'Recently' }
        ]
    },

    // --- Performances ---
    {
        id: 'ev_perf_1', distanceKm: 28.5, title: 'Mughal-E-Azam: The Musical', date: 'Sat, 06 May', time: '6:00 PM', durationHours: 2.5, venue: 'NCPA', price: '₹1000 onwards',
        image: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=2070&auto=format&fit=crop', category: 'Performances', type: 'performances', rating: 4.4, reviewsCount: '2.1k', friendsActivity: [
            { userId: 'f5', name: 'Sana Khan', avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=150&auto=format&fit=crop', rating: 4.0, review: "Amazing place!", date: 'Recently' }
        ]
    },

    // --- Food & Drinks ---
    {
        id: 'ev_fd_1', distanceKm: 19.5, title: 'Mumbai Wine Festival', date: 'Sat, 13 May', time: '12:00 PM', durationHours: 3.0, venue: 'RWITC', price: '₹500',
        image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=2070&auto=format&fit=crop', category: 'Food & Drinks', type: 'food_drinks', rating: 4, reviewsCount: '870', friendsActivity: [
            { userId: 'f2', name: 'Rohan Kapoor', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop', rating: 4.0, review: "Not bad, would go again.", date: 'Recently' }
        ]
    },

    // --- Fests & Fairs ---
    {
        id: 'ev_fest_1', distanceKm: 25.5, title: 'Kala Ghoda Arts Festival', date: '04-12 Feb', time: '10:00 AM', durationHours: 3.0, venue: 'Kala Ghoda', price: 'Free',
        image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?q=80&w=2032&auto=format&fit=crop', category: 'Fests & Fairs', type: 'fests_fairs', rating: 4.5, reviewsCount: '89', friendsActivity: [
            { userId: 'f4', name: 'Amit Singh', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop', rating: 5.0, review: "Loved it!", date: 'Recently' },
            { userId: 'f7', name: 'Neha Gupta', avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=150&auto=format&fit=crop', rating: 3, review: "Lovely outdoor seating but very overpriced. The risotto was bland for the price. Come for the ambiance, not the food.", date: 'Recently' },
            { userId: 'f3', name: 'Priya Verma', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop', rating: 4.5, review: "The slow-cooked pork and the sol kadhi cocktail are must-orders. Skip the pasta, it's not their strong suit.", date: 'Recently' }
        ]
    },

    // --- Social Mixers ---
    {
        id: 'ev_sm_1', distanceKm: 5.2, title: 'Founders Mixer: Web3', date: 'Thu, 20 Apr', time: '7:00 PM', durationHours: 2.0, venue: 'WeWork BKC', price: '₹300',
        image: '/images/tech_mixer.png', category: 'Social Mixers', type: 'social_mixers', rating: 3.9, reviewsCount: '3.4k', friendsActivity: [
            { userId: 'f10', name: 'Rahul Bose', avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=150&auto=format&fit=crop', rating: 4.0, review: "Highly recommended.", date: 'Recently' }
        ]
    },

    // --- Fitness ---
    {
        id: 'ev_fit_1', distanceKm: 5, title: 'Sunrise Yoga by the Sea', date: 'Sun, 02 Apr', time: '6:30 AM', durationHours: 1.5, venue: 'Carter Road', price: '₹200',
        image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2120&auto=format&fit=crop', category: 'Fitness', type: 'fitness', rating: 4.9, reviewsCount: '230', friendsActivity: [
            { userId: 'f4', name: 'Amit Singh', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop', rating: 4.5, review: "Definitely check this out.", date: 'Recently' }
        ]
    },

    // --- Screenings ---
    {
        id: 'ev_scr_1', distanceKm: 10, title: 'Open Air Cinema: Notting Hill', date: 'Sat, 29 Apr', time: '8:00 PM', durationHours: 2.5, venue: 'Sunset Cinema Club', price: '₹400',
        image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=2059&auto=format&fit=crop', category: 'Screenings', type: 'screenings', rating: 4.9, reviewsCount: '1.5k', friendsActivity: [
            { userId: 'f4', name: 'Amit Singh', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop', rating: 5.0, review: "Amazing place!", date: 'Recently' },
            { userId: 'f5', name: 'Sana Khan', avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=150&auto=format&fit=crop', rating: 4.0, review: "Amazing place!", date: 'Recently' }
        ]
    },

    // --- Pets ---
    {
        id: 'ev_pet_1', distanceKm: 4.5, title: 'Petathon 2.0', date: 'Sun, 21 May', time: '7:00 AM', durationHours: 2.0, venue: 'Shivaji Park', price: '₹250',
        image: 'https://images.unsplash.com/photo-1541599540903-216a46ca1dc0?q=80&w=2071&auto=format&fit=crop', category: 'Pets', type: 'pets', rating: 4.6, reviewsCount: '230', friendsActivity: [
            { userId: 'f6', name: 'Vikram Desai', avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=150&auto=format&fit=crop', rating: 4.0, review: "Definitely check this out.", date: 'Recently' },
            { userId: 'f10', name: 'Rahul Bose', avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=150&auto=format&fit=crop', rating: 4.0, review: "Definitely check this out.", date: 'Recently' }
        ]
    },

    // --- Art Exhibitions ---
    {
        id: 'ev_art_1', distanceKm: 24.5, title: 'Modern Art Biennial', date: '10-25 Jun', time: '11:00 AM', durationHours: 2.0, venue: 'Jehangir Art Gallery', price: 'Free',
        image: 'https://images.unsplash.com/photo-1536924940846-227afb31e2a5?q=80&w=2066&auto=format&fit=crop', category: 'Art Exhibitions', type: 'art_exhibitions', rating: 4.3, reviewsCount: '950', friendsActivity: [
            { userId: 'f5', name: 'Sana Khan', avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=150&auto=format&fit=crop', rating: 4.5, review: "Amazing place!", date: 'Recently' }
        ]
    },

    // --- Conferences ---
    {
        id: 'ev_conf_1', distanceKm: 13.5, title: 'TechSparks Mumbai', date: 'Wed, 22 Mar', time: '9:00 AM', durationHours: 6.0, venue: 'Grand Hyatt', price: '₹2000',
        image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop', category: 'Conferences', type: 'conferences', rating: 3.9, reviewsCount: '450', friendsActivity: [
            { userId: 'f1', name: 'Aditi Sharma', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop', rating: 4.0, review: "Not bad, would go again.", date: 'Recently' }
        ]
    },

    // --- Expos ---
    {
        id: 'ev_expo_1', distanceKm: 6.5, title: 'Auto Expo 2026', date: '10-14 Aug', time: '10:00 AM', durationHours: 3.0, venue: 'NESCO', price: '₹300',
        image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=2070&auto=format&fit=crop', category: 'Expos', type: 'expos', rating: 3.9, reviewsCount: '89', friendsActivity: [
            { userId: 'f2', name: 'Rohan Kapoor', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop', rating: 4.0, review: "Definitely check this out.", date: 'Recently' },
            { userId: 'f4', name: 'Amit Singh', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop', rating: 5.0, review: "Loved it!", date: 'Recently' },
            { userId: 'f3', name: 'Priya Verma', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop', rating: 3.5, review: "Had a really good time here.", date: 'Recently' }
        ]
    },
    // Additions for 2 per subtype
    { id: 'ev_nl_2', distanceKm: 3.2, title: 'Techno Night at Kitty Su', date: 'Fri, 12 May', time: '10:00 PM', durationHours: 3.5, venue: 'Kitty Su', price: '₹1500', image: 'https://images.unsplash.com/photo-1574406280735-351fc1a7c5e0?q=80&w=2000&auto=format&fit=crop', category: 'Nightlife', type: 'nightlife', rating: 4.7, reviewsCount: '230', friendsActivity: [
            { userId: 'f2', name: 'Rohan Kapoor', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop', rating: 4.5, review: "Had a really good time here.", date: 'Recently' },
            { userId: 'f5', name: 'Sana Khan', avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=150&auto=format&fit=crop', rating: 4.5, review: "Loved it!", date: 'Recently' }
        ] },
    { id: 'ev_sp_2', distanceKm: 25.5, title: 'Mumbai Indians vs CSK', date: 'Sun, 14 May', time: '7:30 PM', durationHours: 4.0, venue: 'Wankhede', price: '₹2500', image: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=2000&auto=format&fit=crop', category: 'Sports', type: 'sports', rating: 3.9, reviewsCount: '112', friendsActivity: [
            { userId: 'f8', name: 'Karan Patel', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop', rating: 3.5, review: "Amazing place!", date: 'Recently' }
        ] },
    { id: 'ev_pf_2', distanceKm: 28.5, title: 'NCPA Symphony Orchestra', date: 'Sat, 20 May', time: '6:30 PM', durationHours: 2.0, venue: 'NCPA', price: '₹800', image: 'https://images.unsplash.com/photo-1563841930606-67e2bce48b78?q=80&w=2000&auto=format&fit=crop', category: 'Performances', type: 'performances', rating: 4.7, reviewsCount: '1.2k', friendsActivity: [
            { userId: 'f8', name: 'Karan Patel', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop', rating: 3.5, review: "Definitely check this out.", date: 'Recently' }
        ] },
    { id: 'ev_fd_2', distanceKm: 9.8, title: 'Bandra Wine Tasting Festival', date: 'Sun, 21 May', time: '4:00 PM', durationHours: 2.5, venue: 'Bandra Gymkhana', price: '₹2000', image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=2000&auto=format&fit=crop', category: 'Food & Drinks', type: 'food_drinks', rating: 4.8, reviewsCount: '89', friendsActivity: [
            { userId: 'f10', name: 'Rahul Bose', avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=150&auto=format&fit=crop', rating: 4.5, review: "The vibe was incredible.", date: 'Recently' },
            { userId: 'f7', name: 'Neha Gupta', avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=150&auto=format&fit=crop', rating: 3.5, review: "Not bad, would go again.", date: 'Recently' },
            { userId: 'f2', name: 'Rohan Kapoor', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop', rating: 4.5, review: "Definitely check this out.", date: 'Recently' }
        ] },
    { id: 'ev_ff_2', distanceKm: 25.5, title: 'Kala Ghoda Arts Festival', date: '04-12 Feb', time: '10:00 AM', durationHours: 3.0, venue: 'Kala Ghoda', price: 'Free', image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2000&auto=format&fit=crop', category: 'Fests & Fairs', type: 'fests_fairs', rating: 4.7, reviewsCount: '950', friendsActivity: [
            { userId: 'f2', name: 'Rohan Kapoor', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop', rating: 5.0, review: "Amazing place!", date: 'Recently' },
            { userId: 'f5', name: 'Sana Khan', avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=150&auto=format&fit=crop', rating: 4.0, review: "Definitely check this out.", date: 'Recently' }
        ] },
    { id: 'ev_sm_2', distanceKm: 8.2, title: 'Singles Mixer Night', date: 'Fri, 19 May', time: '8:00 PM', durationHours: 2.5, venue: 'Socials', price: '₹500', image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2000&auto=format&fit=crop', category: 'Social Mixers', type: 'social_mixers', rating: 4.2, reviewsCount: '450', friendsActivity: [
            { userId: 'f1', name: 'Aditi Sharma', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop', rating: 4.0, review: "Not bad, would go again.", date: 'Recently' },
            { userId: 'f4', name: 'Amit Singh', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop', rating: 4.5, review: "Not bad, would go again.", date: 'Recently' }
        ] },
    { id: 'ev_ft_2', distanceKm: 4.8, title: 'Sunday Morning Yoga', date: 'Sun, 28 May', time: '7:00 AM', durationHours: 1.0, venue: 'Juhu Beach', price: 'Free', image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2000&auto=format&fit=crop', category: 'Fitness', type: 'fitness', rating: 4.6, reviewsCount: '342', friendsActivity: [
            { userId: 'f1', name: 'Aditi Sharma', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop', rating: 5.0, review: "The vibe was incredible.", date: 'Recently' },
            { userId: 'f2', name: 'Rohan Kapoor', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop', rating: 4.5, review: "Highly recommended.", date: 'Recently' },
            { userId: 'f4', name: 'Amit Singh', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop', rating: 4.0, review: "Amazing place!", date: 'Recently' }
        ] },
    { id: 'ev_sc_2', distanceKm: 4.2, title: 'Interstellar IMAX Screening', date: 'Wed, 24 May', time: '8:30 PM', durationHours: 3.0, venue: 'PVR ICON IMAX', price: '₹600', image: 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?q=80&w=2000&auto=format&fit=crop', category: 'Screenings', type: 'screenings', rating: 4.8, reviewsCount: '3.4k', friendsActivity: [
            { userId: 'f6', name: 'Vikram Desai', avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=150&auto=format&fit=crop', rating: 4.0, review: "Definitely check this out.", date: 'Recently' },
            { userId: 'f7', name: 'Neha Gupta', avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=150&auto=format&fit=crop', rating: 5.0, review: "Loved it!", date: 'Recently' },
            { userId: 'f2', name: 'Rohan Kapoor', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop', rating: 4.5, review: "Amazing place!", date: 'Recently' }
        ] },
    { id: 'ev_pt_2', distanceKm: 13.5, title: 'Dog Show 2026', date: 'Sun, 04 Jun', time: '9:00 AM', durationHours: 2.5, venue: 'BKC Grounds', price: '₹300', image: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=2000&auto=format&fit=crop', category: 'Pets', type: 'pets', rating: 4.5, reviewsCount: '2.1k', friendsActivity: [
            { userId: 'f2', name: 'Rohan Kapoor', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop', rating: 3.5, review: "Had a really good time here.", date: 'Recently' },
            { userId: 'f3', name: 'Priya Verma', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop', rating: 5.0, review: "Loved it!", date: 'Recently' }
        ] },
    { id: 'ev_ar_2', distanceKm: 16.5, title: 'Contemporary Art Fair', date: '15-20 Jul', time: '11:00 AM', durationHours: 2.0, venue: 'Nehru Centre', price: '₹150', image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=2000&auto=format&fit=crop', category: 'Art Exhibitions', type: 'art_exhibitions', rating: 3.9, reviewsCount: '450', friendsActivity: [
            { userId: 'f2', name: 'Rohan Kapoor', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop', rating: 5.0, review: "The vibe was incredible.", date: 'Recently' }
        ] },
    { id: 'ev_cf_2', distanceKm: 13.5, title: 'India FinTech Forum', date: 'Thu, 08 Jun', time: '9:00 AM', durationHours: 6.0, venue: 'Jio World Convention Centre', price: '₹5000', image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=2000&auto=format&fit=crop', category: 'Conferences', type: 'conferences', rating: 4.3, reviewsCount: '89', friendsActivity: [
            { userId: 'f9', name: 'Ananya Rao', avatar: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=150&auto=format&fit=crop', rating: 5.0, review: "Loved it!", date: 'Recently' },
            { userId: 'f5', name: 'Sana Khan', avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=150&auto=format&fit=crop', rating: 4.0, review: "Had a really good time here.", date: 'Recently' },
            { userId: 'f1', name: 'Aditi Sharma', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop', rating: 4.0, review: "Had a really good time here.", date: 'Recently' }
        ] },
    { id: 'ev_ex_2', distanceKm: 6.5, title: 'Comic Con Mumbai', date: 'Sat, 11 Nov', time: '10:00 AM', durationHours: 4.0, venue: 'NESCO', price: '₹899', image: 'https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?q=80&w=2000&auto=format&fit=crop', category: 'Expos', type: 'expos', rating: 4.6, reviewsCount: '950', friendsActivity: [
            { userId: 'f7', name: 'Neha Gupta', avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=150&auto=format&fit=crop', rating: 3.5, review: "The vibe was incredible.", date: 'Recently' },
            { userId: 'f2', name: 'Rohan Kapoor', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop', rating: 5.0, review: "Amazing place!", date: 'Recently' }
        ] }
];

// --- Stores Data ---
export const storeTypes = [
    { id: 'footwear', name: 'Footwear' },
    { id: 'apparel', name: 'Apparel' },
    { id: 'salons_wellness', name: 'Salons & Wellness' },
    { id: 'jewellery', name: 'Jewellery' },
    { id: 'beauty', name: 'Beauty' },
    { id: 'home_furniture', name: 'Home & Furniture' }
];

export const stores = [
    {
        id: 'st_fw_1', distanceKm: 4.2, title: 'Nike Factory Store', location: 'Linking Road', offer: 'Flat 40% Off',
        image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop', type: 'footwear', category: 'Footwear', rating: 4.6, reviewsCount: '56', friendsActivity: [
            { userId: 'f1', name: 'Aditi Sharma', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop', rating: 3, review: "Great collection but genuinely overpriced — you can find the same brands cheaper online.", date: 'Recently' },
            { userId: 'f10', name: 'Rahul Bose', avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=150&auto=format&fit=crop', rating: 4.0, review: "Staff is knowledgeable and not pushy, which is rare. Good browsing experience.", date: 'Recently' },
            { userId: 'f4', name: 'Amit Singh', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop', rating: 4.0, review: "The store layout has improved a lot recently. Easy to navigate and find what you need.", date: 'Recently' }
        ]
    },
    {
        id: 'st_ap_1', distanceKm: 18.5, title: 'Zara', location: 'Palladium Mall', offer: 'End of Season Sale',
        image: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=2070&auto=format&fit=crop', type: 'apparel', category: 'Apparel', rating: 3.9, reviewsCount: '56', friendsActivity: [
            { userId: 'f10', name: 'Rahul Bose', avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=150&auto=format&fit=crop', rating: 3.5, review: "Limited stock on popular items. Call ahead to check availability before making the trip.", date: 'Recently' },
            { userId: 'f2', name: 'Rohan Kapoor', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop', rating: 5.0, review: "Return policy is flexible which is a huge plus. Had to exchange twice and it was painless.", date: 'Recently' }
        ]
    },
    {
        id: 'st_sw_1', distanceKm: 9.5, title: 'Envi Salon & Spa', location: 'Bandra West', offer: '20% Off Services',
        image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1974&auto=format&fit=crop', type: 'salons_wellness', category: 'Salons & Wellness', rating: 4, reviewsCount: '870', friendsActivity: [
            { userId: 'f6', name: 'Vikram Desai', avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=150&auto=format&fit=crop', rating: 4.5, review: "The vibe was incredible.", date: 'Recently' },
            { userId: 'f3', name: 'Priya Verma', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop', rating: 2.5, review: "Window displays look better than what's actually inside. Misleading merchandising.", date: 'Recently' },
            { userId: 'f9', name: 'Ananya Rao', avatar: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=150&auto=format&fit=crop', rating: 4.5, review: "Much better online presence than in-store. The catalogue is larger on the website.", date: 'Recently' }
        ]
    },
    {
        id: 'st_jw_1', distanceKm: 3.8, title: 'Tanishq', location: 'Andheri East', offer: '0% Making Charges',
        image: '/images/jewellery_store.png', type: 'jewellery', category: 'Jewellery', rating: 4.7, reviewsCount: '89', friendsActivity: [
            { userId: 'f10', name: 'Rahul Bose', avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=150&auto=format&fit=crop', rating: 4.0, review: "Surprise find — didn't expect this level of quality at this price point.", date: 'Recently' },
            { userId: 'f6', name: 'Vikram Desai', avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=150&auto=format&fit=crop', rating: 3, review: "Great collection but genuinely overpriced — you can find the same brands cheaper online.", date: 'Recently' },
            { userId: 'f2', name: 'Rohan Kapoor', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop', rating: 4.0, review: "Staff is knowledgeable and not pushy, which is rare. Good browsing experience.", date: 'Recently' }
        ]
    },
    {
        id: 'st_bt_1', distanceKm: 13.5, title: 'Nykaa Luxe', location: 'Jio World Drive', offer: 'Select ranges at 30% off',
        image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=2000&auto=format&fit=crop', type: 'beauty', category: 'Beauty', rating: 4.6, reviewsCount: '950', friendsActivity: [
            { userId: 'f1', name: 'Aditi Sharma', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop', rating: 4.0, review: "The vibe was incredible.", date: 'Recently' },
            { userId: 'f9', name: 'Ananya Rao', avatar: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=150&auto=format&fit=crop', rating: 4.5, review: "The store layout has improved a lot recently. Easy to navigate and find what you need.", date: 'Recently' },
            { userId: 'f2', name: 'Rohan Kapoor', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop', rating: 4.0, review: "Limited stock on popular items. Call ahead to check availability before making the trip.", date: 'Recently' }
        ]
    },
    {
        id: 'st_hf_1', distanceKm: 18.5, title: 'Pepperfry Studio', location: 'Lower Parel', offer: 'Furniture up to 50% Off',
        image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=2070&auto=format&fit=crop', type: 'home_furniture', category: 'Home & Furniture', rating: 4.1, reviewsCount: '2.1k', friendsActivity: [
            { userId: 'f1', name: 'Aditi Sharma', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop', rating: 5.0, review: "Return policy is flexible which is a huge plus. Had to exchange twice and it was painless.", date: 'Recently' },
            { userId: 'f4', name: 'Amit Singh', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop', rating: 2.5, review: "Window displays look better than what's actually inside. Misleading merchandising.", date: 'Recently' }
        ]
    },
    { id: 'st_fw_2', distanceKm: 4.2, title: 'Adidas Originals', location: 'Linking Road', offer: 'Buy 2 Get 1 Free', image: 'https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?q=80&w=2000&auto=format&fit=crop', type: 'footwear', category: 'Footwear', rating: 4.1, reviewsCount: '870', friendsActivity: [
            { userId: 'f5', name: 'Sana Khan', avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=150&auto=format&fit=crop', rating: 4.5, review: "Much better online presence than in-store. The catalogue is larger on the website.", date: 'Recently' },
            { userId: 'f9', name: 'Ananya Rao', avatar: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=150&auto=format&fit=crop', rating: 3.5, review: "Surprise find — didn't expect this level of quality at this price point.", date: 'Recently' },
            { userId: 'f1', name: 'Aditi Sharma', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop', rating: 3, review: "Great collection but genuinely overpriced — you can find the same brands cheaper online.", date: 'Recently' }
        ] },
    { id: 'st_ap_2', distanceKm: 18.5, title: 'H&M', location: 'High Street Phoenix', offer: 'Up to 50% Off', image: 'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?q=80&w=2000&auto=format&fit=crop', type: 'apparel', category: 'Apparel', rating: 4.3, reviewsCount: '89', friendsActivity: [
            { userId: 'f5', name: 'Sana Khan', avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=150&auto=format&fit=crop', rating: 4.0, review: "Not bad, would go again.", date: 'Recently' }
        ] },
    { id: 'st_sw_2', distanceKm: 5.2, title: 'Jean-Claude Biguine', location: 'Juhu', offer: 'Flat 15% Off Haircare', image: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=2000&auto=format&fit=crop', type: 'salons_wellness', category: 'Salons & Wellness', rating: 4.8, reviewsCount: '1.2k', friendsActivity: [
            { userId: 'f7', name: 'Neha Gupta', avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=150&auto=format&fit=crop', rating: 3, review: "Enjoyable but slightly repetitive formula. Watch it for the comedy — don't go in expecting horror. The third act felt rushed.", date: 'Recently' },
            { userId: 'f1', name: 'Aditi Sharma', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop', rating: 3.5, review: "Staff is knowledgeable and not pushy, which is rare. Good browsing experience.", date: 'Recently' }
        ] },
    { id: 'st_jw_2', distanceKm: 38.5, title: 'Kalyan Jewellers', location: 'Vashi', offer: 'Free Gold Coin on Purchase', image: '/images/jewellery_store.png', type: 'jewellery', category: 'Jewellery', rating: 4.5, reviewsCount: '230', friendsActivity: [
            { userId: 'f2', name: 'Rohan Kapoor', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop', rating: 4.5, review: "The store layout has improved a lot recently. Easy to navigate and find what you need.", date: 'Recently' },
            { userId: 'f6', name: 'Vikram Desai', avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=150&auto=format&fit=crop', rating: 3.5, review: "Limited stock on popular items. Call ahead to check availability before making the trip.", date: 'Recently' },
            { userId: 'f7', name: 'Neha Gupta', avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=150&auto=format&fit=crop', rating: 4.0, review: "Return policy is flexible which is a huge plus. Had to exchange twice and it was painless.", date: 'Recently' }
        ] },
    { id: 'st_bt_2', distanceKm: 18.5, title: 'Sephora', location: 'Palladium Mall', offer: 'Free Makeover Session', image: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?q=80&w=2000&auto=format&fit=crop', type: 'beauty', category: 'Beauty', rating: 4, reviewsCount: '870', friendsActivity: [
            { userId: 'f1', name: 'Aditi Sharma', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop', rating: 2.5, review: "Window displays look better than what's actually inside. Misleading merchandising.", date: 'Recently' }
        ] },
    { id: 'st_hf_2', distanceKm: 40.2, title: 'IKEA', location: 'Navi Mumbai', offer: 'New Arrivals Collection', image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=2000&auto=format&fit=crop', type: 'home_furniture', category: 'Home & Furniture', rating: 4.4, reviewsCount: '2.1k', friendsActivity: [
            { userId: 'f1', name: 'Aditi Sharma', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop', rating: 4.0, review: "Much better online presence than in-store. The catalogue is larger on the website.", date: 'Recently' },
            { userId: 'f6', name: 'Vikram Desai', avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=150&auto=format&fit=crop', rating: 4.0, review: "Surprise find — didn't expect this level of quality at this price point.", date: 'Recently' },
            { userId: 'f9', name: 'Ananya Rao', avatar: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=150&auto=format&fit=crop', rating: 3, review: "Great collection but genuinely overpriced — you can find the same brands cheaper online.", date: 'Recently' }
        ] }
];

// --- Activities Data ---
export const activityCategories = [
    { id: 'game_zones', name: 'Game Zones' },
    { id: 'theme_parks', name: 'Theme Parks' },
    { id: 'workshops', name: 'Workshops' },
    { id: 'water_parks', name: 'Water Parks' },
    { id: 'kids_play', name: 'Kids Play' },
    { id: 'games_quizzes', name: 'Games & Quizzes' },
    { id: 'museums', name: 'Museums' },
    { id: 'e_sports', name: 'E Sports' },
    { id: 'adventure', name: 'Adventure' },
    { id: 'fitness', name: 'Fitness' } // Distinct from events fitness
];

export const activities = [
    {
        id: 'act_gz_1', distanceKm: 12.1, title: 'Smaaash', location: 'Kamala Mills', price: '₹1000 onwards',
        image: 'https://images.unsplash.com/photo-1556745753-b2904692b3cd?q=80&w=2071&auto=format&fit=crop', type: 'game_zones', category: 'Game Zones', rating: 4.1, reviewsCount: '89', friendsActivity: [
            { userId: 'f2', name: 'Rohan Kapoor', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop', rating: 5.0, review: "The vibe was incredible.", date: 'Recently' },
            { userId: 'f7', name: 'Neha Gupta', avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=150&auto=format&fit=crop', rating: 3.5, review: "Really well run — safety briefing was thorough and the instructors were super patient.", date: 'Recently' }
        ]
    },
    {
        id: 'act_tp_1', distanceKm: 88, title: 'Imagicaa Theme Park', location: 'Khopoli', price: '₹1599 onwards',
        image: 'https://images.unsplash.com/photo-1513889961551-628c1e5e2ee9?q=80&w=2070&auto=format&fit=crop', type: 'theme_parks', category: 'Theme Parks', rating: 4.7, reviewsCount: '1.5k', friendsActivity: [
            { userId: 'f8', name: 'Karan Patel', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop', rating: 5.0, review: "Morning slots are far better than evenings. Much less crowded and you get more time.", date: 'Recently' },
            { userId: 'f3', name: 'Priya Verma', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop', rating: 3, review: "Good experience overall but the equipment could use an upgrade. Feels a bit dated.", date: 'Recently' },
            { userId: 'f2', name: 'Rohan Kapoor', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop', rating: 4.0, review: "Came with a group of 8 and it was a blast. The staff managed everyone really smoothly.", date: 'Recently' }
        ]
    },
    {
        id: 'act_wk_1', distanceKm: 4.5, title: 'Pottery Workshop by Claying Thoughts', location: 'Khar', price: '₹1200',
        image: 'https://images.unsplash.com/photo-1610701596007-11502861dcfa?q=80&w=2070&auto=format&fit=crop', type: 'workshops', category: 'Workshops', rating: 4, reviewsCount: '950', friendsActivity: [
            { userId: 'f3', name: 'Priya Verma', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop', rating: 3, review: "A bit overpriced compared to similar places in the city but the location makes up for it.", date: 'Recently' }
        ]
    },
    {
        id: 'act_wp_1', distanceKm: 18.2, title: 'Water Kingdom', location: 'Borivali West', price: '₹1300',
        image: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=2000&auto=format&fit=crop', type: 'water_parks', category: 'Water Parks', rating: 4.4, reviewsCount: '56', friendsActivity: [
            { userId: 'f1', name: 'Aditi Sharma', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop', rating: 4.0, review: "Book at least a week in advance — slots fill up quickly on weekends.", date: 'Recently' },
            { userId: 'f4', name: 'Amit Singh', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop', rating: 3, review: "Not as beginner-friendly as advertised. Felt rushed through the orientation.", date: 'Recently' }
        ]
    },
    {
        id: 'act_kp_1', distanceKm: 18.5, title: 'KidZania Mumbai', location: 'R City Mall', price: '₹950',
        image: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=2070&auto=format&fit=crop', type: 'kids_play', category: 'Kids Play', rating: 4.1, reviewsCount: '1.5k', friendsActivity: [
            { userId: 'f10', name: 'Rahul Bose', avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=150&auto=format&fit=crop', rating: 5.0, review: "Great for corporate team outings. They have proper packages for groups.", date: 'Recently' }
        ]
    },
    {
        id: 'act_gq_1', distanceKm: 3.2, title: 'Mystery Rooms: Escape Room', location: 'Andheri Lokhandwala', price: '₹800',
        image: 'https://images.unsplash.com/photo-1591696205602-2f950c417cb9?q=80&w=2029&auto=format&fit=crop', type: 'games_quizzes', category: 'Games & Quizzes', rating: 4, reviewsCount: '1.2k', friendsActivity: [
            { userId: 'f4', name: 'Amit Singh', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop', rating: 3.5, review: "Really well run — safety briefing was thorough and the instructors were super patient.", date: 'Recently' }
        ]
    },
    {
        id: 'act_ms_1', distanceKm: 24.5, title: 'Chhatrapati Shivaji Maharaj Vastu Sangrahalaya', location: 'Fort', price: '₹150',
        image: 'https://images.unsplash.com/photo-1733061501503-98604270606a?q=80&w=2000&auto=format&fit=crop', type: 'museums', category: 'Museums', rating: 4.1, reviewsCount: '89', friendsActivity: [
            { userId: 'f10', name: 'Rahul Bose', avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=150&auto=format&fit=crop', rating: 4.5, review: "The vibe was incredible.", date: 'Recently' }
        ]
    },
    {
        id: 'act_es_1', distanceKm: 18.8, title: 'Zero Latency VR', location: 'Lower Parel', price: '₹1500',
        image: 'https://images.unsplash.com/photo-1617802690658-1173a812650d?q=80&w=2070&auto=format&fit=crop', type: 'e_sports', category: 'E Sports', rating: 4.3, reviewsCount: '450', friendsActivity: [
            { userId: 'f8', name: 'Karan Patel', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop', rating: 4.0, review: "Morning slots are far better than evenings. Much less crowded and you get more time.", date: 'Recently' },
            { userId: 'f6', name: 'Vikram Desai', avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=150&auto=format&fit=crop', rating: 3.5, review: "Not bad, would go again.", date: 'Recently' },
            { userId: 'f5', name: 'Sana Khan', avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=150&auto=format&fit=crop', rating: 3, review: "Good experience overall but the equipment could use an upgrade. Feels a bit dated.", date: 'Recently' }
        ]
    },
    {
        id: 'act_ad_1', distanceKm: 88, title: 'Della Adventure Park', location: 'Lonavala', price: '₹2000',
        image: 'https://images.unsplash.com/photo-1522163182402-834f871fd851?q=80&w=2000&auto=format&fit=crop', type: 'adventure', category: 'Adventure', rating: 4.2, reviewsCount: '3.4k', friendsActivity: [
            { userId: 'f6', name: 'Vikram Desai', avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=150&auto=format&fit=crop', rating: 4.5, review: "Not bad, would go again.", date: 'Recently' }
        ]
    },
    {
        id: 'act_ft_1', distanceKm: 2, title: 'Cult.fit Studio Group Class', location: 'Multiple Locations', price: '₹400',
        image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop', type: 'fitness', category: 'Fitness', rating: 4.3, reviewsCount: '56', friendsActivity: [
            { userId: 'f5', name: 'Sana Khan', avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=150&auto=format&fit=crop', rating: 4.5, review: "Came with a group of 8 and it was a blast. The staff managed everyone really smoothly.", date: 'Recently' },
            { userId: 'f10', name: 'Rahul Bose', avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=150&auto=format&fit=crop', rating: 3, review: "A bit overpriced compared to similar places in the city but the location makes up for it.", date: 'Recently' },
            { userId: 'f8', name: 'Karan Patel', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop', rating: 4.0, review: "Not bad, would go again.", date: 'Recently' }
        ]
    },
    { id: 'act_gz_2', distanceKm: 11.5, title: 'Timezone', location: 'Inorbit Mall Malad', price: '₹500 onwards', image: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?q=80&w=2000&auto=format&fit=crop', type: 'game_zones', category: 'Game Zones', rating: 4.1, reviewsCount: '950', friendsActivity: [
            { userId: 'f6', name: 'Vikram Desai', avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=150&auto=format&fit=crop', rating: 4.0, review: "Book at least a week in advance — slots fill up quickly on weekends.", date: 'Recently' },
            { userId: 'f9', name: 'Ananya Rao', avatar: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=150&auto=format&fit=crop', rating: 3, review: "Not as beginner-friendly as advertised. Felt rushed through the orientation.", date: 'Recently' }
        ] },
    { id: 'act_tp_2', distanceKm: 40, title: 'EsselWorld', location: 'Gorai', price: '₹1050', image: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=2000&auto=format&fit=crop', type: 'theme_parks', category: 'Theme Parks', rating: 4.9, reviewsCount: '870', friendsActivity: [
            { userId: 'f5', name: 'Sana Khan', avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=150&auto=format&fit=crop', rating: 4.5, review: "Great for corporate team outings. They have proper packages for groups.", date: 'Recently' }
        ] },
    { id: 'act_wk_2', distanceKm: 4.5, title: 'Baking Masterclass', location: 'Bandra', price: '₹2500', image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=2000&auto=format&fit=crop', type: 'workshops', category: 'Workshops', rating: 4.8, reviewsCount: '2.1k', friendsActivity: [
            { userId: 'f5', name: 'Sana Khan', avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=150&auto=format&fit=crop', rating: 4.0, review: "Really well run — safety briefing was thorough and the instructors were super patient.", date: 'Recently' }
        ] },
    { id: 'act_wp_2', distanceKm: 88, title: 'Wet N Joy', location: 'Lonavala', price: '₹1100', image: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?q=80&w=2000&auto=format&fit=crop', type: 'water_parks', category: 'Water Parks', rating: 4.4, reviewsCount: '950', friendsActivity: [
            { userId: 'f5', name: 'Sana Khan', avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=150&auto=format&fit=crop', rating: 4.5, review: "Morning slots are far better than evenings. Much less crowded and you get more time.", date: 'Recently' },
            { userId: 'f8', name: 'Karan Patel', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop', rating: 3, review: "Good experience overall but the equipment could use an upgrade. Feels a bit dated.", date: 'Recently' }
        ] },
    { id: 'act_kp_2', distanceKm: 10.5, title: 'Fun City', location: 'Oberoi Mall', price: '₹500', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2000&auto=format&fit=crop', type: 'kids_play', category: 'Kids Play', rating: 4, reviewsCount: '950', friendsActivity: [
            { userId: 'f4', name: 'Amit Singh', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop', rating: 4.0, review: "Came with a group of 8 and it was a blast. The staff managed everyone really smoothly.", date: 'Recently' }
        ] },
    { id: 'act_gq_2', distanceKm: 4, title: 'Clue Hunt', location: 'Bandra West', price: '₹700', image: 'https://images.unsplash.com/photo-1511882150382-421056c89033?q=80&w=2000&auto=format&fit=crop', type: 'games_quizzes', category: 'Games & Quizzes', rating: 4, reviewsCount: '56', friendsActivity: [
            { userId: 'f1', name: 'Aditi Sharma', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop', rating: 3, review: "A bit overpriced compared to similar places in the city but the location makes up for it.", date: 'Recently' },
            { userId: 'f2', name: 'Rohan Kapoor', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop', rating: 4.0, review: "The vibe was incredible.", date: 'Recently' }
        ] },
    { id: 'act_ms_2', distanceKm: 20.5, title: 'Dr. Bhau Daji Lad Museum', location: 'Byculla', price: '₹100', image: 'https://images.unsplash.com/photo-1554907984-15263bfd63bd?q=80&w=2000&auto=format&fit=crop', type: 'museums', category: 'Museums', rating: 4.2, reviewsCount: '342', friendsActivity: [
            { userId: 'f8', name: 'Karan Patel', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop', rating: 3.5, review: "Book at least a week in advance — slots fill up quickly on weekends.", date: 'Recently' }
        ] },
    { id: 'act_es_2', distanceKm: 5.2, title: 'Microgravity Gaming', location: 'Juhu', price: '₹1200', image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2000&auto=format&fit=crop', type: 'e_sports', category: 'E Sports', rating: 4, reviewsCount: '89', friendsActivity: [
            { userId: 'f6', name: 'Vikram Desai', avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=150&auto=format&fit=crop', rating: 4.5, review: "Not bad, would go again.", date: 'Recently' },
            { userId: 'f8', name: 'Karan Patel', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop', rating: 3, review: "Not as beginner-friendly as advertised. Felt rushed through the orientation.", date: 'Recently' },
            { userId: 'f5', name: 'Sana Khan', avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=150&auto=format&fit=crop', rating: 3.5, review: "Great for corporate team outings. They have proper packages for groups.", date: 'Recently' }
        ] },
    { id: 'act_ad_2', distanceKm: 14.2, title: 'Hakone Go Karting', location: 'Powai', price: '₹400', image: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=80&w=2000&auto=format&fit=crop', type: 'adventure', category: 'Adventure', rating: 4.4, reviewsCount: '450', friendsActivity: [
            { userId: 'f3', name: 'Priya Verma', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop', rating: 5.0, review: "Really well run — safety briefing was thorough and the instructors were super patient.", date: 'Recently' },
            { userId: 'f5', name: 'Sana Khan', avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=150&auto=format&fit=crop', rating: 4.0, review: "Morning slots are far better than evenings. Much less crowded and you get more time.", date: 'Recently' }
        ] },
    { id: 'act_ft_2', distanceKm: 9.2, title: 'Bounce Inc Trampoline', location: 'Malad', price: '₹900', image: 'https://images.unsplash.com/photo-1524594081293-190a2fe0baae?q=80&w=2000&auto=format&fit=crop', type: 'fitness', category: 'Fitness', rating: 3.9, reviewsCount: '230', friendsActivity: [
            { userId: 'f8', name: 'Karan Patel', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop', rating: 3, review: "Good experience overall but the equipment could use an upgrade. Feels a bit dated.", date: 'Recently' }
        ] }
];

// --- Play Data ---
export const sportServices = [
    { id: 'cricket', name: 'Cricket' },
    { id: 'football', name: 'Football' },
    { id: 'badminton', name: 'Badminton' },
    { id: 'tennis', name: 'Tennis' },
    { id: 'pickleball', name: 'Pickleball' },
    { id: 'basketball', name: 'Basketball' }
];

export const playFacilities = [
    {
        id: 'pl_cr_1', distanceKm: 4.2, openTime: '05:00', closeTime: '00:00', title: 'Khar Gymkhana Turf', location: 'Khar West', price: '₹1500/hr',
        image: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?q=80&w=2067&auto=format&fit=crop', type: 'cricket', category: 'Cricket', rating: 4.5, reviewsCount: '230', friendsActivity: [
            { userId: 'f8', name: 'Karan Patel', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop', rating: 4.5, review: "Best maintained court I've played at in Mumbai. Lighting for evening games is excellent.", date: 'Recently' },
            { userId: 'f2', name: 'Rohan Kapoor', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop', rating: 5.0, review: "Not bad, would go again.", date: 'Recently' },
            { userId: 'f9', name: 'Ananya Rao', avatar: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=150&auto=format&fit=crop', rating: 2.5, review: "Booking system is a mess — they gave our slot to someone else and were unapologetic about it. Wouldn't trust this place for competitive games.", date: 'Recently' }
        ]
    },
    {
        id: 'pl_fb_1', distanceKm: 3.5, openTime: '05:00', closeTime: '00:00', title: 'Nirlon Sports Club Turf', location: 'Goregaon East', price: '₹2000/hr',
        image: '/images/football_turf.png', type: 'football', category: 'Football', rating: 4.3, reviewsCount: '870', friendsActivity: [
            { userId: 'f5', name: 'Sana Khan', avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=150&auto=format&fit=crop', rating: 4.5, review: "Not bad, would go again.", date: 'Recently' },
            { userId: 'f6', name: 'Vikram Desai', avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=150&auto=format&fit=crop', rating: 5.0, review: "Changing rooms need serious upgrading but the court quality is top notch.", date: 'Recently' },
            { userId: 'f10', name: 'Rahul Bose', avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=150&auto=format&fit=crop', rating: 4.5, review: "Go early on weekends — afternoons get chaotic and booking slots disappear fast.", date: 'Recently' },
            { userId: 'f4', name: 'Amit Singh', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop', rating: 1.5, review: "Turf was waterlogged when we arrived, they had clearly not inspected it. Refused a refund. Wasted two hours and ₹4000. Never again.", date: 'Recently' }
        ]
    },
    {
        id: 'pl_bd_1', distanceKm: 2.8, openTime: '05:00', closeTime: '00:00', title: 'Andheri Sports Complex', location: 'Andheri West', price: '₹600/hr',
        image: '/images/badminton_court.png', type: 'badminton', category: 'Badminton', rating: 4, reviewsCount: '1.2k', friendsActivity: [
            { userId: 'f1', name: 'Aditi Sharma', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop', rating: 4.5, review: "The vibe was incredible.", date: 'Recently' },
            { userId: 'f3', name: 'Priya Verma', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop', rating: 2.0, review: "Shuttles and rackets available for rent are in terrible shape. Broken strings, worn-out shuttles. Bring your own equipment or don't bother.", date: 'Recently' }
        ]
    },
    {
        id: 'pl_tn_1', distanceKm: 26.5, openTime: '05:00', closeTime: '00:00', title: 'MSLTA Tennis Courts', location: 'Colaba', price: '₹800/hr',
        image: 'https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?q=80&w=2070&auto=format&fit=crop', type: 'tennis', category: 'Tennis', rating: 4.4, reviewsCount: '950', friendsActivity: [
            { userId: 'f5', name: 'Sana Khan', avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=150&auto=format&fit=crop', rating: 4.5, review: "Slightly on the expensive side but the surface quality justifies it. No puddles after rain.", date: 'Recently' }
        ]
    },
    {
        id: 'pl_pb_1', distanceKm: 4.5, openTime: '05:00', closeTime: '00:00', title: 'Pickleball Central India', location: 'Bandra', price: '₹1200/hr',
        image: '/images/pickleball_court.png', type: 'pickleball', category: 'Pickleball', rating: 4, reviewsCount: '112', friendsActivity: [
            { userId: 'f3', name: 'Priya Verma', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop', rating: 5.0, review: "Equipment rental is steep — bring your own gear and it's good value.", date: 'Recently' }
        ]
    },
    {
        id: 'pl_bs_1', title: 'YMCA Basketball Court', location: 'Mumbai Central', price: '₹1000/hr', distanceKm: 16.8, openTime: '05:00', closeTime: '00:00',
        image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=2090&auto=format&fit=crop', type: 'basketball', category: 'Basketball', rating: 4.3, reviewsCount: '450', friendsActivity: [
            { userId: 'f5', name: 'Sana Khan', avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=150&auto=format&fit=crop', rating: 4.5, review: "Had a corporate tourney here. Staff was extremely organised and professional.", date: 'Recently' },
            { userId: 'f8', name: 'Karan Patel', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop', rating: 4.5, review: "Best maintained court I've played at in Mumbai. Lighting for evening games is excellent.", date: 'Recently' },
            { userId: 'f7', name: 'Neha Gupta', avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=150&auto=format&fit=crop', rating: 2.0, review: "Showed up for a booked slot to find the court double-booked. Management shrugged it off. The floor also has uneven patches that are genuinely dangerous.", date: 'Recently' }
        ]
    },
    { id: 'pl_cr_2', distanceKm: 8, openTime: '05:00', closeTime: '00:00', title: 'Poddar School Turf', location: 'Santacruz', price: '₹1200/hr', image: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?q=80&w=2000&auto=format&fit=crop', type: 'cricket', category: 'Cricket', rating: 4.4, reviewsCount: '342', friendsActivity: [
            { userId: 'f7', name: 'Neha Gupta', avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=150&auto=format&fit=crop', rating: 4.0, review: "Changing rooms need serious upgrading but the court quality is top notch.", date: 'Recently' },
            { userId: 'f4', name: 'Amit Singh', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop', rating: 4.0, review: "The vibe was incredible.", date: 'Recently' },
            { userId: 'f6', name: 'Vikram Desai', avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=150&auto=format&fit=crop', rating: 5.0, review: "The vibe was incredible.", date: 'Recently' }
        ] },
    { id: 'pl_fb_2', distanceKm: 6.5, openTime: '05:00', closeTime: '00:00', title: 'St. Andrews Astro Park', location: 'Bandra West', price: '₹2500/hr', image: '/images/football_turf.png', type: 'football', category: 'Football', rating: 4.4, reviewsCount: '870', friendsActivity: [
            { userId: 'f7', name: 'Neha Gupta', avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=150&auto=format&fit=crop', rating: 4.5, review: "Go early on weekends — afternoons get chaotic and booking slots disappear fast.", date: 'Recently' }
        ] },
    { id: 'pl_bd_2', distanceKm: 5.5, openTime: '05:00', closeTime: '00:00', title: 'Khar Gymkhana Courts', location: 'Khar', price: '₹800/hr', image: '/images/badminton_court.png', type: 'badminton', category: 'Badminton', rating: 3.9, reviewsCount: '950', friendsActivity: [
            { userId: 'f7', name: 'Neha Gupta', avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=150&auto=format&fit=crop', rating: 4.5, review: "Slightly on the expensive side but the surface quality justifies it. No puddles after rain.", date: 'Recently' }
        ] },
    { id: 'pl_tn_2', distanceKm: 7.5, openTime: '05:00', closeTime: '00:00', title: 'YMCA Tennis Courts', location: 'Mumbai Central', price: '₹600/hr', image: 'https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?q=80&w=2000&auto=format&fit=crop', type: 'tennis', category: 'Tennis', rating: 4.2, reviewsCount: '950', friendsActivity: [
            { userId: 'f2', name: 'Rohan Kapoor', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop', rating: 4.0, review: "Equipment rental is steep — bring your own gear and it's good value.", date: 'Recently' },
            { userId: 'f8', name: 'Karan Patel', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop', rating: 4.0, review: "Had a corporate tourney here. Staff was extremely organised and professional.", date: 'Recently' }
        ] },
    { id: 'pl_pb_2', distanceKm: 7, openTime: '05:00', closeTime: '00:00', title: 'Juhu Vile Parle Club', location: 'Juhu', price: '₹1500/hr', image: '/images/pickleball_court.png', type: 'pickleball', category: 'Pickleball', rating: 4.3, reviewsCount: '89', friendsActivity: [
            { userId: 'f2', name: 'Rohan Kapoor', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop', rating: 4.5, review: "Best maintained court I've played at in Mumbai. Lighting for evening games is excellent.", date: 'Recently' }
        ] },
    { id: 'pl_bs_2', distanceKm: 3.5, openTime: '05:00', closeTime: '00:00', title: 'Hoopers Basketball Arena', location: 'Andheri East', price: '₹1200/hr', image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=2000&auto=format&fit=crop', type: 'basketball', category: 'Basketball', rating: 4.7, reviewsCount: '230', friendsActivity: [
            { userId: 'f2', name: 'Rohan Kapoor', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop', rating: 4.0, review: "Not bad, would go again.", date: 'Recently' },
            { userId: 'f5', name: 'Sana Khan', avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=150&auto=format&fit=crop', rating: 5.0, review: "Changing rooms need serious upgrading but the court quality is top notch.", date: 'Recently' }
        ] }
];

// --- Users & Social Data ---

export const users = [
    {
        id: 'u1',
        name: 'Siddharth Jain',
        city: 'Mumbai',
        image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=150&auto=format&fit=crop',
        friendIds: ['f1', 'f2', 'f3', 'f4', 'f5', 'f6', 'f7', 'f8', 'f9', 'f10', 'f11', 'f12', 'f13', 'f14', 'f15'],
        visitedPlaces: [
            { type: 'restaurant', placeId: 'r1', rating: 4.5, review: "Loved the ambience!", date: '2 weeks ago' },
            { type: 'movie', placeId: 'm1', rating: 5.0, review: "Absolute masterpiece.", date: '1 month ago' },
            { type: 'store', placeId: 'st_ap_2', rating: 3.5, review: "Good collection but a bit pricey.", date: '3 months ago' },
            { type: 'activity', placeId: 'act_gz_1', rating: 4.5, review: "So much fun — great variety of games for groups!", date: 'Last week' },
            { type: 'play', placeId: 'pl_cr_1', rating: 4.0, review: "Fun turf, well maintained.", date: '2 months ago' },
            { type: 'restaurant', placeId: 'r7', rating: 3.5, review: "Crowded but nice vibe.", date: '1 year ago' },
            { type: 'movie', placeId: 'sci_1', rating: 4.5, review: "Visually stunning.", date: '3 weeks ago' },
            { type: 'event', placeId: 'e2', rating: 4.0, review: "Hilarious set!", date: '4 months ago' },
            { type: 'store', placeId: 'st_fw_1', rating: 4.5, review: "Got some great kicks here.", date: 'Last month' },
            { type: 'play', placeId: 'pl_pb_1', rating: 5.0, review: "Best pickleball court in town.", date: 'Yesterday' }
        ]
    },
    { id: 'f1', name: 'Aditi Sharma', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop', mutualFriends: 12, visitedPlaces: [] },
    { id: 'f2', name: 'Rohan Kapoor', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop', mutualFriends: 8, visitedPlaces: [] },
    { id: 'f3', name: 'Priya Verma', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop', mutualFriends: 15, visitedPlaces: [] },
    { id: 'f4', name: 'Amit Singh', avatar: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?q=80&w=150&auto=format&fit=crop', mutualFriends: 5, visitedPlaces: [] },
    { id: 'f5', name: 'Sana Khan', avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=150&auto=format&fit=crop', mutualFriends: 20, visitedPlaces: [] },
    { id: 'f6', name: 'Vikram Desai', avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=150&auto=format&fit=crop', mutualFriends: 3, visitedPlaces: [] },
    { id: 'f7', name: 'Neha Gupta', avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=150&auto=format&fit=crop', mutualFriends: 14, visitedPlaces: [] },
    { id: 'f8', name: 'Karan Patel', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop', mutualFriends: 9, visitedPlaces: [] },
    { id: 'f9', name: 'Ananya Rao', avatar: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=150&auto=format&fit=crop', mutualFriends: 18, visitedPlaces: [] },
    { id: 'f10', name: 'Rahul Bose', avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=150&auto=format&fit=crop', mutualFriends: 7, visitedPlaces: [] },
    { id: 'f11', name: 'Ishaan Mehta', avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=150&auto=format&fit=crop', mutualFriends: 11, visitedPlaces: [] },
    { id: 'f12', name: 'Kavya Nair', avatar: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=150&auto=format&fit=crop', mutualFriends: 6, visitedPlaces: [] },
    { id: 'f13', name: 'Dev Malhotra', avatar: 'https://images.unsplash.com/photo-1463453091185-61582044d556?q=80&w=150&auto=format&fit=crop', mutualFriends: 13, visitedPlaces: [] },
    { id: 'f14', name: 'Tara Reddy', avatar: 'https://images.unsplash.com/photo-1502764613149-7f1d229e230f?q=80&w=150&auto=format&fit=crop', mutualFriends: 4, visitedPlaces: [] },
    { id: 'f15', name: 'Arjun Khanna', avatar: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=150&auto=format&fit=crop', mutualFriends: 16, visitedPlaces: [] }
];

export const currentUser = users.find(u => u.id === 'u1');
