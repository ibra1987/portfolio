import { createRef, SetStateAction, useRef }  from "react"

type propTypes ={
    scrollRequest:Boolean,
    setScrollRequest:React.Dispatch<SetStateAction<Boolean>>
}
const filters :string[] = ["html/css","Vanilla Javacript","Vanilla Typescript","React/Javascript","React/Typescript","Nexj/Javascript","Express Js"]
const Works = ({scrollRequest,setScrollRequest}:propTypes) => {
const myRef = useRef<HTMLElement>()
 if(scrollRequest && myRef.current){
    
    myRef.current.scrollIntoView()
   
 }
  return (
    <section  className="w-full flex flex-col justify-start items-center my-6" ref={myRef}>
        <h3 className="my-4 text-4xl tracking-widest font-extrabold ">Projects</h3>
        <div className="w-full my-4 grid girdc-cols-4 md:grid-flow-col">
            {filters?.map(skill=>{

                return <span className={"p-3 rounded text-center font-bold bg-yellow-400 mx-1 text-gray-600"} key={skill}>
                     {skill}
                </span>
            })}

        </div>
        
    </section>
  )
}

export default Works