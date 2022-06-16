exports.handler = async event => {
  const { email, name, comment, page } = JSON.parse(event.body);
  console.log(req.body);
  if (!email || !name || !comment || !page) {
    return res.status(400).json({ error: 'Missing field try again!' });
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'method Not allowed' });
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
    return res.status(200).json({ data: 'ok' });
  }
  console.log(request);
  return res.status(400).json({ error: 'error' });
};
