
import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Loader2, Eye, EyeOff } from 'lucide-react';
import Button from '@/components/ui/CustomButton';
import { toast } from '@/components/ui/sonner';

const BusinessCategoryCard = () => {
  const [businessName, setBusinessName] = useState('');
  const [businessDescription, setBusinessDescription] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState<{ primary: string; additional: string[] } | null>(null);
  const [apiKey, setApiKey] = useState('');
  const [showApiKey, setShowApiKey] = useState(false);
  const [apiKeyError, setApiKeyError] = useState<string | null>(null);

  const toggleApiKeyVisibility = () => {
    setShowApiKey(!showApiKey);
  };

  const validateApiKey = (key: string) => {
    if (!key) return "API key is required";
    if (!key.startsWith('sk-')) return "Invalid API key format (should start with 'sk-')";
    if (key.length < 20) return "API key appears too short";
    return null;
  };

  const handleApiKeyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const key = e.target.value;
    setApiKey(key);
    
    // Clear error when user starts typing
    if (apiKeyError) {
      setApiKeyError(null);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!businessName || !businessDescription) {
      toast.error("Please enter both business name and description");
      return;
    }

    // Validate API key
    const keyError = validateApiKey(apiKey);
    if (keyError) {
      setApiKeyError(keyError);
      return;
    }

    setIsLoading(true);
    setResults(null);

    try {
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({
          model: "gpt-4o-mini",
          messages: [
            {
              role: "system",
              content: "You are an expert in Google My Business optimization. Your task is to suggest the most appropriate primary category and 3-5 additional categories for a business to use in their Google My Business profile to optimize their SEO. Format your response as JSON with 'primary' (string) and 'additional' (array of strings) fields."
            },
            {
              role: "user",
              content: `Business Name: ${businessName}\nBusiness Description: ${businessDescription}\nPlease suggest the most appropriate Google My Business primary category and additional categories for this business.`
            }
          ],
          response_format: { "type": "json_object" }
        })
      });

      if (!response.ok) {
        if (response.status === 401) {
          throw new Error('Invalid API key');
        }
        throw new Error(`API request failed with status ${response.status}`);
      }

      const data = await response.json();
      
      try {
        let parsedContent;
        
        // Check if the content is already an object or needs parsing
        if (typeof data.choices[0].message.content === 'string') {
          parsedContent = JSON.parse(data.choices[0].message.content);
        } else {
          parsedContent = data.choices[0].message.content;
        }
        
        // Validate the response format
        if (!parsedContent.primary || !Array.isArray(parsedContent.additional)) {
          throw new Error("Invalid response format from API");
        }
        
        setResults(parsedContent);
        toast.success("Categories generated successfully!");
      } catch (parseError) {
        console.error("Failed to process API response:", parseError);
        toast.error("Failed to process the results. Please try again.");
      }
    } catch (error) {
      console.error("Error calling OpenAI API:", error);
      if (error instanceof Error && error.message.includes('401')) {
        setApiKeyError("Invalid API key. Please check and try again.");
        toast.error("API key validation failed. Please provide a valid API key.");
      } else {
        toast.error("Failed to generate categories. Please try again later.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="overflow-hidden border-2 border-accent shadow-accent/20 h-full">
      <CardHeader className="bg-gradient-to-r from-accent/20 to-accent/5 pb-6">
        <CardTitle className="text-xl font-bold text-navy-900">
          Google My Business Category Finder
        </CardTitle>
        <CardDescription>
          Find the optimal categories for your business to improve local SEO and visibility
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <Label htmlFor="business-name">Business Name</Label>
              <Input
                id="business-name"
                placeholder="Enter your business name"
                value={businessName}
                onChange={(e) => setBusinessName(e.target.value)}
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="business-description">Business Description</Label>
              <Textarea
                id="business-description"
                placeholder="Describe your business, its services, products, and target customers..."
                value={businessDescription}
                onChange={(e) => setBusinessDescription(e.target.value)}
                className="mt-1 resize-none h-24"
              />
            </div>
            <div>
              <Label htmlFor="api-key" className="flex items-center justify-between">
                <span>OpenAI API Key</span>
                <button 
                  type="button"
                  onClick={toggleApiKeyVisibility}
                  className="text-xs text-accent hover:underline flex items-center"
                >
                  {showApiKey ? (
                    <>
                      <EyeOff className="h-3.5 w-3.5 mr-1" /> Hide
                    </>
                  ) : (
                    <>
                      <Eye className="h-3.5 w-3.5 mr-1" /> Show
                    </>
                  )}
                </button>
              </Label>
              <div className="mt-1 relative">
                <Input
                  id="api-key"
                  type={showApiKey ? "text" : "password"}
                  placeholder="sk-..."
                  value={apiKey}
                  onChange={handleApiKeyChange}
                  className={`${apiKeyError ? 'border-destructive' : ''}`}
                />
              </div>
              {apiKeyError && (
                <p className="text-xs text-destructive mt-1">{apiKeyError}</p>
              )}
              <p className="text-xs text-navy-600 mt-1">
                Your API key is only used for this request and is not stored on our servers.
              </p>
            </div>
            
            <Button 
              type="submit"
              variant="primary"
              className="w-full mt-4"
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" /> 
                  Analyzing...
                </>
              ) : (
                "Find Categories"
              )}
            </Button>
          </div>
        </form>

        {results && (
          <div className="mt-6 p-4 bg-navy-50 rounded-md border border-navy-200">
            <h4 className="font-semibold text-navy-900 mb-2">Recommended Categories:</h4>
            <div className="mb-4">
              <p className="text-sm text-navy-600 mb-1">Primary Category:</p>
              <p className="font-medium text-accent">{results.primary}</p>
            </div>
            <div>
              <p className="text-sm text-navy-600 mb-1">Additional Categories:</p>
              <ul className="list-disc pl-5">
                {results.additional.map((category, idx) => (
                  <li key={idx} className="text-navy-800">{category}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default BusinessCategoryCard;
