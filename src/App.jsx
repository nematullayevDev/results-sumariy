import Leftfooter from "./left-page.footer"


function Leftpage() {
  return(
    <div className="left_page">
      <h2 className="left_h2">Your Result</h2>
    
      <div className="left_icon">
        <span className="left_num">76</span>
        <span className="left_num_of">of 100</span>
      </div>
      
      <Leftfooter/>
    </div>
  )
}

export default Leftpage