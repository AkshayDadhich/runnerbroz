
export interface RunnerStats {
  date: string;
  distance: number;
  pace: string;
  duration: string;
}

export interface RunningEvent {
  id: string;
  title: string;
  date: string;
  city: string;
  type: 'Marathon' | 'Half-Marathon' | '10K' | '5K' | 'Trail Run';
  price: number;
  imageUrl: string;
}

export interface Merchandise {
  id: string;
  name: string;
  category: string;
  price: number;
  imageUrl: string;
  description: string;
}

export interface BlogArticle {
  id: string;
  title: string;
  excerpt: string;
  category: 'Health' | 'Awareness' | 'Training';
  readTime: string;
  imageUrl: string;
}
