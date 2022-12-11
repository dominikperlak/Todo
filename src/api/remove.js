export default async (id) => {
    const url = `https://api.todoist.com/rest/v2/tasks/${id}`

    return fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer c010ef70fd11451beab40a30a8f16bd3b0744cf9',
        'X-Request-Id': '7789dc52-72ae-4d64-a5f5-80a99f0c4c4d'
      }
    })
  };