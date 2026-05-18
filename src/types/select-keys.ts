import type { AnyObject } from 'xenopomp-essentials';

export type SelectKeys<R extends AnyObject, K extends keyof R> = K;
