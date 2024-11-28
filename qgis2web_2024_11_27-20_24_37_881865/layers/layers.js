var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Teroma21_1 = new ol.format.GeoJSON();
var features_Teroma21_1 = format_Teroma21_1.readFeatures(json_Teroma21_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Teroma21_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Teroma21_1.addFeatures(features_Teroma21_1);
var lyr_Teroma21_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Teroma21_1, 
                style: style_Teroma21_1,
                popuplayertitle: "Teroma2.1",
                interactive: true,
                title: '<img src="styles/legend/Teroma21_1.png" /> Teroma2.1'
            });
var format_Temaurivillage_2 = new ol.format.GeoJSON();
var features_Temaurivillage_2 = format_Temaurivillage_2.readFeatures(json_Temaurivillage_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Temaurivillage_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Temaurivillage_2.addFeatures(features_Temaurivillage_2);
var lyr_Temaurivillage_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Temaurivillage_2, 
                style: style_Temaurivillage_2,
                popuplayertitle: "Temauri village",
                interactive: true,
                title: 'Temauri village'
            });
var format_Teiriiri_3 = new ol.format.GeoJSON();
var features_Teiriiri_3 = format_Teiriiri_3.readFeatures(json_Teiriiri_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Teiriiri_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Teiriiri_3.addFeatures(features_Teiriiri_3);
var lyr_Teiriiri_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Teiriiri_3, 
                style: style_Teiriiri_3,
                popuplayertitle: "Teiriiri",
                interactive: true,
                title: 'Teiriiri'
            });
var format_Tepuhapa_4 = new ol.format.GeoJSON();
var features_Tepuhapa_4 = format_Tepuhapa_4.readFeatures(json_Tepuhapa_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tepuhapa_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tepuhapa_4.addFeatures(features_Tepuhapa_4);
var lyr_Tepuhapa_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Tepuhapa_4, 
                style: style_Tepuhapa_4,
                popuplayertitle: "Te puhapa",
                interactive: true,
                title: 'Te puhapa'
            });
var format_Souky_5 = new ol.format.GeoJSON();
var features_Souky_5 = format_Souky_5.readFeatures(json_Souky_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Souky_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Souky_5.addFeatures(features_Souky_5);
var lyr_Souky_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Souky_5, 
                style: style_Souky_5,
                popuplayertitle: "Souky",
                interactive: true,
                title: 'Souky'
            });
var format_Punanui_6 = new ol.format.GeoJSON();
var features_Punanui_6 = format_Punanui_6.readFeatures(json_Punanui_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Punanui_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Punanui_6.addFeatures(features_Punanui_6);
var lyr_Punanui_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Punanui_6, 
                style: style_Punanui_6,
                popuplayertitle: "Puna nui",
                interactive: true,
                title: 'Puna nui'
            });
var format_Pofatu_7 = new ol.format.GeoJSON();
var features_Pofatu_7 = format_Pofatu_7.readFeatures(json_Pofatu_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pofatu_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pofatu_7.addFeatures(features_Pofatu_7);
var lyr_Pofatu_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pofatu_7, 
                style: style_Pofatu_7,
                popuplayertitle: "Pofatu",
                interactive: true,
                title: 'Pofatu'
            });
var format_Papeava_8 = new ol.format.GeoJSON();
var features_Papeava_8 = format_Papeava_8.readFeatures(json_Papeava_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Papeava_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Papeava_8.addFeatures(features_Papeava_8);
var lyr_Papeava_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Papeava_8, 
                style: style_Papeava_8,
                popuplayertitle: "Papeava",
                interactive: true,
                title: 'Papeava'
            });
var format_Paparoa_9 = new ol.format.GeoJSON();
var features_Paparoa_9 = format_Paparoa_9.readFeatures(json_Paparoa_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Paparoa_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Paparoa_9.addFeatures(features_Paparoa_9);
var lyr_Paparoa_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Paparoa_9, 
                style: style_Paparoa_9,
                popuplayertitle: "Paparoa",
                interactive: true,
                title: 'Paparoa'
            });
var format_Omama12_10 = new ol.format.GeoJSON();
var features_Omama12_10 = format_Omama12_10.readFeatures(json_Omama12_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Omama12_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Omama12_10.addFeatures(features_Omama12_10);
var lyr_Omama12_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Omama12_10, 
                style: style_Omama12_10,
                popuplayertitle: "O mama1&2",
                interactive: true,
                title: 'O mama1&2'
            });
