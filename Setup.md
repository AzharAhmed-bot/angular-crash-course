# Development server
Make sure to create your branch and work from your branch and not the main one.
Install the dependencies using the following command:

```sh
npm i
```

To launch the development server, use the command:
```sh
ng serve
```

# Code Scaffolding
Angular CLI facilitates code generation for various project components. You can generate a new component using the following command:

```sh
ng generate component <component-name>

```


## Create your pipe
Angular Pipes allows its users to change the format in which data is being displayed on the screen. 
To create your custom pipe folder 
You need to create a folder for pipes, then run the command below to generate file in your pipes folder
```sh
ng g pipe pipes/<pipename>
```
## Create your custom service
Angular services are used to share data and methods between unrelated components
It uses a technique called dependency injection which is basically a design pattern of delivering some part of the Application to another part.
It is usually best practice to define a single instance in the app.module.ts instead of defining multiple instances in the components that inject the services or rather you can use the @Injectable decorator which basically says that we can inject this into any class that needs it without neccessarily defining the instance in every class.
You need to create a folder for Services, then run the command below to generate file in your custom services.

```sh
ng g s Services/<servicename>
```