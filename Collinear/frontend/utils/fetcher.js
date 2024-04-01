export async function fetcher(url, token = '') {
    const res = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: token ? `Bearer ${token}` : '',
      },
    });
    if (!res.ok) {
      throw new Error('An error occurred while fetching the data.');
    }
    return res.json();
  }
  