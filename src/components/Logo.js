import Link from "next/link"
import GamingText from "./GamingText"

const Logo = () => {
  return (
    <Link href={"/"} className='border-r-[1px] border-[#5B5A57] p-4  py-8'><GamingText text={"GQ"} /></Link>
  )
}

export default Logo