import Home from "@/components/home";
import Counter from "@/components/home/counter";
import ExplorePackages from "@/components/home/explore-packages";
import Navbar from "@/components/navbar";

const page = () => {
  return (
    <>
      <Navbar />
      <Home />
      <ExplorePackages />
      <Counter />
    </>
  )
}

export default page;