import ActiveLink from "@/app/components/libs/ActiveLink";

const Navlinks = () => {
  return (
    <div
      className={`gap-5 items-center hidden md:flex font-medium`}
    >
      <ActiveLink exact href='/' text='Home' />
      <ActiveLink exact href='/about-us' text='About' />
      <ActiveLink exact href='/packages' text='Packages' />
      <ActiveLink exact href='/payments' text='Payments' />
    </div>
  )
}

export default Navlinks;