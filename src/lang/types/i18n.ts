import { content } from "../en";

type Join<K, P> = K extends string | number
	? P extends string | number
		? `${K}.${P}`
		: never
	: never;

export type NestedKeys<T> = T extends readonly (infer U)[]
	? `${number}` | Join<`${number}`, NestedKeys<U>>
	: T extends object
		? {
				[K in Extract<keyof T, string | number>]: T[K] extends object
					? `${K}` | Join<`${K}`, NestedKeys<T[K]>>
					: `${K}`;
			}[Extract<keyof T, string | number>]
		: never;

export type TranslationKey = NestedKeys<typeof content>;

export type PathValue<T, P extends string> =
	P extends `${infer K}.${infer Rest}`
		? K extends keyof T
			? PathValue<T[K], Rest>
			: K extends `${number}`
				? T extends readonly (infer U)[]
					? PathValue<U, Rest>
					: never
				: never
		: P extends keyof T
			? T[P]
			: P extends `${number}`
				? T extends readonly (infer U)[]
					? U
					: never
				: never;

export type TranslationValue<K extends TranslationKey> = PathValue<
	typeof content,
	K
>;
