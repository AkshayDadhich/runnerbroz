
import React, { useState, useEffect } from 'react';
import { 
  Activity, 
  Calendar, 
  ShoppingBag, 
  Heart, 
  ChevronRight, 
  MapPin, 
  User, 
  Bell, 
  Menu, 
  X,
  TrendingUp,
  Clock,
  Zap,
  Facebook,
  Twitter,
  Instagram
} from 'lucide-react';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  AreaChart,
  Area
} from 'recharts';
import { Logo } from './components/Logo';
import { 
  MOCK_EVENTS, 
  MOCK_MERCH, 
  MOCK_BLOG, 
  MOCK_STATS, 
  COLORS 
} from './constants';

type Section = 'home' | 'events' | 'tracking' | 'shop' | 'awareness';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<Section>('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigate = (section: Section) => {
    setActiveSection(section);
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'}`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div 
            className="flex items-center gap-2 cursor-pointer group" 
            onClick={() => navigate('home')}
          >
            <Logo className={`h-10 transition-colors ${scrolled ? 'text-slate-900' : (activeSection === 'home' ? 'text-white' : 'text-slate-900')}`} />
            <span className={`text-2xl font-bold tracking-tighter heading-font transition-colors ${scrolled ? 'text-slate-900' : (activeSection === 'home' ? 'text-white' : 'text-slate-900')}`}>
              RUNNER<span className="text-emerald-500">BROZ</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <div className={`hidden md:flex items-center gap-8 font-medium transition-colors ${scrolled ? 'text-slate-600' : (activeSection === 'home' ? 'text-slate-200' : 'text-slate-600')}`}>
            {['home', 'events', 'tracking', 'shop', 'awareness'].map((item) => (
              <button
                key={item}
                onClick={() => navigate(item as Section)}
                className={`capitalize hover:text-emerald-500 transition-colors ${activeSection === item ? 'text-emerald-500 font-bold' : ''}`}
              >
                {item === 'awareness' ? 'Health & Awareness' : item}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button className={`p-2 rounded-full transition-colors ${scrolled ? 'hover:bg-slate-100 text-slate-600' : (activeSection === 'home' ? 'hover:bg-white/10 text-white' : 'hover:bg-slate-100 text-slate-600')}`}>
              <Bell size={20} />
            </button>
            <button className={`p-2 rounded-full transition-colors ${scrolled ? 'hover:bg-slate-100 text-slate-600' : (activeSection === 'home' ? 'hover:bg-white/10 text-white' : 'hover:bg-slate-100 text-slate-600')}`}>
              <User size={20} />
            </button>
            <button 
              className="md:hidden p-2 text-slate-600"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white border-t shadow-xl p-4 flex flex-col gap-4 animate-in fade-in slide-in-from-top-2">
            {['home', 'events', 'tracking', 'shop', 'awareness'].map((item) => (
              <button
                key={item}
                onClick={() => navigate(item as Section)}
                className={`text-left text-lg font-semibold py-2 capitalize ${activeSection === item ? 'text-emerald-600' : 'text-slate-700'}`}
              >
                {item === 'awareness' ? 'Health & Awareness' : item}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Main Content Area */}
      <main className="flex-grow">
        {activeSection === 'home' && <HomeSection onNavigate={navigate} />}
        {activeSection === 'events' && <EventsSection />}
        {activeSection === 'tracking' && <TrackingSection />}
        {activeSection === 'shop' && <ShopSection />}
        {activeSection === 'awareness' && <AwarenessSection />}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12 border-b border-slate-800 pb-12">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Logo className="h-8 text-white" />
                <span className="text-xl font-bold text-white heading-font">RUNNER<span className="text-emerald-500">BROZ</span></span>
              </div>
              <p className="text-sm leading-relaxed">
                Fueling the runner in everyone. We are more than a brand; we are a community of passionate athletes pushing boundaries every day.
              </p>
              <div className="flex gap-4">
                <a href="#" className="hover:text-emerald-500 transition-colors"><Facebook size={20} /></a>
                <a href="#" className="hover:text-emerald-500 transition-colors"><Twitter size={20} /></a>
                <a href="#" className="hover:text-emerald-500 transition-colors"><Instagram size={20} /></a>
              </div>
            </div>
            <div>
              <h4 className="text-white font-bold mb-6 heading-font">Explore</h4>
              <ul className="space-y-3 text-sm">
                <li><button onClick={() => navigate('events')} className="hover:text-emerald-500 transition-colors">Upcoming Races</button></li>
                <li><button onClick={() => navigate('tracking')} className="hover:text-emerald-500 transition-colors">Performance Dashboard</button></li>
                <li><button onClick={() => navigate('shop')} className="hover:text-emerald-500 transition-colors">Runner Gear</button></li>
                <li><button onClick={() => navigate('awareness')} className="hover:text-emerald-500 transition-colors">Training Tips</button></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-6 heading-font">Support</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="#" className="hover:text-emerald-500 transition-colors">FAQs</a></li>
                <li><a href="#" className="hover:text-emerald-500 transition-colors">Shipping Policy</a></li>
                <li><a href="#" className="hover:text-emerald-500 transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-emerald-500 transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-6 heading-font">Join Our Newsletter</h4>
              <p className="text-xs mb-4">Get weekly training plans and event updates.</p>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Enter email" 
                  className="bg-slate-800 border-none rounded-lg px-4 py-2 w-full text-sm focus:ring-2 focus:ring-emerald-500 outline-none"
                />
                <button className="bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-2 rounded-lg font-bold transition-colors">
                  GO
                </button>
              </div>
            </div>
          </div>
          <div className="text-center text-xs text-slate-500">
            &copy; {new Date().getFullYear()} RunnerBroz Performance. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

/* --- Sub-Sections --- */

const HomeSection: React.FC<{ onNavigate: (s: Section) => void }> = ({ onNavigate }) => (
  <div className="animate-in fade-in duration-700">
    {/* Hero Section */}
    <section className="relative h-[90vh] flex items-center overflow-hidden bg-slate-950">
      <img 
        src="https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&q=80&w=2000" 
        className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-overlay"
        alt="Runner in city"
      />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-6xl md:text-8xl font-black text-white leading-tight mb-6 animate-in slide-in-from-left duration-700">
            RUN THE <span className="text-emerald-500 italic underline decoration-4 underline-offset-8">UNSTOPPABLE</span>
          </h1>
          <p className="text-xl text-slate-300 mb-10 leading-relaxed font-light">
            Whether it's your first kilometer or your hundredth marathon, RunnerBroz is your companion on every stride. Track, Race, and Gear up with India's most passionate community.
          </p>
          <div className="flex flex-wrap gap-4">
            <button 
              onClick={() => onNavigate('tracking')}
              className="bg-emerald-500 hover:bg-emerald-400 text-white px-8 py-4 rounded-full font-bold text-lg flex items-center gap-2 transition-transform hover:scale-105"
            >
              Start Tracking <TrendingUp size={20} />
            </button>
            <button 
              onClick={() => onNavigate('events')}
              className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-full font-bold text-lg transition-transform hover:scale-105"
            >
              Find Races
            </button>
          </div>
        </div>
      </div>
    </section>

    {/* Quick Stats Banner */}
    <section className="bg-white py-12 border-b">
      <div className="container mx-auto px-4 flex flex-wrap justify-center gap-8 md:gap-24 text-center">
        <div>
          <div className="text-4xl font-bold text-slate-900 heading-font">50K+</div>
          <div className="text-slate-500 text-sm uppercase tracking-widest font-semibold">Active Runners</div>
        </div>
        <div>
          <div className="text-4xl font-bold text-slate-900 heading-font">200+</div>
          <div className="text-slate-500 text-sm uppercase tracking-widest font-semibold">Live Events</div>
        </div>
        <div>
          <div className="text-4xl font-bold text-slate-900 heading-font">1.2M</div>
          <div className="text-slate-500 text-sm uppercase tracking-widest font-semibold">KMs Logged</div>
        </div>
      </div>
    </section>

    {/* Featured Store Items */}
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl font-black mb-2">HOT DROPS</h2>
            <p className="text-slate-600">Premium RunnerBroz performance gear.</p>
          </div>
          <button onClick={() => onNavigate('shop')} className="text-emerald-600 font-bold flex items-center gap-1 hover:gap-2 transition-all">
            Shop All Merch <ChevronRight size={20} />
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {MOCK_MERCH.map((item) => (
            <div key={item.id} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="relative h-80 overflow-hidden">
                <img src={item.imageUrl} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold shadow-sm">
                  {item.category}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-emerald-600 transition-colors">{item.name}</h3>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-black">₹{item.price}</span>
                  <button className="p-3 bg-slate-900 text-white rounded-xl hover:bg-emerald-600 transition-colors">
                    <ShoppingBag size={20} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

const EventsSection: React.FC = () => {
  const [cityFilter, setCityFilter] = useState('All Cities');
  const cities = ['All Cities', 'Mumbai', 'Delhi', 'Pune', 'Goa'];

  const filteredEvents = cityFilter === 'All Cities' 
    ? MOCK_EVENTS 
    : MOCK_EVENTS.filter(e => e.city === cityFilter);

  return (
    <div className="pt-24 pb-20 animate-in slide-in-from-bottom-4 duration-500">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h1 className="text-5xl font-black mb-4">UPCOMING EVENTS</h1>
          <p className="text-slate-600 max-w-xl">
            Find the next challenge in your city. Register now and push your limits with the RunnerBroz community.
          </p>
        </div>

        {/* Filters */}
        <div className="flex gap-2 mb-10 overflow-x-auto pb-4 no-scrollbar">
          {cities.map(city => (
            <button 
              key={city}
              onClick={() => setCityFilter(city)}
              className={`px-6 py-2 rounded-full font-bold whitespace-nowrap transition-all ${cityFilter === city ? 'bg-emerald-600 text-white shadow-lg' : 'bg-white text-slate-600 hover:bg-slate-100'}`}
            >
              {city}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
          {filteredEvents.map(event => (
            <div key={event.id} className="group bg-white rounded-3xl overflow-hidden shadow-lg flex flex-col md:flex-row transition-transform hover:-translate-y-2 duration-300">
              <div className="md:w-1/2 relative h-64 md:h-auto overflow-hidden">
                <img src={event.imageUrl} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt={event.title} />
                <div className="absolute bottom-4 left-4 bg-emerald-600 text-white text-xs px-3 py-1 rounded-full font-bold">
                  {event.type}
                </div>
              </div>
              <div className="p-8 md:w-1/2 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-slate-500 text-sm mb-4">
                    <Calendar size={14} className="text-emerald-600" /> {event.date}
                  </div>
                  <h3 className="text-2xl font-black mb-2 heading-font tracking-tight">{event.title}</h3>
                  <div className="flex items-center gap-1 text-slate-600 mb-6 font-medium">
                    <MapPin size={16} /> {event.city}
                  </div>
                </div>
                <div className="flex justify-between items-center pt-6 border-t border-slate-100">
                  <span className="text-xl font-bold">₹{event.price} <span className="text-sm font-normal text-slate-400"> onwards</span></span>
                  <button className="bg-slate-900 text-white px-6 py-3 rounded-2xl font-bold hover:bg-emerald-600 transition-colors">
                    Register
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const TrackingSection: React.FC = () => (
  <div className="pt-24 pb-20 bg-slate-50 min-h-screen animate-in fade-in">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
        <div>
          <h1 className="text-4xl font-black">PERFORMANCE HUB</h1>
          <p className="text-slate-500">Welcome back, Runner! Here is your weekly grind.</p>
        </div>
        <div className="bg-white p-2 rounded-2xl shadow-sm border flex gap-1">
          <button className="px-4 py-2 bg-slate-900 text-white rounded-xl font-bold text-sm">WEEK</button>
          <button className="px-4 py-2 hover:bg-slate-100 rounded-xl font-bold text-sm">MONTH</button>
          <button className="px-4 py-2 hover:bg-slate-100 rounded-xl font-bold text-sm">YEAR</button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Chart Column */}
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <Activity className="text-emerald-500" /> Distance Covered (KM)
            </h3>
            <div className="h-80 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={MOCK_STATS}>
                  <defs>
                    <linearGradient id="colorDist" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                  <XAxis dataKey="date" axisLine={false} tickLine={false} />
                  <YAxis axisLine={false} tickLine={false} />
                  <Tooltip 
                    contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }}
                  />
                  <Area 
                    type="monotone" 
                    dataKey="distance" 
                    stroke="#10b981" 
                    strokeWidth={4}
                    fillOpacity={1} 
                    fill="url(#colorDist)" 
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex items-center gap-6">
              <div className="bg-emerald-50 p-4 rounded-2xl">
                <Clock className="text-emerald-600" size={32} />
              </div>
              <div>
                <p className="text-slate-500 text-sm font-medium">Avg. Pace</p>
                <p className="text-3xl font-black heading-font">5'12"<span className="text-lg font-normal"> /km</span></p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex items-center gap-6">
              <div className="bg-orange-50 p-4 rounded-2xl">
                <Zap className="text-orange-600" size={32} />
              </div>
              <div>
                <p className="text-slate-500 text-sm font-medium">Calories Burned</p>
                <p className="text-3xl font-black heading-font">3,420<span className="text-lg font-normal text-slate-400"> kcal</span></p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Summary Column */}
        <div className="space-y-8">
          <div className="bg-slate-900 text-white p-8 rounded-3xl shadow-xl relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-emerald-500 font-bold mb-2 uppercase tracking-widest text-xs">This Week</h3>
              <p className="text-5xl font-black mb-6 heading-font">48.8 KM</p>
              <div className="space-y-4">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-slate-400">Weekly Goal (60km)</span>
                  <span className="text-emerald-400">81%</span>
                </div>
                <div className="w-full bg-slate-800 h-2 rounded-full">
                  <div className="bg-emerald-500 h-2 rounded-full" style={{ width: '81%' }}></div>
                </div>
                <p className="text-xs text-slate-400 pt-2">You need 11.2km more to hit your target. Go for it!</p>
              </div>
            </div>
            <Activity className="absolute bottom-[-20px] right-[-20px] text-white/5" size={160} strokeWidth={0.5} />
          </div>

          <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
            <h3 className="font-bold mb-6 text-slate-800">RECENT LOGS</h3>
            <div className="space-y-6">
              {MOCK_STATS.filter(s => s.distance > 0).slice(0, 3).map((log, i) => (
                <div key={i} className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-500 font-bold text-xs uppercase">
                      {log.date}
                    </div>
                    <div>
                      <p className="font-bold text-sm">Morning Run</p>
                      <p className="text-xs text-slate-400">{log.duration}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold">{log.distance}km</p>
                    <p className="text-xs text-emerald-600">{log.pace}/km</p>
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full mt-8 py-3 bg-slate-50 text-slate-600 rounded-xl font-bold text-sm hover:bg-slate-100 transition-colors">
              VIEW HISTORY
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const ShopSection: React.FC = () => (
  <div className="pt-24 pb-20 animate-in fade-in duration-500">
    <div className="container mx-auto px-4">
      <div className="relative h-64 rounded-3xl overflow-hidden mb-16 bg-slate-900 flex items-center justify-center">
        <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=2000" className="absolute inset-0 w-full h-full object-cover opacity-60" alt="New Arrival" />
        <div className="relative text-center text-white px-4">
          <h2 className="text-4xl md:text-6xl font-black mb-4 heading-font italic">PRO SERIES 2.0</h2>
          <p className="text-xl opacity-90 max-w-md mx-auto">Engineered for the elite. Available now.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Sidebar Filters */}
        <div className="hidden md:block">
          <h3 className="font-bold mb-6 text-lg">CATEGORIES</h3>
          <ul className="space-y-4">
            {['New Arrivals', 'Mens Apparel', 'Womens Apparel', 'Accessories', 'Nutrition', 'Sale'].map(cat => (
              <li key={cat}>
                <button className="text-slate-600 hover:text-emerald-600 transition-colors flex justify-between w-full group">
                  {cat} <ChevronRight size={18} className="opacity-0 group-hover:opacity-100" />
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Products Grid */}
        <div className="md:col-span-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...MOCK_MERCH, ...MOCK_MERCH].map((item, idx) => (
              <div key={`${item.id}-${idx}`} className="group cursor-pointer">
                <div className="relative aspect-square rounded-2xl overflow-hidden bg-slate-100 mb-4">
                  <img src={item.imageUrl} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt={item.name} />
                  <button className="absolute bottom-4 right-4 p-4 bg-white shadow-xl rounded-2xl opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all hover:bg-emerald-600 hover:text-white">
                    <ShoppingBag size={20} />
                  </button>
                </div>
                <h3 className="font-bold text-slate-800">{item.name}</h3>
                <p className="text-sm text-slate-500 mb-2">{item.category}</p>
                <p className="font-black text-lg">₹{item.price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

const AwarenessSection: React.FC = () => (
  <div className="pt-24 pb-20 animate-in fade-in">
    <div className="container mx-auto px-4">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h1 className="text-5xl font-black mb-6">KNOWLEDGE BASE</h1>
        <p className="text-lg text-slate-600 leading-relaxed">
          Running is as much about the mind and body recovery as it is about the miles. Dive into our expert-curated guides on health, training, and running culture.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {MOCK_BLOG.map(article => (
          <div key={article.id} className="group cursor-pointer">
            <div className="relative h-64 rounded-3xl overflow-hidden mb-6 shadow-lg">
              <img src={article.imageUrl} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={article.title} />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-emerald-600">
                {article.category}
              </div>
            </div>
            <div className="flex items-center gap-2 text-slate-400 text-xs mb-3 font-semibold tracking-wide">
              <Clock size={12} /> {article.readTime} READ
            </div>
            <h3 className="text-2xl font-black mb-4 group-hover:text-emerald-600 transition-colors leading-tight">
              {article.title}
            </h3>
            <p className="text-slate-600 line-clamp-2 leading-relaxed mb-6 italic">
              "{article.excerpt}"
            </p>
            <button className="text-slate-900 font-bold border-b-2 border-slate-900 pb-1 hover:text-emerald-600 hover:border-emerald-600 transition-all">
              READ FULL ARTICLE
            </button>
          </div>
        ))}
      </div>

      {/* Wellness Tip Banner */}
      <div className="mt-24 bg-emerald-600 rounded-[3rem] p-12 text-white relative overflow-hidden shadow-2xl">
        <div className="relative z-10 max-w-2xl">
          <div className="flex items-center gap-2 mb-6">
            <Heart className="fill-white" size={24} />
            <span className="font-bold tracking-widest uppercase text-emerald-100">Daily Health Tip</span>
          </div>
          <h2 className="text-4xl font-black mb-6 heading-font">"THE 10% RULE"</h2>
          <p className="text-xl leading-relaxed font-light mb-8">
            To prevent overuse injuries, never increase your weekly mileage by more than 10% compared to the previous week. Consistency wins over intensity every single time.
          </p>
          <button className="bg-white text-emerald-600 px-8 py-4 rounded-2xl font-bold hover:scale-105 transition-transform">
            See More Tips
          </button>
        </div>
        <Activity className="absolute bottom-[-40px] right-[-40px] text-white/10" size={320} strokeWidth={0.5} />
      </div>
    </div>
  </div>
);

export default App;
