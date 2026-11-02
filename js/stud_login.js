async function load() {
    const path = 'assets/data/student.json';

    try {
        const resp = await fetch(path);
        if (!resp.ok) throw new Error(`${resp.status}`);

        const stud = await resp.json();

        return stud

    } catch (error) {
        console.error(path, error);
        throw error;
    }
}

const stud = await load();
const mainBtn = document.getElementById('mainBtn');
const matric = document.getElementById('matric');
const stud_name = document.getElementById('stud_name');


// ENABLING 'START' BUTTON
matric.addEventListener("input", function () {
    const name = stud?.[matric.value] ?? null;

    if (name) {
        mainBtn.disabled = false;
        stud_name.innerHTML = `이름을 확인해 주세요: <b>${name}</b>`;
    } else {
        mainBtn.disabled = true;
        stud_name.innerHTML = '&nbsp;';
    }
});

mainBtn.addEventListener('click', function () {
    localStorage.setItem('my_name', stud?.[matric.value] ?? null);
    localStorage.setItem('my_matric', matric.value);
    window.location.href = "quiz.html";
});
