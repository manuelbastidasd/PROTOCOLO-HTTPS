var customers = {
				estructura1: {
					name : "Casa de Manuel",
					color : "Blanco",
					address : "224 NE Calle 11va",
					rooms : 4,
					id: 1,
				
				  },
				  estructura2: {
					name : "Casa de Ricardo",
					color: "Amarilla",
					address : "5101 NE Calle 11va",
					rooms :5,
					id: 2
				},
				estructura3: {
					name : "Casa de Janet",
					color : "Azul",
					address :  "4201 N Avenida Drive",
					rooms : 5,
					id: 3
				},
				estructura4:{
					name : "Edificio Buffalo",
					color : "Blanco",
					address :  "4002 S Avenida Sur",
					floors : 3,
					id: 4
				},
				estructura5:{
					name : "Edificio Murasi",
					color : "Marron y Blanco",
					address :  "005 SE Park 20",
					floors : 20,
					id: 5
				},
				estructura6:{
					name : "Apartamentos Concordia",
					color : "Naranja",
					address :  "1202 S Avenida Principal",
					floors: 5,
					apartamentos : 10,
					id: 6
				},
				estructura7:{
					name : "Apartamentos Nueva Vida",
					color : "Negro",
					address :  "1400 NE Avenida Calle Baja",
					floors: 10,
					apartamentos : 20,
					id: 7
				},
				estructura8:{
					name : "Carretera Trasandina",
					kilometros: 1529 ,
					location :  "Andes venezolanos",
					type: "Carretera Troncal",
					id: 8
				},
				estructura9:{
					name : "Troncal 1",
					kilometros: 991 ,
					location :  "Region Costa-Montaña",
					type: "Autopistas estatales",
					id: 9
				},
				estructura10:{
					name : "Puente Simón Bolívar",
					kilometros: 991 ,
					location :  "1405 NE Avenida Bolívar",
					type: "Puente viga",
					via: "Tres Carriles",
					id: 10
				},
				estructura11:{
					name : "Puente Simón Bolívar",
					kilometros: 991 ,
					location :  "1405 NE Avenida Bolívar",
					type: "Puente viga",
					via: "Tres Carriles",
					id: 11
				},
				estructura12:{
					name : "Parque Andres Nuge",
					ecorregion: "Neotropico" ,
					location :  "1005 N Parque Andres Nuge",
					type: "Parque Nacional",
					creation: "25 de mayo de 1988",
					id: 12
				},
				estructura13:{
					name : "Parque San Martin",
					ecorregion: "Neotropico" ,
					location :  "0001 Avenida San Martin",
					type: "Parque Nacional",
					creation: "29 de mayo de 1975",
					id: 13
				},
				estructura14:{
					name : "Zona Comercial El Loro",
					type: "Libre Comercio" ,
					location :  "1030 NE Autopista Andres",
					creation: "15 de mayo de 2000",
					productos: "Varios",
					id: 14
				},
				estructura15:{
					name : "Zona Comercial El Gato Negro",
					type: "Libre Comercio" ,
					location :  "3250 EW Calle Libertador",
					creation: "30 de enero de 1999",
					productos: "Productos Deportivos",
					id: 15
				}
			}

exports.create = function(req, res) {
	var newEstructura = req.body;
    customers["estructura" + newEstructura.id] = newEstructura;
	console.log("Despues de crear, Estructuras:\n" + JSON.stringify(customers, null, 4));
    res.end("Post Exitosamente: \n" + JSON.stringify(newEstructura, null, 4));
};

exports.encontrarTodos = function(req, res) {
    console.log("Encontrar todos: \n" + JSON.stringify(customers, null, 4));
    res.end("Encontrar Todas Estructuras: \n" + JSON.stringify(customers, null, 4));  
};

exports.encontrarUno = function(req, res) {
    var customer = customers["estructura" + req.params.id];
    console.log("--->Encontrar Estructura: \n" + JSON.stringify(customer, null, 4));
    res.end( "Encontrar una Estructura:\n" + JSON.stringify(customer, null, 4));
};

exports.update = function(req, res) {
	var id = parseInt(req.params.id);
	var estructuraActualizada = req.body; 
	if(customers["estructura" + id] != null){

		customers["estructura" + id] = estructuraActualizada;

		console.log("Update exitoso, estructuras: \n" + JSON.stringify(customers, null, 4))
	
		res.end("Update Exitoso! \n" + JSON.stringify(estructuraActualizada, null, 4));
	}else{
		res.end("No existe la estructura:\n:" + JSON.stringify(estructuraActualizada, null, 4));
	}
};

exports.delete = function(req, res) {
	var deleteEstructura = customers["estructura" + req.params.id];
    delete customers["estructura" + req.params.id];
    console.log("Despues de eliminar, lista de estructuras:\n" + JSON.stringify(customers, null, 4) );
    res.end( "Estructura Eliminada: \n" + JSON.stringify(deleteEstructura, null, 4));
};