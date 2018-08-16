### Assumptions
When looking at the problem I knew I wanted to have a list that was easily scannable by the user. Then I wanted to add a call to action so the user could enter the details view. In this view we can show more information, so I wanted to be sure to show all of the details and figure out some way to showcase all of the images. After this I added the button to reserve the vehicle, and wanted to show a nice and clean success screen.

I tried out using create-react-native-app and the Expo iOS app for development, and for the most part it went smoothly. I really wanted to attempt to get redux into the app and try it out with React Native, as well as React Router. I also was able to find a carousel plugin that after a bit of fiddling around was able to get it working.

### Production Ready
This app needs a lot of work to be production ready.

1. There needs to be some kind of user auth/accounts, so the user information can be able to reserve a vehicle.
2. It would need to be heavily tested in different mobile environments to be sure to find any bugs or glitches.
3. It needs all of the required stuff for the app store to pass Apple's requirements, as well as prepared for the Android marketplace.
4. There should be a way for the user to review their order afterwards, so they can see the confirmation number, order date, and other details (and previous reservations).
5. With 100 items being fetched and potentially more, we could explore ways to infinite scroll, but even better would be to add sorting and filtering to the list to help the user refine their results.
6. Reserving a vehicle should have some kind of dates surrounding it. Whether the list is filtered by date and/or the date is entered at time of reservation.
7. 4. I'd also be inclined to have more reusable components, as well as a few more fine tuned reducers in redux.
8. The design could use more refinement. Adding consistent spacings and font sizes via reusable components would be really helpful for a consistent look and feel
9. I've done a lot with desktop application WCAG requirements, so figuring out any accessibilty issues would be on the list.
10. Better error handling/logging would be nice too
11. Thinking about translations and locales would be a good addition for non English speakers or those who prefer another language
12. Animations would make the app more fun to use

# React Native - Vehicle Browser

> Fork to another git repo.

## Problem

Create a React Native frontend with a Node (micro) backend that allows a customer to browse a list of vehicle, see vehicle details, and submit an order.

A barebones service has been provided by running `npm start` within ./server. Look at its code to understand the API you will be consuming.

### Required Views

1. Vehicle List
2. Vehicle Details
3. Success Page

### Guidelines

1. Check into Git periodically
2. Use whichever libraries you like
3. Take 1-2 hours on it
4. Document your assumptions, describe what else would need to be done to make it "production-ready."
5. Send us a link to your git repo.

### What We Are Looking For

1. Coding style
2. Knowledge of React Native, JS or aptitude to quickly pick it up and contribute on a React Native project.
