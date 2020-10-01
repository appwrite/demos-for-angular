# Welcome to Angular!

Demos and tutorials for getting started with Appwrite + Angular

## Getting Started
This tutorial introduces you to the essentials of Angular by walking you through a simple e-commerce site with a catalog, shopping cart, and check-out form. To help you get started right away, this guide uses a simple ready-made application that you can examine and modify interactively (without having to set up a local work environment).Head to https://angular.io/start

## Template Syntax
Angular's template syntax extends HTML and JavaScript. This section introduces template syntax by enhancing the "Products" area. For more info. Visit - https://angular.io/start#template-syntax

## Components
Components define areas of responsibility in the user interface, or UI, that let you reuse sets of UI functionality. You've already built one with the product list component. Visit - https://angular.io/start#components

A component consists of three things:

* A component class that handles data and functionality. In the previous section, the product data and the share() method in the component class handle data and functionality, respectively.
* An HTML template that determines the UI. In the previous section, the product list's HTML template displays the name, description, and a "Share" button for each product.
* Component-specific styles that define the look and feel. Though product list does not define any styles, this is where component CSS resides.

## Input
Currently, the product list displays the name and description of each product. The product list component also defines a products property that contains imported data for each product from the products array in `products.ts`. Visit - https://angular.io/start#input

The next step is to create a new alert feature that takes a product as an input. The alert checks the product's price, and, if the price is greater than $700, displays a "Notify Me" button that lets users sign up for notifications when the product goes on sale.

## Output
To make the "Notify Me" button work, you need to configure two things: Visit - https://angular.io/start#output

* the product alert component to emit an event when the user clicks "Notify Me"
* the product list component to act on that event

## Next Steps
Congratulations! You've completed your first Appwrite Angular app! Visit - https://angular.io/start#next-steps

You have a basic online store catalog with a product list, "Share" button, and "Notify Me" button. You've learned about the foundation of Angular: components and template syntax. You've also learned how the component class and template interact, and how components communicate with each other.
