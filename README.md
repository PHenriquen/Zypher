# Zypher

Official website and brand hub for the **Zypher ecosystem**.

Zypher is the parent identity connecting independent projects across software, artificial intelligence, physical computing, engineering and interactive experiences. Each project keeps its own personality while sharing one broader technical and visual system.

## What Zypher is

Zypher is a personal portfolio and experimental design identity, **not** a registered holding company or a group of operational divisions. The long-term vision spans software, AI, physical computing and interactive experiences, but each project has its own scope and level of maturity.

## Projects and direction

| Project | Area | Current positioning |
|---|---|---|
| **LUMI** | AI / desktop | Local Windows assistant; formerly ILLUME |
| **SYGNAL** | SaaS / backend | GitHub project traceability, currently local |
| **S.V.I. 4.0** | Industry 4.0 | ESP32 + FastAPI monitoring prototype |
| **Elume Achados** | Web / real client | Affiliate storefront; admin panel planned |
| **Ressonância Zero** | Game development | 2D action game in pre-production |
| **Manopla Inteligente** | Embedded / 3D | Firmware and digital prototype |
| **AEGIS, ApexOS, OmniData** | Security / cloud / data | Future concepts, not implemented products |
| **Visor Arc, Garra Arc, Mark I** | Physical computing | Planned hardware prototypes |

Some UI components or branding documents may still reference older project names such as ILLUME, Nodi, SYGNAL or Ecos do Tempo. These are legacy references to be corrected incrementally without breaking existing functionality.

## Identity system

The repository includes working SVG marks, color tokens and usage rules:

- [`docs/BRAND_SYSTEM.md`](docs/BRAND_SYSTEM.md)
- [`docs/ENDORSEMENT.md`](docs/ENDORSEMENT.md)
- [`brand/tokens.json`](brand/tokens.json)
- [`public/brand`](public/brand)

The vectors are effect-free core marks; glow and motion belong to presentation layers. The reactor/core art is a design reference, not a claim of an active standalone division and the SVG here is a web companion reconstruction.

## Stack

- Next.js
- React
- TypeScript
- plain CSS

## Run locally

```bash
npm install
npm run dev
```

Validation:

```bash
npm run typecheck
npm run build
```

## Deployment

Production workflow: **GitHub → Vercel**. Keep Vercel on the Next.js preset and leave Output Directory on its framework default.
