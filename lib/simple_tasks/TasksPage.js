var BasePage = require("../../lib/BasePage.js");



class TasksPage extends BasePage {
    
    open() {
        browser.url("/extjs/6.0.2/examples/classic/simple-tasks/index.html");
    }

     typeNameOfNewTask(taskName) {
         browser.setValue("#textfield-1037-inputEl", taskName);
     }
    
    
    chooseTaskList(taskListName) {
        if (taskListName != null) {
            console.log("Implement me.");
        }
    }


    setDueDate(date) {
        if (date != null) {
            console.log("Implement me.");
        }
    }


    addNewTask(taskName, taskListName = null, date = null) {
        this.typeNameOfNewTask(taskName);
        this.chooseTaskList(taskListName);
        this.setDueDate(date);
        browser.keys('Enter');
    }
    

    get listOfTasks() {
       let tasks = browser.elements(".//*[@id='tableview-1034']//table//tr");  
              
        // if no tasks are added return null
        if(tasks.value.length > 1) {
            tasks = tasks.value.slice(1, tasks.value.length);
            browser.logger.info(`${tasks.length} tasks on the page.`);
        } else {
            browser.logger.info(`No tasks in the table. Returning [].`);
            tasks = [];
        }

        //let tasks = browser.elements(".//*[@id='tableview-1034']//table//tr").value.slice(0,1);
        return tasks;
    }


    get lastTaskTitle() {
        return browser.element("((.//*[@id='tableview-1034']//table//tr)[last()])/td[2]").getText();
    }


    removeLastTask() {
        let tasks = this.listOfTasks;

        if(tasks.length > 0) {
            let locator = "((.//*[@id='tableview-1034']//table//tr)[last()])/td[7]/div/img";
            // make cross icon visible
            browser.execute(function(){
                let cross = document.querySelector('#tableview-1034 table:last-child tr:last-child td:last-child img');
                cross.className = "x-action-col-icon x-action-col-0";                
            });

            browser.click(locator);
            this.__clickYesOnConfirmTaskDeletionPopup();
        } else {
            browser.logger.info("[INFO] There were no tasks for removal.");
        }
    }
    
    
    __clickYesOnConfirmTaskDeletionPopup(){
        browser.click("#button-1006-btnInnerEl");
    }


    __clickNoOnConfirmTaskDeletionPopup(){
        browser.click("#button-1007-btnInnerEl");
    }
}

module.exports = TasksPage;