import Overview from "./overview";
import Contact from "./contact";
import { useEffect } from "react";
import Separator from "../../Components/separator";
import { HomeNavbar } from "../../Components/navbar";
import { useState } from "react";
function MainPage(){
    const [name, setName] = useState("Mario")

    useEffect(() => {
        console.log("Home page loaded")
        setName("Luigi")
    }, [name]); {/* function run when name changes, leave blank to render every time page reloades/rerenders*/}

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