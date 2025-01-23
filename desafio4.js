function calcularPercentualEstado() {
  const faturamentos = {
      'SP': 67836.43,
      'RJ': 36678.66,
      'MG': 29229.88,
      'ES': 27165.48,
      'Outros': 19849.53
  };
  
  const totalFaturamento = Object.values(faturamentos).reduce((a, b) => a + b, 0);
  const percentuais = {};
  
  for (let estado in faturamentos) {
      percentuais[estado] = (faturamentos[estado] / totalFaturamento * 100).toFixed(2);
  }
  
  return percentuais;
}

const resultado = calcularPercentualEstado();
for (let estado in resultado) {
  console.log(`${estado}: ${resultado[estado]}%`);
}