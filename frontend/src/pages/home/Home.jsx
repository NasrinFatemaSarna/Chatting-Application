
import MessageContainer from "../../components/message/MessageContainer";

import Sidebar from "../../components/sidebar/Sidebar";
// import MessageContainer from "../../components/MessageContainer.js";

const Home = () => {
  return (
    <div className=" flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-slate-400 bg-clip-padding 
    backdrop-filter backdrop-blur-lg bg-opacity-0">
      <Sidebar/>
      <MessageContainer/>
    </div>
  );
};

export default Home;



