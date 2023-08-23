import Appmain from "./Appmain";
import Gainfooter from "./Gainfooter";
import Gainmenu from "./Gainmenu";
function Homepage() {
  return (
    <div className="Homepage">
      <Gainmenu></Gainmenu>
      <br />
      <Appmain></Appmain>
      <br />
      <hr />
      <Gainfooter></Gainfooter>
    </div>
  );
}

export default Homepage;
