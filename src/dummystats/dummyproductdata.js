﻿const dummyData = [
    // ["product_name","units_sold","revenue","unit_cost","price","vendor","country","type","style","production"],
    ["LOURENS WHITE BLEND",7,244.93,18.59,34.99,"VINESTREET","ZA","white","still","traditional"],
    ["STORM POINT CHENIN BLANC",16,319.84,9.49,19.99,"VINESTREET","ZA","white","still","natural"],
    ["WEST & WILDER CHENIN BLANC CAN",14,126,4.59,9,"VINESTREET","US","white","still","traditional"],
    ["VIN DE DAYS BLANC BRIANNE DAY",5,149.95,16.99,29.99,"BOWLER","US","white","still","traditional"],
    ["BACCHUS CHARDONNAY",34,679.66,8.59,19.99,"BOWLER","US","white","still","natural"],
    ["BLOOMER CREEK BLACK CAP EDELZWICKER",4,119.96,16.99,29.99,"BOWLER","US","white","still","traditional"],
    ["LAS LILAS VINHO VERDE",13,259.87,9.99,19.99,"ARTISANSCELLAR","PT","white","still","traditional"],
    ["AUNTSFIELD CHARDONNAY",35,1049.65,17.05,29.99,"VINESTREET","NZ","white","still","natural"],
    ["AUNTSFIELD SAUVIGNON BLANC",35,874.65,13.49,24.99,"VINESTREET","NZ","white","still","traditional"],
    ["MOUNT RILEY SAUVIGNON BLANC",24,551.76,12.69,22.99,"SKURNIK","NZ","white","still","traditional"],
    ["ELLENA NASCHETTA",11,241.89,11.49,21.99,"VINESTREET","IT","white","still","natural"],
    ["BELLA VITA PINOT GRIGIO",48,815.52,8.71,16.99,"MFW","IT","white","still","traditional"],
    ["ALCESTI ISOLA BIANCO",15,299.85,11.55,19.99,"MFW","IT","white","still","traditional"],
    ["ARIANNA OCCHIPINTI SP68 BIANCO",0,0,27.99,44.99,"BOWLER","IT","white","still","natural"],
    ["GADAIS MUSCADET",7,153.93,12.29,21.99,"WEYGANDT","FR","white","still","traditional"],
    ["BORDEAUX BLANC MARY TAYLOR",12,275.88,12.82,22.99,"MFW","FR","white","still","traditional"],
    ["SANCERRE LAUVERJAT",3,119.97,21.29,39.99,"BOWLER","FR","white","still","natural"],
    ["LAUVERJAT SANCERRE",4,87.96,12.99,21.99,"BOWLER","FR","white","sparkling","traditional"],
    ["GULP HABLO VERDEJO",18,359.82,9.89,19.99,"TEDWARD","ES","white","sparkling","traditional"],
    ["ANTXIOLA TXAKOLINA",9,269.91,16.39,29.99,"POLANER","ES","white","sparkling","natural"],
    ["SELBACH RIESLING INCLINE",6,131.94,11.79,21.99,"SKURNIK","DE","white","sparkling","traditional"],
    ["JAKOB SCHNEIDER RIESLING KABINETT",0,0,15.59,28.99,"SKURNIK","DE","white","sparkling","traditional"],
    ["PRISMA SAUVIGNON BLANC",14,279.86,13.19,19.99,"SKURNIK","CL","white","sparkling","natural"],
    ["TORRE RRACINA NERO D'AVOLA",20,399.8,9.59,19.99,"POLANER","IT","red","sparkling","traditional"],
    ["MAGNUM BELLA VITA PINOT GRIGIO",0,0,15.75,29.99,"MFW","IT","red","sparkling","traditional"],
    ["CHIARA CONDELLO SANGIOVESE",12,359.88,17.99,29.99,"BOWLER","IT","red","sparkling","natural"],
    ["PACE BARBERA D'ALBA",20,439.8,12.59,21.99,"ARTISANSCELLAR","IT","red","sparkling","traditional"],
    ["LAMBUSCO QUARESIMO",6,179.94,16.99,29.99,"ARTISANSCELLAR","IT","red","still","traditional"],
    ["DOMAINE DES MOIROTS BOURGOGNE PINOT",10,369.9,20.42,36.99,"WEYGANDT","FR","red","still","natural"],
    ["BEAUJOLAIS LES GRIOTTES PIERRE-MARI",8,215.92,14.65,26.99,"WEYGANDT","FR","red","still","traditional"],
    ["CEDRUS MARCEL MALBEC",19,417.81,12.59,21.99,"VINESTREET","FR","red","still","traditional"],
    ["NICOLAS REAU ENLEVEMENT",5,199.95,21.59,39.99,"TEDWARD","FR","red","still","natural"],
    ["CHATEAU LES GRAVIERES BORDEAUX SUPER",7,174.93,12.19,24.99,"BOWLER","FR","red","still","traditional"],
    ["GAMA SUTRA OLIVIER LEMASSON",2,79.98,23.79,39.99,"BOWLER","FR","red","still","traditional"],
    ["DOMAINE DU JAS COTES DU RHONE",18,539.82,15.99,29.99,"ARTISANSCELLAR","FR","red","still","natural"],
    ["BODEGAS SENORIO DE BARAHONDA CARRO",9,179.91,11.51,19.99,"OLE","ES","red","still","traditional"],
    ["MURIEL RIOJA",28,615.72,11.89,21.99,"BREAKTHRU","ES","red","still","traditional"],
    ["CHONO CARMENERE",15,299.85,10.99,19.99,"REGAL","CL","red","still","natural"],
    ["SMALL GULLY VYDS. SHIRAZ MR. BLACKS",15,329.85,10.39,21.99,"VINESTREET","AU","red","still","traditional"],
    ["ZWEIGELT VORSPANNHOF MAYR",16,399.84,13.99,24.99,"BOWLER","AT","red","still","traditional"],
    ["RJ VINEDOS MALBEC MDZ",20,399.8,11.19,19.99,"BOWLER","AR","red","still","natural"],
    ["SEEDS & SKINS OLD WESTMINSTER",15,209.85,8.03,13.99,"MFW","US","orange","still","traditional"],
    ["RAMATO PINOT GRIGIO MATTEO BRAIDOT",12,215.88,8.39,17.99,"VINESTREET","IT","orange","still","traditional"],
    ["LO-FI DRY VERMOUTH",6,209.94,18.99,34.99,"BREAKTHRU","US","fortified","still","natural"],
    ["LAS LILAS VINHO VERDE ROSE",16,319.84,13.19,19.99,"ARTISANSCELLAR","PT","rose","still","traditional"],
    ["DE ANGELIS ROSE MARCHE",9,224.91,13.49,24.99,"BOWLER","IT","rose","still","traditional"],
    ["A VITA CALABRIA ROSATO",5,149.95,17.27,29.99,"BOWLER","IT","rose","still","natural"],
    ["LA BELLE ETOILE ROSE",28,615.72,11.39,21.99,"WEYGANDT","FR","rose","still","traditional"],
    ["MOTHER ROCK WHITE",5,149.95,15.19,29.99,"VINESTREET","ZA","white","still","traditional"],
]

export default dummyData;