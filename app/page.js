import FeatureBoxes from "./container/features/page";
import Hero from "./container/hero/page";
import Business from "./pages/Businesses/page";


export default function Home() {
  return (
   <>
   <div className="min-h-screen bg-gradient-to-r from-[#b3b1b1] via-[#feffff] to-[#feffff]">
   
      <Hero />
      <FeatureBoxes />
      <Business />
      </div>
      </>
  );
}
