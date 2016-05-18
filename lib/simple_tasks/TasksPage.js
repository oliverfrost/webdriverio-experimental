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
        // var tasks = this.driver.findElements(By.xpath(".//*[@id='tableview-1034']//table//tr")).then(function (elements) {
        //     return elements.slice(0, 1); // remove table`s title
        // });
        // return tasks;
        
        var a = [];
        a = browser.elements(".//*[@id='tableview-1034']//table//tr").then(function(elems){
            console.log("MY ELEMS: " + elems);
            return elems.slice(0,1);
        });// .slice(0,1);
        
        
    }


    get lastTaskTitle() {
       return browser.elements("((.//*[@id='tableview-1034']//table//tr)[last()])/td[2]").getText();
    }
}

module.exports = TasksPage;