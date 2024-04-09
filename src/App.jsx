import { Route, Routes } from "react-router-dom";
import Header from "./component/Header";
import Home from "./view/home";
import ProposalPage from "./view/proposalPage";

const App = () => {
  return(
    <div className='min-h-screen bg-white text-gray-900 dark:bg-[#212936] dark:text-gray-300'>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/proposal/:id" element={<ProposalPage/>}/>
      </Routes>
      
    </div>
  ) 
}

export default App;
