const API_URL = "http://localhost:3000";

export async function getHelicopters(limit: number, offset: number){
    const res = await fetch(`${API_URL}/helicopters?limit=${limit}&offset=${offset}`,{
        method: "GET",
    })

    if (!res.ok) {
        throw new Error(
            "Cannot load helicopters",
        );
    }

    return res.json();
}

export async function getHelicopterById(id: number) {

    const res = await fetch(`${API_URL}/helicopters/${id}`);

    if (!res.ok) {
        throw new Error(
            "Cannot load helicopter"
        );
    }

    return res.json();
}