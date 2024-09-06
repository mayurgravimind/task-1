// Backup api = https://jsonplaceholder.typicode.com/users
async function employeeData() {
    await fetch("https://dummy.restapiexample.com/api/v1/employees")
        .then(res => {
            return res.json()
        })
        .then(result => {
            const emp = result.data
            const tableBody = document.getElementById('table_body')
            emp.map(employee => {
                const row = document.createElement('tr')

                row.innerHTML = `
            <td>${employee.id}</td>
            <td>${employee.employee_name}</td>
            <td>${employee.employee_salary}</td>
            <td>${employee.employee_age}</td>`
                tableBody.appendChild(row)
            })
        })
        .catch(error => {
            console.log(error)
        })

}

employeeData();