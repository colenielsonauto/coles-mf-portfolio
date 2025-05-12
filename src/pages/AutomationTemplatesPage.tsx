import React, { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Download } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

interface AutomationTemplate {
  id: string;
  name: string;
  description: string;
  tags: string[];
  jsonUrl: string; // URL to the downloadable JSON file
}

// Reorder templates: Move specific ones to the end
const allTemplates: AutomationTemplate[] = [
  // Original templates *except* the two to be moved
  {
    id: 'deep-multiline-icebreaker',
    name: 'Deep Multiline Icebreaker System',
    description: 'Generate personalized, multi-line icebreakers for cold email outreach using AI. This system scrapes website content, summarizes key details, and crafts custom icebreaker messages for targeted leads. Perfect for personalized outreach campaigns.',
    tags: ['n8n', 'Web Scraping', 'Google Sheets', 'OpenAI API', 'Automation', 'Sales Outreach'],
    jsonUrl: '/automations/Deep Multiline Icebreaker System.json',
  },
  {
    id: 'payroll-system-hourly',
    name: 'Payroll System for Hourly Contractors',
    description: 'Automate payroll management for hourly contractors, including time tracking, pay period calculation, and total hours calculation using Harvest API. Streamline payment processing for remote teams.',
    tags: ['n8n', 'Harvest API', 'Time Tracking', 'Payroll', 'Automation'],
    jsonUrl: '/automations/-Payroll- System for Hourly Contractors.json', // Updated path
  },
  {
    id: 'application-form-clickup',
    name: 'Application Form to ClickUp Hiring Pipeline',
    description: 'Automatically capture general application form submissions and add them to the ClickUp hiring pipeline. Ideal for streamlining applicant tracking and management.',
    tags: ['n8n', 'Typeform', 'ClickUp', 'Hiring Automation', 'Applicant Tracking'],
    jsonUrl: '/automations/1. Application Form Fill -- Add to ClickUp Hiring Pipeline.json', // Updated path
  },
  {
    id: 'clickup-status-request-trial-email',
    name: 'ClickUp Status Change to Request Trial - Send Email',
    description: 'Trigger an automated email when an applicant\'s status in the ClickUp hiring pipeline changes to \'Request Trial.\' Enhance communication and automate candidate management.',
    tags: ['n8n', 'ClickUp', 'Webhook', 'Email Automation', 'Hiring Workflow'],
    jsonUrl: '/automations/2. ClickUp Hiring Pipeline Status Changed to -Request Trial- -- Send Email.json', // Updated path
  },
  {
    id: 'trial-form-update-clickup',
    name: 'Trial Form to Update ClickUp Hiring Pipeline',
    description: 'Automatically update ClickUp hiring records when candidates complete a trial form. Simplify tracking of trial candidates in the hiring process.',
    tags: ['n8n', 'Typeform', 'ClickUp', 'Hiring Automation', 'Trial Management'],
    jsonUrl: '/automations/3. Trial Form Fill -- Update ClickUp Hiring Pipeline Record.json', // Updated path
  },
  {
    id: 'automatic-ai-newsletter',
    name: 'Automatic AI Newsletter System',
    description: 'Generate an automated AI-powered newsletter by scraping Reddit for relevant AI content, filtering posts, and compiling them into a newsletter-ready format.',
    tags: ['n8n', 'Apify', 'OpenAI', 'Automation', 'Newsletter'],
    jsonUrl: '/automations/Automated Newsletter Production (1).json', // Updated path
  },
  {
    id: 'autonomous-waitlist-management',
    name: 'Autonomous Waitlist Management',
    description: 'Automatically manage waitlists by tracking and updating member counts, verifying entries, and controlling access to exclusive groups or programs.',
    tags: ['n8n', 'Waitlist Management', 'Automation', 'Google Sheets'],
    jsonUrl: '/automations/Autonomous Waitlist Management.json', // Updated path
  },
  {
    id: 'clever-referral-autoresponder',
    name: 'Clever Referral Autoresponder',
    description: 'Automatically send personalized referral emails when new referral requests are submitted, streamlining follow-up and maximizing conversion rates.',
    tags: ['n8n', 'Typeform', 'Email Automation', 'Referral System'],
    jsonUrl: '/automations/Clever Referral Autoresponder.json', // Updated path
  },
  {
    id: 'clickup-project-manager',
    name: 'ClickUp Project Manager',
    description: 'Streamline project management with automated task creation, status updates, and team notifications in ClickUp.',
    tags: ['n8n', 'ClickUp', 'Project Management', 'Automation'],
    jsonUrl: '/automations/ClickUp Project Manager.json', // Updated path
  },
  {
    id: 'youtube-content-idea-generator',
    name: 'YouTube Content Idea Generator',
    description: 'Automatically generate fresh YouTube content ideas by analyzing user comments and generating creative video concepts using AI.',
    tags: ['n8n', 'Apify', 'OpenAI', 'YouTube', 'Content Ideas'],
    jsonUrl: '/automations/YouTube Content Idea Generator.json', // Updated path
  },
  {
    id: 'ai-content-generator',
    name: 'AI Content Generator',
    description: 'Generate high-quality marketing content using AI, with automatic distribution to Contentful and instant notifications for content managers.',
    tags: ['n8n', 'Typeform', 'OpenAI', 'Content Creation', 'Automation'],
    jsonUrl: '/automations/AI Content Generator.json', // Updated path
  },
  {
    id: 'highly-relevant-youtube-content-ideas',
    name: 'Highly Relevant Content Ideas for YouTube',
    description: 'Automatically generate highly relevant content ideas for YouTube by analyzing user comments and extracting valuable content suggestions using AI.',
    tags: ['n8n', 'Apify', 'OpenAI', 'YouTube', 'Content Ideas'],
    jsonUrl: '/automations/Highly Relevant Content Ideas for YouTube.json', // Updated path
  },
  {
    id: 'linkedin-scraping-to-sheet',
    name: 'LinkedIn Scraping System - Scrape & Add to Sheet',
    description: 'Automatically scrape LinkedIn profiles and posts, then save the results directly to a Google Sheet for further analysis and tracking.',
    tags: ['n8n', 'Apify', 'Google Sheets', 'LinkedIn', 'Data Scraping'],
    jsonUrl: '/automations/1. LinkedIn Scraping System—Scrape & Add to Sheet.json', // Updated path
  },
  {
    id: 'linkedin-scraping-post-from-db',
    name: 'LinkedIn Scraping System - Post From Scheduled Database',
    description: 'Automatically schedule and post LinkedIn content from a pre-filled database of posts, maintaining consistent social media activity.',
    tags: ['n8n', 'Google Sheets', 'LinkedIn', 'Social Media Automation'],
    jsonUrl: '/automations/2. LinkedIn Scraping System—Post From Scheduled Database.json', // Updated path
  },
  // Moved templates
  {
    id: 'real-estate-lead-capture',
    name: 'Real Estate Lead Capture',
    description: 'Captures leads from website forms and social media, then automatically sends them to a CRM and notifies agents via SMS. Uses n8n, Google Sheets, and an SMS gateway.',
    tags: ['n8n', 'Real Estate', 'Lead Generation', 'Google Sheets', 'SMS'],
    jsonUrl: '/automations/real_estate_lead_capture.json',
  },
  {
    id: 'email-router',
    name: 'Smart Email Router',
    description: 'Automatically categorizes incoming emails based on keywords and routes them to the appropriate department or team member using Make and Gmail.',
    tags: ['Make', 'Email Automation', 'Gmail', 'Productivity'],
    jsonUrl: '/automations/email_router.json',
  },
];

