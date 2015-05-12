<?php
	printf("Atendiendo al cliente con la carta<br>");
	$fichero_url = fopen("cliente.txt","r");

	$texto = "";
	while ($pieza = fgets($fichero_url)) {
    	$texto .= $pieza;
	}
	printf($texto);
	printf("<br>Termine con el cliente y ahora atiendo a otro");
?>