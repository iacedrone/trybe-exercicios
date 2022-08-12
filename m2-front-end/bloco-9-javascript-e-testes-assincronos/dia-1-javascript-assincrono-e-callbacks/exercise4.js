const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

const sendMarsTemperature = (temperaturaAtual) => {
  setTimeout(() => console.log(`A temperatura de Marte é: ${temperaturaAtual} graus celsius`), Math.floor(Math.random() * (5000)) + 1000);
};

sendMarsTemperature(getMarsTemperature());