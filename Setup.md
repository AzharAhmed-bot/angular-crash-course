# Set up Instructions

Make sure to create your branch and work from your branch and not the main one.
## Project set up instructions
To set up your project locally please follow this steps



1. Install the dependencies using the following command:
```sh
npm i
```
2. To install the dependencies for the backend, Open a new bash or cli:
    - Nagivate to the backend 
```sh
cd backend
```
    - Enter into the virtual environment
    ```sh
    pipenv shell
    ```
    - Install the dependencies
    ```sh
     pipenv install
    ```

3. To run both servers make sure you are in the **angular-intro** directory then run the command
```sh
npm start
```
You should have the frontend on http://localhost:4200/ and the backend on http://localhost:5000/

**This is the end of the set up**




## Angular CLI commands

# Code Scaffolding
Angular CLI facilitates code generation for various project components. You can generate a new component using the following command:

```sh
ng generate component <component-name>

```


# Create your pipe
Angular Pipes allows its users to change the format in which data is being displayed on the screen. 
To create your custom pipe folder 
You need to create a folder for pipes, then run the command below to generate file in your pipes folder
```sh
ng g pipe <pipename>
```
# Create your custom service
Angular services are used to share data and methods between unrelated components
It uses a technique called dependency injection which is basically a design pattern of delivering some part of the Application to another part.
It is usually best practice to define a single instance in the app.module.ts instead of defining multiple instances in the components that inject the services or rather you can use the @Injectable decorator which basically says that we can inject this into any class that needs it without neccessarily defining the instance in every class.
You need to create a folder for Services, then run the command below to generate file in your custom services.

```sh
ng g s <servicename>
```