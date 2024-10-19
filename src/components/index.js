/*
 Esto se conoce como archivo de barril
 es una forma de juntar todos los archivos de una carpeta raiz
 en este caso la carpeta raiz es component
 siempre tiene que tener el nombre de index y react lo busca solito

 despues para importar se usa solo una linea con todos los componentes que necesitemos 
 import { AddCategory,GifGrid } from './components'
*/
export * from './AddCategory';
export * from './GifGrid';
export * from './GifItem';