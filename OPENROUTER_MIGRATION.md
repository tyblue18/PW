# Migrating from Ollama to OpenRouter

## Step 1: Update Your Requirements

Add to `requirements.txt`:
```
requests
```

(Remove `ollama` if it's there)

## Step 2: Update Your Query/LLM Code

### Find where you call Ollama

Look for code like this:
```python
import ollama

response = ollama.chat(
    model='llama3.2:1b',
    messages=[...]
)
```

### Replace with OpenRouter

Create a new function or update your existing LLM call:

```python
import requests
import streamlit as st

def call_openrouter_llm(prompt, system_prompt=None):
    """
    Call OpenRouter API with free Llama model
    """
    # Use free model - no charges possible
    model = "meta-llama/llama-3.2-1b-instruct:free"
    
    # Get API key from secrets (optional for free models, but good practice)
    api_key = st.secrets.get("OPENROUTER_API_KEY", "")
    
    url = "https://openrouter.ai/api/v1/chat/completions"
    
    headers = {
        "Authorization": f"Bearer {api_key}" if api_key else None,
        "Content-Type": "application/json",
        "HTTP-Referer": "https://your-app.streamlit.app",  # Optional: your app URL
        "X-Title": "Password Security Enhancement"  # Optional: your app name
    }
    
    # Remove None values from headers
    headers = {k: v for k, v in headers.items() if v is not None}
    
    messages = []
    if system_prompt:
        messages.append({"role": "system", "content": system_prompt})
    messages.append({"role": "user", "content": prompt})
    
    payload = {
        "model": model,
        "messages": messages,
        "temperature": 0.7,
        "max_tokens": 1000
    }
    
    try:
        response = requests.post(url, headers=headers, json=payload, timeout=30)
        response.raise_for_status()
        
        result = response.json()
        return result["choices"][0]["message"]["content"]
    
    except requests.exceptions.RequestException as e:
        st.error(f"Error calling OpenRouter API: {str(e)}")
        return None
    except KeyError as e:
        st.error(f"Unexpected API response format: {str(e)}")
        return None
```

## Step 3: Update Your RAG Query Code

If you have a `query.py` file, update it:

### Before (Ollama):
```python
import ollama

def generate_response(prompt, context):
    response = ollama.chat(
        model='llama3.2:1b',
        messages=[
            {"role": "system", "content": "You are a password security expert..."},
            {"role": "user", "content": f"Context: {context}\n\nQuestion: {prompt}"}
        ]
    )
    return response['message']['content']
```

### After (OpenRouter):
```python
import requests
import streamlit as st

def generate_response(prompt, context):
    model = "meta-llama/llama-3.2-1b-instruct:free"
    api_key = st.secrets.get("OPENROUTER_API_KEY", "")
    
    url = "https://openrouter.ai/api/v1/chat/completions"
    
    headers = {
        "Authorization": f"Bearer {api_key}" if api_key else None,
        "Content-Type": "application/json"
    }
    headers = {k: v for k, v in headers.items() if v is not None}
    
    messages = [
        {"role": "system", "content": "You are a password security expert..."},
        {"role": "user", "content": f"Context: {context}\n\nQuestion: {prompt}"}
    ]
    
    payload = {
        "model": model,
        "messages": messages,
        "temperature": 0.7,
        "max_tokens": 1000
    }
    
    try:
        response = requests.post(url, headers=headers, json=payload, timeout=30)
        response.raise_for_status()
        result = response.json()
        return result["choices"][0]["message"]["content"]
    except Exception as e:
        st.error(f"Error: {str(e)}")
        return None
```

## Step 4: Update Streamlit Cloud Secrets

Go to Streamlit Cloud → Settings → Secrets and add:

```toml
OPENROUTER_API_KEY = ""
```

**Note:** For free models, you can leave this empty (""). The API key is optional but recommended.

If you want to get a free API key (for better rate limits):
1. Go to https://openrouter.ai/
2. Sign up (free)
3. Get your API key
4. Add it to secrets

## Step 5: Test Locally First

Before deploying:
1. Update your local code
2. Test it works
3. Push to GitHub
4. Streamlit Cloud will auto-deploy

## Step 6: Remove Ollama References

Search your codebase for:
- `import ollama`
- `ollama.chat`
- `ollama.generate`
- Any Ollama-related code

Replace all with the OpenRouter implementation above.

## Benefits

✅ **Free** - No charges possible with free model  
✅ **No local setup** - Works on Streamlit Cloud  
✅ **Reliable** - Cloud-hosted, always available  
✅ **Similar model** - Same Llama 3.2 1B model  
✅ **Rate limited** - Prevents abuse automatically  

## Troubleshooting

If you get errors:
1. Check `requests` is in requirements.txt
2. Verify the model name is exactly: `meta-llama/llama-3.2-1b-instruct:free`
3. Check API response format matches your code
4. Add error handling for better debugging




