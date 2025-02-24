import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebaseConfig"; // Import Firestore
import "../styles/DonateFood.css"; // Import CSS
import donateBg from "../assets/donate-bg.jpg"; // Import background image

const DonateFood = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [food, setFood] = useState("");
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, "donations"), {
        name,
        phone,
        location,
        food,
        description,
        quantity,
        timestamp: new Date(),
      });
      alert("Donation added successfully!");
      setName("");
      setPhone("");
      setLocation("");
      setFood("");
      setDescription("");
      setQuantity("");
    } catch (error) {
      console.error("Error adding donation:", error);
    }
  };

  return (
    <div
      className="donate-container"
      style={{
        backgroundImage: `url(${donateBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="donate-form">
        <h2 className="donate-title">🍽️ Donate Food</h2>
        <p className="donate-subtext">Your small act of kindness can make a big difference!</p>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type="tel"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <input
              type="text"
              placeholder="Location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Food Item"
              value={food}
              onChange={(e) => setFood(e.target.value)}
              required
            />
          </div>
          <textarea
            placeholder="Food Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
          <input
            type="number"
            placeholder="Quantity (e.g., 10 plates)"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            required
          />
          <button type="submit" className="donate-btn">📩 Submit Donation</button>
        </form>
      </div>
    </div>
  );
};

export default DonateFood;
