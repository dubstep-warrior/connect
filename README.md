<div align="center">
<h1 align="center">
<img src="https://cdn-icons-png.flaticon.com/512/5500/5500939.png" width="100" />
<br>Connect!
</h1>
<h3>◦ Connecting through barriers</h3>
<h3>◦ Developed with the software and tools listed below.</h3>

<p align="center"> 
<img src="https://img.shields.io/badge/DJANGO-REST-ff1709?style&logoColor=white" alt="Django REST" />
<img src="https://img.shields.io/badge/angular-%23DD0031.svg?style&logo=angular&logoColor=white" alt="Angular" />
<img src="https://img.shields.io/badge/sqlite-%2307405e.svg?style&logo=sqlite&logoColor=white" alt="SQLite" />

<img src="https://img.shields.io/badge/Redis-DC382D.svg?style&logo=Redis&logoColor=white" alt="Redis" />
<img src="https://img.shields.io/badge/HTML5-E34F26.svg?style&logo=HTML5&logoColor=white" alt="HTML5" />
<img src="https://img.shields.io/badge/Jasmine-8A4182.svg?style&logo=Jasmine&logoColor=white" alt="Jasmine" />
<img src="https://img.shields.io/badge/Bootstrap-7952B3.svg?style&logo=Bootstrap&logoColor=white" alt="Bootstrap" />
<img src="https://img.shields.io/badge/ESLint-4B32C3.svg?style&logo=ESLint&logoColor=white" alt="ESLint" />

<img src="https://img.shields.io/badge/Python-3776AB.svg?style&logo=Python&logoColor=white" alt="Python" />
<img src="https://img.shields.io/badge/TypeScript-3178C6.svg?style&logo=TypeScript&logoColor=white" alt="TypeScript" /> 
<img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style&logo=JavaScript&logoColor=black" alt="JavaScript" />
<img src="https://img.shields.io/badge/JSON-000000.svg?style&logo=JSON&logoColor=white" alt="JSON" />
</p>
<img src="https://img.shields.io/github/languages/top/dubstep-warrior/connect?style&color=5D6D7E" alt="GitHub top language" />
<img src="https://img.shields.io/github/languages/code-size/dubstep-warrior/connect?style&color=5D6D7E" alt="GitHub code size in bytes" />
<img src="https://img.shields.io/github/commit-activity/m/dubstep-warrior/connect?style&color=5D6D7E" alt="GitHub commit activity" /> 
</div>

---

