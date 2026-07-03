import useConnectionstatus from "../CustomHooks/useConnectionstatus";


function Statusbar(){
  let connection = useConnectionstatus();
  return connection 
  ? <h1 className="bg-green-500 rounded-xl w-55 p-2 ">Your Network Status is Good 🟢</h1>
  : <h1 className="bg-gray-500 rounded-xl w-55 p-2 ">Your Network Status is poor ❌</h1>
}

export default Statusbar;