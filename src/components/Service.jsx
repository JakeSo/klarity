import { useState } from "react"
import './Service.css';

const Service = ({title, children}) => {

    const [open, setOpen] = useState(false);
    const toggle = () => {
        setOpen(open => !open)
        
    }

    return (
        <div className="service my-3 grid grid-cols-1 grid-rows-3">
            <div className="stain w-full h-full max-w-80 my-4 mb-16 justify-center mx-auto row-span-2">
                <h2 className="text-3xl">{title}</h2>
            </div>
            <div className="row-span-1 flex flex-col justify-between">
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