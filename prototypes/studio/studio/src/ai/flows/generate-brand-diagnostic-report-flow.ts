'use server';
/**
 * @fileOverview This file implements a Genkit flow for generating a comprehensive AI-powered brand diagnostic report for high-experience professionals.
 *
 * - generateBrandDiagnosticReport - A function that processes user's professional information and returns a tailored brand report.
 * - GenerateBrandDiagnosticReportInput - The input type for the generateBrandDiagnosticReport function.
 * - GenerateBrandDiagnosticReportOutput - The return type for the generateBrandDiagnosticReport function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const GenerateBrandDiagnosticReportInputSchema = z.object({
  professionalBackground: z.string().describe('Detailed description of the user\'s professional experience, roles, and key achievements.'),
  skills: z.array(z.string()).describe('A list of key professional skills and expertise.'),
  careerGoals: z.string().describe('User\'s short-term and long-term career aspirations.'),
  targetAudience: z.string().describe('Description of the ideal audience the user wants to reach with their personal brand.'),
  currentBrandingChallenges: z.string().optional().describe('Any specific challenges or issues the user is currently facing with their personal brand.'),
  values: z.array(z.string()).describe('Core values the user wants their personal brand to reflect.'),
});
export type GenerateBrandDiagnosticReportInput = z.infer<typeof GenerateBrandDiagnosticReportInputSchema>;

const GenerateBrandDiagnosticReportOutputSchema = z.object({
  brandStatement: z.string().describe('A concise, compelling personal brand statement (1-2 sentences).'),
  uniqueStrengths: z.array(z.string()).describe('A list of unique strengths identified from the user\'s input.'),
  areasForImprovement: z.array(z.string()).describe('Key areas where the user can improve their personal brand.'),
  marketOpportunities: z.array(z.string()).describe('Potential market or career opportunities based on the user\'s brand.'),
  actionableInsights: z.array(z.string()).describe('Specific, practical recommendations for enhancing the personal brand.'),
  toneOfVoiceRecommendation: z.string().describe('Recommended tone of voice for brand communication (e.g., authoritative, empathetic, innovative).'),
  targetAudienceAlignment: z.string().describe('Analysis of how the current brand aligns with the target audience and suggestions for improvement.'),
});
export type GenerateBrandDiagnosticReportOutput = z.infer<typeof GenerateBrandDiagnosticReportOutputSchema>;

export async function generateBrandDiagnosticReport(input: GenerateBrandDiagnosticReportInput): Promise<GenerateBrandDiagnosticReportOutput> {
  return generateBrandDiagnosticReportFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateBrandDiagnosticReportPrompt',
  input: { schema: GenerateBrandDiagnosticReportInputSchema },
  output: { schema: GenerateBrandDiagnosticReportOutputSchema },
  prompt: `You are an expert AI-powered personal branding consultant specializing in high-experience professionals (ages 50-60). Your task is to analyze the provided professional information and generate a comprehensive brand diagnostic report. Focus on identifying unique strengths, areas for improvement, market opportunities, and actionable insights to help the user build a powerful and authentic personal brand.

-- User Information --
Professional Background: {{{professionalBackground}}}
Skills: {{#each skills}}{{{this}}}{{#unless @last}}, {{/unless}}{{/each}}
Career Goals: {{{careerGoals}}}
Target Audience: {{{targetAudience}}}
Values: {{#each values}}{{{this}}}{{#unless @last}}, {{/unless}}{{/each}}
{{#if currentBrandingChallenges}}
Current Branding Challenges: {{{currentBrandingChallenges}}}
{{/if}}

-- Report Generation Guidelines --
Based on the above information, generate a brand diagnostic report structured according to the following guidelines.
Ensure the report is tailored, actionable, and reflects the user's unique profile.

1.  **Brand Statement:** Create a concise and compelling personal brand statement (1-2 sentences) that encapsulates the user's core value proposition and differentiation.
2.  **Unique Strengths:** Identify and list 3-5 unique strengths that differentiate the user in their professional field.
3.  **Areas for Improvement:** Point out 2-3 key areas where the user can enhance their personal brand or professional presentation.
4.  **Market Opportunities:** Suggest 2-3 potential market or career opportunities that align with the user's strengths and career goals.
5.  **Actionable Insights:** Provide 3-5 specific, practical recommendations and steps the user can take to build and leverage their personal brand.
6.  **Tone of Voice Recommendation:** Recommend a suitable tone of voice (e.g., authoritative, empathetic, innovative, visionary) for the user's brand communication, explaining why.
7.  **Target Audience Alignment:** Analyze how well the user's current profile aligns with their stated target audience and offer suggestions for better alignment.

Please provide the output in JSON format, strictly adhering to the output schema.`,
});

const generateBrandDiagnosticReportFlow = ai.defineFlow(
  {
    name: 'generateBrandDiagnosticReportFlow',
    inputSchema: GenerateBrandDiagnosticReportInputSchema,
    outputSchema: GenerateBrandDiagnosticReportOutputSchema,
  },
  async (input) => {
    const { output } = await prompt(input);
    return output!;
  }
);
