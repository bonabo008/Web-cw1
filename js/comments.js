
if (getObject('cmtlist') === null) {
	var cmtlist = '';
} else {
	var cmtlist = getObject('cmtlist');
	$('#cmtlist').empty();
	$('#cmtlist').append(cmtlist);
};


// utility functions for localstorage
function setObject(key, value) {
	window.localStorage.setItem(key, JSON.stringify(value));
};

function getObject(key) {
	var storage = window.localStorage;
	var value = storage.getItem(key);
	return value && JSON.parse(value);
};

function clearStorage() {
	// removes everything placed in localstorage
	if (confirm('Clear all comments?')) {
		localStorage.clear();
		document.location.reload();
	} else {
		return false;
	}
};

function clearComment() {
	
	// Clear all comments if user enters "CLEAR"
	if ($('#txt1').val() === 'CLEAR ALL COMMENTS'){
		clearStorage()
		$('#txt1').val('');
		$('#namebox').val('');
	};
		$('#txt1').val('');
		$('#namebox').val('');
};

function saveComment() {
	var ctext = $('#txt1').val();
	var cname = $('#namebox').val();
	
	// Sets blank name to Anon
	if (cname === 'Name' || (cname.trim().length == 0)) { 
		cname = 'Anon';
	}
	
	// Alerts if no comment is entered
    if (ctext.trim().length === 0) {
        alert('No comment entered.');
        return false;
    }
	

	// Add the name and comment to the comments section
	var cmtlist = $('#cmtlist').html();
	cmtlist = '<p><span class="cmtname">' + cname + ": " + '</span>' + ctext + '</p>' + cmtlist;

	// appends comment to comment list
	$('#cmtlist').empty();
	$('#cmtlist').append(cmtlist);
	
	// Set default field values
	$('#txt1').val("");
	$('#namebox').val("Name");

	setObject('cmtlist', cmtlist);
	
};