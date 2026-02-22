export async function GET() {
    const secretApiKey = process.env.SECRET_API_KEY;
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
            headers: {
                authorization: `Bearer ${secretApiKey}`
            }
        });
        const data = await response.json();
        console.log('Fetched posts:', data);
        return new Response(JSON.stringify(data), { status: 200 });
    }
    catch (error) {
        console.error('Error fetching posts:', error);
        return new Response('Error fetching posts', { status: 500 });
    }

}