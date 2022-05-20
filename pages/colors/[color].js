
import Colors from "../../data/colors.json"

function Color(props){
    const bc = props.c
    console.log("bc is ", bc)
    return(
<>
        <h1 style={{backgroundColor:`${bc.color}`, color:bc.color==="black"?"white":"black"}}>{bc.name}</h1>
</>
    )
}


export async function  getStaticProps(context){
    console.log(context.params.color)

   const c= Colors.find((i)=>{return i.name===context.params.color})
    

    return { props:{c}}

}

export async function  getStaticPaths(){

    const paths = Colors.map((color)=>({
        params:{color:color.name}
    }))
    console.log(paths)
    return { paths, fallback: false }
}
export default Color