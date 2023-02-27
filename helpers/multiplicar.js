
const fs = require(`fs`);
const colors = require(`colors`);


const crearArchivo = async(base = 5, listar, hasta) =>{

  try{
  console.log('***********************'.green);
  console.log('Tabla del ', colors.blue(base));
  console.log('***********************'.green);
  
  let salida = ''
  let consola ='';

    for (let i = 1; i <=hasta ; i++) {  
        salida += `${base} x ${i} = ${base*i}\n`;
        consola += `${base} ${'x'.red} ${i} = ${base*i}\n`;
      }

    fs.writeFileSync(`./salida/tabla_${base}.txt`,salida);  
    
      if (listar == true)  console.log(consola);

    return (`Tabla del ${base} creada`);      

  } catch(error){
      throw(error);
  }    
}

module.exports ={
  crearArchivo
}