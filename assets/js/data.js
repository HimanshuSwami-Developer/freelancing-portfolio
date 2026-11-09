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
   */
  projects: [
    {
      name: 'Aapno Bazar',
      categories: ['app', 'ecommerce'],
      platform: 'Android app',
      sector: 'Grocery delivery',
      domain: 'Google Play',
      bg: '#D9F7E8', ink: '#047857',
      image: '',
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
