import axios from 'axios';

export const fetchCategory = async (currCategory) => {
  let urlToFetch = ''
  if (currCategory === 'Clothes' || currCategory === 'Shoes')
    urlToFetch = 'https://65738184063f876cec9cfc5b.mockapi.io/'
  else
    urlToFetch = 'https://6575ca31b2fbb8f6509d8140.mockapi.io/'
  const productRes = await axios.get(urlToFetch + currCategory);
  return productRes
}