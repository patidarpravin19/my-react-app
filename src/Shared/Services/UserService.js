export async function getData(page) {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=" + page);
        return await response.json();
    } catch (error) {
        return [];
    }
}

export async function saveData(data) {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        // body: JSON.stringify({
        //     title: data.title,
        //     body: data.body,
        //     userId: Math.random().toString(36).slice(2),
        //  }),
        body: JSON.stringify(data),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    return await response.json();
}

export async function deleteData(id) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method:"DELETE",
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    return await response.json();
}