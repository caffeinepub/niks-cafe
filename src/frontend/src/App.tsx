import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ChevronDown,
  Clock,
  ExternalLink,
  MapPin,
  Menu,
  Phone,
  Star,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";
import { SiInstagram } from "react-icons/si";

// ---------- Types ----------
interface MenuItemData {
  id: number;
  name: string;
  description: string;
  image: string;
  badge?: string;
}

interface ReviewData {
  id: number;
  name: string;
  text: string;
  stars: number;
  emoji?: string;
}

// ---------- Data ----------
const menuItems: MenuItemData[] = [
  {
    id: 1,
    name: "Triple Chocolate Waffle",
    description: "Three layers of chocolate goodness on a crispy golden waffle",
    image: "/assets/generated/menu-waffle.dim_600x500.jpg",
    badge: "Best Seller",
  },
  {
    id: 2,
    name: "Triple Chocolate Pancakes",
    description: "Fluffy pancakes drowned in dark, milk & white chocolate",
    image: "/assets/generated/menu-pancakes.dim_600x500.jpg",
    badge: "Fan Favourite",
  },
  {
    id: 3,
    name: "Cold Coffee",
    description: "Our signature chilled brew with a creamy chocolate twist",
    image: "/assets/generated/menu-cold-coffee.dim_600x500.jpg",
  },
  {
    id: 4,
    name: "Brownie Icecreame",
    description:
      "The ultimate chocolate indulgence — not for the faint-hearted",
    image: "/assets/generated/menu-death-by-chocolate.dim_600x500.jpg",
    badge: "Must Try",
  },
  {
    id: 5,
    name: "Bowl Cake",
    description: "Warm gooey chocolate cake in a bowl with vanilla ice cream",
    image: "/assets/uploads/ChatGPT-Image-Mar-14-2026-12_09_30-PM-1.png",
  },
  {
    id: 6,
    name: "Chocolate Milkshake",
    description: "Thick, creamy, loaded milkshake — a chocoholic's dream",
    image: "/assets/generated/menu-milkshake.dim_600x500.jpg",
  },
];

const reviews: ReviewData[] = [
  {
    id: 1,
    name: "Priya S.",
    text: "The Triple Chocolate Waffle is absolutely divine! Best dessert spot in Vile Parle, hands down. 🍫",
    stars: 5,
  },
  {
    id: 2,
    name: "Rahul M.",
    text: "Brownie Icecreame is insanely good. Perfect for a late-night dessert craving. Open till 11:30 is a blessing!",
    stars: 5,
  },
  {
    id: 3,
    name: "Sneha K.",
    text: "Cozy vibe, amazing cold coffee, super Instagrammable! Totally worth the visit.",
    stars: 5,
  },
  {
    id: 4,
    name: "Aarav T.",
    text: "Been coming here for 2 years. The pancakes never disappoint. A hidden gem in Mumbai!",
    stars: 5,
  },
];

const galleryImages = [
  {
    src: "/assets/generated/hero-banner.dim_1400x700.jpg",
    alt: "Desserts at Niks Cafe",
    tall: true,
  },
  {
    src: "/assets/generated/gallery-milkshake.dim_600x500.jpg",
    alt: "Chocolate Milkshake",
    tall: false,
  },
  {
    src: "/assets/generated/gallery-mojito.dim_600x500.jpg",
    alt: "Mint Mojito",
    tall: false,
  },
  {
    src: "/assets/generated/gallery-bowlcake.dim_600x500.jpg",
    alt: "Bowl Cake",
    tall: true,
  },
  {
    src: "/assets/uploads/ChatGPT-Image-Mar-14-2026-12_09_30-PM-1-1.png",
    alt: "Bowl Cake Special",
    tall: false,
  },
  {
    src: "/assets/generated/menu-waffle.dim_600x500.jpg",
    alt: "Triple Chocolate Waffle",
    tall: false,
  },
  {
    src: "/assets/generated/gallery-glasses.dim_600x500.jpg",
    alt: "Drinks & Glasses",
    tall: false,
  },
];

// ---------- useReveal Hook ----------
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(
      ".reveal, .reveal-left, .reveal-right",
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        }
      },
      { threshold: 0.12 },
    );
    for (const el of els) {
      observer.observe(el);
    }
    return () => observer.disconnect();
  }, []);
}

