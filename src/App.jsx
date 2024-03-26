import Header from "./component/Header";
import Proposals from "./component/Proposals";

const App = () => {
  return(
    <div className='min-h-screen bg-white text-gray-900 dark:bg-[#212936] dark:text-gray-300'>
      <Header/>
      <Proposals/>
    </div>
  ) 
}

export default App;
