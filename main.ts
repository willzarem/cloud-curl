const TARGET_URL = "https://example.com"; // Replace with your desired URL

const handler = async (req: Request): Promise<Response> => {
  const { method, url } = req;
  const pathname = new URL(url).pathname;

  if (method === "GET" && pathname === "/") {
    try {
      const response = await fetch(TARGET_URL);
      const text = await response.text();
      return new Response(text, {
        headers: { "Content-Type": "text/plain" },
      });
    } catch (error) {
      console.error("Error fetching the target URL:", error);
      return new Response("Failed to fetch the target URL", { status: 500 });
    }
  }

  return new Response("Not Found", { status: 404 });
};

console.log("Server is running on http://localhost:8080");
Deno.serve({ port: 8080 }, handler);
