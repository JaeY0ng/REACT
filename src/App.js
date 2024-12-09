import './App.css';
import Basic from './JSX/Basic'
import {Basic3,Basic4} from './JSX/Basic'


function App() {
    let title = "제목부분 입니다";

    const st = {
        color:"orange"
    };
    return (
        <>
            <div className="top-header">
                <h1 style={{
                    color: "red",
                    backgroundColor: "green",
                    fontSize:"1rem"
                }}>{title}</h1>
            </div>

            <div className="nav">
                <h2 style={st}>{title}</h2>
            </div>
            <div>
                <Basic.Basic1 />
                <Basic.Basic2 />
                {Basic3}
                {Basic4}
            </div>
        </>
    );
}

export default App;