var format_Hautdutira2_11 = new ol.format.GeoJSON();
var features_Hautdutira2_11 = format_Hautdutira2_11.readFeatures(json_Hautdutira2_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Hautdutira2_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hautdutira2_11.addFeatures(features_Hautdutira2_11);
var lyr_Hautdutira2_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Hautdutira2_11, 
                style: style_Hautdutira2_11,
                popuplayertitle: "Haut du tira 2",
                interactive: true,
                title: 'Haut du tira 2'
            });
var format_Hautdutira1_12 = new ol.format.GeoJSON();
var features_Hautdutira1_12 = format_Hautdutira1_12.readFeatures(json_Hautdutira1_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Hautdutira1_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hautdutira1_12.addFeatures(features_Hautdutira1_12);
var lyr_Hautdutira1_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Hautdutira1_12, 
                style: style_Hautdutira1_12,
                popuplayertitle: "Haut du tira 1",
                interactive: true,
                title: 'Haut du tira 1'
            });
var format_Fautauaval3_13 = new ol.format.GeoJSON();
var features_Fautauaval3_13 = format_Fautauaval3_13.readFeatures(json_Fautauaval3_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Fautauaval3_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Fautauaval3_13.addFeatures(features_Fautauaval3_13);
var lyr_Fautauaval3_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Fautauaval3_13, 
                style: style_Fautauaval3_13,
                popuplayertitle: "Fautaua val 3",
                interactive: true,
                title: 'Fautaua val 3'
            });
var format_Amoe_14 = new ol.format.GeoJSON();
var features_Amoe_14 = format_Amoe_14.readFeatures(json_Amoe_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Amoe_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Amoe_14.addFeatures(features_Amoe_14);
var lyr_Amoe_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Amoe_14, 
                style: style_Amoe_14,
                popuplayertitle: "Amoe",
                interactive: true,
                title: 'Amoe'
            });
var format_LotCoteaudeHamuta_15 = new ol.format.GeoJSON();
var features_LotCoteaudeHamuta_15 = format_LotCoteaudeHamuta_15.readFeatures(json_LotCoteaudeHamuta_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LotCoteaudeHamuta_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LotCoteaudeHamuta_15.addFeatures(features_LotCoteaudeHamuta_15);
var lyr_LotCoteaudeHamuta_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LotCoteaudeHamuta_15, 
                style: style_LotCoteaudeHamuta_15,
                popuplayertitle: "Lot Coteau de Hamuta",
                interactive: true,
                title: '<img src="styles/legend/LotCoteaudeHamuta_15.png" /> Lot Coteau de Hamuta'
            });
var group_CoteauxdeHamuta = new ol.layer.Group({
                                layers: [lyr_LotCoteaudeHamuta_15,],
                                fold: "open",
                                title: "Coteaux de Hamuta"});
var group_Amoe = new ol.layer.Group({
                                layers: [lyr_Amoe_14,],
                                fold: "open",
                                title: "Amoe"});
var group_Fautauaval3 = new ol.layer.Group({
                                layers: [lyr_Fautauaval3_13,],
                                fold: "open",
                                title: "Fautaua val 3"});
var group_Hautdutira1 = new ol.layer.Group({
                                layers: [lyr_Hautdutira1_12,],
                                fold: "open",
                                title: "Haut du tira 1"});
var group_Hautdutira2 = new ol.layer.Group({
                                layers: [lyr_Hautdutira2_11,],
                                fold: "open",
                                title: "Haut du tira 2 "});
var group_Omama12 = new ol.layer.Group({
                                layers: [lyr_Omama12_10,],
                                fold: "open",
                                title: "O mama1&2"});
var group_Paparoa = new ol.layer.Group({
                                layers: [lyr_Paparoa_9,],
                                fold: "open",
                                title: "Paparoa"});
var group_Papeava = new ol.layer.Group({
                                layers: [lyr_Papeava_8,],
                                fold: "open",
                                title: "Papeava"});
var group_Pofatu = new ol.layer.Group({
                                layers: [lyr_Pofatu_7,],
                                fold: "open",
                                title: "Pofatu"});
var group_Punanui = new ol.layer.Group({
                                layers: [lyr_Punanui_6,],
                                fold: "open",
                                title: "Puna nui"});
var group_Souky = new ol.layer.Group({
                                layers: [lyr_Souky_5,],
                                fold: "open",
                                title: "Souky"});
