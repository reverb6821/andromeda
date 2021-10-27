# Osiris - Admin Dashboard

Osiris is a free and open-sourced pure css themed Angular 12 starter project, focused on management for WebApp and E-Commerce.

### Project Structure

```
.
├── src                             # Main root file
│   ├── app                         # Load and stress tests
│   │    ├── components             # All Angular component for the template
│   │    │    ├── partials          # All partials components 
│   │    │    └── shared            # All shared components
│   │    ├── app-routing.module.ts  # Angular routes file
│   │    └── app.module.ts          # All modules imported
│   ├── integration                 # End-to-end, integration tests (alternatively `e2e`)
│   └── unit                        # Unit tests
├── browserlistrc
├── eslintignore
├── eslintrc.json                   # Eslint file for rules
├── .gitignore
├── .prettierrc.json                # Prettier file to define style rules
├── angular.json                    # The core of angular, set here all your package and dependencies
├── karma.conf.js
├── package.json
├── tailwind.js                     # Tailwind Config file
├── tsconfig.app.json
├── tsconfig.json
└── tsconfig.spec.json
```


### Feature
Using this template you will be able to leverage lots of built-in components and thus focus on building features that set you apart from competitors rather than bulding everything from scratch. 

- TailwindCSS
- Respondive Layout
- Tables
- Charts (builded with Chart.js)
- Notification
- Icons
- Maps
- 404 & 500 page errors

### How to start
You can start by cloning the latest version of Osiris on your local machine by running:

1. Clone it on your Folder
```$ git clone git@github.com:reverb6821/admindesk.git ```
2. Move on project's folder and install all dependencies you need
```$ npm install ```
3. Launch it with npm commands.

### npm commands:
###### Angular defaults commands
```
    "ng": "ng",
    "start": "ng serve",
    "build": "ng build",
    "watch": "ng build --watch --configuration development",
    "test": "ng test"
```
###### Eslint + Prettier 
