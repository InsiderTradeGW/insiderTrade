export const getTrades = async () => {
  try {
    const response = await fetch(`/api/trades`);

    if (!response.ok) {
      throw new Error(
        `Fetch failed with status - ${response.status}, ${response.statusText}`,
      );
    }

    const data = await response.json();
    console.log(data);

    return { data: data, error: null };
  } catch (error) {
    console.warn(error);
    return { data: null, error };
  }
};
