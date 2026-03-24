import { createOpenAI } from '@ai-sdk/openai';
import type { Provider, ProviderConfig } from './types';

export const blazeaiConfig: ProviderConfig = {
  id: 'blazeai',
  name: 'BlazeAI',
  apiKeyEnvVar: 'BLAZEAI_API_KEY',
  models: [
    {
      id: 'gpt-4o',
      name: 'GPT-4o (BlazeAI)',
      description: 'GPT-4o via BlazeAI proxy. Multimodal model with strong general capabilities.',
      provider: 'blazeai',
      maxTokens: 16384,
      contextWindow: 128000,
      capabilities: {
        vision: true,
        tools: true,
        coding: true,
      },
      pricing: {
        input: 2.5,
        output: 10,
      },
      isDefault: true,
    },
    {
      id: 'gpt-4o-mini',
      name: 'GPT-4o Mini (BlazeAI)',
      description: 'Fast and cost-efficient GPT-4o Mini via BlazeAI proxy.',
      provider: 'blazeai',
      maxTokens: 16384,
      contextWindow: 128000,
      capabilities: {
        vision: true,
        tools: true,
        coding: true,
        fast: true,
      },
      pricing: {
        input: 0.15,
        output: 0.6,
      },
    },
    {
      id: 'claude-sonnet-4-5',
      name: 'Claude Sonnet 4.5 (BlazeAI)',
      description: 'Claude Sonnet 4.5 via BlazeAI proxy.',
      provider: 'blazeai',
      maxTokens: 8192,
      contextWindow: 200000,
      capabilities: {
        vision: true,
        tools: true,
        coding: true,
      },
      pricing: {
        input: 3,
        output: 15,
      },
    },
    {
      id: 'claude-sonnet-4.6',
      name: 'Claude Sonnet 4.6 (BlazeAI)',
      description: 'Claude Sonnet 4.6 via BlazeAI proxy.',
      provider: 'blazeai',
      maxTokens: 8192,
      contextWindow: 200000,
      capabilities: {
        vision: true,
        tools: true,
        coding: true,
      },
      pricing: {
        input: 3,
        output: 15,
      },
    },
    {
      id: 'gpt-5.4',
      name: 'GPT-5.4 (BlazeAI)',
      description: 'GPT-5.4 via BlazeAI proxy.',
      provider: 'blazeai',
      maxTokens: 16384,
      contextWindow: 128000,
      capabilities: {
        vision: true,
        tools: true,
        reasoning: true,
        coding: true,
      },
      pricing: {
        input: 5,
        output: 20,
      },
    },
    {
      id: 'gpt-5.3-codex',
      name: 'GPT-5.3 Codex (BlazeAI)',
      description: 'GPT-5.3 Codex via BlazeAI proxy, specialized for coding.',
      provider: 'blazeai',
      maxTokens: 16384,
      contextWindow: 128000,
      capabilities: {
        tools: true,
        reasoning: true,
        coding: true,
      },
      pricing: {
        input: 4,
        output: 16,
      },
    },
    {
      id: 'glm-5',
      name: 'GLM-5 (BlazeAI)',
      description: 'GLM-5 via BlazeAI proxy.',
      provider: 'blazeai',
      maxTokens: 8192,
      contextWindow: 128000,
      capabilities: {
        vision: true,
        tools: true,
        coding: true,
      },
      pricing: {
        input: 2,
        output: 8,
      },
    },
  ],
};

export const blazeaiProvider: Provider = {
  config: blazeaiConfig,
  createModel: (apiKey: string, modelId?: string) => {
    const blazeai = createOpenAI({
      apiKey,
      baseURL: 'https://blazeai.boxu.dev/api/v1',
    });
    const selectedModel = modelId || 'gpt-4o';

    return blazeai(selectedModel);
  },
};
