<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://ai.google.dev/static/site-assets/images/share-ais-513315318.png" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/e34fad7e-4fa2-4ffe-9513-c8fea2de29ce

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

## Inquiry form setup

The contact and consultation forms submit with AJAX to the FormSubmit endpoint
`https://formsubmit.app/f/jcf4p5tjxr`. The forms stay on the website and show
success only after FormSubmit accepts the submission. An empty `_gotcha`
honeypot field is included to help filter spam.

The FormSubmit address is configured in
`src/services/consultationsService.js`. Update it there if the receiving
address changes.

Project listings are static data in `src/data/mockData.js`. Update that file to
change the website's project listings; there is no online project editor or
database integration.
