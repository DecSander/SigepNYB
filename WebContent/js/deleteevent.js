sendRequest('GET', 'Roles', null, 'json', true, null, function(roles) {
  var createPermission = roles.hasMatch(function(role) {
    return role.role === 'VP of Programming';
  });
  if (!createPermission) {
    swal({
      title: "Sorry, you don't have permission to delete events",
      text: "Talk to the VP of Programming to delete an event",
      type: 'error',
      closeOnConfirm: true
    }, function(isConfirm) {
      window.location.href = '/Fratsite/dashboard.html';
    })
  }
});

function deleteEvent() {
  var eventId = document.getElementById('eventId').value;
  return sendDelete(eventId);
}

/**
 * Sends a delete event request to the server
 * @param {number} eventId - ID Number of event
 * @returns {undefined}
 */
function sendDelete(eventId) {
  var data = {eventId: eventId};
  sendRequest('DELETE', 'Event', data, 'text', true, null, function() {
    swal({
      title: 'Event Deleted',
      type: 'success',
      confirmButtonText: 'Delete More Events',
      showCancelButton: true,
      cancelButtonText: 'Go To Dashboard',
      closeOnConfirm: true,
      closeOnCancel: true
    }, function(isConfirm) {
      if (isConfirm) clearIds(['eventId']);
      else window.location.href = 'dashboard.html';
    });
  }, function() {
    swal({
      title: 'Event Deletion Failed',
      text: 'Please make sure the event ID is correct',
      type: 'error',
      closeOnConfirm: true
    });
  });
}