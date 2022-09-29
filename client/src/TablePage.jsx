import TableCard from "./components/tableCard/TableCard";
import "./TablePage.scss";

const TablePage = () => {
  return (
    <main className="app">
      <h1 className="app__header">Тестовое приложение для WelbeX</h1>
      <TableCard />
    </main>
  );
};

export default TablePage;
