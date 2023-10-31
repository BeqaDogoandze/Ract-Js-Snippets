useEffect(() => {
  axios
    .get(url)
    .then((response) =>  setFunction(
      {
        console.log(response);
        return  response.data.results
    })
}, [])