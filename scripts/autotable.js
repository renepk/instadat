var jqueryNoConflict = jQuery;

// begin main function
jqueryNoConflict(document).ready(function(){

/** d3.text("blanktable.csv", function(unparsedData)
  {
   var data = d3.csv.parseRows(unparsedData);
   window.data=data
	console.log(unparsedData);
   console.log(data);
}
)});
**/
//create columns and choose which columns to graph and which is searchable
var columnsString = 'Deal,newindex,period,settle_date,IssuerName,AssetName,IntexUniqueID,SPREAD,GrossCoupon,Maturity,BalanceMM,IndustryMD,IndustrySP,CURRENCY,RATING_MOODY,RATING_SP,Defaulted,LoanFacilitySize,Price,suspectedPrepay,Defaulted1,Defaulted2,Defaulted3,Defaulted4,Defaulted5,Defaulted6,Defaulted7,Defaulted8,Defaulted9,Defaulted10,Defaulted11,Defaulted12,suspectedPrepay1,suspectedPrepay2,suspectedPrepay3,suspectedPrepay4,suspectedPrepay5,suspectedPrepay6,suspectedPrepay7,suspectedPrepay8,suspectedPrepay9,suspectedPrepay10,suspectedPrepay11,suspectedPrepay12,newmaturity,newmaturityperiod,timetomaturity,Priced1m,Priced3m,Priced6m,Priced12m,US_HY_Bonds,US_IG_Bonds,BB_WW_Dev_Sov_D,US_MBS,LIBOR_6M,GS_Commodities,Eur_Stocks,SandP,Retail_Volumes,Unemployment,Int_Rate_1_Y_F,DepositsandSavings,Small_Stocks,Libor_Diff_1M,Libor_Diff_3M,Libor_Diff_6M,Libor_Diff_12M,end1,end3,end6,end12';
columns=columnsString.split(',');
console.log(columns)
    var tableColumns =   [
		{'mDataProp': columns[0], 'sTitle': columns[0], 'sClass': 'center'},
		{'mDataProp': columns[1], 'sTitle': columns[1], 'sClass': 'center'},
		{'mDataProp': columns[2], 'sTitle': columns[2], 'sClass': 'center'},
		{'mDataProp': columns[3], 'sTitle': columns[3], 'sClass': 'center',"bSearchable": false},
		{'mDataProp': columns[4], 'sTitle': columns[4], 'sClass': 'center',"bSearchable": false},
		{'mDataProp': columns[5], 'sTitle': columns[5], 'sClass': 'center',"bSearchable": false},
	];
// create hard-coded javascript object with loan data
dataSource = [
  {
    "Deal":1,
    "newindex":2,
    "period":3,
    "settle_date":4,
    "IssuerName":5,
    "AssetName":6,
    "IntexUniqueID":7,
    "SPREAD":8,
    "GrossCoupon":9,
    "Maturity":10,
    "BalanceMM":11,
    "IndustryMD":12,
    "IndustrySP":13,
    "CURRENCY":14,
    "RATING_MOODY":15,
    "RATING_SP":16,
    "Defaulted":17,
    "LoanFacilitySize":18,
    "Price":19,
    "suspectedPrepay":20,
    "Defaulted1":21,
    "Defaulted2":22,
    "Defaulted3":23,
    "Defaulted4":24,
    "Defaulted5":25,
    "Defaulted6":26,
    "Defaulted7":27,
    "Defaulted8":28,
    "Defaulted9":29,
    "Defaulted10":30,
    "Defaulted11":31,
    "Defaulted12":32,
    "suspectedPrepay1":33,
    "suspectedPrepay2":34,
    "suspectedPrepay3":35,
    "suspectedPrepay4":36,
    "suspectedPrepay5":37,
    "suspectedPrepay6":38,
    "suspectedPrepay7":39,
    "suspectedPrepay8":40,
    "suspectedPrepay9":41,
    "suspectedPrepay10":42,
    "suspectedPrepay11":43,
    "suspectedPrepay12":44,
    "newmaturity":45,
    "newmaturityperiod":46,
    "timetomaturity":47,
    "Priced1m":48,
    "Priced3m":49,
    "Priced6m":50,
    "Priced12m":51,
    "US_HY_Bonds":52,
    "US_IG_Bonds":53,
    "BB_WW_Dev_Sov_D":54,
    "US_MBS":55,
    "LIBOR_6M":56,
    "GS_Commodities":57,
    "Eur_Stocks":58,
    "SandP":59,
    "Retail_Volumes":60,
    "Unemployment":61,
    "Int_Rate_1_Y_F":62,
    "DepositsandSavings":63,
    "Small_Stocks":64,
    "Libor_Diff_1M":65,
    "Libor_Diff_3M":66,
    "Libor_Diff_6M":67,
    "Libor_Diff_12M":68,
    "end1":69,
    "end3":70,
    "end6":71,
    "end12":72
  },
  {
    "Deal":2,
    "newindex":3,
    "period":4,
    "settle_date":5,
    "IssuerName":6,
    "AssetName":7,
    "IntexUniqueID":8,
    "SPREAD":9,
    "GrossCoupon":10,
    "Maturity":11,
    "BalanceMM":12,
    "IndustryMD":13,
    "IndustrySP":14,
    "CURRENCY":15,
    "RATING_MOODY":16,
    "RATING_SP":17,
    "Defaulted":18,
    "LoanFacilitySize":19,
    "Price":20,
    "suspectedPrepay":21,
    "Defaulted1":22,
    "Defaulted2":23,
    "Defaulted3":24,
    "Defaulted4":25,
    "Defaulted5":26,
    "Defaulted6":27,
    "Defaulted7":28,
    "Defaulted8":29,
    "Defaulted9":30,
    "Defaulted10":31,
    "Defaulted11":32,
    "Defaulted12":33,
    "suspectedPrepay1":34,
    "suspectedPrepay2":35,
    "suspectedPrepay3":36,
    "suspectedPrepay4":37,
    "suspectedPrepay5":38,
    "suspectedPrepay6":39,
    "suspectedPrepay7":40,
    "suspectedPrepay8":41,
    "suspectedPrepay9":42,
    "suspectedPrepay10":43,
    "suspectedPrepay11":44,
    "suspectedPrepay12":45,
    "newmaturity":46,
    "newmaturityperiod":47,
    "timetomaturity":48,
    "Priced1m":49,
    "Priced3m":50,
    "Priced6m":51,
    "Priced12m":52,
    "US_HY_Bonds":53,
    "US_IG_Bonds":54,
    "BB_WW_Dev_Sov_D":55,
    "US_MBS":56,
    "LIBOR_6M":57,
    "GS_Commodities":58,
    "Eur_Stocks":59,
    "SandP":60,
    "Retail_Volumes":61,
    "Unemployment":62,
    "Int_Rate_1_Y_F":63,
    "DepositsandSavings":64,
    "Small_Stocks":65,
    "Libor_Diff_1M":66,
    "Libor_Diff_3M":67,
    "Libor_Diff_6M":68,
    "Libor_Diff_12M":69,
    "end1":70,
    "end3":71,
    "end6":72,
    "end12":73
  },
  {
    "Deal":3,
    "newindex":4,
    "period":5,
    "settle_date":6,
    "IssuerName":7,
    "AssetName":8,
    "IntexUniqueID":9,
    "SPREAD":10,
    "GrossCoupon":11,
    "Maturity":12,
    "BalanceMM":13,
    "IndustryMD":14,
    "IndustrySP":15,
    "CURRENCY":16,
    "RATING_MOODY":17,
    "RATING_SP":18,
    "Defaulted":19,
    "LoanFacilitySize":20,
    "Price":21,
    "suspectedPrepay":22,
    "Defaulted1":23,
    "Defaulted2":24,
    "Defaulted3":25,
    "Defaulted4":26,
    "Defaulted5":27,
    "Defaulted6":28,
    "Defaulted7":29,
    "Defaulted8":30,
    "Defaulted9":31,
    "Defaulted10":32,
    "Defaulted11":33,
    "Defaulted12":34,
    "suspectedPrepay1":35,
    "suspectedPrepay2":36,
    "suspectedPrepay3":37,
    "suspectedPrepay4":38,
    "suspectedPrepay5":39,
    "suspectedPrepay6":40,
    "suspectedPrepay7":41,
    "suspectedPrepay8":42,
    "suspectedPrepay9":43,
    "suspectedPrepay10":44,
    "suspectedPrepay11":45,
    "suspectedPrepay12":46,
    "newmaturity":47,
    "newmaturityperiod":48,
    "timetomaturity":49,
    "Priced1m":50,
    "Priced3m":51,
    "Priced6m":52,
    "Priced12m":53,
    "US_HY_Bonds":54,
    "US_IG_Bonds":55,
    "BB_WW_Dev_Sov_D":56,
    "US_MBS":57,
    "LIBOR_6M":58,
    "GS_Commodities":59,
    "Eur_Stocks":60,
    "SandP":61,
    "Retail_Volumes":62,
    "Unemployment":63,
    "Int_Rate_1_Y_F":64,
    "DepositsandSavings":65,
    "Small_Stocks":66,
    "Libor_Diff_1M":67,
    "Libor_Diff_3M":68,
    "Libor_Diff_6M":69,
    "Libor_Diff_12M":70,
    "end1":71,
    "end3":72,
    "end6":73,
    "end12":74
  }
];
	console.log(dataSource);
    jqueryNoConflict('#demo').html('<table cellpadding="0" cellspacing="0" border="0" class="display table table-bordered table-striped" id="data-table-container"></table>');
//create table
    var oTable = jqueryNoConflict('#data-table-container').dataTable({
		'sPaginationType': 'bootstrap',
		'iDisplayLength': 100,
        'aaData': dataSource,
        'aoColumns': tableColumns,
        'oLanguage': {
            'sLengthMenu': '_MENU_ records per page'
        }
    });
	oTable.columnFilter();
	var chart = c3.generate({
	    size: {
        height: 300,
        width: 600
    },
    data: {
        columns: [
            ['data1', 73, 92, 52],
            ['data2', 27, 8, 48],
        ],
        type: 'bar',
        groups: [
            ['Yes', 'No']
        ]
    },
    grid: {
        y: {
            lines: [{value:0}]
        }
    }
});
var linechart = c3.generate({
    size: {
        height: 300,
        width: 600
    },
	bindto: "#linechart",
    data: {
        columns: [
			['data1', 73, 92, 52],
            ['confidenceintervalupper', 75,96,60],
			['confidenceintervallower', 70,85,40],
        ],
        regions: {
            'confidenceintervalupper': [{'start':0, 'end':3, 'style':'dashed'}], // currently 'dashed' style only
            'confidenceintervallower': [{'start':0}]
        }
    }

});

setTimeout(function () {
    chart.groups([['data1', 'data2']])
}, 3000);
});