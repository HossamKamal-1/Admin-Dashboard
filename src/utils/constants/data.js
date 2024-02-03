const menuList = [
  {
    id: 1,
    title: 'main',
    listItems: [
      {
        id: 1,
        title: 'Homepage',
        url: '/',
        icon: 'home.svg',
      },
      {
        id: 2,
        title: 'Profile',
        url: '/users/1',
        icon: 'user.svg',
      },
    ],
  },
  {
    id: 2,
    title: 'lists',
    listItems: [
      {
        id: 1,
        title: 'Users',
        url: '/users',
        icon: 'user.svg',
      },
      {
        id: 2,
        title: 'Products',
        url: '/products',
        icon: 'product.svg',
      },
      {
        id: 3,
        title: 'Orders',
        url: '/orders',
        icon: 'order.svg',
      },
      {
        id: 4,
        title: 'Posts',
        url: '/posts',
        icon: 'post2.svg',
      },
    ],
  },
  {
    id: 3,
    title: 'general',
    listItems: [
      {
        id: 1,
        title: 'Elements',
        url: '/elements',
        icon: 'element.svg',
      },
      {
        id: 2,
        title: 'Notes',
        url: '/notes',
        icon: 'note.svg',
      },
      {
        id: 3,
        title: 'Forms',
        url: '/forms',
        icon: 'form.svg',
      },
      {
        id: 4,
        title: 'Calendar',
        url: '/calender',
        icon: 'calendar.svg',
      },
    ],
  },
  {
    id: 4,
    title: 'Maintenance',
    listItems: [
      {
        id: 1,
        title: 'Settings',
        url: '/settings',
        icon: 'setting.svg',
      },
      {
        id: 2,
        title: 'Backups',
        url: '/backup',
        icon: 'backup.svg',
      },
    ],
  },
  {
    id: 5,
    title: 'analytics',
    listItems: [
      {
        id: 1,
        title: 'Charts',
        url: '/charts',
        icon: 'chart.svg',
      },
      {
        id: 2,
        title: 'Logs',
        url: '/logs',
        icon: 'log.svg',
      },
    ],
  },
];
const topDealsUsersList = [
  {
    id: 100,
    img: 'noavatar.png',
    username: 'Lina Garza',
    email: 'duvtejno@epeceslo.eh',
    amount: '4666',
  },
  {
    id: 35,
    img: 'noavatar.png',
    username: 'Shane Hanson',
    email: 'mec@keru.gt',
    amount: '4542',
  },
  {
    id: 80,
    img: 'noavatar.png',
    username: 'Nathan Ryan',
    email: 'emcirrac@atvibsam.fo',
    amount: '3890',
  },
  {
    id: 94,
    img: 'noavatar.png',
    username: 'Mae Cain',
    email: 'ihupivhu@ipa.st',
    amount: '4563',
  },
  {
    id: 17,
    img: 'noavatar.png',
    username: 'Henrietta Lane',
    email: 'kupawuj@jutidpa.ao',
    amount: '3716',
  },
  {
    id: 82,
    img: 'noavatar.png',
    username: 'Bessie Saunders',
    email: 'vi@banowkib.vc',
    amount: '4682',
  },
  {
    id: 90,
    img: 'noavatar.png',
    username: 'Christina Frazier',
    email: 'ehe@jehepij.fo',
    amount: '4610',
  },
];
const lineChartBoxUser = {
  color: '#8884d8',
  icon: '/userIcon.svg',
  title: 'Total Users',
  number: '11.238',
  dataKey: 'users',
  percentage: 45,
  chartData: [
    { name: 'Sun', users: 400 },
    { name: 'Mon', users: 600 },
    { name: 'Tue', users: 500 },
    { name: 'Wed', users: 700 },
    { name: 'Thu', users: 400 },
    { name: 'Fri', users: 500 },
    { name: 'Sat', users: 450 },
  ],
};
const lineChartBoxProduct = {
  color: 'skyblue',
  icon: '/productIcon.svg',
  title: 'Total Products',
  number: '238',
  dataKey: 'products',
  percentage: 21,
  chartData: [
    { name: 'Sun', products: 400 },
    { name: 'Mon', products: 600 },
    { name: 'Tue', products: 300 },
    { name: 'Wed', products: 200 },
    { name: 'Thu', products: 400 },
    { name: 'Fri', products: 550 },
    { name: 'Sat', products: 450 },
  ],
};
const lineChartBoxRevenue = {
  color: 'teal',
  icon: '/revenueIcon.svg',
  title: 'Total Revenue',
  number: '$56.432',
  dataKey: 'revenue',
  percentage: -12,
  chartData: [
    { name: 'Sun', revenue: 400 },
    { name: 'Mon', revenue: 478 },
    { name: 'Tue', revenue: 666 },
    { name: 'Wed', revenue: 700 },
    { name: 'Thu', revenue: 400 },
    { name: 'Fri', revenue: 700 },
    { name: 'Sat', revenue: 450 },
  ],
};
const lineChartBoxConversion = {
  color: 'gold',
  icon: '/conversionIcon.svg',
  title: 'Total Ratio',
  number: '2.6',
  dataKey: 'ratio',
  percentage: 12,
  chartData: [
    { name: 'Sun', ratio: 400 },
    { name: 'Mon', ratio: 600 },
    { name: 'Tue', ratio: 500 },
    { name: 'Wed', ratio: 700 },
    { name: 'Thu', ratio: 400 },
    { name: 'Fri', ratio: 500 },
    { name: 'Sat', ratio: 450 },
  ],
};
const barChartBoxRevenue = {
  color: '#8884d8',
  title: 'Profit Earned',
  dataKey: 'profit',
  chartData: [
    { name: 'Sun', profit: 400 },
    { name: 'Mon', profit: 600 },
    { name: 'Tue', profit: 944 },
    { name: 'Wed', profit: 335 },
    { name: 'Thu', profit: 400 },
    { name: 'Fri', profit: 500 },
    { name: 'Sat', profit: 1200 },
  ],
};
const barChartBoxVisit = {
  color: '#FF8042',
  title: 'Total Visit',
  dataKey: 'visit',
  chartData: [
    { name: 'Sun', visit: 4000 },
    { name: 'Mon', visit: 5000 },
    { name: 'Tue', visit: 488 },
    { name: 'Wed', visit: 2000 },
    { name: 'Thu', visit: 400 },
    { name: 'Fri', visit: 500 },
    { name: 'Sat', visit: 100 },
  ],
};

