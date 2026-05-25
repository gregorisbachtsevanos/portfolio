import { useApp } from "@/lib/AppContext";

export const stats = (t: ReturnType<typeof useApp>["t"]) => [
  { value: "5+", label: t.hero.stat_years },
  { value: "30+", label: t.hero.stat_projects },
  { value: "12+", label: t.hero.stat_clients },
];
