import { ADMIN_ROLE } from 'consts';

export const isAdmin = (roles = []) => {
  return roles.includes(ADMIN_ROLE)
}