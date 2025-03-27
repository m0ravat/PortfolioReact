import { Link } from "react-router-dom"
import { useState } from "react"
import Intro from "./introduction";
import Separator from "../../Components/separator";
export default function Overview(){
    const [selectedContent, setSelectedContent] = useState("");
    const cards = [
      {
        id: 1,
        title: "FANS Leader @ University of Westminster",
        date: "August 2024 - October 2024",
        description: " - Took initiative by organizing a week full of engaging events for a group of 35 new students at the university " + 
"        to make them feel welcome, while answering any queries they may have had online/in-person. \n " + 
"       - Kept them up to date with new events and services the university has to offer through regular emails across the span " +
        "of 6 weeks. \n - Ensured 100% student satisfaction by ensuring all concerns were signposted to the relevant department",
      },
      {
        id: 2,
        title: "Shop Assistant @ Oxfam",
        date: "July 2024 - November 2024",
        description: "My overall responsibility was to help the managers in running the store, with my main task as"+
            "overseeing the shop floor. As a till operator I have worked on interacting with customers and being as friendly as "+
            "possible to leave a positive impression ensuring I received 0 complains, while also displaying basic money counting skills under pressure.  "+
            "I was also involved in the full charity lifecycle, from collecting donations promptly to sorting/pricing them in the stockroom before " +
            "putting them on the shop floor, ensuring maximum profits could be made"
      },
      {
        id: 3,
        title: "Supermarket Assistant @ Waitrose",
        date: "November 2024 - January 2025",
        description: "Responsibilities included: \n"+
            "- Being able to put 50 crates of stock out an hour\n"+
            "- Working with others to ensure stock in all areas is filled adequately, alongside ensuring it is all\n "+
            "presented neatly and put forward for customers. \n"+
            "- Familiarizing myself with store trends and updates so I am able to determine what stock will likely go on sale.\n "+
            "- Keeping in constant communication with my shift leader so I can work where I am most needed.\n "
      },
    ];
  
    // Handle card click
    const handleCardClick = (description) => {
      setSelectedContent(description);
    };
    return(
        <div className=" bg-repeat-y bg-cover w-full pt-12">
            <Intro />
            <Separator />
            <div className="text-center text-medium">
                <h2 className="text-gray-200 text-5xl mb-10">Overview</h2>
                <div className="flex flex-row max-sm:flex-col">
                    <aside className="w-2/6 text-white flex flex-col max-sm:w-5/6 items-center p-2 mr-40">
                        <img src="/blueMR.png" alt="" className="rounded-lg w-[90%] mb-4 glow-cyan" />
                        <div className="flex space-x-10 mb-4">
                            <Link to="" className="rounded-2xl text-black custom-gradient1 p-4">Resume</Link>
                            <Link to="https://github.com/m0ravat" className="rounded-2xl text-black custom-gradient2 p-4">GitHub</Link>
                        </div>
                        <Link to="https://www.linkedin.com/in/muhammad-ravat/" className="rounded-2xl custom-gradient3 text-black p-4">LinkedIn</Link>
                    </aside>

                    <main className="w-4/6 text-medium max-sm:text-small font-medium h-[21rem] flex flex-row text-gray-200 p-2 pr-10 max-sm:pr-2 max-sm:w-full">
                        <div className="h-full flex-shrink-0 mr-4">
                            <table className="h-full border-collapse">
                            <tbody className="h-full">
                                {cards.map((card) => (
                                <tr key={card.id} className="h-1/3">
                                    <td className="p-0">
                                    <div
                                        className="w-72 h-full p-4 rounded-md bg-gray-900 border-white border-2 
                                        text-white cursor-pointer hover:bg-gray-800 transition-colors max-sm:w-32 max-sm:p-1 flex flex-col justify-center"
                                        onClick={() => handleCardClick(card.description)}
                                    >
                                        <p>
                                        {card.title} <br />
                                        <span className="text-gray-400">{card.date}</span>
                                        </p>
                                    </div>
                                    </td>
                                </tr>
                                ))}
                            </tbody>
                            </table>
                        </div>
                        <div className="bg-gray-900 w-full h-full border-white border-2 rounded-md p-10 flex items-center overflow-y-auto">
                            <p className="mx-auto" style={{ whiteSpace: "pre-line" }}>{selectedContent || "Click a card to view details"}</p>
                        </div>
                    </main>
                </div>
            </div>
            <Separator />
        </div>
    )
}