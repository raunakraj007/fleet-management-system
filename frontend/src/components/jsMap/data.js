const visits = [
    { lat: 31.244945, lng: 75.734693 },
    { lat: 31.257914, lng: 75.707652 },
    { lat: 31.258284, lng: 75.705971 },
    { lat: 31.269134, lng: 75.702185 },
    { lat: 31.259817, lng: 75.734911 },
    { lat: 31.256, lng: 75.760968 },
    { lat: 31.234875, lng: 75.804975 },
    { lat: 31.241326, lng: 75.795929 },
    { lat: 31.242099, lng: 75.792834 },
    { lat: 31.247476, lng: 75.775466 },
  ];
  
  function getData() {

    
    const data = [];
  
    for (let index = 0; index < visits.length; index++) {
      const { lat, lng } = visits[index];
      data.push({
        id: String(index),
        position: { lat, lng },
        zIndex: index,
        type: index === 2 ? "pin" : "html",
      });
    }
  
    return data;
  }
  
  export { getData };
  