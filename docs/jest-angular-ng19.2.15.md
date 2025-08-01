# Configure Jest with angular 19.2.15

---


1. **Unistall Karma and Jasmine**

```sh
	npm uninstall karma karma-chrome-launcher karma-coverage karma-jasmine karma-jasmine-html-reporter
```

2. **Install Jest and its supporting packages**
	
	
```sh
	npm install --save-dev jest jest-environment-jsdom @types/jest ts-jest
```

3. **Initialize Jest Config**

```sh
	npx ts-jest config:init
```

	The Above commands create the following code:
```ts
	/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['ts', 'html', 'js', 'json'],
  transform: {
    '^.+\\.(ts|mjs|html)$': ['ts-jest', { tsconfig: 'tsconfig.spec.json' }],
  },
  testMatch: ['**/*.spec.ts'],
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.spec.json',
    },
  },
};

```
4. **Update your `tsconfig.spec.json` file**

	Make sure your `tsconfig.spec.json` looks like this:
```ts
	{
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "outDir": "./out-tsc/spec",
    "types": ["jest"],
    "esModuleInterop": true
  },
  "files": ["src/test.ts"],
  "include": ["src/**/*.spec.ts", "src/**/*.d.ts"]
}

```

6. **Last step: Update *package.json* **

	In the scripts section, replace the test entry with:
```ts
	"test": "jest",
```

## Integrate sonar with Jest

1. **Setup Sonar Server**

	- install sonar from https://binaries.sonarsource.com/Distribution/sonarqube/sonarqube-25.4.0.105899.zip

	- Run sonar 
	```sh
	cd to <SONAR_HOME>/bin/windows-x86-64
	startSonar.bat
	```
	- Open sonar web console at http://localhost:9000
	- login as admin/admin and change the password
	- click administration > security > user > administrator > Tokens > create Token
	- copy the token and keep it safe

2. **At Angular application **

	- install sonar scanner
	```sh
	npm install -g sonar-scanner
	```
	- create a file named `sonar-project.properties at` the root folder of the project

	```bash
	sonar.projectKey=my-angular-project
	sonar.projectName=My Angular Project
	sonar.projectVersion=1.0
	sonar.sources=src
	sonar.tests=src
	sonar.test.inclusions=**/*.spec.ts
	sonar.exclusions=**/node_modules/**,**/*.spec.ts
	sonar.javascript.lcov.reportPaths=coverage/lcov.info
	sonar.sourceEncoding=UTF-8
	sonar.token=<your sonar token>
	```

3. **RUnning Test and Sonar Scanner**
	- make sure your sonar server is Running
	- run jest test  
		` npm run test `
	- run sonar- scanner  
		` sonar-scanner`
	- switch to sonar web console and find you project and do the analysis

`