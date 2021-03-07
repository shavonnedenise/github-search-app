# Hi! Welcome to the GitHub Repository Search App! 👋🏾

With this application, you can search the GitHub repository API and the retrieved data will be placed in a table for viewing.
Once populated, you can click on the Column Header to sort the data. You can also select an item from the dropdown to filter data as well!
Within the table, you can click on the Repository ID and you will be directed to the Details page to view additional information regarding the Repository.
Once you go back to the Search Page, you can enter a new search value!

Rumor has it, the 404 Error page is pretty sweet 😉

## Available Scripts 🏃🏾‍♀️

### `npm install`

Just to make sure you have all the things necessary for this application, let's go ahead and do an install!

### `npm start`

Let's run this bad boy! Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

This script will launch the test runner in the interactive watch mode.
Currently there aren't any tests, but once added, you can use this script to run them!

## Current Backlog for this Application ✍🏾

As an eager individual, there are a few functionalities I would love to add to this application - here is what I'm thinking so far!

### ⭐️  Back button using useHistory() from react-router

Currently, when a user hits their back button, the application refreshes. It would be cool to have an app back button - especially on the Details Page!

### ⭐️  Checking for empty strings and not displaying them in the filter dropdown

Right now, when the API returns the data, if a GitHub repository doesn't have a description, then the filter picks up on the empty string when it should be ignored.

### ⭐️  Redesign Search Page

I would love to redesign the Search Page which would include adding more color, more style, more ✨pop✨

### ⭐️  Include pagination for the Table

The Table should allow the user to add more data than what is received during the first API fetch. 

### ⭐️  Redevelop filtering and sorting functionality on Table

I would like to add a checkbox based filtering function and a button based sorting function to the application (like one would use while online shopping!)

### ⭐️  Add cool automatic scrolling functionality to Search Page

It would be cool to have the viewport on the input field for its initial rendering. Then, as soon as input has been received, the web page drops down to the populated table - rather than having the user manually scroll.
