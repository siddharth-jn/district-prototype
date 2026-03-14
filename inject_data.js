import fs from 'fs';

const path = './src/data/mockData.js';
let content = fs.readFileSync(path, 'utf8');

const newEvents = `
    // Additions for 2 per subtype
    { id: 'ev_nl_2', title: 'Techno Night at Kitty Su', date: 'Fri, 12 May', time: '10:00 PM', venue: 'Kitty Su', price: '₹1500', image: 'https://images.unsplash.com/photo-1574406280735-351fc1a7c5e0?q=80&w=2000&auto=format&fit=crop', category: 'Nightlife', type: 'nightlife', rating: 4.6, friendsActivity: [] },
    { id: 'ev_sp_2', title: 'Mumbai Indians vs CSK', date: 'Sun, 14 May', time: '7:30 PM', venue: 'Wankhede', price: '₹2500', image: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=2000&auto=format&fit=crop', category: 'Sports', type: 'sports', rating: 4.9, friendsActivity: [] },
    { id: 'ev_pf_2', title: 'NCPA Symphony Orchestra', date: 'Sat, 20 May', time: '6:30 PM', venue: 'NCPA', price: '₹800', image: 'https://images.unsplash.com/photo-1563841930606-67e2bce48b78?q=80&w=2000&auto=format&fit=crop', category: 'Performances', type: 'performances', rating: 4.8, friendsActivity: [] },
    { id: 'ev_fd_2', title: 'Bandra Wine Tasting Festival', date: 'Sun, 21 May', time: '4:00 PM', venue: 'Bandra Gymkhana', price: '₹2000', image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=2000&auto=format&fit=crop', category: 'Food & Drinks', type: 'food_drinks', rating: 4.7, friendsActivity: [] },
    { id: 'ev_ff_2', title: 'Kala Ghoda Arts Festival', date: '04-12 Feb', time: '10:00 AM', venue: 'Kala Ghoda', price: 'Free', image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2000&auto=format&fit=crop', category: 'Fests & Fairs', type: 'fests_fairs', rating: 4.9, friendsActivity: [] },
    { id: 'ev_sm_2', title: 'Singles Mixer Night', date: 'Fri, 19 May', time: '8:00 PM', venue: 'Socials', price: '₹500', image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2000&auto=format&fit=crop', category: 'Social Mixers', type: 'social_mixers', rating: 4.2, friendsActivity: [] },
    { id: 'ev_ft_2', title: 'Sunday Morning Yoga', date: 'Sun, 28 May', time: '7:00 AM', venue: 'Juhu Beach', price: 'Free', image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2000&auto=format&fit=crop', category: 'Fitness', type: 'fitness', rating: 4.6, friendsActivity: [] },
    { id: 'ev_sc_2', title: 'Interstellar IMAX Screening', date: 'Wed, 24 May', time: '8:30 PM', venue: 'PVR ICON IMAX', price: '₹600', image: 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?q=80&w=2000&auto=format&fit=crop', category: 'Screenings', type: 'screenings', rating: 4.9, friendsActivity: [] },
    { id: 'ev_pt_2', title: 'Dog Show 2026', date: 'Sun, 04 Jun', time: '9:00 AM', venue: 'BKC Grounds', price: '₹300', image: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=2000&auto=format&fit=crop', category: 'Pets', type: 'pets', rating: 4.5, friendsActivity: [] },
    { id: 'ev_ar_2', title: 'Contemporary Art Fair', date: '15-20 Jul', time: '11:00 AM', venue: 'Nehru Centre', price: '₹150', image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=2000&auto=format&fit=crop', category: 'Art Exhibitions', type: 'art_exhibitions', rating: 4.4, friendsActivity: [] },
    { id: 'ev_cf_2', title: 'India FinTech Forum', date: 'Thu, 08 Jun', time: '9:00 AM', venue: 'Jio World Convention Centre', price: '₹5000', image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=2000&auto=format&fit=crop', category: 'Conferences', type: 'conferences', rating: 4.7, friendsActivity: [] },
    { id: 'ev_ex_2', title: 'Comic Con Mumbai', date: 'Sat, 11 Nov', time: '10:00 AM', venue: 'NESCO', price: '₹899', image: 'https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?q=80&w=2000&auto=format&fit=crop', category: 'Expos', type: 'expos', rating: 4.8, friendsActivity: [] }`;

