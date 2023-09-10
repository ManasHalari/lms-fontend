import {BsFacebook,BsGithub,BsInstagram,BsLinkedin,BsTwitter} from "react-icons/bs"

function Footer() {
    const date=new Date()
    const year=date.getFullYear()
  return (
    <>
    <footer className="relative left-0 bottom-0 flex flex-col items-center justify-between sm:flex-row py-5 h-[15vh] bg-gray-800 text-white sm:px-20">
        <section className="text-xl">
            Copright {year} | All rigths are Reserved
        </section>
        <section className="flex items-center justify-between gap-5 text-white my-3">
            <a className="hover:bg-yellow-500 transition-all ease-in-out duration-300">
                <BsFacebook size={30}/>
            </a>
            <a className="hover:bg-yellow-500 transition-all ease-in-out duration-300">
                <BsInstagram size={30}/>
            </a>
            <a className="hover:bg-yellow-500 transition-all ease-in-out duration-300">
                <BsTwitter size={30}/>
            </a>
            <a className="hover:bg-yellow-500 transition-all ease-in-out duration-300">
                <BsLinkedin size={30}/>
            </a>
            <a className="hover:bg-yellow-500 transition-all ease-in-out duration-300">
                <BsGithub size={30}/>
            </a>
        </section>
    </footer>

    </>
  )
}

export default Footer