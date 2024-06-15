import { useState } from "react"
import './Collapsible.css';

const Collapsible = ({title, children}) => {

    const [open, setOpen] = useState(false);
    const toggle = () => {
        setOpen(open => !open)
        
    }

    return (
        <div className={`collapsible ${open ? "open" : "closed"}`}>
      <button 
        className="w-full flex justify-between bg-transparent text-left text-2xl border-none rounded-none p-5" 
        onClick={toggle}
      >
        {title}
      </button>
      <div className={`content-container ${open ? "max-h-40" : "max-h-0"} transition-max-height duration-300 ease-in-out`}>
        <div className="pb-4 px-7">{children}</div>
      </div>
    </div>
    )
}

export default Collapsible;