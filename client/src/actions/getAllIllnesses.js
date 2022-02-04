const getAllIllnesses = async () => {
  try {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    const res = await fetch("/api/illnesses", requestOptions);
    const json = await res.json();

    if (!res.ok) {
      const errors = Object.entries(json.errors).map(
        ([field, { message }]) => ({ field, message })
      );
      return { success: false, data: errors };
    }

    return { success: true, data: json };
  } catch (e) {
    console.error(e);
    return { success: false, data: [] };
  }
};

export default getAllIllnesses;
