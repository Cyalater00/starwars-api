const BASE_URL = "https://swapi.dev/api";

export async function getAllStarships() {
  try {
    const response = await fetch(`${BASE_URL}/starships/`);
    if (!response.ok) {
      throw new Error("Failed to fetch starships");
    }
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("Error fetching starships:", error);
    return [];
  }
}
