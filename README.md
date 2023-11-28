## Clone repository
```bash
git clone https://github.com/shaheen2013/next-assesment-shaheen.git
```

## Install dependencies
```bash
npm install
# or 
yarn install
```

## Prepare Stripe for payment
Copy .env.example to .env.local on your project root directory and stripe keys

```bash
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_publishable_key
STRIPE_SECRET_KEY=your_secret_key
```

## Run development server
```bash
npm run dev
# or 
yarn dev
```