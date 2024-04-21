🔅Summary
- This is a simple Task Management website, for daily management of tasks.
✔ It has a login and Registration Page.
✨ The user can register by providing their name, mobile, email and password.
🔑 After registration the user will be redirected to login page for logging in.
✔ Once logged in, there will be home page with Start Tracking button , upon clicking it will redirect it to his Dashboard.
 📌User can add Category wise tasks.
🌐 Each task have title, due date and category.
✔ User can also track there tasks and mark it completed

🔅API endpoints and their usage

✔route.post('/api/signup', controller.signup);
 - To Create/Register a user.
✔route.post('/api/login',controller.login);
 - To login the user.
✔route.get('/dashboard/:id');
 - For User Dashboard.
✔route.post('/api/addcategory/:id',controller.addCategory);
 - To Add Category.
✔route.post('/api/deletecategory/:id',controller.delete_category);
 - To Delete Category.
✔route.post('/api/addtask/:id',controller.add_Task);
 - For Adding Tasks.
✔route.post('/api/edittask/:id',controller.edit_Task);
 - For Edit Tasks.
✔route.post('/api/deletetask/:id',controller.delete_Task);
 - For Deleting Tasks.
✔route.post('/api/tasks/:id/complete',controller.markCompleted); 
 - To Mark Task As Completed. 

🔅Instructions to set up and run the application locally
 
 - Just need 'npm' in the system and in the project directory "npm start" will make it run.
 - Check the logs for the localhost port and database connection confirmation.
🐱‍🏍Technologies Used
: HTML, CSS, JavaScipt, Node Js, Express Js, MongoDB and EJS.
🌟Live Demo Link 
: https://clone-task-manager.onrender.com/
🔌 Github Link
: https://github.com/rick825/Clone-Task-Manager
🎬YouTube Link
: https://www.youtube.com/watch?v=hpuD3-ctwXQ


👤Author: Akash Kumar Das