## 📒 Table of Contents
- [📒 Table of Contents](#-table-of-contents)
- [📍 Overview](#-overview)
- [⚙️ Features](#-features)
- [📂 Project Structure](#project-structure)
- [🧩 Modules](#modules)
- [🚀 Getting Started](#-getting-started)
- [🗺 Roadmap](#-roadmap)
- [🤝 Contributing](#-contributing) 

---


## 📍 Overview

This project is a full-stack social networking platform where users can connect with each other globally. Through the intention of learning each other’s native languages, we seek to foster connections and overcoming the language barrier.

---

## ⚙️ Features

- User authentication
- Profile management
- Connection management
- User post and feed browsing
- Private messaging and group chats

---


## 📂 Project Structure


```bash
.
├── README.md
├── project-backend
│   ├── dump.rdb
│   ├── requirements.txt
│   └── socialnetworkbackend
│       ├── account
│       │   ├── __init__.py
│       │   ├── admin.py
│       │   ├── apps.py
│       │   ├── model_factories.py
│       │   ├── models.py
│       │   ├── serializers.py
│       │   ├── tests.py
│       │   ├── urls.py
│       │   └── views.py
│       ├── base_classes
│       │   └── base_serializer_class.py
│       ├── chat
│       │   ├── __init__.py
│       │   ├── admin.py
│       │   ├── apps.py
│       │   ├── consumers.py
│       │   ├── middlewares.py
│       │   ├── model_factories.py
│       │   ├── models.py
│       │   ├── routing.py
│       │   ├── serializers.py
│       │   ├── tests.py
│       │   ├── urls.py
│       │   └── views.py
│       ├── connect
│       │   ├── __init__.py
│       │   ├── admin.py
│       │   ├── apps.py
│       │   ├── model_factories.py
│       │   ├── models.py
│       │   ├── serializers.py
│       │   ├── tests.py
│       │   ├── urls.py
│       │   └── views.py
│       ├── db.sqlite3
│       ├── manage.py
│       ├── media
│       │   ├── chatroom_images
│       │   ├── post_images
│       │   ├── profile_images
│       │   └── standard
│       │       ├── chatroom.png
│       │       └── profile_img.jpg
│       ├── post
│       │   ├── __init__.py
│       │   ├── admin.py
│       │   ├── apps.py
│       │   ├── model_factories.py
│       │   ├── models.py
│       │   ├── serializers.py
│       │   ├── tests.py
│       │   ├── urls.py
│       │   └── views.py
│       └── socialnetworkbackend
│           ├── __init__.py
│           ├── asgi.py
│           ├── routing.py
│           ├── settings.py
│           ├── urls.py
│           └── wsgi.py
└── project-frontend
    ├── README.md
    ├── angular.json
    ├── package-lock.json
    ├── package.json
    ├── src
    │   ├── app
    │   │   ├── app-routing.module.ts
    │   │   ├── app.component.html
    │   │   ├── app.component.scss
    │   │   ├── app.component.spec.ts
    │   │   ├── app.component.ts
    │   │   ├── app.module.ts
    │   │   ├── chat
    │   │   │   ├── chat-routing.module.ts
    │   │   │   ├── chat.module.ts
    │   │   │   └── layout
    │   │   │       ├── layout.component.html
    │   │   │       ├── layout.component.scss
    │   │   │       ├── layout.component.spec.ts
    │   │   │       └── layout.component.ts
    │   │   ├── connect
    │   │   │   ├── connect-routing.module.ts
    │   │   │   ├── connect.module.ts
    │   │   │   └── layout
    │   │   │       ├── layout.component.html
    │   │   │       ├── layout.component.scss
    │   │   │       ├── layout.component.spec.ts
    │   │   │       └── layout.component.ts
    │   │   ├── core
    │   │   │   ├── classes
    │   │   │   │   └── custom-overlay-ref.ts
    │   │   │   ├── directives
    │   │   │   │   └── base.directive.ts
    │   │   │   ├── interceptor
    │   │   │   │   ├── auth.interceptor.spec.ts
    │   │   │   │   └── auth.interceptor.ts
    │   │   │   ├── interface
    │   │   │   │   └── user.ts
    │   │   │   └── pipes
    │   │   │       ├── date-as-ago
    │   │   │       │   ├── date-as-ago.pipe.spec.ts
    │   │   │       │   └── date-as-ago.pipe.ts
    │   │   │       └── safe-url
    │   │   │           └── safe-url.pipe.ts
    │   │   ├── feed-page
    │   │   │   ├── feed-page.component.html
    │   │   │   ├── feed-page.component.scss
    │   │   │   ├── feed-page.component.spec.ts
    │   │   │   └── feed-page.component.ts
    │   │   ├── login
    │   │   │   ├── login.component.html
    │   │   │   ├── login.component.scss
    │   │   │   ├── login.component.spec.ts
    │   │   │   └── login.component.ts
    │   │   ├── profile
    │   │   │   ├── profile.component.html
    │   │   │   ├── profile.component.scss
    │   │   │   ├── profile.component.spec.ts
    │   │   │   └── profile.component.ts
    │   │   ├── registration
    │   │   │   ├── basic-info
    │   │   │   │   ├── basic-info.component.html
    │   │   │   │   ├── basic-info.component.scss
    │   │   │   │   ├── basic-info.component.spec.ts
    │   │   │   │   └── basic-info.component.ts
    │   │   │   ├── info
    │   │   │   │   ├── info.component.html
    │   │   │   │   ├── info.component.scss
    │   │   │   │   ├── info.component.spec.ts
    │   │   │   │   └── info.component.ts
    │   │   │   ├── language
    │   │   │   │   ├── language.component.html
    │   │   │   │   ├── language.component.scss
    │   │   │   │   ├── language.component.spec.ts
    │   │   │   │   └── language.component.ts
    │   │   │   ├── layout
    │   │   │   │   ├── layout.component.html
    │   │   │   │   ├── layout.component.scss
    │   │   │   │   ├── layout.component.spec.ts
    │   │   │   │   └── layout.component.ts
    │   │   │   ├── registration-routing.module.ts
    │   │   │   └── registration.module.ts
    │   │   ├── services
    │   │   │   ├── auth
    │   │   │   │   ├── auth.service.spec.ts
    │   │   │   │   └── auth.service.ts
    │   │   │   ├── chat
    │   │   │   │   ├── chat.service.spec.ts
    │   │   │   │   └── chat.service.ts
    │   │   │   ├── connect
    │   │   │   │   ├── connect.service.spec.ts
    │   │   │   │   └── connect.service.ts
    │   │   │   ├── feed
    │   │   │   │   ├── feed.service.spec.ts
    │   │   │   │   └── feed.service.ts
    │   │   │   ├── overlay
    │   │   │   │   ├── overlay.service.spec.ts
    │   │   │   │   └── overlay.service.ts
    │   │   │   ├── registration
    │   │   │   │   ├── registration.service.spec.ts
    │   │   │   │   └── registration.service.ts
    │   │   │   ├── server
    │   │   │   │   ├── server.service.spec.ts
    │   │   │   │   └── server.service.ts
    │   │   │   └── websocket
    │   │   │       ├── web-socket.service.spec.ts
    │   │   │       └── web-socket.service.ts
    │   │   └── shared
    │   │       ├── add-group
    │   │       │   ├── add-group.component.html
    │   │       │   ├── add-group.component.scss
    │   │       │   ├── add-group.component.spec.ts
    │   │       │   └── add-group.component.ts
    │   │       ├── chatlog
    │   │       │   ├── chatlog.component.html
    │   │       │   ├── chatlog.component.scss
    │   │       │   ├── chatlog.component.spec.ts
    │   │       │   └── chatlog.component.ts
    │   │       ├── contacts
    │   │       │   ├── contacts.component.html
    │   │       │   ├── contacts.component.scss
    │   │       │   ├── contacts.component.spec.ts
    │   │       │   └── contacts.component.ts
    │   │       ├── draft-message
    │   │       │   ├── draft-message.component.html
    │   │       │   ├── draft-message.component.scss
    │   │       │   ├── draft-message.component.spec.ts
    │   │       │   └── draft-message.component.ts
    │   │       ├── feed
    │   │       │   ├── feed.component.html
    │   │       │   ├── feed.component.scss
    │   │       │   ├── feed.component.spec.ts
    │   │       │   └── feed.component.ts
    │   │       ├── image
    │   │       │   ├── image.component.html
    │   │       │   ├── image.component.scss
    │   │       │   ├── image.component.spec.ts
    │   │       │   └── image.component.ts
    │   │       ├── menu
    │   │       │   ├── menu.component.html
    │   │       │   ├── menu.component.scss
    │   │       │   ├── menu.component.spec.ts
    │   │       │   └── menu.component.ts
    │   │       ├── overlay-modal
    │   │       │   ├── overlay-modal.component.html
    │   │       │   ├── overlay-modal.component.scss
    │   │       │   ├── overlay-modal.component.spec.ts
    │   │       │   └── overlay-modal.component.ts
    │   │       ├── post
    │   │       │   ├── post.component.html
    │   │       │   ├── post.component.scss
    │   │       │   ├── post.component.spec.ts
    │   │       │   └── post.component.ts
    │   │       ├── profile-tag
    │   │       │   ├── profile-tag.component.html
    │   │       │   ├── profile-tag.component.scss
    │   │       │   ├── profile-tag.component.spec.ts
    │   │       │   └── profile-tag.component.ts
    │   │       └── shared.module.ts
    │   ├── assets
    │   │   └── images
    │   │       └── homepage.jpg
    │   ├── environments
    │   │   └── environment.ts
    │   ├── favicon.ico
    │   ├── index.html
    │   ├── main.ts
    │   ├── proxy.conf.json
    │   ├── shared
    │   │   ├── _mixins.scss
    │   │   └── _variables.scss
    │   └── styles.scss
    ├── tsconfig.app.json
    ├── tsconfig.json
    └── tsconfig.spec.json

74 directories, 539 files

```




---

## 🧩 Modules

<details closed><summary>Src</summary>

| File                                                                                                 | Summary                                                                                                                                                                                                                                                                                                                                                                           |
| ---                                                                                                  | ---                                                                                                                                                                                                                                                                                                                                                                               |
|  [main.ts](https://github.com/dubstep-warrior/connect/blob/main/project-frontend/src/main.ts)         | This code is using the Angular framework to dynamically load and bootstrap the `AppModule` module in a browser environment. It catches any error that occurs during the bootstrap process and logs it to the console.                                                                                                                                                             |
| [styles.scss](https://github.com/dubstep-warrior/connect/blob/main/project-frontend/src/styles.scss) | The code includes custom theming for Angular Material, defining palettes for primary, accent, and warn colors. It creates a theme object and includes theme styles for core and each component used in the app. It also includes global styles, such as setting section max-width and body font-family. There is a style for disabled buttons and an error message class defined. |

</details>

<details closed><summary>App</summary>

| File                                                                                                                         | Summary                                                                                                                                                                                                                                                                                                                                        |
| ---                                                                                                                          | ---                                                                                                                                                                                                                                                                                                                                            |
| [app.component.scss](https://github.com/dubstep-warrior/connect/blob/main/project-frontend/src/app/app.component.scss)       | This code snippet provides specific styles for a div element with the class "homepage". It sets the maximum width to none, adjusts the height and width to cover the viewport, and applies a background image with cover sizing. The inner div is centered on the page using auto margin.                                                      |
| [app.component.spec.ts](https://github.com/dubstep-warrior/connect/blob/main/project-frontend/src/app/app.component.spec.ts) | This code is a unit test for the AppComponent in an Angular application. It tests the creation of the component, checks if the title is set correctly, and verifies if the title is rendered properly in the component's template.                                                                                                             |
| [app.component.html](https://github.com/dubstep-warrior/connect/blob/main/project-frontend/src/app/app.component.html)       | The code consists of dynamic menus based on the user's profile. If the user is not logged in, it displays a homepage with a background image. If the user is logged in, it renders the routes specified in the router outlet.                                                                                                                  |
| [app.module.ts](https://github.com/dubstep-warrior/connect/blob/main/project-frontend/src/app/app.module.ts)                 | This code is for an Angular app's main module. It includes necessary imports for forms, routing, HTTP requests, and UI components. It also provides an interceptor for authentication. Additionally, it includes a shared module. The module defines the app's components, services, and configurations, and injects the Angular app injector. |
| [app-routing.module.ts](https://github.com/dubstep-warrior/connect/blob/main/project-frontend/src/app/app-routing.module.ts) | This code sets up the routing for an Angular application. It defines the routes for different components and lazy loads modules for registration, connecting, and chatting. It ensures that the FeedPageComponent is the default component when the application is loaded.                                                                     |

</details>

<details closed><summary>Websocket</summary>

| File                                                                                                                                                      | Summary                                                                                                                                                                                                                                                                                                                                                                                                                      |
| ---                                                                                                                                                       | ---                                                                                                                                                                                                                                                                                                                                                                                                                          |
| [web-socket.service.ts](https://github.com/dubstep-warrior/connect/blob/main/project-frontend/src/app/services/websocket/web-socket.service.ts)           | The WebSocketService class is responsible for managing WebSocket connections. It provides functionalities for connecting to a WebSocket server, sending data through the connection, and closing the connection. It relies on the AuthService class to authenticate the connection by providing a token. The class implements the OnDestroy interface to ensure that the connection is closed when the service is destroyed. |
| [web-socket.service.spec.ts](https://github.com/dubstep-warrior/connect/blob/main/project-frontend/src/app/services/websocket/web-socket.service.spec.ts) | This code is a test for the WebSocketService class in an Angular application.It ensures that the service is created successfully, using the TestBed framework for Angular unit testing.                                                                                                                                                                                                                                      |

</details>

<details closed><summary>Auth</summary>

| File                                                                                                                                     | Summary                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| ---                                                                                                                                      | ---                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| [auth.service.spec.ts](https://github.com/dubstep-warrior/connect/blob/main/project-frontend/src/app/services/auth/auth.service.spec.ts) | This code is for testing the AuthService's creation and authenticity using the Angular testing framework. The code sets up the TestBed configuration and injects the AuthService. It then checks if the service has been created.                                                                                                                                                                                                                                                                          |
| [auth.service.ts](https://github.com/dubstep-warrior/connect/blob/main/project-frontend/src/app/services/auth/auth.service.ts)           | The code defines an Angular service called AuthService that handles user authentication. It uses HttpClient to communicate with the server and interacts with another service called ServerService. The code provides functions for login and logout. When a user logs in successfully, the token is stored in local storage and the user is redirected to the home page. The logout function clears the token from local storage and redirects the user. It also emits an error subject when login fails. |

</details>

<details closed><summary>Server</summary>

| File                                                                                                                                           | Summary                                                                                                                                                                                                                                                                                                                                                 |
| ---                                                                                                                                            | ---                                                                                                                                                                                                                                                                                                                                                     |
| [server.service.ts](https://github.com/dubstep-warrior/connect/blob/main/project-frontend/src/app/services/server/server.service.ts)           | The code defines a service that handles HTTP requests to the backend API. It provides functions for user authentication, account management, feed-related operations, adding and confirming connections, and managing contacts and group chats. The functions make HTTP requests with specified methods and URLs, and return the response as a promise. |

</details>

<details closed><summary>Registration</summary>

| File                                                                                                                                                             | Summary                                                                                                                                                                                                                                                                                                                                                     |
| ---                                                                                                                                                              | ---                                                                                                                                                                                                                                                                                                                                                         |
| [registration.service.ts](https://github.com/dubstep-warrior/connect/blob/main/project-frontend/src/app/services/registration/registration.service.ts)           | The code defines a RegistrationService that handles user registration functionality. It provides a form with validation for user input, sends the form data to a server using ServerService, and handles errors using a Subject. It also utilizes the AuthService for user authentication.                                                                  |
| [registration.service.spec.ts](https://github.com/dubstep-warrior/connect/blob/main/project-frontend/src/app/services/registration/registration.service.spec.ts) | This code imports the necessary modules, initializes a RegistrationService, and performs a test to ensure the service is successfully created.                                                                                                                                                                                                              |
| [registration-routing.module.ts](https://github.com/dubstep-warrior/connect/blob/main/project-frontend/src/app/registration/registration-routing.module.ts)      | The code defines the routing configuration for a registration feature module in an Angular application. It sets up routes for a layout component, basic info component, user info component, and language component. These components are displayed based on the provided routes and are managed using the Angular RouterModule and Routes classes.         |
| [registration.module.ts](https://github.com/dubstep-warrior/connect/blob/main/project-frontend/src/app/registration/registration.module.ts)                      | This code defines and exports the RegistrationModule which encapsulates the core functionalities needed for the registration feature in an Angular application. It includes components for layout, information display, language selection, and basic user info entry. It also imports necessary modules for forms, icon display, and shared functionality. |

</details>

<details closed><summary>Connect</summary>

| File                                                                                                                                              | Summary                                                                                                                                                                                                                                                                                                                                                              |
| ---                                                                                                                                               | ---                                                                                                                                                                                                                                                                                                                                                                  |
| [connect.service.ts](https://github.com/dubstep-warrior/connect/blob/main/project-frontend/src/app/services/connect/connect.service.ts)           | This code is for a ConnectService in an Angular application. It injects a ServerService and provides functionalities to retrieve user connections, add new connections, and confirm connection requests. It communicates with a server through the ServerService and uses Subject for data observability.                                                            |
| [connect.service.spec.ts](https://github.com/dubstep-warrior/connect/blob/main/project-frontend/src/app/services/connect/connect.service.spec.ts) | This code is a unit test for the ConnectService class. It checks if the service is successfully created and returns a truthy value. This ensures that the ConnectService is properly set up and functional.                                                                                                                                                          |
| [connect-routing.module.ts](https://github.com/dubstep-warrior/connect/blob/main/project-frontend/src/app/connect/connect-routing.module.ts)      | This code is responsible for setting up routing in an Angular application. It imports the necessary modules from Angular Router, defines a route for the root path, and associates it with a layout component. Finally, it exports the routing configuration to be used by other modules.                                                                            |
| [admin.py](https://github.com/dubstep-warrior/connect/blob/main/project-backend/socialnetworkbackend/connect/admin.py)                            | This code registers the ConnectionRequest model with the admin interface in Django. It defines the list display fields for the ConnectionRequestAdmin class.                                                                                                                                                                                                         |
| [models.py](https://github.com/dubstep-warrior/connect/blob/main/project-backend/socialnetworkbackend/connect/models.py)                          | The code defines a model for connection requests in a Django project. It includes fields for the sender and receiver of the request. The unique_together constraint ensures that there can't be duplicate requests between the same users.                                                                                                                           |
| [tests.py](https://github.com/dubstep-warrior/connect/blob/main/project-backend/socialnetworkbackend/connect/tests.py)                            | The code includes tests for three API endpoints: ConnectUsersList, AddUser, and ConfirmRequest. It utilizes Django's test framework and the rest_framework package. The tests cover HTTP GET, POST, and DELETE requests, and include authentication and assertions to validate response data and status codes.                                                       |
| [urls.py](https://github.com/dubstep-warrior/connect/blob/main/project-backend/socialnetworkbackend/connect/urls.py)                              | This code defines URL patterns for various API endpoints related to connecting users within a Django web application. It includes paths for retrieving possible connections based on a connection type, adding a new user, and confirming a connection request. The code also applies suffix formatting to the URL patterns for handling different response formats. |
| [model_factories.py](https://github.com/dubstep-warrior/connect/blob/main/project-backend/socialnetworkbackend/connect/model_factories.py)        | The code is a Django model factory that generates instances of the ConnectionRequest model. It uses the factory package to create random users as request_from and request_to fields for each instance. This allows for easy and automated generation of test data for the ConnectionRequest model. Total: 276 characters.                                           |
| [serializers.py](https://github.com/dubstep-warrior/connect/blob/main/project-backend/socialnetworkbackend/connect/serializers.py)                | This code defines a serializer class called ConnectionsSerializer, used for serializing and deserializing ConnectionRequest instances. It specifies the fields to be included:'request_from' and'request_to'.                                                                                                                                                        |
| [apps.py](https://github.com/dubstep-warrior/connect/blob/main/project-backend/socialnetworkbackend/connect/apps.py)                              | This code defines the configuration for the Connect app in Django, setting the default auto field for models and the name of the app. It manages the core functionality and behavior of the Connect app in a concise manner.                                                                                                                                         |

</details>

<details closed><summary>Chat</summary>

| File                                                                                                                                     | Summary                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| ---                                                                                                                                      | ---                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| [chat.service.spec.ts](https://github.com/dubstep-warrior/connect/blob/main/project-frontend/src/app/services/chat/chat.service.spec.ts) | This code is a unit test for a ChatService on an Angular application. It checks if the service is created successfully. The TestBed is used to configure the testing module and inject the ChatService for the test case. The expect statement checks if the service is truthy.                                                                                                                                                                                                                                               |
| [chat.service.ts](https://github.com/dubstep-warrior/connect/blob/main/project-frontend/src/app/services/chat/chat.service.ts)           | The ChatService class provides functionalities to retrieve contacts, send messages, add groups, parse form data, and select a chat. It utilizes the ServerService for API calls and the WebSocketService for WebSocket connections. It also manages the current user, contacts, chats, and current chat through BehaviorSubjects and Subjects.                                                                                                                                                                                |
| [chat-routing.module.ts](https://github.com/dubstep-warrior/connect/blob/main/project-frontend/src/app/chat/chat-routing.module.ts)      | The code is an NgModule that handles routing in an Angular application. It imports the necessary modules and defines a single route. The route points to a layout component, allowing for navigation within the application. This code enables navigation functionality in the chat module.                                                                                                                                                                                                                                   |
| [admin.py](https://github.com/dubstep-warrior/connect/blob/main/project-backend/socialnetworkbackend/chat/admin.py)                      | This code registers the models Chat and Message to the Django admin site, creating a user interface where administrators can view and manage these objects. It also specifies the display fields for each model in the admin interface.                                                                                                                                                                                                                                                                                       |
| [models.py](https://github.com/dubstep-warrior/connect/blob/main/project-backend/socialnetworkbackend/chat/models.py)                    | The code defines two models-Chat and Message. Chat has a name, image, chatroom indicator, and users as fields. Message has a chat, user, message, and date_created. The models represent chatrooms and messages exchanged within them. The code also includes a method to retrieve the users of a chat.                                                                                                                                                                                                                       |
| [tests.py](https://github.com/dubstep-warrior/connect/blob/main/project-backend/socialnetworkbackend/chat/tests.py)                      | The code consists of test cases for the Chat and Message APIs. The ChatAPITest class tests the GET and POST responses for the Chat API, while the MessageAPITest class tests the POST response for the Message API. These test cases cover functionalities like retrieving chats, creating chat rooms, and sending messages. The tests ensure that the API endpoints are functioning properly by checking the response status codes and verifying the data saved in the database.                                             |
| [urls.py](https://github.com/dubstep-warrior/connect/blob/main/project-backend/socialnetworkbackend/chat/urls.py)                        | This code sets up two Django URL endpoints'/api/chat/' and'/api/message/', which are mapped to'ChatView' and'MessageView' respectively. The code also enables support for different suffix patterns using the'format_suffix_patterns' function. (161 characters)                                                                                                                                                                                                                                                              |
| [consumers.py](https://github.com/dubstep-warrior/connect/blob/main/project-backend/socialnetworkbackend/chat/consumers.py)              | This code implements a WebSocket consumer that handles chat functionality. It includes methods for connecting, disconnecting, receiving messages, and sending messages to the room group. It uses asynchronous operations and serializers to handle the data. The code also checks user permissions and serializes chat and message data. The WebSocket consumer joins a room group when connected and sends/receives messages to/from the group. The code is designed to handle chat functionality securely and efficiently. |
| [routing.py](https://github.com/dubstep-warrior/connect/blob/main/project-backend/socialnetworkbackend/chat/routing.py)                  | This code defines a URL pattern for establishing WebSocket connections to a ChatConsumer instance. The pattern requires a room name parameter in the URL path.                                                                                                                                                                                                                                                                                                                                                                |
| [model_factories.py](https://github.com/dubstep-warrior/connect/blob/main/project-backend/socialnetworkbackend/chat/model_factories.py)  | This code provides factory functions for creating instances of the Chat and Message models. The ChatFactory creates a Chat instance with a name and a chatroom flag, and allows for associating users with the chat. The MessageFactory creates a Message instance with a message, and automatically creates a Chat and User instance as associations. These factories help in generating test data with ease.                                                                                                                |
| [serializers.py](https://github.com/dubstep-warrior/connect/blob/main/project-backend/socialnetworkbackend/chat/serializers.py)          | This code includes serializers for Message and Chat models. The MessageSerializer includes a method field to retrieve and serialize user profile. The ChatsSerializer includes a method field to retrieve and serialize messages, as well as a serializer for the users field. Both serializers specify the fields to be included in the serialized output.                                                                                                                                                                   |
| [views.py](https://github.com/dubstep-warrior/connect/blob/main/project-backend/socialnetworkbackend/chat/views.py)                      | The code consists of two API views: MessageView and ChatView.-MessageView handles the creation of messages within a chat. If a chat doesn't exist, it creates a new chat and adds the users. It then saves the message and returns the chat data.-ChatView handles the retrieval of user's information, contacts, and all chats. Additionally, it allows for the creation of new chats by adding users and saving the chat.                                                                                                   |
| [middlewares.py](https://github.com/dubstep-warrior/connect/blob/main/project-backend/socialnetworkbackend/chat/middlewares.py)          | This code implements authentication middleware for a Django Channels application. It extracts a token from the query parameters, retrieves the user associated with that token, and adds it to the scope for further processing.                                                                                                                                                                                                                                                                                              |
| [apps.py](https://github.com/dubstep-warrior/connect/blob/main/project-backend/socialnetworkbackend/chat/apps.py)                        | The `ChatConfig` class is a Django application configuration that allows for customization of the "chat" app. It specifies the `default_auto_field` for model creation and sets the name of the app as "chat".                                                                                                                                                                                                                                                                                                                |

</details>

<details closed><summary>Overlay</summary>

| File                                                                                                                                              | Summary                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| ---                                                                                                                                               | ---                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| [overlay.service.spec.ts](https://github.com/dubstep-warrior/connect/blob/main/project-frontend/src/app/services/overlay/overlay.service.spec.ts) | This code tests the creation of the OverlayService by utilizing the Angular TestBed. It confirms that the service is successfully created and available by running the "should be created" test case. It ensures that the OverlayService is functional and functioning as intended.                                                                                                                                                                                                    |
| [overlay.service.ts](https://github.com/dubstep-warrior/connect/blob/main/project-frontend/src/app/services/overlay/overlay.service.ts)           | The code defines an Angular service that provides functionality for creating and managing custom overlays. It uses the Angular CDK Overlay module to handle the creation and positioning of the overlays, and includes methods for opening and configuring the overlays with custom data. The service also creates an injector for supplying dependencies to the overlay components. Overall, the code enables the creation and management of custom overlays in Angular applications. |

</details>

<details closed><summary>Feed</summary>

| File                                                                                                                                       | Summary                                                                                                                                                                                                                                                                                         |
| ---                                                                                                                                        | ---                                                                                                                                                                                                                                                                                             |
| [feed.service.ts](https://github.com/dubstep-warrior/connect/blob/main/project-frontend/src/app/services/feed/feed.service.ts)             | The FeedService class provides functionalities for adding posts, liking and disliking posts, adding comments, and refreshing the feed. It communicates with the ServerService class to perform these operations, and uses the OverlayService and Router classes for UI and navigation purposes. |
| [feed.service.spec.ts](https://github.com/dubstep-warrior/connect/blob/main/project-frontend/src/app/services/feed/feed.service.spec.ts)   | The code sets up a test environment for the FeedService in an Angular application. It checks whether the service is successfully created using the TestBed. This ensures that the service can be instantiated and used correctly in the application.                                            |
| [feed.component.scss](https://github.com/dubstep-warrior/connect/blob/main/project-frontend/src/app/shared/feed/feed.component.scss)       | This code is used to style a section element. It includes various styles for different nested elements like divs, interactions, actions, comment controls, and comment sections. The styles include layout properties like flexbox, as well as border radius, padding, and color properties.    |
| [feed.component.html](https://github.com/dubstep-warrior/connect/blob/main/project-frontend/src/app/shared/feed/feed.component.html)       | This code represents a feed component that displays posts with their descriptions, images, interactions, actions, and comments. It utilizes Angular concepts such as ngFor, ngIf, formGroup, and formControlName for dynamic rendering and user interactions.                                   |
| [feed.component.spec.ts](https://github.com/dubstep-warrior/connect/blob/main/project-frontend/src/app/shared/feed/feed.component.spec.ts) | This code is a unit test for the FeedComponent in an Angular application. It ensures that the component is created successfully, using the TestBed configuration to test component creation and fixture.detectChanges() to trigger change detection in the component.                           |
| [feed.component.ts](https://github.com/dubstep-warrior/connect/blob/main/project-frontend/src/app/shared/feed/feed.component.ts)           | This code initializes a component for displaying a feed of posts. It takes inputs for the feed array, current user details, and whether the current user is the owner. It handles functionality such as toggling comments, liking posts, and adding comments using a service.                   |

</details>

<details closed><summary>Login</summary>

| File                                                                                                                                   | Summary                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| ---                                                                                                                                    | ---                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| [login.component.scss](https://github.com/dubstep-warrior/connect/blob/main/project-frontend/src/app/login/login.component.scss)       | This code defines a CSS section that centers its contents and sets a specific height and width. It applies flexbox properties to the first child element, which has a column layout, rounded corners, and a border. Inside this element, there is an h1 heading and a form with input fields and a submit button. The button has hover effects.                                                                                                                      |
| [login.component.html](https://github.com/dubstep-warrior/connect/blob/main/project-frontend/src/app/login/login.component.html)       | The code is for a login feature. It includes a form where users enter their email and password. On submission, the form data is handled by the onSubmit() method. If there are any errors, they are displayed at the bottom. The "Login" button is disabled if the form is invalid.                                                                                                                                                                                  |
| [login.component.ts](https://github.com/dubstep-warrior/connect/blob/main/project-frontend/src/app/login/login.component.ts)           | The LoginComponent is responsible for handling user login functionality. It contains a form with username and password fields, which are validated using Angular's built-in Validators. The `onSubmit` method calls the AuthService's `login` method and passes the entered username and password for authentication. If there are any errors during the authentication process, they are caught and stored in the `err` variable, which can be displayed in the UI. |


</details>

<details closed><summary>Feed-page</summary>

| File                                                                                                                                               | Summary                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| ---                                                                                                                                                | ---                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| [feed-page.component.scss](https://github.com/dubstep-warrior/connect/blob/main/project-frontend/src/app/feed-page/feed-page.component.scss)       | The code defines mixins for cross-browser compatibility and provides styling rules for different sections on a webpage. The.add-post section has a flexbox layout, aligns items vertically, and styles its child elements with spacing and borders. The.homepage section uses the flex mixin, sets a height, and aligns items vertically, while the.feed section has centered margins and padding for a specific section of the webpage. |
| [feed-page.component.html](https://github.com/dubstep-warrior/connect/blob/main/project-frontend/src/app/feed-page/feed-page.component.html)       | This code is responsible for rendering the core functionalities of the homepage. It displays the add post section with the user's profile image and allows users to create new posts. It also displays the feed of posts and shows a welcome message if the user is not logged in.                                                                                                                                                       |
| [feed-page.component.ts](https://github.com/dubstep-warrior/connect/blob/main/project-frontend/src/app/feed-page/feed-page.component.ts)           | The code defines the "FeedPageComponent" class, which serves as the controller for the feed page in an Angular application. It handles authentication, retrieves user profile data, retrieves and displays the feed data, and allows users to add new posts to the feed. The code also inherits functionality from the "Base" class and utilizes services for authentication, feed data, and server communication.                       |
| [feed-page.component.spec.ts](https://github.com/dubstep-warrior/connect/blob/main/project-frontend/src/app/feed-page/feed-page.component.spec.ts) | This code is a test file for the FeedPageComponent in an Angular application. It sets up the testing environment, initializes the component, and verifies that it was successfully created.                                                                                                                                                                                                                                              |

</details>

<details closed><summary>Profile</summary>

| File                                                                                                                                         | Summary                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| ---                                                                                                                                          | ---                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| [profile.component.spec.ts](https://github.com/dubstep-warrior/connect/blob/main/project-frontend/src/app/profile/profile.component.spec.ts) | The code imports necessary components from Angular for testing. It defines a test suite for the ProfileComponent, creates an instance of the component, and tests whether it is created successfully.                                                                                                                                                                                                                                                                                                                                                           |
| [profile.component.html](https://github.com/dubstep-warrior/connect/blob/main/project-frontend/src/app/profile/profile.component.html)       | This code is responsible for rendering the user's profile details, such as their biography, connections, and status. It also allows for editing these details. Additionally, it displays the user's posts and provides the functionality to add new posts.                                                                                                                                                                                                                                                                                                      |
| [profile.component.ts](https://github.com/dubstep-warrior/connect/blob/main/project-frontend/src/app/profile/profile.component.ts)           | The code is for a profile component in an Angular application. It fetches user data, displays user profile information, and allows editing of the profile. It also fetches and displays a feed of posts associated with the user. The component interacts with various services, such as ServerService, FeedService, and OverlayService, and utilizes Angular forms and routing. An addPost() function allows users to add posts to their feed. The showConnections() function opens an overlay to display connections and allows navigation to other profiles. |
| [profile.component.scss](https://github.com/dubstep-warrior/connect/blob/main/project-frontend/src/app/profile/profile.component.scss)       | This code defines the styling for a section with two columns. The first column has multiple components with specific styles, including icons, connections, and forms. The second column includes an "add post" section with clickable elements. The code utilizes mixins and variables for modularity and maintains a responsive layout.                                                                                                                                                                                                                        |

</details>

<details closed><summary>Layout</summary>

| File                                                                                                                                                   | Summary                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| ---                                                                                                                                                    | ---                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| [layout.component.spec.ts](https://github.com/dubstep-warrior/connect/blob/main/project-frontend/src/app/registration/layout/layout.component.spec.ts) | This code is a unit test for the LayoutComponent of an Angular application. It verifies that the component can be created successfully by checking if the "component" variable is truthy. The code sets up the testing environment, creates an instance of the component, and triggers change detection.                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| [layout.component.ts](https://github.com/dubstep-warrior/connect/blob/main/project-frontend/src/app/registration/layout/layout.component.ts)           | The code is for a component called "LayoutComponent" in an Angular application. It extends a Base class and implements the OnInit interface. It imports the necessary modules and services, including FormControl, FormGroup, RegistrationService.In the constructor, it injects an instance of the RegistrationService.The component has an "errors" property to hold any error messages.During the ngOnInit lifecycle hook, it subscribes to the "errors" Observable of the RegistrationService and assigns any errors received to the "errors" property.It also defines a method called "parsedKey" that takes in a parameter and returns it as a string.Overall, the component sets up error handling functionality and provides a method for parsing keys. |
| [layout.component.scss](https://github.com/dubstep-warrior/connect/blob/main/project-frontend/src/app/registration/layout/layout.component.scss)       | This code defines styles for a section, containing a div with an h1 heading and a form. The form has input fields, buttons, and styling for layout using flexbox.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| [layout.component.html](https://github.com/dubstep-warrior/connect/blob/main/project-frontend/src/app/registration/layout/layout.component.html)       | This code snippet represents the registration functionality of an application. It includes a form for user registration, displays any errors encountered during the registration process, and presents them in a user-friendly manner.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| [layout.component.spec.ts](https://github.com/dubstep-warrior/connect/blob/main/project-frontend/src/app/connect/layout/layout.component.spec.ts)      | This code is a unit test for the LayoutComponent in an Angular application. It creates an instance of the component, checks if it was successfully created, and validates its existence.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| [layout.component.ts](https://github.com/dubstep-warrior/connect/blob/main/project-frontend/src/app/connect/layout/layout.component.ts)                | The code is an Angular component that represents a layout. It fetches data using a service, manipulates and displays the data based on user interaction, and allows adding and confirming connection requests. It also handles filtering and searching users based on the provided input.                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| [layout.component.scss](https://github.com/dubstep-warrior/connect/blob/main/project-frontend/src/app/connect/layout/layout.component.scss)            | This code defines a section containing two columns. The left column contains a list with customizable list items, while the right column holds various divs with nested divs and buttons. Customizable styling for margins, borders, backgrounds, and buttons is included.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| [layout.component.html](https://github.com/dubstep-warrior/connect/blob/main/project-frontend/src/app/connect/layout/layout.component.html)            | This code implements a user interface (UI) for a networking application. It allows users to view and interact with different sections, such as finding new connections, managing outgoing and incoming requests, and viewing current connections. Users can search for specific users and perform actions like adding or removing connections.                                                                                                                                                                                                                                                                                                                                                                                                                  |
| [layout.component.ts](https://github.com/dubstep-warrior/connect/blob/main/project-frontend/src/app/chat/layout/layout.component.ts)                   | The code is the implementation of the layout component in an Angular application for a chat feature. It manages the user, contacts, chats, and current chat. It also handles sending/receiving messages, creating groups, and opening overlays for contacts and draft messages.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| [layout.component.scss](https://github.com/dubstep-warrior/connect/blob/main/project-frontend/src/app/chat/layout/layout.component.scss)               | This code defines the styles for a chat component. It includes various nested selectors and mixins to control the appearance of different elements such as buttons, scrollbars, and input forms. The code is focused on achieving a responsive and visually appealing chat interface.                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| [layout.component.html](https://github.com/dubstep-warrior/connect/blob/main/project-frontend/src/app/chat/layout/layout.component.html)               | This code snippet is a customizable messaging interface that allows users to view and select chats, send messages, and manage contacts. It displays user avatars, chat names/handles, and statuses. The user can also create new groups and access their contact list.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |

</details>

<details closed><summary>Language</summary>

| File                                                                                                                                                         | Summary                                                                                                                                                                                                                                                                                                                      |
| ---                                                                                                                                                          | ---                                                                                                                                                                                                                                                                                                                          |
| [language.component.ts](https://github.com/dubstep-warrior/connect/blob/main/project-frontend/src/app/registration/language/language.component.ts)           | This code defines the LanguageComponent that handles language selection during user registration. It contains a form for language input, options for learning languages, and functions for submitting the registration and updating the learning language options based on the selected native language.                     |
| [language.component.spec.ts](https://github.com/dubstep-warrior/connect/blob/main/project-frontend/src/app/registration/language/language.component.spec.ts) | This code is a unit test for the LanguageComponent. It uses the Angular testing framework to set up the component, create an instance of it, and perform assertions to ensure that the component is created successfully. The purpose of this test is to verify that the LanguageComponent is functioning correctly.         |
| [language.component.html](https://github.com/dubstep-warrior/connect/blob/main/project-frontend/src/app/registration/language/language.component.html)       | This code snippet is a template for a form that collects information about a user's native language and the language they want to learn. It uses Angular's form functionalities to handle form validation and submission. The form includes dropdown menus for language selection and buttons for navigation and submission. |
| [language.component.scss](https://github.com/dubstep-warrior/connect/blob/main/project-frontend/src/app/registration/language/language.component.scss)       | The code provides core functionalities to efficiently manage and process data. It includes features like data validation, storage, retrieval, and manipulation, ensuring accuracy and performance. Additionally, it supports integration with various systems and provides robust error handling mechanisms.                 |

</details>

<details closed><summary>Basic-info</summary>

| File                                                                                                                                                               | Summary                                                                                                                                                                                                                                                                                                                                                                                     |
| ---                                                                                                                                                                | ---                                                                                                                                                                                                                                                                                                                                                                                         |
| [basic-info.component.ts](https://github.com/dubstep-warrior/connect/blob/main/project-frontend/src/app/registration/basic-info/basic-info.component.ts)           | This code is a component in an Angular application that imports required dependencies and uses a service to manage a form for collecting basic information during the registration process. The component retrieves the relevant form group from the service and assigns it to a local form variable.                                                                                       |
| [basic-info.component.spec.ts](https://github.com/dubstep-warrior/connect/blob/main/project-frontend/src/app/registration/basic-info/basic-info.component.spec.ts) | This code is a basic unit test for the BasicInfoComponent in an Angular application. It sets up the component, creates a test fixture, and checks if the component is created successfully.                                                                                                                                                                                                 |
| [basic-info.component.scss](https://github.com/dubstep-warrior/connect/blob/main/project-frontend/src/app/registration/basic-info/basic-info.component.scss)       | The code incorporates core functionalities for streamlined operations, including data processing, analysis, and visualization. It enables efficient data retrieval from multiple sources, implements advanced algorithms, and facilitates seamless integration with external systems. With robust error-handling and extensive documentation, it ensures reliable and scalable performance. |

</details>

<details closed><summary>Info</summary>

| File                                                                                                                                             | Summary                                                                                                                                                                                                                                                                                                                    |
| ---                                                                                                                                              | ---                                                                                                                                                                                                                                                                                                                        |
| [info.component.spec.ts](https://github.com/dubstep-warrior/connect/blob/main/project-frontend/src/app/registration/info/info.component.spec.ts) | This code is a unit test for the Angular component "InfoComponent". It imports the necessary testing components, sets up the component fixture, and creates an instance of "InfoComponent". It then tests whether the component is successfully created.                                                                   |
| [info.component.ts](https://github.com/dubstep-warrior/connect/blob/main/project-frontend/src/app/registration/info/info.component.ts)           | This code defines the InfoComponent, which handles form data and file uploads for registration information. It checks if the basic_info form is invalid and sets up the form group for info. The uploadFile method handles file uploads by creating a preview image and patching the form value with the selected file.    |
| [info.component.html](https://github.com/dubstep-warrior/connect/blob/main/project-frontend/src/app/registration/info/info.component.html)       | The code snippet represents a form with fields for handle, profile summary, and profile picture upload. The user can navigate back and forth while the handle input must be valid to proceed.                                                                                                                              |
| [info.component.scss](https://github.com/dubstep-warrior/connect/blob/main/project-frontend/src/app/registration/info/info.component.scss)       | The code provides the core functionality for an image upload component. It includes styling for a circular area where an image can be displayed, a label to trigger the image upload, and a hidden input field to handle the actual file selection. It also includes hover effects and a mat-icon for added interactivity. |

</details>

<details closed><summary>Shared</summary>

| File                                                                                                                      | Summary                                                                                                                                                                                                                                                                                                                                |
| ---                                                                                                                       | ---                                                                                                                                                                                                                                                                                                                                    |
| [shared.module.ts](https://github.com/dubstep-warrior/connect/blob/main/project-frontend/src/app/shared/shared.module.ts) | This code is creating a shared module in Angular that includes various components and dependencies such as menu, post, feed, image, and profile-tag. It also imports and exports various modules and components for use in other modules. The SharedModule aims to provide a centralized location for reusable components and modules. | 

</details>

<details closed><summary>Add-group</summary>

| File                                                                                                                                                      | Summary                                                                                                                                                                                                                                                                                                                                                                                        |
| ---                                                                                                                                                       | ---                                                                                                                                                                                                                                                                                                                                                                                            |
| [add-group.component.ts](https://github.com/dubstep-warrior/connect/blob/main/project-frontend/src/app/shared/add-group/add-group.component.ts)           | This code is for an Angular component that adds a group. It initializes the form, handles file uploads, and submits the form data. It uses a CustomOverlayRef class to communicate with its parent component. The image preview is displayed before submission. The code encapsulates the essential functionalities needed for adding a group.                                                 |
| [add-group.component.scss](https://github.com/dubstep-warrior/connect/blob/main/project-frontend/src/app/shared/add-group/add-group.component.scss)       | This code defines the styling of a form with an image upload functionality. It uses mixins and variables for modular and customizable styles. The form has a flex layout, aligns items vertically, and has a gap of 8px between them. The image upload section allows the user to click and select an image file, with hover and click visuals. The form also has an input field and a button. |
| [add-group.component.spec.ts](https://github.com/dubstep-warrior/connect/blob/main/project-frontend/src/app/shared/add-group/add-group.component.spec.ts) | This code is a test file for the AddGroupComponent. It sets up the testing environment, creates an instance of the component, and verifies that it is created successfully.                                                                                                                                                                                                                    |

</details>

<details closed><summary>Menu</summary>

| File                                                                                                                                       | Summary                                                                                                                                                                                                                                                                                                                |
| ---                                                                                                                                        | ---                                                                                                                                                                                                                                                                                                                    |
| [menu.component.ts](https://github.com/dubstep-warrior/connect/blob/main/project-frontend/src/app/shared/menu/menu.component.ts)           | The code is a menu component in an Angular application. It receives a user as an input and tracks the selected option based on the current route. It also has a logout function that uses the AuthService to log the user out.                                                                                         |
| [menu.component.spec.ts](https://github.com/dubstep-warrior/connect/blob/main/project-frontend/src/app/shared/menu/menu.component.spec.ts) | This code is a test suite for the MenuComponent in an Angular application. It creates an instance of the component and tests whether it is successfully created or not.                                                                                                                                                |
| [menu.component.scss](https://github.com/dubstep-warrior/connect/blob/main/project-frontend/src/app/shared/menu/menu.component.scss)       | This code defines the style for a section element on a webpage. It sets the maximum width, margin, and background color. It also defines the styling for nested div, ul, and li elements, including hover effects and a selected state.                                                                                |
| [menu.component.html](https://github.com/dubstep-warrior/connect/blob/main/project-frontend/src/app/shared/menu/menu.component.html)       | The code provides the core functionalities for navigation in a web application. It includes options for users to view feeds, connect with others, chat, view profiles, and perform login and registration operations. The selected option is highlighted for users, and logout functionality is available after login. |

</details>

<details closed><summary>Overlay-modal</summary>

| File                                                                                                                                                                  | Summary                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| ---                                                                                                                                                                   | ---                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| [overlay-modal.component.spec.ts](https://github.com/dubstep-warrior/connect/blob/main/project-frontend/src/app/shared/overlay-modal/overlay-modal.component.spec.ts) | The code is a test case for the'OverlayModalComponent'. It initializes the component, creates a test fixture, and checks if the component is successfully created.                                                                                                                                                                                                                                                                                                                                                        |
| [overlay-modal.component.html](https://github.com/dubstep-warrior/connect/blob/main/project-frontend/src/app/shared/overlay-modal/overlay-modal.component.html)       | This code snippet represents a section component with a dynamic button. It displays a title and a close button. The button is conditionally shown based on the availability of button data. The content is rendered through ngComponentOutlet.                                                                                                                                                                                                                                                                            |
| [overlay-modal.component.ts](https://github.com/dubstep-warrior/connect/blob/main/project-frontend/src/app/shared/overlay-modal/overlay-modal.component.ts)           | The code defines an Angular component for an overlay modal. It allows for the customization of the modal's content and options. It utilizes the Angular Material library for icons, expansion panels, and overlay functionality. It also includes a custom overlay reference class for managing the overlay.                                                                                                                                                                                                              |
| [overlay-modal.component.scss](https://github.com/dubstep-warrior/connect/blob/main/project-frontend/src/app/shared/overlay-modal/overlay-modal.component.scss)       | This code defines a section with various styles and functionalities. It has a white background and rounded corners. It adjusts its width and position on small screens. Inside the section, there is a header with a bottom border and a button class that defines a wider width. The first child of the section header has flex layout and an absolute-positioned material icon at the right. Lastly, there is a div with padding inside the section followed by another div that can be a button with a bottom padding. |

</details>

<details closed><summary>Image</summary>

| File                                                                                                                                          | Summary                                                                                                                                                                                                                                                                                                                       |
| ---                                                                                                                                           | ---                                                                                                                                                                                                                                                                                                                           |
| [image.component.scss](https://github.com/dubstep-warrior/connect/blob/main/project-frontend/src/app/shared/image/image.component.scss)       | This code provides styling for images with different classes such as profile, post, post-profile, post-display, and comment. The styling includes border radius, width, and height configurations specific to each class, ensuring consistent display across different elements in the UI.                                    |
| [image.component.spec.ts](https://github.com/dubstep-warrior/connect/blob/main/project-frontend/src/app/shared/image/image.component.spec.ts) | The code is for testing the creation of an Angular ImageComponent. It utilizes the TestBed framework to initialize the component and its dependencies. The code then checks if the component is successfully created using the expect statement.                                                                              |
| [image.component.ts](https://github.com/dubstep-warrior/connect/blob/main/project-frontend/src/app/shared/image/image.component.ts)           | This code is an Angular component for displaying images. It takes input parameters for the image path, source, alternate text, and configuration. The ngOnInit function appends the src parameter to the backend API's endpoint URL.                                                                                          |
| [image.component.html](https://github.com/dubstep-warrior/connect/blob/main/project-frontend/src/app/shared/image/image.component.html)       | This code snippet generates an HTML image tag with dynamic properties. It utilizes attributes such as "class", "src", and "alt". The "config" attribute specifies a CSS class, while the "path" and "src" attributes are used to set the source URL of the image. The "alt" attribute defines alternative text for the image. |

</details>

<details closed><summary>Contacts</summary>

| File                                                                                                                                                   | Summary                                                                                                                                                                                                                                                                                                                                                                                              |
| ---                                                                                                                                                    | ---                                                                                                                                                                                                                                                                                                                                                                                                  |
| [contacts.component.ts](https://github.com/dubstep-warrior/connect/blob/main/project-frontend/src/app/shared/contacts/contacts.component.ts)           | This code defines a `ContactsComponent` that manages a list of contacts. It receives data from an overlay component and handles two scenarios: adding users to a group or displaying connections. It maps the contacts to include a chat ID if applicable. It also provides functionality to select contacts and update a form with the selected users.                                              |
| [contacts.component.spec.ts](https://github.com/dubstep-warrior/connect/blob/main/project-frontend/src/app/shared/contacts/contacts.component.spec.ts) | This code is a test file for the ContactsComponent in an Angular project. It creates a test fixture, sets up the component, and verifies that it is successfully created.                                                                                                                                                                                                                            |
| [contacts.component.scss](https://github.com/dubstep-warrior/connect/blob/main/project-frontend/src/app/shared/contacts/contacts.component.scss)       | This code defines styles for a section containing a list of contacts. Each contact div has padding, cursor pointer, and a hover effect. The add-user div has a position, flex layout, and padding. The second-to-last div has additional padding. The last div has a flex layout, position, and padding, and contains a button with styles for borderRadius, padding, font weight, and hover effect. |

</details>

<details closed><summary>Profile-tag</summary>

| File                                                                                                                                                            | Summary                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| ---                                                                                                                                                             | ---                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| [profile-tag.component.html](https://github.com/dubstep-warrior/connect/blob/main/project-frontend/src/app/shared/profile-tag/profile-tag.component.html)       | This code defines the layout and functionality for user profiles. It displays user information such as profile picture, handle, language details, and status. It also includes options for editing the profile details if the user is the current user. Additionally, it shows the date created for user posts.                                                                                                                                                                                               |
| [profile-tag.component.scss](https://github.com/dubstep-warrior/connect/blob/main/project-frontend/src/app/shared/profile-tag/profile-tag.component.scss)       | This code defines styles for a profile component. It uses flexbox to display elements, applies styles to specific child elements, and adjusts font sizes. It also includes mixins for buttons and sets styles for an edit section. It allows for flexible and customizable profiles.                                                                                                                                                                                                                          |
| [profile-tag.component.spec.ts](https://github.com/dubstep-warrior/connect/blob/main/project-frontend/src/app/shared/profile-tag/profile-tag.component.spec.ts) | This code is for testing the profile-tag component in an Angular application. It establishes a testing environment, creates an instance of the component, and checks whether the component is created successfully.                                                                                                                                                                                                                                                                                           |
| [profile-tag.component.ts](https://github.com/dubstep-warrior/connect/blob/main/project-frontend/src/app/shared/profile-tag/profile-tag.component.ts)           | The code is a component in an Angular application that controls the display and editing of user profile details. It accepts inputs such as the user's profile information, post details, and flags indicating the current status and if the logged-in user is the current user. It also has an output event that triggers when the edit mode changes. The component allows users to switch between edit and view modes, and emits the edit mode status and a submit flag when the profile details are edited. |

</details>

<details closed><summary>Post</summary>

| File                                                                                                                                       | Summary                                                                                                                                                                                                                                                                                                                                                                                                               |
| ---                                                                                                                                        | ---                                                                                                                                                                                                                                                                                                                                                                                                                   |
| [post.component.ts](https://github.com/dubstep-warrior/connect/blob/main/project-frontend/src/app/shared/post/post.component.ts)           | The code is for a PostComponent which handles post-related functionality. It initializes data, form, and preview image. It uploads a file, sets the preview image, and updates the form. It also has a resolve method to close an overlay when resolved.                                                                                                                                                              |
| [post.component.html](https://github.com/dubstep-warrior/connect/blob/main/project-frontend/src/app/shared/post/post.component.html)       | This code snippet is a form that allows users to share about their day through a textarea. It also has an image upload functionality where users can select an image file. The selected image is previewed and users can post their day by clicking the "Post" button.                                                                                                                                                |
| [post.component.scss](https://github.com/dubstep-warrior/connect/blob/main/project-frontend/src/app/shared/post/post.component.scss)       | This code defines styles for a section containing a form. It contains styles for a textarea, an image upload button and a submit button. The styles include margin, width, height, border, padding, cursor, and background colors, among others.                                                                                                                                                                      |
| [admin.py](https://github.com/dubstep-warrior/connect/blob/main/project-backend/socialnetworkbackend/post/admin.py)                        | This code registers the models Post and Like with the Django admin interface. It also configures the display of fields for each model in the admin panel. The Post model is displayed with the fields user, description, image, and date_created. The Like model is displayed with the fields id, post_id, and liked_by.                                                                                              |
| [models.py](https://github.com/dubstep-warrior/connect/blob/main/project-backend/socialnetworkbackend/post/models.py)                      | Exception:                                                                                                                                                                                                                                                                                                                                                                                                            |
| [tests.py](https://github.com/dubstep-warrior/connect/blob/main/project-backend/socialnetworkbackend/post/tests.py)                        | The code includes test cases for three functionalities:1. PostView: Tests GET request to retrieve posts and POST request to create a new post.2. LikePost: Tests POST request to like a post and DELETE request to unlike a post.3. CommentPost: Tests POST request to comment on a post.The tests ensure that the APIs return the expected responses and manipulate database entries correctly.                      |
| [urls.py](https://github.com/dubstep-warrior/connect/blob/main/project-backend/socialnetworkbackend/post/urls.py)                          | This code sets up the URL routing for various API endpoints related to posts. It includes routes for creating and retrieving posts, liking posts, and commenting on posts. The "format_suffix_patterns" function allows for automatic addition of format suffixes to the URLs.                                                                                                                                        |
| [model_factories.py](https://github.com/dubstep-warrior/connect/blob/main/project-backend/socialnetworkbackend/post/model_factories.py)    | This code provides factory classes to generate fake objects for testing purposes. It includes factories for creating Post, Like, and Comment objects with pre-defined attributes such as user, description, image, liked_by, and commented_by. These factories use the Factory Boy library in conjunction with Django's models to simplify the creation of test data.                                                 |
| [serializers.py](https://github.com/dubstep-warrior/connect/blob/main/project-backend/socialnetworkbackend/post/serializers.py)            | The code includes three serializers: CommentsSerializer, LikesSerializer, and PostSerializer. CommentsSerializer retrieves the profile information of the user who made a comment. LikesSerializer retrieves the information about users who liked a post. PostSerializer retrieves the profile, likes, and comments for a post. These serializers are used to convert model data into JSON format for API responses. |
| [views.py](https://github.com/dubstep-warrior/connect/blob/main/project-backend/socialnetworkbackend/post/views.py)                        | This code consists of three APIViews: PostView, LikePost, and CommentPost. PostView handles GET and POST requests to retrieve and create posts. LikePost handles POST and DELETE requests for liking and unliking posts. CommentPost handles POST requests to add comments to posts. These APIViews use serializers to validate and process data, and they require authentication.                                    |

</details>

<details closed><summary>Chatlog</summary>

| File                                                                                                                                                | Summary                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| ---                                                                                                                                                 | ---                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| [chatlog.component.spec.ts](https://github.com/dubstep-warrior/connect/blob/main/project-frontend/src/app/shared/chatlog/chatlog.component.spec.ts) | This code conducts unit testing for the ChatlogComponent in an Angular application. It creates a testing environment, initializes and detects changes in the component, and verifies its creation.                                                                                                                                                                                                                                                                                                                   |
| [chatlog.component.html](https://github.com/dubstep-warrior/connect/blob/main/project-frontend/src/app/shared/chatlog/chatlog.component.html)       | This code snippet is a template that displays messages in a chat log. It iterates over the messages in the current chat and renders each message along with the sender's profile image, handle, message content, optional image, and creation date.                                                                                                                                                                                                                                                                  |
| [chatlog.component.scss](https://github.com/dubstep-warrior/connect/blob/main/project-frontend/src/app/shared/chatlog/chatlog.component.scss)       | This code defines the visual styles for a chat log component. It includes mixins and variables to facilitate modular code. The chat log has a light grey background, scrollable content, and padding. Chat messages are structured with sender handles, message content, and optional images. Sent messages have a blue background color, and the text is white. Multiple messages are arranged in a flexbox layout with appropriate spacing and alignment.                                                          |
| [chatlog.component.ts](https://github.com/dubstep-warrior/connect/blob/main/project-frontend/src/app/shared/chatlog/chatlog.component.ts)           | This code is a Angular component called ChatlogComponent. It has two input properties: currentChat and user, both used to display information in the chat log. It implements the AfterViewChecked lifecycle hook and uses ViewChild to access the chat log element in the template. The ngAfterViewChecked method is used to scroll the chat log to the bottom whenever there are new messages. Overall, this component handles updating and scrolling the chat log in response to changes in the current chat data. |

</details>

<details closed><summary>Draft-message</summary>

| File                                                                                                                                                                  | Summary                                                                                                                                                                                                                                                                                                                 |
| ---                                                                                                                                                                   | ---                                                                                                                                                                                                                                                                                                                     |
| [draft-message.component.ts](https://github.com/dubstep-warrior/connect/blob/main/project-frontend/src/app/shared/draft-message/draft-message.component.ts)           | This code defines a DraftMessageComponent that handles form submission and file uploads. It receives data and form options via a custom overlay reference, creates a FormGroup for the form, and allows users to upload and preview images. The resolve() method is used to close the overlay and return the form data. |
| [draft-message.component.html](https://github.com/dubstep-warrior/connect/blob/main/project-frontend/src/app/shared/draft-message/draft-message.component.html)       | This code segment represents a form with a textarea input to type a message. There is an image preview if available. Clicking the "Send" button triggers a resolve function.                                                                                                                                            |
| [draft-message.component.scss](https://github.com/dubstep-warrior/connect/blob/main/project-frontend/src/app/shared/draft-message/draft-message.component.scss)       | HTTPStatus Exception: 503                                                                                                                                                                                                                                                                                               |
| [draft-message.component.spec.ts](https://github.com/dubstep-warrior/connect/blob/main/project-frontend/src/app/shared/draft-message/draft-message.component.spec.ts) | This code is for testing the functionality of the DraftMessageComponent in an Angular application. It ensures that the component is created successfully by checking its existence. The TestBed is set up, the component is created and rendered, and a test is performed to validate its creation.                     |

</details>

<details closed><summary>Interface</summary>

| File                                                                                                            | Summary                                                                                                                                                                                                                                                                                             |
| ---                                                                                                             | ---                                                                                                                                                                                                                                                                                                 |
| [user.ts](https://github.com/dubstep-warrior/connect/blob/main/project-frontend/src/app/core/interface/user.ts) | This code defines an interface for a User object. It includes properties such as id, email, handle, description, profile_img, connections, learning, native, status, isSelected, and chat_id. These properties represent various attributes and associations of the user in a software application. |

</details>

<details closed><summary>Directives</summary>

| File                                                                                                                                 | Summary                                                                                                                                                                                                                                                                                                                                |
| ---                                                                                                                                  | ---                                                                                                                                                                                                                                                                                                                                    |
| [base.directive.ts](https://github.com/dubstep-warrior/connect/blob/main/project-frontend/src/app/core/directives/base.directive.ts) | The provided code defines a base class in Angular that includes functionality for safely unsubscribing from observables. It provides a "takeUntilDestroy" method that creates a new subject and returns an operator that subscribes until the subject emits. The base class also handles the teardown of the subject upon destruction. |

</details>

<details closed><summary>Date-as-ago</summary>

| File                                                                                                                                                      | Summary                                                                                                                                                                                                                                                                                                                                                                                                                                |
| ---                                                                                                                                                       | ---                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| [date-as-ago.pipe.spec.ts](https://github.com/dubstep-warrior/connect/blob/main/project-frontend/src/app/core/pipes/date-as-ago/date-as-ago.pipe.spec.ts) | This code tests the functionality of the DateAsAgoPipe pipe by checking if it can instantiate an instance successfully.                                                                                                                                                                                                                                                                                                                |
| [date-as-ago.pipe.ts](https://github.com/dubstep-warrior/connect/blob/main/project-frontend/src/app/core/pipes/date-as-ago/date-as-ago.pipe.ts)           | The DateAsAgoPipe is an Angular pipe that allows for the transformation of a given date value into a human-readable format representing its age relative to the current time. It provides a concise output such as'just now','a moment ago', or the approximate number of seconds, minutes, hours, days, months, or years since the provided date value. This pipe is useful for displaying timestamps in a more user-friendly manner. |

</details>
 

<details closed><summary>Interceptor</summary>

| File                                                                                                                                                | Summary                                                                                                                                                                                                                                                                                                                |
| ---                                                                                                                                                 | ---                                                                                                                                                                                                                                                                                                                    |
| [auth.interceptor.spec.ts](https://github.com/dubstep-warrior/connect/blob/main/project-frontend/src/app/core/interceptor/auth.interceptor.spec.ts) | This code is a unit test for the AuthInterceptor class in Angular. It checks if the interceptor can be successfully created and injected by the TestBed. It ensures that the AuthInterceptor is implemented correctly and can be used in intercepting HTTP requests for authentication purposes.                       |
| [auth.interceptor.ts](https://github.com/dubstep-warrior/connect/blob/main/project-frontend/src/app/core/interceptor/auth.interceptor.ts)           | The provided code is an Angular HTTP interceptor that adds an Authorization header to outgoing HTTP requests. It checks if there is a current user in local storage, and if so, it modifies the request headers by adding an "Authorization" header with the user's token. Otherwise, it passes the request unchanged. |

</details>
 

<details closed><summary>Socialnetworkbackend</summary>

| File                                                                                                                                      | Summary                                                                                                                                                                                                                                                                                                                          |
| ---                                                                                                                                       | ---                                                                                                                                                                                                                                                                                                                              |

| [asgi.py](https://github.com/dubstep-warrior/connect/blob/main/project-backend/socialnetworkbackend/socialnetworkbackend/asgi.py)         | This code is the ASGI (Asynchronous Server Gateway Interface) configuration file for the socialnetworkbackend project. It sets up the Django application and exposes it as the ASGI callable module-level variable named "application". This file is used for deployment to handle asynchronous requests.                        |
| [urls.py](https://github.com/dubstep-warrior/connect/blob/main/project-backend/socialnetworkbackend/socialnetworkbackend/urls.py)         | The code includes URL configurations for different modules such as account management, authentication, post feed, connections, and chat. It also handles static file serving in DEBUG mode.                                                                                                                                      |
| [routing.py](https://github.com/dubstep-warrior/connect/blob/main/project-backend/socialnetworkbackend/socialnetworkbackend/routing.py)   | This code sets up a protocol router for handling WebSocket connections. It applies token-based authentication and host origin validation before routing requests to the appropriate WebSocket URL patterns defined in the chat.routing module. The router is part of a larger application for implementing a chat functionality. |
| [settings.py](https://github.com/dubstep-warrior/connect/blob/main/project-backend/socialnetworkbackend/socialnetworkbackend/settings.py) | Exception:                                                                                                                                                                                                                                                                                                                       |
| [wsgi.py](https://github.com/dubstep-warrior/connect/blob/main/project-backend/socialnetworkbackend/socialnetworkbackend/wsgi.py)         | This code is the WSGI config file for the Social Network Backend project. It sets up the WSGI callable and Django settings module for deployment.                                                                                                                                                                                |

</details>

<details closed><summary>Base_classes</summary>

| File                                                                                                                                                        | Summary                                                                                                                                                                                                                                                                                               |
| ---                                                                                                                                                         | ---                                                                                                                                                                                                                                                                                                   |
| [base_serializer_class.py](https://github.com/dubstep-warrior/connect/blob/main/project-backend/socialnetworkbackend/base_classes/base_serializer_class.py) | The code is a custom serializer class that allows dynamic field selection. It allows for specifying a subset of fields to be serialized (output) by passing a'fields' parameter during instantiation. Any fields not included in the'fields' parameter will be omitted from the serialization output. |

</details>

<details closed><summary>Account</summary>

| File                                                                                                                                       | Summary                                                                                                                                                                                                                                                                                                                                                           |
| ---                                                                                                                                        | ---                                                                                                                                                                                                                                                                                                                                                               |
| [admin.py](https://github.com/dubstep-warrior/connect/blob/main/project-backend/socialnetworkbackend/account/admin.py)                     | This code registers the AppUser model with Django's admin interface. It specifies the fields to display in the admin list and configures the admin site accordingly.                                                                                                                                                                                              |
| [models.py](https://github.com/dubstep-warrior/connect/blob/main/project-backend/socialnetworkbackend/account/models.py)                   | This code defines a Django model called AppUser that extends Django's built-in User model. It adds additional fields like email, description, profile image, native language, learning language, status, and connections. The username is also required.                                                                                                          |
| [tests.py](https://github.com/dubstep-warrior/connect/blob/main/project-backend/socialnetworkbackend/account/tests.py)                     | This code tests the functionalities of two API endpoints: ProfileAPI and RegisterAPI. The ProfileAPI tests GET and PUT requests for retrieving and updating user profiles, and the RegisterAPI tests POST request for user registration. The tests use mocked data and validate the responses and database updates.                                               |
| [urls.py](https://github.com/dubstep-warrior/connect/blob/main/project-backend/socialnetworkbackend/account/urls.py)                       | This code defines URL patterns for the account module in a Django project. It includes endpoints for displaying a user's profile, authenticating users, and registering new users. The URLs have suffix patterns added for format-specific responses.                                                                                                             |
| [model_factories.py](https://github.com/dubstep-warrior/connect/blob/main/project-backend/socialnetworkbackend/account/model_factories.py) | This code defines a UserFactory class that generates fake user objects for testing purposes. It sets attributes such as email, description, native language, learning language, username, status, and password using the Factory Boy library. These fake user objects are instances of the AppUser model in Django.                                               |
| [serializers.py](https://github.com/dubstep-warrior/connect/blob/main/project-backend/socialnetworkbackend/account/serializers.py)         | This code includes two serializers: "AppUserSerializer" and "AppUserProfileSerializer". "AppUserSerializer" is used for creating and updating AppUser objects, with password hashing and handle uniqueness validation."AppUserProfileSerializer" extends DynamicFieldsModelSerializer and includes additional fields like "connections".                          |
| [views.py](https://github.com/dubstep-warrior/connect/blob/main/project-backend/socialnetworkbackend/account/views.py)                     | This code consists of several views and serializers for handling user registration, authentication, and profile management. It includes functionalities for retrieving user profiles and posts, updating user profiles, obtaining authentication tokens, and registering new users. The code utilizes Django REST Framework to handle API requests and responses. |
| [apps.py](https://github.com/dubstep-warrior/connect/blob/main/project-backend/socialnetworkbackend/account/apps.py)                       | This code is a configuration class for a Django app called Account. It sets the default database field type for auto-generated primary keys and defines the name of the app.                                                                                                                                                                                      |

</details> 

---

## 🚀 Getting Started

### ✔️ Prerequisites

Before you begin, ensure that you have the following prerequisites installed:
> - `ℹ️ Node`
> - `ℹ️ Node Package Manager`
> - `ℹ️ Python`
> - `ℹ️ Preferred Installer Program (PIP)`
> - `ℹ️ Redis (Recommended to install on WSL for Windows users)`

### 📦 Installation 

Clone the connect repository:
```sh
git clone https://github.com/dubstep-warrior/connect
```  

#### 🎮 Frontend

1. Change to the project directory:
```sh
cd connect/project-frontend
```

2. Install the dependencies:
```sh
npm install
```

3. Run application
```sh
npm start
```

#### 🧪 Backend

1. Change to the project directory:
```sh
cd connect/project-backend
```

2. Create a virtual environment
```sh
py -m venv env
```

3. Activate the virtual environment
```sh
env\Scripts\activate
```

4. Install dependencies
```sh
pip install -r requirements.txt
```

5. Change to the application directory
```sh
cd socialnetworkbackend
```

6. Start the server application
```sh
py manage.py runserver
```

7. Run the Redis database (On WSL for windows users)
```bash
redis-server
```
---


## 🗺 Roadmap

> - [ ] `ℹ️  Task 1: Implement mobile responsiveness for frontend`
> - [ ] `ℹ️  Task 2: Implement translation feature` 


---

## 🤝 Contributing

Contributions are always welcome! Please follow these steps:
1. Fork the project repository. This creates a copy of the project on your account that you can modify without affecting the original project.
2. Clone the forked repository to your local machine using a Git client like Git or GitHub Desktop.
3. Create a new branch with a descriptive name (e.g., `new-feature-branch` or `bugfix-issue-123`).
```sh
git checkout -b new-feature-branch
```
4. Make changes to the project's codebase.
5. Commit your changes to your local branch with a clear commit message that explains the changes you've made.
```sh
git commit -m 'Implemented new feature.'
```
6. Push your changes to your forked repository on GitHub using the following command
```sh
git push origin new-feature-branch
```
7. Create a new pull request to the original project repository. In the pull request, describe the changes you've made and why they're necessary.
The project maintainers will review your changes and provide feedback or merge them into the main branch.

--- 
