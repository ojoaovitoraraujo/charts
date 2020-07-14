function desenharGraficos(){
    //Colunas
    var tabela = google.visualization.arrayToDataTable([
        ['Mês','Entrada','Saída'],
        ['jan',2500,1000],
        ['fev',1000,500],
        ['mar',3000,1300],
        ['abr',1500,1700],
        ['mai',5000,2250],
        ['jun',3567,3000],
        ['jul',3452,1468],
        ['ago',1833,5250],
        ['set',1800,1000],
        ['out',1800,1000],
        ['nov',3569,1500],
        ['dez',3000,1740] 
    ]);

    var options = {
        title: 'Entradas e saidas da conta',
        width: 800,
        height: 400,
        vAxis: {
            gridlines:{color: 'transparent'},
            format:'currency',
            title: 'VALORES'
        },
        hAxis: {
            title: 'MES'
        }
    }
        

    var grafico = new google.visualization.ColumnChart(document.getElementById("graficoColuna"));
        grafico.draw(tabela, options);
    
    //Barras
    //Barras
    var tabela = new google.visualization.DataTable();
    tabela.addColumn('string', 'categorias');
    tabela.addColumn('number', 'valores');
    tabela.addRows([
        ['Educação', 2000],
        ['Transporte', 500],
        ['Lazer', 230],
        ['Saúde', 50],
        ['Cartão de crédito', 900],
        ['Alimentação', 260],              
    ]);;

    var grafico = new google.visualization.ColumnChart(document.getElementById('graficoBarras'));
    grafico.draw(tabela);



}