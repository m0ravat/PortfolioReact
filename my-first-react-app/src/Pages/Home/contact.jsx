export default function Contact(){
    return(
        <form className="bg-gray-800 text-cyan-500 w-4/6 max-sm:w-[90%] mx-auto h-max text-large  text-center p-4">
            <h1 className="text-5xl mb-10">Feedback Form</h1>
            <label htmlFor="" className="">Your name: 
                <input type="text" name="" id="" className="ml-4 bg-gray-600 text-white w-max max-w-[100%] p-2 rounded-lg"/>
            </label> <br /> <br />
            <label htmlFor="">Your email: 
                <input type="email" name="" id="" className="ml-4 bg-gray-600 text-white max-w-[100%] w-max p-2 rounded-lg"/>
            </label> <br /> <br />
            <label htmlFor="">Other contact info: 
                <input type="text" name="" id="" className="ml-4 bg-gray-600 text-white max-w-[100%] w-max p-2 rounded-lg"/>
            </label> <br /> <br />
            <label htmlFor="">Your feedback: <br />
                <textarea name="" id="" className="w-full h-64 bg-gray-600 text-white max-w-[100%] p-2 rounded-lg "></textarea>
            </label>
            <div className="flex justify-around">
                <input type="submit" value="Submit" className="rounded-2xl bg-gray-700 hover:bg-gray-600 p-4"/> 
                <input type="reset" value="Reset" className="rounded-2xl bg-gray-700 hover:bg-gray-600 p-4"/>
            </div>
        </form>
    )
}