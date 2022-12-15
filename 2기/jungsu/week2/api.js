const ACCESS_KEY = "sBI2FsgQxLSIs5V_mcgewSlrD4SXsv1HfLQ7F1KkN58";
const API_URL = "https://api.unsplash.com";

export const request = async (url, options) => {
  try {
    const res = await fetch(url, options);

    if (res.ok) {
      return res.json();
    }
  } catch (error) {
    consol.error(error.message);
  }
};

export async function getRandomPhotos() {
  return await request(
    `${API_URL}/photos/random?count=12&client_id=${ACCESS_KEY}`
  );
}
