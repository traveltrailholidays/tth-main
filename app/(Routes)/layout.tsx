import getCurrentUser from "@/actions/getCurrentUser";
import Navbar from "@/components/navbar";

interface RouteLayoutProps {
    children: React.ReactNode;
}

const RouteLayout: React.FC<RouteLayoutProps> = async ({ children }) => {

  const currentuser = await getCurrentUser();

  return (
    <>
      <Navbar currentUser={currentuser}/>
      {children}
    </>
  )
}

export default RouteLayout;