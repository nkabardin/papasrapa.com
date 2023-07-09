export const config = {
  runtime: "edge",
};

export default async function handler(req) {
  if (req.method !== "POST") {
    return new Response("Method not allowed", { status: 405 });
  }
  const access_key = process.env.WEB3_FORM_API_KEY;
  const payload = await req.text();
  const payloadJson = JSON.parse(payload);

  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      access_key,
      ...payloadJson,
      formName: "PapaSrapa",
      subject: "New Submission from PapaSrapa.com",
    }),
  });

  return response;
}
