
import React from 'react'

export default function About(props) {
  
    // const [myStyle, setMyStyle] = useState({
    //      color: 'black',
    //      backgroundColor: 'white'
    //     })

    let myStyle = {
      color: props.mode === 'dark'?'white':'black',
      backgroundColor: props.mode ==='dark'?'rgb(36 74 104)':'white',
    }

    return (
    <div className='container' >
        <h1 className="my-2 mx-3" style={{color: props.mode === 'dark'?'white':'black'}}> About Us </h1>
          <div className="accordion accordion-flush" id="accordionFlushExample">
  <div className="accordion-item" style={myStyle}>
    <h2 className="accordion-header" id="flush-headingOne">
      <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
       <strong>Analyze Your text</strong> 
      </button>
    </h2>
    <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body" style={myStyle}>
      Textutils gives you to a way analyze your text quickly and efficiently. Be it word count, or
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="flush-headingTwo">
      <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
         <strong>Free to use</strong>
      </button>
    </h2>
    <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body" style={myStyle}> TextUtils is a free character counter tool that provides instant character count & word count statistics for a given text.
      .</div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="flush-headingThree">
      <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
       <strong>Browser Compatible</strong> 
      </button>
    </h2>
    <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body" style={myStyle}>This word counter softwer works in any web browser such as a chrome, firfox, internet explorer, safari, opera. It suits to count character in facebook, blog, books, excel, document, pdf document, essays, etc.
      </div>
    </div>
  </div>
</div>
</div>
  )
}
