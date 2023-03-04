import Link from "next/link"

async function getPost(){
  const res=await fetch(`${process.env.BASE_URL}/api/getPost`)
  if(!res.ok){
    console.log(res);
  }
  return res.json()
}

export default async function Home() {
  const data=await getPost()
  console.log(data);
  
  return (
    <main className="py-4 px-8 ">
      <h1>Hello</h1>
      <Link href={'/dashboard'} >Go to dashboard</Link>
    </main>
  )
}
