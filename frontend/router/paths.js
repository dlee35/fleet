export default {
  ADMIN_DASHBOARD: '/fleet/admin',
  ADMIN_SETTINGS: '/fleet/admin/settings',
  ALL_PACKS: '/fleet/packs/all',
  EDIT_QUERY: (query) => {
    return `/fleet/queries/${query.id}`;
  },
  FORGOT_PASSWORD: '/fleet/login/forgot',
  HOME: '/fleet/',
  KOLIDE_500: '/fleet/500',
  LOGIN: '/fleet/login',
  LOGOUT: '/fleet/logout',
  MANAGE_HOSTS: '/fleet/hosts/manage',
  NEW_PACK: '/fleet/packs/new',
  NEW_QUERY: '/fleet/queries/new',
  RESET_PASSWORD: '/fleet/login/reset',
  SETUP: '/fleet/setup',
  USER_SETTINGS: '/fleet/settings',
};
