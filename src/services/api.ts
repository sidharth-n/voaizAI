import { CallRequestData } from '../types/api';

export class APIError extends Error {
  constructor(message: string, public code?: string) {
    super(message);
    this.name = 'APIError';
  }
}

const getTaskPrompt = (data: CallRequestData) => {
  const baseInfo = `
Company: ${data.companyName}
Product: ${data.productName}
Product Details: ${data.productDetails}
Features: ${data.features.join(', ')}
USPs: ${data.usps.join(', ')}
Key Functionalities: ${data.functionalities.join(', ')}
  `.trim();

  switch (data.callType) {
    case 'sales':
      return `You are Sauphy, a professional sales representative for ${data.companyName}. 
${baseInfo}

Your goal is to:
1. Generate interest in our product
2. Qualify the lead
3. Emphasize our unique value propositions
4. Try to schedule a follow-up meeting

Be persuasive but not pushy. Focus on understanding the customer's needs and how our product can address them.`;
    
    case 'support':
      return `You are a technical support specialist for ${data.companyName}. ${baseInfo} Your goal is to provide helpful, patient assistance and ensure customer satisfaction. Listen carefully to their issues and provide clear, step-by-step solutions.`;
    
    case 'reminder':
      return `You are a customer service representative for ${data.companyName}. ${baseInfo} Your goal is to courteously remind the customer about our product/service and gather feedback about their experience. Be friendly and professional.`;
    
    default:
      return `You are a professional representative for ${data.companyName}. ${baseInfo} Be professional and courteous.`;
  }
};

export const initiateCall = async (data: CallRequestData) => {
  try {
    const response = await fetch('https://roast-call-proxy.vercel.app/proxy/call', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        phone_number: data.phone_number,
        task: getTaskPrompt(data),
        model: "enhanced",
        language: "en",
        voice: "nat",
        max_duration: data.max_duration,
        first_sentence: data.first_sentence,
        wait_for_greeting: false,
        record: true,
        answered_by_enabled: true,
        analysis_schema: {
          call_duration: "number",
          answered_by: "string",
          call_successful: "boolean",
          customer_response: "string"
        }
      })
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new APIError(errorData.message || 'Failed to initiate call', 'API_ERROR');
    }
    
    return await response.json();
  } catch (error) {
    if (error instanceof APIError) throw error;
    
    if (error instanceof Error && error.message.includes('Failed to fetch')) {
      throw new APIError('Network error. Please check your connection.', 'NETWORK_ERROR');
    }
    
    throw new APIError('An unexpected error occurred', 'UNKNOWN_ERROR');
  }
};