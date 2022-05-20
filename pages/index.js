
import Link from "next/link"
import Layout from "../componenets/Layout.js"

import House from "./home.js"
import Colors from "../data/colors.json"
export default function Home(props) {

  const posts=props.posts
 
  return (
    <>
    <Layout />

   <House />

  {posts.map((post)=>{
    return <h5>
      <Link href={`post/${post.id}`}><a>{post.title}</a></Link>
    </h5>
  })}
   

   <br />   <br />

   {Colors.map((name)=>{
     return <h4>
       <Link href={`colors/${name.name}`}><a>{name.name}</a></Link>
     </h4>
   })}
   </>
    
   
    
  )
}




export async function getStaticProps(){
const fetchData=await fetch("https://jsonplaceholder.typicode.com/posts")
const posts = await fetchData.json()

return {
  props:{
    posts
  }
}
}
