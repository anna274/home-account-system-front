const NAV_LINKS = [
  {
    id: 1,
    to: '/bank-accounts/',
    text: 'Счета',
  },
  {
    id: 2,
    to: '/categories/',
    text: 'Категории',
  },
  {
    id: 3,
    to: '/incomes/',
    text: 'Доходы',
  },
  {
    id: 5,
    to: '/expenses/',
    text: 'Расходы',
  },
  {
    id: 6,
    to: '/statistics/',
    text: 'Отчёты',
  },

];

const PROFILE_NAV_LINKS = [
  {
  id: 0,
  to: '/members/',
  text: 'Участники',
  },
  {
    id: 7,
    to: '/settings/',
    text: 'Настройки',
  },
  {
    id: 8,
    to: '/logout/',
    text: 'Выйти',
  },
]

const NAV_LINKS_ADMIN = [
  {
    id: 0,
    to: '/users/',
    text: 'Пользователи',
  },
  {
    id: 1,
    to: '/categories/',
    text: 'Категории',
  }
];

const PROFILE_NAV_LINKS_ADMIN = [
  {
    id: 2,
    to: '/settings/',
    text: 'Настройки',
  },
  {
    id: 4,
    to: '/logout/',
    text: 'Выйти',
  },
]

export { NAV_LINKS, NAV_LINKS_ADMIN, PROFILE_NAV_LINKS, PROFILE_NAV_LINKS_ADMIN };
