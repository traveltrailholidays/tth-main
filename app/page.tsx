import Home from "@/components/home";
import ExplorePackages from "@/components/home/explore-packages";
import Navbar from "@/components/navbar";

const page = () => {
  return (
    <>
      <Navbar />
      <Home />
      <ExplorePackages />
    </>
  )
}

export default page;