import getCurrentUser from "@/actions/getCurrentUser";
import Home from "@/components/home";
import Counter from "@/components/home/counter";
import ExplorePackages from "@/components/home/explore-packages";
import Navbar from "@/components/navbar";
import CustomizePackage from "@/components/packages/package-customize";
import FilterPackages from "@/components/packages/package-filter";

const page = async () => {

  const currentuser = await getCurrentUser();

  return (
    <>
      <Navbar currentUser={currentuser}/>
      <Home />
      <ExplorePackages />
      <FilterPackages />
      <CustomizePackage />
      <Counter />
    </>
  )
}

export default page;