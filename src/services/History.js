// Importa a função que cria um objeto de histórico de navegação. Esse histórico controla as mudanças de URL no navegador
import { createBrowserHistory } from "history";

// Cria uma instância do history usando o padrão HTML5 (Browser History). Isso permite navegar (push, replace, goBack) via código JavaScript
const history = createBrowserHistory();

// Exporta o history para ser usado em outros lugares da aplicação
// Muito comum para:
// - redirecionar usuário fora de componentes React
// - navegar dentro de sagas, services ou actions
export default history;