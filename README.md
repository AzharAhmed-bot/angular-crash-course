## Angular Learning Journey By Azhar Ahmed 

Welcome to AngularIntro, a gateway to learning Angular! This project has been set up using Angular CLI version 16.2.8, a powerful toolset that streamlines Angular development.

## Introduction to Angular
Angular is a popular open-source web application framework developed and maintained by Google and a community of developers. It's designed to make both the development and testing of such applications easier. Here's a brief introduction to some key aspects of Angular:

1. Architecture:

Angular follows the Model-View-Controller (MVC) architecture. It divides the application into three interconnected components: Model (data and business logic), View (presentation and UI), and Controller (handles user input and updates the model and view).

2. Typescript:

Angular is built using TypeScript, a superset of JavaScript. TypeScript adds static typing to JavaScript, making it more scalable and maintainable for large projects.

3. Component-Based Structure:

Angular applications are built using a component-based structure. Components are the fundamental building blocks, encapsulating the HTML, CSS, and logic needed for a specific part of the user interface.

4. Two-Way Data Binding:

Angular provides two-way data binding, which means that changes in the user interface are automatically reflected in the application data, and vice versa. This simplifies the synchronization between the model and the view.

5. Dependency Injection:

Angular has a powerful dependency injection system that makes it easy to manage and share dependencies among components. This promotes modularity and testability.

6. Directives:

Directives in Angular are markers on a DOM element that tell Angular to attach a specific behavior to that element or transform the DOM in a particular way. Examples include ngIf, ngFor, and custom directives.

7. Services:

Angular services are singleton objects that can be injected into components and other services. They are used to encapsulate and share logic across the application.

8. Angular CLI:

The Angular Command Line Interface (CLI) is a powerful tool that helps with the development of Angular applications by providing various commands for generating components, services, modules, and more. It also facilitates tasks like testing, building, and deploying applications.
To install the Angular CLI run the command
```sh
npm install -g @angular/cli
```

9. RxJS for Reactive Programming:

Angular leverages Reactive Extensions for JavaScript (RxJS) to handle asynchronous operations and events in a reactive and efficient manner.

10. Cross-Platform Development:

Angular supports cross-platform development, allowing you to build web applications as well as mobile applications using frameworks like Ionic.


## Getting Started

# Development server
To launch the development server, use the command:
```sh
ng serve
```

# Code Scaffolding
Angular CLI facilitates code generation for various project components. You can generate a new component using the following command:

```sh
ng generate component <component-name>

```

# Building Your Project
To build the project, execute the following command:
```sh
ng build
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
You need to create a folder for Services, then run the command below to generate file in your custom services
```sh
ng g s Services/<servicename>
```
