import item from './item.js';


export default {
    items: [],
    hideCheckedItems: false,
    toggleCheckedFilter: function () {
        this.hideCheckedItems = !this.hideCheckedItems;
    },
    findById: function (id) {
        return this.items.find(item => item.id === id);
    },
    findAndDelete: function (id) {
        const index = this.items.findIndex(item => item.id === id);
        this.items.splice(index, 1);
    },
    findAndToggleChecked: function (id) {
        const foundItem = this.findById(id);
        foundItem.checked = !foundItem.checked;
    },
    findAndUpdateName: function () {
        try {
            item.validateName(newName);
            const foundItem = this.findById(id);
            foundItem.name = newName;
        } catch (e) {
            console.log(`Cannot update name: ${e.message}`);
        }
    },
    addItem: function (name) {
        try {
            item.validateName(name);
            const newItem = item.create(name);
            this.items.push(newItem);
        } catch (e) {
            console.error(e);
        }
    }
};


