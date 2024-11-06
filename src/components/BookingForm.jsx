import React from "react";
import { useState } from "react";

const BookingForm = ({availableTimes = [], dispatch, submitForm }) => {
  const [date, setDate] = useState("");
  const [times, setTimes] = useState("");
  const [guests, setGuests] = useState("");
  const [occassion, setOccassion] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    submitForm(e);
  };    
  const handleChange = (e) => {
    setDate(e);
    dispatch(e);
  };
  return (
    <header>
      <section>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <div>
              <label htmlFor="book-date">Choose Date</label>
              <input
                id="book-date"
                value={date}
                onChange={(e) => handleChange(e.target.value)}
                type="date"
                required
              />
            </div>
            <div>
              <label htmlFor="book-time">Choose Time:</label>
              <select
                id="book-time"
                value={times}
                onChange={(e) => setTimes(e.target.value)}
              >
                <option value="">Select a Time</option>
                {availableTimes.map((availableTimes) => {
                  return <option key={availableTimes}>{availableTimes}</option>;
                })}
              </select>
            </div>

            <div>
              <label htmlFor="book-guests">Number of Guests:</label>
              <input
                id="book-guests"
                value={guests}
                min="1"
                onChange={(e) => setGuests(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="book-occassion">Occassion:</label>
              <select
                id="book-occassion"
                key={occassion}
                value={occassion}
                onChange={(e) => setOccassion(e.target.value)}
              >
                <option>Birthday</option>
                <option>Anniversary</option>
              </select>
            </div>
            <div className="btnReceive">
              <input
                aria-label="On Click"
                type="submit"
                value={"Make Your Reservation"}
              />
            </div>
          </fieldset>
        </form>
      </section>
    </header>
  );
};

export default BookingForm;
