function desenharGraficos(){

    //Pizza
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
    ]); 

    var opcoes = {
        title: 'Tipos de Gastos',
        height: 400,
        width: 800,
        is3D: true,
        legend: 'labeled', //top, right, left, bottom
        pieSliceText: 'value', //value, label 
        slices:{
            0:{}, 
            1:{color: 'grey'}, 
            2:{color: '#a6a6a6'},
            3:{color: 'grey'},
            4:{offset: 0.2},
            5:{color: 'grey'},
        }
        //colors: ['grey', 'red']
        // 'pieHole': 0.8 Grafico DONUT | OBS: tem que tirar o 3D
    };
    
    var grafico = new google.visualization.PieChart(document.getElementById('graficoPizza'));
    grafico.draw(tabela, opcoes);

    //Linhas
    tabela = new google.visualization.DataTable();
    tabela.addColumn('string','mes');
    tabela.addColumn('number','gastos');
    tabela.addRows([
        ['jan',800],
        ['fev',400],
        ['mar',1100],
        ['abr',400],
        ['mai',500],
        ['jun',750],
        ['jul',1500],
        ['ago',650],
        ['set',850],
        ['out',400],
        ['nov',1000],
        ['dez',720]
    ]);

    var opcoes = {
        title: 'Gastos por mes',
        height: 400,
        width: 800,
        vAxis: {
            format: 'currency',
            gridlines: { //tirar as linhas
                count: 0,
                // color: 'transparent' não precisa, depois da att o count 0 remove só as linhas
            }
        },
        curveType: 'function', //tranformar em curvas
        legend: 'none'

    }

    var grafico = new google.visualization.LineChart(document.getElementById('graficoLinha'));
    grafico.draw(tabela, opcoes);
}