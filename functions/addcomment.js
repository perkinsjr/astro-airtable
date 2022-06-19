import fetch from 'node-fetch';

export async function handler(event) {
  const { email, name, comment, page } = JSON.parse(event.body);
  console.log(event.body);
  if (!email || !name || !comment || !page) {
    return {
      statusCode: 400,
      body: 'Error missing data'
    };
  }

  const request = await fetch(
    'https://api.airtable.com/v0/appc800TSWWSyZ5hy/comments',
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.AIRTABLE_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ fields: { name, email, comment, page } })
    }
  );
  if (request.ok) {
    return {
      statusCode: 200,
      body: 'ok'
    };
  }
  return {
    statusCode: 400,
    body: 'Error Submitting'
  };
}
