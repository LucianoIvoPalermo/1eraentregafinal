class Contratacion {
    constructor(id, descripcion, valor) {
        this.id = id;
        this.descripcion = descripcion;
        this.valor = valor;
    }
  }
  const horaFiesta = new Contratacion("1","1 hora de show en fiesta privada", 10000);
  const horaCasamiento = new Contratacion("2","1 hora de show en casamiento", 15000);
  const horaCumple = new Contratacion("3","1 hora de show en cumpleaños", 12000);
  const horaExtra = new Contratacion("4","1 hora extra de show por pedido especial", 30000);
  const horaSociales = new Contratacion("5","1 hora de presencia sin show", 40000);
  
  let gastoTotal = 0;
  
  const sumarHoras = (horas) => (gastoTotal += horas);
  
  function comprar() {
    let continuar = true;
    alert("Usted está en la página oficial de Babasónicos! Determine la cantidad de horas y el tipo de evento al que desea contratar a la banda.");
  
    while (continuar) {
      let horas = prompt(`
      Ingrese el numero de la izquierda para contratar las horas deseadas.
      
      Detalle de horas:
      ${horaFiesta.id} - ${horaFiesta.descripcion} $${horaFiesta.valor}
      ${horaCasamiento.id} - ${horaCasamiento.descripcion} $${horaCasamiento.valor}
      ${horaCumple.id} - ${horaCumple.descripcion} $${horaCumple.valor}
      ${horaExtra.id} - ${horaExtra.descripcion} $${horaExtra.valor}
      ${horaSociales.id} - ${horaSociales.descripcion} $${horaSociales.valor}
      6 - Salir
      
      Gastaste: $${gastoTotal}.
      `);
  
      switch (horas) {
        case "1":
          sumarHoras(horaFiesta.valor);
          break;
        case "2":
          sumarHoras(horaCasamiento.valor);
          break;
        case "3":
          sumarHoras(horaCumple.valor);
          break;
        case "4":
          sumarHoras(horaExtra.valor);
          break;
        case "5":
          sumarHoras(horaSociales.valor);
          break;
        case "6":
          continuar = false;
          break;
        default:
          alert("El valor ingresado no es válido.");
          break;
      }
      if (horas != "6") continuar = confirm("Desea seguir acordando horarios?");
    }
  
    alert(`El total del show es $${gastoTotal}.`);
  }
  
  comprar();
  console.log(gastoTotal)