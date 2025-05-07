import Overview from "./overview";
import Contact from "./contact";
import Separator from "../../Components/separator";
import { HomeNavbar } from "../../Components/navbar";
function MainPage(){
    return(
        <div className="h-full pb-4 bg-gray-900 bg-[url(/backgrounds/blueBG.svg)]">
            <HomeNavbar />
            <div className="h-20 w-full"></div>
            <Overview />
            <Separator />
            <Contact />
        </div>
    )
}
export default MainPage;