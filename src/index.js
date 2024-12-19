import React from "react";
import ReactDOM from "react-dom/client";
import styles from "./index.module.css";
import data from "./data";

const App = () => {
    return (
        <div className={styles.container}>
            <Header styles />
            <Menu />
            <Footer />
        </div>
    );
};

const Food = (props) => {
    return (
        <li className={`${styles.food} ${!props.stok ? styles["sold-out"] : ""}`}>
            <img className={styles.image} src={props.foto} alt={props.nama} />
            <div>
                <h3>{props.nama}</h3>
                <p>{props.deskripsi}</p>
                <span>{props.stok ? props.harga : "Habis"}</span>
            </div>
        </li >
    );
};

function Header() {
    const style = {
        color: "red",
        fontSize: "50px",
        textTransform: "uppercase",
    };
    return <h1 style={style}>Header</h1>;
}

function Menu() {
    const foods = data;
    const numFood = foods.length;
    return (
        <main className={styles.menu}>
            <h2>Menu</h2>
            {numFood > 0 ? (
                <ul className={styles.foods}>
                    {foods.map((food, index) => (
                        <Food key={index} {...food} />
                    ))}
                </ul>
            ) : (
                <p>Menu Sedang Kosong, silakan datang besok</p>
            )}
        </main>
    );
}

function Footer() {
    const hour = new Date().getHours();
    const jamBuka = 10;
    const jamTutup = 22;
    return (
        <footer className={styles.footer}>
            <div>
                {new Date().getFullYear()} Footer -{" "}
                {hour < jamBuka || hour > jamTutup ? "Tutup" : "Buka"}
            </div>
        </footer>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
