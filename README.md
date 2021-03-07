# Hi! Welcome to the GitHub Repository Search App! 👋🏾

With this application, you can search the GitHub repository API and it will be placed in a table for viewing.
Once populated with data, you can click on the Column Header to sort the data. You can also select an item from dropdown to filter the data as well!
Within the table, you can click on the Repository ID and you will be directed to the Details page to view additional information regarding the Repository.
Once you go back to the Search Page, you can enter a search value!

Rumor has it, the 404 Error page is pretty sweet 😉

## Available Scripts 🏃🏾‍♀️

### `npm install`

Just to make sure you have all the things necessary for this application, let's go ahead and do an install!

### `npm start`

Let's run this bad boy! Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

This script will launch the test runner in the interactive watch mode.\
As of right now, there aren't any tests but once added, you can use this script to run them.

## Current Backlog for this Application ✍🏾

As an eager individual, there are a few functionalities I would love to add to this application - here is what I'm thinking so far!

### ⭐️  Back button using useHistory() from react-router

Currently, when a user hits their back button, the application would refresh and previous data is gone. It would be cool to have an app back button - especially on the Details Page!

### ⭐️  Checking for empty strings and not displaying them in the filter dropdown

Right now, when the API returns the GitHub data, if a GitHub repository doesn't have a description filled out, then the filter still picks up on the empty string when it should be ignored.

### ⭐️  Redesign Search Page

I'm not 100% sold on the current Search Page and I had really big ideas that included adding some more color, some more style, some more ✨pop✨

### ⭐️  Include pagination for the Table

The Table should allow the user to add more data to the Table than what is received during the first API fetch. 

### ⭐️  Redevelop filtering and sorting functionality on Table

I'm not super into the filter dropdown or having to click the Column Header to sort - the sorting functionality especially isn't intuitive. So I would like to add like a checkbox based filtering function and a button for sorting function (like one would use while shopping!)

### ⭐️  Add cool automatic scrolling functionality to Search Page

It would be cool to have the viewport on just the input field as its initial view when hitting the web page, and then as soon as input has been received, drop down to the populated table - rather than manually scrolling.
