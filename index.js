// Classic way using .then & .catch
function searchBusiness(name, street, zip, country) {
  const url =
    'https://uberall.com/api/search/?public_key=GNpPyrkYiTS5BV4F8XckW3kYurprwSk7cRG3Z4jOtrTTBceyfPveAOvDFk3mYY0ofundf';

  const searchData = {
    name: name,
    country: country,
    street: street,
    zip: zip
  };

  const options = {
    method: 'POST',
    body: JSON.stringify(searchData),
    headers: {
      'Content-Type': 'application/json'
    }
  };

  fetch(url, options)
    .then(res => res.json())
    .then(res => console.log(res.response.searchData))
    .catch(error => {
      console.log(error);
    });
}

searchBusiness('Saturn', 'Elsenstr. 111 - 114', ' 12435', 'DE');

// ES6 using async await with try/catch
searchBusiness2 = async (name, street, zip, country) => {
  const url =
    'https://uberall.com/api/search/?public_key=GNpPyrkYiTS5BV4F8XckW3kYurprwSk7cRG3Z4jOtrTTBceyfPveAOvDFk3mYY0ofundf';

  const searchData = {
    name: name,
    country: country,
    street: street,
    zip: zip
  };

  try {
    let response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(searchData)
    });
    let result = await response.json();
    console.log(result.response.searchData);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

searchBusiness2('Saturn', 'Elsenstr. 111 - 114', ' 12435', 'DE');
