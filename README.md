## angular-adv-boa3

**Pre assessment link:  https://forms.cloud.microsoft/r/19GSmgqAQR**

### Nav bar CSS
```CSS
nav ul {
    list-style: none; /* Remove default bullet points */
    margin: 0;
    padding: 0;
    /* Style for horizontal menu */
    display: flex; /* Or display: inline-block */
  }
  
  nav li {
    /* Style for menu items */
    padding: 10px 20px; /* Add some padding */
    border-right: 1px solid #ccc; /* Add a separator */
  }
  
  nav li:last-child {
    border-right: none; /* Remove separator for the last item */
  }
  
  nav a {
    text-decoration: none; /* Remove underlines */
    color: #333; /* Set link color */
  }
```

```sh
npm install --save-dev jest@29.7.0 jest-preset-angular@14.0.0 ts-jest@29.1.1 @types/jest@29.5.11 --legacy-peer-deps
```

```sh
npm install ts-node --legacy-peer-deps
```