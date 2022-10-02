<script src="https://cdn.tailwindcss.com"></script>
# Starter files for vite with react and tailwindcss , react realy for graphql , react-location for routing and zustand for state mangement  

### *clone the repo and do `npm install` and do `npm update` if necesary*


### dependancies 
- **tailwindcss**
- **dayjs for time formating**
- **react-query for server state management**
- **uniqid**
- **react-icons**


### [custom components](src\components\Shared)

### [resct-query](src\main.tsx) :
is preconfigured feel free to omit the defaultConfig if you want default behaviour

tailwind is configured with a few custom classes
```css
.flex-center{
  @apply flex justify-center items-center
}
.flex-center-col{
  @apply flex flex-col justify-center items-center
}
.scroll-bar {
  @apply scrollbar-thin scrollbar-thumb-purple-600 scrollbar-track-green-500;
}

```

[root element](src\main.tsx)<br>
[main container fro all the routes and toolbar](src\App.tsx)<br>
[custome theme hook](src\utils\useTheme.ts)<br>
[relay config files](src\relay)<br>
[zustand stores](src\store.ts)<br>
[react location routes](src\routes.tsx)<br>
[codgen config file](codegen.yml)
> codegen is not necessary if using relay because realy-compiler generates it's own types


dont forget to add a .env file with your github personal access token like so

```ts
VITE_TOKEN = ghp_TkkntokrntttkeeenKmSFXfQtoktntoktntotk
```

you can explore other branches of this repo for more complete projects 
