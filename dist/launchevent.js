function onNewMessageComposeHandler(e){setSubject(e)}function onNewAppointmentComposeHandler(e){setSubject(e)}function setSubject(e){Office.context.mailbox.item.subject.setAsync("Set by an event-based add-in!",{asyncContext:e},(function(e){e.status!==Office.AsyncResultStatus.Succeeded&&console.error("Failed to set subject: "+JSON.stringify(e.error)),e.asyncContext.completed()}))}Office.context.platform!==Office.PlatformType.PC&&null!=Office.context.platform||(Office.actions.associate("onNewMessageComposeHandler",onNewMessageComposeHandler),Office.actions.associate("onNewAppointmentComposeHandler",onNewAppointmentComposeHandler));