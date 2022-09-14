import { LogoIcon } from "../icons/icons"

const Navbar = () => {
  return (
    <div className="bg-black text-white h-14 flex items-center">
        <div className="wrapper-container  w-full">
            <div className="flex items-center gap-1 cursor-pointer">
                <LogoIcon/>
                <p className="font-semibold"><span className="text-cyan-400">C</span>oin<span className="text-cyan-400">D</span>ata</p>
            </div>
        </div>
    </div>
  )
}

export default Navbar