var mecanicos=[];
var maquinas=[];

mecanicos.push("Juan");
mecanicos.push("Sebastian");
mecanicos.push("Marcelo");

maquinas.push(303);
maquinas.push(208);
maquinas.push(190);
                                        //tomo un arreglo como parametro de entrada ----in 
    function esvacia(arreglo)           // devuelve si el arreglo es vacio (true)  o no (false)  ----out
{
     //  if (arreglo.length==0)             //tambien se puede preguntar asi .length>0
	//return true                                                  
	//else
	//return false;   
   // tambien de puede reducir la funcion:	
    	
    return (arreglo.length==0);
}
    function asignar()
    {
    	
    	
   var nromaquinas=maquinas.shift();
   var nombremecanicos=mecanicos.pop();
    
    document.write(nromaquinas+"-"+nombremecanicos);
    document.write("<br>");
   
    	
    }
    
    while(!esvacia(maquinas)&& !esvacia(mecanicos))                     //&& "y logico" , los dos tienen que ser verdaderos
    	
    	{
    	
    	
    
    asignar();
    
    }
	
	