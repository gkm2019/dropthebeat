import { useState } from "react";
import { customApi } from "../api/api";

type ResponseDataType = {
    data: any;
  };

const Main= () => {
    const [responseData, setResponseData] = useState<null | ResponseDataType >(null); 
    const [fetchUrl, setFetchUrl] = useState<string>('');

  const handleButtonClick = async () => {
    try {
      const response = await customApi<ResponseDataType>(fetchUrl, { method: 'GET' });
      setResponseData(response); 
    } catch (error) {
      console.error('Error fetching data:', error);
    }

  };

  const changeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFetchUrl(event.target.value);
}

    return (
        <div>
            <input type="text" placeholder="fetch url" value={fetchUrl} onChange={changeInput}></input>
        <button onClick={handleButtonClick}>Fetch</button>
        {responseData && (
          <div>
            <h1>API Response</h1>
            <pre>{JSON.stringify(responseData, null, 2)}</pre>
          </div>
        )}
      </div>
    );
};


export default Main;