
import MessageContainer from "../../components/message/MessageContainer";

import Sidebar from "../../components/sidebar/Sidebar.jsx"
// import MessageContainer from "../../components/MessageContainer.js";

const Home = () => {
  return (
    <div className=" flex h-[100%] rounded-lg overflow-hidden bg-slate-400 bg-clip-padding 
    backdrop-filter backdrop-blur-lg bg-opacity-1">
      <Sidebar/>
      <MessageContainer/>
    </div>
  );
};

export default Home;



