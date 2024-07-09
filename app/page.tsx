import Home from "@/components/home";
import Counter from "@/components/home/counter";
import ExplorePackages from "@/components/home/explore-packages";
import Navbar from "@/components/navbar";
import CustomizePackage from "@/components/packages/package-customize";

const page = () => {
  return (
    <>
      <Navbar />
      <Home />
      <ExplorePackages />
      <Counter />
      <CustomizePackage />
    </>
  )
}

export default page;