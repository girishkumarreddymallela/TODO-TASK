# TODO List Application

This is a simple TODO list application built with React. It allows you to manage your tasks efficiently, thereby optimizing your work process and time management.

# How to run

STEP-1: Navigate to the GitHub repository page and click on the Code button. Select Download ZIP from the dropdown menu. This will download a ZIP file of the entire project to your local machine.

STEP-2: Extract the Files: Locate the downloaded ZIP file on your computer. Right-click on the file and select Extract All... or a similar option. This will extract all the files from the ZIP file into a new folder.

STEP-3: Open the Project in an IDE: Open your preferred Integrated Development Environment (IDE), such as Visual Studio Code. From the File menu, select Open Folder... and navigate to the extracted folder. Select the folder and click Open.

STEP-4: Navigate to the Project Directory: Open the terminal in your IDE (In Visual Studio Code, you can do this by selecting Terminal > New Terminal from the top menu). The terminal should automatically be in the main project directory. If not, use the cd command to navigate into the project directory.

STEP-5: Install the Dependencies: In the terminal, run the command npm install. This will install all the packages that are listed in the package.json file. These are the dependencies that your project needs to run correctly.

STEP-6: Start the Project: Once all the dependencies are installed, you can start the project by running the command npm run start in the terminal. This will start the local development server and you should be able to see your project running by opening a web browser and navigating to http://localhost:3000 (or whatever URL/port your terminal indicates).

Importantly make sure that u have node.js installed in your local machine.

## Features

- Add new tasks with a title and description.
- Mark tasks as completed or incomplete.
- Delete tasks.
- Filter tasks by their completion status (All, Completed, Incomplete).
- Tasks are stored in local storage, so they persist across browser sessions.

## How to Use

1. Enter the title of the task in the 'TITLE' field.
2. Enter the description of the task in the 'TASK' field.
3. Click the 'ADD' button to add the task to the list.
4. Tasks in the list have a checkbox to mark them as completed or incomplete.
5. Each task has a 'Delete' button to remove the task from the list.
6. Use the dropdown menu at the bottom of the list to filter tasks by their completion status.

## code overview

Main Component (TODOLIST): This is the main component of the application. It uses the useSelector hook to access the state of the tasks from the Redux store. It also uses the useDispatch hook to dispatch actions to the Redux store. The component has a state variable filter to filter tasks based on their completion status. The component also uses the useEffect hook to load tasks from local storage when the component mounts and to save tasks to local storage whenever the tasks state changes.

TaskForm Component: This component is responsible for adding new tasks. It has two state variables, title and task, to hold the input values from the user. It also has a taskHandler function that dispatches an addTask action to the Redux store when the user clicks the “ADD” button.

TaskList Component: This component is responsible for displaying the list of tasks. It receives the tasks as a prop from the parent component. For each task, it displays the title, task description, and a checkbox to mark the task as complete or incomplete. It also provides a delete button for each task, which dispatches a deleteTask action to the Redux store when clicked.

This code represents a simple Todo List application built using React and Redux. The application allows users to add tasks, mark tasks as complete or incomplete, and delete tasks. The tasks are saved in local storage, so they persist even when the page is refreshed. The application also provides a filter to view all tasks, only completed tasks, or only incomplete tasks.
