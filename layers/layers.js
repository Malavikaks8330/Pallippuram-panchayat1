var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_road_1 = new ol.format.GeoJSON();
var features_road_1 = format_road_1.readFeatures(json_road_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_road_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_road_1.addFeatures(features_road_1);
var lyr_road_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_road_1, 
                style: style_road_1,
                popuplayertitle: 'road',
                interactive: true,
                title: '<img src="styles/legend/road_1.png" /> road'
            });
var format_boundary_2 = new ol.format.GeoJSON();
var features_boundary_2 = format_boundary_2.readFeatures(json_boundary_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_boundary_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_boundary_2.addFeatures(features_boundary_2);
var lyr_boundary_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_boundary_2, 
                style: style_boundary_2,
                popuplayertitle: 'boundary',
                interactive: false,
                title: '<img src="styles/legend/boundary_2.png" /> boundary'
            });
var format_geology_3 = new ol.format.GeoJSON();
var features_geology_3 = format_geology_3.readFeatures(json_geology_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_geology_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_geology_3.addFeatures(features_geology_3);
var lyr_geology_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_geology_3, 
                style: style_geology_3,
                popuplayertitle: 'geology',
                interactive: false,
    title: 'geology<br />\
    <img src="styles/legend/geology_3_0.png" /> Sand and Silt<br />\
    <img src="styles/legend/geology_3_1.png" /> Tank/WB/River<br />\
    <img src="styles/legend/geology_3_2.png" /> <br />' });
var format_geomorphology_4 = new ol.format.GeoJSON();
var features_geomorphology_4 = format_geomorphology_4.readFeatures(json_geomorphology_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_geomorphology_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_geomorphology_4.addFeatures(features_geomorphology_4);
var lyr_geomorphology_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_geomorphology_4, 
                style: style_geomorphology_4,
                popuplayertitle: 'geomorphology',
                interactive: true,
    title: 'geomorphology<br />\
    <img src="styles/legend/geomorphology_4_0.png" /> Beach(Coastal Plain)<br />\
    <img src="styles/legend/geomorphology_4_1.png" /> Coastal Plain<br />\
    <img src="styles/legend/geomorphology_4_2.png" /> Mud flat(Coastal Plain)<br />\
    <img src="styles/legend/geomorphology_4_3.png" /> Swale(Coastal Plain)<br />\
    <img src="styles/legend/geomorphology_4_4.png" /> Water Body<br />' });
var format_ward_5 = new ol.format.GeoJSON();
var features_ward_5 = format_ward_5.readFeatures(json_ward_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ward_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ward_5.addFeatures(features_ward_5);
var lyr_ward_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ward_5, 
                style: style_ward_5,
                popuplayertitle: 'ward ',
                interactive: false,
    title: 'ward <br />\
    <img src="styles/legend/ward_5_0.png" /> CHERAI KADAPPURAM<br />\
    <img src="styles/legend/ward_5_1.png" /> CONVENT PALAM<br />\
    <img src="styles/legend/ward_5_2.png" /> ELINJAMKULAM<br />\
    <img src="styles/legend/ward_5_3.png" /> GOWREESWARAM<br />\
    <img src="styles/legend/ward_5_4.png" /> JANATHA<br />\
    <img src="styles/legend/ward_5_5.png" /> KARUTHALA<br />\
    <img src="styles/legend/ward_5_6.png" /> KOMARANTHY<br />\
    <img src="styles/legend/ward_5_7.png" /> KOVILAKAM SOUTH<br />\
    <img src="styles/legend/ward_5_8.png" /> KOVILUNKAL<br />\
    <img src="styles/legend/ward_5_9.png" /> MANAYATHUKADU<br />\
    <img src="styles/legend/ward_5_10.png" /> MANI BAZAR<br />\
    <img src="styles/legend/ward_5_11.png" /> MARKET<br />\
    <img src="styles/legend/ward_5_12.png" /> MOSQUE<br />\
    <img src="styles/legend/ward_5_13.png" /> MUNAMBAM HARBOUR<br />\
    <img src="styles/legend/ward_5_14.png" /> MUNAMBAM JANAHITHA<br />\
    <img src="styles/legend/ward_5_15.png" /> MUNAMBAM KADAPPURAM<br />\
    <img src="styles/legend/ward_5_16.png" /> PALLIPPURAM FORT<br />\
    <img src="styles/legend/ward_5_17.png" /> PANCHAYAT<br />\
    <img src="styles/legend/ward_5_18.png" /> REKTHESWARY<br />\
    <img src="styles/legend/ward_5_19.png" /> SAHODARA BHAVANAM<br />\
    <img src="styles/legend/ward_5_20.png" /> SAMOOHYA SEVASANGHAM<br />\
    <img src="styles/legend/ward_5_21.png" /> SMHS<br />\
    <img src="styles/legend/ward_5_22.png" /> THRIKKADAKKAPPILLY<br />\
    <img src="styles/legend/ward_5_23.png" /> VADAYIL<br />\
    <img src="styles/legend/ward_5_24.png" /> <br />' });

