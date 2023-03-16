import Navbar from "../navbar/Navbar";

const  HomeLayout=(props : {children : React.ReactNode}) =>{

  return (
   <>
     <Navbar />
     {props.children}

   </>
  )
}

export default HomeLayout