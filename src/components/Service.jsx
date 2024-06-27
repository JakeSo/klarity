import { useState } from "react"
import './Service.css';

const Service = ({title, children}) => {

    const [open, setOpen] = useState(false);
    const toggle = () => {
        setOpen(open => !open)
        
    }

    return (
        <div className="h-full my-5">
            <div className="stain w-full max-w-80 h-full justify-center mx-auto ">
                <h2 className="text-3xl">{title}</h2>
            </div>
            <div className="my-4">
                {children}
            </div>
        </div>
    //     <div className={`collapsible ${open ? "open" : "closed"}`}>
    //   <button 
    //     className="w-full flex justify-between bg-transparent text-left text-2xl border-none rounded-none p-5" 
    //     onClick={toggle}
    //   >
    //     {title}
    //   </button>
    //   <div className={`content-container ${open ? "max-h-40" : "max-h-0"} transition-max-height duration-300 ease-in-out`}>
    //     <div className="pb-4 px-7">{children}</div>
    //   </div>
    // </div>
    )
}

export default Service;