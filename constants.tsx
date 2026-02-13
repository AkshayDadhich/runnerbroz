
import { RunningEvent, Merchandise, BlogArticle, RunnerStats } from './types';

export const COLORS = {
  primary: '#0F172A', // Navy blue from logo
  accent: '#10B981',  // Emerald green for "health/growth"
  background: '#F8FAFC',
};

export const MOCK_STATS: RunnerStats[] = [
  { date: 'Mon', distance: 5.2, pace: '5:10', duration: '27m' },
  { date: 'Tue', distance: 7.0, pace: '5:05', duration: '35m' },
  { date: 'Wed', distance: 0, pace: '-', duration: '-' },
  { date: 'Thu', distance: 10.5, pace: '4:58', duration: '52m' },
  { date: 'Fri', distance: 5.0, pace: '5:15', duration: '26m' },
  { date: 'Sat', distance: 21.1, pace: '5:20', duration: '1h 52m' },
  { date: 'Sun', distance: 0, pace: '-', duration: '-' },
];

export const MOCK_EVENTS: RunningEvent[] = [
  {
    id: '1',
    title: 'City Marathon 2024',
    date: 'Oct 15, 2024',
    city: 'Mumbai',
    type: 'Marathon',
    price: 1500,
    imageUrl: 'https://images.unsplash.com/photo-1452626038306-9aae5e071dd3?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '2',
    title: 'Green Park 10K',
    date: 'Nov 02, 2024',
    city: 'Delhi',
    type: '10K',
    price: 600,
    imageUrl: 'https://images.unsplash.com/photo-1530549387074-d5622d99fc20?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '3',
    title: 'Trail Blaze Challenge',
    date: 'Dec 12, 2024',
    city: 'Pune',
    type: 'Trail Run',
    price: 800,
    imageUrl: 'https://images.unsplash.com/photo-1533560904424-a0c61dc306fc?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '4',
    title: 'Coastal Half Marathon',
    date: 'Jan 20, 2025',
    city: 'Goa',
    type: 'Half-Marathon',
    price: 1200,
    imageUrl: 'https://images.unsplash.com/photo-1532444458054-015fddf2b2cd?auto=format&fit=crop&q=80&w=800'
  }
];

export const MOCK_MERCH: Merchandise[] = [
  {
    id: 'm1',
    name: 'RunnerBroz Pro Tech Tee',
    category: 'Apparel',
    price: 1299,
    description: 'Moisture-wicking fabric designed for peak performance.',
    imageUrl: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'm2',
    name: 'AeroStrike Running Shorts',
    category: 'Apparel',
    price: 899,
    description: 'Ultra-lightweight with built-in compression.',
    imageUrl: 'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'm3',
    name: 'HydroFuel Flask 1L',
    category: 'Accessories',
    price: 499,
    description: 'BPA-free ergonomic water bottle.',
    imageUrl: 'https://images.unsplash.com/photo-1523362628744-4cdd87e37047?auto=format&fit=crop&q=80&w=800'
  }
];

export const MOCK_BLOG: BlogArticle[] = [
  {
    id: 'b1',
    title: 'Mastering Your Breathing Patterns',
    excerpt: 'Learn the rhythmic breathing technique to boost endurance and reduce fatigue.',
    category: 'Training',
    readTime: '5 min',
    imageUrl: 'https://images.unsplash.com/photo-1444491741275-3747c53c99b4?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'b2',
    title: 'Post-Run Nutrition for Recovery',
    excerpt: 'The ultimate guide to what you should eat after a long session.',
    category: 'Health',
    readTime: '7 min',
    imageUrl: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'b3',
    title: 'How Running Transforms Your Mental Health',
    excerpt: 'Exploring the science behind the "Runner\'s High" and long-term clarity.',
    category: 'Awareness',
    readTime: '4 min',
    imageUrl: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?auto=format&fit=crop&q=80&w=800'
  }
];
