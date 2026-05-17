export const mockProducts = [
  {
    id: '1',
    name: 'Custom Bluetooth Speaker Pro',
    description: 'Premium custom-built bluetooth speaker with crystal clear sound and deep bass. Perfect for music enthusiasts.',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500',
    category: 'Speakers',
    stock: 25,
    features: [
      '360° Sound',
      '12 Hour Battery',
      'Waterproof IPX7',
      'USB-C Charging',
      'Built-in Microphone'
    ],
    specifications: {
      'Bluetooth Version': '5.3',
      'Range': '30 meters',
      'Battery': '3000mAh',
      'Weight': '450g',
      'Dimensions': '18 x 8 x 8 cm'
    }
  },
  {
    id: '2',
    name: 'Mini Portable Speaker',
    description: 'Compact and powerful portable speaker. Take your music anywhere with this pocket-sized powerhouse.',
    price: 34.99,
    image: 'https://images.unsplash.com/photo-1589003077984-894e133dabab?w=500',
    category: 'Speakers',
    stock: 40,
    features: [
      'Compact Design',
      '8 Hour Battery',
      'Aux Input',
      'Hands-free Calling',
      'LED Indicators'
    ],
    specifications: {
      'Bluetooth Version': '5.0',
      'Range': '10 meters',
      'Battery': '1200mAh',
      'Weight': '180g',
      'Dimensions': '8 x 5 x 5 cm'
    }
  },
  {
    id: '3',
    name: 'RGB Gaming Speaker',
    description: 'Dynamic RGB lighting meets premium sound. Perfect for gamers and content creators.',
    price: 129.99,
    image: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?w=500',
    category: 'Speakers',
    stock: 15,
    features: [
      'RGB Lighting Effects',
      'Dual Drivers',
      '15 Hour Battery',
      'App Control',
      'EQ Presets'
    ],
    specifications: {
      'Bluetooth Version': '5.3',
      'Range': '30 meters',
      'Battery': '4000mAh',
      'Weight': '620g',
      'Dimensions': '22 x 10 x 10 cm'
    }
  },
  {
    id: '4',
    name: 'Wireless Earbuds Pro',
    description: 'True wireless earbuds with active noise cancellation and premium sound quality.',
    price: 79.99,
    image: 'https://images.unsplash.com/photo-1590658165737-15a047b7a9e4?w=500',
    category: 'Earbuds',
    stock: 50,
    features: [
      'Active Noise Cancellation',
      'Touch Controls',
      '24 Hour Battery (with case)',
      'Fast Charging',
      'Water Resistant'
    ],
    specifications: {
      'Bluetooth Version': '5.2',
      'Range': '15 meters',
      'Battery': '6 hours (earbuds)',
      'Weight': '5g per earbud',
      'Charging Case': 'USB-C'
    }
  },
  {
    id: '5',
    name: 'Smart Home Speaker',
    description: 'Voice-controlled smart speaker with premium audio and smart home integration.',
    price: 149.99,
    image: 'https://images.unsplash.com/photo-1543512214-318c7553f230?w=500',
    category: 'Smart Speakers',
    stock: 20,
    features: [
      'Voice Assistant',
      'Multi-room Audio',
      'Smart Home Hub',
      'Premium Sound',
      'Touch Controls'
    ],
    specifications: {
      'Connectivity': 'WiFi + Bluetooth',
      'Power': 'AC Adapter',
      'Drivers': '2x Tweeters, 1x Woofer',
      'Weight': '1.2kg',
      'Dimensions': '15 x 15 x 20 cm'
    }
  },
  {
    id: '6',
    name: 'Retro Vinyl Speaker',
    description: 'Vintage-inspired speaker with modern technology. Classic design meets contemporary sound.',
    price: 99.99,
    image: 'https://images.unsplash.com/photo-1558756520-22cfe5d382ca?w=500',
    category: 'Speakers',
    stock: 12,
    features: [
      'Retro Design',
      'Bluetooth & Aux',
      'FM Radio',
      'USB Playback',
      'Wooden Cabinet'
    ],
    specifications: {
      'Bluetooth Version': '5.0',
      'Power': '20W',
      'Battery': 'Not included (AC powered)',
      'Weight': '2.5kg',
      'Dimensions': '30 x 18 x 15 cm'
    }
  }
];

export const mockOrders = [
  {
    id: 'ORD-001',
    customerName: 'John Smith',
    customerEmail: 'john.smith@email.com',
    items: [
      { productId: '1', productName: 'Custom Bluetooth Speaker Pro', quantity: 1, price: 89.99 }
    ],
    total: 89.99,
    status: 'delivered',
    date: '2026-04-15',
    shippingAddress: '123 Main St, New York, NY 10001'
  },
  {
    id: 'ORD-002',
    customerName: 'Sarah Johnson',
    customerEmail: 'sarah.j@email.com',
    items: [
      { productId: '2', productName: 'Mini Portable Speaker', quantity: 2, price: 34.99 },
      { productId: '4', productName: 'Wireless Earbuds Pro', quantity: 1, price: 79.99 }
    ],
    total: 149.97,
    status: 'shipped',
    date: '2026-04-16',
    shippingAddress: '456 Oak Ave, Los Angeles, CA 90001'
  },
  {
    id: 'ORD-003',
    customerName: 'Michael Chen',
    customerEmail: 'mchen@email.com',
    items: [
      { productId: '3', productName: 'RGB Gaming Speaker', quantity: 1, price: 129.99 }
    ],
    total: 129.99,
    status: 'processing',
    date: '2026-04-17',
    shippingAddress: '789 Pine St, Chicago, IL 60601'
  },
  {
    id: 'ORD-004',
    customerName: 'Emma Davis',
    customerEmail: 'emma.davis@email.com',
    items: [
      { productId: '5', productName: 'Smart Home Speaker', quantity: 1, price: 149.99 },
      { productId: '6', productName: 'Retro Vinyl Speaker', quantity: 1, price: 99.99 }
    ],
    total: 249.98,
    status: 'pending',
    date: '2026-04-18',
    shippingAddress: '321 Elm St, Houston, TX 77001'
  }
];