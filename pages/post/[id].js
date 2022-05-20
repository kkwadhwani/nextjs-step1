


function Post(props){
    const post = props.post
    return(
<>
   <h1> {post.id}</h1>

   <p>{post.body}</p>
</>
    )
}






export async function getStaticProps(context){
    console.log(context)
  
   
//
    const fetchData=await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)
    const post = await fetchData.json()
    
    return {
      props:{
        post
      }
    }
    }


export async function getStaticPaths(){

    const fetchData=await fetch("https://jsonplaceholder.typicode.com/posts")
    const posts = await fetchData.json()
    
    
    const ids = posts.map((post) => post.id)
    console.log(ids)
    const paths = ids.map((id)=>({params:{id:id.toString()}}))


    return { paths, fallback: false }
    
    }


export default Post