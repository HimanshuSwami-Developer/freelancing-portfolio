/**
 * Site content & configuration.
 * Edit this file to update contact details or projects — no HTML changes needed.
 */
window.SITE = {
  contact: {
    email: 'himanshuswami2810@gmail.com',
    whatsapp: '919718751020', // digits with country code, e.g. '919876543210'. Empty = WhatsApp buttons hidden.
    linkedin: 'https://www.linkedin.com/in/himanshu-swami-02ab7729b/',
  },

  filters: [
    { id: 'all', label: 'All' },
    { id: 'web', label: 'Websites' },
    { id: 'app', label: 'Mobile apps' },
    { id: 'ecommerce', label: 'E-commerce' },
  ],

  /**
   * image: path to a screenshot, e.g. 'assets/img/projects/aapno-bazar.jpg'.
   * Leave empty to show the illustrated placeholder.
   * video / poster: optional promo video (mp4) + its thumbnail. When set, the
   * card cover becomes a play button that opens the video player.
   */
  projects: [
    {
      name: 'Asha Jewel',
      categories: ['web', 'ecommerce'],
      platform: 'Website',
      sector: 'Fine jewellery showroom',
      domain: 'muddy-hat-540d.workers.dev',
      bg: '#FBF0D9', ink: '#92400E',
      image: '',
      desc: 'A virtual jewellery showroom: browse showcases, drag pieces into your collection and order at the counter via WhatsApp.',
      links: [{ label: 'Visit site', href: 'https://muddy-hat-540d.himanshuswami2810.workers.dev/' }],
    },
    {
      name: 'Spark Cafe',
      categories: ['web'],
      platform: 'Website',
      sector: 'Café ordering',
      domain: 'bold-tooth-bb5d.workers.dev',
      bg: '#FDE8D7', ink: '#9A3412',
      image: '',
      video: 'assets/video/spark-cafe.mp4', poster: 'assets/video/spark-cafe.jpg', duration: '0:30',
      desc: 'A neighbourhood café site with an interactive menu, counter checkout and orders sent straight to WhatsApp, plus a live order-status board.',
      links: [{ label: 'Visit site', href: 'https://bold-tooth-bb5d.himanshuswami2810.workers.dev/' }],
    },
    {
      name: 'Cleanz24',
      categories: ['web'],
      platform: 'Website',
      sector: 'Dry cleaning & laundry',
      domain: 'tiny-sun-770e.workers.dev',
      bg: '#D6F4F7', ink: '#0E7490',
      image: '',
      desc: 'Free pickup and 24-hour delivery, with a price estimator, pickup booking form and WhatsApp booking.',
      links: [{ label: 'Visit site', href: 'https://tiny-sun-770e.himanshuswami2810.workers.dev/#book' }],
    },
    {
      name: 'Cup2Eat',
      categories: ['web', 'ecommerce'],
      platform: 'Website',
      sector: 'Edible chocolate cups',
      domain: 'bold-dew-1e09.workers.dev',
      bg: '#F3E3D3', ink: '#7C2D12',
      image: '',
      video: 'assets/video/cup2eat.mp4', poster: 'assets/video/cup2eat.jpg', duration: '0:30',
      desc: 'A product site for edible chocolate-coated cups, with retail and bulk packs and wholesale enquiries.',
      links: [{ label: 'Visit site', href: 'https://bold-dew-1e09.himanshuswami2810.workers.dev/' }],
    },
    {
      name: 'Aapno Bazar',
      categories: ['app', 'ecommerce'],
      platform: 'Android app',
      sector: 'Grocery delivery',
      domain: 'Google Play',
      bg: '#D9F7E8', ink: '#047857',
      image: '',
      video: 'assets/video/aapno-bazar.mp4', poster: 'assets/video/aapno-bazar.jpg', duration: '1:38',
      desc: 'Order groceries with delivery slots, live order tracking, coupons and UPI or cash on delivery.',
      links: [{ label: 'Play Store', href: 'https://play.google.com/store/apps/details?id=com.aapnobazar.app' }],
    },
    {
      name: 'Janjé',
      categories: ['web', 'ecommerce'],
      platform: 'Website',
      sector: 'Handmade accessories store',
      domain: 'janje-site.vercel.app',
      bg: '#FDE2EF', ink: '#BE185D',
      image: '',
      desc: 'A D2C store for bouquets and hair accessories with cart, wishlist and order tracking.',
      links: [{ label: 'Visit site', href: 'https://janje-site.vercel.app/' }],
    },
    {
      name: 'DD Associates',
      categories: ['web'],
      platform: 'Website',
      sector: 'Luxury real estate & interiors',
      domain: 'ddassociate.in',
      bg: '#ECE8E1', ink: '#44403C',
      image: '',
      desc: 'An elegant showcase for architecture and interiors with a property enquiry flow.',
      links: [{ label: 'Visit site', href: 'https://ddassociate.in/' }],
    },
    {
      name: 'G Security & Training',
      categories: ['web'],
      platform: 'Website · UK',
      sector: 'Training course booking',
      domain: 'gsecurityandtraining.co.uk',
      bg: '#DCE8FF', ink: '#1D4ED8',
      image: '',
      desc: 'Course booking for a Leeds-based SIA training provider, with pay-later checkout.',
      links: [{ label: 'Visit site', href: 'https://gsecurityandtraining.co.uk/' }],
    },
    {
      name: 'Aushmika Jewels',
      categories: ['web', 'ecommerce'],
      platform: 'Website',
      sector: 'Jewellery online store',
      domain: 'aushmikajewels.com',
      bg: '#FFF1C2', ink: '#B45309',
      image: '',
      desc: 'A jewellery store with shopping by category and material, best sellers and secure checkout.',
      links: [{ label: 'Visit site', href: 'https://www.aushmikajewels.com/' }],
    },
    {
      name: 'ApniBus',
      categories: ['app', 'web'],
      platform: 'App + Web',
      sector: 'Bus ticket booking · 1M+ downloads',
      domain: 'apnibus.com',
      bg: '#FFE4CC', ink: '#C2410C',
      image: '',
      desc: 'Bus ticket booking with live tracking and seat selection — 1M+ downloads on Google Play.',
      links: [
        { label: 'Play Store', href: 'https://play.google.com/store/apps/details?id=com.app.apnibus' },
        { label: 'Website', href: 'https://apnibus.com/' },
      ],
    },
  ],

  /**
   * Bug fixes & upgrades section.
   * icon: one of 'payment' | 'seo' | 'tracking' | 'browser' | 'security' | 'video'
   */
  fixes: [
    {
      client: 'App + Web',
      icon: 'payment',
      title: 'Subscription payments',
      desc: 'Fixed failing and stuck subscription payments across the app and website, so renewals go through reliably.',
    },
    {
      client: 'Websites',
      icon: 'seo',
      title: 'SEO setup',
      desc: 'Added meta tags, sitemaps and structured data so pages show up properly on Google and look good when shared.',
    },
    {
      client: 'G Security & Training',
      icon: 'tracking',
      title: 'Meta Pixel tracking',
      desc: 'Set up Meta Pixel with event tracking, so ad campaigns can measure bookings and enquiries.',
    },
    {
      client: 'ApniBus',
      icon: 'tracking',
      title: 'Event tracking',
      desc: 'Added events across the booking journey to see how users search, pick seats and pay.',
    },
    {
      client: 'Websites',
      icon: 'browser',
      title: 'Safari bugs',
      desc: 'Fixed layout and behaviour bugs on pages that broke only in Safari on iPhone and Mac.',
    },
    {
      client: 'DD Associates',
      icon: 'security',
      title: 'Site security',
      desc: 'Added security code to protect the website and its enquiry form from spam and misuse.',
    },
    {
      client: 'Marketing',
      icon: 'video',
      title: 'Promotion video',
      desc: 'Created a promotional video to launch and advertise the product on social media.',
    },
  ],
};
