
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
        id: 'r1', priceForTwo: '₹2,800 for two', openTime: '09:00', closeTime: '00:30', distanceKm: 12.5,
        name: 'The Bombay Canteen',
        cuisine: 'Modern Indian',
        cuisines: ['north_indian', 'south_indian', 'continental'],
        mood: 'drink_dine',
        rating: 4.5, reviewsCount: '230', price: '₹₹₹',
        image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop',
        location: 'Lower Parel, Mumbai',
        distance: '2.5 km',
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
        id: 'r2', priceForTwo: '₹2,200 for two', openTime: '09:00', closeTime: '00:30', distanceKm: 18.2,
        name: 'O Pedro',
        cuisine: 'Goan',
        cuisines: ['continental', 'seafood'],
        mood: 'drink_dine',
        rating: 3.9, reviewsCount: '3.4k', price: '₹₹₹',
        image: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=2070&auto=format&fit=crop',
        location: 'BKC, Mumbai',
        distance: '4.1 km',
        description: 'A happy place that brings the spirit of Goa to Mumbai.',
        friendsActivity: [
            { userId: 'f2', name: 'Rohan Kapoor', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop', rating: 4.5, review: "Not bad, would go again.", date: 'Recently' }
        ]
    },
    {
        id: 'dd_ita', priceForTwo: '₹2,600 for two', openTime: '09:00', closeTime: '00:30', distanceKm: 5.4, name: 'Sorrentina', cuisine: 'Italian', cuisines: ['italian'], mood: 'drink_dine', rating: 4.3, reviewsCount: '89', price: '₹₹₹',
        image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?q=80&w=2032&auto=format&fit=crop', location: 'Bandra, Mumbai', distance: '2.0 km', description: 'Handcrafted pasta and pizzas.'
    },
    {
        id: 'dd_chi', priceForTwo: '₹3,000 for two', openTime: '09:00', closeTime: '00:30', distanceKm: 5.8, name: 'Hakkasan', cuisine: 'Chinese', cuisines: ['chinese'], mood: 'drink_dine', rating: 4.1, reviewsCount: '112', price: '₹₹₹',
        image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2070&auto=format&fit=crop', location: 'Bandra, Mumbai', distance: '1.5 km', description: 'Michelin-starred Cantonese cuisine.'
    },
    {
        id: 'dd_asi', priceForTwo: '₹2,800 for two', openTime: '09:00', closeTime: '00:30', distanceKm: 12.1, name: 'Koko', cuisine: 'Asian', cuisines: ['asian'], mood: 'drink_dine', rating: 4.6, reviewsCount: '89', price: '₹₹₹',
        image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop', location: 'Lower Parel, Mumbai', distance: '2.8 km', description: 'Asian gastro-pub.'
    },
    {
        id: 'dd_mex', priceForTwo: '₹2,400 for two', openTime: '09:00', closeTime: '00:30', distanceKm: 15.5, name: 'Mezcalita', cuisine: 'Mexican', cuisines: ['mexican'], mood: 'drink_dine', rating: 4.5, reviewsCount: '56', price: '₹₹₹',
        image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=2071&auto=format&fit=crop', location: 'Churchgate, Mumbai', distance: '8.0 km', description: 'Lively Mexican cantina.'
    },
    {
        id: 'dd_veg', priceForTwo: '₹900 for two', openTime: '09:00', closeTime: '00:30', distanceKm: 8.9, name: 'Veggie Buzz', cuisine: 'Pure Veg', cuisines: ['pure_veg'], mood: 'drink_dine', rating: 4.1, reviewsCount: '3.4k', price: '₹₹',
        image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2070&auto=format&fit=crop', location: 'Juhu, Mumbai', distance: '3.0 km', description: 'Vegetarian bar and kitchen.'
    },

    // --- Nightlife ---
    {
        id: 'r7', priceForTwo: '₹1,200 for two', openTime: '09:00', closeTime: '00:30', distanceKm: 3.8, name: 'Social', cuisine: 'Continental', cuisines: ['continental', 'north_indian'], mood: 'nightlife', rating: 4.1, reviewsCount: '2.1k', price: '₹₹',
        image: 'https://images.unsplash.com/photo-1575444758702-4a6b9222336e?q=80&w=2070&auto=format&fit=crop', location: 'Khar, Mumbai', distance: '1.5 km', offers: 'Happy Hours 4-8 PM', description: 'Neighborhood bar and popup.'
    },
    {
        id: 'r8', priceForTwo: '₹2,600 for two', openTime: '09:00', closeTime: '00:30', distanceKm: 4, name: 'Raasta', cuisine: 'Caribbean', cuisines: ['continental', 'mexican'], mood: 'nightlife', rating: 4.4, reviewsCount: '230', price: '₹₹₹',
        image: 'https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?q=80&w=2029&auto=format&fit=crop', location: 'Khar, Mumbai', distance: '1.6 km', description: 'Reggae lounge.'
    },
    {
        id: 'r17', priceForTwo: '₹2,800 for two', openTime: '09:00', closeTime: '00:30', distanceKm: 16, name: 'Poco Loco', cuisine: 'Mexican', cuisines: ['mexican', 'spanish'], mood: 'nightlife', rating: 4, reviewsCount: '56', price: '₹₹₹',
        image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1974&auto=format&fit=crop', location: 'Khar, Mumbai', distance: '1.7 km', description: 'Tapas and cocktails.'
    },
    {
        id: 'nl_si', priceForTwo: '₹1,500 for two', openTime: '09:00', closeTime: '00:30', distanceKm: 14, name: 'South High Bar', cuisine: 'South Indian', cuisines: ['south_indian'], mood: 'nightlife', rating: 4.4, reviewsCount: '1.2k', price: '₹₹',
        image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?q=80&w=2070&auto=format&fit=crop', location: 'Lower Parel, Mumbai', distance: '2.6 km', description: 'South Indian bar food.'
    },
    {
        id: 'nl_ita', priceForTwo: '₹1,500 for two', openTime: '09:00', closeTime: '00:30', distanceKm: 14, name: 'Olive Bar', cuisine: 'Italian', cuisines: ['italian'], mood: 'nightlife', rating: 4.4, reviewsCount: '3.4k', price: '₹₹₹',
        image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2070&auto=format&fit=crop', location: 'Bandra, Mumbai', distance: '1.5 km', description: 'Late night Italian vibes.'
    },
    {
        id: 'nl_chi', priceForTwo: '₹1,500 for two', openTime: '09:00', closeTime: '00:30', distanceKm: 14, name: 'China House Lounge', cuisine: 'Chinese', cuisines: ['chinese'], mood: 'nightlife', rating: 4.6, reviewsCount: '870', price: '₹₹₹',
        image: 'https://images.unsplash.com/photo-1572116469696-31de0f17cc34?q=80&w=2074&auto=format&fit=crop', location: 'Santacruz, Mumbai', distance: '3.0 km', description: 'Luxury lounge with Chinese cuisine.'
    },
    {
        id: 'nl_asi', priceForTwo: '₹1,500 for two', openTime: '09:00', closeTime: '00:30', distanceKm: 14, name: '145 Bandra', cuisine: 'Asian', cuisines: ['asian', 'continental'], mood: 'nightlife', rating: 4.7, reviewsCount: '230', price: '₹₹',
        image: 'https://images.unsplash.com/photo-1566737236500-c8ac43014a67?q=80&w=1740&auto=format&fit=crop', location: 'Bandra West, Mumbai', distance: '1.0 km', description: 'Comfort food and cocktails.'
    },
    {
        id: 'nl_veg', priceForTwo: '₹1,500 for two', openTime: '09:00', closeTime: '00:30', distanceKm: 14, name: 'SpiceKlub', cuisine: 'Pure Veg', cuisines: ['pure_veg', 'north_indian'], mood: 'nightlife', rating: 4.8, reviewsCount: '342', price: '₹₹₹',
        image: 'https://images.unsplash.com/photo-1585238342024-78d387f4a707?q=80&w=2080&auto=format&fit=crop', location: 'Lower Parel, Mumbai', distance: '2.5 km', description: 'Molecular gastronomy vegetarian.'
    },

    // --- Cafes ---
    {
        id: 'r3', priceForTwo: '₹1,800 for two', openTime: '09:00', closeTime: '00:30', distanceKm: 3.1, name: 'Subko Coffee Roasters', cuisine: 'Cafe', cuisines: ['continental', 'cafes'], mood: 'cafes', rating: 4.8, reviewsCount: '1.5k', price: '₹₹',
        image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2047&auto=format&fit=crop', location: 'Bandra West, Mumbai', distance: '1.2 km', description: 'Specialty coffee roastery.'
    },
    {
        id: 'r9', priceForTwo: '₹1,400 for two', openTime: '09:00', closeTime: '00:30', distanceKm: 2.1, name: 'Blue Tokai', cuisine: 'Cafe', cuisines: ['cafes', 'continental'], mood: 'cafes', rating: 4.6, reviewsCount: '342', price: '₹₹',
        image: 'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=2071&auto=format&fit=crop', location: 'Versova, Mumbai', distance: '5.0 km', description: 'India\'s largest specialty coffee company.'
    },
    {
        id: 'cf_ni', priceForTwo: '₹1,500 for two', openTime: '09:00', closeTime: '00:30', distanceKm: 23, name: 'Chai Pe Charcha', cuisine: 'North Indian', cuisines: ['north_indian'], mood: 'cafes', rating: 4.6, reviewsCount: '112', price: '₹',
        image: 'https://images.unsplash.com/photo-1566737236500-c8ac43014a67?q=80&w=1740&auto=format&fit=crop', location: 'Andheri, Mumbai', distance: '3.5 km', description: 'Desi chai and snacks.'
    },
    {
        id: 'cf_si', priceForTwo: '₹1,500 for two', openTime: '09:00', closeTime: '00:30', distanceKm: 23, name: 'Madras Cafe', cuisine: 'South Indian', cuisines: ['south_indian'], mood: 'cafes', rating: 4.3, reviewsCount: '3.4k', price: '₹',
        image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=2070&auto=format&fit=crop', location: 'Matunga, Mumbai', distance: '6.0 km', description: 'Legendary South Indian filter coffee.'
    },
    {
        id: 'cf_ita', priceForTwo: '₹1,500 for two', openTime: '09:00', closeTime: '00:30', distanceKm: 23, name: 'Grandmama\'s Cafe', cuisine: 'Italian', cuisines: ['italian'], mood: 'cafes', rating: 4.4, reviewsCount: '450', price: '₹₹',
        image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1974&auto=format&fit=crop', location: 'Juhu, Mumbai', distance: '3.2 km', description: 'Quaint cafe with Italian fare.'
    },
    {
        id: 'cf_chi', priceForTwo: '₹1,500 for two', openTime: '09:00', closeTime: '00:30', distanceKm: 23, name: 'Tea Villa Cafe', cuisine: 'Chinese', cuisines: ['chinese'], mood: 'cafes', rating: 4.5, reviewsCount: '56', price: '₹₹',
        image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?q=80&w=2069&auto=format&fit=crop', location: 'Bandra, Mumbai', distance: '1.8 km', description: 'Extensive tea menu and Chinese wok.'
    },
    {
        id: 'cf_asi', priceForTwo: '₹1,500 for two', openTime: '09:00', closeTime: '00:30', distanceKm: 23, name: 'Buns & Boba', cuisine: 'Asian', cuisines: ['asian'], mood: 'cafes', rating: 4.3, reviewsCount: '3.4k', price: '₹₹',
        image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2047&auto=format&fit=crop', location: 'Bandra, Mumbai', distance: '1.4 km', description: 'Baos and Bubble tea.'
    },
    {
        id: 'cf_mex', priceForTwo: '₹1,500 for two', openTime: '09:00', closeTime: '00:30', distanceKm: 23, name: 'The Bagel Shop', cuisine: 'Mexican', cuisines: ['mexican'], mood: 'cafes', rating: 4, reviewsCount: '870', price: '₹₹',
        image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2070&auto=format&fit=crop', location: 'Bandra, Mumbai', distance: '1.2 km', description: 'Bagels and wraps.'
    },
    {
        id: 'cf_veg', priceForTwo: '₹1,500 for two', openTime: '09:00', closeTime: '00:30', distanceKm: 23, name: 'Earth Cafe', cuisine: 'Pure Veg', cuisines: ['pure_veg'], mood: 'cafes', rating: 4.5, reviewsCount: '230', price: '₹₹',
        image: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?q=80&w=2070&auto=format&fit=crop', location: 'Bandra, Mumbai', distance: '1.5 km', description: 'Vegan and gluten-free options.'
    },

    // --- Romantic ---
    {
        id: 'r10', priceForTwo: '₹1,100 for two', openTime: '09:00', closeTime: '00:30', distanceKm: 4.5, name: 'Olive Bar & Kitchen', cuisine: 'Mediterranean', cuisines: ['italian', 'continental', 'fine_dining'], mood: 'romantic', rating: 4, reviewsCount: '342', price: '₹₹₹',
        image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2070&auto=format&fit=crop', location: 'Khar, Mumbai', distance: '1.8 km', description: 'Romantic Mediterranean hideaway.',
        friendsActivity: [
            { userId: 'f7', name: 'Neha Gupta', avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=150&auto=format&fit=crop', rating: 4.5, review: "Honestly a bit hyped. The signature dish was good, but not mind-blowing. Nice vibe though.", date: 'Recently' },
            { userId: 'f3', name: 'Priya Verma', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop', rating: 2.5, review: "Worth a visit once, but I wouldn't go back at these prices. The portion sizes have shrunk.", date: 'Recently' }
        ]
    },
    {
        id: 'r11', priceForTwo: '₹2,800 for two', openTime: '09:00', closeTime: '00:30', distanceKm: 5.1, name: 'Gadda Da Vida', cuisine: 'Continental', cuisines: ['continental', 'italian'], mood: 'romantic', rating: 4.3, reviewsCount: '230', price: '₹₹₹',
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2073&auto=format&fit=crop', location: 'Juhu, Mumbai', distance: '4.0 km', description: 'Sea-facing lounge.'
    },
    {
        id: 'rm_ni', priceForTwo: '₹1,500 for two', openTime: '09:00', closeTime: '00:30', distanceKm: 18, name: 'Peshawri', cuisine: 'North Indian', cuisines: ['north_indian'], mood: 'romantic', rating: 4.1, reviewsCount: '450', price: '₹₹₹',
        image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop', location: 'Andheri, Mumbai', distance: '3.8 km', description: 'Luxury North Indian dining.'
    },
    {
        id: 'rm_si', priceForTwo: '₹1,500 for two', openTime: '09:00', closeTime: '00:30', distanceKm: 18, name: 'Konkan Cafe', cuisine: 'South Indian', cuisines: ['south_indian'], mood: 'romantic', rating: 4.1, reviewsCount: '1.2k', price: '₹₹₹',
        image: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=2070&auto=format&fit=crop', location: 'Cuffe Parade, Mumbai', distance: '10.0 km', description: 'Elegant South Indian coastal cuisine.'
    },
    {
        id: 'rm_chi', priceForTwo: '₹1,500 for two', openTime: '09:00', closeTime: '00:30', distanceKm: 18, name: 'Golden Dragon', cuisine: 'Chinese', cuisines: ['chinese'], mood: 'romantic', rating: 4, reviewsCount: '950', price: '₹₹₹',
        image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?q=80&w=2070&auto=format&fit=crop', location: 'Colaba, Mumbai', distance: '9.0 km', description: 'Authentic Sichuan cuisine.'
    },
    {
        id: 'rm_asi', priceForTwo: '₹1,500 for two', openTime: '09:00', closeTime: '00:30', distanceKm: 18, name: 'Wasabi by Morimoto', cuisine: 'Asian', cuisines: ['asian'], mood: 'romantic', rating: 4.7, reviewsCount: '89', price: '₹₹₹',
        image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop', location: 'Colaba, Mumbai', distance: '9.0 km', description: 'World-class Japanese dining.'
    },
    {
        id: 'rm_mex', priceForTwo: '₹1,500 for two', openTime: '09:00', closeTime: '00:30', distanceKm: 18, name: 'Xico', cuisine: 'Mexican', cuisines: ['mexican'], mood: 'romantic', rating: 4.5, reviewsCount: '450', price: '₹₹₹',
        image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=2071&auto=format&fit=crop', location: 'Lower Parel, Mumbai', distance: '2.5 km', description: 'Modern Mexican fine dining.'
    },
    {
        id: 'rm_veg', priceForTwo: '₹1,500 for two', openTime: '09:00', closeTime: '00:30', distanceKm: 18, name: 'Tresind', cuisine: 'Pure Veg', cuisines: ['pure_veg', 'modern_indian'], mood: 'romantic', rating: 4.2, reviewsCount: '950', price: '₹₹₹',
        image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop', location: 'BKC, Mumbai', distance: '4.5 km', description: 'Innovative vegetarian tasting menus.'
    },

    // --- Family Dining ---
    {
        id: 'r4', priceForTwo: '₹2,200 for two', openTime: '09:00', closeTime: '00:30', distanceKm: 6.4, name: 'Mainland China', cuisine: 'Chinese', cuisines: ['chinese', 'asian'], mood: 'family', rating: 4.5, reviewsCount: '1.2k', price: '₹₹₹',
        image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?q=80&w=2070&auto=format&fit=crop', location: 'Andheri West, Mumbai', distance: '3.0 km', description: 'Authentic Chinese cuisine.',
        friendsActivity: [
            { userId: 'f7', name: 'Neha Gupta', avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=150&auto=format&fit=crop', rating: 3.5, review: "Really loved the ambiance and the cocktail menu. The mains were hit or miss.", date: 'Recently' },
            { userId: 'f3', name: 'Priya Verma', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop', rating: 4.5, review: "Perfect for a work lunch or a first date — mature vibe. Head for the brunch on Sundays if you can.", date: 'Recently' },
            { userId: 'f10', name: 'Rahul Bose', avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=150&auto=format&fit=crop', rating: 4.0, review: "Great for a work dinner or date — noise levels are manageable unlike most BKC restaurants.", date: 'Recently' }
        ]
    },
    {
        id: 'r12', priceForTwo: '₹1,800 for two', openTime: '09:00', closeTime: '00:30', distanceKm: 7.2, name: 'Punjab Grill', cuisine: 'North Indian', cuisines: ['north_indian'], mood: 'family', rating: 4.8, reviewsCount: '56', price: '₹₹₹',
        image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop', location: 'Juhu, Mumbai', distance: '4.2 km', description: 'Gourmet North Indian.'
    },
    {
        id: 'r6', priceForTwo: '₹1,500 for two', openTime: '09:00', closeTime: '00:30', distanceKm: 4.2, name: 'Burma Burma', cuisine: 'Asian (Veg)', cuisines: ['asian', 'pure_veg'], mood: 'family', rating: 4.5, reviewsCount: '89', price: '₹₹₹',
        image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?q=80&w=2072&auto=format&fit=crop', location: 'Fort, Mumbai', distance: '7.0 km', description: 'Authentic vegetarian Burmese.',
        friendsActivity: [
            { userId: 'f2', name: 'Rohan Kapoor', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop', rating: 3.5, review: "The tasting menu is actually worth it here. Skip the à la carte — you miss the best dishes.", date: 'Recently' },
            { userId: 'f6', name: 'Vikram Desai', avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=150&auto=format&fit=crop', rating: 4.0, review: "The vibe was incredible.", date: 'Recently' },
            { userId: 'f8', name: 'Karan Patel', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop', rating: 3, review: "Pasta was disappointing but the appetizers and desserts were fantastic. Uneven kitchen.", date: 'Recently' }
        ]
    },
    {
        id: 'r18', priceForTwo: '₹1,200 for two', openTime: '09:00', closeTime: '00:30', distanceKm: 9.8, name: 'Dakshinayan', cuisine: 'South Indian', cuisines: ['south_indian', 'pure_veg'], mood: 'family', rating: 4.3, reviewsCount: '450', price: '₹₹',
        image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?q=80&w=2070&auto=format&fit=crop', location: 'Juhu, Mumbai', distance: '3.5 km', description: 'South Indian delicacies.'
    },
    {
        id: 'r5', priceForTwo: '₹2,400 for two', openTime: '09:00', closeTime: '00:30', distanceKm: 24, name: 'PizzaExpress', cuisine: 'Italian', cuisines: ['italian', 'continental'], mood: 'family', rating: 4.5, reviewsCount: '89', price: '₹₹₹',
        image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=2069&auto=format&fit=crop', location: 'Colaba, Mumbai', distance: '8.5 km', description: 'Gourmet Italian pizza.',
        friendsActivity: [
            { userId: 'f4', name: 'Amit Singh', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop', rating: 3.5, review: "Go for the brunch, skip dinner. Much better value and the live music adds to it.", date: 'Recently' },
            { userId: 'f6', name: 'Vikram Desai', avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=150&auto=format&fit=crop', rating: 4.5, review: "The vibe was incredible.", date: 'Recently' },
            { userId: 'f1', name: 'Aditi Sharma', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop', rating: 4.5, review: "Chef's special changes weekly and it's almost always the best thing on the table.", date: 'Recently' }
        ]
    },
    {
        id: 'fm_mex', priceForTwo: '₹2,200 for two', openTime: '09:00', closeTime: '00:30', distanceKm: 14.2, name: 'Chilis', cuisine: 'Mexican', cuisines: ['mexican', 'continental'], mood: 'family', rating: 4.2, reviewsCount: '2.1k', price: '₹₹₹',
        image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1974&auto=format&fit=crop', location: 'Powai, Mumbai', distance: '6.0 km', description: 'Tex-Mex family restaurant.'
    },
    {
        id: 'fm_cont', priceForTwo: '₹2,400 for two', openTime: '09:00', closeTime: '00:30', distanceKm: 18, name: 'Smoke House Deli', cuisine: 'Continental', cuisines: ['continental'], mood: 'family', rating: 4.3, reviewsCount: '3.4k', price: '₹₹₹',
        image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop', location: 'BKC, Mumbai', distance: '4.0 km', description: 'All-day cafe and deli.'
    },

    // --- Fine Dining ---
    {
        id: 'r13', priceForTwo: '₹3,200 for two', openTime: '09:00', closeTime: '00:30', distanceKm: 23, name: 'Masque', cuisine: 'Modern Indian', cuisines: ['modern_indian', 'continental'], mood: 'fine_dining', rating: 4.3, reviewsCount: '3.4k', price: '₹₹₹',
        image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1974&auto=format&fit=crop', location: 'Mahalaxmi, Mumbai', distance: '8.0 km', offers: 'Tasting Menu @ ₹4500', description: 'Ingredient-driven tasting menus.'
    },
    {
        id: 'r14', priceForTwo: '₹1,600 for two', openTime: '09:00', closeTime: '00:30', distanceKm: 8.5, name: 'Yauatcha', cuisine: 'Chinese', cuisines: ['chinese', 'asian'], mood: 'fine_dining', rating: 4.6, reviewsCount: '950', price: '₹₹₹',
        image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop', location: 'BKC, Mumbai', distance: '4.2 km', description: 'Contemporary dim sum teahouse.'
    },
    {
        id: 'fd_ni', priceForTwo: '₹1,500 for two', openTime: '09:00', closeTime: '00:30', distanceKm: 6, name: 'Indian Accent', cuisine: 'North Indian', cuisines: ['north_indian'], mood: 'fine_dining', rating: 4.2, reviewsCount: '89', price: '₹₹₹',
        image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop', location: 'BKC, Mumbai', distance: '4.5 km', description: 'Inventive Indian cuisine.'
    },
    {
        id: 'fd_si', priceForTwo: '₹1,500 for two', openTime: '09:00', closeTime: '00:30', distanceKm: 6, name: 'Tresind', cuisine: 'South Indian', cuisines: ['south_indian'], mood: 'fine_dining', rating: 4.3, reviewsCount: '2.1k', price: '₹₹₹',
        image: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=2070&auto=format&fit=crop', location: 'BKC, Mumbai', distance: '4.5 km', description: 'Modernist Indian fine dining.'
    },
    {
        id: 'fd_ita', priceForTwo: '₹1,500 for two', openTime: '09:00', closeTime: '00:30', distanceKm: 6, name: 'Botticino', cuisine: 'Italian', cuisines: ['italian'], mood: 'fine_dining', rating: 4.1, reviewsCount: '342', price: '₹₹₹',
        image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?q=80&w=2032&auto=format&fit=crop', location: 'BKC, Mumbai', distance: '4.3 km', description: 'Authentic Italian fine dining.'
    },
    {
        id: 'fd_mex', priceForTwo: '₹1,500 for two', openTime: '09:00', closeTime: '00:30', distanceKm: 6, name: 'Xico', cuisine: 'Mexican', cuisines: ['mexican'], mood: 'fine_dining', rating: 4.7, reviewsCount: '450', price: '₹₹₹',
        image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=2071&auto=format&fit=crop', location: 'Lower Parel, Mumbai', distance: '2.5 km', description: 'Modern Mexican.'
    },
    {
        id: 'fd_veg', priceForTwo: '₹1,500 for two', openTime: '09:00', closeTime: '00:30', distanceKm: 6, name: 'Royal China', cuisine: 'Pure Veg', cuisines: ['pure_veg', 'chinese'], mood: 'fine_dining', rating: 4.8, reviewsCount: '1.2k', price: '₹₹₹',
        image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?q=80&w=2070&auto=format&fit=crop', location: 'Fort, Mumbai', distance: '8.0 km', description: 'Authentic Chinese fine dining.'
    },

    // --- Outdoor ---
    {
        id: 'r15', priceForTwo: '₹2,400 for two', openTime: '09:00', closeTime: '00:30', distanceKm: 11.2, name: 'Candies', cuisine: 'Continental', cuisines: ['continental', 'cafes', 'pure_veg'], mood: 'outdoor', rating: 4.8, reviewsCount: '2.1k', price: '₹₹',
        image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2047&auto=format&fit=crop', location: 'Bandra West, Mumbai', distance: '1.0 km', description: 'Iconic bungalow cafe.'
    },
    {
        id: 'r16', priceForTwo: '₹1,400 for two', openTime: '09:00', closeTime: '00:30', distanceKm: 3.2, name: 'Estella', cuisine: 'Australian', cuisines: ['continental', 'seafood'], mood: 'outdoor', rating: 4.6, reviewsCount: '56', price: '₹₹₹',
        image: 'https://images.unsplash.com/photo-1566552881560-0be862a7c445?q=80&w=2070&auto=format&fit=crop', location: 'Juhu, Mumbai', distance: '4.1 km', description: 'Beachfront deck.'
    },
    {
        id: 'od_ni', priceForTwo: '₹1,500 for two', openTime: '09:00', closeTime: '00:30', distanceKm: 15, name: 'Prithvi Cafe', cuisine: 'North Indian', cuisines: ['north_indian', 'cafes'], mood: 'outdoor', rating: 4.4, reviewsCount: '342', price: '₹₹',
        image: 'https://images.unsplash.com/photo-1566737236500-c8ac43014a67?q=80&w=1740&auto=format&fit=crop', location: 'Juhu, Mumbai', distance: '3.8 km', description: 'Open air cafe at Prithvi Theatre.'
    },
    {
        id: 'od_si', priceForTwo: '₹1,500 for two', openTime: '09:00', closeTime: '00:30', distanceKm: 15, name: 'Cafe Madras (Outdoor)', cuisine: 'South Indian', cuisines: ['south_indian'], mood: 'outdoor', rating: 4, reviewsCount: '3.4k', price: '₹₹',
        image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=2070&auto=format&fit=crop', location: 'Matunga, Mumbai', distance: '6.5 km', description: 'South Indian with outdoor seating.'
    },
    {
        id: 'od_ita', priceForTwo: '₹1,500 for two', openTime: '09:00', closeTime: '00:30', distanceKm: 15, name: 'Cecconi\'s', cuisine: 'Italian', cuisines: ['italian'], mood: 'outdoor', rating: 4.2, reviewsCount: '3.4k', price: '₹₹₹',
        image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?q=80&w=2032&auto=format&fit=crop', location: 'Juhu, Mumbai', distance: '4.0 km', description: 'Beachside Italian dining.'
    },
    {
        id: 'od_chi', priceForTwo: '₹1,500 for two', openTime: '09:00', closeTime: '00:30', distanceKm: 15, name: 'China Garden', cuisine: 'Chinese', cuisines: ['chinese'], mood: 'outdoor', rating: 4.3, reviewsCount: '2.1k', price: '₹₹₹',
        image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?q=80&w=2070&auto=format&fit=crop', location: 'Khar, Mumbai', distance: '2.0 km', description: 'Chinese with garden seating.'
    },
    {
        id: 'od_asi', priceForTwo: '₹1,500 for two', openTime: '09:00', closeTime: '00:30', distanceKm: 15, name: 'Foo Town', cuisine: 'Asian', cuisines: ['asian'], mood: 'outdoor', rating: 4.3, reviewsCount: '870', price: '₹₹₹',
        image: 'https://images.unsplash.com/photo-1566737236500-c8ac43014a67?q=80&w=1740&auto=format&fit=crop', location: 'Churchgate, Mumbai', distance: '8.5 km', description: 'Asian tapas with outdoor area.'
    },
    {
        id: 'od_mex', priceForTwo: '₹1,500 for two', openTime: '09:00', closeTime: '00:30', distanceKm: 15, name: 'Sammy Sosa', cuisine: 'Mexican', cuisines: ['mexican'], mood: 'outdoor', rating: 4.8, reviewsCount: '230', price: '₹₹₹',
        image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=2071&auto=format&fit=crop', location: 'Oshiwara, Mumbai', distance: '5.5 km', description: 'Mexican with sidewalk seating.'
    }
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
    },
    {
        id: 'act_3', distanceKm: 3.5, theatres: [{"name":"INOX Megaplex Andheri","distance":1.8,"startingPrice":219},{"name":"PVR Juhu","distance":2.5,"startingPrice":249},{"name":"Cinepolis Fun Republic","distance":3.2,"startingPrice":199},{"name":"MovieMax Miraroad","distance":14,"startingPrice":149}], title: 'Leo', genre: 'Action/Drama', genres: ['action'], rating: 4.3, reviewsCount: '1.2k',
        image: 'https://images.unsplash.com/photo-1533488765986-dfa2a9939acd?q=80&w=1974&auto=format&fit=crop', duration: '2h 44m', language: 'Tamil', format: '2D'
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
    },

    // --- Horror ---
    {
        id: 'hor_1', distanceKm: 3.5, theatres: [{"name":"INOX Megaplex Andheri","distance":1.8,"startingPrice":219},{"name":"PVR Juhu","distance":2.5,"startingPrice":249},{"name":"Cinepolis Fun Republic","distance":3.2,"startingPrice":199},{"name":"MovieMax Miraroad","distance":14,"startingPrice":149}], title: 'Shaitaan', genre: 'Horror/Thriller', genres: ['horror', 'thriller'], rating: 4.6, reviewsCount: '1.2k',
        image: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=2025&auto=format&fit=crop', duration: '2h 12m', language: 'Hindi', format: '2D'
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
    },

    // --- Thriller ---
    {
        id: 'thr_1', distanceKm: 2, theatres: [{"name":"INOX Megaplex Andheri","distance":1.8,"startingPrice":219},{"name":"PVR Juhu","distance":2.5,"startingPrice":249},{"name":"Cinepolis Fun Republic","distance":3.2,"startingPrice":199},{"name":"MovieMax Miraroad","distance":14,"startingPrice":149}], title: 'Merry Christmas', genre: 'Thriller', genres: ['thriller'], rating: 4.2, reviewsCount: '1.2k',
        image: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=2025&auto=format&fit=crop', duration: '2h 24m', language: 'Hindi', format: '2D'
    },
    {
        id: 'thr_2', distanceKm: 3.5, theatres: [{"name":"INOX Megaplex Andheri","distance":1.8,"startingPrice":219},{"name":"PVR Juhu","distance":2.5,"startingPrice":249},{"name":"Cinepolis Fun Republic","distance":3.2,"startingPrice":199},{"name":"MovieMax Miraroad","distance":14,"startingPrice":149}], title: 'Anatomy of a Fall', genre: 'Thriller/Drama', genres: ['thriller'], rating: 4.6, reviewsCount: '1.2k',
        image: 'https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=2070&auto=format&fit=crop', duration: '2h 31m', language: 'English', format: '2D'
    },

    // --- Sci-Fi ---
    {
        id: 'sci_1', distanceKm: 2, theatres: [{"name":"INOX Megaplex Andheri","distance":1.8,"startingPrice":219},{"name":"PVR Juhu","distance":2.5,"startingPrice":249},{"name":"Cinepolis Fun Republic","distance":3.2,"startingPrice":199},{"name":"MovieMax Miraroad","distance":14,"startingPrice":149}], title: 'Kalki 2898 AD', genre: 'Sci-Fi/Mythology', genres: ['sci_fi', 'action'], rating: 4.4, reviewsCount: '1.2k',
        image: 'https://images.unsplash.com/photo-1533488765986-dfa2a9939acd?q=80&w=1974&auto=format&fit=crop', duration: '2h 50m', language: 'Telugu', format: 'IMAX 3D'
    },
    {
        id: 'sci_2', distanceKm: 6, theatres: [{"name":"INOX Megaplex Andheri","distance":1.8,"startingPrice":219},{"name":"PVR Juhu","distance":2.5,"startingPrice":249},{"name":"Cinepolis Fun Republic","distance":3.2,"startingPrice":199},{"name":"MovieMax Miraroad","distance":14,"startingPrice":149}], title: 'Godzilla x Kong', genre: 'Sci-Fi/Action', genres: ['sci_fi', 'action'], rating: 4.8, reviewsCount: '1.2k',
        image: 'https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=2070&auto=format&fit=crop', duration: '1h 55m', language: 'English', format: 'IMAX 3D'
    },

    // --- Missing Categories Additions ---
    { id: 'com_tam_1', distanceKm: 3.5, theatres: [{"name":"INOX Megaplex Andheri","distance":1.8,"startingPrice":219},{"name":"PVR Juhu","distance":2.5,"startingPrice":249},{"name":"Cinepolis Fun Republic","distance":3.2,"startingPrice":199},{"name":"MovieMax Miraroad","distance":14,"startingPrice":149}], title: 'Comali', genre: 'Comedy', genres: ['comedy'], rating: 4.5, reviewsCount: '2k', image: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=2025&auto=format&fit=crop', duration: '2h 20m', language: 'Tamil', format: '2D' },
    { id: 'com_tel_1', distanceKm: 3.5, theatres: [{"name":"INOX Megaplex Andheri","distance":1.8,"startingPrice":219},{"name":"PVR Juhu","distance":2.5,"startingPrice":249},{"name":"Cinepolis Fun Republic","distance":3.2,"startingPrice":199},{"name":"MovieMax Miraroad","distance":14,"startingPrice":149}], title: 'Jathi Ratnalu', genre: 'Comedy', genres: ['comedy'], rating: 4.6, reviewsCount: '3.5k', image: 'https://images.unsplash.com/photo-1533488765986-dfa2a9939acd?q=80&w=1974&auto=format&fit=crop', duration: '2h 25m', language: 'Telugu', format: '2D' },
    { id: 'hor_tam_1', distanceKm: 3.5, theatres: [{"name":"INOX Megaplex Andheri","distance":1.8,"startingPrice":219},{"name":"PVR Juhu","distance":2.5,"startingPrice":249},{"name":"Cinepolis Fun Republic","distance":3.2,"startingPrice":199},{"name":"MovieMax Miraroad","distance":14,"startingPrice":149}], title: 'Pizza', genre: 'Horror', genres: ['horror'], rating: 4.5, reviewsCount: '1.2k', image: 'https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=2070&auto=format&fit=crop', duration: '2h 0m', language: 'Tamil', format: '2D' },
    { id: 'hor_tel_1', distanceKm: 3.5, theatres: [{"name":"INOX Megaplex Andheri","distance":1.8,"startingPrice":219},{"name":"PVR Juhu","distance":2.5,"startingPrice":249},{"name":"Cinepolis Fun Republic","distance":3.2,"startingPrice":199},{"name":"MovieMax Miraroad","distance":14,"startingPrice":149}], title: 'Masooda', genre: 'Horror', genres: ['horror'], rating: 4, reviewsCount: '1.8k', image: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=2025&auto=format&fit=crop', duration: '2h 40m', language: 'Telugu', format: '2D' },
    { id: 'rom_eng_1', distanceKm: 3.5, theatres: [{"name":"INOX Megaplex Andheri","distance":1.8,"startingPrice":219},{"name":"PVR Juhu","distance":2.5,"startingPrice":249},{"name":"Cinepolis Fun Republic","distance":3.2,"startingPrice":199},{"name":"MovieMax Miraroad","distance":14,"startingPrice":149}], title: 'La La Land', genre: 'Romance', genres: ['romance'], rating: 4.4, reviewsCount: '5k', image: 'https://images.unsplash.com/photo-1533488765986-dfa2a9939acd?q=80&w=1974&auto=format&fit=crop', duration: '2h 8m', language: 'English', format: '2D' },
    { id: 'rom_tam_1', distanceKm: 3.5, theatres: [{"name":"INOX Megaplex Andheri","distance":1.8,"startingPrice":219},{"name":"PVR Juhu","distance":2.5,"startingPrice":249},{"name":"Cinepolis Fun Republic","distance":3.2,"startingPrice":199},{"name":"MovieMax Miraroad","distance":14,"startingPrice":149}], title: '96', genre: 'Romance', genres: ['romance'], rating: 4.2, reviewsCount: '4k', image: 'https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=2070&auto=format&fit=crop', duration: '2h 38m', language: 'Tamil', format: '2D' },
    { id: 'act_mal_1', distanceKm: 3.5, theatres: [{"name":"INOX Megaplex Andheri","distance":1.8,"startingPrice":219},{"name":"PVR Juhu","distance":2.5,"startingPrice":249},{"name":"Cinepolis Fun Republic","distance":3.2,"startingPrice":199},{"name":"MovieMax Miraroad","distance":14,"startingPrice":149}], title: 'Minnal Murali', genre: 'Action', genres: ['action'], rating: 4.8, reviewsCount: '3k', image: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=2025&auto=format&fit=crop', duration: '2h 38m', language: 'Malayalam', format: '2D' },
    { id: 'sci_tam_1', distanceKm: 3.5, theatres: [{"name":"INOX Megaplex Andheri","distance":1.8,"startingPrice":219},{"name":"PVR Juhu","distance":2.5,"startingPrice":249},{"name":"Cinepolis Fun Republic","distance":3.2,"startingPrice":199},{"name":"MovieMax Miraroad","distance":14,"startingPrice":149}], title: '24', genre: 'Sci-Fi', genres: ['sci_fi'], rating: 4.8, reviewsCount: '2.5k', image: 'https://images.unsplash.com/photo-1533488765986-dfa2a9939acd?q=80&w=1974&auto=format&fit=crop', duration: '2h 44m', language: 'Tamil', format: '2D' },
    { id: 'sci_mal_1', distanceKm: 3.5, theatres: [{"name":"INOX Megaplex Andheri","distance":1.8,"startingPrice":219},{"name":"PVR Juhu","distance":2.5,"startingPrice":249},{"name":"Cinepolis Fun Republic","distance":3.2,"startingPrice":199},{"name":"MovieMax Miraroad","distance":14,"startingPrice":149}], title: 'Android Kunjappan Version 5.25', genre: 'Sci-Fi', genres: ['sci_fi'], rating: 4.3, reviewsCount: '1.5k', image: 'https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=2070&auto=format&fit=crop', duration: '2h 20m', language: 'Malayalam', format: '2D' }
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
        id: 'e1', distanceKm: 4, title: 'Arijit Singh Live', date: 'Sat, 24 Mar', time: '7:00 PM', venue: 'Jio World Garden', price: '₹2499 onwards',
        image: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=2070&auto=format&fit=crop', category: 'Music', type: 'music', rating: 4.9, reviewsCount: '870', friendsActivity: [
            { userId: 'f6', name: 'Vikram Desai', avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=150&auto=format&fit=crop', rating: 4.5, review: "Had a really good time here.", date: 'Recently' },
            { userId: 'f8', name: 'Karan Patel', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop', rating: 5.0, review: "Definitely check this out.", date: 'Recently' },
            { userId: 'f4', name: 'Amit Singh', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop', rating: 4.0, review: "Highly recommended.", date: 'Recently' }
        ]
    },
    {
        id: 'ev_mus_2', distanceKm: 9, title: 'Diljit Dosanjh: Illuminati Tour', date: 'Sun, 10 Apr', time: '6:30 PM', venue: 'MMRDA Grounds', price: '₹1999 onwards',
        image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1974&auto=format&fit=crop', category: 'Music', type: 'music', rating: 4.4, reviewsCount: '1.5k', friendsActivity: [
            { userId: 'f2', name: 'Rohan Kapoor', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop', rating: 5.0, review: "Definitely check this out.", date: 'Recently' },
            { userId: 'f1', name: 'Aditi Sharma', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop', rating: 5.0, review: "Amazing place!", date: 'Recently' }
        ]
    },

    // --- Comedy ---
    {
        id: 'e2', distanceKm: 5, title: 'Zakir Khan - Tathastu', date: 'Sun, 25 Mar', time: '8:00 PM', venue: 'Shanmukhananda Hall', price: '₹999 onwards',
        image: 'https://images.unsplash.com/photo-1585699324551-f6c309eedeca?q=80&w=2070&auto=format&fit=crop', category: 'Comedy', type: 'comedy', rating: 4.3, reviewsCount: '89', friendsActivity: [
            { userId: 'f1', name: 'Aditi Sharma', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop', rating: 5.0, review: "Had a really good time here.", date: 'Recently' },
            { userId: 'f2', name: 'Rohan Kapoor', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop', rating: 4.0, review: "Definitely check this out.", date: 'Recently' },
            { userId: 'f9', name: 'Ananya Rao', avatar: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=150&auto=format&fit=crop', rating: 5.0, review: "Loved it!", date: 'Recently' }
        ]
    },
    {
        id: 'ev_com_2', distanceKm: 17, title: 'Bassal: Double Feature', date: 'Fri, 15 Apr', time: '9:00 PM', venue: 'Bal Gandharva Rang Mandir', price: '₹799 onwards',
        image: 'https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?q=80&w=2070&auto=format&fit=crop', category: 'Comedy', type: 'comedy', rating: 4.5, reviewsCount: '950', friendsActivity: [
            { userId: 'f4', name: 'Amit Singh', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop', rating: 4.5, review: "Loved it!", date: 'Recently' },
            { userId: 'f3', name: 'Priya Verma', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop', rating: 5.0, review: "The vibe was incredible.", date: 'Recently' },
            { userId: 'f1', name: 'Aditi Sharma', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop', rating: 3.5, review: "Loved it!", date: 'Recently' }
        ]
    },

    // --- Nightlife ---
    {
        id: 'ev_nl_1', distanceKm: 5.2, title: 'Techno Night ft. Anyma', date: 'Fri, 23 Mar', time: '10:00 PM', venue: 'AntiSocial', price: '₹1500',
        image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1974&auto=format&fit=crop', category: 'Nightlife', type: 'nightlife', rating: 4, reviewsCount: '2.1k', friendsActivity: [
            { userId: 'f6', name: 'Vikram Desai', avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=150&auto=format&fit=crop', rating: 4.0, review: "Had a really good time here.", date: 'Recently' }
        ]
    },

    // --- Sports ---
    {
        id: 'ev_spt_1', distanceKm: 10, title: 'IPL: MI vs CSK', date: 'Sun, 14 Apr', time: '7:30 PM', venue: 'Wankhede Stadium', price: '₹1200 onwards',
        image: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=2028&auto=format&fit=crop', category: 'Sports', type: 'sports', rating: 3.9, reviewsCount: '2.1k', friendsActivity: [
            { userId: 'f8', name: 'Karan Patel', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop', rating: 4.0, review: "Highly recommended.", date: 'Recently' },
            { userId: 'f7', name: 'Neha Gupta', avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=150&auto=format&fit=crop', rating: 5.0, review: "Amazing place!", date: 'Recently' },
            { userId: 'f4', name: 'Amit Singh', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop', rating: 5.0, review: "Amazing place!", date: 'Recently' }
        ]
    },

    // --- Performances ---
    {
        id: 'ev_perf_1', distanceKm: 6, title: 'Mughal-E-Azam: The Musical', date: 'Sat, 06 May', time: '6:00 PM', venue: 'NCPA', price: '₹1000 onwards',
        image: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=2070&auto=format&fit=crop', category: 'Performances', type: 'performances', rating: 4.4, reviewsCount: '2.1k', friendsActivity: [
            { userId: 'f5', name: 'Sana Khan', avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=150&auto=format&fit=crop', rating: 4.0, review: "Amazing place!", date: 'Recently' }
        ]
    },

    // --- Food & Drinks ---
    {
        id: 'ev_fd_1', distanceKm: 28, title: 'Mumbai Wine Festival', date: 'Sat, 13 May', time: '12:00 PM', venue: 'RWITC', price: '₹500',
        image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=2070&auto=format&fit=crop', category: 'Food & Drinks', type: 'food_drinks', rating: 4, reviewsCount: '870', friendsActivity: [
            { userId: 'f2', name: 'Rohan Kapoor', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop', rating: 4.0, review: "Not bad, would go again.", date: 'Recently' }
        ]
    },

    // --- Fests & Fairs ---
    {
        id: 'ev_fest_1', distanceKm: 11, title: 'Kala Ghoda Arts Festival', date: '04-12 Feb', time: '10:00 AM', venue: 'Kala Ghoda', price: 'Free',
        image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?q=80&w=2032&auto=format&fit=crop', category: 'Fests & Fairs', type: 'fests_fairs', rating: 4.5, reviewsCount: '89', friendsActivity: [
            { userId: 'f4', name: 'Amit Singh', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop', rating: 5.0, review: "Loved it!", date: 'Recently' },
            { userId: 'f7', name: 'Neha Gupta', avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=150&auto=format&fit=crop', rating: 3, review: "Lovely outdoor seating but very overpriced. The risotto was bland for the price. Come for the ambiance, not the food.", date: 'Recently' },
            { userId: 'f3', name: 'Priya Verma', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop', rating: 4.5, review: "The slow-cooked pork and the sol kadhi cocktail are must-orders. Skip the pasta, it's not their strong suit.", date: 'Recently' }
        ]
    },

    // --- Social Mixers ---
    {
        id: 'ev_sm_1', distanceKm: 5.2, title: 'Founders Mixer: Web3', date: 'Thu, 20 Apr', time: '7:00 PM', venue: 'WeWork BKC', price: '₹300',
        image: '/images/tech_mixer.png', category: 'Social Mixers', type: 'social_mixers', rating: 3.9, reviewsCount: '3.4k', friendsActivity: [
            { userId: 'f10', name: 'Rahul Bose', avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=150&auto=format&fit=crop', rating: 4.0, review: "Highly recommended.", date: 'Recently' }
        ]
    },

    // --- Fitness ---
    {
        id: 'ev_fit_1', distanceKm: 5, title: 'Sunrise Yoga by the Sea', date: 'Sun, 02 Apr', time: '6:30 AM', venue: 'Carter Road', price: '₹200',
        image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2120&auto=format&fit=crop', category: 'Fitness', type: 'fitness', rating: 4.9, reviewsCount: '230', friendsActivity: [
            { userId: 'f4', name: 'Amit Singh', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop', rating: 4.5, review: "Definitely check this out.", date: 'Recently' }
        ]
    },

    // --- Screenings ---
    {
        id: 'ev_scr_1', distanceKm: 10, title: 'Open Air Cinema: Notting Hill', date: 'Sat, 29 Apr', time: '8:00 PM', venue: 'Sunset Cinema Club', price: '₹400',
        image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=2059&auto=format&fit=crop', category: 'Screenings', type: 'screenings', rating: 4.9, reviewsCount: '1.5k', friendsActivity: [
            { userId: 'f4', name: 'Amit Singh', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop', rating: 5.0, review: "Amazing place!", date: 'Recently' },
            { userId: 'f5', name: 'Sana Khan', avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=150&auto=format&fit=crop', rating: 4.0, review: "Amazing place!", date: 'Recently' }
        ]
    },

    // --- Pets ---
    {
        id: 'ev_pet_1', distanceKm: 4.5, title: 'Petathon 2.0', date: 'Sun, 21 May', time: '7:00 AM', venue: 'Shivaji Park', price: '₹250',
        image: 'https://images.unsplash.com/photo-1541599540903-216a46ca1dc0?q=80&w=2071&auto=format&fit=crop', category: 'Pets', type: 'pets', rating: 4.6, reviewsCount: '230', friendsActivity: [
            { userId: 'f6', name: 'Vikram Desai', avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=150&auto=format&fit=crop', rating: 4.0, review: "Definitely check this out.", date: 'Recently' },
            { userId: 'f10', name: 'Rahul Bose', avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=150&auto=format&fit=crop', rating: 4.0, review: "Definitely check this out.", date: 'Recently' }
        ]
    },

    // --- Art Exhibitions ---
    {
        id: 'ev_art_1', distanceKm: 7, title: 'Modern Art Biennial', date: '10-25 Jun', time: '11:00 AM', venue: 'Jehangir Art Gallery', price: 'Free',
        image: 'https://images.unsplash.com/photo-1536924940846-227afb31e2a5?q=80&w=2066&auto=format&fit=crop', category: 'Art Exhibitions', type: 'art_exhibitions', rating: 4.3, reviewsCount: '950', friendsActivity: [
            { userId: 'f5', name: 'Sana Khan', avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=150&auto=format&fit=crop', rating: 4.5, review: "Amazing place!", date: 'Recently' }
        ]
    },

    // --- Conferences ---
    {
        id: 'ev_conf_1', distanceKm: 15.5, title: 'TechSparks Mumbai', date: 'Wed, 22 Mar', time: '9:00 AM', venue: 'Grand Hyatt', price: '₹2000',
        image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop', category: 'Conferences', type: 'conferences', rating: 3.9, reviewsCount: '450', friendsActivity: [
            { userId: 'f1', name: 'Aditi Sharma', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop', rating: 4.0, review: "Not bad, would go again.", date: 'Recently' }
        ]
    },

    // --- Expos ---
    {
        id: 'ev_expo_1', distanceKm: 18, title: 'Auto Expo 2026', date: '10-14 Aug', time: '10:00 AM', venue: 'NESCO', price: '₹300',
        image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=2070&auto=format&fit=crop', category: 'Expos', type: 'expos', rating: 3.9, reviewsCount: '89', friendsActivity: [
            { userId: 'f2', name: 'Rohan Kapoor', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop', rating: 4.0, review: "Definitely check this out.", date: 'Recently' },
            { userId: 'f4', name: 'Amit Singh', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop', rating: 5.0, review: "Loved it!", date: 'Recently' },
            { userId: 'f3', name: 'Priya Verma', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop', rating: 3.5, review: "Had a really good time here.", date: 'Recently' }
        ]
    },
    // Additions for 2 per subtype
    { id: 'ev_nl_2', title: 'Techno Night at Kitty Su', date: 'Fri, 12 May', time: '10:00 PM', venue: 'Kitty Su', price: '₹1500', image: 'https://images.unsplash.com/photo-1574406280735-351fc1a7c5e0?q=80&w=2000&auto=format&fit=crop', category: 'Nightlife', type: 'nightlife', rating: 4.7, reviewsCount: '230', friendsActivity: [
            { userId: 'f2', name: 'Rohan Kapoor', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop', rating: 4.5, review: "Had a really good time here.", date: 'Recently' },
            { userId: 'f5', name: 'Sana Khan', avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=150&auto=format&fit=crop', rating: 4.5, review: "Loved it!", date: 'Recently' }
        ] },
    { id: 'ev_sp_2', title: 'Mumbai Indians vs CSK', date: 'Sun, 14 May', time: '7:30 PM', venue: 'Wankhede', price: '₹2500', image: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=2000&auto=format&fit=crop', category: 'Sports', type: 'sports', rating: 3.9, reviewsCount: '112', friendsActivity: [
            { userId: 'f8', name: 'Karan Patel', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop', rating: 3.5, review: "Amazing place!", date: 'Recently' }
        ] },
    { id: 'ev_pf_2', title: 'NCPA Symphony Orchestra', date: 'Sat, 20 May', time: '6:30 PM', venue: 'NCPA', price: '₹800', image: 'https://images.unsplash.com/photo-1563841930606-67e2bce48b78?q=80&w=2000&auto=format&fit=crop', category: 'Performances', type: 'performances', rating: 4.7, reviewsCount: '1.2k', friendsActivity: [
            { userId: 'f8', name: 'Karan Patel', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop', rating: 3.5, review: "Definitely check this out.", date: 'Recently' }
        ] },
    { id: 'ev_fd_2', title: 'Bandra Wine Tasting Festival', date: 'Sun, 21 May', time: '4:00 PM', venue: 'Bandra Gymkhana', price: '₹2000', image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=2000&auto=format&fit=crop', category: 'Food & Drinks', type: 'food_drinks', rating: 4.8, reviewsCount: '89', friendsActivity: [
            { userId: 'f10', name: 'Rahul Bose', avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=150&auto=format&fit=crop', rating: 4.5, review: "The vibe was incredible.", date: 'Recently' },
            { userId: 'f7', name: 'Neha Gupta', avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=150&auto=format&fit=crop', rating: 3.5, review: "Not bad, would go again.", date: 'Recently' },
            { userId: 'f2', name: 'Rohan Kapoor', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop', rating: 4.5, review: "Definitely check this out.", date: 'Recently' }
        ] },
    { id: 'ev_ff_2', title: 'Kala Ghoda Arts Festival', date: '04-12 Feb', time: '10:00 AM', venue: 'Kala Ghoda', price: 'Free', image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2000&auto=format&fit=crop', category: 'Fests & Fairs', type: 'fests_fairs', rating: 4.7, reviewsCount: '950', friendsActivity: [
            { userId: 'f2', name: 'Rohan Kapoor', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop', rating: 5.0, review: "Amazing place!", date: 'Recently' },
            { userId: 'f5', name: 'Sana Khan', avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=150&auto=format&fit=crop', rating: 4.0, review: "Definitely check this out.", date: 'Recently' }
        ] },
    { id: 'ev_sm_2', title: 'Singles Mixer Night', date: 'Fri, 19 May', time: '8:00 PM', venue: 'Socials', price: '₹500', image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2000&auto=format&fit=crop', category: 'Social Mixers', type: 'social_mixers', rating: 4.2, reviewsCount: '450', friendsActivity: [
            { userId: 'f1', name: 'Aditi Sharma', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop', rating: 4.0, review: "Not bad, would go again.", date: 'Recently' },
            { userId: 'f4', name: 'Amit Singh', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop', rating: 4.5, review: "Not bad, would go again.", date: 'Recently' }
        ] },
    { id: 'ev_ft_2', title: 'Sunday Morning Yoga', date: 'Sun, 28 May', time: '7:00 AM', venue: 'Juhu Beach', price: 'Free', image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2000&auto=format&fit=crop', category: 'Fitness', type: 'fitness', rating: 4.6, reviewsCount: '342', friendsActivity: [
            { userId: 'f1', name: 'Aditi Sharma', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop', rating: 5.0, review: "The vibe was incredible.", date: 'Recently' },
            { userId: 'f2', name: 'Rohan Kapoor', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop', rating: 4.5, review: "Highly recommended.", date: 'Recently' },
            { userId: 'f4', name: 'Amit Singh', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop', rating: 4.0, review: "Amazing place!", date: 'Recently' }
        ] },
    { id: 'ev_sc_2', title: 'Interstellar IMAX Screening', date: 'Wed, 24 May', time: '8:30 PM', venue: 'PVR ICON IMAX', price: '₹600', image: 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?q=80&w=2000&auto=format&fit=crop', category: 'Screenings', type: 'screenings', rating: 4.8, reviewsCount: '3.4k', friendsActivity: [
            { userId: 'f6', name: 'Vikram Desai', avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=150&auto=format&fit=crop', rating: 4.0, review: "Definitely check this out.", date: 'Recently' },
            { userId: 'f7', name: 'Neha Gupta', avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=150&auto=format&fit=crop', rating: 5.0, review: "Loved it!", date: 'Recently' },
            { userId: 'f2', name: 'Rohan Kapoor', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop', rating: 4.5, review: "Amazing place!", date: 'Recently' }
        ] },
    { id: 'ev_pt_2', title: 'Dog Show 2026', date: 'Sun, 04 Jun', time: '9:00 AM', venue: 'BKC Grounds', price: '₹300', image: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=2000&auto=format&fit=crop', category: 'Pets', type: 'pets', rating: 4.5, reviewsCount: '2.1k', friendsActivity: [
            { userId: 'f2', name: 'Rohan Kapoor', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop', rating: 3.5, review: "Had a really good time here.", date: 'Recently' },
            { userId: 'f3', name: 'Priya Verma', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop', rating: 5.0, review: "Loved it!", date: 'Recently' }
        ] },
    { id: 'ev_ar_2', title: 'Contemporary Art Fair', date: '15-20 Jul', time: '11:00 AM', venue: 'Nehru Centre', price: '₹150', image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=2000&auto=format&fit=crop', category: 'Art Exhibitions', type: 'art_exhibitions', rating: 3.9, reviewsCount: '450', friendsActivity: [
            { userId: 'f2', name: 'Rohan Kapoor', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop', rating: 5.0, review: "The vibe was incredible.", date: 'Recently' }
        ] },
    { id: 'ev_cf_2', title: 'India FinTech Forum', date: 'Thu, 08 Jun', time: '9:00 AM', venue: 'Jio World Convention Centre', price: '₹5000', image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=2000&auto=format&fit=crop', category: 'Conferences', type: 'conferences', rating: 4.3, reviewsCount: '89', friendsActivity: [
            { userId: 'f9', name: 'Ananya Rao', avatar: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=150&auto=format&fit=crop', rating: 5.0, review: "Loved it!", date: 'Recently' },
            { userId: 'f5', name: 'Sana Khan', avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=150&auto=format&fit=crop', rating: 4.0, review: "Had a really good time here.", date: 'Recently' },
            { userId: 'f1', name: 'Aditi Sharma', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop', rating: 4.0, review: "Had a really good time here.", date: 'Recently' }
        ] },
    { id: 'ev_ex_2', title: 'Comic Con Mumbai', date: 'Sat, 11 Nov', time: '10:00 AM', venue: 'NESCO', price: '₹899', image: 'https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?q=80&w=2000&auto=format&fit=crop', category: 'Expos', type: 'expos', rating: 4.6, reviewsCount: '950', friendsActivity: [
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
        id: 'st_ap_1', distanceKm: 12.5, title: 'Zara', location: 'Palladium Mall', offer: 'End of Season Sale',
        image: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=2070&auto=format&fit=crop', type: 'apparel', category: 'Apparel', rating: 3.9, reviewsCount: '56', friendsActivity: [
            { userId: 'f10', name: 'Rahul Bose', avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=150&auto=format&fit=crop', rating: 3.5, review: "Limited stock on popular items. Call ahead to check availability before making the trip.", date: 'Recently' },
            { userId: 'f2', name: 'Rohan Kapoor', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop', rating: 5.0, review: "Return policy is flexible which is a huge plus. Had to exchange twice and it was painless.", date: 'Recently' }
        ]
    },
    {
        id: 'st_sw_1', distanceKm: 4.8, title: 'Envi Salon & Spa', location: 'Bandra West', offer: '20% Off Services',
        image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1974&auto=format&fit=crop', type: 'salons_wellness', category: 'Salons & Wellness', rating: 4, reviewsCount: '870', friendsActivity: [
            { userId: 'f6', name: 'Vikram Desai', avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=150&auto=format&fit=crop', rating: 4.5, review: "The vibe was incredible.", date: 'Recently' },
            { userId: 'f3', name: 'Priya Verma', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop', rating: 2.5, review: "Window displays look better than what's actually inside. Misleading merchandising.", date: 'Recently' },
            { userId: 'f9', name: 'Ananya Rao', avatar: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=150&auto=format&fit=crop', rating: 4.5, review: "Much better online presence than in-store. The catalogue is larger on the website.", date: 'Recently' }
        ]
    },
    {
        id: 'st_jw_1', distanceKm: 8.5, title: 'Tanishq', location: 'Andheri East', offer: '0% Making Charges',
        image: '/images/jewellery_store.png', type: 'jewellery', category: 'Jewellery', rating: 4.7, reviewsCount: '89', friendsActivity: [
            { userId: 'f10', name: 'Rahul Bose', avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=150&auto=format&fit=crop', rating: 4.0, review: "Surprise find — didn't expect this level of quality at this price point.", date: 'Recently' },
            { userId: 'f6', name: 'Vikram Desai', avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=150&auto=format&fit=crop', rating: 3, review: "Great collection but genuinely overpriced — you can find the same brands cheaper online.", date: 'Recently' },
            { userId: 'f2', name: 'Rohan Kapoor', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop', rating: 4.0, review: "Staff is knowledgeable and not pushy, which is rare. Good browsing experience.", date: 'Recently' }
        ]
    },
    {
        id: 'st_bt_1', distanceKm: 12.5, title: 'Nykaa Luxe', location: 'Jio World Drive', offer: 'Select ranges at 30% off',
        image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=2000&auto=format&fit=crop', type: 'beauty', category: 'Beauty', rating: 4.6, reviewsCount: '950', friendsActivity: [
            { userId: 'f1', name: 'Aditi Sharma', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop', rating: 4.0, review: "The vibe was incredible.", date: 'Recently' },
            { userId: 'f9', name: 'Ananya Rao', avatar: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=150&auto=format&fit=crop', rating: 4.5, review: "The store layout has improved a lot recently. Easy to navigate and find what you need.", date: 'Recently' },
            { userId: 'f2', name: 'Rohan Kapoor', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop', rating: 4.0, review: "Limited stock on popular items. Call ahead to check availability before making the trip.", date: 'Recently' }
        ]
    },
    {
        id: 'st_hf_1', distanceKm: 23, title: 'Pepperfry Studio', location: 'Lower Parel', offer: 'Furniture up to 50% Off',
        image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=2070&auto=format&fit=crop', type: 'home_furniture', category: 'Home & Furniture', rating: 4.1, reviewsCount: '2.1k', friendsActivity: [
            { userId: 'f1', name: 'Aditi Sharma', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop', rating: 5.0, review: "Return policy is flexible which is a huge plus. Had to exchange twice and it was painless.", date: 'Recently' },
            { userId: 'f4', name: 'Amit Singh', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop', rating: 2.5, review: "Window displays look better than what's actually inside. Misleading merchandising.", date: 'Recently' }
        ]
    },
    { id: 'st_fw_2', distanceKm: 5.5, title: 'Adidas Originals', location: 'Linking Road', offer: 'Buy 2 Get 1 Free', image: 'https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?q=80&w=2000&auto=format&fit=crop', type: 'footwear', category: 'Footwear', rating: 4.1, reviewsCount: '870', friendsActivity: [
            { userId: 'f5', name: 'Sana Khan', avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=150&auto=format&fit=crop', rating: 4.5, review: "Much better online presence than in-store. The catalogue is larger on the website.", date: 'Recently' },
            { userId: 'f9', name: 'Ananya Rao', avatar: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=150&auto=format&fit=crop', rating: 3.5, review: "Surprise find — didn't expect this level of quality at this price point.", date: 'Recently' },
            { userId: 'f1', name: 'Aditi Sharma', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop', rating: 3, review: "Great collection but genuinely overpriced — you can find the same brands cheaper online.", date: 'Recently' }
        ] },
    { id: 'st_ap_2', distanceKm: 12.5, title: 'H&M', location: 'High Street Phoenix', offer: 'Up to 50% Off', image: 'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?q=80&w=2000&auto=format&fit=crop', type: 'apparel', category: 'Apparel', rating: 4.3, reviewsCount: '89', friendsActivity: [
            { userId: 'f5', name: 'Sana Khan', avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=150&auto=format&fit=crop', rating: 4.0, review: "Not bad, would go again.", date: 'Recently' }
        ] },
    { id: 'st_sw_2', distanceKm: 9.8, title: 'Jean-Claude Biguine', location: 'Juhu', offer: 'Flat 15% Off Haircare', image: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=2000&auto=format&fit=crop', type: 'salons_wellness', category: 'Salons & Wellness', rating: 4.8, reviewsCount: '1.2k', friendsActivity: [
            { userId: 'f7', name: 'Neha Gupta', avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=150&auto=format&fit=crop', rating: 3, review: "Enjoyable but slightly repetitive formula. Watch it for the comedy — don't go in expecting horror. The third act felt rushed.", date: 'Recently' },
            { userId: 'f1', name: 'Aditi Sharma', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop', rating: 3.5, review: "Staff is knowledgeable and not pushy, which is rare. Good browsing experience.", date: 'Recently' }
        ] },
    { id: 'st_jw_2', distanceKm: 22, title: 'Kalyan Jewellers', location: 'Vashi', offer: 'Free Gold Coin on Purchase', image: '/images/jewellery_store.png', type: 'jewellery', category: 'Jewellery', rating: 4.5, reviewsCount: '230', friendsActivity: [
            { userId: 'f2', name: 'Rohan Kapoor', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop', rating: 4.5, review: "The store layout has improved a lot recently. Easy to navigate and find what you need.", date: 'Recently' },
            { userId: 'f6', name: 'Vikram Desai', avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=150&auto=format&fit=crop', rating: 3.5, review: "Limited stock on popular items. Call ahead to check availability before making the trip.", date: 'Recently' },
            { userId: 'f7', name: 'Neha Gupta', avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=150&auto=format&fit=crop', rating: 4.0, review: "Return policy is flexible which is a huge plus. Had to exchange twice and it was painless.", date: 'Recently' }
        ] },
    { id: 'st_bt_2', distanceKm: 12.5, title: 'Sephora', location: 'Palladium Mall', offer: 'Free Makeover Session', image: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?q=80&w=2000&auto=format&fit=crop', type: 'beauty', category: 'Beauty', rating: 4, reviewsCount: '870', friendsActivity: [
            { userId: 'f1', name: 'Aditi Sharma', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop', rating: 2.5, review: "Window displays look better than what's actually inside. Misleading merchandising.", date: 'Recently' }
        ] },
    { id: 'st_hf_2', distanceKm: 23, title: 'IKEA', location: 'Navi Mumbai', offer: 'New Arrivals Collection', image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=2000&auto=format&fit=crop', type: 'home_furniture', category: 'Home & Furniture', rating: 4.4, reviewsCount: '2.1k', friendsActivity: [
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
        id: 'act_kp_1', distanceKm: 8.8, title: 'KidZania Mumbai', location: 'R City Mall', price: '₹950',
        image: 'https://images.unsplash.com/photo-1596461404969-9ce20c71c5ec?q=80&w=2070&auto=format&fit=crop', type: 'kids_play', category: 'Kids Play', rating: 4.1, reviewsCount: '1.5k', friendsActivity: [
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
        id: 'act_ms_1', distanceKm: 15.5, title: 'Chhatrapati Shivaji Maharaj Vastu Sangrahalaya', location: 'Fort', price: '₹150',
        image: 'https://images.unsplash.com/photo-1569930784843-d1bba34b5a87?q=80&w=1974&auto=format&fit=crop', type: 'museums', category: 'Museums', rating: 4.1, reviewsCount: '89', friendsActivity: [
            { userId: 'f10', name: 'Rahul Bose', avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=150&auto=format&fit=crop', rating: 4.5, review: "The vibe was incredible.", date: 'Recently' }
        ]
    },
    {
        id: 'act_es_1', distanceKm: 12, title: 'Zero Latency VR', location: 'Lower Parel', price: '₹1500',
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
    { id: 'act_gz_2', distanceKm: 9.2, title: 'Timezone', location: 'Inorbit Mall Malad', price: '₹500 onwards', image: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?q=80&w=2000&auto=format&fit=crop', type: 'game_zones', category: 'Game Zones', rating: 4.1, reviewsCount: '950', friendsActivity: [
            { userId: 'f6', name: 'Vikram Desai', avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=150&auto=format&fit=crop', rating: 4.0, review: "Book at least a week in advance — slots fill up quickly on weekends.", date: 'Recently' },
            { userId: 'f9', name: 'Ananya Rao', avatar: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=150&auto=format&fit=crop', rating: 3, review: "Not as beginner-friendly as advertised. Felt rushed through the orientation.", date: 'Recently' }
        ] },
    { id: 'act_tp_2', distanceKm: 40, title: 'EsselWorld', location: 'Gorai', price: '₹1050', image: 'https://images.unsplash.com/photo-1533560696582-8924bce63fb6?q=80&w=2000&auto=format&fit=crop', type: 'theme_parks', category: 'Theme Parks', rating: 4.9, reviewsCount: '870', friendsActivity: [
            { userId: 'f5', name: 'Sana Khan', avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=150&auto=format&fit=crop', rating: 4.5, review: "Great for corporate team outings. They have proper packages for groups.", date: 'Recently' }
        ] },
    { id: 'act_wk_2', distanceKm: 4.5, title: 'Baking Masterclass', location: 'Bandra', price: '₹2500', image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=2000&auto=format&fit=crop', type: 'workshops', category: 'Workshops', rating: 4.8, reviewsCount: '2.1k', friendsActivity: [
            { userId: 'f5', name: 'Sana Khan', avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=150&auto=format&fit=crop', rating: 4.0, review: "Really well run — safety briefing was thorough and the instructors were super patient.", date: 'Recently' }
        ] },
    { id: 'act_wp_2', distanceKm: 88, title: 'Wet N Joy', location: 'Lonavala', price: '₹1100', image: 'https://images.unsplash.com/photo-1588698188172-e555ed13cf3c?q=80&w=2000&auto=format&fit=crop', type: 'water_parks', category: 'Water Parks', rating: 4.4, reviewsCount: '950', friendsActivity: [
            { userId: 'f5', name: 'Sana Khan', avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=150&auto=format&fit=crop', rating: 4.5, review: "Morning slots are far better than evenings. Much less crowded and you get more time.", date: 'Recently' },
            { userId: 'f8', name: 'Karan Patel', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop', rating: 3, review: "Good experience overall but the equipment could use an upgrade. Feels a bit dated.", date: 'Recently' }
        ] },
    { id: 'act_kp_2', distanceKm: 8.2, title: 'Fun City', location: 'Oberoi Mall', price: '₹500', image: 'https://images.unsplash.com/photo-1596461404969-9ce20c71c5ec?q=80&w=2000&auto=format&fit=crop', type: 'kids_play', category: 'Kids Play', rating: 4, reviewsCount: '950', friendsActivity: [
            { userId: 'f4', name: 'Amit Singh', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop', rating: 4.0, review: "Came with a group of 8 and it was a blast. The staff managed everyone really smoothly.", date: 'Recently' }
        ] },
    { id: 'act_gq_2', distanceKm: 4, title: 'Clue Hunt', location: 'Bandra West', price: '₹700', image: 'https://images.unsplash.com/photo-1511882150382-421056c89033?q=80&w=2000&auto=format&fit=crop', type: 'games_quizzes', category: 'Games & Quizzes', rating: 4, reviewsCount: '56', friendsActivity: [
            { userId: 'f1', name: 'Aditi Sharma', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop', rating: 3, review: "A bit overpriced compared to similar places in the city but the location makes up for it.", date: 'Recently' },
            { userId: 'f2', name: 'Rohan Kapoor', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop', rating: 4.0, review: "The vibe was incredible.", date: 'Recently' }
        ] },
    { id: 'act_ms_2', distanceKm: 15, title: 'Dr. Bhau Daji Lad Museum', location: 'Byculla', price: '₹100', image: 'https://images.unsplash.com/photo-1518998053401-b2543120986e?q=80&w=2000&auto=format&fit=crop', type: 'museums', category: 'Museums', rating: 4.2, reviewsCount: '342', friendsActivity: [
            { userId: 'f8', name: 'Karan Patel', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop', rating: 3.5, review: "Book at least a week in advance — slots fill up quickly on weekends.", date: 'Recently' }
        ] },
    { id: 'act_es_2', distanceKm: 9.8, title: 'Microgravity Gaming', location: 'Juhu', price: '₹1200', image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2000&auto=format&fit=crop', type: 'e_sports', category: 'E Sports', rating: 4, reviewsCount: '89', friendsActivity: [
            { userId: 'f6', name: 'Vikram Desai', avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=150&auto=format&fit=crop', rating: 4.5, review: "Not bad, would go again.", date: 'Recently' },
            { userId: 'f8', name: 'Karan Patel', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop', rating: 3, review: "Not as beginner-friendly as advertised. Felt rushed through the orientation.", date: 'Recently' },
            { userId: 'f5', name: 'Sana Khan', avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=150&auto=format&fit=crop', rating: 3.5, review: "Great for corporate team outings. They have proper packages for groups.", date: 'Recently' }
        ] },
    { id: 'act_ad_2', distanceKm: 14.2, title: 'Hakone Go Karting', location: 'Powai', price: '₹400', image: 'https://images.unsplash.com/photo-1589133857321-7296b4bb5fba?q=80&w=2000&auto=format&fit=crop', type: 'adventure', category: 'Adventure', rating: 4.4, reviewsCount: '450', friendsActivity: [
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
        id: 'pl_cr_1', distanceKm: 4.2, title: 'Khar Gymkhana Turf', location: 'Khar West', price: '₹1500/hr',
        image: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?q=80&w=2067&auto=format&fit=crop', type: 'cricket', category: 'Cricket', rating: 4.5, reviewsCount: '230', friendsActivity: [
            { userId: 'f8', name: 'Karan Patel', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop', rating: 4.5, review: "Best maintained court I've played at in Mumbai. Lighting for evening games is excellent.", date: 'Recently' },
            { userId: 'f2', name: 'Rohan Kapoor', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop', rating: 5.0, review: "Not bad, would go again.", date: 'Recently' }
        ]
    },
    {
        id: 'pl_fb_1', distanceKm: 3.5, title: 'Nirlon Sports Club Turf', location: 'Goregaon East', price: '₹2000/hr',
        image: '/images/football_turf.png', type: 'football', category: 'Football', rating: 4.3, reviewsCount: '870', friendsActivity: [
            { userId: 'f5', name: 'Sana Khan', avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=150&auto=format&fit=crop', rating: 4.5, review: "Not bad, would go again.", date: 'Recently' },
            { userId: 'f6', name: 'Vikram Desai', avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=150&auto=format&fit=crop', rating: 5.0, review: "Changing rooms need serious upgrading but the court quality is top notch.", date: 'Recently' },
            { userId: 'f10', name: 'Rahul Bose', avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=150&auto=format&fit=crop', rating: 4.5, review: "Go early on weekends — afternoons get chaotic and booking slots disappear fast.", date: 'Recently' }
        ]
    },
    {
        id: 'pl_bd_1', distanceKm: 2.8, title: 'Andheri Sports Complex', location: 'Andheri West', price: '₹600/hr',
        image: '/images/badminton_court.png', type: 'badminton', category: 'Badminton', rating: 4, reviewsCount: '1.2k', friendsActivity: [
            { userId: 'f1', name: 'Aditi Sharma', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop', rating: 4.5, review: "The vibe was incredible.", date: 'Recently' }
        ]
    },
    {
        id: 'pl_tn_1', distanceKm: 5, title: 'MSLTA Tennis Courts', location: 'Colaba', price: '₹800/hr',
        image: 'https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?q=80&w=2070&auto=format&fit=crop', type: 'tennis', category: 'Tennis', rating: 4.4, reviewsCount: '950', friendsActivity: [
            { userId: 'f5', name: 'Sana Khan', avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=150&auto=format&fit=crop', rating: 4.5, review: "Slightly on the expensive side but the surface quality justifies it. No puddles after rain.", date: 'Recently' }
        ]
    },
    {
        id: 'pl_pb_1', distanceKm: 4.5, title: 'Pickleball Central India', location: 'Bandra', price: '₹1200/hr',
        image: '/images/pickleball_court.png', type: 'pickleball', category: 'Pickleball', rating: 4, reviewsCount: '112', friendsActivity: [
            { userId: 'f3', name: 'Priya Verma', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop', rating: 5.0, review: "Equipment rental is steep — bring your own gear and it's good value.", date: 'Recently' }
        ]
    },
    {
        id: 'pl_bs_1', title: 'YMCA Basketball Court', location: 'Mumbai Central', price: '₹1000/hr',
        image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=2090&auto=format&fit=crop', type: 'basketball', category: 'Basketball', rating: 4.3, reviewsCount: '450', friendsActivity: [
            { userId: 'f5', name: 'Sana Khan', avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=150&auto=format&fit=crop', rating: 4.5, review: "Had a corporate tourney here. Staff was extremely organised and professional.", date: 'Recently' },
            { userId: 'f8', name: 'Karan Patel', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop', rating: 4.5, review: "Best maintained court I've played at in Mumbai. Lighting for evening games is excellent.", date: 'Recently' }
        ]
    },
    { id: 'pl_cr_2', distanceKm: 8, title: 'Poddar School Turf', location: 'Santacruz', price: '₹1200/hr', image: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?q=80&w=2000&auto=format&fit=crop', type: 'cricket', category: 'Cricket', rating: 4.4, reviewsCount: '342', friendsActivity: [
            { userId: 'f7', name: 'Neha Gupta', avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=150&auto=format&fit=crop', rating: 4.0, review: "Changing rooms need serious upgrading but the court quality is top notch.", date: 'Recently' },
            { userId: 'f4', name: 'Amit Singh', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop', rating: 4.0, review: "The vibe was incredible.", date: 'Recently' },
            { userId: 'f6', name: 'Vikram Desai', avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=150&auto=format&fit=crop', rating: 5.0, review: "The vibe was incredible.", date: 'Recently' }
        ] },
    { id: 'pl_fb_2', distanceKm: 6.5, title: 'St. Andrews Astro Park', location: 'Bandra West', price: '₹2500/hr', image: '/images/football_turf.png', type: 'football', category: 'Football', rating: 4.4, reviewsCount: '870', friendsActivity: [
            { userId: 'f7', name: 'Neha Gupta', avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=150&auto=format&fit=crop', rating: 4.5, review: "Go early on weekends — afternoons get chaotic and booking slots disappear fast.", date: 'Recently' }
        ] },
    { id: 'pl_bd_2', distanceKm: 5.5, title: 'Khar Gymkhana Courts', location: 'Khar', price: '₹800/hr', image: '/images/badminton_court.png', type: 'badminton', category: 'Badminton', rating: 3.9, reviewsCount: '950', friendsActivity: [
            { userId: 'f7', name: 'Neha Gupta', avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=150&auto=format&fit=crop', rating: 4.5, review: "Slightly on the expensive side but the surface quality justifies it. No puddles after rain.", date: 'Recently' }
        ] },
    { id: 'pl_tn_2', distanceKm: 7.5, title: 'YMCA Tennis Courts', location: 'Mumbai Central', price: '₹600/hr', image: 'https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?q=80&w=2000&auto=format&fit=crop', type: 'tennis', category: 'Tennis', rating: 4.2, reviewsCount: '950', friendsActivity: [
            { userId: 'f2', name: 'Rohan Kapoor', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop', rating: 4.0, review: "Equipment rental is steep — bring your own gear and it's good value.", date: 'Recently' },
            { userId: 'f8', name: 'Karan Patel', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop', rating: 4.0, review: "Had a corporate tourney here. Staff was extremely organised and professional.", date: 'Recently' }
        ] },
    { id: 'pl_pb_2', distanceKm: 7, title: 'Juhu Vile Parle Club', location: 'Juhu', price: '₹1500/hr', image: '/images/pickleball_court.png', type: 'pickleball', category: 'Pickleball', rating: 4.3, reviewsCount: '89', friendsActivity: [
            { userId: 'f2', name: 'Rohan Kapoor', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop', rating: 4.5, review: "Best maintained court I've played at in Mumbai. Lighting for evening games is excellent.", date: 'Recently' }
        ] },
    { id: 'pl_bs_2', title: 'Hoopers Basketball Arena', location: 'Andheri East', price: '₹1200/hr', image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=2000&auto=format&fit=crop', type: 'basketball', category: 'Basketball', rating: 4.7, reviewsCount: '230', friendsActivity: [
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
            { type: 'store', placeId: 's2', rating: 3.5, review: "Good collection but a bit pricey.", date: '3 months ago' },
            { type: 'activity', placeId: 'a1', rating: 4.5, review: "Great place to relax.", date: 'Last week' },
            { type: 'play', placeId: 'p2', rating: 4.0, review: "Fun turf, well maintained.", date: '2 months ago' },
            { type: 'restaurant', placeId: 'r7', rating: 3.5, review: "Crowded but nice vibe.", date: '1 year ago' },
            { type: 'movie', placeId: 'sci_1', rating: 4.5, review: "Visually stunning.", date: '3 weeks ago' },
            { type: 'event', placeId: 'e2', rating: 4.0, review: "Hilarious set!", date: '4 months ago' },
            { type: 'store', placeId: 's5', rating: 4.5, review: "Got some great kicks here.", date: 'Last month' },
            { type: 'play', placeId: 'p3', rating: 5.0, review: "Best pickleball court in town.", date: 'Yesterday' }
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