// ---------- StarRating ----------
function StarRating({ count = 5 }: { count?: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }, (_, i) => i + 1).map((n) => (
        <Star key={n} className="w-4 h-4 fill-gold-400 text-gold-400" />
      ))}
    </div>
  );
}

// ---------- Navbar ----------
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const links = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#menu", label: "Menu" },
    { href: "#gallery", label: "Gallery" },
    { href: "#reviews", label: "Reviews" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-choco-950/90 backdrop-blur-md shadow-choco"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <a href="#home" className="flex-shrink-0">
          <img
            src="/assets/generated/niks-cafe-logo-transparent.dim_400x120.png"
            alt="Niks Cafe Logo"
            className="h-10 md:h-12 w-auto object-contain"
          />
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                data-ocid={`nav.${link.label.toLowerCase()}.link`}
                className="text-cream-200 hover:text-gold-400 font-body font-medium text-sm tracking-wide transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold-400 transition-all duration-200 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="md:hidden text-cream-200 hover:text-gold-400 transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-choco-950/95 backdrop-blur-md border-t border-choco-800">
          <ul className="px-6 py-4 flex flex-col gap-4">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  data-ocid={`nav.${link.label.toLowerCase()}.link`}
                  className="text-cream-200 hover:text-gold-400 font-body font-medium text-base block py-1 transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}

// ---------- Hero ----------
function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/assets/generated/hero-banner.dim_1400x700.jpg')`,
        }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-choco-950/80 via-choco-950/65 to-choco-950/85" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pt-20">
        {/* Hindi */}
        <p className="font-display italic text-gold-400 text-lg md:text-xl mb-3 tracking-widest">
          निक्स कैफे
        </p>

        {/* Rating badge */}
        <div className="flex justify-center mb-6">
          <Badge className="bg-gold-400/20 text-gold-400 border border-gold-400/40 px-4 py-1.5 text-sm font-body font-medium gap-2">
            <Star className="w-3.5 h-3.5 fill-gold-400" />
            4.8/5 · 85+ Reviews
          </Badge>
        </div>

        <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-cream-50 leading-tight text-shadow-warm mb-6">
          Mumbai's Favorite
          <span className="block text-gold-400">Chocolate Café</span>
        </h1>

        <p className="font-body text-cream-200 text-lg md:text-xl mb-10 max-w-xl mx-auto leading-relaxed opacity-90">
          Delicious Waffles, Pancakes &amp; Cold Coffee at Niks Cafe
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            asChild
            size="lg"
            data-ocid="hero.primary_button"
            className="bg-choco-600 hover:bg-choco-700 text-cream-50 font-body font-semibold px-8 py-6 text-base shadow-warm-lg border-0 transition-all duration-200 hover:scale-105"
          >
            <a href="#menu">View Menu</a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            data-ocid="hero.secondary_button"
            className="border-2 border-cream-200/60 text-cream-200 bg-transparent hover:bg-cream-200/10 font-body font-semibold px-8 py-6 text-base transition-all duration-200 hover:scale-105 hover:border-cream-200"
          >
            <a
              href="https://maps.google.com/?q=Shop+No+3,+Amrut+Bhavan,+105+Nehru+Rd,+Vile+Parle+East,+Mumbai+400057"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get Directions
            </a>
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce-down">
        <ChevronDown className="w-6 h-6 text-cream-200/60" />
      </div>
    </section>
  );
}

