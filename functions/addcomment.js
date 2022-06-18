import fetch from 'node-fetch';

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers':
    'Origin, X-Requested-With, Content-Type, Accept'
};

export async function handler(event) {
  console.log(event);
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers: CORS_HEADERS
    };
  }
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
