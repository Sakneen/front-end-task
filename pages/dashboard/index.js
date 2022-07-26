import Link from "next/Link"
import Head  from "next/head"
import Table from "../../Components/Table"
import style from "../../styles/dashboard.module.css"
import { useEffect, useState } from "react"
import Slider from "../../Components/Slider"

export default function dashboard(props) {

    let [array , setArray]=useState(props.items)
    let [showSlide , setShowSlide]=useState(false)
    let [imagesArraySlider , setImgesArraySlider]=useState([])
    let [order , setOrder]=useState(1)

  
    
    function show(){
        setShowSlide(!showSlide)
    }

    function returnImgesArray(arr){
        setImgesArraySlider(arr)
        
    }

    useEffect(()=>{
        const numSearch = document.getElementById("search");
        const selectValue = document.getElementById("select");
        let orderEle = document.querySelector("#howorder");

        orderEle.addEventListener("change",function(){
            setOrder(orderEle.value)
        })
    


        numSearch.addEventListener("keyup",function(e){
            e.preventDefault()
            let idSearch = numSearch.value;
            let arr=props.items;

            let item=arr.find(z=>z.id == idSearch)
            item? setArray([item]):setArray(props.items)

        })
        
        selectValue.addEventListener("change",function(){
            if(this.value=="id"){
                let IDArr=props.items.map(z=>z.id)
                let IDArrSorted= order== 1?IDArr.sort():IDArr.sort().reverse()
                console.log(IDArrSorted)
                let all=[];
                for(let i=0 ; i<IDArrSorted.length ; i++){
                    let findItem=array.find(z=>z.id==IDArrSorted[i]);
                    all.push(findItem)  
                }   
                setArray(all)
            }

            if(this.value=="price"){
                let PriceArr=props.items.map(z=>z.price)
                let PriceArrSorted=order== 1?PriceArr.sort():PriceArr.sort().reverse()
                let setPrices=new Set(PriceArrSorted)
                let pricesUnique=[...setPrices]
                let all=[];
                for(let i=0 ; i<pricesUnique.length ; i++){
                    let findItems=array.filter(z=>z.price==pricesUnique[i]);
                    all.push(...findItems)
                }   
                setArray(all)
            }

            if(this.value=="type"){
                let typeArr=props.items.map(z=>z.type)
                let typeArrSorted=order== 1?typeArr.sort():typeArr.sort().reverse()
                let settypes=new Set(typeArrSorted)
                let typesUnique=[...settypes]
                let all=[];
                for(let i=0 ; i<typesUnique.length ; i++){
                    let findItems=array.filter(z=>z.type==typesUnique[i]);
                    all.push(...findItems)  
                }   
                setArray(all)
            }
        })

    },[order])
  return (
    
    <section className={style.main} >
        <Head>
            <title>Sakneen</title>
        </Head>
        {console.log("render")}
        <span className={style.dash}>Dashboard</span>
        <div className={style.nav}> <Link style={{"margin_right":"10px"}} href={`/`} >Home</Link>   &gt;  Dashboard</div>
        <form className={style.form}>
            <label onClick={show}  >Filters by ID:</label>
            <input type={"number"} placeholder={"ex:45785"}  id="search"/>

            <label className={style.manyrows}>Order will be</label>
            <select id="howorder" style={{border:"1px solid black"}} >
                <option value={1}>Asc</option>
                <option value={0}>Desc</option>
            </select>

            <div style={{"display":"inline" , float:"right"}}>
                <label>Sort by:</label>
                <select id="select">
                    <option value={"id"}>Unit ID</option>
                    <option value={"type"}>Unit Type</option>
                    <option value={"price"}>Unit Price</option>
                </select>
            </div>
        </form>


        <Table items={array} show={show} imgesArray={returnImgesArray} />
        {showSlide?<Slider show={show} images={imagesArraySlider}   />:null}










     </section>
     
  )
}



export async function getStaticProps(){
    const res = await fetch("http://localhost:3000/api/placesAPI");
    const allData=await res.json();

    return{
        props:{
            items:allData
        }
    }

}