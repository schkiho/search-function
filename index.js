const url =
  'https://uberall.com/api/search/?public_key=GNpPyrkYiTS5BV4F8XckW3kYurprwSk7cRG3Z4jOtrTTBceyfPveAOvDFk3mYY0ofundf';

async function searchBusiness(name, street, zip, country) {
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
    .then(res => console.log(res.response.searchData));
}

console.log(searchBusiness('Saturn', 'Elsenstr. 111 - 114', ' 12435', 'DE'));
