export default async function getEditData(id){
    const res=await fetch("http://localhost:8000/clients/"+id,{cache:"no-store"})
    return res.json();
}