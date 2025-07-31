# Configure Jest with angular 19

---


1. **Unistall Karma and Jasmine**

```sh
	npm uninstall karma karma-chrome-launcher karma-coverage karma-jasmine karma-jasmine-html-reporter @types/jasmine jasmine-core
```

2. **Install Jest, its types, and presets for Angular and also *ts-node* **
	*ts-node is required to resd .ts files by Jest*
	
```sh
	npm i --save-dev jest @types/jest jest-preset-angular ts-node
```

3. **Create a `setup-jest.ts` file in your project’s root folder**

	And add that single line of code in it:
	//import 'jest-preset-angular/setup-jest'; //deprecated

	add:
```ts
	// setup-jest.ts
	 import { setupZoneTestEnv } from 'jest-preset-angular/setup-env/zone';
		
	 setupZoneTestEnv();
```

4. **Create a `jest.config.ts` file in your project’s root folder with the following command**

```sh
	npx jest — init
```

	Then ensure you have the following config options set in that file:
```ts
	preset: 'jest-preset-angular',
	setupFilesAfterEnv: ['./setup-jest.ts']

```
5. **Update your `tsconfig.spec.json` file**

	Your compilerOptions should look like this:
```ts
	"compilerOptions": {
	"outDir": "./out-tsc/spec",
	"types": [ "jest" ],
	"esModuleInterop": true,
	"emitDecoratorMetadata": true
	},
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