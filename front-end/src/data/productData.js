import app from "../firebase/firebase-config";
import Product from "../models/product"
import 'firebase/compat/firestore';
import firebase from "firebase/compat/app";

const firestore = app.firestore();

export const getProductList = async () => {
    try {
        const response = await firestore.collection('products');
        const data = await response.get();
        let array = []
        data.forEach(doc => {
            const product = new Product(
                doc.id,
                doc.data().itemName,
                doc.data().price,
                doc.data().quantity,
                doc.data().chosen,
                doc.data().img,
                doc.data().href,
                doc.data().warehouse,
            );

            array.push(product);
        });
        return array;
    } catch (error) {
        throw error
    }
}

export const getProduct = async (id) => {
    try {
        const product = await firestore.collection('products').doc(id);
        const data = await product.get();
        return data.data();
    } catch (error) {
        throw error;
    }
}

export const updateQuantityProduct = async (id, data) => {
    try {
        const product = await firestore.collection('products').doc(id);
        const increment = firebase.firestore.FieldValue.increment(1);
        const decrement = firebase.firestore.FieldValue.increment(-1);
        if(data === "inc")
        {
            await product.update({'quantity' :  increment });
        }
        else if (data ==="dec")
        {
            await product.update({'quantity' : decrement });
        }
    } catch (error) {
        throw error;
    }
}

export const deleteProduct = async (id) => {
    try {
        await firestore.collection('products').doc(id).delete();
    } catch (error) {

    }
}