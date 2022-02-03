const getAllCases = async () => {
  try {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    const res = await fetch("/api/deathcauses", requestOptions)
    /*   .then((response) => response.text())
      .then((result) => console.log("result: ", result))
      .catch((error) => console.log("error", error)); */

      console.log(res)
      console.log(res.ok)
      const json = await res.json()

    console.log("json: ", json)

      if (!res.ok) {
        const errors = Object.entries(json.errors).map(
            ([field, { message }]) => ({ field, message }),
        )
        console.log({errors})
        return { success: false, data: errors }
    }

    return { success: true, data: json }


  } catch (e) {
    console.error(e);
    return { success: false, data: [] };
  }
};

export default getAllCases;
