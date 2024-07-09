interface RouteLayoutProps {
    children: React.ReactNode;
}

const RouteLayout: React.FC<RouteLayoutProps> = ({ children }) => {
  return (
    <>
        {children}
    </>
  )
}

export default RouteLayout;