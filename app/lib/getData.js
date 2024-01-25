export default async function getData(){
    const res=await fetch("http://localhost:8000/clients/",{cache:"no-store"})
    return res.json();
}