// ---------- About ----------
function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-28 cream-gradient">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Text */}
          <div className="reveal-left">
            <p className="font-display italic text-choco-500 text-lg mb-3">
              Our Story
            </p>
            <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-choco-900 leading-tight mb-6">
              A Chocolate Lover's
              <span className="text-choco-600 block">Paradise</span>
            </h2>
            <p className="font-body text-choco-700 text-lg leading-relaxed mb-8">
              Niks Cafe is Vile Parle East's most beloved dessert destination.
              Known for indulgent waffles, decadent pancakes, refreshing cold
              coffees, and unforgettable chocolate creations. A cozy spot where
              every visit feels special — and every dessert tells a story.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { value: "4.8★", label: "Rating" },
                { value: "85+", label: "Happy Reviews" },
                { value: "11:30", label: "Open Till PM" },
              ].map((stat, i) => (
                <div
                  key={stat.label}
                  className={`text-center p-4 bg-white/70 rounded-2xl shadow-warm reveal stagger-${i + 1}`}
                >
                  <p className="font-display font-bold text-2xl text-choco-700">
                    {stat.value}
                  </p>
                  <p className="font-body text-xs text-choco-500 mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="reveal-right">
            <div className="relative">
              <div className="absolute -inset-4 bg-choco-200/40 rounded-3xl -rotate-2" />
              <img
                src="/assets/uploads/Niks-Cafe-Signboard-60-42.jpg-1--1.jpg"
                alt="Niks Cafe cozy interior"
                className="relative w-full h-80 md:h-96 object-cover rounded-2xl shadow-warm-lg"
              />
              {/* floating badge */}
              <div className="absolute -bottom-4 -left-4 bg-choco-800 text-cream-100 px-5 py-3 rounded-2xl shadow-choco">
                <p className="font-display font-bold text-xl">Since 2019</p>
                <p className="font-body text-xs text-cream-300">
                  Sweetening Mumbai
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------- Menu ----------
function MenuSection() {
  const ocidMap = [
    "menu.item.1",
    "menu.item.2",
    "menu.item.3",
    "menu.item.4",
    "menu.item.5",
    "menu.item.6",
  ];

  return (
    <section
      id="menu"
      className="py-20 md:py-28 relative"
      style={{
        background:
          "linear-gradient(160deg, #1e0f07 0%, #100804 60%, #2d1810 100%)",
      }}
    >
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold-400/60 to-transparent" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-14 reveal">
          <p className="font-display italic text-gold-400 text-lg mb-2">
            Our Specialties
          </p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-cream-50 leading-tight">
            Our Most Loved Treats
          </h2>
          <div className="w-16 h-0.5 bg-gold-400/60 mx-auto mt-5" />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {menuItems.map((item, idx) => (
            <div
              key={item.id}
              data-ocid={ocidMap[idx]}
              className={`group bg-choco-900/60 rounded-2xl overflow-hidden border border-choco-700/40 hover:border-gold-400/40 shadow-choco hover:shadow-warm-lg transition-all duration-300 hover:-translate-y-2 reveal stagger-${Math.min(idx + 1, 6)}`}
            >
              {/* Image */}
              <div className="relative overflow-hidden h-52">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                {item.badge && (
                  <Badge className="absolute top-3 right-3 bg-gold-400 text-choco-950 font-body font-semibold text-xs border-0">
                    {item.badge}
                  </Badge>
                )}
              </div>
              {/* Content */}
              <div className="p-5">
                <h3 className="font-display font-semibold text-xl text-cream-100 mb-2">
                  {item.name}
                </h3>
                <p className="font-body text-sm text-cream-300/80 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold-400/60 to-transparent" />
    </section>
  );
}

// ---------- Gallery ----------
function GallerySection() {
  return (
    <section id="gallery" className="py-20 md:py-28 cream-gradient">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 reveal">
          <p className="font-display italic text-choco-500 text-lg mb-2">
            Visual Story
          </p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-choco-900">
            Moments at Niks Cafe
          </h2>
          <div className="w-16 h-0.5 bg-choco-400/60 mx-auto mt-5" />
        </div>

        {/* CSS Grid Gallery */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 auto-rows-[200px] md:auto-rows-[220px]">
          {galleryImages.map((img, idx) => (
            <div
              key={img.src}
              className={`group relative overflow-hidden rounded-xl md:rounded-2xl ${
                img.tall ? "row-span-2" : ""
              } reveal stagger-${Math.min(idx + 1, 6)}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-choco-950/0 group-hover:bg-choco-950/30 transition-all duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- Reviews ----------
function ReviewsSection() {
  const ocidMap = [
    "reviews.item.1",
    "reviews.item.2",
    "reviews.item.3",
    "reviews.item.4",
  ];

  return (
    <section
      id="reviews"
      className="py-20 md:py-28"
      style={{
        background: "linear-gradient(160deg, #2d1810 0%, #3d2115 100%)",
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-14 reveal">
          <p className="font-display italic text-gold-400 text-lg mb-2">
            Testimonials
          </p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-cream-50">
            What Our Guests Say
          </h2>

          {/* Overall rating */}
          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="flex gap-1">
              {Array.from({ length: 5 }, (_, i) => i + 1).map((n) => (
                <Star key={n} className="w-6 h-6 fill-gold-400 text-gold-400" />
              ))}
            </div>
            <span className="font-display font-bold text-2xl text-gold-400">
              4.8
            </span>
            <span className="font-body text-cream-300/70 text-sm">
              based on 85+ reviews
            </span>
          </div>
        </div>

        {/* Review cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review, idx) => (
            <div
              key={review.id}
              data-ocid={ocidMap[idx]}
              className={`bg-choco-950/60 border border-choco-700/40 rounded-2xl p-6 shadow-choco reveal stagger-${idx + 1}`}
            >
              <StarRating count={review.stars} />
              <p className="font-body text-cream-200/85 text-sm leading-relaxed mt-4 mb-5">
                "{review.text}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-choco-600 flex items-center justify-center">
                  <span className="font-display font-bold text-cream-100 text-sm">
                    {review.name[0]}
                  </span>
                </div>
                <div>
                  <p className="font-body font-semibold text-cream-100 text-sm">
                    {review.name}
                  </p>
                  <p className="font-body text-xs text-cream-300/60">
                    Verified Guest
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- Location ----------
function LocationSection() {
  return (
    <section className="py-20 md:py-28 cream-gradient">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 reveal">
          <p className="font-display italic text-choco-500 text-lg mb-2">
            Find Us
          </p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-choco-900">
            Visit Us in Vile Parle East
          </h2>
        </div>

        <div className="grid md:grid-cols-5 gap-8 items-start">
          {/* Map */}
          <div className="md:col-span-3 reveal-left">
            <div className="rounded-2xl overflow-hidden shadow-warm-lg border-4 border-white/70">
              <iframe
                title="Niks Cafe Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.8!2d72.8498!3d19.0990!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9b888ae67b5%3A0x9dce2f2ece057e9d!2sVile%20Parle%20East%2C%20Mumbai!5e0!3m2!1sen!2sin!4v1"
                width="100%"
                height="420"
                style={{ border: 0, display: "block" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                data-ocid="location.map_marker"
              />
            </div>
          </div>

          {/* Info */}
          <div className="md:col-span-2 reveal-right">
            <div className="bg-choco-900 rounded-2xl p-8 shadow-choco text-cream-100">
              <h3 className="font-display font-bold text-2xl text-cream-50 mb-6">
                How to Find Us
              </h3>
              <div className="space-y-5">
                <div className="flex gap-3">
                  <MapPin className="w-5 h-5 text-gold-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-body font-semibold text-cream-100 text-sm">
                      Address
                    </p>
                    <p className="font-body text-cream-300 text-sm mt-1 leading-relaxed">
                      Shop No 3, Amrut Bhavan, 105 Nehru Rd,
                      <br />
                      beside Parle Book Depot, opposite Airtel Gallery,
                      <br />
                      Navpada, Vile Parle East, Mumbai 400057
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Phone className="w-5 h-5 text-gold-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-body font-semibold text-cream-100 text-sm">
                      Phone
                    </p>
                    <a
                      href="tel:+919967012087"
                      className="font-body text-cream-300 text-sm hover:text-gold-400 transition-colors"
                    >
                      +91 9967012087
                    </a>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Clock className="w-5 h-5 text-gold-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-body font-semibold text-cream-100 text-sm">
                      Hours
                    </p>
                    <p className="font-body text-cream-300 text-sm mt-1">
                      Open Daily · Until 11:30 PM
                    </p>
                  </div>
                </div>
              </div>

              <a
                href="https://maps.google.com/?q=Shop+No+3,+Amrut+Bhavan,+105+Nehru+Rd,+Vile+Parle+East,+Mumbai+400057"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-8 text-gold-400 font-body font-semibold text-sm hover:text-gold-500 transition-colors"
              >
                Open in Google Maps
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------- Contact ----------
function ContactSection() {
  return (
    <section
      id="contact"
      className="py-20 md:py-28"
      style={{
        background: "linear-gradient(160deg, #100804 0%, #1e0f07 100%)",
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14 reveal">
          <p className="font-display italic text-gold-400 text-lg mb-2">
            Get in Touch
          </p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-cream-50">
            Come Say Hello
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Phone */}
          <div className="bg-choco-900/70 border border-choco-700/40 rounded-2xl p-8 text-center shadow-choco reveal stagger-1">
            <div className="w-14 h-14 bg-choco-700 rounded-2xl flex items-center justify-center mx-auto mb-5">
              <Phone className="w-6 h-6 text-gold-400" />
            </div>
            <h3 className="font-display font-semibold text-xl text-cream-100 mb-2">
              Phone
            </h3>
            <a
              href="tel:+919967012087"
              className="font-body text-cream-300 hover:text-gold-400 transition-colors"
            >
              9967012087
            </a>
          </div>

          {/* Address */}
          <div className="bg-choco-900/70 border border-choco-700/40 rounded-2xl p-8 text-center shadow-choco reveal stagger-2">
            <div className="w-14 h-14 bg-choco-700 rounded-2xl flex items-center justify-center mx-auto mb-5">
              <MapPin className="w-6 h-6 text-gold-400" />
            </div>
            <h3 className="font-display font-semibold text-xl text-cream-100 mb-2">
              Address
            </h3>
            <p className="font-body text-cream-300 text-sm leading-relaxed">
              Shop No 3, Amrut Bhavan,
              <br />
              105 Nehru Rd, Navpada,
              <br />
              Vile Parle East, Mumbai 400057
            </p>
          </div>

          {/* Hours */}
          <div className="bg-choco-900/70 border border-choco-700/40 rounded-2xl p-8 text-center shadow-choco reveal stagger-3">
            <div className="w-14 h-14 bg-choco-700 rounded-2xl flex items-center justify-center mx-auto mb-5">
              <Clock className="w-6 h-6 text-gold-400" />
            </div>
            <h3 className="font-display font-semibold text-xl text-cream-100 mb-2">
              Hours
            </h3>
            <p className="font-body text-cream-300">
              Open Daily
              <br />
              <span className="text-gold-400 font-semibold">
                Until 11:30 PM
              </span>
            </p>
          </div>
        </div>

        {/* Instagram */}
        <div className="text-center mt-10 reveal">
          <a
            href="https://www.instagram.com/niks_cafe._/"
            target="_blank"
            rel="noopener noreferrer"
            data-ocid="contact.button"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-700 via-pink-600 to-orange-500 text-white font-body font-semibold px-8 py-4 rounded-full shadow-lg hover:scale-105 transition-transform duration-200"
          >
            <SiInstagram className="w-5 h-5" />
            Follow us @niks_cafe._
          </a>
        </div>
      </div>
    </section>
  );
}

// ---------- CTA ----------
function CTASection() {
  return (
    <section
      className="py-24 md:py-32 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #3d2115 0%, #5c3220 50%, #2d1810 100%)",
      }}
    >
      {/* Decorative circles */}
      <div className="absolute -top-20 -right-20 w-80 h-80 bg-gold-400/5 rounded-full" />
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-choco-950/30 rounded-full" />

      <div className="relative z-10 text-center max-w-3xl mx-auto px-4 reveal">
        <p className="font-display italic text-gold-400 text-xl mb-4">
          Don't Wait
        </p>
        <h2 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl text-cream-50 leading-tight mb-4">
          Visit Niks Cafe Today
        </h2>
        <p className="font-body text-cream-200 text-xl mb-10">
          For the Best Chocolate Desserts in Mumbai!
        </p>
        <Button
          asChild
          size="lg"
          data-ocid="cta.primary_button"
          className="bg-gold-400 hover:bg-gold-500 text-choco-950 font-body font-bold px-10 py-7 text-lg shadow-warm-lg border-0 transition-all duration-200 hover:scale-105 rounded-full"
        >
          <a
            href="https://maps.google.com/?q=Shop+No+3,+Amrut+Bhavan,+105+Nehru+Rd,+Vile+Parle+East,+Mumbai+400057"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MapPin className="w-5 h-5 mr-2" />
            Get Directions
          </a>
        </Button>
      </div>
    </section>
  );
}

// ---------- Footer ----------
function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";
  const caffeineUrl = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`;

  return (
    <footer
      className="py-12 md:py-16 border-t border-choco-800"
      style={{ background: "#100804" }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <img
              src="/assets/generated/niks-cafe-logo-transparent.dim_400x120.png"
              alt="Niks Cafe"
              className="h-10 w-auto object-contain mb-4"
            />
            <p className="font-body text-cream-300/70 text-sm leading-relaxed">
              Sweetening Mumbai, one dessert at a time.
            </p>
            <p className="font-body text-cream-300/50 text-xs mt-2">
              निक्स कैफे · Vile Parle East
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-display font-semibold text-cream-100 mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {[
                "#home",
                "#about",
                "#menu",
                "#gallery",
                "#reviews",
                "#contact",
              ].map((href) => (
                <li key={href}>
                  <a
                    href={href}
                    className="font-body text-cream-300/70 text-sm hover:text-gold-400 transition-colors capitalize"
                  >
                    {href.replace("#", "")}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-cream-100 mb-4">
              Contact
            </h4>
            <div className="space-y-3">
              <div className="flex gap-2">
                <Phone className="w-4 h-4 text-gold-400 mt-0.5 flex-shrink-0" />
                <a
                  href="tel:+919967012087"
                  className="font-body text-cream-300/70 text-sm hover:text-gold-400"
                >
                  +91 9967012087
                </a>
              </div>
              <div className="flex gap-2">
                <MapPin className="w-4 h-4 text-gold-400 mt-0.5 flex-shrink-0" />
                <span className="font-body text-cream-300/70 text-sm">
                  Vile Parle East, Mumbai 400057
                </span>
              </div>
              <div className="flex gap-2">
                <Clock className="w-4 h-4 text-gold-400 mt-0.5 flex-shrink-0" />
                <span className="font-body text-cream-300/70 text-sm">
                  Open Daily · Till 11:30 PM
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-choco-800 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="font-body text-cream-300/50 text-sm">
            © {year} Niks Cafe · Vile Parle East, Mumbai
          </p>
          <a
            href={caffeineUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-cream-300/50 text-sm hover:text-gold-400 transition-colors"
          >
            Built with ❤️ using caffeine.ai
          </a>
        </div>
      </div>
    </footer>
  );
}

// ---------- SEO Meta ----------
function MetaTags() {
  useEffect(() => {
    document.title =
      "Niks Cafe - Mumbai's Favorite Chocolate Café | Vile Parle East";
    const setMeta = (name: string, content: string, property = false) => {
      const selector = property
        ? `meta[property="${name}"]`
        : `meta[name="${name}"]`;
      let el = document.querySelector<HTMLMetaElement>(selector);
      if (!el) {
        el = document.createElement("meta");
        if (property) el.setAttribute("property", name);
        else el.setAttribute("name", name);
        document.head.appendChild(el);
      }
      el.content = content;
    };
    setMeta(
      "description",
      "Niks Cafe in Vile Parle East, Mumbai — the best chocolate cafe for waffles, pancakes, cold coffee & desserts. Open till 11:30 PM. Rated 4.8/5.",
    );
    setMeta("og:title", "Niks Cafe - Mumbai's Favorite Chocolate Café", true);
    setMeta(
      "og:description",
      "Indulge in triple chocolate waffles, pancakes, milkshakes and more at Niks Cafe, Vile Parle East, Mumbai.",
      true,
    );
    setMeta("og:type", "website", true);
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", "Niks Cafe - Mumbai's Favorite Chocolate Café");
    setMeta(
      "twitter:description",
      "Delicious waffles, pancakes & cold coffee at Niks Cafe, Vile Parle East, Mumbai.",
    );
  }, []);
  return null;
}

// ---------- App ----------
export default function App() {
  useReveal();

  return (
    <>
      <MetaTags />
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <MenuSection />
        <GallerySection />
        <ReviewsSection />
        <LocationSection />
        <ContactSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
