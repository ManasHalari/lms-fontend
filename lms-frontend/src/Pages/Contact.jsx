import { useState } from "react";
import {toast} from "react-hot-toast"
import { useNavigate } from "react-router-dom";

import axiosInstance from "../helpers/axiosInstance";
import HomeLayout from "../Layouts/HomeLayout"


function Contact() {
   const navigate=useNavigate()
    const [userInput,setUserInput]=useState({
        name:"",
        email:"",
        message:""
    })
    function handleUserInput(e) {
        const {name,value}=e.target;
        console.log(name,value);
        setUserInput({
    ...userInput,
    [name]: value
                })
        
        
    }
    async function onFormSubmit(e) {
        e.preventDefault();
        if (!userInput.name || !userInput.email || !userInput.message) {
            toast.error("All Fiels are required.")
            return;
        }
        if (!userInput.email.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g)) {
            toast.error("Email is Invalid.")            
            return;
        }
       try{
        const response=axiosInstance.post("/contact",...userInput)
        toast.promise(response,{
            loading:"Your message is Sunmitting.",
            success:"Message is Submitted",
            error:"Failed to submit your message."
        })
           const contactResponse=await response;
           console.log(contactResponse);
           if (contactResponse?.data?.success) {
            setUserInput({
                name:"",
                email:"",
                message:""  
            })
            navigate("/")
            
           }
       }catch(error){
        toast.error("Falied to submit the form.")
       }
    }
  return(
        <HomeLayout>
        <div className="flex justify-center items-center h-[85vh]">
        <form className="flex flex-col items-center justify-center gap-2 text-white p-5 shadow-[0_0_10px_black] w-[22rem]" noValidate onSubmit={onFormSubmit}>
            <h1 className="text-3xl text-center font-bold">
                Contact Form
            </h1>
            <div className="flex flex-col w-full gap-1">
            <label htmlFor="name">Name</label>
            <input 
            type="text"
            className="w-full rounded-sm text-xl bg-transparent px-2 py-1 border"
            id="name"
            name="name"
            onChange={handleUserInput}
            value={userInput.name}
            placeholder="Enter your name"
            />
            </div>
            <div className="flex flex-col w-full gap-1">
            <label htmlFor="email">Email</label>
            <input 
            type="email"
            className="w-full rounded-sm text-xl bg-transparent px-2 py-1 border"
            id="email"
            name="email"
            placeholder="Enter your Email"
            onChange={handleUserInput}
            value={userInput.email}
            />
            </div>
            <div className="flex flex-col w-full gap-1">
            <label htmlFor="message">Message</label>
            <textarea 
            
            className="w-full rounded-sm text-xl bg-transparent px-2 py-1 border resize-none h-40"
            id="message"
            name="message"
            placeholder="Enter your Message"
            onChange={handleUserInput}
            value={userInput.message}
            />
            </div>
            <button className="bg-yellow-600 hover:bg-yellow-500 w-full p-3 cursor-pointer transition-all ease-in-out duration-300" type="submit">
                Submit
            </button>
         </form>
        </div>
        </HomeLayout>


     
   
  );
}

export default Contact