import img1 from './img1.jpg';  
import img2 from './img2.jpg';
import img3 from './img3.jpg';
import img4 from './img4.jpg';
import img5 from './img5.jpg';
import img6 from './img6.jpg';
import img7 from './img7.jpg';
import img8 from './img8.jpg';
import img9 from './img9.jpg';
import img10 from './img10.jpg';
import img11 from './img11.jpg';
import img12 from './img12.jpg';
import img13 from './img13.jpg';
import img14 from './img14.jpg';
import img15 from './img15.jpg';


import searchIcon from './search_icon.png';
import profileIcon from './profile_icon.png';
import cartIcon from './Cart_icon.png';
import menuIcon from './menu_icon.png';
import backIcon from './back_icon.png';
import starIcon from './Star_icon.png';
import deleteIcon from './Delete_icon.png';
import homeImg from './hp.jpg';
import PrivacyPolicy from './PrivacyPolicyIcons.png';
import ReturnIcon from './ReturnIcons.png';

export const assets = {
    img1,
    img2,
    img3,
    img4, 
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
    img13,
    img14,
    img15,
    searchIcon,
    profileIcon,
    cartIcon,
    menuIcon,
    backIcon,
    starIcon,
    deleteIcon,
    homeImg,
    PrivacyPolicy,
    ReturnIcon,

}

