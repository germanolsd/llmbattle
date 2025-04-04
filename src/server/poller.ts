export async function fetchUrl(url: string) {
  try {
    const response = await fetch(url);
    console.log(`Polled ${url}, status: ${response.status}`);
    return response;
  } catch (error) {
    console.error(`Error polling ${url}:`, error);
  }
}
