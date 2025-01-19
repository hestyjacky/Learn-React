export const getGifs = async(category) => {
    const protocolo = 'https://';
    const api_key = 'gllVDHGnt9RpcEytXKPY6gXkVFQVcFhI';
    const limite = 10;
    const url = `${protocolo}api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${category}&limit=${limite}`;

    const resp = await fetch(url);
    const {data} = await resp.json();

    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));
    
    return gifs;
}