import next from "next";
import "@/styles/header/promotionalHeader.css";
export default function PromotionalHeader() {
    return (
        <div>
            <div className="promotionalHeader">
                <div className="promotionalText">
                    <div className="headerContent">
                        <p>All discounts are inclusive of GST rate cut benefits</p>
                        <p>First time? Get additional 5% off with code PENEW5 only on the app! Already with us? Explore our latest drop!</p>
                    </div>
                </div>
            </div>
        </div>
    );
}