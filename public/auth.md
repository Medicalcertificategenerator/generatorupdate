# Agent Authentication & Policy — Medical Certificate Generator

## Agent Access Overview

Medical Certificate Generator (`medicalcertificategenerator.co.in`) provides public, zero-authentication access for autonomous AI agents, WebMCP browser extensions, and LLM search agents.

### Public Zero-Auth Tier
- **Templates & Formats**: Public read-only access to all certificate layouts, clinic formats, and guidelines (`/.well-known/agent-skills/index.json`).
- **Health & Diagnostics**: `/api/healthz` is freely accessible.
- **Search & Eligibility**: `/search` and `/ayushman-bharat-eligibility-checker` do not require registration or API keys.

### Authentication Metadata
- **OAuth Authorization Server**: `/.well-known/oauth-authorization-server`
- **OAuth Protected Resource**: `/.well-known/oauth-protected-resource`
- **OpenID Configuration**: `/.well-known/openid-configuration`
- **MCP Server Card**: `/.well-known/mcp/server-card.json`

### Agent Registration Instructions
If an agent requires dedicated session tokens or rate-limit extension:
1. Fetch OAuth authorization server configuration at `/.well-known/oauth-authorization-server`.
2. Submit agent registration payload to `register_uri` (`/auth/agent-register`).
3. Include HTTP header `Authorization: Bearer <token>` on protected endpoints.
