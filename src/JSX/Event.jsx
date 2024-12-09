

export const EventComponent1 = () =>{

    return (
        <button onClick={ (e)=>{
            console.log("EventComponent1 Clicked",e);
        } }>버튼1</button>
    )

}



export const EventComponent2 = () =>{

    const handleClick2 = (e) => {
        console.log("EventComponent2",e)
    }

    return (
        <button onClick={handleClick2 }>버튼2</button>
    )

}
export const EventComponent3 = () =>{
    const handleKeyDown = (e) => {
        console.log("EventComponent3",e.keyCode)
    }
    return (
        <input onKeyDown={handleKeyDown} />
    )
}




