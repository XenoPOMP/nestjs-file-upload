import type { StrictOmit } from 'xenopomp-essentials';

import type { User } from '~prisma/client';

import type { SelectKeys } from '@/types/select-keys';

export type UserSensitiveKeys = SelectKeys<
  User,
  'password' | 'login' | 'id' | 'updatedAt'
>;
export type SanitizedUser = StrictOmit<User, UserSensitiveKeys>;
