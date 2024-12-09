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
// eslint-disable-next-line import/no-anonymous-default-export
export default {Basic1,Basic2};

export const Basic3 = <h1> BASIC COMPONENT3 </h1>

const Tmp = (props) => {
    if(props.title)
    return <h1>HELLO ? {props.title}</h1>
    else
        return <h1>HELLO</h1>
}

export const Basic4 = <Tmp title="BASIC4_TEST" />
export const Basic5 = <Tmp />

const Tmp2 = (props) => {
    console.log(props)
    console.log(props.data)

    return(
        <ul>
            {props.data.map((el)=><li key={el}>{el}</li>)}  {/* 각 리스트 항목에 고유한 key 추가 */}
        </ul>
    )
}

export const Basic6 = <Tmp2 data={['a','b','c','d']}/>


