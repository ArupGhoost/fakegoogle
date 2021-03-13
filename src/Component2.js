import React from 'react'
import MicIcon from '@material-ui/icons/Mic';

function Component2() {
    return (
        <>
             <div className='lang'>
                <a style={{position:'absolute', top:'317px', left:'570px',color:'blue'}}>हिन्दी</a>
                <a style={{position:'absolute', top:'320px', left:'610px',color:'blue'}}>বাংলা</a>
                <a style={{position:'absolute', top:'320px', left:'650px',color:'blue'}}>తెలుగు</a>
                <a style={{position:'absolute', top:'318px', left:'697px',color:'blue'}}>मराठी</a>
                <a style={{position:'absolute', top:'318px', left:'745px',color:'blue'}}>தமிழ்</a>
                <a style={{position:'absolute', top:'320px', left:'793px',color:'blue'}}>
                ગુજરાતી
                </a>
                <a style={{position:'absolute', top:'320px', left:'853px',color:'blue'}}>
                ಕನ್ನಡ
                </a>
                <a style={{position:'absolute', top:'321px', left:'893px',color:'blue'}}>
                ଓଡ଼ିଆ
                </a>
            </div>
            <div>
                <a style={{position:'absolute',top:'200px', left:'940px', zIndex:'1'}} href="*" ><MicIcon /></a>
            </div>
            <input type='text'></input>
            <button style={{position:'absolute', top:'260px', left:'570px'}} className='button1'>Google Search</button>
            <button style={{position:'absolute', top:'260px', left:'700px'}} className='button2'>I'm Feeling Lucky</button>
            <p style={{position:'absolute', left:'450px', top:'320px',filter:'opacity(100%)', fontSize:'14px'}}
            >Google offered in:</p>
        </>
    )
}

export default Component2
