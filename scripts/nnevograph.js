var jqueryNoConflict = jQuery;

// begin main function
jqueryNoConflict(document).ready(function(){

/** d3.text("nnevosampledata.csv", function(unparsedData)
  {
   var data = d3.csv.parseRows(unparsedData);
   window.data=data
//   console.log(unparsedData);
//   console.log(data);
   }
)});**/
//create columns and choose which columns to graph and which is searchable
    var tableColumns =   [
		{'mDataProp': 'id', 'sTitle': 'ID', 'sClass': 'center'},
		{'mDataProp': 'time', 'sTitle': 'Time', 'sClass': 'center'},
		{'mDataProp': 'column', 'sTitle': 'Column', 'sClass': 'center'},
		{'mDataProp': 'value', 'sTitle': 'Value', 'sClass': 'center',"bSearchable": false},
		{'mDataProp': 'value type', 'sTitle': 'Value Type', 'sClass': 'center',"bSearchable": false},
		{'mDataProp': 'rowNumber', 'sTitle': 'Row Number', 'sClass': 'center',"bSearchable": false},
	];
// create hard-coded javascript object with loan data
	dataSource=[{"id":"1","time":"0","column":"90","value":"73","value type":"1","indexidcol":"1","rowNumber":1},{"id":"1","time":"1","column":"90","value":"27","value type":"2","indexidcol":"2","rowNumber":2},{"id":"1","time":"2","column":"90","value":"92","value type":"1","indexidcol":"2","rowNumber":3},{"id":"1","time":"3","column":"90","value":"8","value type":"2","indexidcol":"2","rowNumber":4},{"id":"1","time":"4","column":"90","value":"52","value type":"1","indexidcol":"2","rowNumber":5},{"id":"1","time":"5","column":"90","value":"48","value type":"2","indexidcol":"2","rowNumber":6}]
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
        height: 200,
        width: 1200
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
        height: 200,
        width: 1200
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