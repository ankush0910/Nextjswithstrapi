export async function fetchWhyUsFeatures() {
    console.log("process",process.env.STRAPI_API_URL)
    const res = await fetch("https://nextjswithstrapi-production.up.railway.app/api/why-us-features?populate=image");
    const data = await res.json();
    const features = data.data;
    console.log("http://localhost:1337/api",data)
    return features?.sort((a, b) => a?.order - b.order);
  }