function html_entity_decode(message) {
  return message.replace(/[<>'"]/g, function(m) {
    return '&' + {
      '\'': 'apos',
      '"': 'quot',
      '&': 'amp',
      '<': 'lt',
      '>': 'gt',
    }[m] + ';';
  });
}