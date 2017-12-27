<script>
    var map = L.map('map', {
            scrollWheelZoom: false,
            zoomSnap: 0.10
            });
    map.setView([49.8062891, -84.1434475], 5.25);

    // L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/outdoors-v10/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoibGF2ZWxsZ2lzIiwiYSI6ImNpeDZ3YnFvbzAxNHgyeXF5NDVob3VvanEifQ.2_vKfp2QtZlz70-C1Kkphw', {
      // mapbox://styles/mapbox/outdoors-v10
        zoomSnap: 0.10,
        maxZoom: 18,
        attribution: 'Map data &copy; OpenStreetMap contributors'
    }).addTo(map);


    var rez = [
['Chippewas of Rama First Nation',  44.38480,-79.21053,  'Union of Ontario Indians',  'Ambe Minobmaadzidda "Leading the Good Life"'],
['Batchewana First Nation',  46.528494, -84.261409,  'Association of Iroquois and Allied Indians',  'TBC'],
['Caldwell First Nation',  42.052845, -82.597453,  'Association of Iroquois and Allied Indians',  'TBC'],
['Delaware Nation at Moraviantown',  42.581660, -81.893242,  'Association of Iroquois and Allied Indians',  'TBC'],
['Hiawatha First Nation',  44.187107, -78.216286,  'Association of Iroquois and Allied Indians',  'TBC'],
['Tyendinaga - Mohawks of the Bay of Quinte',  44.196279, -77.159679,  'Association of Iroquois and Allied Indians',  'TBC'],
['Oneida Nation of the Thames',  42.986911, -81.243209,  'Association of Iroquois and Allied Indians',  'TBC'],
['Wahta Mohawks',  44.994805, -79.777490,  'Association of Iroquois and Allied Indians',  'TBC'],
['Lac La Croix',  48.374324, -92.160865,  'Grand Council Treaty #3',  'Family Well Being Program'],
['Couchiching',  48.634405, -93.359912,  'Grand Council Treaty #3',  'Family Well Being Program'],
['Rainy River',  48.721392, -94.567169,  'Grand Council Treaty #3',  'Family Well Being Program'],
['Naicatchewenin',  48.61912, -93.6744557,  'Grand Council Treaty #3',  'Family Well Being Program'],
['Mitaanjigamiing',  48.711567, -93.3877667,  'Grand Council Treaty #3',  'Family Well Being Program'],
['Big Island',  49.097766,  -94.315497,  'Grand Council Treaty #3',  'Family Well Being Program'],
['Nigigoonisiminikaaning',  48.710164, -92.946868,  'Grand Council Treaty #3',  'Family Well Being Program'],
['Seine River',  48.766349,  -92.616613,  'Grand Council Treaty #3',  'Family Well Being Program'],
['Paawidigong First Nation Forum (PFNF)',  49.78446, -92.8376491,  'Grand Council Treaty #3',  'Family Well Being Program'],
['Eagle Lake',  49.6494166, -93.541171,  'Grand Council Treaty #3',  'Family Well Being Program'],
['Wabauskang',  50.316667, -93.1855216,  'Grand Council Treaty #3',  'Family Well Being Program'],
['Wabigoon Lake',  49.7019369, -92.8789903,  'Grand Council Treaty #3',  'Family Well Being Program'],
['Lac Des Milles Lac',  48.8798909, -90.7321972,  'Grand Council Treaty #3',  'Family Well Being Program'],
['Anishinaabeg of Kabapikotawangen Resource Council (AKRC)',  49.409817,  -94.095002,  'Grand Council Treaty #3',  'Family Well Being Program'],
['Onigaming',  49.111040,  -93.926212,  'Grand Council Treaty #3',  'Family Well Being Program'],
['Big Grassy',  49.097780,  -94.315239,  'Grand Council Treaty #3',  'Family Well Being Program'],
['Northwest Angel #33',  49.765746,  -94.486130,  'Grand Council Treaty #3',  'Family Well Being Program'],
['Animakee Wa Zhing (Northwest Angle #37)',  49.4108329, -94.0980217,  'Grand Council Treaty #3',  'Family Well Being Program'],
['Kenora Chiefs Advisory (KCA)',  49.7717933, -94.4928781,  'Grand Council Treaty #3',  'Family Well Being Program'],
['Obashkaandagaang',  49.7195769, -94.5862947,  'Grand Council Treaty #3',  'Family Well Being Program'],
['Grassy Narrows',  50.150557, -94.0151037,  'Grand Council Treaty #3',  'Family Well Being Program'],
['Ochiichagwe\'Babigo\'Ining',  49.8913376, -94.5416236,  'Grand Council Treaty #3',  'Family Well Being Program'],
['Shoal Lake #40',  49.705852, -95.0692247,  'Grand Council Treaty #3',  'Family Well Being Program'],
['Naotkamegwanning',  49.4108329, -94.0980217,  'Grand Council Treaty #3',  'Family Well Being Program'],
['Wauzhushk Onigum',  49.7595179, -94.4897385,  'Grand Council Treaty #3',  'Family Well Being Program'],
['Animbiigoo Zaagi\'igan Anishinaabek First Nation',  49.7987898, -89.0984183,  'Independent First Nations',  'Ending Violence Against Indigenous Women (EVAIW) Family Well-Being Program'],
['Bkejwanong Territory',  42.562236,  -82.498371,  'Independent First Nations',  'Ending Violence Against Indigenous Women (EVAIW) Family Well-Being Program'],
['Bingwi Neyaashi First Nation',  48.430683, -89.2297297,  'Independent First Nations',  'Ending Violence Against Indigenous Women (EVAIW) Family Well-Being Program'],
['Chippewas of Saugeen',  44.512620,  -81.327528,  'Independent First Nations',  'Ending Violence Against Indigenous Women (EVAIW) Family Well-Being Program'],
['Chippewas of Nawash',  44.9080805, -81.0242664,  'Independent First Nations',  'Ending Violence Against Indigenous Women (EVAIW) Family Well-Being Program'],
['Kitchenuhmaykoosib Inninuwug First Nation',  53.818788,  -89.835114,  'Independent First Nations',  'Ending Violence Against Indigenous Women (EVAIW) Family Well-Being Program'],
['Iskatewizaagegan Independent First Nation #39',  49.617921,  -95.107944,  'Independent First Nations',  'Ending Violence Against Indigenous Women (EVAIW) Family Well-Being Program'],
['Shawanaga First Nation',  45.5138039, -80.275754,  'Independent First Nations',  'Ending Violence Against Indigenous Women (EVAIW) Family Well-Being Program'],
['Temagami First Nation',  46.980668, -80.0711626,  'Independent First Nations',  'Ending Violence Against Indigenous Women (EVAIW) Family Well-Being Program'],
['Wabaseemoong First Nation',  50.133333, -94.9521887,  'Independent First Nations',  'Ending Violence Against Indigenous Women (EVAIW) Family Well-Being Program'],
['Whitesand First Nation',  49.3680951, -90.2485097,  'Independent First Nations',  'Ending Violence Against Indigenous Women (EVAIW) Family Well-Being Program'],
['Atikokan',  48.761685, -91.618703,  'Metis Nation of Ontario',  'Metis Family Well-Being Program'],
['Blind River',  46.183489, -82.963631,  'Metis Nation of Ontario',  'Metis Family Well-Being Program'],
['Brampton',  43.729314, -79.761614,  'Metis Nation of Ontario',  'Metis Family Well-Being Program'],
['Chapleau',  47.843279, -83.402500,  'Metis Nation of Ontario',  'Metis Family Well-Being Program'],
['Cochrane',  49.068002, -81.015080,  'Metis Nation of Ontario',  'Metis Family Well-Being Program'],
['Dryden',  49.789650, -92.776715,  'Metis Nation of Ontario',  'Metis Family Well-Being Program'],
['Fort Frances',  50.16662, -86.69996,  'Metis Nation of Ontario',  'Metis Family Well-Being Program'],
['Geraldton',  49.724995, -86.950139,  'Metis Nation of Ontario',  'Metis Family Well-Being Program'],
['Gravenhurst',  44.917638, -79.382582,  'Metis Nation of Ontario',  'Metis Family Well-Being Program'],
['Hamilton',  43.255468, -79.866809,  'Metis Nation of Ontario',  'Metis Family Well-Being Program'],
['Kenora',  49.765202, -94.489972,  'Metis Nation of Ontario',  'Metis Family Well-Being Program'],
['Kitchener',  43.4503 ,  -80.4832 ,  'Metis Nation of Ontario',  'Metis Family Well-Being Program'],
['Mattawa',  46.3175 ,  -78.7022 ,  'Metis Nation of Ontario',  'Metis Family Well-Being Program'],
['Midland',  44.7495 ,  -79.8922 ,  'Metis Nation of Ontario',  'Metis Family Well-Being Program'],
['Nipigon',  49.0157 ,  -88.2683 ,  'Metis Nation of Ontario',  'Metis Family Well-Being Program'],
['North Bay',  46.3091 ,  -79.4608 ,  'Metis Nation of Ontario',  'Metis Family Well-Being Program'],
['Northbrook', 44.7333 ,  -77.1667 ,  'Metis Nation of Ontario',  'Metis Family Well-Being Program'],
['Oshawa',  43.8971 ,  -78.8658 ,  'Metis Nation of Ontario',  'Metis Family Well-Being Program'],
['Ottawa',  45.4215 ,  -75.6972 ,  'Metis Nation of Ontario',  'Metis Family Well-Being Program'],
['Owen Sound',  44.5690 ,  -80.9406 ,  'Metis Nation of Ontario',  'Metis Family Well-Being Program'],
['Peterborough',  44.3091 ,  -78.3197 ,  'Metis Nation of Ontario',  'Metis Family Well-Being Program'],
['Sault Ste Marie',  46.5219 ,  -84.3461 ,  'Metis Nation of Ontario',  'Metis Family Well-Being Program'],
['Sudbury',  46.5221 ,  -80.9530 ,  'Metis Nation of Ontario',  'Metis Family Well-Being Program'],
['Temiskaming',  47.3101 ,  -79.4843 ,  'Metis Nation of Ontario',  'Metis Family Well-Being Program'],
['Thunder Bay',  48.3809 ,  -89.2477 ,  'Metis Nation of Ontario',  'Metis Family Well-Being Program'],
['Timmins',  48.4758 ,  -81.3305 ,  'Metis Nation of Ontario',  'Metis Family Well-Being Program'],
['Toronto',  43.6532 ,  -79.3832 ,  'Metis Nation of Ontario',  'Metis Family Well-Being Program'],
['Thorold',  43.1236 ,  -79.1989 ,  'Metis Nation of Ontario',  'Metis Family Well-Being Program'],
['Windsor',  42.3149 ,  -83.0364 ,  'Metis Nation of Ontario',  'Metis Family Well-Being Program'],
['New Credit Indian Reserve 40A',  42.999032, -80.095569,  'Mississaugas of the New Credit First Nation',  'Maamwi Gnawending Program - "Caring Together" Program'],
['Brantford ',  43.145349, -80.257248,  'Mississaugas of the New Credit First Nation',  'Maamwi Gnawending Program - "Caring Together" Program'],
['Haldiman County',  42.939827, -79.815525,  'Mississaugas of the New Credit First Nation',  'Maamwi Gnawending Program - "Caring Together" Program'],
['Hamilton',  43.2557,  -79.8711,  'Mississaugas of the New Credit First Nation',  'Maamwi Gnawending Program - "Caring Together" Program'],
['Kawehno:ke (Cornwall, Island Ontario)',  45.004686, -74.721690,  'Mohawk Council of Akwasasne',  'Akwasasne Family Wellness/ Wellbeing Program'],
['Kanatakon (St. Regis, Québec)',  45.001107, -74.646984,  'Mohawk Council of Akwasasne',  'Akwasasne Family Wellness/ Wellbeing Program'],
['Tsi Snaihne (Snye, Québec)',  45.032167, -74.711186,  'Mohawk Council of Akwasasne',  'Akwasasne Family Wellness/ Wellbeing Program'],
['Aroland First Nation',  50.166619, -86.699957,  'Nishnawbe Aski Nation',  'NAN Family Well- Being Program'],
['Attawapiskat First Nation',  52.925815, -82.430622,  'Nishnawbe Aski Nation',  'NAN Family Well- Being Program'],
['Bearskin Lake First Nation',  53.899500, -90.991564,  'Nishnawbe Aski Nation',  'NAN Family Well- Being Program'],
['Brunswick House First Nation',  47.840502, -83.399739,  'Nishnawbe Aski Nation',  'NAN Family Well- Being Program'],
['Cat Lake First Nation',  51.721164, -91.820146,  'Nishnawbe Aski Nation',  'NAN Family Well- Being Program'],
['Chapleau Cree First Nation',  47.8263661, -83.4238226,  'Nishnawbe Aski Nation',  'NAN Family Well- Being Program'],
['Chapleau Ojibwe First Nation',  47.8281403, -83.4057698,  'Nishnawbe Aski Nation',  'NAN Family Well- Being Program'],
['Constance Lake First Nation',  49.8062891, -84.1434475,  'Nishnawbe Aski Nation',  'NAN Family Well- Being Program'],
['Deer Lake First Nation',  52.6101678, -94.0803188,  'Nishnawbe Aski Nation',  'NAN Family Well- Being Program'],
['Eabametoong First Nation',  49.774669, -85.9374469,  'Nishnawbe Aski Nation',  'NAN Family Well- Being Program'],
['Flying Post First Nation',  49.0106959, -88.2632534,  'Nishnawbe Aski Nation',  'NAN Family Well- Being Program'],
['Fort Albany First Nation',  52.207757, -81.684454,  'Nishnawbe Aski Nation',  'NAN Family Well- Being Program'],
['Fort Severn First Nation',  56.0019558, -87.7023814,  'Nishnawbe Aski Nation',  'NAN Family Well- Being Program'],
['Ginoogaming First Nation',  49.7356529, -86.5281013,  'Nishnawbe Aski Nation',  'NAN Family Well- Being Program'],
['Hornepayne First Nation',  49.221992,  -84.773874,  'Nishnawbe Aski Nation',  'NAN Family Well- Being Program'],
['Kasabonika Lake First Nation',  53.607741, -88.814978,  'Nishnawbe Aski Nation',  'NAN Family Well- Being Program'],
['Kashechewan First Nation',  52.2889771, -81.6595713,  'Nishnawbe Aski Nation',  'NAN Family Well- Being Program'],
['Keewaywin First Nation',  52.9936443, -92.9022931,  'Nishnawbe Aski Nation',  'NAN Family Well- Being Program'],
['Kingfisher Lake First Nation',  53.033333, -89.8355216,  'Nishnawbe Aski Nation',  'NAN Family Well- Being Program'],
['Koocheching First Nation',  53.1071652, -92.5440645,  'Nishnawbe Aski Nation',  'NAN Family Well- Being Program'],
['Lac Seul First Nation',  50.3959062, -92.938342,  'Nishnawbe Aski Nation',  'NAN Family Well- Being Program'],
['McDowell Lake First Nation',  50.3959062, -92.938342,  'Nishnawbe Aski Nation',  'NAN Family Well- Being Program'],
['Marten Falls First Nation',  51.629799, -85.9473807,  'Nishnawbe Aski Nation',  'NAN Family Well- Being Program'],
['Matachewan First Nation',  48.0128737, -80.6037427,  'Nishnawbe Aski Nation',  'NAN Family Well- Being Program'],
['Mattagami First Nation',  47.7973055, -81.5332857,  'Nishnawbe Aski Nation',  'NAN Family Well- Being Program'],
['Mishkeegogamang First Nation',  51.234647, -90.2409217,  'Nishnawbe Aski Nation',  'NAN Family Well- Being Program'],
['Missanabie Cree First Nation',  46.5091609, -84.3323897,  'Nishnawbe Aski Nation',  'NAN Family Well- Being Program'],
['Mocreebec Council of the Cree Nation',  51.256743,  -80.616702,  'Nishnawbe Aski Nation',  'NAN Family Well- Being Program'],
['Moose Cree First Nation',  48.476317, -81.3367616,  'Nishnawbe Aski Nation',  'NAN Family Well- Being Program'],
['Muskrat Dam First Nation',  53.386598, -91.8142406,  'Nishnawbe Aski Nation',  'NAN Family Well- Being Program'],
['Neskantaga First Nation',  52.261551,  -87.887740,  'Nishnawbe Aski Nation',  'NAN Family Well- Being Program'],
['Nibinamik First Nation',  49.774704,  -85.937340,  'Nishnawbe Aski Nation',  'NAN Family Well- Being Program'],
['North Caribou Lake First Nation',  52.950019,  -91.333161,  'Nishnawbe Aski Nation',  'NAN Family Well- Being Program'],
['North Spirit Lake First Nation',  52.499993,  -92.415999,  'Nishnawbe Aski Nation',  'NAN Family Well- Being Program'],
['Pikangikum First Nation',  51.804306,  -93.993384,  'Nishnawbe Aski Nation',  'NAN Family Well- Being Program'],
['Poplar Hill First Nation',  52.1072352, -94.2958504,  'Nishnawbe Aski Nation',  'NAN Family Well- Being Program'],
['Sachigo Lake First Nation',  53.874096, -92.170359,  'Nishnawbe Aski Nation',  'NAN Family Well- Being Program'],
['Sandy Lake First Nation',  53.0637519, -93.323933,  'Nishnawbe Aski Nation',  'NAN Family Well- Being Program'],
['Slate Falls First Nation',  51.1692421, -91.5913921,  'Nishnawbe Aski Nation',  'NAN Family Well- Being Program'],
['TaykwaTagamou Nation',  49.003946, -80.8338963,  'Nishnawbe Aski Nation',  'NAN Family Well- Being Program'],
['Wahgoshig First Nation',  48.6364569, -79.9867595,  'Nishnawbe Aski Nation',  'NAN Family Well- Being Program'],
['Wapekeka First Nation',  53.818763, -89.8350929,  'Nishnawbe Aski Nation',  'NAN Family Well- Being Program'],
['Wawakapewin First Nation',  53.4478044, -89.1427038,  'Nishnawbe Aski Nation',  'NAN Family Well- Being Program'],
['Webequie First Nation',  49.774669, -85.9374469,  'Nishnawbe Aski Nation',  'NAN Family Well- Being Program'],
['Whitewater Lake First Nation',  50.7303521, -89.131843,  'Nishnawbe Aski Nation',  'NAN Family Well- Being Program'],
['Weenusk First Nation',  54.9938942, -85.4299296,  'Nishnawbe Aski Nation',  'NAN Family Well- Being Program'],
['Wunnumin Lake First Nation',  52.93887, -90.7962086,  'Nishnawbe Aski Nation',  'NAN Family Well- Being Program'],
['Barrie Native Friendship Center - Georgian Bay Sattlelite',  44.394842, -79.694441,  'Ontario Federation of Indigenous Friendship Centres',  'Cultural Resources Coordinators'],
['CanAm Indian Friendship Center of Windsor',  42.278205, -83.008353,  'Ontario Federation of Indigenous Friendship Centres',  'Cultural Resources Coordinators'],
['Council Fire Native Culture Center',  43.659150, -79.366237,  'Ontario Federation of Indigenous Friendship Centres',  'Cultural Resources Coordinators'],
['Dryden Native Friendship Center',  49.785095, -92.836728,  'Ontario Federation of Indigenous Friendship Centres',  'Cultural Resources Coordinators'],
['Fort Erie Native Friendship Center',  42.897425, -78.969886,  'Ontario Federation of Indigenous Friendship Centres',  'Cultural Resources Coordinators'],
['Hamilton Regional Indian Center',  43.243432, -79.818947,  'Ontario Federation of Indigenous Friendship Centres',  'Cultural Resources Coordinators'],
// ['Indian Friendship Center',  ,  'Ontario Federation of Indigenous Friendship Centres',  'Cultural Resources Coordinators'],
['Ininew Friendship Center',  49.063539, -81.029545,  'Ontario Federation of Indigenous Friendship Centres',  'Cultural Resources Coordinators'],
['Kapuskasing Indian Friendship Center',  49.421154, -82.429312,  'Ontario Federation of Indigenous Friendship Centres',  'Cultural Resources Coordinators'],
['Moosonee - Timmins Satellite Office',  48.477060, -81.325662,  'Ontario Federation of Indigenous Friendship Centres',  'Cultural Resources Coordinators'],
['M\'Wikwedong Native Cultural Resource Center',  44.576379, -80.927069,  'Ontario Federation of Indigenous Friendship Centres',  'Cultural Resources Coordinators'],
['Ne-Chee Native Friendship Center',  49.46104, -94.27571,  'Ontario Federation of Indigenous Friendship Centres',  'Cultural Resources Coordinators'],
['Niagara Regional Native Center',  43.163357, -79.168520,  'Ontario Federation of Indigenous Friendship Centres',  'Cultural Resources Coordinators'],
['Nishnawbe - Gamik Native Friendship Center',  50.099233, -91.916700,  'Ontario Federation of Indigenous Friendship Centres',  'Cultural Resources Coordinators'],
['N\'Swakamok Friendship Center',  46.493405, -80.999045,  'Ontario Federation of Indigenous Friendship Centres',  'Cultural Resources Coordinators'],
['Nogojiwanong Friendship Center',  44.277055, -78.324517,  'Ontario Federation of Indigenous Friendship Centres',  'Cultural Resources Coordinators'],
['North Bay Indian Friendship Center',  46.316653, -79.459308,  'Ontario Federation of Indigenous Friendship Centres',  'Cultural Resources Coordinators'],
['Odawa Native Friendship Center',  45.408642, -75.718609,  'Ontario Federation of Indigenous Friendship Centres',  'Cultural Resources Coordinators'],
['Parry Sound Friendship Center - N\'Swakamok Satellite',  46.493375, -80.999013,  'Ontario Federation of Indigenous Friendship Centres',  'Cultural Resources Coordinators'],
['Peel Aboriginal Network',  43.6301935,  -79.674074,  'Ontario Federation of Indigenous Friendship Centres',  'Cultural Resources Coordinators'],
['Red Lake Indian Friendship Centre',  51.0238919, -93.8214505,  'Ontario Federation of Indigenous Friendship Centres',  'Cultural Resources Coordinators'],
['Samia Lambton Native Friendship Centre',  42.9730803, -82.4031388,  'Ontario Federation of Indigenous Friendship Centres',  'Cultural Resources Coordinators'],
['Timmins Native Friendship Centre',  48.4706868, -81.3301514,  'Ontario Federation of Indigenous Friendship Centres',  'Cultural Resources Coordinators'],
['Thunderbird Friendship Centre',  49.7206524, -86.9524059,  'Ontario Federation of Indigenous Friendship Centres',  'Cultural Resources Coordinators'],
['Thuder Bay Indian Friendship Centre',  48.4466 ,  -89.2017 ,  'Ontario Federation of Indigenous Friendship Centres',  'Cultural Resources Coordinators'],
['United Native Friendship Centre',  48.6113 ,  -93.3983 ,  'Ontario Federation of Indigenous Friendship Centres',  'Cultural Resources Coordinators'],
['Fort Erie',  42.9018 ,  -78.9722 ,  'Ontario Native Women\'s Association',  'Circles of Childcare program'],
['Sioux Lookout',  50.0978 ,  -91.9220 ,  'Ontario Native Women\'s Association',  'Circles of Childcare program'],
['Midland',  44.7495 ,  -79.8922 ,  'Ontario Native Women\'s Association',  'Circles of Childcare program'],
['Hamilton',  43.2557 ,  -79.8711 ,  'Ontario Native Women\'s Association',  'Circles of Childcare program'],
['Thunder Bay',  48.3809 ,  -89.2477 ,  'Ontario Native Women\'s Association',  'Circles of Childcare program'],
['Toronto',  43.6532 ,  -79.3832 ,  'Ontario Native Women\'s Association',  'Circles of Childcare program'],
['Timmins',  48.4758 ,  -81.3305 ,  'Ontario Native Women\'s Association',  'Circles of Childcare program'],
['Kenora',  49.7670 ,  -94.4894 ,  'Ontario Native Women\'s Association',  'Circles of Childcare program'],
['Ottawa',  45.4215 ,  -75.6972 ,  'Ontario Native Women\'s Association',  'Circles of Childcare program'],
['Ottawa',  45.4215 ,  -75.6972 ,  'Ottawa Inuit Children\'s Centre',  'Family Well-Being Program'],
['Six Nations of the Grand River Territory',  43.074852, -80.110086,  'Six Nations of the Grand River',  'TBC'],
['Ottawa',  45.4215 ,  -75.6972 ,  'Tungasuvvingat Inuit',  'Children, Youth and Family Centre for Inuit - Supporting Inuit Children and Families'],
['Toronto',  43.6532 ,  -79.3832 ,  'Tungasuvvingat Inuit',  'Children, Youth and Family Centre for Inuit - Supporting Inuit Children and Families']
];


    var checkclick = false;

    var markers = L.markerClusterGroup();
    var layerUNION = L.featureGroup.subGroup(markers).addTo(map);
    var layerIro = L.featureGroup.subGroup(markers).addTo(map);
    var layerGrand = L.featureGroup.subGroup(markers).addTo(map);
    var layerMohawk = L.featureGroup.subGroup(markers).addTo(map);
    var layerSauga = L.featureGroup.subGroup(markers).addTo(map);
    var layerAski = L.featureGroup.subGroup(markers).addTo(map);
    var layerSix = L.featureGroup.subGroup(markers).addTo(map);
    var layerMetis = L.featureGroup.subGroup(markers).addTo(map);
    var layerFriend = L.featureGroup.subGroup(markers).addTo(map);
    var layerOttawaInuit = L.featureGroup.subGroup(markers).addTo(map);
    var layerONWA = L.featureGroup.subGroup(markers).addTo(map);
    var layerInuit = L.featureGroup.subGroup(markers).addTo(map);
    var layerIndependant = L.featureGroup.subGroup(markers).addTo(map);

    var checkclick = false


    // var markers = L.markerClusterGroup.layerSupport().addTo(map);
    markers.addTo(map);

    rez.forEach(function(location) {
      var marker = L.marker(new L.LatLng((location[1]), (location[2])));
      marker.bindPopup((location[0]));
      // marker.bindPopup(location.title);
      markers.addLayer(marker);
      // marker.title = location.title;
      marker.title = location[3];
      console.log(marker.title);
      if (marker.title === 'Union of Ontario Indians'){
        // console.log('b');
        layerUNION.addLayer(marker);
      } else if (marker.title === 'Association of Iroquois and Allied Indians'){
        // console.log('c');
          layerIro.addLayer(marker);
      } else if (marker.title === 'Grand Council Treaty #3'){
        layerGrand.addLayer(marker);
        // console.log('d');
      } else if (marker.title === 'Mohawk Council of Akwasasne'){
        layerMohawk.addLayer(marker);
        // console.log('d');
      } else if (marker.title === 'Mississaugas of the New Credit First Nation'){
        layerSauga.addLayer(marker);
        // console.log('d');
      } else if (marker.title === 'Nishnawbe Aski Nation'){
        layerAski.addLayer(marker);
        // console.log('d');
      } else if (marker.title === 'Six Nations of the Grand River'){
        layerSix.addLayer(marker);
        // console.log('d');
      } else if (marker.title === 'Metis Nation of Ontario'){
        layerMetis.addLayer(marker);
        // console.log('d');
      } else if (marker.title === 'Ontario Federation of Indigenous Friendship Centres'){
        layerFriend.addLayer(marker);
        // console.log('d');
      } else if (marker.title === 'Ontario Native Women\'s Association'){
        layerONWA.addLayer(marker);
        // console.log('d');
      } else if (marker.title === 'Ottawa Inuit Children\'s Centre'){
        layerOttawaInuit.addLayer(marker);
        // console.log('d');
      } else if (marker.title === 'Tungasuvvingat Inuit'){
        layerInuit.addLayer(marker);
        // console.log('d');
      } else if (marker.title === 'Independent First Nations'){
        layerIndependant.addLayer(marker);
        // console.log('d');
      } else {
        console.log('e');
      }

      marker.on('click', function () {
        if (checkclick === false){
          sidebar.open(marker.title);
          checkclick = true;
        }else{
          sidebar.close(marker.title);
          checkclick = false;
        }
      });
    });

    var communities = {
      // 'All': markers,
      'Union of Ontario Indians': layerUNION,
      'Association of Iroquois and Allied Indians': layerIro,
      'Grand Council Treaty #3': layerGrand,
      'Independent First Nations': layerIndependant,
      'Mohawk Council of Akwasasne': layerMohawk,
      'Mississaugas of the New Credit First Nation': layerSauga,
      'Nishnawbe Aski Nation': layerAski,
      'Six Nations Of the Grand River': layerSix,
      'Metis Nation of Ontario': layerMetis,
      'Ottawa Inuit Children\'s Centre': layerOttawaInuit,
      'Tungasuvvingat Inuit': layerInuit,
      'Ontario Federation of Indigenous Friendship Centres': layerFriend,
      'Ontario Native Women\'s Association': layerONWA,
  };
    L.control.layers(communities).addTo(map);
    // L.control.layers(null, Iro, Grand, Mohawk, Sauga, Aski, Metis, Friend, Onwa, Inuit, Independent).addTo(map);

    // map.addLayer(markers);
    var sidebar = L.control.sidebar('sidebar').addTo(map);

</script>
