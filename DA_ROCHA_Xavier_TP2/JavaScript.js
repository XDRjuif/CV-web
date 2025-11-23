function JS(id) {
    const section = document.getElementById(id);
    section.style.display = (section.style.display === "block")?"none": "block";
}

document.querySelectorAll("#and input").forEach(i =>
    i.addEventListener("change", () => {
        const A = document.getElementById("andA").checked ?1 : 0;
        const B = document.getElementById("andB").checked ? 1 :0;
        document.getElementById("et_result").textContent = "Résultat : " + (A & B);
    })
);

document.querySelectorAll("#or input").forEach(i =>
    i.addEventListener("change", () => {
        const A = document.getElementById("orA").checked ? 1 : 0;
        const B = document.getElementById("orB").checked ? 1 :0;
        document.getElementById("ou_Résult").textContent = "Résultat : " + (A|B);
    })
);

document.querySelectorAll("#xor input").forEach(i =>
    i.addEventListener("change", () => {
        const A = document.getElementById("xorA").checked ? 1 : 0;
        const B = document.getElementById("xorB").checked ? 1 : 0;
        document.getElementById("ou_exclu_résult").textContent = "Résultat : " + (A^B);
    })
);