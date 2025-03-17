export default function Button({children, click}){
    return(
        <>
        <button className="btn btn-md bg-primary text-white hover:text-black" onClick={(e) => click(e)}>{children}</button>
        </>
    )
}