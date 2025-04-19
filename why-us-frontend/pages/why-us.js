import { fetchWhyUsFeatures } from "../lib/strapi";
import { useState } from "react";
import FeatureTabs from "../components/FeatureTabs";
import FeatureDisplay from "../components/FeatureDisplay";

export default function WhyUsPage({ features }) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    // <div className="max-w-7xl mx-auto px-6 py-16">
    //   <div className="text-center mb-10">
    //     <p className="text-gray-500">Why Choose Us</p>
    //     <h2 className="text-3xl font-bold">We Are Different From Others</h2>
    //     <p className="text-gray-600 mt-2">
    //       Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa cupiditate accusantium recusandae soluta explicabo hic!
    //     </p>
    //   </div>

    //   <div className="flex flex-col md:flex-row gap-10 items-center">
    //     <FeatureDisplay data={features[activeIndex]} />
    //     <FeatureTabs
    //       features={features}
    //       activeIndex={activeIndex}
    //       onTabClick={setActiveIndex}
    //     />
    //   </div>
    // </div>

    <div className=" px-2 py-16">
      <div className="text-center mb-10">
        <p className="text-[#924e61] text-sm font-semibold">Why Choose Us</p>
        <h2 className="text-3xl font-bold mt-2">
          We Are Different From Others
        </h2>
        <p className="text-gray-600 mt-4 mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
          cupiditate accusantium recusandae soluta explicabo hic!
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-44 items-center justify-center">
        <FeatureDisplay data={features[activeIndex]} />
        <FeatureTabs
          features={features}
          activeIndex={activeIndex}
          onTabClick={setActiveIndex}
        />
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const features = await fetchWhyUsFeatures();
  console.log("features",features)
  return { props: { features } };
}
