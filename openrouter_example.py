"""
Example: OpenRouter Integration for Password Security App

Replace your Ollama calls with this code.
"""

import requests
import streamlit as st
from typing import Optional

def call_openrouter_llm(
    prompt: str,
    system_prompt: Optional[str] = None,
    temperature: float = 0.7,
    max_tokens: int = 1000
) -> Optional[str]:
    """
    Call OpenRouter API with free Llama model.
    
    Args:
        prompt: User's question/prompt
        system_prompt: Optional system message for context
        temperature: Model temperature (0.0-2.0)
        max_tokens: Maximum tokens to generate
    
    Returns:
        Generated response text or None if error
    """
    # Use free model - no charges possible
    model = "meta-llama/llama-3.2-1b-instruct:free"
    
    # Get API key from secrets (optional for free models)
    api_key = st.secrets.get("OPENROUTER_API_KEY", "")
    
    url = "https://openrouter.ai/api/v1/chat/completions"
    
    # Build headers
    headers = {
        "Content-Type": "application/json"
    }
    
    # Add API key if provided (optional for free models)
    if api_key:
        headers["Authorization"] = f"Bearer {api_key}"
    
    # Optional: Add app identification
    headers["HTTP-Referer"] = "https://password-security-enhancements.streamlit.app"
    headers["X-Title"] = "Password Security Enhancement"
    
    # Build messages
    messages = []
    if system_prompt:
        messages.append({"role": "system", "content": system_prompt})
    messages.append({"role": "user", "content": prompt})
    
    # Build payload
    payload = {
        "model": model,
        "messages": messages,
        "temperature": temperature,
        "max_tokens": max_tokens
    }
    
    try:
        # Make API call
        response = requests.post(url, headers=headers, json=payload, timeout=30)
        response.raise_for_status()
        
        # Parse response
        result = response.json()
        
        if "choices" in result and len(result["choices"]) > 0:
            return result["choices"][0]["message"]["content"]
        else:
            st.error("Unexpected API response format")
            return None
    
    except requests.exceptions.Timeout:
        st.error("Request timed out. Please try again.")
        return None
    except requests.exceptions.RequestException as e:
        st.error(f"Error calling OpenRouter API: {str(e)}")
        return None
    except KeyError as e:
        st.error(f"Unexpected API response format: {str(e)}")
        st.json(result)  # Show full response for debugging
        return None
    except Exception as e:
        st.error(f"Unexpected error: {str(e)}")
        return None


# Example usage in your RAG system:
def generate_password_analysis(password_data: dict, security_context: str) -> str:
    """
    Example: Generate password security analysis using RAG + OpenRouter
    """
    system_prompt = """You are a password security expert. Analyze passwords based on:
    - Common password detection results
    - Pattern analysis
    - Entropy calculations
    - Security best practices from NIST, PCI-DSS, and ISO 27001
    
    Provide clear, actionable security recommendations."""
    
    user_prompt = f"""Based on the following password analysis data and security guidelines:

Password Analysis:
- Dice Score: {password_data.get('dice_score', 'N/A')}
- Entropy: {password_data.get('entropy', 'N/A')}
- Patterns Detected: {password_data.get('patterns', [])}
- Common Password Match: {password_data.get('is_common', False)}

Security Context:
{security_context}

Provide a comprehensive security assessment and recommendations."""
    
    return call_openrouter_llm(
        prompt=user_prompt,
        system_prompt=system_prompt,
        temperature=0.7,
        max_tokens=500
    )


# Example: Simple password explanation
def explain_password_strength(password: str, analysis_results: dict) -> str:
    """
    Generate human-readable explanation of password strength
    """
    prompt = f"""Explain the security of this password in simple terms:

Password: {password}
Analysis Results: {analysis_results}

Provide a clear, concise explanation that a non-technical user can understand."""
    
    return call_openrouter_llm(
        prompt=prompt,
        system_prompt="You are a helpful security advisor who explains password security in simple, clear language.",
        temperature=0.5,
        max_tokens=300
    )



