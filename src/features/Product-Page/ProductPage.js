import Valorant from "@/components/Valorant";
import ProductFilterView from "./components/ProductFilterView";
import Evolution from "@/components/Evolution";
import Warlords from "@/components/Warlords";
import Footer from "@/components/Footer";

const ProductPage = () => {
  return (
    <div className="px-8 py-4 relative flex flex-col gap-10">
      <ProductFilterView />

      <Valorant />
      <Evolution />
      <Warlords />
      <Footer />
    </div>
  );
};

export default ProductPage;