const newStores = `
    { id: 'st_fw_2', title: 'Adidas Originals', location: 'Linking Road', offer: 'Buy 2 Get 1 Free', image: 'https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?q=80&w=2000&auto=format&fit=crop', type: 'footwear', category: 'Footwear', rating: 4.5, friendsActivity: [] },
    { id: 'st_ap_2', title: 'H&M', location: 'High Street Phoenix', offer: 'Up to 50% Off', image: 'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?q=80&w=2000&auto=format&fit=crop', type: 'apparel', category: 'Apparel', rating: 4.6, friendsActivity: [] },
    { id: 'st_sw_2', title: 'Jean-Claude Biguine', location: 'Juhu', offer: 'Flat 15% Off Haircare', image: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=2000&auto=format&fit=crop', type: 'salons_wellness', category: 'Salons & Wellness', rating: 4.7, friendsActivity: [] },
    { id: 'st_jw_2', title: 'Kalyan Jewellers', location: 'Vashi', offer: 'Free Gold Coin on Purchase', image: 'https://images.unsplash.com/photo-1599643478524-fb405f6fc353?q=80&w=2000&auto=format&fit=crop', type: 'jewellery', category: 'Jewellery', rating: 4.4, friendsActivity: [] },
    { id: 'st_bt_2', title: 'Sephora', location: 'Palladium Mall', offer: 'Free Makeover Session', image: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?q=80&w=2000&auto=format&fit=crop', type: 'beauty', category: 'Beauty', rating: 4.8, friendsActivity: [] },
    { id: 'st_hf_2', title: 'IKEA', location: 'Navi Mumbai', offer: 'New Arrivals Collection', image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=2000&auto=format&fit=crop', type: 'home_furniture', category: 'Home & Furniture', rating: 4.6, friendsActivity: [] }`;

const newActivities = `
    { id: 'act_gz_2', title: 'Timezone', location: 'Inorbit Mall Malad', price: '₹500 onwards', image: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?q=80&w=2000&auto=format&fit=crop', type: 'game_zones', category: 'Game Zones', rating: 4.5, friendsActivity: [] },
    { id: 'act_tp_2', title: 'EsselWorld', location: 'Gorai', price: '₹1050', image: 'https://images.unsplash.com/photo-1533560696582-8924bce63fb6?q=80&w=2000&auto=format&fit=crop', type: 'theme_parks', category: 'Theme Parks', rating: 4.3, friendsActivity: [] },
    { id: 'act_wk_2', title: 'Baking Masterclass', location: 'Bandra', price: '₹2500', image: 'https://images.unsplash.com/photo-1556910103-1c02745a872f?q=80&w=2000&auto=format&fit=crop', type: 'workshops', category: 'Workshops', rating: 4.8, friendsActivity: [] },
    { id: 'act_wp_2', title: 'Wet N Joy', location: 'Lonavala', price: '₹1100', image: 'https://images.unsplash.com/photo-1588698188172-e555ed13cf3c?q=80&w=2000&auto=format&fit=crop', type: 'water_parks', category: 'Water Parks', rating: 4.6, friendsActivity: [] },
    { id: 'act_kp_2', title: 'Fun City', location: 'Oberoi Mall', price: '₹500', image: 'https://images.unsplash.com/photo-1596461404969-9ce20c71c5ec?q=80&w=2000&auto=format&fit=crop', type: 'kids_play', category: 'Kids Play', rating: 4.4, friendsActivity: [] },
    { id: 'act_gq_2', title: 'Clue Hunt', location: 'Bandra West', price: '₹700', image: 'https://images.unsplash.com/photo-1511882150382-421056c89033?q=80&w=2000&auto=format&fit=crop', type: 'games_quizzes', category: 'Games & Quizzes', rating: 4.7, friendsActivity: [] },
    { id: 'act_ms_2', title: 'Dr. Bhau Daji Lad Museum', location: 'Byculla', price: '₹100', image: 'https://images.unsplash.com/photo-1582561502479-7a0cebf1dc10?q=80&w=2000&auto=format&fit=crop', type: 'museums', category: 'Museums', rating: 4.8, friendsActivity: [] },
    { id: 'act_es_2', title: 'Microgravity Gaming', location: 'Juhu', price: '₹1200', image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2000&auto=format&fit=crop', type: 'e_sports', category: 'E Sports', rating: 4.6, friendsActivity: [] },
    { id: 'act_ad_2', title: 'Hakone Go Karting', location: 'Powai', price: '₹400', image: 'https://images.unsplash.com/photo-1589133857321-7296b4bb5fba?q=80&w=2000&auto=format&fit=crop', type: 'adventure', category: 'Adventure', rating: 4.5, friendsActivity: [] },
    { id: 'act_ft_2', title: 'Bounce Inc Trampoline', location: 'Malad', price: '₹900', image: 'https://images.unsplash.com/photo-1574889240366-2cbaf05d58fe?q=80&w=2000&auto=format&fit=crop', type: 'fitness', category: 'Fitness', rating: 4.8, friendsActivity: [] }`;

