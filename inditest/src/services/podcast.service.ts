export const getPodcast = async () => {
    return fetch(`https://api.allorigins.win/raw?url=${encodeURIComponent('https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json')}`)
        .then(response => {
            if (response.ok) return response.json()
            throw new Error('Network response was not ok.')
        })
        .then(data => {
            console.log(data)
            return data;
        });
}
