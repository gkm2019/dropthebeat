

export interface ApiResponse<T> {
    code: number;
    message: string;
    data: T; 
}

export const customApi  = async <T>(url:string, options: RequestInit): Promise<T> => {
    try {
        const response = await fetch(url, options);
        
        if (!response.ok) {
            throw new Error(`Network response was not ok (${response.status} ${response.statusText})`);
        }
        
        const responseData: ApiResponse<T> = await response.json();
        const processedData = responseData.data;
        console.log(processedData); 
        
        return processedData;
    } catch (error) {
        console.error('An error occurred:', error);
        throw error; 
    }
}

