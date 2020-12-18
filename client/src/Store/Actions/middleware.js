import { setRestaurants, setLoading, setError } from './restaurantAction'

export function FETCH_RESTAURANTS () {
  const APIUrl = `https://developers.zomato.com/api/v2.1/collections?city_id=74`
  return (dispatch) => {
    dispatch(setLoading(true))
    fetch(APIUrl,{
      method: 'GET',
      headers: {
        'user-key' : `94bfe3100a42a2ddfcdd7b40757647ed`,
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then((resp) => {
        return resp.json()
      })
      .then(({collections}) => {
        dispatch(setRestaurants(collections))
      })
      .catch(err => {
        dispatch(setError(true))
      })
      .finally(_=> {
        dispatch(setLoading(false))
      })
  }
}