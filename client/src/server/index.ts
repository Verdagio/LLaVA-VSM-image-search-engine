import axios from "axios";

export const fetchData = async (query: string): Promise<any> => {
    try {
        const response = await axios.post<any>(
            'http://localhost:8000/search', // TODO: Replace with an environment variable
            { query },
            {
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                    "Access-Control-Allow-Origin": "*",
                }
            }
        );
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return [];
    }
};