const newPlay = `
    { id: 'pl_cr_2', title: 'Poddar School Turf', location: 'Santacruz', price: '₹1200/hr', image: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?q=80&w=2000&auto=format&fit=crop', type: 'cricket', category: 'Cricket', rating: 4.5, friendsActivity: [] },
    { id: 'pl_fb_2', title: 'St. Andrews Astro Park', location: 'Bandra West', price: '₹2500/hr', image: '/images/football_turf.png', type: 'football', category: 'Football', rating: 4.9, friendsActivity: [] },
    { id: 'pl_bd_2', title: 'Khar Gymkhana Courts', location: 'Khar', price: '₹800/hr', image: '/images/badminton_court.png', type: 'badminton', category: 'Badminton', rating: 4.6, friendsActivity: [] },
    { id: 'pl_tn_2', title: 'YMCA Tennis Courts', location: 'Mumbai Central', price: '₹600/hr', image: 'https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?q=80&w=2000&auto=format&fit=crop', type: 'tennis', category: 'Tennis', rating: 4.4, friendsActivity: [] },
    { id: 'pl_pb_2', title: 'Juhu Vile Parle Club', location: 'Juhu', price: '₹1500/hr', image: '/images/pickleball_court.png', type: 'pickleball', category: 'Pickleball', rating: 4.8, friendsActivity: [] },
    { id: 'pl_bs_2', title: 'Hoopers Basketball Arena', location: 'Andheri East', price: '₹1200/hr', image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=2000&auto=format&fit=crop', type: 'basketball', category: 'Basketball', rating: 4.7, friendsActivity: [] }`;


content = content.replace(
    /(export const events = \[[\s\S]*?)(\n\];\n\n\/\/ --- Stores Data ---)/,
    \`$1,\n\${newEvents}$2\`
);

content = content.replace(
    /(export const stores = \[[\s\S]*?)(\n\];\n\n\/\/ --- Activities Data ---)/,
    \`$1,\n\${newStores}$2\`
);

content = content.replace(
    /(export const activities = \[[\s\S]*?)(\n\];\n\n\/\/ --- Play Facilities Data ---)/,
    \`$1,\n\${newActivities}$2\`
);

content = content.replace(
    /(export const playFacilities = \[[\s\S]*?)(\n\];\n\n\/\/ --- Users & Social Data ---)/,
    \`$1,\n\${newPlay}$2\`
);

fs.writeFileSync(path, content, 'utf8');
console.log('Successfully injected new mock data!');
