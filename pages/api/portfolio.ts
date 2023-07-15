export const getContent = async () => {
  const TOKEN = process.env.NEXT_PUBLIC_API_TOKEN;

  const response = await fetch(process.env.NEXT_PUBLIC_BACKEND_URL as string, {
    // cache: "no-store",
    headers: {
      Authorization: `Bearer ${TOKEN}`,
    },
  });
  if (!response.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  const contents = await response.json();
  return { props: { contents } };
};
