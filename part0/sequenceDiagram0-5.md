```mermaid
sequenceDiagram
    User->>Browser: Accesses https://studies.cs.helsinki.fi/exampleapp/notes through the address bar
    Browser->>Server: The browser fetches HTML code from the server - GET HTML
    Server->>Browser: Return HTML code
    Browser->>Server: HTML links trigger browser to fetch stylesheet - GET main.css
    Server->>Browser: Return CSS file main.css
    Browser->>Server: HTML links trigger browser to fetch javaScript - GET main.js
    Server->>Browser: Return JavaScript main.js
    Browser->>Browser: Browser runs JavaScript code 
    Browser->>Server: Code issues HTTP GET request JSON data - GET data.json
    Server->>Browser: Return data.json
    Browser->>Browser: After fetching data, browser triggers event handler to display notes
    User->>Browser: User writes new note and clicks on Save
    Browser->>Server: Code issues HTTP POST request to new_note_spa
    Browser->>Server: Content-Type header informs server data is represented in JSON format
    Server->>Server: Creates a new note object, adding to array notes
    Server->>Browser: Server responds with HTTP status code 201
    Server->>Browser: Server doesn't request redirection, browser stays on same page, no more HTTP requests
```
