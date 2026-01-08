import next from "next";
import "@/styles/header/topHeader.css";
import { MapPinIcon ,InformationCircleIcon,UserIcon,HeartIcon,ShoppingBagIcon,ChevronDownIcon } from '@heroicons/react/24/outline'
export default function TopHeader() {
    return (
        <div>
            <div className="topHeader">
                <div className="topLeftHeaderContent">
                    <div className="moreBrands"><div className="dropDown">MORE BRANDS</div><div className="chevronIcon"><ChevronDownIcon  className="w-6 h-6" /></div></div>
                    <div className="address">
                        <span className="delivering">Delivering to  <br /><span className="location">coimbatore, 641001</span></span>
                        <span className="changeLocation">
                            change
                        </span>
                    </div>
                </div>
                <div className="topRightHeaderContent">
                    <div className="store"><div><MapPinIcon className="w-6 h-6 text-black" /></div>
                        <div>STORES</div>
                    </div>
                    <div className="contactUs"> <div><InformationCircleIcon  className="w-6 h-6" /></div><div>CONTACT US</div></div>
                    <div className="login"><div><UserIcon className="w-6 h-6" /></div><div>LOG IN</div></div>
                    <div className="wishlist"><HeartIcon className="w-6 h-6" /></div>
                    <div className="cart"><ShoppingBagIcon className="w-6 h-6" /></div>
                </div>
            </div>
        </div>
    );
}