import officeImage from "./office.webp";
import "./App.css";

function App() {

  const offices = [
    {
      name: "Tech Park",
      rent: 55000,
      address: "Chennai"
    },
    {
      name: "DLF IT Park",
      rent: 75000,
      address: "Bangalore"
    },
    {
      name: "Cyber City",
      rent: 90000,
      address: "Hyderabad"
    }
  ];

  return (
    <div className="App">

      <h1>Office Space Rental App</h1>

      <img
        src={officeImage}
        alt="Office"
        width="350"
        height="220"
      />

      <hr />

      {offices.map((office, index) => (

        <div key={index} className="card">

          <h2>{office.name}</h2>

          <p>
            <b>Address :</b> {office.address}
          </p>

          <p>
            <b>Rent :</b>

            <span
              style={{
                color: office.rent < 60000 ? "red" : "green",
                fontWeight: "bold"
              }}
            >
              ₹{office.rent}
            </span>

          </p>

        </div>

      ))}

    </div>
  );
}

export default App;