import Link from "next/link"
import GamingText from "./GamingText"

const Logo = () => {
  return (
    <Link href={"/"} className=' p-4  py-8'><GamingText text={"GQ"} /></Link>
  )
}

export default Logo