import React, { useEffect, useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Map from './Map.jsx';

function App() {
  const [data, setData] = React.useState([]);
  const [ip, setIp] = useState('');
  const [clickState, setClick] = useState(false);

  useEffect(() => {
    const url = `https://ip-lookup-by-api-ninjas.p.rapidapi.com/v1/iplookup?address=${ip}`;

    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': `${process.env.API_KEY}`,
        'X-RapidAPI-Host': 'ip-lookup-by-api-ninjas.p.rapidapi.com',
      },
    };

    async function getData() {
      await fetch(url, options)
        .then((res) => res.json())
        .then((json) => setData(json))
        .catch((err) => console.error('error:' + err));
    }
    getData();
  }, [ip]);

  // console.log(data);
  function action(ip) {
    setIp(ip);
    setClick(true);
    // getData();
  }
  return (
    <div className="main-div container-fluid">
      <Header action={action} />
      <center>
        <div className="ip-info row container-fluid">
          <br />

          <div className="col-lg-3">
            <h4> IP Address</h4>
            {clickState ? data.address : '...'}
          </div>
          <div className="col-lg-3">
            <h4> Location</h4>
            {clickState ? data.city : '...'} ,{' '}
            {clickState ? data.region_code : '...'}
          </div>
          <div className="col-lg-3">
            <h4> Time Zone</h4>
            {clickState ? data.timezone : '...'}
          </div>
          <div className="col-lg-3">
            <h4> Country</h4>
            {clickState ? data.country : '...'}
          </div>
        </div>
        <br />
        <hr style={{ height: '2px' }} />
      </center>
      <Map long={data.lon} lat={data.lat} />
      <Footer />
    </div>
  );
}

export default App;
