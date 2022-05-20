
import Link from "next/link";
export default function Layout({children}){
    return(
        <>

        <div>Hello World Dude</div>
        <Link href="about"><a>About</a></Link>
            <div>
            

                {children}
            </div>
        </>
    )
}