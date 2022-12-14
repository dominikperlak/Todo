import { v4 as uuidv4 } from 'uuid';


export default async (id, task) => {
    const url = `https://api.todoist.com/rest/v2/tasks/${id}`

    return fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        content: task,
      }),
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer 85eaa8e09a95ed4651de5c90ca7ee667b6f3b229',
        'X-Request-Id': uuidv4()
      }
    })
  };