export const products = [
    {
        id: 16,
        name: 'Traditional Brass Urli Bowl',
        description: 'A handcrafted brass urli bowl with beautiful floral engravings. Perfect for floating flowers or candles as a centerpiece in your living room or for festive decor.',
        price: 2799,
        bestseller: true, 
        currency: 'INR',
        image: [img1, img2, img3, img4], 
        material: 'Brass',
        finish: 'Antique Gold',
        stock: 7,
        sku: 'BRU-001',
        tags: ['urli', 'decor', 'festive'],
        features: [
            'Classic South Indian design',
            'Perfect for weddings and festivals',
            'Solid, heavy brass construction'
        ],
        careInstructions: 'Wipe with a soft dry cloth; avoid water to maintain shine.',
        origin: 'Made in India',
        size: [
             {
                label: "Small",
                weight: "1.2 kg",
                dimensions: { height: "6 cm", width: "25 cm", depth: "25 cm" },
                price: 1999
            },
            {
                label: "Medium",
                weight: "1.8 kg",
                dimensions: { height: "8 cm", width: "30 cm", depth: "30 cm" },
                price: 2799
            },
            {
                label: "Large",
                weight: "2.5 kg",
                dimensions: { height: "10 cm", width: "35 cm", depth: "35 cm" },
                price: 3499
            }
        ],
    },
    {
        id: 2,
        name: 'Shiv',
        description: 'A divine brass idol of Lord Shiv, perfect for pooja rooms and spiritual décor. Crafted with intricate details, this statue brings strength and serenity to any space.',
        price: 900, // default price for Medium
        bestseller: false,
        currency: 'INR',
        image: [img2],
        material: 'Brass',
        finish: 'Polished Gold',
        stock: 10,
        sku: 'SHIV-002',
        tags: ['shiv', 'idol', 'pooja'],
        features: [
            'Symbol of strength and spirituality',
            'Crafted by traditional artisans',
            'Ideal for home temples and meditation corners'
        ],
        careInstructions: 'Clean with a soft dry cloth. Avoid using water or abrasive cleaners.',
        origin: 'Made in India',
        size: [
            {
                label: "Small",
                weight: "0.9 kg",
                dimensions: { height: "10 cm", width: "7 cm", depth: "5 cm" },
                price: 699
            },
            {
                label: "Medium",
                weight: "1.5 kg",
                dimensions: { height: "14 cm", width: "10 cm", depth: "7 cm" },
                price: 900
            },
            {
                label: "Large",
                weight: "2.3 kg",
                dimensions: { height: "18 cm", width: "13 cm", depth: "9 cm" },
                price: 1299
            }
        ]
    },
    {
        id: 3,
        name: 'Lord Krishna Idol',
        description: 'A finely crafted brass idol of Lord Krishna playing the flute, symbolizing divine love and compassion. Perfect for home altars or as a decorative showpiece.',
        price: 600,
        bestseller: true,
        currency: 'INR',
        image: [img3], 
        material: 'Brass',
        finish: 'Polished Antique',
        stock: 12,
        sku: 'KRSH-003',
        tags: ['krishna', 'god idol', 'decor', 'spiritual'],
        features: [
          'Detailed flute and peacock feather design',
          'Traditional craftsmanship',
          'Symbol of love and wisdom'
        ],
        careInstructions: 'Clean with a dry, soft cloth regularly to maintain shine.',
        origin: 'Made in India',
        size: [
          {
            label: 'Small',
            weight: '0.8 kg',
            dimensions: { height: '10 cm', width: '6 cm', depth: '5 cm' },
            price: 499
          },
          {
            label: 'Medium',
            weight: '1.3 kg',
            dimensions: { height: '15 cm', width: '8 cm', depth: '6 cm' },
            price: 600
          },
          {
            label: 'Large',
            weight: '2.1 kg',
            dimensions: { height: '20 cm', width: '11 cm', depth: '8 cm' },
            price: 799
          }
        ]
    },
    {
        id: 4,
        name: 'Ram Darbar',
        description: 'An intricately crafted Ram Darbar idol set depicting Lord Rama, Sita, Lakshman, and Hanuman. A sacred representation of devotion, ideal for worship or gifting.',
        price: 800,
        bestseller: true,
        currency: 'INR',
        image: [img4],
        material: 'Brass',
        finish: 'Antique Bronze',
        stock: 5,
        sku: 'RD-004',
        tags: ['ram', 'darbar', 'idol', 'pooja', 'gift'],
        features: [
          'Handcrafted Ram Darbar set',
          'Symbol of devotion and righteousness',
          'Durable brass material with traditional detailing'
        ],
        careInstructions: 'Clean with a dry soft cloth. Avoid abrasive cleaners.',
        origin: 'Made in India',
        size: [
          {
            label: "Small",
            weight: "1.0 kg",
            dimensions: { height: "10 cm", width: "18 cm", depth: "7 cm" },
            price: 600
          },
          {
            label: "Medium",
            weight: "1.5 kg",
            dimensions: { height: "13 cm", width: "22 cm", depth: "9 cm" },
            price: 800
          },
          {
            label: "Large",
            weight: "2.2 kg",
            dimensions: { height: "16 cm", width: "27 cm", depth: "11 cm" },
            price: 1050
          }
        ]
    },
    {
        id: 5,
        name: 'Mata Rani',
        description: 'A finely crafted idol of Mata Rani, perfect for spiritual decor and devotional spaces. Reflects intricate detailing and traditional craftsmanship.',
        price: 100,
        bestseller: true,
        currency: 'INR',
        image: [img5],
        material: 'Brass',
        finish: 'Antique Gold',
        stock: 12,
        sku: 'MR-005',
        tags: ['mata', 'devotional', 'idol'],
        features: [
          'Handcrafted with detailed design',
          'Ideal for home temples and festivals',
          'High-quality brass construction'
        ],
        careInstructions: 'Clean with a dry cloth. Avoid abrasive cleaners and water.',
        origin: 'Made in India',
        size: [
          {
            label: "Small",
            weight: "0.5 kg",
            dimensions: { height: "10 cm", width: "6 cm", depth: "5 cm" },
            price: 100
          },
          {
            label: "Medium",
            weight: "0.9 kg",
            dimensions: { height: "15 cm", width: "9 cm", depth: "7 cm" },
            price: 249
          },
          {
            label: "Large",
            weight: "1.4 kg",
            dimensions: { height: "20 cm", width: "12 cm", depth: "9 cm" },
            price: 399
          }
        ]
    },
    {
        id: 6,
        name: 'Ganesh with Jhula',
        description: 'A beautifully crafted brass idol of Lord Ganesha seated on a traditional jhula (swing), symbolizing joy, prosperity, and spiritual harmony. Ideal for pooja rooms and gifting.',
        price: 600,
        bestseller: true,
        currency: 'INR',
        image: [img6],
        material: 'Brass',
        finish: 'Antique Gold',
        stock: 10,
        sku: 'GAN-JHU-006',
        tags: ['ganesha', 'swing', 'decor', 'festive'],
        features: [
            'Intricate craftsmanship',
            'Ideal for home temple and gifting',
            'Traditional Indian swing design'
        ],
        careInstructions: 'Wipe with a soft dry cloth. Avoid harsh chemicals or water to maintain polish.',
        origin: 'Made in India',
        size: [
            {
                label: "Small",
                weight: "1.0 kg",
                dimensions: { height: "12 cm", width: "10 cm", depth: "6 cm" },
                price: 600
            },
            {
                label: "Medium",
                weight: "1.5 kg",
                dimensions: { height: "15 cm", width: "12 cm", depth: "7 cm" },
                price: 899
            },
            {
                label: "Large",
                weight: "2.2 kg",
                dimensions: { height: "18 cm", width: "15 cm", depth: "9 cm" },
                price: 1199
            }
        ],
    },
    {
        id: 7,
        name: 'Cow',
        description: 'An intricately carved brass cow idol representing prosperity and nurturing energy. Ideal for pooja rooms or as a spiritual home decor item.',
        price: 200,
        bestseller: false,
        currency: 'INR',
        image: [img7],
        material: 'Brass',
        finish: 'Glossy Gold',
        stock: 10,
        sku: 'BRS-COW-007',
        tags: ['cow', 'spiritual', 'decor'],
        features: [
          'Symbol of divinity and compassion',
          'Perfect for pooja rooms or altars',
          'Crafted from solid brass with fine detailing'
        ],
        careInstructions: 'Clean gently with a soft, dry cloth. Do not use harsh chemicals or water.',
        origin: 'Made in India',
        size: [
          {
            label: "Small",
            weight: "800 g",
            dimensions: { height: "6 cm", width: "12 cm", depth: "8 cm" },
            price: 200
          },
          {
            label: "Medium",
            weight: "1.5 kg",
            dimensions: { height: "8 cm", width: "15 cm", depth: "10 cm" },
            price: 399
          },
          {
            label: "Large",
            weight: "2.3 kg",
            dimensions: { height: "10 cm", width: "18 cm", depth: "12 cm" },
            price: 549
          }
        ]
   },

   {
        id: 8,
        name: 'Vishnu',
        description: 'An intricately crafted brass idol of Lord Vishnu, symbolizing protection, preservation, and peace. Ideal for home temples or gifting during religious ceremonies.',
        price: 500,
        bestseller: false,
        currency: 'INR',
        image: [img8],
        material: 'Brass',
        finish: 'Glossy Gold',
        stock: 10,
        sku: 'VIS-008',
        tags: ['vishnu', 'god statue', 'religious', 'decor'],
        features: [
            'Symbol of divine preservation',
            'Finely detailed traditional posture',
            'Crafted using durable brass material'
        ],
        careInstructions: 'Clean with a soft dry cloth. Avoid contact with water to maintain the finish.',
        origin: 'Made in India',
        size: [
            {
                label: "Small",
                weight: "0.9 kg",
                dimensions: { height: "12 cm", width: "8 cm", depth: "5 cm" },
                price: 500
            },
            {
                label: "Medium",
                weight: "1.4 kg",
                dimensions: { height: "16 cm", width: "10 cm", depth: "6 cm" },
                price: 899
            },
            {
                label: "Large",
                weight: "2.2 kg",
                dimensions: { height: "22 cm", width: "14 cm", depth: "8 cm" },
                price: 1399
            }
        ]
    },

    {
        id: 9,
        name: 'Decorative Brass Kalash Pot',
        description: 'A beautifully crafted brass Kalash, ideal for home decor and traditional rituals. This pot adds a spiritual touch to your space with its intricate design and glossy finish.',
        price: 300,
        bestseller: true, 
        currency: 'INR',
        image: [img9], 
        material: 'Brass',
        finish: 'Glossy Gold',
        stock: 15,
        sku: 'BRK-009',
        tags: ['kalash', 'decor', 'rituals'],
        features: [
            'Traditional Indian craftsmanship',
            'Perfect for pujas and home decor',
            'Lightweight and durable'
        ],
        careInstructions: 'Use a soft cloth to clean. Avoid using water or harsh chemicals.',
        origin: 'Made in India',
        size: [
            {
                label: "Small",
                weight: "0.5 kg",
                dimensions: { height: "10 cm", width: "8 cm", depth: "8 cm" },
                price: 250
            },
            {
                label: "Medium",
                weight: "0.8 kg",
                dimensions: { height: "12 cm", width: "10 cm", depth: "10 cm" },
                price: 300
            },
            {
                label: "Large",
                weight: "1.2 kg",
                dimensions: { height: "15 cm", width: "12 cm", depth: "12 cm" },
                price: 399
            }
        ],
    },

    {
        id: 10,
        name: 'Hanuman',
        description: 'A divine brass idol of Lord Hanuman, showcasing strength and devotion. Ideal for placing in your prayer room or gifting during religious ceremonies.',
        price: 300,
        bestseller: true,
        currency: 'INR',
        image: [img10],
        material: 'Brass',
        finish: 'Antique Bronze',
        stock: 12,
        sku: 'HAN-010',
        tags: ['hanuman', 'god statue', 'devotional'],
        features: [
          'Intricately carved features',
          'Symbol of power and devotion',
          'Perfect for temple or home décor'
        ],
        careInstructions: 'Clean with a dry cloth. Avoid contact with water or harsh chemicals.',
        origin: 'Made in India',
        size: [
          {
            label: "Small",
            weight: "0.8 kg",
            dimensions: { height: "10 cm", width: "6 cm", depth: "4 cm" },
            price: 250
          },
          {
            label: "Medium",
            weight: "1.2 kg",
            dimensions: { height: "15 cm", width: "8 cm", depth: "6 cm" },
            price: 300
          },
          {
            label: "Large",
            weight: "2 kg",
            dimensions: { height: "22 cm", width: "12 cm", depth: "8 cm" },
            price: 450
          }
        ]
    },

    {
        id: 11,
        name: 'Buddha Statue - Meditating',
        description: 'A serene handcrafted brass Buddha statue in a meditative pose, symbolizing peace and mindfulness. Perfect for home decor, spiritual corners, or gifting.',
        price: 999,
        bestseller: true,
        currency: 'INR',
        category: 'Religious Statues',
        subcategory: 'Buddha Statues',
        image: [img11],
        material: 'Brass',
        finish: 'Antique Bronze',
        stock: 12,
        sku: 'BUD-MED-011',
        tags: ['buddha', 'meditation', 'spiritual', 'decor'],
        features: [
            'Peaceful meditating posture',
            'Fine detailing with antique finish',
            'Ideal for living rooms, offices, and spiritual setups'
        ],
        careInstructions: 'Clean with a soft dry cloth. Avoid abrasive materials or water.',
        origin: 'Made in India',
        size: [
            {
                label: "Small",
                weight: "0.9 kg",
                dimensions: { height: "12 cm", width: "8 cm", depth: "6 cm" },
                price: 799
            },
            {
                label: "Medium",
                weight: "1.4 kg",
                dimensions: { height: "16 cm", width: "10 cm", depth: "8 cm" },
                price: 999
            },
            {
                label: "Large",
                weight: "2.2 kg",
                dimensions: { height: "22 cm", width: "14 cm", depth: "10 cm" },
                price: 1399
            }
        ]
   },

   {
        id: 12,
        name: 'Shiv Family',
        description: 'A beautifully crafted brass idol set of Lord Shiva, Parvati, and Ganesha symbolizing divine harmony and family blessings. Ideal for your home altar or as a gift for spiritual occasions.',
        price: 400,
        bestseller: true,
        currency: 'INR',
        image: [img12],
        material: 'Brass',
        finish: 'Antique Gold',
        stock: 10,
        sku: 'SHIVFAM-012',
        tags: ['shiv', 'family', 'spiritual', 'decor'],
        features: [
          'Intricate detailing of divine figures',
          'Suitable for gifting and pooja purposes',
          'Durable brass material with antique finish'
        ],
        careInstructions: 'Clean with a soft dry cloth. Do not use water or abrasive chemicals.',
        origin: 'Made in India',
        size: [
          {
            label: "Small",
            weight: "1.0 kg",
            dimensions: { height: "10 cm", width: "18 cm", depth: "10 cm" },
            price: 400
          },
          {
            label: "Medium",
            weight: "1.5 kg",
            dimensions: { height: "12 cm", width: "22 cm", depth: "12 cm" },
            price: 699
          },
          {
            label: "Large",
            weight: "2.2 kg",
            dimensions: { height: "15 cm", width: "26 cm", depth: "15 cm" },
            price: 999
          }
        ]
   },

    {
        id: 13,
        name: 'Decorative Brass Peacock Urli',
        description: 'Elegant handcrafted urli with peacock design, perfect as a centerpiece for festive occasions or home decor.',
        price: 700,
        bestseller: true,
        currency: 'INR',
        image: [img13],
        material: 'Brass',
        finish: 'Antique Bronze',
        stock: 10,
        sku: 'BRU-013',
        tags: ['peacock', 'urli', 'home decor'],
        features: [
          'Peacock engraved design',
          'Ideal for indoor or outdoor decoration',
          'Durable brass build'
        ],
        careInstructions: 'Use a soft dry cloth for cleaning. Avoid harsh chemicals.',
        origin: 'Made in India',
        size: [
          {
            label: "Small",
            weight: "1.1 kg",
            dimensions: { height: "6 cm", width: "22 cm", depth: "22 cm" },
            price: 599
          },
          {
            label: "Medium",
            weight: "1.6 kg",
            dimensions: { height: "8 cm", width: "26 cm", depth: "26 cm" },
            price: 700
          },
          {
            label: "Large",
            weight: "2.3 kg",
            dimensions: { height: "10 cm", width: "30 cm", depth: "30 cm" },
            price: 849
          }
        ]
    },
    {
        id: 14,
        name: 'Elephant Statue',
        description: 'A beautifully crafted brass elephant statue, symbolizing wisdom and strength. Ideal for home decor, gifting, or as a symbol of prosperity and good fortune.',
        price: 200,
        bestseller: true, 
        currency: 'INR',
        image: [img14],
        material: 'Brass',
        finish: 'Polished Brass',
        stock: 12,
        sku: 'ELE-014',
        tags: ['elephant', 'decor', 'symbolic'],
        features: [
            'Intricate detailing',
            'Symbol of prosperity',
            'Perfect for centerpieces or pooja rooms'
        ],
        careInstructions: 'Clean with a dry cloth. Avoid water and harsh chemicals to maintain shine.',
        origin: 'Made in India',
        size: [
            {
                label: "Small",
                weight: "0.9 kg",
                dimensions: { height: "6 cm", width: "12 cm", depth: "8 cm" },
                price: 200
            },
            {
                label: "Medium",
                weight: "1.5 kg",
                dimensions: { height: "9 cm", width: "18 cm", depth: "12 cm" },
                price: 350
            },
            {
                label: "Large",
                weight: "2.3 kg",
                dimensions: { height: "12 cm", width: "24 cm", depth: "15 cm" },
                price: 499
            }
        ],
   },

    {
        id: 15,
        name: 'Ganesh Idol',
        description: 'A beautifully crafted brass Ganesh idol, symbolizing wisdom, prosperity, and the removal of obstacles. Ideal for homes, offices, or gifting during festivals.',
        price: 999,
        bestseller: true,
        currency: 'INR',
        image: [img15],
        material: 'Brass',
        finish: 'Antique Gold',
        stock: 12,
        sku: 'GAN-015',
        tags: ['ganesh', 'idol', 'pooja', 'gift'],
        features: [
            'Detailed craftsmanship with traditional motifs',
            'Ideal for Diwali, Ganesh Chaturthi, or housewarmings',
            'Compact and suitable for altar or desk placement'
        ],
        careInstructions: 'Clean with a soft dry cloth. Avoid harsh chemicals to retain shine.',
        origin: 'Made in India',
        size: [
            {
                label: "Small",
                weight: "0.5 kg",
                dimensions: { height: "8 cm", width: "6 cm", depth: "4 cm" },
                price: 499
            },
            {
                label: "Medium",
                weight: "1.2 kg",
                dimensions: { height: "12 cm", width: "9 cm", depth: "6 cm" },
                price: 999
            },
            {
                label: "Large",
                weight: "2.0 kg",
                dimensions: { height: "18 cm", width: "13 cm", depth: "8 cm" },
                price: 1499
            }
        ]
},

];