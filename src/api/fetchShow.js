import axios from "axios";


const fetchshow = () => {
  return (
      axios
      .get(
          "https://api.tvmaze.com/singlesearch/shows?q=stranger-things&embed=episodes"
        )
      .then(res => {
          return res;
          })
      .catch(error => {
          return error;
      })     
  )
}

export default fetchshow;