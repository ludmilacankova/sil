import React, { useEffect, useState } from "react";

function Reference() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("/api/reviews.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  const [filter, setFilter] = useState("Vše");

  const filteredReviews = reviews.filter((review) => {
    return filter === "Vše" || review.target === filter;
  });

  return (
    <>
      <div className="section">
        <h1>Recenze</h1>
        <select onChange={(e) => setFilter(e.target.value)} value={filter}>
          <option value="" disabled selected hidden>
            -- Vyberte oblast --
          </option>
          <option value="Vše">Vše</option>
          <option value="Poradenství">Poradenství</option>
          <option value="Zastupování na úřadech">Zastupování na úřadech</option>
          <option value="Kurz účetnictví">Kurz účetnictví</option>
          <option value="Kurz marketingu">Kurz marketingu</option>
          <option value="Kurz Excelu">Kurz Excelu</option>
        </select>

        <ul className="reference">
          {filteredReviews.map((review) => (
            <li key={review.id}>
              <p>
                <strong>{review.name}</strong> ({review.date}):
              </p>
              <p className="target">
                <strong>{review.target}</strong>
              </p>
              <p>{review.review}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Reference;
