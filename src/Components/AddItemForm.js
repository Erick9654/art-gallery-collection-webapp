
// import React, { useState } from 'react';
// import { useForm } from 'react-hook-form';

// function ArtForm() {
//     const { register, handleSubmit, formState: { errors } } = useForm();
//     const [imageUrl, setImageUrl] = useState('');
//     const [file, setFile] = useState(null);

//     const handleImageUpload = (e) => {
//         const uploadedFile = e.target.files[0];
//         setFile(uploadedFile);

//         // Optional: You can also show a preview of the uploaded image
//         const reader = new FileReader();
//         reader.onload = () => {
//             setImageUrl(reader.result);
//         };
//         reader.readAsDataURL(uploadedFile);
//     };

//     const onSubmit = (data) => {
//         console.log(data); // Handle form data submission
//         // Reset form fields if needed
//         setImageUrl('');
//         setFile(null);
//     };

//     return (
    
//         <form onSubmit={handleSubmit(onSubmit)}>
            
//             <div>
//                 <label htmlFor="imageUrl">Image URL:</label>
//                 <input
//                     type="url"
//                     id="imageUrl"
//                     {...register("imageUrl", { required: true })}
//                 />
//                 {errors.imageUrl && <span>This field is required</span>}
//             </div>
//             <div>
//                 <label htmlFor="uploadImage">Upload Image:</label>
//                 <input
//                     type="file"
//                     id="uploadImage"
//                     accept="image/*"
//                     onChange={handleImageUpload}
//                 />
//                 {file && <img src={imageUrl} alt="Uploaded Artwork" style={{ maxWidth: '200px', marginTop: '10px' }} />}
//             </div>
//             <div>
//                 <label htmlFor="description">Description:</label>
//                 <textarea
//                     id="description"
//                     {...register("description")}
//                 />
//             </div>
//             <div>
//                 <label htmlFor="genre">Genre:</label>
//                 <select id="genre" {...register("genre")}>
//                     <option value="abstract">Abstract</option>
//                     <option value="portrait">Portrait</option>
//                     <option value="landscape">Landscape</option>
//                     <option value="stillLife">Still Life</option>
//                     {/* Add more genres as needed */}
//                 </select>
//             </div>
//             <button type="submit">Submit</button>
//         </form>
//     );
// }

// export default ArtForm;
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import backgroundImage from "./purple-fluid-art-art-background-diy-abstract-flowing-texture.jpg"; // Replace 'background.jpg' with your actual background image file

function AddArtForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data); // Handle form data submission
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
      }}
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{
          // backgroundColor: "rgba(255, 255, 255, 0.8)",
          padding: "20px",
          borderRadius: "8px",
          maxWidth: "400px",
          width: "100%",
        }}
      >
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            {...register("name", { required: true })}
          />
          {errors.name && (
            <span style={{ color: "red" }}>Name is required</span>
          )}
        </div>
        <div>
          <label htmlFor="imageUrl">Image URL:</label>
          <input
            type="url"
            id="imageUrl"
            {...register("imageUrl", {
              pattern: /^(https?:\/\/.*\.(?:png|jpg|jpeg))$/i,
              required: true,
            })}
          />
          {errors.imageUrl && (
            <span style={{ color: "red" }}>Please enter a valid image URL</span>
          )}
        </div>
        <div>
          <p> Or</p>
        </div>
        <div>
          <label htmlFor="uploadImage">Upload Image:</label>
          <input
            type="file"
            id="uploadImage"
            accept="image/*"
            {...register("uploadImage")}
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            {...register("description", { required: true })}
          />
          {errors.description && (
            <span style={{ color: "red" }}>Description is required</span>
          )}
        </div>
        <div>
          <label htmlFor="genre">Genre:</label>
          <select id="genre" {...register("genre")}>
            <option value="abstract">Abstract</option>
            <option value="portrait">Portrait</option>
            <option value="landscape">Landscape</option>
            <option value="stillLife">Still Life</option>
          
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddArtForm;
