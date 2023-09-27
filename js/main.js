//Boxes
const totalBox = document.querySelector('.total-box');
const pointsAmountBox = document.querySelector('.points-amount');
const resultBox = document.querySelector('.result-box');

const totalPoints = document.querySelector('.total-points');
const confirmPointsBtn = document.querySelector('.confirm');
const pointsAmount = document.querySelector('.amount');
const calcGradeBtn = document.querySelector('.calc-grade');
const gradeEl = document.querySelector('.grade');

let grade = 0;

confirmPointsBtn.addEventListener('click', confirmPoints);
calcGradeBtn.addEventListener('click', calculateGrade)

function confirmPoints() {
    if (!totalPoints.value == "") {
        pointsAmountBox.classList.toggle('visible-box');
        resultBox.classList.toggle('visible-box');
        totalBox.classList.toggle('visible-box');
    }
}

function calculateGrade() {
    if (!pointsAmount.value == "" && pointsAmount.value <= totalPoints.value) {
        grade = (pointsAmount.value / totalPoints.value) * 9 + 1;
        console.log(grade.toFixed(1));
        gradeEl.textContent = grade.toFixed(1);
    }
}
