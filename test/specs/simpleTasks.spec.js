var expect = require('chai').expect,
    TasksPage = require('../../lib/simple_tasks/TasksPage');

var config = require('../../lib/constants');

describe('Adding, Removing and Editing Tasks', function() {
    let taskName = "My New Task";
    
    it('Should add new task', function () {
        let tasksPage = new TasksPage();
        
        tasksPage.open();
        tasksPage.addNewTask(taskName);
        expect(tasksPage.lastTaskTitle, '[ERROR] Task Title is different').to.be.equal(taskName);
        expect(tasksPage.listOfTasks, '[ERROR] There are no tasks').to.have.length.of.at.least(1);        
    });
    
    
    it('Should remove task', function() {
        let tasksPage = new TasksPage();
        let amountOfTasksBefore;

        tasksPage.open();
        tasksPage.addNewTask(taskName);
        amountOfTasksBefore = tasksPage.listOfTasks.length;
        tasksPage.removeLastTask();

        expect(tasksPage.listOfTasks.length, '[ERROR] Extra task is present').to.be.below(amountOfTasksBefore);
    });
});



describe('Creating, Removing and Editing Lists', function() {
    let listName = "My New Task";

    it.only('Should add new list', function () {
        let tasksPage = new TasksPage();

        tasksPage.open();
        //tasksPage.createNewList(listName);
        
      
        
     
    });

});



