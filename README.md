# Mercat test

This is a test to apply to Mercat.

It is a basic e-commerce front-end, using:
* Vite
* Typescript
* Tailwind
* React
* React Router
* Redux toolkit.

And also consuming data from [amiiboAPI](https://www.amiiboapi.com/api/amiibo)

## Installation

Use the package manager of your preference (I used pnpm) to install all dependencies. Then run the proyect, using the following commands:

```bash
npm install
npm run dev
```

## Usage

Since the API doesn't have a limit option for requests, I've limited the displayed results to 100. I'm planning on add a pagination component in the future. 

This is a very simple app. You can see products and add them to the cart, and then edit the quantities from the expandable cart drawer.
You can do the same thing on the ```/summary``` page.
