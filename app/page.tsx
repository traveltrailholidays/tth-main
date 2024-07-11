import getCurrentUser from "@/actions/getCurrentUser";
import Home from "@/components/home";
import Counter from "@/components/home/counter";
import ExplorePackages from "@/components/home/explore-packages";
import Navbar from "@/components/navbar";
import PackageCategories from "@/components/packages/package-category";
import CustomizePackage from "@/components/packages/package-customize";

const page = async () => {

  const currentuser = await getCurrentUser();

  return (
    <>
      <Navbar currentUser={currentuser}/>
      <Home />
      <ExplorePackages />
      <PackageCategories />
      <CustomizePackage />
      <Counter />
    </>
  )
}

export default page;