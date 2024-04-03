const Banner = () => {
  return (
    <div className='py-5'>
        <div className="flex flex-col justify-center items-center">
            <h7 className='font-bold'>The DAO</h7>
            <h4 className="font-medium leading-tight md:te">{0} Proposals Currently Opened </h4>
            <h3>Current DAO Balance: {0} Eth</h3>
        </div>
        <div className="flex flex-col">
            
            <span>Your Contribution : {0} Eth </span>
            <span> Status : {}</span>
        </div>
        <hr className='shadow-xl my-4' />

        <div>
          <div>
            <span>You Can Contribute Up To 1 ETH To Become A Stakeholder</span>
          </div>
          <div className="flex mt-3 justify-between px-2">
            <input type="number"
            className='text-gray-700 border-gray-700 bg-transparent
            w-full shadow-md focus:text-gray-500 focus:outline-none
            font-normal rounded-md' 
            placeholder="E.g 2.2 ETH"
            required
            />
            <button className='bg-blue-600 rounded-full py-2
            px-6 inline-block leading-tight shadow-md'>
              Contribute
            </button>
          </div>
        </div>
    </div>

  )
}

export default Banner