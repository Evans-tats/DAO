import Banner from "./component/Banner";
import Header from "./component/Header";
import Proposal from "./component/proposal";

const App = () => {
  return(
    <div className='min-h-screen bg-white text-gray-900 dark:bg-[#212936] dark:text-gray-300'>
      <Header/>
      <Banner/>
      <Proposal/>
    </div>
  ) 
}

export default App;
