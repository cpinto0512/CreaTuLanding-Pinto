// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "reactjs-coderh.firebaseapp.com",
  projectId: "reactjs-coderh",
  storageBucket: "reactjs-coderh.firebasestorage.app",
  messagingSenderId: "733160095723",
  appId: "1:733160095723:web:240dfd43276b86767563ae"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)


const productos = [
  {
    id: "101",
    nombre: "Almendras activadas 130g",
    precio: 7,
    img: "../img/101.jpg",
    idCat: "Cat1",
    stock: 50
  },
  {
    id: "102",
    nombre: "Cashews activados 130g",
    precio: 7,
    img: "../img/102.jpg",
    idCat:"Cat1",
    stock: 60
  },
  {
    id: "103",
    nombre: "Castañas activadas 130g",
    precio: 8,
    img: "../img/103.jpg",
    idCat:"Cat2",
    stock: 70
  },
  {
    id: "104",
    nombre: "Pecanas activadas 100g",
    precio: 7,
    img: "../img/104.jpg",
    idCat: "Cat2",
    stock: 50
  },
  {
    id: "105",
    nombre: "Pistachos activados 100g",
    precio: 10,
    img: "../img/105.jpg",
    idCat: "Cat3",
    stock: 60
  },
];

import { collection, doc, writeBatch } from "firebase/firestore";

const subirProductos = async () =>{
  const batch = writeBatch(db);
  const productosRef = collection(db,"productos");

  productos.forEach((producto)=>{
    const nuevoDoc = doc(productosRef);
    batch.set(nuevoDoc,producto);
  });

  try{
    await batch.commit();
    console.log("Productos subidos exitosamente");
  } catch (error){
    console.error("Error subiendo productos: ",error)
  }
};

//subirProductos()