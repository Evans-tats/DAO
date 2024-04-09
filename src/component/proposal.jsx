const Proposal = () => {
  const active = "bg-blue-600 px-4 py-2.5 leading-tight shadow-md text-sm hover:text-black text-white ease-in-out font-medium uppercase transition duration-700 active:bg-blue-800";
  const deactive = "bg-transparent px-4 py-2.5 leading-tight shadow-md text-sm hover:text-black text-white ease-in-out font-medium uppercase transition duration-700 active:bg-blue-800";
  
  return (
    <div className="flex flex-col p-8 ">
      <div className="flex justify-center">
        <button className={`rounded-l-full ${active}`}>All</button>
        <button className={`${deactive}`}>OPEN</button>
        <button className={`rounded-r-full ${deactive}`}>closed</button>
      </div>
      <div className="overflow-x-auto sm:mx-6 lg:mx-6">
        <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
          <div className="h-[calc(100vh_-_20rem)] overflow-y-auto shadow-md rounded-md">
            <table className="min-w-full">
             <thead className="border-b border-gray-500">
              <tr>
                <th scope="col" className="text-sm font-medium px-6 py-4 text-left">
                  Created By
                </th>
                <th scope="col" className="text-sm font-medium px-6 py-4 text-left">
                  Title
                </th>
                <th scope="col" className="text-sm font-medium px-6 py-4 text-left">
                  Expires
                </th>
                <th scope="col" className="text-sm font-medium px-6 py-4 text-left">
                  Action
                </th>
              </tr>
             </thead>
             <tbody>
              <tr>
                <td className="text-sm font-light px-6 py-4 whitespace-nowrap">
                  <span>0x21..ef24</span>
                </td>
                <td className="text-sm font-light px-6 py-4 whitespace-nowrap">
                  Donate for a good cause
                </td>
                <td className="text-sm font-light px-6 py-4 whitespace-nowrap">
                  {new Date().getTime()}
                </td>
                <td className="text-sm font-light px-6 py-4 whitespace-nowrap">
                  hello
                </td>
              </tr>
             </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Proposal;
