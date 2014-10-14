var jqueryNoConflict = jQuery;

// begin main function
jqueryNoConflict(document).ready(function(){

    initializeTabletopObject('0An8W63YKWOsxdHlyTVAzQ1RPSGhxZDM5T3NqdU9RcHc');
	
 d3.text("datasortedbyperiod.csv", function(unparsedData)
  {
   var data = d3.csv.parseRows(unparsedData);
   window.data=data
//   console.log(unparsedData);
//   console.log(data);
   }
)});

// pull data from google spreadsheet
function initializeTabletopObject(dataSpreadsheet){
    Tabletop.init({
        key: dataSpreadsheet,
        callback: writeTableWith,
        simpleSheet: true,
        debug: false
    });

	console.log(dataSpreadsheet);
}

// create table headers
function createTableColumns(){

    /* swap out the properties of mDataProp & sTitle to reflect
    the names of columns or keys you want to display.
    Remember, tabletop.js strips out spaces from column titles, which
    is what happens with the More Info column header */

    var tableColumns =   [
		{'mDataProp': 'loanid', 'sTitle': 'loanid', 'sClass': 'center',"bSearchable": false},
		{'mDataProp': 'loanstatus', 'sTitle': 'loanstatus', 'sClass': 'center'},
		{'mDataProp': 'prinbal', 'sTitle': 'prinbal', 'sClass': 'center',"bSearchable": false},
		{'mDataProp': 'month', 'sTitle': 'month', 'sClass': 'center',"bSearchable": false},
		{'mDataProp': 'currmoprinpd', 'sTitle': 'currmoprinpd', 'sClass': 'center',"bSearchable": false},
		{'mDataProp': 'curdueamt', 'sTitle': 'curdueamt', 'sClass': 'center',"bSearchable": false},
		{'mDataProp': 'irb', 'sTitle': 'irb', 'sClass': 'center',"bSearchable": false},
		{'mDataProp': 'pastdueamtpif', 'sTitle': 'pastdueamtpif', 'sClass': 'center',"bSearchable": false},
		{'mDataProp': 'intratepif', 'sTitle': 'intratepif', 'sClass': 'center',"bSearchable": false},
		{'mDataProp': 'period', 'sTitle': 'period', 'sClass': 'center',"bSearchable": false},
	];
    return tableColumns;
}


 
// create the table container and object
function writeTableWith(dataSource){

// create hard-coded javascript object with loan data
console.log(dataSource);
dataSource=[{"loanid":"17325","monthend":"0000-00-00","loanstatus":"90","prinbal":"0","currmoprinpd":"0","currmointpd":"0","curdueamt":"0","irb":"0","pastdueamtpif":"0","intratepif":"0","passid":"0","studentfutureid":"1","period":"248","month":"0","rowNumber":1},{"loanid":"17324","monthend":"0000-00-00","loanstatus":"30","prinbal":"6918.16","currmoprinpd":"33.91","currmointpd":"16.09","curdueamt":"50","irb":"8.58","pastdueamtpif":"50","intratepif":"0.0302","passid":"0","studentfutureid":"1","period":"235","month":"0","rowNumber":2},{"loanid":"17323","monthend":"0000-00-00","loanstatus":"30","prinbal":"7173.36","currmoprinpd":"27.81","currmointpd":"22.19","curdueamt":"50","irb":"11.84","pastdueamtpif":"50","intratepif":"0.0402","passid":"0","studentfutureid":"1","period":"222","month":"0","rowNumber":3},{"loanid":"17322","monthend":"0000-00-00","loanstatus":"30","prinbal":"658.22","currmoprinpd":"46.62","currmointpd":"3.38","curdueamt":"50","irb":"1.7","pastdueamtpif":"50","intratepif":"0.0627","passid":"0","studentfutureid":"1","period":"209","month":"0","rowNumber":4},{"loanid":"17321","monthend":"0000-00-00","loanstatus":"30","prinbal":"3295.95","currmoprinpd":"39.92","currmointpd":"10.08","curdueamt":"50","irb":"5.34","pastdueamtpif":"50","intratepif":"0.0394","passid":"0","studentfutureid":"1","period":"196","month":"0","rowNumber":5},{"loanid":"17320","monthend":"0000-00-00","loanstatus":"33","prinbal":"37088.65","currmoprinpd":"0","currmointpd":"0","curdueamt":"243.98","irb":"137.81","pastdueamtpif":"243.98","intratepif":"0.0377","passid":"0","studentfutureid":"1","period":"183","month":"0","rowNumber":6},{"loanid":"17319","monthend":"0000-00-00","loanstatus":"33","prinbal":"7700.56","currmoprinpd":"0","currmointpd":"50","curdueamt":"99.3","irb":"274.96","pastdueamtpif":"99.3","intratepif":"0.1427","passid":"0.7","studentfutureid":"1","period":"170","month":"0","rowNumber":7},{"loanid":"17318","monthend":"0000-00-00","loanstatus":"30","prinbal":"11686.27","currmoprinpd":"9.5","currmointpd":"87.58","curdueamt":"97.08","irb":"32.01","pastdueamtpif":"97.08","intratepif":"0.0667","passid":"0","studentfutureid":"1","period":"157","month":"0","rowNumber":8},{"loanid":"17317","monthend":"0000-00-00","loanstatus":"73","prinbal":"6392.42","currmoprinpd":"0","currmointpd":"0","curdueamt":"50","irb":"1029.48","pastdueamtpif":"50","intratepif":"0.0302","passid":"0","studentfutureid":"1","period":"144","month":"0","rowNumber":9},{"loanid":"17316","monthend":"0000-00-00","loanstatus":"73","prinbal":"2433.14","currmoprinpd":"0","currmointpd":"0","curdueamt":"50","irb":"481.04","pastdueamtpif":"50","intratepif":"0.0377","passid":"0","studentfutureid":"1","period":"131","month":"0","rowNumber":10},{"loanid":"17315","monthend":"0000-00-00","loanstatus":"73","prinbal":"11775.05","currmoprinpd":"0","currmointpd":"0","curdueamt":"127.03","irb":"6068.51","pastdueamtpif":"127.03","intratepif":"0.1027","passid":"0","studentfutureid":"1","period":"118","month":"0","rowNumber":11},{"loanid":"17314","monthend":"0000-00-00","loanstatus":"30","prinbal":"1889.08","currmoprinpd":"42.68","currmointpd":"7.32","curdueamt":"50","irb":"5.18","pastdueamtpif":"50","intratepif":"0.0502","passid":"0","studentfutureid":"1","period":"105","month":"0","rowNumber":12},{"loanid":"17313","monthend":"0000-00-00","loanstatus":"30","prinbal":"3799.17","currmoprinpd":"42.3","currmointpd":"7.7","curdueamt":"50","irb":"5.51","pastdueamtpif":"50","intratepif":"0.0277","passid":"0","studentfutureid":"1","period":"92","month":"0","rowNumber":13},{"loanid":"17312","monthend":"0000-00-00","loanstatus":"30","prinbal":"21699.79","currmoprinpd":"0","currmointpd":"0","curdueamt":"327.05","irb":"15.98","pastdueamtpif":"327.05","intratepif":"0.0207","passid":"0","studentfutureid":"1","period":"79","month":"0","rowNumber":14},{"loanid":"17311","monthend":"0000-00-00","loanstatus":"33","prinbal":"12726.78","currmoprinpd":"0","currmointpd":"279.54","curdueamt":"137.3","irb":"314.75","pastdueamtpif":"137.3","intratepif":"0.1027","passid":"242.24","studentfutureid":"1","period":"66","month":"0","rowNumber":15},{"loanid":"17310","monthend":"0000-00-00","loanstatus":"73","prinbal":"1285.03","currmoprinpd":"0","currmointpd":"0","curdueamt":"10.12","irb":"463.02","pastdueamtpif":"10.12","intratepif":"0.1027","passid":"0","studentfutureid":"1","period":"53","month":"0","rowNumber":16},{"loanid":"17309","monthend":"0000-00-00","loanstatus":"30","prinbal":"10059.36","currmoprinpd":"182.58","currmointpd":"17.42","curdueamt":"64.08","irb":"14.25","pastdueamtpif":"64.08","intratepif":"0.0207","passid":"135.92","studentfutureid":"1","period":"40","month":"0","rowNumber":17},{"loanid":"17308","monthend":"0000-00-00","loanstatus":"90","prinbal":"0","currmoprinpd":"0","currmointpd":"0","curdueamt":"0","irb":"0","pastdueamtpif":"0","intratepif":"0","passid":"0","studentfutureid":"1","period":"27","month":"0","rowNumber":18},{"loanid":"17307","monthend":"0000-00-00","loanstatus":"90","prinbal":"0","currmoprinpd":"0","currmointpd":"0","curdueamt":"0","irb":"0","pastdueamtpif":"0","intratepif":"0","passid":"0","studentfutureid":"1","period":"14","month":"0","rowNumber":19},{"loanid":"17306","monthend":"0000-00-00","loanstatus":"73","prinbal":"5973.26","currmoprinpd":"0","currmointpd":"0","curdueamt":"50","irb":"1074.95","pastdueamtpif":"50","intratepif":"0.0627","passid":"0","studentfutureid":"1","period":"1","month":"0","rowNumber":20},{"loanid":"73","monthend":"0000-00-00","loanstatus":"33","prinbal":"7294.87","currmoprinpd":"0","currmointpd":"0","curdueamt":"50","irb":"42.22","pastdueamtpif":"50","intratepif":"0.0302","passid":"0","studentfutureid":"1","period":"989","month":"0","rowNumber":21},{"loanid":"72","monthend":"0000-00-00","loanstatus":"33","prinbal":"23266.26","currmoprinpd":"0","currmointpd":"125.49","curdueamt":"150.49","irb":"58.97","pastdueamtpif":"150.49","intratepif":"0.0377","passid":"0","studentfutureid":"1","period":"976","month":"0","rowNumber":22},{"loanid":"71","monthend":"0000-00-00","loanstatus":"40","prinbal":"22261.31","currmoprinpd":"0","currmointpd":"0","curdueamt":"0","irb":"809.33","pastdueamtpif":"0","intratepif":"0.0302","passid":"0","studentfutureid":"1","period":"963","month":"0","rowNumber":23},{"loanid":"69","monthend":"0000-00-00","loanstatus":"33","prinbal":"20187.93","currmoprinpd":"0","currmointpd":"0","curdueamt":"200.01","irb":"266.8","pastdueamtpif":"200.01","intratepif":"0.1027","passid":"0","studentfutureid":"1","period":"950","month":"0","rowNumber":24},{"loanid":"68","monthend":"0000-00-00","loanstatus":"30","prinbal":"20963.11","currmoprinpd":"61.05","currmointpd":"86.69","curdueamt":"147.74","irb":"54.73","pastdueamtpif":"147.74","intratepif":"0.0502","passid":"0","studentfutureid":"1","period":"937","month":"0","rowNumber":25},{"loanid":"67","monthend":"0000-00-00","loanstatus":"33","prinbal":"20970.3","currmoprinpd":"0","currmointpd":"56.02","curdueamt":"131.02","irb":"93.32","pastdueamtpif":"131.02","intratepif":"0.0377","passid":"-50","studentfutureid":"1","period":"924","month":"0","rowNumber":26},{"loanid":"66","monthend":"0000-00-00","loanstatus":"30","prinbal":"16717.27","currmoprinpd":"11.27","currmointpd":"38.73","curdueamt":"50","irb":"20.74","pastdueamtpif":"50","intratepif":"0.0302","passid":"0","studentfutureid":"1","period":"911","month":"0","rowNumber":27},{"loanid":"65","monthend":"0000-00-00","loanstatus":"30","prinbal":"17218.26","currmoprinpd":"51.81","currmointpd":"53.48","curdueamt":"0","irb":"19.55","pastdueamtpif":"0","intratepif":"0.0377","passid":"0","studentfutureid":"1","period":"898","month":"0","rowNumber":28},{"loanid":"64","monthend":"0000-00-00","loanstatus":"30","prinbal":"9446.89","currmoprinpd":"0","currmointpd":"33.84","curdueamt":"58.84","irb":"11.04","pastdueamtpif":"58.84","intratepif":"0.0377","passid":"0","studentfutureid":"1","period":"885","month":"0","rowNumber":29},{"loanid":"63","monthend":"0000-00-00","loanstatus":"73","prinbal":"15265.15","currmoprinpd":"0","currmointpd":"0","curdueamt":"105.99","irb":"1481.63","pastdueamtpif":"105.99","intratepif":"0.0502","passid":"0","studentfutureid":"1","period":"872","month":"0","rowNumber":30},{"loanid":"61","monthend":"0000-00-00","loanstatus":"30","prinbal":"6212.17","currmoprinpd":"0","currmointpd":"60.76","curdueamt":"60.76","irb":"29.25","pastdueamtpif":"60.76","intratepif":"0.0897","passid":"0","studentfutureid":"1","period":"859","month":"0","rowNumber":31},{"loanid":"60","monthend":"0000-00-00","loanstatus":"30","prinbal":"10333.73","currmoprinpd":"23.08","currmointpd":"48.1","curdueamt":"71.18","irb":"14.93","pastdueamtpif":"71.18","intratepif":"0.0377","passid":"0","studentfutureid":"1","period":"846","month":"0","rowNumber":32},{"loanid":"59","monthend":"0000-00-00","loanstatus":"30","prinbal":"10580.57","currmoprinpd":"41.23","currmointpd":"31.74","curdueamt":"72.97","irb":"17.34","pastdueamtpif":"72.97","intratepif":"0.0377","passid":"0","studentfutureid":"1","period":"833","month":"0","rowNumber":33},{"loanid":"58","monthend":"0000-00-00","loanstatus":"20","prinbal":"7700","currmoprinpd":"0","currmointpd":"0","curdueamt":"0","irb":"5236.91","pastdueamtpif":"0","intratepif":"0.1027","passid":"0","studentfutureid":"1","period":"820","month":"0","rowNumber":34},{"loanid":"56","monthend":"0000-00-00","loanstatus":"30","prinbal":"14194.16","currmoprinpd":"65.8","currmointpd":"34.2","curdueamt":"0","irb":"7.04","pastdueamtpif":"0","intratepif":"0.0302","passid":"0","studentfutureid":"1","period":"807","month":"0","rowNumber":35},{"loanid":"55","monthend":"0000-00-00","loanstatus":"30","prinbal":"23875.11","currmoprinpd":"93.51","currmointpd":"76.69","curdueamt":"0","irb":"2.46","pastdueamtpif":"0","intratepif":"0.0377","passid":"0","studentfutureid":"1","period":"794","month":"0","rowNumber":36},{"loanid":"54","monthend":"0000-00-00","loanstatus":"73","prinbal":"36669.63","currmoprinpd":"0","currmointpd":"0","curdueamt":"400.14","irb":"20877.54","pastdueamtpif":"400.14","intratepif":"0.1027","passid":"0","studentfutureid":"1","period":"781","month":"0","rowNumber":37},{"loanid":"53","monthend":"0000-00-00","loanstatus":"91","prinbal":"0","currmoprinpd":"0","currmointpd":"0","curdueamt":"0","irb":"0","pastdueamtpif":"0","intratepif":"0","passid":"0","studentfutureid":"1","period":"768","month":"0","rowNumber":38},{"loanid":"52","monthend":"0000-00-00","loanstatus":"91","prinbal":"0","currmoprinpd":"0","currmointpd":"0","curdueamt":"0","irb":"0","pastdueamtpif":"0","intratepif":"0","passid":"0","studentfutureid":"1","period":"755","month":"0","rowNumber":39},{"loanid":"51","monthend":"0000-00-00","loanstatus":"30","prinbal":"24529.61","currmoprinpd":"112.43","currmointpd":"59.08","curdueamt":"0","irb":"8.11","pastdueamtpif":"0","intratepif":"0.0302","passid":"0","studentfutureid":"1","period":"742","month":"0","rowNumber":40},{"loanid":"49","monthend":"0000-00-00","loanstatus":"90","prinbal":"0","currmoprinpd":"0","currmointpd":"0","curdueamt":"0","irb":"0","pastdueamtpif":"0","intratepif":"0","passid":"0","studentfutureid":"1","period":"729","month":"0","rowNumber":41},{"loanid":"48","monthend":"0000-00-00","loanstatus":"33","prinbal":"20571.41","currmoprinpd":"0","currmointpd":"0","curdueamt":"133.13","irb":"96.52","pastdueamtpif":"133.13","intratepif":"0.0252","passid":"0","studentfutureid":"1","period":"716","month":"0","rowNumber":42},{"loanid":"47","monthend":"0000-00-00","loanstatus":"73","prinbal":"5603.04","currmoprinpd":"0","currmointpd":"0","curdueamt":"50","irb":"1862.42","pastdueamtpif":"50","intratepif":"0.0627","passid":"0","studentfutureid":"1","period":"703","month":"0","rowNumber":43},{"loanid":"46","monthend":"0000-00-00","loanstatus":"73","prinbal":"18190.39","currmoprinpd":"0","currmointpd":"0","curdueamt":"185.05","irb":"2436.4","pastdueamtpif":"185.05","intratepif":"0.1027","passid":"0","studentfutureid":"1","period":"690","month":"0","rowNumber":44},{"loanid":"45","monthend":"0000-00-00","loanstatus":"30","prinbal":"4639.01","currmoprinpd":"39.99","currmointpd":"10.01","curdueamt":"50","irb":"5.44","pastdueamtpif":"50","intratepif":"0.0277","passid":"0","studentfutureid":"1","period":"677","month":"0","rowNumber":45},{"loanid":"44","monthend":"0000-00-00","loanstatus":"30","prinbal":"3518.02","currmoprinpd":"34.15","currmointpd":"15.85","curdueamt":"50","irb":"10.09","pastdueamtpif":"50","intratepif":"0.0582","passid":"0","studentfutureid":"1","period":"664","month":"0","rowNumber":46},{"loanid":"43","monthend":"0000-00-00","loanstatus":"73","prinbal":"22733.25","currmoprinpd":"0","currmointpd":"0","curdueamt":"239.2","irb":"7966.77","pastdueamtpif":"239.2","intratepif":"0.1027","passid":"0","studentfutureid":"1","period":"651","month":"0","rowNumber":47},{"loanid":"42","monthend":"0000-00-00","loanstatus":"73","prinbal":"6648.9","currmoprinpd":"0","currmointpd":"0","curdueamt":"54.14","irb":"1430.86","pastdueamtpif":"54.14","intratepif":"0.0627","passid":"0","studentfutureid":"1","period":"638","month":"0","rowNumber":48},{"loanid":"40","monthend":"0000-00-00","loanstatus":"73","prinbal":"23359.74","currmoprinpd":"0","currmointpd":"0","curdueamt":"170.11","irb":"5192.39","pastdueamtpif":"170.11","intratepif":"0.0377","passid":"0","studentfutureid":"1","period":"625","month":"0","rowNumber":49},{"loanid":"39","monthend":"0000-00-00","loanstatus":"30","prinbal":"30540.48","currmoprinpd":"91.66","currmointpd":"104.34","curdueamt":"193.82","irb":"66.2","pastdueamtpif":"193.82","intratepif":"0.0377","passid":"2.18","studentfutureid":"1","period":"612","month":"0","rowNumber":50},{"loanid":"38","monthend":"0000-00-00","loanstatus":"30","prinbal":"5161.41","currmoprinpd":"28.11","currmointpd":"21.89","curdueamt":"50","irb":"11.94","pastdueamtpif":"50","intratepif":"0.0522","passid":"0","studentfutureid":"1","period":"599","month":"0","rowNumber":51},{"loanid":"36","monthend":"0000-00-00","loanstatus":"10","prinbal":"35033.29","currmoprinpd":"0","currmointpd":"0","curdueamt":"0","irb":"4590.69","pastdueamtpif":"0","intratepif":"0.0302","passid":"0","studentfutureid":"1","period":"586","month":"0","rowNumber":52},{"loanid":"35","monthend":"0000-00-00","loanstatus":"30","prinbal":"29928.77","currmoprinpd":"107.5","currmointpd":"89.9","curdueamt":"197.4","irb":"55.61","pastdueamtpif":"197.4","intratepif":"0.0377","passid":"0","studentfutureid":"1","period":"573","month":"0","rowNumber":53},{"loanid":"34","monthend":"0000-00-00","loanstatus":"30","prinbal":"18531.21","currmoprinpd":"70.64","currmointpd":"44.6","curdueamt":"115.24","irb":"27.59","pastdueamtpif":"115.24","intratepif":"0.0302","passid":"0","studentfutureid":"1","period":"560","month":"0","rowNumber":54},{"loanid":"31","monthend":"0000-00-00","loanstatus":"30","prinbal":"12981.6","currmoprinpd":"45.63","currmointpd":"44.37","curdueamt":"89.14","irb":"25.46","pastdueamtpif":"89.14","intratepif":"0.0377","passid":"0.86","studentfutureid":"1","period":"547","month":"0","rowNumber":55},{"loanid":"29","monthend":"0000-00-00","loanstatus":"50","prinbal":"21874.54","currmoprinpd":"0","currmointpd":"0","curdueamt":"0","irb":"193.61","pastdueamtpif":"0","intratepif":"0.0302","passid":"0","studentfutureid":"1","period":"534","month":"0","rowNumber":56},{"loanid":"28","monthend":"0000-00-00","loanstatus":"30","prinbal":"3726.47","currmoprinpd":"34.29","currmointpd":"15.71","curdueamt":"50","irb":"8.53","pastdueamtpif":"50","intratepif":"0.0517","passid":"0","studentfutureid":"1","period":"521","month":"0","rowNumber":57},{"loanid":"27","monthend":"0000-00-00","loanstatus":"33","prinbal":"20308.31","currmoprinpd":"0","currmointpd":"0","curdueamt":"164.47","irb":"297.96","pastdueamtpif":"164.47","intratepif":"0.0687","passid":"0","studentfutureid":"1","period":"508","month":"0","rowNumber":58},{"loanid":"26","monthend":"0000-00-00","loanstatus":"73","prinbal":"9738.68","currmoprinpd":"0","currmointpd":"0","curdueamt":"83.61","irb":"2760.57","pastdueamtpif":"83.61","intratepif":"0.0627","passid":"0","studentfutureid":"1","period":"495","month":"0","rowNumber":59},{"loanid":"25","monthend":"0000-00-00","loanstatus":"73","prinbal":"21387.48","currmoprinpd":"0","currmointpd":"0","curdueamt":"233.38","irb":"9984.22","pastdueamtpif":"233.38","intratepif":"0.1027","passid":"0","studentfutureid":"1","period":"482","month":"0","rowNumber":60},{"loanid":"24","monthend":"0000-00-00","loanstatus":"30","prinbal":"1281.2","currmoprinpd":"47.45","currmointpd":"2.55","curdueamt":"50","irb":"1.36","pastdueamtpif":"50","intratepif":"0.0252","passid":"0","studentfutureid":"1","period":"469","month":"0","rowNumber":61},{"loanid":"23","monthend":"0000-00-00","loanstatus":"30","prinbal":"11926.46","currmoprinpd":"39.95","currmointpd":"35.75","curdueamt":"75.7","irb":"19.54","pastdueamtpif":"75.7","intratepif":"0.0377","passid":"0","studentfutureid":"1","period":"456","month":"0","rowNumber":62},{"loanid":"22","monthend":"0000-00-00","loanstatus":"30","prinbal":"23461.28","currmoprinpd":"92.91","currmointpd":"36.39","curdueamt":"129.3","irb":"19.88","pastdueamtpif":"129.3","intratepif":"0.0207","passid":"0","studentfutureid":"1","period":"443","month":"0","rowNumber":63},{"loanid":"21","monthend":"0000-00-00","loanstatus":"50","prinbal":"16263.88","currmoprinpd":"0","currmointpd":"0","curdueamt":"0","irb":"41.69","pastdueamtpif":"0","intratepif":"0.0302","passid":"0","studentfutureid":"1","period":"430","month":"0","rowNumber":64},{"loanid":"20","monthend":"0000-00-00","loanstatus":"30","prinbal":"13433.37","currmoprinpd":"22.43","currmointpd":"87.78","curdueamt":"110.21","irb":"41.51","pastdueamtpif":"110.21","intratepif":"0.0627","passid":"0","studentfutureid":"1","period":"417","month":"0","rowNumber":65},{"loanid":"19","monthend":"0000-00-00","loanstatus":"30","prinbal":"14179.18","currmoprinpd":"333.17","currmointpd":"66.83","curdueamt":"0","irb":"1.17","pastdueamtpif":"0","intratepif":"0.0302","passid":"200","studentfutureid":"1","period":"404","month":"0","rowNumber":66},{"loanid":"18","monthend":"0000-00-00","loanstatus":"10","prinbal":"13759.35","currmoprinpd":"0","currmointpd":"0","curdueamt":"0","irb":"1281.67","pastdueamtpif":"0","intratepif":"0.0302","passid":"0","studentfutureid":"1","period":"391","month":"0","rowNumber":67},{"loanid":"17","monthend":"0000-00-00","loanstatus":"30","prinbal":"4034.4","currmoprinpd":"40.23","currmointpd":"9.77","curdueamt":"50","irb":"6","pastdueamtpif":"50","intratepif":"0.0302","passid":"0","studentfutureid":"1","period":"378","month":"0","rowNumber":68},{"loanid":"16","monthend":"0000-00-00","loanstatus":"30","prinbal":"4591.97","currmoprinpd":"39.1","currmointpd":"10.9","curdueamt":"50","irb":"5.92","pastdueamtpif":"50","intratepif":"0.0302","passid":"0","studentfutureid":"1","period":"365","month":"0","rowNumber":69},{"loanid":"15","monthend":"0000-00-00","loanstatus":"30","prinbal":"11770.35","currmoprinpd":"9.11","currmointpd":"119.95","curdueamt":"127.15","irb":"72.64","pastdueamtpif":"127.15","intratepif":"0.1127","passid":"1.91","studentfutureid":"1","period":"352","month":"0","rowNumber":70},{"loanid":"14","monthend":"0000-00-00","loanstatus":"30","prinbal":"16826.2","currmoprinpd":"32.01","currmointpd":"131.16","curdueamt":"163.17","irb":"53.72","pastdueamtpif":"163.17","intratepif":"0.0897","passid":"0","studentfutureid":"1","period":"339","month":"0","rowNumber":71},{"loanid":"13","monthend":"0000-00-00","loanstatus":"30","prinbal":"23619.24","currmoprinpd":"92.34","currmointpd":"68.52","curdueamt":"160.86","irb":"31.69","pastdueamtpif":"160.86","intratepif":"0.0377","passid":"0","studentfutureid":"1","period":"326","month":"0","rowNumber":72},{"loanid":"12","monthend":"0000-00-00","loanstatus":"30","prinbal":"17373.25","currmoprinpd":"360.6","currmointpd":"89.4","curdueamt":"0","irb":"1.79","pastdueamtpif":"0","intratepif":"0.0377","passid":"150","studentfutureid":"1","period":"313","month":"0","rowNumber":73},{"loanid":"11","monthend":"0000-00-00","loanstatus":"33","prinbal":"34232.11","currmoprinpd":"0","currmointpd":"0","curdueamt":"253.12","irb":"183.68","pastdueamtpif":"253.12","intratepif":"0.0417","passid":"0","studentfutureid":"1","period":"300","month":"0","rowNumber":74},{"loanid":"9","monthend":"0000-00-00","loanstatus":"73","prinbal":"7130.88","currmoprinpd":"0","currmointpd":"0","curdueamt":"76.93","irb":"2645.48","pastdueamtpif":"76.93","intratepif":"0.1027","passid":"0","studentfutureid":"1","period":"287","month":"0","rowNumber":75},{"loanid":"8","monthend":"0000-00-00","loanstatus":"30","prinbal":"959.95","currmoprinpd":"47.64","currmointpd":"2.36","curdueamt":"50","irb":"1.24","pastdueamtpif":"50","intratepif":"0.0302","passid":"0","studentfutureid":"1","period":"274","month":"0","rowNumber":76},{"loanid":"1","monthend":"0000-00-00","loanstatus":"30","prinbal":"13917.99","currmoprinpd":"45.44","currmointpd":"44.69","curdueamt":"90.13","irb":"24.42","pastdueamtpif":"90.13","intratepif":"0.0402","passid":"0","studentfutureid":"1","period":"261","month":"0","rowNumber":77}]
console.log(dataSource);
    jqueryNoConflict('#demo').html('<table cellpadding="0" cellspacing="0" border="0" class="display table table-bordered table-striped" id="data-table-container"></table>');

    var oTable = jqueryNoConflict('#data-table-container').dataTable({
		'sPaginationType': 'bootstrap',
		'iDisplayLength': 100,
        'aaData': dataSource,
        'aoColumns': createTableColumns(),
        'oLanguage': {
            'sLengthMenu': '_MENU_ records per page'
        }
    });


	
//click to td to choose graphed variable
$('td').click(function () {
	columnToDisplay = this.cellIndex;
	
		if(window.savedtd == 'undefined'){
		var dummy=1;
	}
	else{
		$(window.savedtd).toggleClass('highlight');
	}
	window.savedtd=this;
  $(this).toggleClass('highlight');
  });
//click function
$('tr').click(function () {
//remove previous highlight on click
	if(window.savedState == 'undefined'){
		var dummy=1;
	}
	else{
		$(window.savedState).toggleClass('highlight_row');
	}
	window.savedState=this;
  $(this).toggleClass('highlight_row');
  var period = $(this).find("td:last").html();
  columnID = columnToDisplay+1;
  GraphedVariableDictionary=['Loan Id', 'Loan Status', 'Principle Balance', 'Month', 'Current mo prin pd', 'Current Due Amount', 'irb', 'pastdueamtpif','Student Future id', 'period']
  loanData=[GraphedVariableDictionary[columnID-1],window.data[period][columnID],window.data[+period+1][columnID],window.data[+period+2][columnID],window.data[+period+3][columnID],window.data[+period+4][columnID],window.data[+period+5][columnID],window.data[+period+6][columnID],window.data[+period+7][columnID],window.data[+period+8][columnID],window.data[+period+9][columnID],window.data[+period+10][columnID],window.data[+period+11][columnID],window.data[+period+12][columnID]]
//generate chart of data
var chart = c3.generate({
    data: {
        xs: {
            setosa: 'Principle Balance',
        },
        columns: [
            [loanData],
            ["setosa", 0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.3, 0.2, 0.2, 0.1, 0.2, 0.2, 0.1, 0.1, 0.2, 0.4, 0.4, 0.3, 0.3, 0.3, 0.2, 0.4, 0.2, 0.5, 0.2, 0.2, 0.4, 0.2, 0.2, 0.2, 0.2, 0.4, 0.1, 0.2, 0.2, 0.2, 0.2, 0.1, 0.2, 0.2, 0.3, 0.3, 0.2, 0.6, 0.4, 0.3, 0.2, 0.2, 0.2, 0.2],
        ],
        type: 'scatter'
    },
    axis: {
        x: {
            label: 'Principle Balance',
            tick: {
                fit: false
            }
        },
        y: {
            label: 'setosa'
        }
    }
});

});
//generate first chart before click
(function() {
		loanData=['data1', 13917,13872,13828,13784,13740,13695,13651,13606,13561,13516,13471,13425,13380]
	var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
    })();
	var chart = c3.generate({
			data: {
			columns: [loanData],
			type: 'line'
    }
});
	};

//define two custom functions (asc and desc) for string sorting
jQuery.fn.dataTableExt.oSort['string-case-asc']  = function(x,y) {
	return ((x < y) ? -1 : ((x > y) ?  0 : 0));
};

jQuery.fn.dataTableExt.oSort['string-case-desc'] = function(x,y) {
	return ((x < y) ?  1 : ((x > y) ? -1 : 0));
};