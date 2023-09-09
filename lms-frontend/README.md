# LMS Frontend

### Setup Instruction

1.Clone the Project

```
git clone https://github.com/ManasHalari/lms-fontend.git
```

2.Move Into the Directory

```
cd lms-frontend
```

3.Installing dependencies

```
npm install
```

4.run server

```
npm run dev
```

### Setup Instructions for Tailwind CSS

1. Tailwind Official Instruction Link

```
https://tailwindcss.com/docs/installation
```

2. Installing taiwindcss

```
npm install -D tailwindcss
```

3. for Creating tailwind.config.js file

```
npx tailwindcss init
```

4. Adding the file extensions in the tailwind.config.js in content

```
"./src/**/*.{html,js,jsx,ts,tsx}"
```

5. Add tailwind Directives in "index.css" file

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### Adding Plugins and Dependencies

```
npm i @reduxjs/toolkit react-router-dom react-redux react-icons react-chartjs-2 chart.js daisyui axios react-hot-toast @tailwindcss/line-clamp
```

### Adding eslint import sort Configuration

1. Installing eslint import sort

```
npm i -D eslint-plugin-simple-import-sort
```

2. Adding one rule in rules in `eslintrc.cjs`

```
rules:{
    "simple-import-sort/imports:"error"
}
```

3. Adding plugins in `eslintrc.cjs`

```
  plugins: [...,'simple-import-sort'],
```

4.Adding Auto-save import sort on VS Code
  (i) open->settings->seetings.json

  ```
   "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true
    }
  ```
  -This will help you to sort all import statements when you save the file.


