const guardarDeathCase = async (data) => {
  try {
    const res = await fetch("/api/deathcause/new", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const json = await res.json();

    if (!res.ok) {
      const errors = Object.entries(json.errors).map(
        ([field, { message }]) => ({ field, message })
      );
      console.log({ errors });
      return { success: false, data: errors };
    }
    return { success: true, data: res.statusText };
  } catch (e) {
    console.error(e);
    return { success: false, data: { errors: { error: e } } };
  }
};

export default guardarDeathCase;
