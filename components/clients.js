"use client";
import axios from "axios";
import { useRouter } from "next/navigation";

const Clients = ({clients}) => {
  const router = useRouter();
  const onDelete = (id) => {
    axios.delete(`http://localhost:8000/clients/${id}`).then((res) => {
      router.refresh();
    });
  };
  const onEdit = (id) => {
    router.push(`/editClient/${id}`);
  };
  const addClick = () => {
    router.push("/addClient");
  };
  return (
    <>
      <section className="my-3 container">
        <div className="d-flex justify-content-end mb-3">
          <button
            className=" mx-5 btn rounded-pill btn-primary"
            onClick={addClick}
          >
            ADD client
          </button>
        </div>
        <table className="table">
          <thead>
            <tr className="table-light">
              <th scope="col">Id</th>
              <th scope="col">Name</th>
              <th scope="col">Domain</th>
              <th scope="col">Edit</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {clients.map(
              ({ id, Name, domain }) => (
                <tr key={id} className="table-primary">
                  <th scope="row">{id}</th>
                  <td>{Name}</td>
                  <td>{domain}</td>
                  <td>
                    <button onClick={() => onEdit(id)} type="button" className=" btn btn-primary">
                      Edit
                    </button>
                  </td>
                  <td>
                    <button onClick={() => onDelete(id)} type="button" className=" btn btn-primary">Delete</button>
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </section>
    </>
  );
};
export default Clients;