var group_Tepuhapa = new ol.layer.Group({
                                layers: [lyr_Tepuhapa_4,],
                                fold: "open",
                                title: "Te puhapa"});
var group_Teiriiri = new ol.layer.Group({
                                layers: [lyr_Teiriiri_3,],
                                fold: "open",
                                title: "Teiriiri"});
var group_Temaurivillage = new ol.layer.Group({
                                layers: [lyr_Temaurivillage_2,],
                                fold: "open",
                                title: "Temauri village"});
var group_Teroma21 = new ol.layer.Group({
                                layers: [lyr_Teroma21_1,],
                                fold: "open",
                                title: "Teroma2.1"});
var group_Fonddecarte = new ol.layer.Group({
                                layers: [lyr_GoogleSatellite_0,],
                                fold: "open",
                                title: "Fond de carte"});

lyr_GoogleSatellite_0.setVisible(true);lyr_Teroma21_1.setVisible(true);lyr_Temaurivillage_2.setVisible(true);lyr_Teiriiri_3.setVisible(true);lyr_Tepuhapa_4.setVisible(true);lyr_Souky_5.setVisible(true);lyr_Punanui_6.setVisible(true);lyr_Pofatu_7.setVisible(true);lyr_Papeava_8.setVisible(true);lyr_Paparoa_9.setVisible(true);lyr_Omama12_10.setVisible(true);lyr_Hautdutira2_11.setVisible(true);lyr_Hautdutira1_12.setVisible(true);lyr_Fautauaval3_13.setVisible(true);lyr_Amoe_14.setVisible(true);lyr_LotCoteaudeHamuta_15.setVisible(true);
var layersList = [group_Fonddecarte,group_Teroma21,group_Temaurivillage,group_Teiriiri,group_Tepuhapa,group_Souky,group_Punanui,group_Pofatu,group_Papeava,group_Paparoa,group_Omama12,group_Hautdutira2,group_Hautdutira1,group_Fautauaval3,group_Amoe,group_CoteauxdeHamuta];
lyr_Teroma21_1.set('fieldAliases', {'id': 'id', 'Numéro': 'Numéro', 'image': 'image', });
lyr_Temaurivillage_2.set('fieldAliases', {'id': 'id', 'Numéro': 'Numéro', 'image': 'image', });
lyr_Teiriiri_3.set('fieldAliases', {'id': 'id', 'Numéro': 'Numéro', 'image': 'image', });
lyr_Tepuhapa_4.set('fieldAliases', {'id': 'id', 'Numéro': 'Numéro', 'image': 'image', });
lyr_Souky_5.set('fieldAliases', {'id': 'id', 'Numéro': 'Numéro', 'image': 'image', });
lyr_Punanui_6.set('fieldAliases', {'id': 'id', 'Numéro': 'Numéro', 'image': 'image', });
lyr_Pofatu_7.set('fieldAliases', {'id': 'id', 'Numéro': 'Numéro', 'image': 'image', });
lyr_Papeava_8.set('fieldAliases', {'id': 'id', 'Numéro': 'Numéro', 'image': 'image', });
lyr_Paparoa_9.set('fieldAliases', {'id': 'id', 'Numéro': 'Numéro', 'image': 'image', });
lyr_Omama12_10.set('fieldAliases', {'id': 'id', 'Numéro': 'Numéro', 'image': 'image', });
lyr_Hautdutira2_11.set('fieldAliases', {'id': 'id', 'Numéro': 'Numéro', 'image': 'image', });
lyr_Hautdutira1_12.set('fieldAliases', {'id': 'id', 'Numéro': 'Numéro', 'image': 'image', });
lyr_Fautauaval3_13.set('fieldAliases', {'id': 'id', 'Numéro': 'Numéro', 'image': 'image', });
lyr_Amoe_14.set('fieldAliases', {'id': 'id', 'Numéro': 'Numéro', 'image': 'image', });
lyr_LotCoteaudeHamuta_15.set('fieldAliases', {'Numéro': 'Numéro', 'Image': 'Image', });
lyr_Teroma21_1.set('fieldImages', {'id': 'TextEdit', 'Numéro': 'TextEdit', 'image': 'TextEdit', });
lyr_Temaurivillage_2.set('fieldImages', {'id': 'TextEdit', 'Numéro': 'TextEdit', 'image': 'TextEdit', });
lyr_Teiriiri_3.set('fieldImages', {'id': 'TextEdit', 'Numéro': 'TextEdit', 'image': 'TextEdit', });
lyr_Tepuhapa_4.set('fieldImages', {'id': 'TextEdit', 'Numéro': 'TextEdit', 'image': 'TextEdit', });
lyr_Souky_5.set('fieldImages', {'id': 'TextEdit', 'Numéro': 'TextEdit', 'image': 'TextEdit', });
lyr_Punanui_6.set('fieldImages', {'id': 'TextEdit', 'Numéro': 'TextEdit', 'image': 'TextEdit', });
lyr_Pofatu_7.set('fieldImages', {'id': 'TextEdit', 'Numéro': 'TextEdit', 'image': 'TextEdit', });
lyr_Papeava_8.set('fieldImages', {'id': 'TextEdit', 'Numéro': 'TextEdit', 'image': 'TextEdit', });
lyr_Paparoa_9.set('fieldImages', {'id': 'TextEdit', 'Numéro': 'TextEdit', 'image': 'TextEdit', });
lyr_Omama12_10.set('fieldImages', {'id': 'TextEdit', 'Numéro': 'TextEdit', 'image': 'TextEdit', });
lyr_Hautdutira2_11.set('fieldImages', {'id': 'TextEdit', 'Numéro': 'TextEdit', 'image': 'TextEdit', });
lyr_Hautdutira1_12.set('fieldImages', {'id': 'TextEdit', 'Numéro': 'TextEdit', 'image': 'TextEdit', });
lyr_Fautauaval3_13.set('fieldImages', {'id': 'TextEdit', 'Numéro': 'TextEdit', 'image': 'TextEdit', });
lyr_Amoe_14.set('fieldImages', {'id': 'TextEdit', 'Numéro': 'TextEdit', 'image': 'TextEdit', });
lyr_LotCoteaudeHamuta_15.set('fieldImages', {'Numéro': 'TextEdit', 'Image': 'Range', });
lyr_Teroma21_1.set('fieldLabels', {'id': 'inline label - always visible', 'Numéro': 'inline label - always visible', 'image': 'inline label - always visible', });
lyr_Temaurivillage_2.set('fieldLabels', {'id': 'inline label - always visible', 'Numéro': 'inline label - always visible', 'image': 'inline label - always visible', });
lyr_Teiriiri_3.set('fieldLabels', {'id': 'inline label - always visible', 'Numéro': 'inline label - always visible', 'image': 'inline label - always visible', });
lyr_Tepuhapa_4.set('fieldLabels', {'id': 'inline label - always visible', 'Numéro': 'inline label - always visible', 'image': 'inline label - always visible', });
lyr_Souky_5.set('fieldLabels', {'id': 'inline label - always visible', 'Numéro': 'inline label - always visible', 'image': 'inline label - always visible', });
lyr_Punanui_6.set('fieldLabels', {'id': 'inline label - always visible', 'Numéro': 'inline label - always visible', 'image': 'inline label - always visible', });
lyr_Pofatu_7.set('fieldLabels', {'id': 'inline label - always visible', 'Numéro': 'inline label - always visible', 'image': 'inline label - always visible', });
lyr_Papeava_8.set('fieldLabels', {'id': 'inline label - always visible', 'Numéro': 'inline label - always visible', 'image': 'inline label - always visible', });
lyr_Paparoa_9.set('fieldLabels', {'id': 'inline label - always visible', 'Numéro': 'inline label - always visible', 'image': 'inline label - always visible', });
lyr_Omama12_10.set('fieldLabels', {'id': 'inline label - always visible', 'Numéro': 'inline label - always visible', 'image': 'inline label - always visible', });
lyr_Hautdutira2_11.set('fieldLabels', {'id': 'inline label - always visible', 'Numéro': 'inline label - always visible', 'image': 'inline label - always visible', });
lyr_Hautdutira1_12.set('fieldLabels', {'id': 'inline label - always visible', 'Numéro': 'inline label - always visible', 'image': 'inline label - always visible', });
lyr_Fautauaval3_13.set('fieldLabels', {'id': 'inline label - always visible', 'Numéro': 'inline label - always visible', 'image': 'inline label - always visible', });
lyr_Amoe_14.set('fieldLabels', {'id': 'inline label - always visible', 'Numéro': 'inline label - always visible', 'image': 'inline label - always visible', });
lyr_LotCoteaudeHamuta_15.set('fieldLabels', {'Numéro': 'inline label - always visible', 'Image': 'inline label - always visible', });
lyr_LotCoteaudeHamuta_15.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});