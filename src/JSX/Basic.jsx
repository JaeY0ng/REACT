const Basic1 = () => {

    return (<>
            <h1> BASIC COMPONENT1 </h1>
        </>)

}


const Basic2 = () => {

    return (<>
            <h1> BASIC COMPONENT2 </h1>
        </>)

}
export default {Basic1,Basic2};

export const Basic3 = <h1> BASIC COMPONENT3 </h1>

const Tmp = (props) => {
    return <h1>HELLO ? {props.title}</h1>
}

export const Basic4 = <Tmp title="BASIC4_TEST" />



