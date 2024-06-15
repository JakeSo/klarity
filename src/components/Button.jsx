const Button = ({children, className, size, ...otherProps}) => {
    
    return (<button className={`rounded-full border-[1px] border-transparent  transition-colors duration-300 hover:border-gold text-${size} ` + className} { ...otherProps }>
            {children}
    </button>)
}

export default Button;