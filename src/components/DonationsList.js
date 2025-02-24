import React, { useState, useEffect } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../firebaseConfig"; // Import Firestore

const DonationList = () => {
  const [donations, setDonations] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "donations"), (snapshot) => {
      const donationData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setDonations(donationData);
    });

    return () => unsubscribe(); // Cleanup listener on unmount
  }, []);

  return (
    <div>
      <h2>Donation List</h2>
      <ul>
        {donations.map((donation) => (
          <li key={donation.id}>
            {donation.name} donated {donation.food} ({donation.quantity})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DonationList;
