const key = "3de4456f878efc689cc28693d9043c19";

async function buscar() {
  const cidade = document.getElementById("cidade").value;

  if (!cidade) {
    alert("Digite uma cidade!");
    return;
  }

  try {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`
    );

    const data = await res.json();

    console.log(data); 

    if (data.cod !== 200) {
      document.getElementById("resultado").innerText = "Cidade não encontrada";
      return;
    }

    document.getElementById("resultado").innerHTML = `
      <h3>${data.name}</h3>
      <p>🌡️ ${data.main.temp}°C</p>
      <p>${data.weather[0].description}</p>
    `;
  } catch (erro) {
    console.error("Erro ao buscar clima:", erro);
  }
}