const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: '8cefed120dd3bd80ba4558a55f9ab115',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`

}

export default apiConfig;