lyr_OSMStandard_0.setVisible(true);lyr_road_1.setVisible(true);lyr_boundary_2.setVisible(true);lyr_geology_3.setVisible(true);lyr_geomorphology_4.setVisible(true);lyr_ward_5.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_road_1,lyr_boundary_2,lyr_geology_3,lyr_geomorphology_4,lyr_ward_5];
lyr_road_1.set('fieldAliases', {'osm_id': 'osm_id', 'name': 'name', 'highway': 'highway', 'waterway': 'waterway', 'aerialway': 'aerialway', 'barrier': 'barrier', 'man_made': 'man_made', 'railway': 'railway', 'z_order': 'z_order', 'other_tags': 'other_tags', });
lyr_boundary_2.set('fieldAliases', {'id': 'id', });
lyr_geology_3.set('fieldAliases', {'ROCK_GROUP': 'ROCK_GROUP', 'NAME': 'NAME', });
lyr_geomorphology_4.set('fieldAliases', {'NAME': 'NAME', 'TYPE1': 'TYPE1', 'TYPE2': 'TYPE2', });
lyr_ward_5.set('fieldAliases', {'gml_parent': 'gml_parent', 'gml_pare_1': 'gml_pare_1', 'gml_id': 'gml_id', 'geom': 'geom', 'District': 'District', 'LSGD': 'LSGD', 'Ward_Name': 'Ward_Name', 'Ward_No': 'Ward_No', 'Lsgd_Type': 'Lsgd_Type', 'Created_Da': 'Created_Da', 'Surveyor': 'Surveyor', 'Mob_No': 'Mob_No', 'Remarks': 'Remarks', '_distLsgd': '_distLsgd', 'OBJECTID': 'OBJECTID', '_result': '_result', '_ulid': '_ulid', '_distLsgd2': '_distLsgd2', });
lyr_road_1.set('fieldImages', {'osm_id': '', 'name': '', 'highway': '', 'waterway': '', 'aerialway': '', 'barrier': '', 'man_made': '', 'railway': '', 'z_order': '', 'other_tags': '', });
lyr_boundary_2.set('fieldImages', {'id': 'TextEdit', });
lyr_geology_3.set('fieldImages', {'ROCK_GROUP': 'TextEdit', 'NAME': 'TextEdit', });
lyr_geomorphology_4.set('fieldImages', {'NAME': 'TextEdit', 'TYPE1': 'TextEdit', 'TYPE2': 'TextEdit', });
lyr_ward_5.set('fieldImages', {'gml_parent': 'TextEdit', 'gml_pare_1': 'TextEdit', 'gml_id': 'TextEdit', 'geom': 'TextEdit', 'District': 'TextEdit', 'LSGD': 'TextEdit', 'Ward_Name': 'TextEdit', 'Ward_No': 'TextEdit', 'Lsgd_Type': 'TextEdit', 'Created_Da': 'TextEdit', 'Surveyor': 'TextEdit', 'Mob_No': 'TextEdit', 'Remarks': 'TextEdit', '_distLsgd': 'TextEdit', 'OBJECTID': 'TextEdit', '_result': 'TextEdit', '_ulid': 'TextEdit', '_distLsgd2': 'TextEdit', });
lyr_road_1.set('fieldLabels', {'osm_id': 'no label', 'name': 'no label', 'highway': 'no label', 'waterway': 'no label', 'aerialway': 'no label', 'barrier': 'no label', 'man_made': 'no label', 'railway': 'no label', 'z_order': 'no label', 'other_tags': 'no label', });
lyr_boundary_2.set('fieldLabels', {'id': 'no label', });
lyr_geology_3.set('fieldLabels', {'ROCK_GROUP': 'no label', 'NAME': 'no label', });
lyr_geomorphology_4.set('fieldLabels', {'NAME': 'no label', 'TYPE1': 'no label', 'TYPE2': 'no label', });
lyr_ward_5.set('fieldLabels', {'gml_parent': 'no label', 'gml_pare_1': 'no label', 'gml_id': 'no label', 'geom': 'no label', 'District': 'no label', 'LSGD': 'no label', 'Ward_Name': 'header label - visible with data', 'Ward_No': 'no label', 'Lsgd_Type': 'no label', 'Created_Da': 'no label', 'Surveyor': 'no label', 'Mob_No': 'no label', 'Remarks': 'no label', '_distLsgd': 'no label', 'OBJECTID': 'no label', '_result': 'no label', '_ulid': 'no label', '_distLsgd2': 'no label', });
lyr_ward_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});