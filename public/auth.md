# Auth.md - Agent Registration Instructions

## Overview
Medical Certificate Generator (`medicalcertificategenerator.co.in`) supports autonomous AI agents, WebMCP browser extensions, and LLM clients with both public zero-authentication access and token-based agent registration.

## Agent Registration
AI agents can register programmatically using the OAuth 2.0 Dynamic Client Registration protocol:
- **Registration Endpoint**: `https://medicalcertificategenerator.co.in/auth/agent-register`
- **Supported Identity Types**: `autonomous_agent`, `user_delegated_agent`
- **Credential Types**: `bearer_token`, `none`

## Authentication Methods
- **Zero-Auth Tier**: Default public access for read-only browsing, template discovery, and search.
- **Bearer Token**: Include HTTP header `Authorization: Bearer <token>` for agent-authenticated API operations.

## Discovery Endpoints
- **OAuth Authorization Server**: `/.well-known/oauth-authorization-server`
- **OAuth Protected Resource**: `/.well-known/oauth-protected-resource`
- **OpenID Configuration**: `/.well-known/openid-configuration`
- **MCP Server Card**: `/.well-known/mcp/server-card.json`
- **API Catalog**: `/.well-known/api-catalog`
- **Agent Skills Index**: `/.well-known/agent-skills/index.json`

## Public Endpoints (Zero-Auth)
- `GET /` — Homepage and generator interfaces
- `GET /api/healthz` — System status
- `GET /generator` — Certificate templates
- `GET /search` — Medical format search engine
- `GET /ayushman-bharat-eligibility-checker` — Public scheme checker
