import React, { useState } from "react";
import axios from "axios";

const UpdateItems = (props) => {
    const [newImage, setNewImage] = useState("")

    const [newDescription, setNewDescription] = useState("")

    const updated = async (id) => {
        try {
            const response = await axios.put(`http://localhost:3000/api/news/${id}`, {
                image: newImage,

                description: newDescription,
            });
            props.getAllNews()
            props.setView('news')
                } catch (err) {
            console.log(err);    
            }
    }

    return (
        <div>
                        <input type="text" value={newImage} onChange={e => setNewImage(e.target.value)} />

            <input type="text" value={newDescription} onChange={e => setNewDescription(e.target.value)} />
            <button onClick={() => updated(props.id)}>Update</button>
        </div>
    );
};

export default UpdateItems;
