# Cargo Shift Landing

A minimal marketing / lead-gen landing page scaffold built with:

- Next.js 14 (App Router)
- React 18
- TypeScript
- Tailwind CSS 3
- Strict mode + ESLint + Prettier

## Getting Started

Install dependencies:

```bash
npm install
# or
pnpm install
```

Run the development server:

```bash
npm run dev
```

Visit http://localhost:3000

## Customization

- Tailwind brand palette: `tailwind.config.ts` under `colors.brand`
- Global styles: `app/globals.css`
- Sections: components under `components/`
- Metadata: `app/layout.tsx`

## Deployment

You can deploy directly to Vercel:

```bash
vercel
```

Or build and run:

```bash
npm run build
npm start
```

## License

Add a LICENSE file if needed.