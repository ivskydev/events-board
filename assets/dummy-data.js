function shuffle(arr) {
  const array = [...arr];
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function generateRandomId(min = 1, max = 1000) {
  return Math.floor((Math.random() * (max - min + 1) + min) * max);
}

const defaultColumns = {
  upcoming: {
    label: 'Upcoming',
    bg: 'bg-amber-100/60',
    color: 'text-amber-900',
    count: {
      bg: 'bg-amber-400/20',
      color: 'text-amber-700',
    }
  },
  onGoing: {
    label: 'On Going',
    bg: 'bg-blue-100/70',
    color: 'text-blue-900',
    count: {
      bg: 'bg-blue-400/20',
      color: 'text-blue-700',
    }
  },
  inReview: {
    label: 'In Review',
    bg: 'bg-violet-100/80',
    color: 'text-violet-950',
    count: {
      bg: 'bg-violet-400/20',
      color: 'text-violet-800',
    }
  },
  completed: {
    label: 'Completed',
    bg: 'bg-green-100/80',
    color: 'text-green-900',
    count: {
      bg: 'bg-green-400/20',
      color: 'text-green-700',
    }
  },
};

const defaultPriorities = {
  low: {
    label: 'Low',
    bg: 'bg-indigo-100',
    color: 'text-indigo-600',
  },
  mid: {
    label: 'Mid',
    bg: 'bg-amber-100',
    color: 'text-amber-600',
  },
  high: {
    label: 'High',
    bg: 'bg-rose-100',
    color: 'text-rose-600',
  },
};

const defaultTags = [
  {
    id: 0,
    label: "UX Research",
  },
  {
    id: 1,
    label: "Development",
  },
  {
    id: 2,
    label: "Moodboards",
  },
  {
    id: 3,
    label: "Copywriting",
  },
  {
    id: 4,
    label: "Branding",
  },
  {
    id: 5,
    label: "Planning",
  },
  {
    id: 6,
    label: "UI Design",
  },
  {
    id: 7,
    label: "Logo Design",
  }
];

const people = [
  {
    id: generateRandomId(),
    name: 'Leslie Alexander',
    email: 'leslie.alexander@example.com',
    role: 'Co-Founder / CEO',
    imageUrl:
      '/users/photo-1494790108377-be9c29b29330.jfif',
    lastSeen: '3h ago',
    lastSeenDateTime: '2023-01-23T13:23Z',
  },
  {
    id: generateRandomId(),
    name: 'Esther Howard',
    email: 'esther.howard@example.com',
    role: 'Co-Founder / CTO',
    imageUrl:
      '/users/photo-1520813792240-56fc4a3765a7.jfif',
    lastSeen: '3h ago',
    lastSeenDateTime: '2023-01-23T13:23Z',
  },
  {
    id: generateRandomId(),
    name: 'Dries Vincent',
    email: 'dries.vincent@example.com',
    role: 'Business Relations',
    imageUrl:
      '/users/photo-1506794778202-cad84cf45f1d.jfif',
    lastSeen: null,
  },
  {
    id: generateRandomId(),
    name: 'Lindsay Walton',
    email: 'lindsay.walton@example.com',
    role: 'Front-end Developer',
    imageUrl:
      '/users/photo-1517841905240-472988babdf9.jfif',
    lastSeen: '3h ago',
    lastSeenDateTime: '2023-01-23T13:23Z',
  },
  {
    id: generateRandomId(),
    name: 'Courtney Henry',
    email: 'courtney.henry@example.com',
    role: 'Designer',
    imageUrl:
      '/users/photo-1438761681033-6461ffad8d80.jfif',
    lastSeen: '3h ago',
    lastSeenDateTime: '2023-01-23T13:23Z',
  },
  {
    id: generateRandomId(),
    name: 'Tom Cook',
    email: 'tom.cook@example.com',
    role: 'Director of Product',
    imageUrl:
      '/users/photo-1472099645785-5658abf4ff4e.jfif',
    lastSeen: null,
  },
  {
    id: generateRandomId(),
    name: 'Theresa Webb',
    email: 'theresa.webb@example.com',
    role: 'Global Division Officer',
    imageUrl:
      '/users/photo-1488426862026-3ee34a7d66df.jfif',
    lastSeen: null,
  },
];

const people2 = [
  {
    id: generateRandomId(),
    name: 'Theresa Webb',
    email: 'theresa.webb@example.com',
    role: 'Global Division Officer',
    imageUrl:
      '/users/photo-1488426862026-3ee34a7d66df.jfif',
    lastSeen: null,
  },
  {
    id: generateRandomId(),
    name: 'Esther Howard',
    email: 'esther.howard@example.com',
    role: 'Co-Founder / CTO',
    imageUrl:
      '/users/photo-1520813792240-56fc4a3765a7.jfif',
    lastSeen: '3h ago',
    lastSeenDateTime: '2023-01-23T13:23Z',
  },
  {
    id: generateRandomId(),
    name: 'Tom Cook',
    email: 'tom.cook@example.com',
    role: 'Director of Product',
    imageUrl:
      '/users/photo-1472099645785-5658abf4ff4e.jfif',
    lastSeen: null,
  },
  {
    id: generateRandomId(),
    name: 'Leslie Alexander',
    email: 'leslie.alexander@example.com',
    role: 'Co-Founder / CEO',
    imageUrl:
      '/users/photo-1494790108377-be9c29b29330.jfif',
    lastSeen: '3h ago',
    lastSeenDateTime: '2023-01-23T13:23Z',
  },
  {
    id: generateRandomId(),
    name: 'Courtney Henry',
    email: 'courtney.henry@example.com',
    role: 'Designer',
    imageUrl:
      '/users/photo-1438761681033-6461ffad8d80.jfif',
    lastSeen: '3h ago',
    lastSeenDateTime: '2023-01-23T13:23Z',
  },
  {
    id: generateRandomId(),
    name: 'Lindsay Walton',
    email: 'lindsay.walton@example.com',
    role: 'Front-end Developer',
    imageUrl:
      '/users/photo-1517841905240-472988babdf9.jfif',
    lastSeen: '3h ago',
    lastSeenDateTime: '2023-01-23T13:23Z',
  },
];

export {
  defaultColumns,
  defaultPriorities,
  defaultTags,
  people,
  people2,
};