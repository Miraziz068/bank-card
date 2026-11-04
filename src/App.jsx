import { useState } from 'react'
import './App.css'

function App() {
    const [number,setNumber] = useState('')
    const [userName,setUserName] = useState('')
    const [code,setCode] = useState('')
    const [bankImg,setBankImg] = useState('https://uzmrc.uz/uploads/partners/6bf3d4fc269f.webp')
    const [back,setBack] = useState(false)
  return (
    <>
    <main>
        <div style={(back)?{transform:'rotateY(180deg) perspective(500px) translateY(-130px)'}:{}} className="div">
            <img style={{position: 'absolute', bottom: '10px', right: '10px', width: '80px', height: '50px',}} src="https://i.pinimg.com/736x/ac/7e/02/ac7e027805a54438ee4357c7f63a2b42.jpg" alt=""/>
            <img style={{position: 'absolute',top: '25%', left: '50px', width: '75px', height: '55px', }} src="https://evoll.netlify.app/3-javascript/mashq/ru/7_dom/proyekt_6/chip.png" alt=""/>
            <img style={{borderRadius:"0px" , width: "150px", position: "absolute", right: "0px", top:"0px",}} src={bankImg}/>
            <h1 style={{position: "absolute", top: "45%", left: "10%", color: "white",}}>{number}</h1>
            <p style={{position: "absolute", top:"65%", left:" 45%",}}>{new Date().getMonth()}/{new Date().getFullYear()+10}</p>
            <p style={{position: "absolute", top:"75%" , left: "10%", fontSize:'20px'}}>{userName}</p>
            <footer>
                <article style={{position: "absolute", top: "40px",}}></article>
                <aside style={{position: "absolute", display: "flex", justifyContent: "center", alignItems: "center", top:" 120px", right: "145px", backgroundColor: "white", height: "50px", width: "50px",}} >{code}</aside>
                <span className="span"></span>
                <span className="span"></span>
                <span className="span"></span>
                <span className="span"></span>
            </footer>
        </div>
        <section>
            <button>Fon1</button>
            <button>Fon2</button>
            <button>Fon3</button>
            <button>Fon4</button>
            <button>Fon5</button>
            <button>Fon6</button>
        </section>
        <h4 style={{transform: "translateY(-60px)",}}>Имя банка</h4>
            <section style={{transform:" translateY(-90px)", gap: "5px",}}>
                <img onClick={()=>{setBankImg('https://api.logobank.uz/media/logos_preview/Anorbank-01.png')}} src="https://api.logobank.uz/media/logos_preview/Anorbank-01.png" alt="Anor bank"/>
                <img onClick={()=>{setBankImg('https://upload.wikimedia.org/wikipedia/ru/thumb/e/e2/TBC_Bank_logo.svg/960px-TBC_Bank_logo.svg.png')}} src="https://upload.wikimedia.org/wikipedia/ru/thumb/e/e2/TBC_Bank_logo.svg/960px-TBC_Bank_logo.svg.png" alt="TBS bank"/>
                <img onClick={()=>{setBankImg('https://api.logobank.uz/media/logos_preview/Kapitalbank-01.png')}} src="https://api.logobank.uz/media/logos_preview/Kapitalbank-01.png"/>
                <img onClick={()=>{setBankImg('https://uzmrc.uz/uploads/partners/6bf3d4fc269f.webp')}} src="https://uzmrc.uz/uploads/partners/6bf3d4fc269f.webp" alt="Infin bank"/>
                <img onClick={()=>{setBankImg('https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Agrobank_Logo.svg/1280px-Agrobank_Logo.svg.png')}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Agrobank_Logo.svg/1280px-Agrobank_Logo.svg.png" alt="Agro bank"/>
            </section>
        <section>
            <label>Номер карты</label>
            <input onClick={()=>{setBack(false)}} value={number} onChange={(e)=>{setNumber(e.target.value)}} type="number"/>
        </section>
        <section>
            <label>Имя карты</label>
            <input onClick={()=>{setBack(false)}} value={userName} onChange={(e)=>{setUserName(e.target.value)}} type="text"/>
        </section>
        <section>
            <label>Код безопасности</label>
            <input onClick={()=>{setBack(!back)}} value={code} onChange={(e)=>{setCode(e.target.value)}} style={{width: '50px', color: 'black',}} type="number"/>
        </section>
        <section style={{borderTop:" 1px solid grey",}}>
            <button>Заказать</button>
        </section>
    </main>
    </>
  )
}

export default App
