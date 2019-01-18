export default (admin) => {
  const adminNavItems = [
    {
      icon: 'admin',
      name: 'Admin',
      location: {
        regex: /^\/fleet\/admin/,
        pathname: '/fleet/admin/users',
      },
      subItems: [
        {
          icon: 'admin',
          name: 'Manage Users',
          location: {
            regex: /\/fleet\/admin\/users/,
            pathname: '/fleet/admin/users',
          },
        },
        {
          icon: 'user-settings',
          name: 'App Settings',
          location: {
            regex: /\/fleet\/admin\/settings/,
            pathname: '/fleet/admin/settings',
          },
        },
      ],
    },
  ];

  const userNavItems = [
    {
      icon: 'hosts',
      name: 'Hosts',
      location: {
        regex: /^\/fleet\/hosts/,
        pathname: '/fleet/hosts/manage',
      },
      subItems: [],
    },
    {
      icon: 'query',
      name: 'Query',
      location: {
        regex: /^\/fleet\/queries/,
        pathname: '/fleet/queries/manage',
      },
      subItems: [
        {
          icon: 'query',
          name: 'Manage Queries',
          location: {
            regex: /\/fleet\/queries\/manage/,
            pathname: '/fleet/queries/manage',
          },
        },
        {
          icon: 'pencil',
          name: 'New Query',
          location: {
            regex: /\/fleet\/queries\/new/,
            pathname: '/fleet/queries/new',
          },
        },
      ],
    },
    {
      icon: 'packs',
      name: 'Packs',
      location: {
        regex: /^\/fleet\/packs/,
        pathname: '/fleet/packs/manage',
      },
      subItems: [
        {
          icon: 'packs',
          name: 'Manage Packs',
          location: {
            regex: /\/fleet\/packs\/manage/,
            pathname: '/fleet/packs/manage',
          },
        },
        {
          icon: 'pencil',
          name: 'New Pack',
          location: {
            regex: /\/fleet\/packs\/new/,
            pathname: '/fleet/packs/new',
          },
        },
      ],
    },
    {
      icon: 'help',
      name: 'Help',
      location: {
        regex: /^\/fleet\/help/,
        pathname: 'https://github.com/kolide/fleet/blob/master/docs/README.md',
      },
      subItems: [],
    },
  ];

  if (admin) {
    return [
      ...userNavItems,
      ...adminNavItems,
    ];
  }

  return userNavItems;
};
