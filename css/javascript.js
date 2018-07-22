// $(function () {
//   $('[data-toggle="tooltip"]').tooltip();
// })

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
                 departmentId: 1
             },
             {
                 firstName: 'Петр',
                 lastName: 'Петров',
                 departmentId: 2
             },
             {
                 firstName: 'Сергей',
                 lastName: 'Сергеев',
                 departmentId: 3
             },
             {
                 firstName: 'Егор',
                 lastName: 'Егоров',
                 departmentId: 4
             }

         ],
         departments_list: 1,
         employees_list: 0,
         departamentId: 0,
         viewD: false,
         editD: false,
         addD: false,
         departmentView: 0,
         departmentEdit: 0,
         departments_new: []
     },
     // computed: {
     //     fullName: function() {
     //        return this.employees.firstName;
     //     }
     // },
     methods: {
         viewDepartment: function (index) {
             this.viewD = 2;
             this.departmentView = index;
         },
         editDepartment: function (index) {
             this.editD = true;
             this.departmentEdit = index;
         },
         deleteDepartment: function (index) {
            this.departments.splice(index, 1);
         },
         addDepartment: function () {
            this.departments.push({
                name: this.departments_new.name,
                description: this.departments_new.description
            });
            this.departments_new.length = 0;
            this.addD = false;
         }
     }
 })
