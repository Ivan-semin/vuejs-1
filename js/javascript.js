 var app = new Vue({
     el: '#app',
     data: {
         departments: [
              {     
                  name: 'Marketing',
                  description: 'Marketing description'
              },
              {
                  name: 'Support',
                  description: 'Support description'
              },
              {
                  name: 'Accounting',
                  description: 'Accounting description'
              },
              {
                  name: 'General',
                  description: 'General description'
              },
              {
                  name: 'Administrative',
                  description:  'Administrative description'
              }
          ],
         employees: [
             {
                 firstName: 'Иван',
                 lastName: 'Иванов',
                 departmentId: 0
             },
             {
                 firstName: 'Петр',
                 lastName: 'Петров',
                 departmentId: 2
             },
             {
                 firstName: 'Сергей',
                 lastName: 'Сергеев',
                 departmentId: 2
             },
             {
                 firstName: 'Егор',
                 lastName: 'Егоров',
                 departmentId: 1
             }

         ],
         departments_list: 1,
         employees_list: 0,
         departamentId: 0,
         departmentView: 0,
         departmentEdit: 0,
         department_new: [],
         employee_new: [],
     },
     methods: {
         // methods for departament
         getNameDepartment: function(id_department) {
             return this.departments[id_department].name;
         },
         viewDepartment: function (index) {
             this.departments_list = 2;
             this.departmentView = index;
         },
         editDepartment: function (index) {
             this.departments_list = 3;
             this.departmentEdit = index;
         },
         deleteDepartment: function (index) {
            this.departments.splice(index, 1);
         },
         addDepartment: function () {
            this.departments.push({
                name: this.department_new.name,
                description: this.department_new.description
            });
            this.department_new = [];
            this.departments_list = 1;
        },
        // methods for employee
         viewEmployee: function (index) {
             this.employees_list = 2;
             this.employeesView = index;
         },
         editEmployee: function (index) {
             this.employees_list = 3;
             this.employeesEdit = index;
         },
         deleteEmployee: function (index) {
            this.employees.splice(index, 1);
         },
         addEmployee: function () {
            this.employees.push({
                firstName: this.employee_new.firstName,
                lastName: this.employee_new.lastName,
                departmentId: this.employee_new.departmentId
            });
            this.employee_new = [];
            this.employees_list = 1;
         }
     }
 })
