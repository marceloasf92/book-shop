import pedraFilosofal from "../../img/pedra-filosofal.jpg";
import camaraSecreta from "../../img/camara-secreta.jpg";
import prisioneiroAzkaban from "../../img/prisioneiro-azkaban.jpg";
import caliceFogo from "../../img/calice-fogo.jpg";
import ordemFenix from "../../img/ordem-fenix.jpg";
import enigmaPrincipe from "../../img/enigma-principe.jpg";
import reliquiasMorte from "../../img/reliquias-morte.jpg";
import criancaAmaldicoada from "../../img/crianca-amaldicoada.jpg";
import box from "../../img/box.png";

import { createContext, useContext, useState } from "react";

const BooksContext = createContext();

export const BooksProvider = ({ children }) => {
  const [books] = useState([
    {
      id: 1,
      name: "Harry Potter e a Pedra Filosofal",
      price: 24.9,
      image: pedraFilosofal,
      quantidade: 1,
    },
    {
      id: 2,
      name: "Harry Potter e a Câmara Secreta",
      price: 22.9,
      image: camaraSecreta,
      quantidade: 1,
    },
    {
      id: 3,
      name: "Harry Potter e o Prisioneiro de Azkaban",
      price: 31.9,
      image: prisioneiroAzkaban,
      quantidade: 1,
    },
    {
      id: 4,
      name: "Harry potter e o Cálice de Fogo",
      price: 34.9,
      image: caliceFogo,
      quantidade: 1,
    },
    {
      id: 5,
      name: "Harry potter e a Ordem da Fênix",
      price: 45.9,
      image: ordemFenix,
      quantidade: 1,
    },
    {
      id: 6,
      name: "Harry potter e o Enigma do Príncipe",
      price: 31.9,
      image: enigmaPrincipe,
      quantidade: 1,
    },
    {
      id: 7,
      name: "Harry potter e as Relíquias da Morte",
      price: 35.69,
      image: reliquiasMorte,
      quantidade: 1,
    },
    {
      id: 8,
      name: "Harry Potter e a Criança Amaldiçoada",
      price: 40.9,
      image: criancaAmaldicoada,
      quantidade: 1,
    },
    {
      id: 9,
      name: "Box Harry Potter",
      price: 240,
      image: box,
      quantidade: 1,
    },
  ]);

  return (
    <BooksContext.Provider value={{ books }}>{children}</BooksContext.Provider>
  );
};

export const useBooks = () => useContext(BooksContext);
