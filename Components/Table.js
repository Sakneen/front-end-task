import style from "../styles/table.module.css"
import places from "../data"
import Image from "next/image";
import { useEffect, useState } from "react";

function Table(props){
    

    let [currentPage , setcurrentPage]=useState(1)
    let [currentRows , setCurrentRows]=useState(5)
    
     
    useEffect(()=>{
        let items=props.items;
        const listDiv=document.getElementById("rows")
        const numsDiv=document.getElementById("nums")
        
        // let currentPage=1;
        // let rows = 5 ; 

        function displayList(items,wrapper,rows,page){
            wrapper.innerText="";
            page--;
            let loopStart=rows*page;
            let paginationItems=items.slice(loopStart , loopStart+rows);
            // console.log(paginationItems)

            for(let i=0 ; i<paginationItems.length ; i++){
                let tableRow=document.createElement("tr");

                //td 1-2
                 for(let k=0 ; k<2 ; k++){
                    let keys=Object.keys(paginationItems[i])

                    let tableData=document.createElement("td")
                    tableData.innerText=paginationItems[i][keys[k]]
                    tableRow.appendChild(tableData)
                 }

                 //td 3
                 let tableData3=document.createElement("td")
                 tableData3.innerText=`${paginationItems[i].price}M EGP`
                 tableRow.appendChild(tableData3)
                 
                 //td 4
                 let tableData4=document.createElement("td")
                 tableData4.innerHTML=`${paginationItems[i].area} m <sup>2</sup>`
                 tableRow.appendChild(tableData4)
                 
                 //td 5
                 let tableData5=document.createElement("td")
                 paginationItems[i].sale?
                 tableData5.innerHTML="<p id='ok'>For Sale</p>":
                 tableData5.innerHTML="<span class='not'>Not For Sale</span>"

                 tableRow.appendChild(tableData5)

                 //td6
                 let tableData=document.createElement("td")
                    tableData.setAttribute("id","show")
                    tableData.setAttribute("data",`${paginationItems[i].images}`)
                    tableData.innerHTML=`<Image 
                                         src=${paginationItems[i].images[Math.floor(Math.random()*(paginationItems[i].images.length))]} 
                                         width=60px height=40px 
                                         />`//import images from data by random index (math.random *(max-min +1)*min)
                    tableRow.appendChild(tableData)
                     



                wrapper.appendChild(tableRow)
            }
        }

        function displayNums(items , wrapper ,  rows ){
            wrapper.innerHTML="";
            let count = Math.ceil(items.length / rows);
            
            for(let i=1 ; i<count+1 ; i++){
                let btn=document.createElement("button")
                btn.innerText=i;

                if(currentPage==i){
                    btn.classList.add("active")
                    btn.style.background="#260cc4"
                    btn.style.color="white"
                }
                btn.addEventListener("click",function(){
                //   /  currentPage=i;///////
                setcurrentPage(i)
                    displayList(items,listDiv,currentRows,currentPage);
                    
                    let currentBTN=document.querySelector("#nums .active");
                    currentBTN.classList.remove("active");
                    btn.classList.add("active")

                })
                wrapper.appendChild(btn)
            }

        }
        
        displayList(items,listDiv,currentRows,currentPage);
        displayNums(items, numsDiv , currentRows)



        
    })

    useEffect(()=>{
        let shows=document.querySelectorAll("#show")
        shows.forEach(function(one){
            one.addEventListener('click',function(){
                props.show()
                let dataStr=one.getAttribute("data")
                let dataArray=dataStr.split(",")
                props.imgesArray(dataArray)
            })
        })
    })

    function manyRows(){

        let ele = document.querySelector("#manyRows")
        setCurrentRows(ele.value)
    }
    
    return(
       
        <>
        
            <table className={style.table}>
                  <thead className={style.head}>
                    <tr>
                        <td>Unit ID </td>
                        <td>Unit type</td>
                        <td>Price</td>
                        <td>Build up area</td>
                        <td>For sale</td>
                        <td>Gallery</td>
                    </tr>
                 </thead>
                 
                 <tbody className={style.row} id="rows" >
            
                        
                 </tbody>

                 
            </table>
        <div className={style.nums} id="nums"> </div>
        
        <div>
            <label className={style.manyrows}>Show</label>
            <select id="manyRows" onChange={manyRows} defaultValue="5" >
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
                <option value={6}>6</option>
                <option value={7}>7</option>
                <option value={8}>8</option>
            </select>
            <label className={style.showrows}>Rows</label>

            
        </div>
        </>   
    )
    
}

export default Table;




