
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import backgroundImage from "./pexels-anniroenkae-2983141.jpg";

function AddItemForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const onSubmit = async (data) => {
    try {
      await axios.post(
        "https://json-server-template-dej7.onrender.com/art-pieces",
        data
      );
      setSubmitSuccess(true);
      reset();
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(255, 255, 255, 0.9)",
      }}
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.95)",
          padding: "40px",
          borderRadius: "8px",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          maxWidth: "500px",
          width: "100%",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            marginBottom: "20px",
            fontFamily: "Arial, sans-serif",
            fontSize: "1.5rem",
            fontWeight: "bold",
            color: "#333",
            textTransform: "uppercase",
            letterSpacing: "2px",
          }}
        >
          Add New Artwork
        </h2>
        <div style={{ marginBottom: "20px" }}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            {...register("name", { required: "Name is required" })}
            style={{
              padding: "8px",
              boxSizing: "border-box",
              borderRadius: "4px",
              borderColor: errors.name ? "red" : "#ccc",
            }}
          />
          {errors.name && (
            <span style={{ color: "red", marginTop: "4px", display: "block" }}>
              {errors.name.message}
            </span>
          )}
        </div>
               <div style={{ marginBottom: "20px" }}>
         <label htmlFor="uploadImage">Upload Image:</label>
         <input
            type="file"
            id="uploadImage"
            accept=".jpg, .jpeg"
            {...register("uploadImage", { required: "Please upload an image" })}
            style={{
              padding: "8px",
              boxSizing: "border-box",
              borderRadius: "4px",
              borderColor: errors.uploadImage ? "red" : "#ccc",
            }}
          />
          {errors.uploadImage && (
            <span style={{ color: "red", marginTop: "4px", display: "block" }}>
              {errors.uploadImage.message}
            </span>
          )}
        </div>
        <div style={{ marginBottom: "20px" }}>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            {...register("description", { required: "Description is required" })}
            style={{
              width: "100%",
              padding: "8px",
              boxSizing: "border-box",
              borderRadius: "4px",
              borderColor: errors.description ? "red" : "#ccc",
            }}
          />
          {errors.description && (
            <span style={{ color: "red", marginTop: "4px", display: "block" }}>
              {errors.description.message}
            </span>
          )}
        </div>
        <div style={{ marginBottom: "20px" }}>
          <label htmlFor="genre">Genre:</label>
          <select
            id="genre"
            {...register("genre")}
            style={{
              width: "100%",
              padding: "8px",
              boxSizing: "border-box",
              borderRadius: "4px",
            }}
          >
            <option value="abstract">Abstract</option>
            <option value="portrait">Portrait</option>
            <option value="landscape">Landscape</option>
            <option value="stillLife">Still Life</option>
          </select>
        </div>


        <button
          type="submit"
          disabled={isSubmitting}
          style={{
            width: "100%",
            padding: "10px",
            borderRadius: "4px",
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            cursor: isSubmitting ? "not-allowed" : "pointer",
          }}
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
        {submitSuccess && (
          <div style={{ color: "green", marginTop: "10px" }}>
            Submission successful!
          </div>
        )}
      </form>
    </div>
  );
}

export default AddItemForm;
