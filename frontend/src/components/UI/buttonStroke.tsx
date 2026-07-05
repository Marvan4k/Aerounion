'use client'
interface ButtonStrokeProps {
  href: string;
  textButton: string;
  className?: string;
}

export default function ButtonStroke({ href, textButton, className, ...rest }: ButtonStrokeProps){
    return (
        <a href={href} className={`
            inline-block px-16 py-3.5 border-2 border-white uppercase font-bold transition-all duration-300 tracking-[10%]
            hover:bg-white hover:text-[#0a0a0a] 
            ${className}`} 
            {...rest}
        >
            {textButton}
        </a>
    )
}