const simpleLineChartUserStats = {
  dataKeys: [
    { name: 'visits', color: '#82ca9d' },
    { name: 'clicks', color: '#8884d8' },
  ],
  data: [
    {
      name: 'Sun',
      visits: 4000,
      clicks: 3000,
    },
    {
      name: 'Mon',
      visits: 4500,
      clicks: 3200,
    },
    {
      name: 'Tue',
      visits: 2000,
      clicks: 1500,
    },
    {
      name: 'Wed',
      visits: 358,
      clicks: 300,
    },
    {
      name: 'Thu',
      visits: 600,
      clicks: 350,
    },
    {
      name: 'Fri',
      visits: 7000,
      clicks: 3500,
    },
    {
      name: 'Sat',
      visits: 4500,
      clicks: 3060,
    },
  ],
};
const singleUser = {
  id: 1,
  title: 'John Doe',
  img: 'https://i.pravatar.cc/300',
  info: {
    username: 'JohnDoe99',
    fullname: 'John Doe',
    email: 'johndoe@gmail.com',
    phone: '123 123 123',
    verified: true,
  },
  chartData: simpleLineChartUserStats,
  activities: [
    { text: 'John Doe added item playstaiton 3 into cart', time: '3 days ago' },
    { text: 'John Doe added item playstaiton 3 into cart', time: '3 days ago' },
    { text: 'John Doe added item playstaiton 3 into cart', time: '3 days ago' },
    { text: 'John Doe added item playstaiton 3 into cart', time: '3 days ago' },
    { text: 'John Doe added item playstaiton 3 into cart', time: '3 days ago' },
    { text: 'John Doe added item playstaiton 3 into cart', time: '3 days ago' },
    { text: 'John Doe added item playstaiton 3 into cart', time: '3 days ago' },
  ],
};

const simpleLineChartProductStats = {
  dataKeys: [
    { name: 'visits', color: '#82ca9d' },
    { name: 'orders', color: '#8884d8' },
  ],
  data: [
    {
      name: 'Sun',
      visits: 4000,
      orders: 3000,
    },
    {
      name: 'Mon',
      visits: 4500,
      orders: 3200,
    },
    {
      name: 'Tue',
      visits: 2000,
      orders: 1500,
    },
    {
      name: 'Wed',
      visits: 358,
      orders: 300,
    },
    {
      name: 'Thu',
      visits: 600,
      orders: 350,
    },
    {
      name: 'Fri',
      visits: 7000,
      orders: 3500,
    },
    {
      name: 'Sat',
      visits: 4500,
      orders: 3060,
    },
  ],
};
const singleProduct = {
  id: 1,
  title: 'Playstation 5 ',
  img: 'https://i.pravatar.cc/300',
  info: {
    productId: 'ps55da232',
    color: 'white',
    price: '$599.99',
    producer: 'Sony',
    export: 'Japan',
  },
  chartData: simpleLineChartProductStats,
  activities: [
    { text: 'John Doe added item playstaiton 3 into cart', time: '3 days ago' },
    { text: 'John Doe added item playstaiton 3 into cart', time: '3 days ago' },
    { text: 'John Doe added item playstaiton 3 into cart', time: '3 days ago' },
    { text: 'John Doe added item playstaiton 3 into cart', time: '3 days ago' },
    { text: 'John Doe added item playstaiton 3 into cart', time: '3 days ago' },
    { text: 'John Doe added item playstaiton 3 into cart', time: '3 days ago' },
    { text: 'John Doe added item playstaiton 3 into cart', time: '3 days ago' },
  ],
};
export {
  menuList,
  topDealsUsersList,
  lineChartBoxUser,
  lineChartBoxProduct,
  lineChartBoxRevenue,
  lineChartBoxConversion,
  barChartBoxVisit,
  barChartBoxRevenue,
  singleProduct,
  singleUser,
};
