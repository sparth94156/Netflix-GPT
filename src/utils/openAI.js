import OpenAI from 'openai';
import { OPENAI_KEY } from '../components/constants';

// Initialization or authentication
const openai = new OpenAI({
  apiKey: OPENAI_KEY, // This is the default and can be omitted
  dangerouslyAllowBrowser: true 
});

export default openai;