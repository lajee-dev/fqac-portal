export type LecturerStat = {
  level: string;
  count: number;
};

export async function getLecturerStats(): Promise<LecturerStat[]> {
  const url = process.env.SHEET_CSV_URL;

  if (!url) {
    return [];
  }

  try {
    const response = await fetch(url, { cache: "no-store" });

    if (!response.ok) {
      throw new Error(`Lecturer stats request failed: ${response.status}`);
    }

    const csv = await response.text();
    const lines = csv
      .split(/\r?\n/)
      .map((line) => line.trim())
      .filter(Boolean);

    if (lines.length < 2) {
      return [];
    }

    const headers = lines[0].split(",").map((header) => header.trim());
    const levelIndex = headers.indexOf("Level");
    const countIndex = headers.indexOf("Count");

    if (levelIndex === -1 || countIndex === -1) {
      return [];
    }

    return lines.slice(1).reduce<LecturerStat[]>((stats, line) => {
      const columns = line.split(",").map((column) => column.trim());
      const level = columns[levelIndex];
      const countValue = columns[countIndex];
      const count = Number(countValue);

      if (level && countValue && Number.isFinite(count)) {
        stats.push({ level, count });
      }

      return stats;
    }, []);
  } catch (error) {
    console.error("Unable to load lecturer statistics", error);
    return [];
  }
}
