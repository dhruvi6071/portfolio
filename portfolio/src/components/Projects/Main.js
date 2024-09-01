import './Main.css';
import Dsa from "./Dsa";
import Web from "./Web";
import FullStack from './FullStack';

export default function Main(){
    return(
        <>
        <h2>Work I have done</h2>
        <div className='main'>
            <div id='dsa' className='content'><Dsa /></div>
            <div id='web' className='content'><Web /></div>
            <div id='fullstack' className='content'><FullStack/></div>
        </div>
        </>
    )
}