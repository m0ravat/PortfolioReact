import Navbar from "../../Components/Navbar/navbar";
import Overview from "./overview";
import Contact from "./contact";
import Separator from "../../Components/separator";
function MainPage(){
    return(
        <div className="h-full pb-4 bg-gray-900 bg-[url(/backgrounds/blueBG.svg)]">
            <Navbar />
            <div className="h-20 w-full"></div>
            <Overview />
            <Separator />
            <Contact />
        </div>
    )
}
export default MainPage;