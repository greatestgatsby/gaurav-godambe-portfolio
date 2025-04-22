
import { toast } from "@/components/ui/sonner";

export interface WebhookFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const submitWebhookForm = async (
  formData: WebhookFormData, 
  webhookUrl: string
) => {
  if (!webhookUrl) {
    toast({
      title: "Configuration Error",
      description: "Please set up the webhook URL",
      variant: "destructive",
    });
    return false;
  }

  try {
    const formPayload = {
      ...formData,
      timestamp: new Date().toISOString(),
      source: window.location.origin
    };

    console.log('Webhook Payload:', JSON.stringify(formPayload, null, 2));
    console.log('Sending data to webhook URL:', webhookUrl);

    await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      mode: 'no-cors',
      body: JSON.stringify(formPayload),
    });

    console.log('Webhook request sent successfully. Response status: No-Cors mode');
    
    toast({
      title: "Message Sent",
      description: "Thank you for your message. We'll get back to you soon!",
    });

    return true;
  } catch (error) {
    console.error('Error submitting form:', error);
    toast({
      title: "Error",
      description: "Failed to send message. Please try again later.",
      variant: "destructive",
    });
    return false;
  }
};
