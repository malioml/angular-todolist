import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'Angular Todo List';
    msg = '';
    employees = [
        {'name': 'Emilio', position: 'front 1', email: 'email@email.com'},
        {'name': 'Rubén', position: 'front 2', email: 'email@email.com'},
        {'name': 'David', position: 'front 3', email: 'email@email.com'},
    ];

    model: any = {};
    model2: any = {};

    indexEmployee;
    hideUpdateForm = true;

    addEmployee(): void {
        this.employees.push(this.model);
        this.msg = 'added';
    }

    deleteEmployee(i): void {
        const answer = confirm('are you sure to delete?');
        if (answer) {
            this.employees.splice(i, 1);
            this.msg = 'deleted';
        }
    }

    editEmployee(i): void {
        this.hideUpdateForm = false;
        this.model2.name = this.employees[i].name;
        this.model2.position = this.employees[i].position;
        this.model2.email = this.employees[i].email;
        this.indexEmployee = i;
    }

    updateEmployee(): void {
        for (let j = 0; j < this.employees.length; j++) {
            if (this.indexEmployee === j) {
                this.employees[this.indexEmployee] = this.model2;
                this.msg = 'updated';
                this.model2 = {};
            }
        }
    }

    closeAlert(): void {
        this.msg = '';
    }
}
