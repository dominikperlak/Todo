const url = 'https://api.todoist.com/rest/v2/tasks'

export default async (task) => {
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        content: task,
      }),
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer c010ef70fd11451beab40a30a8f16bd3b0744cf9',
        'X-Request-Id': '7789dc52-72ae-4d64-a5f5-80a99f0c4c4d'
      }
    })

    return response.json()
  };