function fnGenerarTabla(res,num,nom,ape,tur)
{  
    document.write(`
    
    
    <table border="1">
	<tr>
		<td id="tdIzq">COL1-FILa1 Nombres: </td>
		<td id="tdDer">COL2-FILa1 ${nom} </td>
		<td rowspan="3">
			<img src="img/f${num}.jpg" alt="foto">
		</td>
	</tr>
	<tr>
		<td id="tdIzq">COL1-FILa2 Apellidos: </td>
		<td id="tdDer">COL2-FILa2 ${ape}</td>
<!--	<td>COL3-FILa2</td>	-->
	</tr>
	<tr>
		<td id="tdIzq">COL1-FILa3 Turno: </td>
		<td id="tdDer">COL2-FILa3 ${tur}</td>
<!--	<td>COL3-FILa3</td>		-->
	</tr>
	<tr>
		<td colspan="3" class="titulo">COL1-FILa4 RESUMEN:  ${res}</td>
<!--	<td>COL2-FILa4</td>
		<td>COL3-FILa4</td> -->
	</tr>
</table>

    
    <br> `);
}

function fnTurno(turno)
{

}