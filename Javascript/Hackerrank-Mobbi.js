class InventoryList {
    constructor() {
        this.inventory = [];
    }

    add(name) {
        this.inventory.push(name);
    }

    remove(name) {
        const index = this.inventory.indexOf(name);
        if (index !== -1) {
            this.inventory.splice(index, 1);
        }
    }

    getList() {
        return this.inventory;
    }
}

function main() {
    const fs = require('fs');
    const readline = require('readline');
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    
    const obj = new InventoryList(); 
    const operationCount = parseInt(readLine().trim());
    
    for(let i = 1; i <= operationCount; i++) {
        const operationInfo = readLine().trim().split(' ');
        if (operationInfo[0] === 'add') {
            obj.add(operationInfo[1]);
        } else if (operationInfo[0] === 'remove') {
            obj.remove(operationInfo[1]);
        } else if (operationInfo[0] === 'getList') {
            const res = obj.getList();
            if (res.length === 0) {
                console.log('No Items'); 
            } else {
                console.log(res.join(',')); 
            }
        }
    }
    rl.close(); 
}

main();