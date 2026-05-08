export const boolFromEnv = (value: string | undefined, fallback: boolean) => {
  if (!value) {
    return fallback;
  }

  return value.toLowerCase() === "true";
};

export const toEmailAddress = (value: string | undefined) => {
  if (!value) {
    return "";
  }

  const match = value.match(/<([^>]+)>/);
  return (match?.[1] ?? value).trim();
};
