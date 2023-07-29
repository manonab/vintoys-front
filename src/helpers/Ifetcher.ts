interface Options<DataT> {
     method?: "GET" | "POST" | "PUT" | "DELETE";
     data?: DataT;
 };
 
 export const fetcher = async <T>(
      endpoint?: string,
      opts?: Options<T>,
      token?: string,
    ): Promise<any> => {
      const method = opts?.method || "GET";
 
      const headers = {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
       };
      try {
        const OPTIONS: RequestInit = {
          method: method || "GET",
          headers,
          body: JSON.stringify(opts?.data),
        };
        const response = await fetch(`${endpoint}`, OPTIONS);
    
        const data = await response.json();
        const ReqHeaders = response.headers;
        console.log("Success", data);
        return {
          data,
          headers: ReqHeaders,
        };
      } catch (error) {
        if (typeof error === "string") throw new Error(error);
      } finally {
        console.log("Finished");
      }
 };
 