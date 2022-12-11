const url = 'https://api.todoist.com/rest/v2/tasks'

export default async () => {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        Authorization: 'Bearer c010ef70fd11451beab40a30a8f16bd3b0744cf9',
        'X-Request-Id': '3d57f33f-5556-4c6e-a8ac-7380434b5eb5'
      }
    })

    return response.json()
  };