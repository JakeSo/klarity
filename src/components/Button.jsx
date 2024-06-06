const Button = ({children, size, ...otherProps}) => {
    
    return (<button className={`p-3 rounded-full hover:border-gold text-${size}`} { ...otherProps }>
            {children}
    </button>)
}

export default Button;