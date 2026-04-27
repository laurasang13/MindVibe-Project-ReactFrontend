
export async function analyzeMood(mood) {
  console.log("analyzeMood called with:", mood);
  
  const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
  console.log("API_KEY exists:", !!API_KEY);
  const MODEL = "gemini-3-flash-preview"; 
  const URL = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent?key=${API_KEY}`;
  
  try {
    const response = await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        contents: [
          {
            parts: [
              {
                text: `
                You are an expert in emotional well-being and mental health.

                Based on the given emotional state, return ONLY a valid JSON object. Do not include any extra text, explanations, or formatting.

                Exact format:
                {
                  "recommendations": ["string", "string", "string"],
                  "phrase": "string"
                }

                Rules:
                - Write everything in English.
                - Provide exactly 3 recommendations.
                - Recommendations must be short, practical, and actionable.
                - The phrase must be short, positive, and encouraging.
                - Do NOT use markdown, code blocks, or backticks.
                - Do NOT include any text outside the JSON.
                - Do NOT add explanations.

                Emotional state: ${mood}`
              }
            ]
          }
        ]
      })
    });

    console.log("Fetch response status:", response.status);
    
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error?.message || "Error en la petición");
    }

    const data = await response.json();
    console.log("Raw API response:", data);

    // Extraer el texto de la respuesta de Gemini
    const text = data.candidates[0].content.parts[0].text;
    console.log("Extracted text:", text);

    if (!text) throw new Error("No se recibió texto de la API");

    // Limpiar bloques de código markdown y parseo
    const cleanText = text.replace(/```json|```/g, "").trim();
    const parsed = JSON.parse(cleanText);

    return parsed;

  } catch (error) {
    console.error("Error en analyzeMood:", error.message);
    return null; // Esto hace que use el fallback 
  }
}