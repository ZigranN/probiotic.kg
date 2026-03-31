export type ScenarioKey =
    | "bloating"
    | "stool"
    | "immunity"
    | "energy"
    | "women"
    | "kids"
    | "microbiome"; // ✅ добавили

export const SCENARIOS: { key: ScenarioKey; title: string }[] = [
    { key: "bloating", title: "Вздутие / дискомфорт" },
    { key: "stool", title: "Нестабильный стул" },
    { key: "immunity", title: "Иммунная поддержка" },
    { key: "energy", title: "Энергия / ресурс" },
    { key: "women", title: "Женский комфорт" },
    { key: "kids", title: "Для семьи и детей" },
    { key: "microbiome", title: "Микробиом: почему кишечник влияет на всё" }, // ✅
];

export const SCENARIO_TO_SLUGS: Record<ScenarioKey, string[]> = {
    bloating: ["maxilin-liquid", "maxilin-dry"],
    stool: ["maxilin-liquid", "maxilin-dry"],
    immunity: ["maxilin-liquid", "maxilin-dry", "l-arginine"],
    energy: ["l-arginine"],
    women: ["maxilin-suppositories"],
    kids: ["maxilin-liquid", "maxilin-dry"],
    microbiome: ["maxilin-liquid", "maxilin-dry"], // ✅ выбери что показывать
};
