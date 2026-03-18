export function getValue(obj: unknown, path: string): unknown {
	return path.split(".").reduce<unknown>((acc, key) => {
		if (acc === undefined || acc === null) {
			return undefined;
		}

		if (Array.isArray(acc)) {
			const index = Number(key);
			return Number.isNaN(index) ? undefined : acc[index];
		}

		if (typeof acc === "object") {
			return (acc as Record<string, unknown>)[key];
		}

		return undefined;
	}, obj);
}
