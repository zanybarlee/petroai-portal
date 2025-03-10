
export async function query(data: { question: string; overrideConfig: { sessionId: string } }) {
  const response = await fetch(
    "http://127.0.0.1:3001/api/v1/prediction/9dcddc0d-75f3-416c-a19e-94bf0a1e4d41",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    }
  );
  const result = await response.json();
  return result;
}
