# ProductRegister.io
A website designed to help with product registration and organization

# Usage
On the home page you will see a login screen. If you already have an account, just enter your login and password in the upper fields and click on signIn. Otherwise, you have two options:

1 - Click on the signUp button at the end of the header: It will take you to the registration screen;

2 - Enter a login in the lower text field and click on the register button: This action will check if the intended login is valid before taking the user to the login screen.

Once registered, you will be taken back to the signIn screen, where you can use the data you have just submitted to login :)

Once logged in, you will have access to a very simple and intuitive screen.
In the Header you have the options to edit some of your account information, register a new item or log out of the application.

Once you have created an item, it will be listed in the item list just below the Header.
Hovering the mouse over one of these items will bring up options to edit the item or delete it.

By accessing the link https://docs.google.com/spreadsheets/d/14kdDnUvlZFsxKvfQr_yW5r_97nZO-8WPYqORteaqiVI/edit#gid=0 you have access to all user generated records.
 
And that's it, a simple application developed in 8 days.


# Attention to the notes!!!
Some inconsistencies can be found by the user, they are:
1) Excessive loading time: For these cases, restart the page. If it happens at the time of creation of the crota, or deletion of some item, for example, rest assured, the action was probably saved and will not be lost on reload.

2) Creation of two equal items: In the tests I've been doing in post-submission (to see if the first register date is not modified), I noticed an error in trying to create two equal items. In the backend I dealt with this use case, returning the message "Item already registered", but I ended up forgetting to deal with it in the frontend. In fairness to the deadline, I will not correct it until the application is reviewed.

3) Modal overlay: If you walk through the app touching all over, very likely you will come across some modal that was opened but stayed under another. I know, this is boring, but it's already being investigated.

4) Item update: To update an item, unfortunately, you will have to rewrite all fields. This behavior is being caused by managing the fields in an uncontrolled way, which I intend to correct in future versions.


5) Filters tab: Something that I thought is very useful for this type of application, but unfortunately, I haven't had time to implement it so far.