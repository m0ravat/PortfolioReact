import { useState } from "react";

export default function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [contact, setContact] = useState("");
    const [feedback, setFeedback] = useState("");
    const [isPending, setIsPending] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = {name, email, contact, feedback};
        setIsPending(true)
        fetch('http://localhost:8000/contact', {
            method: "POST",
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(form)
        }).then(() => {
            setIsPending(false);
            alert("Feedback has been sent")
        })
    }
    return (
        <form 
        onSubmit={handleSubmit}
        onReset={() => {
            setName("")
            setEmail("")
            setContact("")
            setFeedback("")
        }}
        className="bg-gray-800 text-cyan-500 w-3/6 max-sm:w-[90%] max-w-2xl mx-auto p-6 rounded-lg shadow-md" id="contact" >
            <h1 className="text-4xl text-center mb-8 font-bold">Feedback Form</h1>

            <div className="mb-6">
                <label htmlFor="name" className="block text-left mb-1">Your name:</label>
                <input value= {name} type="text" name="name" id="name" 
                className="w-full p-2 bg-gray-600 text-white rounded-lg"
                onChange={(e) => setName(e.target.value)}/>
            </div>

            <div className="mb-6">
                <label htmlFor="email" className="block text-left mb-1">Your email:</label>
                <input value= {email}  type="email" name="email" id="email" 
                className="w-full p-2 bg-gray-600 text-white rounded-lg"
                onChange={(e) => setEmail(e.target.value)}/>
            </div>

            <div className="mb-6">
                <label htmlFor="contact" className="block text-left mb-1">Other contact info:</label>
                <input value= {contact} type="text" name="contact" id="contact" 
                className="w-full p-2 bg-gray-600 text-white rounded-lg"
                onChange={(e) => setContact(e.target.value)}/>
            </div>

            <div className="mb-6">
                <label htmlFor="feedback" className="block text-left mb-1">Your feedback:</label>
                <textarea value= {feedback} name="feedback" id="feedback" 
                className="w-full h-40 p-2 bg-gray-600 text-white rounded-lg resize-none" 
                onChange={(e) => setFeedback(e.target.value)}/>
            </div>

            <div className="flex justify-between mt-6">
                {!isPending && <input type="submit" value="Submit" 
                className="w-1/2 mr-2 bg-gray-700 hover:bg-cyan-700 text-white p-3 rounded-2xl cursor-pointer"/>}

                {isPending && <input type="button" value="Submitting" 
                className="w-1/2 mr-2 bg-gray-700 hover:bg-cyan-700 text-white p-3 rounded-2xl cursor-pointer" disabled/>}
                
                <input type="reset" value="Reset" 
                className="w-1/2 ml-2 bg-gray-700 hover:bg-cyan-700 text-white p-3 rounded-2xl cursor-pointer"/>
            </div>
        </form>
    );
}
