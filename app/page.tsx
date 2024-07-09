import Home from "@/components/home";
import Counter from "@/components/home/counter";
import ExplorePackages from "@/components/home/explore-packages";
import Navbar from "@/components/navbar";
import CustomizePackage from "@/components/packages/package-customize";
import FilterPackages from "@/components/packages/package-filter";

const page = () => {
  return (
    <>
      <Navbar />
      <Home />
      <ExplorePackages />
      <FilterPackages />
      <CustomizePackage />
      <Counter />
    </>
  )
}

export default page;