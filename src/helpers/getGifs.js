export const getGifs = async ( category ) => {
    const apiKey = "tidLxBRgPkghOBQvK15AC4MPoZS4I3vh";
    const limit = 10;
    const url = "https://api.giphy.com/v1/gifs/search";
    const request = `${url}?api_key=${apiKey}&q=${ encodeURI(category) }&limit=${limit}`;
    const response = await fetch(request);
    const { data } = await response.json();

    const gifs = data.map((img) => {
      return {
        id: img.id,
        title: img.title,
        url: img.images?.downsized_medium.url,
      };
    });

    return gifs
    // console.log(gifs);
  };