export default [
  { 'header': 'Admin' },
  { 'href': '/', 'title': 'Home', 'icon': 'home' },
  { 'href': '/crud/types', 'title': 'App Builder', 'icon': 'view_list' },
  { 'href': '/crud/posts', 'title': 'Email Builder', 'icon': 'view_list' },
  { 'href': '/crud/posts/create', 'title': 'Documents', 'icon': 'note_add' },
  { 'href': '/crud/users', 'title': 'Users', 'icon': 'people' },
  {
    'title': 'Pages',
    'icon': 'domain',
    'items': [
      { 'href': '/example', 'title': 'Example' },
      { 'href': '/about', 'title': 'About' }
    ]
  },
  { divider: true },
  { 'header': 'System' },
  { 'href': '/settings', 'title': 'Settings', 'icon': 'settings' },

  { 'href': '/login', 'icon': 'lock', 'title': 'Logout' }
]
