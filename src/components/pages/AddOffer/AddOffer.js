import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import "./AddOffer.css";
const AddOffer = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);

    axios
      .post("https://polar-lowlands-04109.herokuapp.com/services", data)
      .then((res) => {
        if (res.data.insertedId) {
          console.log(data);
          alert("added successfully");
          reset();
        }
      });
  };
  return (
    <div className="add-offer my-5">
      <div className="text-center">
        <h2>Add New Offer</h2>
        <p>Add New Offer For To Impress Visitor & Grow Your Business</p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("name", { required: true, maxLength: 20 })}
          placeholder=" Name"
        />
        <input type="number" {...register("price")} placeholder=" Price" />
        <input type="number" {...register("days")} placeholder=" Days" />
        <textarea {...register("description")} placeholder=" Description" />
        <input {...register("img")} placeholder="Image url" />
        <input type="submit" className="btn btn-primary" />
      </form>
    </div>
  );
};

export default AddOffer;
