export interface buttonAttribute {
    text: string;
    handleClick: () => void;
    
}
export const Button = (props:buttonAttribute) => {
    const {text, handleClick} = props;
    return (
        <div>
            <button onClick={handleClick} className="bg-primary text-white px-4 py-2 rounded-md">{text}</button>
        </div>
    );
}