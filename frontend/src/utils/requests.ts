// Variavel do ambiente para decidir se utiliza a URL do backend local ou a URL do backend em produção 
// (REACT_APP = nome padrao do heroku)
export const BASE_URL = process.env.REACT_APP_BACKEND_URL ?? "http://localhost:8080";
