
import { RxHamburgerMenu } from "react-icons/rx";
import { CgProfile } from "react-icons/cg";
import { FiHelpCircle } from "react-icons/fi";
import { FaRegBell } from 'react-icons/fa'

function Navbar() {
  return (
    <>
      <div className="flex h-8 justify-between bg-black text-white">
        <div className="flex gap-2">
          PlaceHolderText 
          <button>
            <RxHamburgerMenu />
          </button>
        </div>

        <div className="flex gap-3">
          <button>
            <FaRegBell />
          </button>
          <button>
            <FiHelpCircle />
          </button>
          <button><CgProfile/></button>
        </div>
      </div>
    </>
  );
}

export default Navbar;
