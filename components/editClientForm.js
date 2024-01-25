"use client";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useState } from "react";

const EditClientForm = ({ idState, id }) => {
  const router = useRouter();
  const [state, setState] = useState(idState);
  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put("http://localhost:8000/clients/" + id, state).then(() => {
      router.refresh("/");
      router.push("/");
    });
  };
  return (
    <>
      <div>
        <div className="container md-5 display">
          <h1> Edit Client </h1>
          <form onSubmit={handleSubmit} className="form-horizontal row g-3">
            <div className="form-group txt">
              <label htmlFor="ID">ID</label>
              <div className="col-sm-6">
                <input
                  type="text"
                  value={state.id}
                  className="form-control"
                  name="id"
                  placeholder="Enter ID"
                  required
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-group txt">
              <label htmlFor="name"> Name</label>
              <div className="col-sm-6">
                <input
                  type="text"
                  value={state.Name}
                  className="form-control"
                  name="Name"
                  placeholder="Enter Name"
                  required
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-group txt">
              <label htmlFor="Domain">Domain</label>
              <div className="col-sm-6">
                <input
                  type="text"
                  value={state.domain}
                  className="form-control"
                  name="domain"
                  placeholder="Enter Domain"
                  required
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="col-sm-6">
              <button type="submit" className=" btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default EditClientForm;
