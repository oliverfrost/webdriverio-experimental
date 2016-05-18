var expect = require('chai').expect,
    TasksPage = require('../../lib/simple_tasks/TasksPage');

describe('Adding, Removing and Editing Tasks', function() {
    let taskName = "My New Task";
    
    it('Should add new task', function () {
        let tasksPage = new TasksPage();
        
        tasksPage.open();
        tasksPage.addNewTask(taskName);
        expect(tasksPage.lastTaskTitle, '[ERROR] Task Title is different').to.be.equal(taskName);
        expect(tasksPage.listOfTasks).to.have.length.of.at.least(1);        
    });
});