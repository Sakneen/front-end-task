// our constants requests here 
const BASEURL = 'http://localhost:3005/';

export const GET = async (endPoint) => {
    const response = await fetch(`${BASEURL}${endPoint}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    return response.json();
}
