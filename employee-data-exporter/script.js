const Form = document.getElementById("employeeForm");
const employeeName = document.getElementById("employeeName");
const employeeId = document.getElementById("employeeId");
const department = document.getElementById("department");
const errorMessage = document.getElementById("errorMessage");
const jsonOutput = document.getElementById("jsonOutput");

Form.addEventListener("submit", function (event) {
    event.preventDefault();

    const username = employeeName.value;
    const userid = Number(employeeId.value);
    const userdepartment = department.value;

    const newUser = {
        name: username,
        id: userid,
        department: userdepartment,
    }

    const EmployeeJSON = JSON.stringify(newUser, null, 2);

    jsonOutput.textContent = EmployeeJSON;
})