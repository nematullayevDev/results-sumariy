function RightPage() {
  return (
    <div className="right-page">
      <h2 className="right_h2">Summary</h2>
      <ul className="right_buttons">
        <li className="right_li1">
          <div className="right_li1_df">
            <img className="right_icon" src="./iconoir_flash.png" alt="" />
            <h3 className="right_h31">Reaction</h3>
            <span className="num_rgh">80</span>
            <span className="num_rgh_100">/ 100</span>
          </div>
        </li>

        <li className="right_li1">
          <div className="right_li2_df">
            <img className="right_icon" src="./iconoir_brain.png" alt="" />
            <h3 className="right_h32">Memory</h3>
            <span className="num_rgh">92</span>
            <span className="num_rgh_100">/ 100</span>
          </div>
        </li>

        <li className="right_li1">
          <div className="right_li3_df">
            <img className="right_icon" src="./iconoir_chat-remove.png" alt="" />
            <h3 className="right_h33">Verbal</h3>
            <span className="num_rgh">61</span>
            <span className="num_rgh_100">/ 100</span>
          </div>
        </li>

        <li className="right_li1">
          <div className="right_li4_df">
            <img
              className="right_icon"
              src="./iconoir_eye-empty.png"
              alt=""
              width="20px"
            />
            <h3 className="right_h34">Visual</h3>
            <span className="num_rgh">73</span>
            <span  className="num_rgh_100">/ 100</span>
          </div>
        </li>
      </ul>
      <button className="button">Continue</button>
    </div>
  );
}

export default RightPage;
