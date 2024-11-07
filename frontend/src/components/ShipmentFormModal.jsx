import React, { useState } from 'react';

const ModalForm = () => {
  const [formData, setFormData] = useState({
    displayName: '',
    pickups: [
      {
        arrivalWaypoint: {
          location: {
            latLng: {
              latitude: '',
              longitude: '',
            },
          },
        },
        timeWindows: [
          {
            startTime: {
              seconds: '',
            },
            endTime: {
              seconds: '',
            },
          },
        ],
        duration: {
          seconds: '',
        },
        cost: '',
        loadDemands: {
          weight: {
            amount: '',
          },
        },
      },
    ],
    deliveries: [
      {
        arrivalWaypoint: {
          location: {
            latLng: {
              latitude: '',
              longitude: '',
            },
          },
        },
        timeWindows: [
          {
            startTime: {
              seconds: '',
            },
            endTime: {
              seconds: '',
            },
          },
        ],
        duration: {
          seconds: '',
        },
        cost: '',
        loadDemands: {
          weight: {
            amount: '',
          },
        },
      },
    ],
    loadDemands: {
      weight: {
        amount: '',
      },
    },
    allowedVehicleIndices: [0, 1],
    pickupToDeliveryTimeLimit: '',
    ignore: false,
  });

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => {
      const keys = name.split('.');
      const lastKey = keys.pop();
      const nestedObj = keys.reduce((acc, key) => acc[key], prevData);

      // Handle nested input
      if (Array.isArray(nestedObj)) {
        // For arrays, handle by index
        const index = parseInt(keys[keys.length - 1]);
        nestedObj[index][lastKey] = value;
      } else {
        nestedObj[lastKey] = value;
      }

      return { ...prevData };
    });
  };

  // Handle checkbox for `ignore`
  const handleCheckboxChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      ignore: e.target.checked,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Here you can send the data to your server or API.
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Display Name</label>
        <input
          type="text"
          name="displayName"
          value={formData.displayName}
          onChange={handleInputChange}
          className="input"
        />
      </div>

      <div>
        <h3>Pickups</h3>
        {formData.pickups.map((pickup, index) => (
          <div key={index}>
            <div>
              <h4>Pickup {index + 1}</h4>
              <label>Latitude</label>
              <input
                type="number"
                name={`pickups.${index}.arrivalWaypoint.location.latLng.latitude`}
                value={pickup.arrivalWaypoint.location.latLng.latitude}
                onChange={handleInputChange}
                className="input"
              />

              <label>Longitude</label>
              <input
                type="number"
                name={`pickups.${index}.arrivalWaypoint.location.latLng.longitude`}
                value={pickup.arrivalWaypoint.location.latLng.longitude}
                onChange={handleInputChange}
                className="input"
              />
            </div>

            <div>
              <h4>Time Windows</h4>
              {pickup.timeWindows.map((window, timeIndex) => (
                <div key={timeIndex}>
                  <label>Start Time (seconds)</label>
                  <input
                    type="number"
                    name={`pickups.${index}.timeWindows.${timeIndex}.startTime.seconds`}
                    value={window.startTime.seconds}
                    onChange={handleInputChange}
                    className="input"
                  />

                  <label>End Time (seconds)</label>
                  <input
                    type="number"
                    name={`pickups.${index}.timeWindows.${timeIndex}.endTime.seconds`}
                    value={window.endTime.seconds}
                    onChange={handleInputChange}
                    className="input"
                  />
                </div>
              ))}
            </div>

            <div>
              <label>Duration (seconds)</label>
              <input
                type="number"
                name={`pickups.${index}.duration.seconds`}
                value={pickup.duration.seconds}
                onChange={handleInputChange}
                className="input"
              />

              <label>Cost</label>
              <input
                type="number"
                name={`pickups.${index}.cost`}
                value={pickup.cost}
                onChange={handleInputChange}
                className="input"
              />
            </div>

            <div>
              <label>Load Weight</label>
              <input
                type="number"
                name={`pickups.${index}.loadDemands.weight.amount`}
                value={pickup.loadDemands.weight.amount}
                onChange={handleInputChange}
                className="input"
              />
            </div>
          </div>
        ))}
      </div>

      <div>
        <h3>Deliveries</h3>
        {formData.deliveries.map((delivery, index) => (
          <div key={index}>
            <div>
              <h4>Delivery {index + 1}</h4>
              <label>Latitude</label>
              <input
                type="number"
                name={`deliveries.${index}.arrivalWaypoint.location.latLng.latitude`}
                value={delivery.arrivalWaypoint.location.latLng.latitude}
                onChange={handleInputChange}
                className="input"
              />

              <label>Longitude</label>
              <input
                type="number"
                name={`deliveries.${index}.arrivalWaypoint.location.latLng.longitude`}
                value={delivery.arrivalWaypoint.location.latLng.longitude}
                onChange={handleInputChange}
                className="input"
              />
            </div>

            <div>
              <h4>Time Windows</h4>
              {delivery.timeWindows.map((window, timeIndex) => (
                <div key={timeIndex}>
                  <label>Start Time (seconds)</label>
                  <input
                    type="number"
                    name={`deliveries.${index}.timeWindows.${timeIndex}.startTime.seconds`}
                    value={window.startTime.seconds}
                    onChange={handleInputChange}
                    className="input"
                  />

                  <label>End Time (seconds)</label>
                  <input
                    type="number"
                    name={`deliveries.${index}.timeWindows.${timeIndex}.endTime.seconds`}
                    value={window.endTime.seconds}
                    onChange={handleInputChange}
                    className="input"
                  />
                </div>
              ))}
            </div>

            <div>
              <label>Duration (seconds)</label>
              <input
                type="number"
                name={`deliveries.${index}.duration.seconds`}
                value={delivery.duration.seconds}
                onChange={handleInputChange}
                className="input"
              />

              <label>Cost</label>
              <input
                type="number"
                name={`deliveries.${index}.cost`}
                value={delivery.cost}
                onChange={handleInputChange}
                className="input"
              />
            </div>

            <div>
              <label>Load Weight</label>
              <input
                type="number"
                name={`deliveries.${index}.loadDemands.weight.amount`}
                value={delivery.loadDemands.weight.amount}
                onChange={handleInputChange}
                className="input"
              />
            </div>
          </div>
        ))}
      </div>

      <div>
        <label>Load Weight (Overall)</label>
        <input
          type="number"
          name="loadDemands.weight.amount"
          value={formData.loadDemands.weight.amount}
          onChange={handleInputChange}
          className="input"
        />
      </div>

      <div>
        <label>Pickup to Delivery Time Limit (seconds)</label>
        <input
          type="number"
          name="pickupToDeliveryTimeLimit"
          value={formData.pickupToDeliveryTimeLimit}
          onChange={handleInputChange}
          className="input"
        />
      </div>

      <div>
        <label>Ignore</label>
        <input
          type="checkbox"
          name="ignore"
          checked={formData.ignore}
          onChange={handleCheckboxChange}
        />
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default ModalForm;
