export const getDataFromAPI = async (url, setData) => {
  try {
    const res = await fetch(url);
    if (!res.ok) {
      const message = `Ocurrio un error: ${res.status} - ${res.statusText}`;
      throw new Error(message);
    }
    const data = await res.json();
    setData(data);
  } catch (error) {
    setData(error);
  }
};
