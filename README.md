# Graded Assignment 6: Orbit Report Solution

Using Node 18.16.10

## Getting Started
1. Fork and [clone this repo from GitHub](https://plainenglish.io/blog/how-to-clone-an-app-from-github-446541a0302d)
2. Open this in Visual Studio Code (or your favorite IDE for React projects)
3. Use the terminal to `cd` into the project directory.
4. Use the following commands to start the project:
  1. `npm install` will pull in dependencies your project may need.
  2. `npm start` will run the project.


## Assignment Overview:
1. Create components to render an interactive table that displays satellites. The satellites render in the table based on a button click. You will create the buttons, the table, and the function that connects them. It's going to be great! :)
2. Testing: Every time you push up your code to your forked GitHub repo, this will trigger an Action to run.  The Action will start the autograding tests. There is one workflow that contains 9 tests. When you pass all the tests, let your TA know and review your project with them.


## Running the Unit Tests
The final task of the assignment is to run the unit tests.

However, the autograding tests will run every time you push your work up to your GitHub repo.  The autograded tests are in a single workflow, so you will not pass this workflow until you've completed the entire project.  

### Running a workflow with GitHub Actions
Before you review your code with your TA, check on the status of your workflow.  To do this, follow [GitHub's guide on manually running a walkthrough](https://docs.github.com/en/actions/managing-workflow-runs/manually-running-a-workflow#running-a-workflow).  This guide will explain the following:
1. How to run the workflow
2. What the output looks like
3. How to investigate a failed test
4. How to rerun tests

### To Run the tests within your project 
If you like to check your progress incrementally as you work, you can run the tests in your terminal between each section.  Again, since the tests are in a single test file, you will not pass all of the tests until you've completed your project.

To test your code in the terminal before you push it up to GitHub, use these steps: 
  1. Inside the project directory, run the following commands to start the tests: `npm test`
     
  You should see the following if you run the tests _BEFORE_ completing the assignment:
  
  <img width="50%" alt="starting unit tests" src="https://github.com/LaunchCodeEducation/orbitReport-React/assets/66076696/9abae38b-971a-41df-b34d-cd75aee1b81a">

  If you are running this between tasks, you should see that some of your tests pass while others do not depending on your progress.

  If your code behaves as expected by the last task, you should pass all the unit tests and see this: 
    <img width="50%" alt="passing unit tests" src="https://github.com/LaunchCodeEducation/orbitReport-React/assets/66076696/b0cf1c1f-4ba8-4553-968d-040538c64c9b">

### Troubleshooting
Troubleshooting tips for this project and the unit tests are in the textbook.

Happy coding! :)
