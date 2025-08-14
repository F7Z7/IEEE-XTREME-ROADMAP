
interface ButtonProps {
    executeThis: string
    text: string
    bgColor: string
}

function Button({executeThis, text, bgColor}: ButtonProps) {
    return (
        <div>
            <button onClick={executeThis} className={`${bgColor} text-white px-4 py-2 rounded cursor-pointer`}>
                {text}
            </button>
        </div>
    );
}

export default Button;