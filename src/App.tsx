
import { Button } from "./components/ui/button";



function App() {
 


 return (
    <div className="px-7 text-gray-700">
      <section className=" bg-purple-400 rounded-lg">
  
        <div className="flex container sm:max-w-7xl mx-auto">
            <h1 className=" font-bold border-r border-purple-300 pr-5 mr-5  text-2xl ">Agency</h1>
            <div className="my-auto">
              <Button className="lg:hidden" size="lg" variant={"default"}>Click</Button>
              <ul className=" font-bold hidden lg:flex ">
                <li className="px-3">Home</li>
                <li className="px-3">Services</li>
                <li className="px-3">Product</li>
              </ul>

            </div>
            <Button variant={"destructive"}>Get Quote</Button>
              
          

        </div>
    




      </section>
  

      
    </div>
  )
}

export default App