const templates = allTemplates; // Use the reordered array

export function AutomationTemplatesPage() {
  // Add useEffect to scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); // Empty dependency array ensures this runs only once when the component mounts

  // Function to extract filename from the jsonUrl path
  const getFilenameFromUrl = (url: string): string => {
    try {
      // Split the URL by '/' and get the last part (filename)
      const parts = url.split('/');
      const filename = parts[parts.length - 1];
      // Decode URI component in case of special characters (like %20 for space)
      return decodeURIComponent(filename);
    } catch (e) {
      console.error('Error extracting filename:', e);
      // Fallback to a generic name or the original URL part
      return 'template.json'; 
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />
      <main className="flex-grow">
        <header className="py-16 md:py-24 bg-gradient-to-b from-background to-muted/30">
          <div className="container-custom mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent animate-fade-in">
              AI Automation Templates
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in animation-delay-200">
              My gift to you: Browse a collection of free, ready-to-use AI automation templates. Click to download JSON files compatible with n8n, Make, and other automation tools.
            </p>
          </div>
        </header>

        <div className="container-custom mx-auto px-4 py-16">
          {templates.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {templates.map((template) => {
                // Check if the template is one of the unavailable ones
                const isUnavailable = template.id === 'real-estate-lead-capture' || template.id === 'email-router';
                
                return (
                  <Card key={template.id} className="flex flex-col overflow-hidden transition-all hover:shadow-xl hover:border-accent/50 animate-fade-in-right animation-delay-stagger">
                    <CardHeader>
                      <CardTitle className="text-2xl">{template.name}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <p className="text-muted-foreground mb-4">{template.description}</p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {template.tags.map((tag) => (
                          <span key={tag} className="px-3 py-1 text-xs font-semibold rounded-full bg-accent/10 text-accent">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter className="mt-auto bg-muted/20 p-4">
                      {isUnavailable ? (
                        <Button disabled variant="secondary" className="w-full">
                          Currently unavailable
                        </Button>
                      ) : (
                        <Button asChild className="w-full group">
                          <a href={template.jsonUrl} download={getFilenameFromUrl(template.jsonUrl)}>
                            <Download className="mr-2 h-4 w-4" />
                            Download Template
                          </a>
                        </Button>
                      )}
                    </CardFooter>
                  </Card>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-12">
              <h2 className="text-2xl font-semibold mb-4">More Templates Coming Soon!</h2>
              <p className="text-muted-foreground">
                I'm currently preparing more AI automation templates. Check back later!
              </p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}

// Add this to your global CSS (e.g., src/index.css) for staggered animation if it doesn't exist:
/*
.animation-delay-stagger > *:nth-child(1) { animation-delay: 0.1s; }
.animation-delay-stagger > *:nth-child(2) { animation-delay: 0.2s; }
.animation-delay-stagger > *:nth-child(3) { animation-delay: 0.3s; }
.animation-delay-stagger > *:nth-child(4) { animation-delay: 0.4s; }
.animation-delay-stagger > *:nth-child(5) { animation-delay: 0.5s; }
.animation-delay-stagger > *:nth-child(6) { animation-delay: 0.6s; }
*/

// Make sure to define 'fade-in' and 'fade-in-right' animations in your tailwind.config.ts if they don't exist.
// Example for tailwind.config.ts keyframes:
/*
keyframes: {
  // ... other keyframes
  'fade-in': {
    '0%': { opacity: '0', transform: 'translateY(10px)' },
    '100%': { opacity: '1', transform: 'translateY(0)' },
  },
  'fade-in-right': {
    '0%': { opacity: '0', transform: 'translateX(-20px)' },
    '100%': { opacity: '1', transform: 'translateX(0)' },
  },
},
animation: {
  // ... other animations
  'fade-in': 'fade-in 0.5s ease-out forwards',
  'fade-in-right': 'fade-in-right 0.5s ease-out forwards',
},
*/ 