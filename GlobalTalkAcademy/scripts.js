// function showCourseDetails(courseId) {
//     // Здесь вы можете добавить логику для отображения информации о курсе
//     alert('Showing details for ' + courseId);
// }







// scripts.js

// Функция для перенаправления на страницу курса
function showCourseDetails(courseId) {
    // Определяем путь к файлу курса на основе courseId
    let coursePage = '';
    switch (courseId) {
        case 'course1':
            coursePage = 'course1.html'; // Путь к странице курса для детей от 5 до 8 лет
            break;
        case 'course2':
            coursePage = 'course2.html'; // Путь к странице курса для детей от 9 до 13 лет
            break;
        case 'course3':
            coursePage = 'course3.html'; // Путь к странице курса для детей от 14 до 18 лет
            break;
        default:
            return; // Выходим из функции, если courseId не совпадает с ожидаемыми значениями
    }

    // Перенаправляем пользователя на страницу курса
    window.location.href = coursePage;
}