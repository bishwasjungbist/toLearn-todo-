console.log('hel');
const list = document.querySelector('#list');
const form = document.getElementById('new-task-form');
const input = document.querySelector('#new-task-title');
console.log("form:", form);
console.log("input:", input);
console.log("list:", list);
form?.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log('no refresh');
    if (form?.value == "" || input?.value == null)
        return;
    /*FOR TODO */
    const newTask = {
        /*means the variable is a task obkect*/
        id: crypto.randomUUID(),
        title: input.value,
        completed: false,
        createdAt: new Date()
    };
    addListItem(newTask);
});
function addListItem(task) {
    /*this mean it will receve data in taskData object
    format from newTask which auto gen the data
    and will get saved into task*/
    const item = document.createElement('li');
    const label = document.createElement('label');
    const checkbox = document.createElement('input');
    checkbox.type = "checkbox";
    label.append(checkbox, task.title);
    /*porbaly creates box infront of the task(title)*/
    item.append(label);
    list?.append(item);
    /*what? isnt item already a list, and list can be null*/
}
export {};
//# sourceMappingURL=script.js.map