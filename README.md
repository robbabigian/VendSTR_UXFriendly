
# SwiftPOD Graphic‑First UI — Starter (v2)

This is a Bolt.new + GitHub-ready starter for the **graphic‑centric, drag‑and‑drop** SwiftPOD UI.
It includes:
- **Next.js (App Router) + TypeScript + Tailwind**
- **Konva.js** editor scaffold (drag/resize/rotate within print areas)
- **BFF** Route Handlers that stub SwiftPOD facade endpoints
- **SIPP** security stubs (JWT + DPoP placeholders, webhook verification helper)
- **Bolt config**, **GitHub Actions**, and **Devcontainer**

## Quickstart (Bolt.new)
1. Open this repo in Bolt.new.
2. Create `.env.local` from `.env.example` and fill values.
3. In the terminal, run:
   ```bash
   pnpm install
   pnpm dev
   ```
4. Visit the preview URL (usually http://localhost:3000).

## Quickstart (Local / GitHub Codespaces)
```bash
pnpm install
pnpm dev
```

## Scripts
- `pnpm dev` – run Next.js (dev)
- `pnpm build` – production build
- `pnpm start` – start production
- `pnpm lint` – lint

## Notes
- The BFF routes in `app/api/*` are **stubs**. Wire them to SwiftPOD once credentials and endpoints are available.
- See `docs/TECH_SPEC.md` for the component and data model blueprint.
