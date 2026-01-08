import next from "next";
import "@/styles/header/header.css";
import Image from "next/image";
import peterEnglandLogo from "@/public/peterEngland.png";
import { MagnifyingGlassIcon ,TruckIcon} from "@heroicons/react/24/solid";

export default function Header() {
    return (
        <div className="HeaderContainer">
            <div>
                <Image src={peterEnglandLogo} alt="peter-england" width={100} height={100} className="peterEnglandIcon" />
            </div>
            <div className="varients">
                <p>MEN</p>
                <p>COLLECTIONS</p>
                <p>NEW IN</p>
                <p>EXPERIENCES</p>
                <p>THE GENTLEMENS LEAGUE</p>
            </div>
            <div className="search">
                <div className="searchBar">
                    <MagnifyingGlassIcon className="searchIcon" />
                    <input
                        type="text"
                        placeholder="Search   T-shirts"
                        className="searchInput"
                    />
                </div>
                <div className="rightPartHeader">
                <div className="expressDeliveryContainer">
                    <div className="content">
                    <div className="truck"><TruckIcon className="w-3 h-3 text-white" /></div>
                    <div className="expressContent">
                        <div className="express">EXPRESS DELIVERY</div>
                        <div className="nearest">Select your nearest store &gt;</div>
                    </div>
                    </div>
                </div>
                <div>
                    <Image
                        src="https://imagescdn.peterengland.com/img/app/brands/superapp/Icons/ABFRL_logo_image.svg"
                        alt="ABFRL Logo"
                        width={68}
                        height={74}
                        className="adityaBirlaLogo"
                    />
                </div>
                </div>
            </div>
        </div>
    );
}