type QueryParams = {
    [key: string]: string;
}

export default async function fetcher(site="kitsu",endpoint: string, queryParams: QueryParams = {}) {
    // can't access env variables from client side
    const baseURL = site === "kitsu" ? (process.env.BASE_KITSU_URL || 'https://kitsu.io/api/edge' ) : (process.env.BASE_JIKAN_URL || 'https://api.jikan.moe/v4');
    const url = new URL(`${baseURL}${endpoint}`);

    
    // Add query parameters to the URL
    Object.keys(queryParams).forEach(key => {
        url.searchParams.append(key, queryParams[key]);
    });

    try {
        const response = await fetch(url.toString(), { next: { revalidate: 3600 } });
        if (!response.ok) {
            throw new Error(`Failed to fetch: ${response.statusText}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        // Handle any fetch errors
        console.error('Fetch error:', error);
        throw new Error('An error occurred while fetching data.');
    }
}
