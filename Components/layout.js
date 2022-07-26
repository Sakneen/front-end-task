import style from "../styles/layout.module.css"
import logo from "../images/logo.jpg"
import Image from "next/image";

function Layout(props){
    return(
       <div>
            <div className={style.top}>
                <div className={style.space}></div>
              <Image src={logo} width={"30px"} height={"30px"} /> 
            </div>
            {props.children}
            <span className={style.right}> &copy; 2022 Sakneen,lnc. All rights reserved.</span>
        </div>
    )
}

export default Layout;