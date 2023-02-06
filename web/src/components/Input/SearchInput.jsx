export function SearchInput({ placeholderTxt, additionalClass, onChangeFunction }) {

    return (
        
        <input
            className={`input ${additionalClass ? additionalClass : ""}`} type={"search"} 
            placeholder={placeholderTxt} 
            onChange={onChangeFunction}
        >

        </input>  
    )
}