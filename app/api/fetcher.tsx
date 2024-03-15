type QueryParams = {
    [key: string]: string;
}

export default async function fetcher(endpoint: string, queryParams: QueryParams = {}) {
    // can't access env variables from client side
    const baseURL = (process.env.BASE_JIKAN_URL || 'https://api.jikan.moe/v4');
    const url = new URL(`${baseURL}${endpoint}`);

    
    
    // Add query parameters to the URL
    Object.keys(queryParams).forEach(key => {
        url.searchParams.append(key, queryParams[key]);
    });
    
    url.searchParams.append('sfw', 'true');

    try {
        const response = await fetch(url.toString(), { next: { revalidate: 14400 } });
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


export const AnotherFetcher = async (url: string) => {
    const res = await fetch(url);
    const data = await res.json();
  
    if (!res.ok) {
      const error = new Error(data.message);
      throw error;
    }
  
    return data;
  };