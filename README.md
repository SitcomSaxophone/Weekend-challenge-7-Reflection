# Redux Feedback Loop

> **PLEASE COMMENT YOUR CODE.** Do not clone this repository. Instead, download the zip, extract the contents, `git init`, `git add .`, `git commit -m "initial commit - base project"` and add your remote. Please do this before you leave for the day.

"And my last reminder of the day, which is my last reminder of every day, is...?" - Luke

### SETUP

Create your database and tables using the provided `data.sql` file. Start the server.

```

This App allows the user to:
- Upon arriving at the 'Home' page, provides a link to start the feedback submission process.
- On the second page the user is prompted to give a value 1-5 about how they are feeling that day. Upon submission the user is sent to page three.
- On the third page the user is prompted to give a value 1-5 about how well they understood the day's material. Upon submission the user is sent to page four.
- On the fourth page the user is prompted to give a value 1-5 about how much support they feel they received from staff that day. Upon submission the user 
is sent to the fifth page.
On the fifth page the user is prompted to leave any comments that they want. They can leave it blank if they so choose. Upon submission all of the prior information submitted is posted to the database. The user is also taken to the
'Success' page, letting them know that their feedback was successfully submitted.
- On the 'Success' page the user is given a link if they want to leave any more feedback. This brings them to back to the starting feedback input page.
- On the 'Admin' page the administrator can view all of the feedback that has been submitted by users. They also have the option to delete from the database any outdated or unimportant information.

