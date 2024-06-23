import fs from 'fs';
import path from 'path';

interface Veiculo {
  id: number;
  marca: string;
  modelo: string;
  ano: number;
  valor: number;
}

interface VeiculosData {
  carros: {
    novos: Veiculo[];
    usados: Veiculo[];
  };
  motos: {
    novos: Veiculo[];
    usados: Veiculo[];
  };
}

const dataPath = path.resolve(__dirname, 'data', 'veiculos.json');
const data: VeiculosData = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));

const filtrarPorMarca = (tipo: 'carros' | 'motos', marca: string): Veiculo[] => {
  const veiculos = data[tipo].novos.concat(data[tipo].usados);
  return veiculos.filter(veiculo => veiculo.marca.toLowerCase() === marca.toLowerCase());
};

const somarValorPorMarca = (tipo: 'carros' | 'motos', marca: string): number => {
  const veiculos = filtrarPorMarca(tipo, marca);
  return veiculos.reduce((acc, veiculo) => acc + veiculo.valor, 0);
};

const filtrarPorAno = (tipo: 'carros' | 'motos', ano: number): Veiculo[] => {
  const veiculos = data[tipo].novos.concat(data[tipo].usados);
  return veiculos.filter(veiculo => veiculo.ano > ano);
};

export { filtrarPorMarca, somarValorPorMarca, filtrarPorAno };
