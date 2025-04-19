

export default function FeatureDisplay({ data }) {
  const { title, description, image } = data;
  console.log("data", title);
  console.log("description", description?.children);
  return (
    // <div className="relative w-[300px] h-[300px] rounded-full overflow-hidden flex items-center justify-center shadow-lg">
    <>
      <div className="flex justify-center items-center h-[400px] relative">
        <div className="w-72 h-72 rounded-full bg-[#b18390] text-white p-6 flex flex-col justify-center items-center text-center z-10 relative">
          <h2 className="font-bold text-lg mb-2">{title}</h2>
          <p className="text-sm">{data?.description[0]?.children[0]?.text}</p>
        </div>

        <div className="w-72 h-72 rounded-full overflow-hidden absolute left-36 z-0 shadow-lg">
          <img
            src={`https://nextjswithstrapi-production.up.railway.app${image[0]?.url}`}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover opacity-60"
          />
        </div>
      </div>
      <div className="relative z-10 text-white text-center p-6">
        {/* <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-sm">{data?.description[0]?.children[0]?.text}</p> */}
      </div>
    </>
    // </div>
  );
}
