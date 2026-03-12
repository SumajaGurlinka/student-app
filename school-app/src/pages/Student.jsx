import { useRef ,React} from "react";

 function Student ({name}) {
    const inputRef = useRef();
    return(
        <>
        <h1>{name}</h1>
         <input ref={inputRef} type="text" />
         <h1>{inputRef.current?.value}</h1>
        </>
    )
}
export default React.memo(Student);